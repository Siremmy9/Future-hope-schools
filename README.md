# Danirariz Schools: Website Template

A premium, responsive school website built with plain HTML5, CSS3 and vanilla JavaScript (no frameworks, no backend).

**Where things are edited**

| What                                                                                                                                     | Where                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| School name, tagline, phone, email, WhatsApp, address, map, social links, colours, sections (levels), about text, statistics, hero video | `js/config.js`                                            |
| Staff, gallery, news, facilities, academics, testimonials, school fees and bank details                                                  | `js/content.js`                                           |
| Photos                                                                                                                                   | `assets/images/...` (referenced from the two files above) |
| Admissions, students, messages, activity log                                                                                             | Admin dashboard (`admin/login.html`)                      |

After editing code files, save and re-upload the site: every visitor on every device sees the change.

## Folder structure

```
index.html about.html schools.html academics.html admissions.html fees.html
facilities.html gallery.html news.html contact.html
admin/   login, dashboard, admissions, students, messages, activities
css/     style.css  responsive.css  admin.css
js/      config.js  content.js  storage.js  main.js  admissions.js  fees.js  gallery.js  admin.js
assets/  images/(staff, gallery, news, facilities)  videos/  icons/  logo/
```

## Setup

Open `index.html` in a browser, or serve the folder (VS Code Live Server, `python3 -m http.server`). No build step. Upload the whole folder to any static host.

## Add pictures and content

1. Copy the photo into the right folder, e.g. `assets/images/staff/mrs-okafor.jpg`.
2. Open `js/content.js` and add or edit one entry:
   - Staff: `{ name: "Mrs. A. Okafor", position: "Principal", department: "Administration", photo: "assets/images/staff/mrs-okafor.jpg", bio: "..." }`
   - Gallery: `{ image: "assets/images/gallery/sports-day.jpg", caption: "Sports day", category: "Sports" }`
   - News: `{ title, category, date: "2026-10-05", image, published: true, excerpt, content }` (set `published: false` to hide)
3. Save and refresh. Delete an entry's line to remove it. Leave `image: ""` for a placeholder.

School section photos (Crèche, Nursery, Primary, Secondary, About) are set in `js/config.js` under `images`. Their text (age, description, bullet points, classes) is under `levels`.

## Logo, video, WhatsApp, map

- **Logo:** replace `assets/logo/logo.svg` (or change `logo` in `config.js`). Replace `assets/icons/favicon.svg` too.
- **Hero video:** put your MP4 at `assets/videos/school-hero.mp4` (H.264, 10-20 s, no audio, under ~8 MB). If missing, the poster image shows.
- **WhatsApp:** set `schoolWhatsApp` at the top of `config.js`, digits only, e.g. `2348012345678`.
- **Google Maps:** Google Maps > Share > Embed a map > copy the HTML. Paste it into `mapUrl` in `config.js`.

## Fees

Edit amounts and bank details in `js/content.js` under `fees` (`"₦XX,XXX"` or `"Contact School"`).

## Admin dashboard

Login: `admin/login.html`, demo account **admin / admin123**. It manages Admissions (status updates), Students, Messages (read/unread/replied) and the Activity log.

**Important:** the login is DEMO ONLY and not secure (see the comment at the top of `js/admin.js`). Admissions and messages are saved in the browser where they were submitted, so a parent's enquiry will not appear in your admin on another device until a backend (e.g. Supabase or PHP + MySQL) is connected. Until then, the WhatsApp buttons are the reliable way for parents to reach you.

## Customise for another school

Duplicate the folder, edit `js/config.js` and `js/content.js`, replace logo, video and images, then update the page titles, canonical URLs (`YOUR-DOMAIN.com`) and the JSON-LD block in `index.html`.

## Notes

- Sample statistics, staff names, news text, hours and age ranges are placeholders: replace them.
- Respects `prefers-reduced-motion`.
