# Soni's Bakes — website

A static, production-ready site: `index.html`, `styles.css`, `script.js`, and the logo in `assets/`. No build step, no server or database required.

## Before you publish

1. **Menu & prices** — the cake/cupcake/cookie items and prices in the "What Soni bakes" section are placeholders. Open `index.html`, find the `<section class="menu">` block, and swap in the real flavors, sizes and prices.
2. **Photos** — the menu currently uses simple line-icons instead of photos (I wasn't able to pull images from Instagram — it blocks automated access). To add real photos: drop image files into `assets/`, then in each `.menu-card` replace the `<div class="menu-card-icon">...</div>` with `<img src="assets/your-photo.jpg" alt="...">` and add `img { width:100%; border-radius: 2px; }` styling as you like.
3. **Contact info** — order requests currently point to:
   - Email: `amaljithtm@gmail.com`
   - Phone/text: `+1 (945) 371-0727`
   - Instagram: `@_sonis_bakes_`
   To change any of these, search for them in `index.html` (contact buttons + footer) and in `script.js` (`ORDER_EMAIL` constant).

## How ordering works right now

There's no backend, so the "Send order request" button opens the customer's own email app with the message pre-filled, addressed to your email. The Call/Text/Instagram buttons open the phone or Instagram app directly. This works immediately on any host, with zero setup or ongoing cost.

If you'd rather the form submit silently (no email app popping up for the customer), you can swap in a form service later:
- **Formspree** (formspree.io) — free tier, just change the form's `action` attribute to the endpoint they give you and add `method="POST"`.
- **EmailJS** (emailjs.com) — free tier, sends via your own Gmail; needs a small JS snippet with your service/template IDs.
Both require you to create a free account — I can wire either one in if you set one up and share the ID/key.

## How to publish it

Any static host works. Two easy free options:

**Netlify (drag-and-drop, easiest)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `sonis-bakes` folder onto the page.
3. You'll get a live URL immediately (e.g. `sonis-bakes.netlify.app`). You can add a custom domain later in Netlify's site settings.

**GitHub Pages**
1. Create a new GitHub repo and upload these files (`index.html`, `styles.css`, `script.js`, `assets/`).
2. In the repo, go to Settings → Pages → set source to the `main` branch, root folder.
3. GitHub gives you a live URL at `https://<username>.github.io/<repo>/`.

Either way, once it's live, test the "Send order request" button and the Call/Text/Instagram buttons on an actual phone to confirm they open the right apps.
