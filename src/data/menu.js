// Names, prices and descriptions were checked against the menu photo (references/menu-original.png).
// That photo is about one year old, shows only products 37-56 plus the Spar-Menüs and drinks, and
// nothing is owner-confirmed. `price: null` means unavailable: never fill one in without a source.
// Allergens are left out on purpose until a sharp copy of the menu and its legend is available.
// `number` on salads and pizzas is the product number printed on the menu (37-56). German wording
// is kept exactly as printed, including "mit Schinken und Pilze" on no. 55.
// `verified: true`  = name and price readable on the photo (NOT owner-confirmed).
// `verified: false` = only mentioned inside a Spar-Menü, no standalone price known, so not orderable.

export const categories = [
  { id: 'doener', label: { de: 'Döner', en: 'Döner', ru: 'Дёнер' }, icon: 'UtensilsCrossed', image: 'donerBread' },
  { id: 'duerum', label: { de: 'Dürüm', en: 'Dürüm', ru: 'Дюрум' }, icon: 'Sandwich', image: 'durum' },
  { id: 'menues', label: { de: 'Menüs', en: 'Menus', ru: 'Меню' }, icon: 'LayoutGrid', image: 'menuCombo' },
  { id: 'pizza', label: { de: 'Pizza', en: 'Pizza', ru: 'Пицца' }, icon: 'Pizza', image: 'pizzaMargherita', note: 'ø28' },
  { id: 'burger', label: { de: 'Burger', en: 'Burger', ru: 'Бургер' }, icon: 'Beef', image: 'burger' },
  { id: 'salate', label: { de: 'Salate', en: 'Salads', ru: 'Салаты' }, icon: 'Salad', image: 'salad' },
  { id: 'getraenke', label: { de: 'Getränke', en: 'Drinks', ru: 'Напитки' }, icon: 'CupSoda', image: 'drinks' },
]

