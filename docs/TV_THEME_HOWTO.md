# TV store themes

The TV theme layer is data-driven. A store theme changes only the visual shell around the existing `/tv` and `/tv2` boards. Menu data, prices, feeds, cards, promotions, tickers, animations, timers, refresh logic, and routes remain owned by the existing TV components.

## Add a store theme

1. Create `public/tv-theme/<store-code-lowercase>/`.
2. Add these four optimized assets:
   - `header.webp`
   - `background.webp`
   - `corner-left.png`
   - `corner-right.png`
3. Keep every asset below 500 KB. Preserve transparency in the two corner PNGs.
4. Add one entry to `TV_THEMES` in `app/tv-theme/theme.ts`, keyed by the store code already used by `tvHiring.store`.
5. Fill every theme field: `headerImage`, `backgroundImage`, optional corners, colors, slogans, and footer copy.
6. Run lint, typecheck, build, and the TV theme tests.
7. Verify `/tv` and `/tv2` at 1920×1080 and 3840×2160. Confirm there is no scrolling or overlap and compare item counts, prices, promotions, animations, and timers with the unthemed baseline.

No page-specific or store-specific CSS is required. A store without a `TV_THEMES` entry follows the existing unthemed rendering path.
