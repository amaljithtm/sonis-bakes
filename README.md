# Soni's Bakes — Website

A static, single-purpose website for Soni's Bakes: a home bakery landing page where customers can browse what's offered and start an order by email, call, text, or Instagram DM.

No build tools, frameworks, database, or server required — it's plain HTML, CSS, and JavaScript that runs entirely in the browser.

\---

## 1\. What's in the app (page-by-page activity)

The site is a single scrolling page (`index.html`) made of these sections, in order:

|Section|Anchor|What it does|
|-|-|-|
|**Header / Nav**|—|Sticky top bar with the Soni's Bakes logo, links to each section, and an "Order" button. Collapses into a hamburger menu on mobile.|
|**Hero**|`#top`|First thing visitors see: headline, one-line pitch, and two buttons — "Order a cake" (jumps to the order form) and "See the menu" (jumps to the menu).|
|**About**|`#about`|Short brand story ("small batches, no shortcuts"), plus three quick facts (made to order, book ahead, local pickup) and a link out to the Instagram profile.|
|**Menu**|`#menu`|Grid of what Soni's bakes — Custom Celebration Cakes, Cupcakes, Cookies, Pastries, and a catch-all "Custom orders" card. Each shows a name, short description, and starting price. Currently placeholder items/prices with icon art (see §3).|
|**How to Order**|`#how`|Three-step explainer: pick what you want → send the details → Soni's confirms and bakes. Purely informational, sets expectations before the order form.|
|**Order**|`#order`|The action section. Contains: a grid of direct contact buttons (Call, Text, Email, Instagram — each a working link), plus an order form (name, phone, item, date, details) that on submit builds a pre-filled email and opens it in the customer's own email app.|
|**Footer**|—|Logo, tagline, repeated contact links, and copyright year (auto-updates via JS).|

### How the order form actually works

There is **no backend or database**. When a customer fills out the form and clicks "Send order request":

1. JavaScript (`script.js`) reads the field values.
2. It builds a `mailto:` link with a subject and body pre-filled from those values.
3. The browser opens the customer's own email app (Gmail, Outlook, Mail, etc.) with that email ready to send, addressed to `sonikakrishna5@gmail.com`.
4. The customer still has to hit **send** in their own email app — nothing is transmitted automatically or silently.

This means: no server costs, no API keys, no accounts to manage, and it works the instant the site is live. The trade-off is one extra tap for the customer (confirming send in their mail app) and no order database on your end — every order arrives as a normal email.

\---

## 2\. Tech stack \& file structure

```
sonis-bakes/
├── index.html      # all page content and structure
├── styles.css      # all visual styling (colors, layout, responsive rules)
├── script.js       # mobile nav toggle, footer year, order-form -> mailto logic
├── assets/
│   └── logo.jpg    # the Soni's Bakes logo, used in header, hero, and footer
└── README.md       # this file
```

* **No dependencies, no npm/build step.** Fonts (Fraunces + Work Sans) load from Google Fonts via a `<link>` tag; everything else is self-contained.
* **Fully responsive** — single column on mobile, multi-column grid on tablet/desktop, with a slide-out nav menu under \~620px width.
* **Accessible basics covered** — semantic HTML, visible focus states, alt text on images, reduced-motion support for the spinning hero ring.

There is also a **standalone version** (`sonis-bakes-standalone.html`) with the CSS, JS, and logo all embedded in one file — useful for quick sharing or preview, but the multi-file version above is what you should actually edit and deploy.

\---

## 3\. Before you publish

1. **Menu items, descriptions, and prices** — in `index.html`, inside `<section class="menu" id="menu">`. Each item is an `<article class="menu-card">` block. Edit the `<h3>`, `<p>`, and `<span class="menu-price">` text for each.
2. **Product photos** — the menu currently uses hand-drawn gold line icons instead of real photos. To swap in photos:

   * Add image files to `assets/` (e.g. `assets/chocolate-cake.jpg`).
   * In the relevant `.menu-card`, replace the `<div class="menu-card-icon">...svg...</div>` with `<img src="assets/chocolate-cake.jpg" alt="Chocolate cake">`.
   * Add basic styling, e.g. `.menu-card img { width: 100%; border-radius: 3px; object-fit: cover; }` in `styles.css`.
