import { useState } from 'react';
import Qfrom from './Qfrom';
import Res from './Res';

const Apps = () => {
  const [Quee, setQuee] = useState([]);

  const addtheQuee = (customer) => {
    setQuee([...Quee, { ...customer, id: Date.now(), status: 'pending' }]);
  };

  const removeQuee = (id) => {
    setQuee(Quee.filter((q) => q.id !== id));
  };

  const updateQuee = (id, newStatus) => {
    setQuee(Quee.map((q) => (q.id === id ? { ...q, status: newStatus } : q)));
  };

  return (
    <main className="w-full h-screen flex shadow-2xl font-mono">
      <Qfrom addtheQuee={addtheQuee} />
      <Res Quee={Quee} removeQuee={removeQuee} updateQuee={updateQuee} />
    </main>
  );
};

export default Apps;
