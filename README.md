# Berlin Döner Barntrup: demo website

Frontend-only restaurant site built with React 19, Vite and plain CSS. It has no backend, no payments and no tracking.

```
npm install
npm run dev      # development server
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Where to change things

| What | File |
| --- | --- |
| Phone, WhatsApp, hours, delivery, legal details | `src/data/business.js` |
| Menu items and prices | `src/data/menu.js` |
| Weekly offers | `src/data/offers.js` |
| All interface text (DE/EN/RU) | `src/i18n/translations.js` |
| Photos and image credits | `src/assets/images/index.js` |

A menu item with `price: null` shows "Preis nicht verfügbar" and can't be added to the cart.

Each item in `business.js` and `offers.js` has a `verified` flag. Set it to `true` only after the owner confirms that item:

- It removes the UNBESTÄTIGT tag.
- For offers, it also allows the "Heute" badge.
- For the phone number, it also activates the call link.

WhatsApp ordering is separate: it stays off until `whatsapp.e164` is filled in.

The source for names, prices, delivery terms and hours is `references/menu-original.png`, which is kept locally and excluded from Git. It is a screenshot about one year old that shows only part of the menu, so treat all of it as unconfirmed.

## Before going live

### To confirm with the restaurant

- [ ] **WhatsApp number** (`whatsapp.e164`). WhatsApp ordering stays switched off until this is set; the cart shows a message preview instead.
- [ ] **Phone number** (`phone`, read from the menu photo as 0177 26 17 451), then add it to the JSON-LD in `index.html`.
- [ ] **Address and opening hours**, then add them to the JSON-LD.
- [ ] **All prices and menu names.** They match the menu photo, but the photo is about one year old.
- [ ] **Products 37–56** are numbered as on the photo. **Products 1–36.** These are not on the photo at all. Standalone prices for Döner, Döner-Dürüm, Döner-Rollo, Hamburger and Türk. Pizza are also unknown.
- [ ] **Allergens and additives.** Deliberately not shown. Publish them only from a sharp copy of the menu and legend. Pizzas 48–56 and the Spar-Menüs show no codes on the photo, which may be an omission, so they must not be presented as allergen-free.
- [ ] **Weekly offers:** Döner-Tag 5,00 € and Pizza-Tag ø26 6,00 €. Also ask which pizzas count for the Pizza-Tag.
- [ ] **Delivery zones** in `business.js`, read from small print. Also confirm that both pickup and delivery can be ordered via WhatsApp.
- [ ] **Instagram URL**, if there is one.
- [ ] **Über uns text:** the current text is a placeholder.

### Legal

- [ ] **Impressum:** operator name, legal form, representative, register details, VAT ID, email.
- [ ] **Datenschutzerklärung:** data controller, hosting provider, privacy contact.
- [ ] **Legal review.** The texts in `src/pages/` are drafts, not legal advice.

### Photos

Every photo is stock from Wikimedia Commons or Pexels, labelled "Symbolfoto" and credited on the Impressum page. **Replace all of them with the restaurant's own photos.** Once replaced, remove the credits and the labels.

Before publishing with stock photos:

- Most photos use the [Pexels license](https://www.pexels.com/license/). It allows commercial use and editing, and does not require attribution; the credits stay in the Impressum anyway. Automated access to Pexels pages was blocked, so the terms and photographer names were checked through search results.
- [ ] Open the licence page and each Pexels photo page once in a browser to confirm them.
- [ ] `menu-combo` shows a Coca-Cola logo. Pexels says trademarks may still be protected and endorsement must not be implied, so replace this photo before going live.
- [ ] Check the ShareAlike terms for the two CC BY-SA photos (`pizza-margherita`, `salad`).

Replacement priorities:

1. `menu-combo`: visible Coca-Cola logo.
2. `salad`: its source calls it a Macedonian salad, although tomato, cucumber, onion and parsley are also typical of a Turkish çoban salatası. It may not match the restaurant's own salads.
3. `drinks`: shows only an iced cola, not the full drinks range or ayran.
4. All others: good quality, but they don't show this restaurant's food.

There are no photos of the restaurant itself.

### Deployment

- [ ] Replace `https://www.example.com` with the real domain in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
- [x] `vercel.json` serves `index.html` for all routes, so `/impressum` and `/datenschutz` open directly on Vercel. On another host, configure the same rule.
- [ ] Remove the demo note in the footer (`footer.demoNote`).
- [ ] Complete the real-device checks in [docs/device-testing-checklist.md](docs/device-testing-checklist.md). Automated tests so far ran in Chromium only, so Safari has not been tested.

## Privacy decisions

- Fonts are self-hosted, so the site makes no requests to Google Fonts.
- Google Maps loads only after the visitor clicks "Karte laden".
- `localStorage` holds only the chosen language and the cart.
