# Elmester (المستر) screenshots

24 of the 27 captured screenshots, at 1080×2340 (9:19.5), downscaled to 720px wide and
converted to WebP — 4.7 MB as PNG became 845 KB, which matters because the gallery loads
every thumbnail. They render inside a phone mockup (`phoneFrame: true` on the `elmester`
entry in `data/projects.ts`), so nothing is cropped or stretched.

Source of the originals: `d:\Flutter Apps\my real projects\test-elmester\demo\screenshots\`

Not carried over (available in the source folder if wanted): `00-launch-screen`,
`02b-code-verifying`, `25-parent-logout`, `34-teacher-logout`.

## Cover

`00-cover.webp` (1600×900, 68 KB) is the marketing cover, converted from
`demo/elmester-cover.jpg` (2400×1350, 242 KB). It is both the project-card thumbnail and
the first slide of the details gallery, where it sits in its own "Overview" section.

It is the only landscape image in the set: the gallery marks it `orientation: "landscape"`,
so it renders `object-contain` on the stage instead of inside the phone mockup — no crop, no
distortion. The card frame is 16/10 and the cover is 16/9, so the card trims a few percent
off the top and bottom, centred; that is the same `cover` crop every other project card uses.

The two other exports (`elmester-cover-1600.jpg`, `elmester-cover.png`) were not copied — the
WebP is smaller than both at the size the site actually renders.

## ⚠️ Before this goes public

The screenshots show **real student names**. If these are actual students, re-capture the
set with invented names before the portfolio is published — a public page carrying real
children's names is a privacy problem regardless of anything else on the page.

## Sections

Each entry carries `group_ar` / `group_en`, which the gallery turns into filter chips (plus
an "All" chip that opens first):

| Section | Files |
|---------|-------|
| نظرة عامة / Overview | `00-cover` |
| الدخول / Access | `01-splash`, `02-code-gate` |
| لوحة المدرس / Teacher Dashboard | `10-teacher-dashboard`, `11-teacher-today-sessions` |
| المجموعات / Groups | `12-groups`, `13-group-add-sheet`, `14-group-attendance`, `14b-group-attendance-pay-swipe`, `15-group-homework`, `16-group-schedule`, `17-group-exams`, `19-exam-grades`, `18-group-report` |
| الطلاب / Students | `30-students`, `31-student-add-sheet`, `32-student-code-copy`, `33-student-menu` |
| ولي الأمر / Parent View | `20-parent-attendance`, `21-parent-homework`, `22-parent-rating`, `23-parent-exams`, `24-parent-payment` |
| إشعارات وحالات / Notifications & States | `26-push-notification`, `04-error-no-connection` |

Gallery order follows the list above (`19-exam-grades` before `18-group-report`, as
requested).

Adding a shot later is one entry in the `gallery` array — no component change. A file listed
there but missing on disk is skipped silently at runtime.

After adding images, restart `npm run dev` — Next reads `public/` once at startup.