export const menu = {
  doener: [
    {
      id: 'doener-fladenbrot',
      name: { de: 'Döner im Fladenbrot', en: 'Döner in flatbread', ru: 'Дёнер в лепёшке' },
      price: null,
      verified: false,
      image: 'donerBread',
    },
  ],

  duerum: [
    {
      id: 'doener-duerum',
      name: { de: 'Döner-Dürüm', en: 'Döner Dürüm wrap', ru: 'Дёнер-дюрум' },
      price: null,
      verified: false,
    },
    {
      id: 'doener-rollo',
      name: { de: 'Döner-Rollo', en: 'Döner Rollo', ru: 'Дёнер-ролло' },
      price: null,
      verified: false,
    },
  ],

  menues: [
    {
      id: 'menu-1',
      number: 1,
      name: { de: 'Menü 1', en: 'Menu 1', ru: 'Меню 1' },
      includes: {
        de: 'Döner im Fladenbrot, Pommes + 0,33 l Getränk',
        en: 'Döner in flatbread, fries + 0.33 l drink',
        ru: 'Дёнер в лепёшке, картофель фри + напиток 0,33 л',
      },
      price: 11.5,
      verified: true,
      image: 'donerBread',
    },
    {
      id: 'menu-2',
      number: 2,
      name: { de: 'Menü 2', en: 'Menu 2', ru: 'Меню 2' },
      includes: {
        de: 'Döner-Dürüm, Pommes + 0,33 l Getränk',
        en: 'Döner Dürüm, fries + 0.33 l drink',
        ru: 'Дёнер-дюрум, картофель фри + напиток 0,33 л',
      },
      price: 13.0,
      verified: true,
    },
    {
      id: 'menu-3',
      number: 3,
      name: { de: 'Menü 3', en: 'Menu 3', ru: 'Меню 3' },
      includes: {
        de: 'Döner-Rollo, Pommes + 0,33 l Getränk',
        en: 'Döner Rollo, fries + 0.33 l drink',
        ru: 'Дёнер-ролло, картофель фри + напиток 0,33 л',
      },
      price: 14.0,
      verified: true,
    },
    {
      id: 'menu-4',
      number: 4,
      name: { de: 'Menü 4', en: 'Menu 4', ru: 'Меню 4' },
      includes: {
        de: 'Türk. Pizza, Pommes + 0,33 l Getränk',
        en: 'Turkish pizza, fries + 0.33 l drink',
        ru: 'Турецкая пицца, картофель фри + напиток 0,33 л',
      },
      price: 12.5,
      verified: true,
      image: 'pizza',
    },
    {
      id: 'menu-5',
      number: 5,
      name: { de: 'Menü 5', en: 'Menu 5', ru: 'Меню 5' },
      includes: {
        de: 'Hamburger, Pommes + 0,33 l Getränk',
        en: 'Hamburger, fries + 0.33 l drink',
        ru: 'Гамбургер, картофель фри + напиток 0,33 л',
      },
      price: 10.0,
      verified: true,
      image: 'burger',
    },
    {
      id: 'menu-6',
      number: 6,
      name: { de: 'Menü 6', en: 'Menu 6', ru: 'Меню 6' },
      includes: {
        de: 'Pizza ø28, Pommes + 0,33 l Getränk',
        en: 'Pizza ø28, fries + 0.33 l drink',
        ru: 'Пицца ø28, картофель фри + напиток 0,33 л',
      },
      price: 14.0,
      verified: true,
      image: 'pizza',
    },
  ],

  pizza: [
    { id: 'pizza-margherita', number: 42, name: { de: 'Margherita', en: 'Margherita', ru: 'Маргарита' }, description: { de: 'mit Tomatensoße und Käse', en: 'with tomato sauce and cheese', ru: 'с томатным соусом и сыром' }, price: 8.5, verified: true, image: 'pizzaMargherita' },
    { id: 'pizza-thunfisch', number: 43, name: { de: 'Thunfisch Pizza', en: 'Tuna pizza', ru: 'Пицца с тунцом' }, description: { de: 'mit Thunfisch und Zwiebeln', en: 'with tuna and onions', ru: 'с тунцом и луком' }, price: 9.5, verified: true },
    { id: 'pizza-drehspiess', number: 44, name: { de: 'Drehspieß Pizza', en: 'Döner pizza', ru: 'Пицца дёнер' }, description: { de: 'mit Dönerfleisch', en: 'with döner meat', ru: 'с мясом дёнера' }, price: 9.5, verified: true },
    { id: 'pizza-salami', number: 45, name: { de: 'Salami Pizza', en: 'Salami pizza', ru: 'Пицца с салями' }, description: { de: 'mit Geflügelsalami', en: 'with poultry salami', ru: 'с салями из птицы' }, price: 9.5, verified: true },
    { id: 'pizza-sucuk', number: 46, name: { de: 'Sucuk Pizza', en: 'Sucuk pizza', ru: 'Пицца с суджуком' }, description: { de: 'mit Knoblauchwurst', en: 'with garlic sausage', ru: 'с чесночной колбасой' }, price: 9.5, verified: true },
    { id: 'pizza-champignon', number: 47, name: { de: 'Champignon', en: 'Mushroom pizza', ru: 'Пицца с шампиньонами' }, description: { de: 'mit Pilzen', en: 'with mushrooms', ru: 'с грибами' }, price: 9.5, verified: true },
    { id: 'pizza-berlin', number: 48, name: { de: 'Berlin Pizza', en: 'Berlin pizza', ru: 'Пицца «Берлин»' }, description: { de: '3 Zutaten nach Wunsch', en: '3 toppings of your choice', ru: '3 ингредиента на выбор' }, price: 10.0, verified: true },
    { id: 'pizza-calzone', number: 49, name: { de: 'Calzone nach Wunsch', en: 'Calzone, your choice of filling', ru: 'Кальцоне на выбор' }, price: 10.0, verified: true },
    { id: 'pizza-familie', number: 50, name: { de: 'Familien Pizza 40cm', en: 'Family pizza 40 cm', ru: 'Семейная пицца 40 см' }, price: 17.0, verified: true },
    { id: 'pizza-apollo', number: 51, name: { de: 'Pizza Apollo', en: 'Pizza Apollo', ru: 'Пицца «Аполло»' }, description: { de: 'mit Schinken, Salami und Pilzen', en: 'with ham, salami and mushrooms', ru: 'с ветчиной, салями и грибами' }, price: 10.5, verified: true },
    { id: 'pizza-broccoli', number: 52, name: { de: 'Pizza Broccoli', en: 'Pizza broccoli', ru: 'Пицца с брокколи' }, description: { de: 'mit Broccoli', en: 'with broccoli', ru: 'с брокколи' }, price: 10.5, verified: true },
    { id: 'pizza-vegetarisch', number: 53, name: { de: 'Pizza Vegetarisch', en: 'Pizza vegetarian', ru: 'Вегетарианская пицца' }, description: { de: 'mit Pilzen, Paprika, Zwiebeln', en: 'with mushrooms, peppers, onions', ru: 'с грибами, перцем, луком' }, price: 10.5, verified: true, image: 'pizza' },
    { id: 'pizza-hawaii', number: 54, name: { de: 'Pizza Hawaii', en: 'Pizza Hawaii', ru: 'Пицца «Гавайи»' }, description: { de: 'mit Schinken und Ananas', en: 'with ham and pineapple', ru: 'с ветчиной и ананасом' }, price: 10.5, verified: true },
    { id: 'pizza-romana', number: 55, name: { de: 'Romana', en: 'Romana', ru: 'Романа' }, description: { de: 'mit Schinken und Pilze', en: 'with ham and mushrooms', ru: 'с ветчиной и грибами' }, price: 10.5, verified: true },
    { id: 'pizza-cipolla', number: 56, name: { de: 'Cipolla', en: 'Cipolla', ru: 'Чиполла' }, description: { de: 'mit Paprika und Zwiebeln', en: 'with peppers and onions', ru: 'с перцем и луком' }, price: 10.5, verified: true },
  ],

  burger: [
    {
      id: 'hamburger',
      name: { de: 'Hamburger', en: 'Hamburger', ru: 'Гамбургер' },
      price: null,
      verified: false,
      image: 'burger',
    },
  ],

  salate: [
    { id: 'salat-thunfisch', number: 37, name: { de: 'Thunfischsalat', en: 'Tuna salad', ru: 'Салат с тунцом' }, price: 8.5, verified: true },
    { id: 'salat-gemischt', number: 38, name: { de: 'Gemischtersalat', en: 'Mixed salad', ru: 'Смешанный салат' }, price: 7.0, verified: true, image: 'salad' },
    { id: 'salat-drehspiess', number: 39, name: { de: 'Drehspieß-Salat', en: 'Döner salad', ru: 'Салат дёнер' }, price: 9.0, verified: true },
    { id: 'salat-bauern', number: 40, name: { de: 'Bauernsalat', en: "Farmer's salad", ru: 'Крестьянский салат' }, price: 7.0, verified: true },
    { id: 'salat-kraut', number: 41, name: { de: 'Krautsalat', en: 'Coleslaw', ru: 'Капустный салат' }, price: 5.0, verified: true },
  ],

  getraenke: [
    { id: 'cola', name: { de: 'Coca Cola 0,33 l', en: 'Coca Cola 0.33 l', ru: 'Coca Cola 0,33 л' }, price: 2.0, verified: true },
    { id: 'cola-light', name: { de: 'Cola Light 0,33 l', en: 'Cola Light 0.33 l', ru: 'Cola Light 0,33 л' }, price: 2.0, verified: true },
    { id: 'fanta', name: { de: 'Fanta 0,33 l', en: 'Fanta 0.33 l', ru: 'Fanta 0,33 л' }, price: 2.0, verified: true },
    { id: 'sprite', name: { de: 'Sprite 0,33 l', en: 'Sprite 0.33 l', ru: 'Sprite 0,33 л' }, price: 2.0, verified: true },
    { id: 'mezzo-mix', name: { de: 'Mezzo-Mix 0,33 l', en: 'Mezzo-Mix 0.33 l', ru: 'Mezzo-Mix 0,33 л' }, price: 2.0, verified: true },
    { id: 'wasser', name: { de: 'Wasser 0,5 l', en: 'Water 0.5 l', ru: 'Вода 0,5 л' }, price: 2.0, verified: true },
    { id: 'ayran', name: { de: 'Ayran 0,25 l', en: 'Ayran 0.25 l', ru: 'Айран 0,25 л' }, price: 2.0, verified: true },
  ],
}

export const getAllItems = () =>
  Object.entries(menu).flatMap(([categoryId, items]) =>
    items.map((item) => ({ ...item, categoryId }))
  )

export const getItemById = (id) => getAllItems().find((item) => item.id === id)
