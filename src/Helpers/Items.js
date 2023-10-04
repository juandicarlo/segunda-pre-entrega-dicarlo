export const items = [
    {
      id: 1,
      title: 'Camisa',
      precio: 9.299,
      imagen: '/img/camisa1.jpg',
    },
    {
      id: 2,
      title: 'Remera',
      precio: 6.599,
      imagen: '/img/remera1.jpg',
    },
    {
      id: 3,
      title: 'Pantalón',
      precio: 15.999,
      imagen: '/img/pantalon1.jpg',
    },
    {
      id: 4,
      title: 'Zapatillas',
      precio: 90.999,
      imagen: '/img/zapatilla1.jpg',
    },
    {
      id: 5,
      title: 'Skates',
      precio: 118.899,
      imagen: '/img/skate1.jpg',
    },
    {
      id: 6,
      title: 'Buzos',
      precio: 27.949,
      imagen: '/img/buzo1.jpg',
    },
  ];
  
  export function getItemById(id) {
    return items.find((item) => item.id == id);
  }