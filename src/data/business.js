// Central business configuration for Berlin Döner Barntrup.
// Nothing here is owner-confirmed. Values with `verified: false` come from a screenshot of the
// printed menu (references/menu-original.png, about one year old) or are empty placeholders.
// Set `verified: true` only after the owner confirms a value: it removes the UNBESTÄTIGT tag
// and, for the phone number, activates the call link.

export const business = {
  name: 'Berlin Döner',
  city: 'Barntrup',
  claim: {
    de: 'Dein Hunger. Unser Döner.',
    en: 'Your hunger. Our döner.',
    ru: 'Твой голод. Наш дёнер.',
  },

  address: {
    street: 'Hamelner Straße 34',
    postalCode: '32683',
    city: 'Barntrup',
    country: 'Deutschland',
    verified: false, // from the printed menu via the brief; owner to reconfirm
  },

  // UNCONFIRMED: read from the menu photo. Shown as plain text; no call link until verified.
  phone: {
    display: '0177 26 17 451',
    e164: '+491772617451',
    verified: false,
  },

  // Leave e164 null until the owner confirms the WhatsApp number: setting it activates ordering.
  // The phone number above is NOT confirmed to be on WhatsApp.
  whatsapp: {
    e164: null,
    verified: false,
  },

  email: {
    address: null,
    verified: false,
  },

  hours: {
    // UNCONFIRMED: read from the menu photo.
    regular: { dayKey: 'hours.regularDays', time: '11:00 – 22:00' },
    sunday: { dayKey: 'hours.sundayDays', time: '13:00 – 22:00' },
    verified: false,
  },

  social: {
    instagram: null, // TODO(owner): add Instagram handle/URL if available
    verified: false,
  },

  delivery: {
    offered: true,
    // UNCONFIRMED: read from the small print on the menu photo. Amounts in euros; fee 0 = free.
    zones: [
      { areas: 'Barntrup Zentrum', minOrder: 15, fee: 0 },
      { areas: 'Alverdissen, Sonneborn, Selbeck', minOrder: 15, fee: 2 },
      { areas: 'Hagen, Eschenbruch, Bega', minOrder: 20, fee: 2 },
      { areas: 'Blomberg Zentrum', minOrder: 20, fee: 3 },
      { areas: 'Dörentrup Zentrum', minOrder: 20, fee: 4 },
    ],
    verified: false,
  },

  maps: {
    query: 'Berlin Döner, Hamelner Straße 34, 32683 Barntrup',
  },

  legal: {
    // TODO(owner): required for Impressum — owner/operator name, legal form, register info, VAT ID, responsible person.
    ownerName: null,
    registerInfo: null,
    vatId: null,
    verified: false,
  },
}

export const getWhatsappNumber = () => business.whatsapp.e164

export const getPhoneHref = () =>
  business.phone.verified && business.phone.e164 ? `tel:${business.phone.e164}` : null

export const getMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.maps.query)}`
