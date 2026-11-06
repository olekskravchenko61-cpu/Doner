// Weekly offers as shown on the menu photo (references/menu-original.png, about one year old).
// UNCONFIRMED: set `verified: true` only after the owner confirms price and conditions.
// The "today" badge stays hidden until then, so the site never claims an offer is running.

export const offers = [
  {
    id: 'doener-tag',
    dayIndex: 2, // Tuesday (Date#getDay: 0 = Sunday)
    day: { de: 'Dienstag', en: 'Tuesday', ru: 'Вторник' },
    label: { de: 'Döner-Tag', en: 'Döner Day', ru: 'День дёнера' },
    item: { de: 'Drehspieß im Fladenbrot', en: 'Drehspieß (döner) in flatbread', ru: 'Дрехшпис (дёнер) в лепёшке' },
    permanent: true,
    price: 5.0,
    image: 'donerBread',
    verified: false,
  },
  {
    id: 'pizza-tag',
    dayIndex: 3, // Wednesday
    day: { de: 'Mittwoch', en: 'Wednesday', ru: 'Среда' },
    label: { de: 'Pizza-Tag', en: 'Pizza Day', ru: 'День пиццы' },
    item: { de: 'Pizza ø26', en: 'Pizza ø26', ru: 'Пицца ø26' },
    note: { de: 'Die Pizzen nur von unseren Speisekarten', en: 'Pizzas from our menus only', ru: 'Только пиццы из нашего меню' },
    permanent: true,
    price: 6.0,
    image: 'pizza',
    verified: false,
  },
]

export const getTodayOfferId = () => {
  const today = new Date().getDay()
  const match = offers.find((offer) => offer.dayIndex === today)
  return match ? match.id : null
}
