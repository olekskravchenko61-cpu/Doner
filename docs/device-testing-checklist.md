# Berlin Döner: real-device test checklist

Automated tests so far ran only in Chromium, using simulated phone screens. This checklist covers what those tests can't prove. Run it before the site goes live.

## Devices

Test at least one small and one large phone on each system, using the current OS version.

| Device | OS | Browser | Tester | Date | Result |
| --- | --- | --- | --- | --- | --- |
| iPhone SE or mini (small screen) | iOS | Safari | | | |
| iPhone with Face ID or Dynamic Island | iOS | Safari | | | |
| iPhone with Face ID or Dynamic Island | iOS | Chrome | | | |
| Small or budget Android phone | Android | Chrome | | | |
| Large Android phone | Android | Chrome | | | |
| Samsung phone | Android | Samsung Internet | | | |

## Before you start

- Use the hosted test site over HTTPS, not `localhost`.
- Clear the site's data first, so no old cart or language setting remains.
- Run sections 1–9 with the site as it is now. Sections 10–11 need details the owner hasn't confirmed yet.
- If something fails, note the device, browser, steps and a screenshot.

## 1. Mobile menu

- [ ] The menu opens and closes on the first tap, at the top of the page and after scrolling far down.
- [ ] The menu covers the screen correctly, even while the browser's address bar is collapsed.
- [ ] The page behind doesn't scroll while the menu is open, even when you swipe hard or overscroll.
- [ ] After closing, the page stays at the same position with no jump or flash.
- [ ] Tapping the dark area beside the menu closes it, and doesn't press anything behind it.
- [ ] Each menu link closes the menu and lands on the right section, with the heading visible below the header.
- [ ] The close button isn't under the notch, and the bottom button isn't under the home bar.

## 2. Screen edges and browser bars

- [ ] Nothing is hidden behind the notch, Dynamic Island, home bar or Android navigation bar.
- [ ] The fixed header stays in place while the address bar collapses and reappears.
- [ ] The cart bar at the bottom stays fully visible and tappable while the browser bars change.
- [ ] Landscape: the header, mobile menu and cart can all still be used, and all content can be reached by scrolling.
- [ ] Rotating the phone with the menu or cart open breaks nothing.

## 3. Scrolling and gestures

- [ ] Scrolling feels smooth from top to bottom with no stutter or jumps.
- [ ] Section links scroll to the right place on the first tap.
- [ ] The menu tabs swipe sideways without moving the page, and all 7 can be reached.
- [ ] The page can't be moved sideways anywhere, on any tab or in any language.
- [ ] Browser back and forward work between the home page, Impressum and Datenschutz.
- [ ] iPhone: the swipe-back gesture works.
- [ ] Android: the system back button works, including with the menu or cart open. Note what happens.

## 4. Touch

- [ ] Every button works on the first tap, with no double tap needed. iPhones can have this issue when a button has a hover effect.
- [ ] No hover effect stays stuck after a tap.
- [ ] Add buttons, plus and minus, and the bin icon are easy to hit without pressing the wrong one.
- [ ] Double-tapping a plus button adds 2 and doesn't zoom the page.

## 5. Cart and forms

- [ ] Add items from several tabs. The bar shows the correct count and total.
- [ ] Plus, minus, remove and clear all work, and the total stays correct.
- [ ] The cart survives a page reload.
- [ ] Tapping a field doesn't zoom the page.
- [ ] The on-screen keyboard doesn't cover the field you're typing in, and the cart still scrolls with it open.
- [ ] After closing the keyboard, the layout returns to normal.
- [ ] Autofill for name and address works and doesn't break the layout.
- [ ] The page behind doesn't scroll while the cart is open.

## 6. Text and languages

- [ ] German, English and Russian all switch without a reload, and the choice survives a reload.
- [ ] Umlauts, ß, ø and Cyrillic letters all display correctly. Headings look intentional in Russian.
- [ ] System text size at its largest: nothing is cut off or overlapping, and buttons still work.
- [ ] Dark mode on the phone: the site still looks right and text stays readable.

## 7. Images and loading

- [ ] All photos load and look sharp, with no gaps while scrolling.
- [ ] The "Symbolfoto" label is readable on every photo.
- [ ] Mobile data with a weak signal: the first screen appears quickly and the layout doesn't jump as photos load.
- [ ] Low Power Mode or Battery Saver: nothing breaks and all content appears.
- [ ] Reduced motion switched on: all content is visible and nothing stays hidden.

## 8. Accessibility

- [ ] VoiceOver (iPhone): swipe through the header, mobile menu, menu tabs and cart. Every control has a clear name.
- [ ] TalkBack (Android): repeat the same steps.
- [ ] With the menu or cart open, the screen reader stays inside it and doesn't read the page behind.
- [ ] Unconfirmed tags and "Preis nicht verfügbar" are read aloud.
- [ ] Pinch-to-zoom works.

## 9. External links and the map

- [ ] "Route planen" opens the Google Maps app, or the website if the app isn't installed, at the right address.
- [ ] Google Maps doesn't load until "Karte laden" is tapped. After that, the map shows and can be used, and the page can still be scrolled past it.
- [ ] Links in the Impressum open and returning to the site works.
- [ ] Sharing the link in WhatsApp shows the correct title and image. This needs the real domain.

## 10. WhatsApp ordering (when the number is confirmed)

Set `whatsapp.e164` in `src/data/business.js`, and use a test number the owner agrees to.

- [ ] Send is blocked until a name is entered, and until an address is entered for delivery.
- [ ] With WhatsApp installed, the app opens with the message filled in. The message isn't sent until the customer presses send.
- [ ] Without WhatsApp installed, the fallback page appears and makes sense.
- [ ] iPhone: returning from WhatsApp to Safari keeps the cart.
- [ ] Android: returning from WhatsApp to the browser keeps the cart.
- [ ] Umlauts, `&`, line breaks and long notes arrive correctly.
- [ ] The message lists the right items, product numbers, total, order type and address.
- [ ] The floating WhatsApp button doesn't cover the cart bar or the footer links.
- [ ] A Russian or English customer still sends a German message.

## 11. Phone calls (when the number is confirmed)

Set `phone.verified` to `true` in `src/data/business.js`.

- [ ] The UNBESTÄTIGT tag next to the number is gone.
- [ ] Every call button or link opens the phone app with the right number.
- [ ] iPhone: the confirmation prompt works, and cancelling returns to the site.

## Sign-off

- [ ] All sections above pass on every device in the table, or each exception is written down and accepted.
- [ ] Known problems have been shared with the site owner.

Tested by: ____________________  Date: ____________
