// i duplicated items i should 
// rewrite ID they are DUPLICATED

const cars = [
  {
      id:1,
      name:'2021 Nissan',
      price:469,
      img:'./image/nissan.jpg',
      description:'Leaf e+ N-Connecta',
      control:'Automatic.',
      type:'Electric'
  },
  {
      id:2,
      name:'2021 Ford',
      price:439,
      img:'./image/ford.jpg',
      description:'Puma ST-Line - 1.OT',
      control:'Manual.',
      type:'Hybrid'
  },
  {
      id:3,
      name:'2020 Mercedes-Benz',
      price:599,
      img:'./image/MercedesBenz.jpg',
      description:'A180 AMG Line Executive - 1.3',
      control:'Automatic.',
      type:'Petrol'
  },
  {
      id:4,
      name:'2020 BMW',
      price:539,
      img:'./image/bmw.jpg',
      description:'118i M Sport - 1.5',
      control:'Automatic.',
      type:'Petrol'
  },
  {
      id:5,
      name:'2019 Audi',
      price:439,
      img:'./image/audi.jpg',
      description:'A4 SE - 2.0',
      control:'Manual.',
      type:'Petrol'
  },
  {
      id:6,
      name:'2021 Peugeot',
      price:539,
      img:'./image/pego.jpg',
      description:'3008 Allure - 1.2',
      control:'Manual.',
      type:'Petrol'
  },
  {
      id:7,
      name:'2020 Audi',
      price:979,
      img:'./image/audi2.jpg',
      description:'e-tron Technik',
      control:'Automatic.',
      type:'Electric'
  },
  {
      id:8,
      name:'2021 Kia',
      price:409,
      img:'./image/kia.jpg',
      description:'Ceed 2 - 1.0T-GDi',
      control:'Manual.',
      type:'Petrol'
  },
  {
      id:9,
      name:'2020 MG Motor UK',
      price:469,
      img:'./image/mazda.jpg',
      description:'MG ZS EV Excite',
      control:'Automatic.',
      type:'Electric'
  },
  {
    id:1,
    name:'2021 Nissan',
    price:469,
    img:'./image/nissan.jpg',
    description:'Leaf e+ N-Connecta',
    control:'Automatic.',
    type:'Electric'
},
{
    id:2,
    name:'2021 Ford',
    price:439,
    img:'./image/ford.jpg',
    description:'Puma ST-Line - 1.OT',
    control:'Manual.',
    type:'Hybrid'
},
{
    id:3,
    name:'2020 Mercedes-Benz',
    price:599,
    img:'./image/MercedesBenz.jpg',
    description:'A180 AMG Line Executive - 1.3',
    control:'Automatic.',
    type:'Petrol'
},
{
    id:4,
    name:'2020 BMW',
    price:539,
    img:'./image/bmw.jpg',
    description:'118i M Sport - 1.5',
    control:'Automatic.',
    type:'Petrol'
},
{
    id:5,
    name:'2019 Audi',
    price:439,
    img:'./image/audi.jpg',
    description:'A4 SE - 2.0',
    control:'Manual.',
    type:'Petrol'
},
{
    id:6,
    name:'2021 Peugeot',
    price:539,
    img:'./image/pego.jpg',
    description:'3008 Allure - 1.2',
    control:'Manual.',
    type:'Petrol'
},
{
    id:7,
    name:'2020 Audi',
    price:979,
    img:'./image/audi2.jpg',
    description:'e-tron Technik',
    control:'Automatic.',
    type:'Electric'
},
{
    id:8,
    name:'2021 Kia',
    price:409,
    img:'./image/kia.jpg',
    description:'Ceed 2 - 1.0T-GDi',
    control:'Manual.',
    type:'Petrol'
},
{
    id:9,
    name:'2020 MG Motor UK',
    price:469,
    img:'./image/mazda.jpg',
    description:'MG ZS EV Excite',
    control:'Automatic.',
    type:'Electric'
},

]


const filters = [
  {
    "Audi":2,
    "BMW":4,
    "FIAT":8, 
    "Ford":10, 
    "Honda":11, 
    "Hyundai":3 
  },
  {
    "Audi":2,
    "BMW":4
  },
  {
    "Compact":2,
    "Premium":4
  },
]

export default {
  cars,filters
};