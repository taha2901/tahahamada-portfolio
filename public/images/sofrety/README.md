# Sofrety screenshots

Captured on an Android emulator at 1080×2340 (`adb exec-out screencap -p`), then downscaled
to 720px wide and converted to WebP — the food photography does not compress well as PNG
(3.2 MB total as PNG vs 605 KB as WebP for the same 14 shots).

Source of the originals: `d:\Flutter Apps\my real projects\food_delivery_app\portfolio-shots\`

Gallery order used in `data/projects.ts` (the card cover is `/images/sofrety/soferty.png`, the
existing mockup — the phone shots are too tall to crop into the 16/10 card frame):

| # | File | Caption |
|---|------|---------|
| 1 | `../soferty.png` | Sofrety — a Flutter food-delivery client on Firebase (card cover) |
| 2 | `01-home.webp` | Home — banner, categories, featured and nearby restaurants |
| 3 | `02-restaurant.webp` | Restaurant page — hero header, menu tabs, add-to-cart |
| 4 | `03-restaurant-menu.webp` | Menu sections with quantity steppers and the sticky cart bar |
| 5 | `04-cart.webp` | Cart — line items, fees, total and payment method |
| 6 | `15-orders.webp` | Orders — live order with progress bar, plus past orders |
| 7 | `08-order-tracking.webp` | Order tracking — four stages, driver details, chat button |
| 8 | `09-chat.webp` | Driver chat |
| 9 | `16-active-orders-sheet.webp` | Active orders sheet |
| 10 | `10-search.webp` | Search — highlighted query and category chips |
| 11 | `11-favorites.webp` | Favourites |
| 12 | `12-profile.webp` | Profile — addresses, payment methods, settings |
| 13 | `05-address-location.webp` | Address editing with "use current location" |
| 14 | `13-login.webp` | Sign-in (Arabic UI) |
| 15 | `14-splash.webp` | Splash screen |

Missing: the checkout review and the Stripe payment screen (`06-checkout`, `07-payment` in
the case-study captions table) were never captured — the payment flow currently has no
screenshot in the gallery.

Note: `02`, `03`, `05`, `11`, `16` were captured with the emulator's focus border visible
(a thin green outline around the frame).

After adding images here, restart `npm run dev` — Next reads `public/` once at startup.
