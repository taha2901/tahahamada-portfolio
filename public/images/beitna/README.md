# Beitna screenshots

30 screenshots captured at 1080×2340 (9:19.5), downscaled to 720px wide and converted to
WebP — 5.9 MB as PNG became 1.0 MB as WebP, which matters because the gallery loads every
thumbnail. The numbers in the shots are sample data in EGP, not real records.

Source of the originals: `d:\Flutter Apps\my real projects\beitna\screenshots\`

`00-app-icon.png` is kept as a PNG and is **not** part of the gallery — it is the app icon,
available if the card or a logo slot ever needs it. The project card cover stays
`/images/beitna.png` (the existing mockup); the phone shots are too tall for the card's
16/10 crop.

## Gallery

The order, captions and tabs live in the `gallery` array of the `beitna` entry in
`data/projects.ts`. The shots are split into two tabs by their `group_ar` / `group_en`
fields, which the gallery turns into tab chips automatically:

| Tab | Files | Shows |
|-----|-------|-------|
| عربي (RTL) / Arabic (RTL) | `01`–`26` | the Arabic, right-to-left UI |
| إنجليزي (LTR) / English (LTR) | `27`–`30` | the same screens in English, left-to-right |

| # | File | Caption |
|---|------|---------|
| 01 | `01-onboarding.webp` | Onboarding screen |
| 02 | `02-dashboard-top.webp` | Dashboard — monthly total & quick stats |
| 03 | `03-dashboard-mid.webp` | Dashboard — budget, goals & categories |
| 04 | `04-dashboard-bottom.webp` | Dashboard — recent transactions |
| 05 | `05-expenses-list.webp` | Expenses list with search & filters |
| 06 | `06-expenses-scrolled.webp` | Expenses — full transaction history |
| 07 | `07-expenses-filter-week.webp` | Filtering expenses by period |
| 08 | `08-add-expense.webp` | Add expense — amount & category |
| 09 | `09-add-expense-filled.webp` | Add expense — filled form |
| 10 | `10-add-expense-receipt-save.webp` | Attach receipt & save |
| 11 | `11-analytics-top.webp` | Analytics — highlights & insights |
| 12 | `12-analytics-trend.webp` | Analytics — spending trend & category split |
| 13 | `13-analytics-breakdown.webp` | Analytics — full category breakdown |
| 14 | `14-analytics-period-picker.webp` | Analytics period picker |
| 15 | `15-budget-overview.webp` | Monthly budget — 89% alert & daily guide |
| 16 | `16-budget-set-sheet.webp` | Set budget sheet |
| 17 | `17-goals-overview.webp` | Savings goals — summary & cards |
| 18 | `18-goals-list.webp` | Goals — active, almost done & completed |
| 19 | `19-goal-add-amount-sheet.webp` | Add amount to a goal |
| 20 | `20-goal-create-sheet.webp` | Create a new savings goal |
| 21 | `21-settings-top.webp` | Settings — preferences |
| 22 | `22-settings-data.webp` | Settings — data management |
| 23 | `23-currency-picker.webp` | Currency picker — 21 currencies |
| 24 | `24-export-sheet.webp` | Export data — CSV or PDF |
| 25 | `25-privacy-policy.webp` | Privacy policy |
| 26 | `26-terms-of-service.webp` | Terms of service |
| 27 | `27-settings-en.webp` | Settings in English (LTR) |
| 28 | `28-dashboard-en.webp` | Dashboard in English |
| 29 | `29-analytics-en.webp` | Analytics in English |
| 30 | `30-analytics-en-breakdown.webp` | Category breakdown in English |

Adding a shot later is one entry in the array — no component change. A file listed there but
missing on disk is skipped silently at runtime.

After adding images, restart `npm run dev` — Next reads `public/` once at startup.
