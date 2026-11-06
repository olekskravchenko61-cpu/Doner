import heroDoner from './hero-doner.jpg'
import heroDonerWebp from './hero-doner.webp'
import heroDoner800 from './hero-doner-800.webp'
import donerBread from './doner-bread.jpg'
import donerBreadWebp from './doner-bread.webp'
import donerBread800 from './doner-bread-800.webp'
import donerPrep from './doner-prep.jpg'
import donerPrepWebp from './doner-prep.webp'
import donerPrep800 from './doner-prep-800.webp'
import pizzaVegetable from './pizza-vegetable.jpg'
import pizzaVegetableWebp from './pizza-vegetable.webp'
import pizzaVegetable800 from './pizza-vegetable-800.webp'
import pizzaMargherita from './pizza-margherita.jpg'
import pizzaMargheritaWebp from './pizza-margherita.webp'
import burger from './burger.jpg'
import burgerWebp from './burger.webp'
import burger800 from './burger-800.webp'
import salad from './salad.jpg'
import saladWebp from './salad.webp'
import salad800 from './salad-800.webp'
import durum from './durum.jpg'
import durumWebp from './durum.webp'
import durum800 from './durum-800.webp'
import menuCombo from './menu-combo.jpg'
import menuComboWebp from './menu-combo.webp'
import menuCombo800 from './menu-combo-800.webp'
import drinks from './drinks.jpg'
import drinksWebp from './drinks.webp'
import drinks800 from './drinks-800.webp'

// All photos are temporary stock from Wikimedia Commons and Pexels, not Berlin Döner's food.
// `altKey` keeps them labelled as sample photos in every language.
export const images = {
  doner: { jpg: heroDoner, webp: heroDonerWebp, webp800: heroDoner800, width: 1600, height: 1067, altKey: 'alt.doner' },
  donerBread: { jpg: donerBread, webp: donerBreadWebp, webp800: donerBread800, width: 1085, height: 845, altKey: 'alt.donerBread' },
  donerPrep: { jpg: donerPrep, webp: donerPrepWebp, webp800: donerPrep800, width: 990, height: 1760, altKey: 'alt.prep' },
  pizza: { jpg: pizzaVegetable, webp: pizzaVegetableWebp, webp800: pizzaVegetable800, width: 1400, height: 934, altKey: 'alt.pizza' },
  pizzaMargherita: { jpg: pizzaMargherita, webp: pizzaMargheritaWebp, width: 1024, height: 768, altKey: 'alt.margherita' },
  burger: { jpg: burger, webp: burgerWebp, webp800: burger800, width: 1400, height: 1400, altKey: 'alt.burger' },
  salad: { jpg: salad, webp: saladWebp, webp800: salad800, width: 1400, height: 1096, altKey: 'alt.salad' },
  durum: { jpg: durum, webp: durumWebp, webp800: durum800, width: 1300, height: 760, altKey: 'alt.durum' },
  menuCombo: { jpg: menuCombo, webp: menuComboWebp, webp800: menuCombo800, width: 1400, height: 1400, altKey: 'alt.menuCombo' },
  drinks: { jpg: drinks, webp: drinksWebp, webp800: drinks800, width: 1200, height: 1800, altKey: 'alt.drinks' },
}

const commons = (file) => `https://commons.wikimedia.org/wiki/File:${file}`
const SA3 = 'https://creativecommons.org/licenses/by-sa/3.0/'
const SA4 = 'https://creativecommons.org/licenses/by-sa/4.0/'
const PEXELS = 'https://www.pexels.com/license/'

export const imageCredits = [
  { key: 'doner', title: 'Delicious Doner Kebab with Fries on Wooden Table', author: 'Peyman Hamsayeh', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/delicious-doner-kebab-with-fries-on-wooden-table-34106235/', edit: 'gespiegelt, verkleinert' },
  { key: 'donerBread', title: 'Delicious Doner Kebab with Fries and Cola', author: 'Nano Erdozain', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/delicious-doner-kebab-with-fries-and-cola-29306498/', edit: 'zugeschnitten' },
  { key: 'donerPrep', title: 'Man Cutting Doner Kebab', author: 'Ezginur Varlı', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/man-cutting-doner-kebab-24981551/', edit: 'zugeschnitten' },
  { key: 'pizza', title: 'Food Photography of Pizza', author: 'Engin Akyurt', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/food-photography-of-pizza-1552635/' },
  { key: 'pizzaMargherita', title: 'Eq it-na pizza-margherita sep2005 sml', author: 'Valerio Capello', license: 'CC BY-SA 3.0', licenseUrl: SA3, url: commons('Eq_it-na_pizza-margherita_sep2005_sml.jpg'), edit: 'neu komprimiert, in WebP umgewandelt' },
  { key: 'burger', title: 'Close-up of a Cheeseburger', author: 'Jonathan Borba', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/close-up-of-a-cheeseburger-19247562/', edit: 'zugeschnitten' },
  { key: 'salad', title: 'Традиционална македонска салата', author: 'RatkaA', license: 'CC BY-SA 4.0', licenseUrl: SA4, url: commons('%D0%A2%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0_%D0%BC%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%B0.jpg'), edit: 'zugeschnitten, verkleinert, Farben und Kontrast angepasst' },
  { key: 'durum', title: 'tavuk dürüm döner', author: 'ufuk iseloglu', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/tavuk-durum-doner-27744717/', edit: 'zugeschnitten' },
  { key: 'menuCombo', title: 'Delicious Doner Kebab with Fries and Coke', author: 'Nano Erdozain', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/delicious-doner-kebab-with-fries-and-coke-29306499/', edit: 'verkleinert; die abgebildete Marke steht in keiner Verbindung zu dieser Website' },
  { key: 'drinks', title: 'A Glass of Iced Cola', author: 'Ron Lach', license: 'Pexels-Lizenz', licenseUrl: PEXELS, url: 'https://www.pexels.com/photo/a-glass-of-iced-cola-8879617/', edit: 'verkleinert' },
]
