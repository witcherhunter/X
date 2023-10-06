import l1p1 from "./db/phone/1/1.jpg"
import l1p2 from "./db/phone/1/2.jpg"
import l1p3 from "./db/phone/1/3.jpg"
import l1p4 from "./db/phone/1/4.jpg"

import l2p1 from "./db/phone/2/1.jpg"
import l2p2 from "./db/phone/2/2.jpg"
import l2p3 from "./db/phone/2/3.jpg"
import l2p4 from "./db/phone/2/4.jpg"

import l3p1 from "./db/phone/3/1.jpg"
import l3p2 from "./db/phone/3/2.jpg"
import l3p3 from "./db/phone/3/3.jpg"
import l3p4 from "./db/phone/3/4.jpg"

import l4p1 from "./db/phone/4/1.jpg"
import l4p2 from "./db/phone/4/2.jpg"
import l4p3 from "./db/phone/4/3.jpg"
import l4p4 from "./db/phone/4/4.jpg"

import l5p1 from "./db/phone/5/1.jpg"
import l5p2 from "./db/phone/5/2.jpg"
import l5p3 from "./db/phone/5/3.jpg"
import l5p4 from "./db/phone/5/4.jpg"




export const phones =[
  {
    "id": 1,
    "url": "1",
    "title": "Samsung Galaxy S21 Ultra",
    "color": ["Phantom Black"],
    "thumbnail": l1p1,
    "rating": 4.9,
    "price": 1249.99,
    "date": "2023-09-26",
    "images": [l1p2,l1p3,l1p4],
    "view": 8500,
    "description": "The Samsung Galaxy S21 Ultra is a flagship smartphone with a stunning 6.8-inch Quad HD+ display. It's powered by the powerful Exynos 2100 processor and comes with 12GB of RAM and 256GB of storage. The phone boasts a versatile quad-camera system, delivering exceptional photography and videography capabilities. With a massive 5000mAh battery, it provides all-day battery life.",
    "specifications": {
      "processor": "Exynos 2100",
      "memory": "12GB RAM",
      "storage": "256GB",
      "display": "6.8-inch Quad HD+",
      "camera": "Quad-camera system",
      "battery_life": "Up to 24 hours",
      "operating_system": "Android 11",
      "ports": "USB Type-C, 3.5mm headphone jack"
    }
  },
  {
    "id": 2,
    "url": "2",
    "title": "iPhone 13 Pro Max",
    "color": ["Graphite"],
    "thumbnail": l2p1,
    "rating": 4.9,
    "price": 1399.99,
    "date": "2023-09-26",
    "images": [l2p2,l2p3,l2p4],
    "view": 9200,
    "description": "The iPhone 13 Pro Max is Apple's latest flagship phone featuring a 6.7-inch Super Retina XDR display. It's powered by the A15 Bionic chip, delivering unmatched performance. The phone excels in photography with its advanced triple-camera system. It offers 5G connectivity and impressive battery life, making it a top choice for users seeking a premium smartphone experience.",
    "specifications": {
      "processor": "A15 Bionic",
      "memory": "6GB RAM",
      "storage": "512GB",
      "display": "6.7-inch Super Retina XDR",
      "camera": "Triple-camera system",
      "battery_life": "Up to 20 hours",
      "operating_system": "iOS 15",
      "ports": "Lightning port"
    }
  },
  {
    "id": 3,
    "url": "3",
    "title": "Google Pixel 6 Pro",
    "color": ["Cloudy White"],
    "thumbnail": l3p1,
    "rating": 4.8,
    "price": 999.99,
    "date": "2023-09-26",
    "images": [l3p2,l3p3,l3p4],
    "view": 7800,
    "description": "The Google Pixel 6 Pro is a powerful smartphone with a 6.7-inch OLED display and a high-quality camera setup. It's equipped with Google's custom-built Tensor chip, ensuring smooth performance and AI capabilities. The phone runs on the latest version of Android and offers excellent battery life, making it a great choice for Android enthusiasts.",
    "specifications": {
      "processor": "Google Tensor",
      "memory": "8GB RAM",
      "storage": "256GB",
      "display": "6.7-inch OLED",
      "camera": "Dual-camera system",
      "battery_life": "Up to 18 hours",
      "operating_system": "Android 12",
      "ports": "USB Type-C, 3.5mm headphone jack"
    }
  },
  {
    "id": 4,
    "url": "4",
    "title": "OnePlus 9 Pro",
    "color": ["Morning Mist"],
    "thumbnail": l4p1,
    "rating": 4.7,
    "price": 899.99,
    "date": "2023-09-26",
    "images": [l4p2,l4p3,l4p4],
    "view": 6800,
    "description": "The OnePlus 9 Pro is a flagship smartphone known for its exceptional camera performance and fast charging capabilities. It features a 6.7-inch Fluid AMOLED display and is powered by the Qualcomm Snapdragon 888 processor. With 12GB of RAM and 256GB of storage, it offers a smooth and responsive user experience.",
    "specifications": {
      "processor": "Qualcomm Snapdragon 888",
      "memory": "12GB RAM",
      "storage": "256GB",
      "display": "6.7-inch Fluid AMOLED",
      "camera": "Quad-camera system",
      "battery_life": "Up to 22 hours",
      "operating_system": "OxygenOS based on Android 11",
      "ports": "USB Type-C, 3.5mm headphone jack"
    }
  },
  {
    "id": 5,
    "url": "5",
    "title": "Xiaomi Mi 11 Ultra",
    "color": ["Ceramic Black"],
    "thumbnail": l5p1,
    "rating": 4.8,
    "price": 1099.99,
    "date": "2023-09-26",
    "images": [l5p2,l5p3,l5p4],
    "view": 7300,
    "description": "The Xiaomi Mi 11 Ultra is a powerful smartphone equipped with a 6.81-inch AMOLED display and a versatile triple-camera system. It is powered by the Qualcomm Snapdragon 888 processor, providing excellent performance and efficiency. The phone supports fast charging and offers a large battery capacity for extended usage.",
    "specifications": {
      "processor": "Qualcomm Snapdragon 888",
      "memory": "12GB RAM",
      "storage": "256GB",
      "display": "6.81-inch AMOLED",
      "camera": "Triple-camera system",
      "battery_life": "Up to 24 hours",
      "operating_system": "MIUI 12 based on Android 11",
      "ports": "USB Type-C, 3.5mm headphone jack"
    }
  }
];


export const phoneFinder = (url) => {
  return phones.filter((obj)=>{
    return obj.url == url
  })
}