3. **About section copy** — the "Small batches. No shortcuts." text is written to match the tone of the Instagram bio, but is not sourced from the account directly. Edit freely.
4. **Contact details** — currently set to:

   * Email: `sonikakrishna5@gmail.com`
   * Phone / text: `+91-9562979618`
   * Instagram: `@\_sonis\_bakes\_`

   To change any of these, update:

   * The `mailto:`, `tel:`, and `sms:` links in the `.contact-list` block and the footer in `index.html`.
   * The `ORDER\_EMAIL` constant near the top of `script.js`.

\---

## 4\. Production-readiness checklist

Run through this before sharing the live link publicly:

* \[ ] Replace placeholder menu items, prices, and photos (§3).
* \[ ] Confirm the email, phone, and Instagram handle are correct everywhere (search the files for the old values if you change them).
* \[ ] Open the live site on an actual phone and tap each button — Call, Text, Email, Instagram, and "Send order request" — to confirm each opens the right app with the right pre-filled info.
* \[ ] Check the site on a couple of different screen sizes (phone, tablet, laptop) — resize your browser window or use your browser's device-emulation view.
* \[ ] Update the `<title>` and `<meta name="description">` tags in `index.html` if you want different text to show up in Google search results and link previews.
* \[ ] Decide whether you want a custom domain (e.g. `sonisbakes.com`) instead of the free subdomain your host gives you — see §5.
* \[ ] Optional: add Google Analytics or a similar tracker if you want to see visitor numbers (not included by default, for privacy/simplicity).

\---

## 5\. How to publish (deploy) the site

Any static file host works, since there's no server-side code. Two free, no-code options:

### Option A — Netlify Drop (fastest, no account needed to start)

1. Go to **https://app.netlify.com/drop**
2. Drag the whole `sonis-bakes` folder (containing `index.html`, `styles.css`, `script.js`, `assets/`) onto the page.
3. Netlify uploads it and gives you a live URL immediately, e.g. `random-name-123.netlify.app`.
4. To keep the site (so it doesn't expire) and add a custom domain, create a free Netlify account and claim the site, then go to **Site settings → Domain management** to add a domain you own.

### Option B — GitHub Pages (better if you'll keep editing the site over time)

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder to it (via the GitHub web UI, or `git push` if you're comfortable with Git).
3. In the repo, go to **Settings → Pages**, set the source to the `main` branch and root folder, and save.
4. GitHub gives you a live URL at `https://<your-username>.github.io/<repo-name>/`.
5. Custom domain: add a `CNAME` file with your domain name to the repo, and point your domain's DNS at GitHub Pages (GitHub's docs walk through the exact DNS records needed).

### Option C — Other static hosts

Vercel, Cloudflare Pages, and Firebase Hosting all work the same way (drag-and-drop or connect a Git repo) if you prefer one of those instead.

**HTTPS**: all three options above give you a secure `https://` URL automatically, with no extra setup — important since browsers can block or warn on non-secure sites, and it looks more trustworthy to customers.

\---

## 6\. Upgrading the order flow later (optional)

Right now, "Send order request" opens the customer's email app — reliable, but not fully automatic. If later you want the form to submit silently (no email app popping up) and land straight in your inbox, two free services can do this without you needing to run a server:

* **Formspree** (formspree.io) — create a free account, get a form endpoint URL, then change the `<form>` tag in `index.html` to `action="https://formspree.io/f/your-id" method="POST"`.
* **EmailJS** (emailjs.com) — create a free account connected to your Gmail, then add a small JS snippet with your service ID, template ID, and public key in place of the current `mailto:` logic in `script.js`.

Either requires you to create the free account yourself (I can't create one on your behalf) — once you have the ID/key, share it and the form can be wired up to use it directly.

\---

## 7\. Support / making changes

Everything is plain HTML/CSS/JS, so any web developer (or a future conversation with Claude) can edit it directly — there's no framework or build process to learn first. The most common edits (menu, prices, contact info, photos) are all covered in §3 above.

