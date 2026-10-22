import { NextResponse } from "next/server";
import { getFleetContent } from "../../lib/fleetContent";
import { contentStatusPayload } from "../../lib/fleet/status";
import { SHOW_CIGARETTES } from "../../lib/showCigarettes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Diagnostic only. Version, manifest mode, and the coded cigarette switch. No secrets and no env values. */
export async function GET() {
  const fleet = await getFleetContent();
  return NextResponse.json(contentStatusPayload(fleet, {
    web: SHOW_CIGARETTES,
    tv: SHOW_CIGARETTES,
    guides: SHOW_CIGARETTES,
  }), { headers: { "Cache-Control": "no-store" } });
}
