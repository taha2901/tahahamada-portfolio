# LearnFlow screenshots

20 screenshots captured at 1080×2340 (9:19.5), downscaled to 720px wide and converted to
WebP — 6.7 MB as PNG became 746 KB, which matters because the gallery loads every thumbnail.

Source of the originals: `d:\Flutter Apps\my real projects\e_learning\screenshots\`

These shots render inside a phone mockup: the `learnflow` entry in `data/projects.ts` sets
`phoneFrame: true`, and the gallery draws portrait shots in a 9:19.5 bezel — the screenshots'
native ratio, so nothing is cropped or stretched. The card cover stays `/images/e_learning.png`.

## Sections

Each gallery entry carries `group_ar` / `group_en`, which the gallery turns into filter chips
(plus an "All" chip that opens first):

| Section | Files |
|---------|-------|
| Authentication / المصادقة | `01`–`04` |
| Home & Discovery / الرئيسية والاستكشاف | `05`–`07` |
| Course Details / تفاصيل الكورس | `08`, `09`, `10`, `13` |
| Reviews & Ratings / التقييمات والمراجعات | `11`, `12` |
| Video Player / مشغّل الفيديو | `14`–`16` |
| Learning Progress / متابعة التعلّم | `17`, `18` |
| Profile / الملف الشخصي | `19`, `20` |

Gallery order follows the sections above, so `13_course_details_enrolled` sits with the other
course-detail shots and `11`/`12` follow in the reviews section.

| File | Caption |
|------|---------|
| `01_login.webp` | Sign-in screen with branded header, email/password fields, and Google sign-in option |
| `02_forgot_password.webp` | Password reset dialog — sends a recovery link via Supabase Auth |
| `03_register.webp` | Registration screen with avatar upload, gradient hero header, and a form card |
| `04_register_validation.webp` | Live form validation — password strength meter and inline error states |
| `05_home.webp` | Home feed — greeting, search, category chips, featured carousel |
| `06_home_all_courses.webp` | Full course catalog |
| `07_home_category_filter.webp` | Category filtering in real time |
| `08_course_details_about.webp` | Course detail screen — hero, instructor, stat pills |
| `09_course_details_about_scrolled.webp` | “About” tab — description and learning outcomes |
| `10_course_details_lessons.webp` | “Lessons” tab — curriculum with lock state |
| `11_reviews_sheet.webp` | Reviews sheet — star distribution histogram |
| `12_write_review.webp` | Write-a-review flow |
| `13_course_details_enrolled.webp` | Post-enrollment progress bar with Continue |
| `14_video_player.webp` | Lesson player with “Up Next” playlist |
| `15_video_player_controls.webp` | Custom Chewie controls |
| `16_video_player_youtube.webp` | YouTube lessons inline with speed control |
| `17_my_courses_wishlist.webp` | My Courses — stats and tabs |
| `18_my_courses_completed.webp` | Empty-state handling |
| `19_profile.webp` | Profile — stats, settings, certificates |
| `20_edit_profile.webp` | Edit-profile sheet |

Adding a shot later is one entry in the `gallery` array — no component change. A file listed
there but missing on disk is skipped silently at runtime.

After adding images, restart `npm run dev` — Next reads `public/` once at startup.
