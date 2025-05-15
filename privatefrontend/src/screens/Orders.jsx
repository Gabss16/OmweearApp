import React from 'react';
import OrderCard from '../components/OrderCard'; // ajusta el path según tu estructura
import './Orders.css'; // si usás estilos específicos

const Orders = () => {
  const orders = [
    {
      userInitial: 'A',
      userName: 'Ana García',
      orderNumber: '001',
      status: 'Pendiente',
      statusColor: 'orange',
      total: '$75.00',
      items: [
        { product: 'Camisa', quantity: 1, price: '$25.00' },
        { product: 'Pantalón', quantity: 1, price: '$50.00' }
      ],
      onDetails: () => console.log('Detalles de Ana'),
      onDelivered: () => console.log('Entregado Ana'),
    },
    {
      userInitial: 'B',
      userName: 'Benjamín López',
      orderNumber: '002',
      status: 'En camino',
      statusColor: 'blue',
      total: '$120.00',
      items: [
        { product: 'Zapatos', quantity: 2, price: '$60.00' }
      ],
      onDetails: () => console.log('Detalles de Benjamín'),
      onDelivered: () => console.log('Entregado Benjamín'),
    },
    {
      userInitial: 'C',
      userName: 'Carla Ruiz',
      orderNumber: '003',
      status: 'Entregado',
      statusColor: 'green',
      total: '$30.00',
      items: [
        { product: 'Gorra', quantity: 1, price: '$30.00' }
      ],
      onDetails: () => console.log('Detalles de Carla'),
      onDelivered: () => console.log('Entregado Carla'),
    },
    {
      userInitial: 'D',
      userName: 'David Torres',
      orderNumber: '004',
      status: 'Pendiente',
      statusColor: 'orange',
      total: '$80.00',
      items: [
        { product: 'Chaqueta', quantity: 1, price: '$80.00' }
      ],
      onDetails: () => console.log('Detalles de David'),
      onDelivered: () => console.log('Entregado David'),
    },
    {
      userInitial: 'E',
      userName: 'Elena Martínez',
      orderNumber: '005',
      status: 'En camino',
      statusColor: 'blue',
      total: '$90.00',
      items: [
        { product: 'Vestido', quantity: 1, price: '$90.00' }
      ],
      onDetails: () => console.log('Detalles de Elena'),
      onDelivered: () => console.log('Entregado Elena'),
    },
    {
      userInitial: 'F',
      userName: 'Fernando Díaz',
      orderNumber: '006',
      status: 'Entregado',
      statusColor: 'green',
      total: '$45.00',
      items: [
        { product: 'Bufanda', quantity: 3, price: '$15.00' }
      ],
      onDetails: () => console.log('Detalles de Fernando'),
      onDelivered: () => console.log('Entregado Fernando'),
    },
  ];

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <div className="orders-grid">
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    </div>
  );
};





export default Orders;
