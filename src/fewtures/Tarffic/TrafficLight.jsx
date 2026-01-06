import { useEffect, useState } from 'react';
const API = 'https://fakestoreapi.com/products';
const TrafficLight = () => {
  const [product, setProduct] = useState([]);

  const handleFeath = async () => {
    try {
      const fetahPro = await fetch(API);
      const data = await fetahPro.json();
      console.log(data);
      setProduct(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFeath();
  }, []);

  return (
    <div>
      {Array.isArray(product) && product.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default TrafficLight;
