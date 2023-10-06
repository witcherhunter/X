import one from "./db/nokia/1.jpeg"
import tow from "./db/nokia/2.jpeg"
import three from "./db/nokia/3.jpeg"
import four from "./db/nokia/4.jpeg"
import five from "./db/nokia/5.jpeg"
import six from "./db/nokia/6.jpeg"
import seven from "./db/nokia/7.jpeg"
import eight from "./db/nokia/8.jpeg"
import nine from "./db/nokia/9.jpeg"
import ten from "./db/nokia/10.jpeg"


import { v4 as uuidv4 } from "uuid";

const phones =[
  {  
    'url': 1,
    "id": uuidv4(),
    "title": "Nike Air Monarch IV",
    "img": one,
    "rating": 4.5,
    "price": "199.99",
    "date": "2023-09-06",
    "view": 1234
  },
  {
    'url': 2,
    "id": uuidv4(),
    "title": "Nike Air Vapormax Plus",
    "img": tow,
    "rating": 4.2,
    "price": 119.99,
    "date": "2023-08-25",
    "view": 5678
  },
  {
    'url': 3,
    "id": uuidv4(),
    "title": "Nike Waffle One Sneaker",
    "img": three,
    "rating": 3.8,
    "price": 139.99,
    "date": "2023-08-15",
    "view": 2345
  },
  {
    'url': 4,
    "id": uuidv4(),
    "title": "Nike Running Shoe",
    "img": four,
    "rating": 3.5,
    "price": 79.99,
    "date": "2023-08-10",
    "view": 3456
  },
  {
    'url': 5,
    "id": uuidv4(),
    "title": "Flat Slip On Pumps",
    "img": five,
    "rating": 4.7,
    "price": 299.99,
    "date": "2023-07-30",
    "view": 6789
  },
  {
    'url': 6,
    "id": uuidv4(),
    "title": "Knit Ballet Flat",
    "img": six,
    "rating": 3.2,
    "price": 49.99,
    "date": "2023-07-20",
    "view": 4567
  },
  {
    'url': 7,
    "id": uuidv4(),
    "title": "Loafer Flats",
    "img": seven,
    "rating": 2.9,
    "price": 39.99,
    "date": "2023-07-15",
    "view": 5678
  },
  {
    'url': 8,
    "id": uuidv4(),
    "title": "Nike Zoom Freak",
    "img": eight,
    "rating": 3.1,
    "price": 59.99,
    "date": "2023-07-10",
    "view": 6789
  },
  {
    'url': 9,
    "id": uuidv4(),
    "title": "Nike Men's Sneaker",
    "img": nine,
    "rating": 4.3,
    "price": 249.99,
    "date": "2023-06-30",
    "view": 7890
  },
];

export const productFinder = (url) => {
  return phones.filter((obj)=>{
    return obj.url == url
  })
}



export default phones;