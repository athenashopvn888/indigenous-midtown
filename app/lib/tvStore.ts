import { gbpLocation } from "./gbp-location";
import { cannabisStoreJsonLd } from "./storeIdentity";

type OpeningHours = {
  dayOfWeek: readonly string[];
  opens: string;
  closes: string;
};

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function readOpeningHours(): OpeningHours[] {
  const spec = cannabisStoreJsonLd().openingHoursSpecification;
  if (!Array.isArray(spec)) return [];
  return spec.map((row) => {
    const days = row.dayOfWeek;
    const dayOfWeek = Array.isArray(days) ? days.map(String) : days ? [String(days)] : [];
    return {
      dayOfWeek,
      opens: String(row.opens ?? ""),
      closes: String(row.closes ?? ""),
    };
  });
}

function clockMinutes(value: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours === 24 && minutes === 0) return 24 * 60;
  if (hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

function coversAllDay(opens: string, closes: string) {
  const open = clockMinutes(opens);
  const close = clockMinutes(closes);
  if (open == null || close == null) return false;
  return open === 0 && (close >= 23 * 60 + 59 || close === 24 * 60);
}

/** True only when every weekday is covered by an all-day window. */
export function isOpen24Hours7Days(specs: readonly OpeningHours[] = readOpeningHours()) {
  if (specs.length === 0) return false;
  const covered = new Set<string>();
  for (const spec of specs) {
    if (!coversAllDay(spec.opens, spec.closes)) return false;
    for (const day of spec.dayOfWeek) covered.add(day);
  }
  return WEEKDAYS.every((day) => covered.has(day));
}

const shortAddress = [gbpLocation.streetAddress, gbpLocation.city].filter(Boolean).join(", ");
const hours = (gbpLocation.hours ?? []).map((line) => line.trim()).filter(Boolean).join(" · ");

export const tvStore = {
  name: gbpLocation.storeName,
  shortAddress,
  hours,
  open24Hours7Days: isOpen24Hours7Days(),
};
