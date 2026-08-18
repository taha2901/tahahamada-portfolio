# SallaX screenshots

Captured from the running app on an Android emulator at 1080×2340 with live data and EGP
prices, then downscaled to 720px wide and converted to WebP (2.9 MB as PNG → 538 KB as
WebP for the same 13 shots; the gallery loads every thumbnail, so the PNGs were the whole
page weight).

Source of the originals: `d:\Flutter Apps\my real projects\real_ecommerce\portfolio-shots\`

Gallery order lives in the `gallery` array of the `sallax` entry in `data/projects.ts`, one
object per shot (`src`, `caption_ar`, `caption_en`, `orientation`):

| # | File | Caption |
|---|------|---------|
| 1 | `01-home.webp` | Home — promo banner, categories and featured products (also the card cover) |
| 2 | `02-product-details.webp` | Product details — stock-driven colour/size selection |
| 3 | `03-search.webp` | Search — live API results |
| 4 | `04-cart.webp` | Cart — subtotal / shipping / tax summary |
| 5 | `07-address-map.webp` | Delivery point on an OpenStreetMap map |
| 6 | `08-my-addresses.webp` | Address book persisted in SQLite |
| 7 | `10-payment-success.webp` | Order confirmation |
| 8 | `11-orders.webp` | Orders — processing and delivered |
| 9 | `12-wishlist.webp` | Wishlist |
| 10 | `13-offers.webp` | Coupons |
| 11 | `14-profile.webp` | Profile |
| 12 | `15-login.webp` | Sign in |
| 13 | `17-onboarding.webp` | Onboarding |

## Adding more shots later

Drop the file here and add one entry to the `gallery` array — no component change. Landscape
desktop shots (1600×900) take `orientation: "landscape"`; the gallery stage has a fixed
height and letterboxes both orientations, so mixing them does not shift the layout. A file
listed in the array but missing on disk is skipped silently at runtime.

After adding images, restart `npm run dev` — Next reads `public/` once at startup.
