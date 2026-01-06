import { useState } from 'react';

const Qfrom = ({ addtheQuee }) => {
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !service) return;

    addtheQuee({ customer, service });
    setCustomer('');
    setService('');
  };

  return (
    <section className="w-1/2 min-h-screen bg-red-800 flex items-start justify-center py-10 px-8 shadow-inner">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-10">
        <input
          type="text"
          placeholder="Customer name..."
          className="p-3 bg-red-700 text-white border border-red-400 rounded-md outline-none placeholder-red-200"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />

        <div className="relative">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full appearance-none p-3 bg-red-700 text-white border border-red-400 rounded-md outline-none"
          >
            <option value="">Select Service</option>
            <option value="Consulation">Consultation</option>
            <option value="Food-Oder">Food-Oder</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>

          {/* Custom down arrow */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
            ▼
          </span>
        </div>

        <button className="bg-red-500 hover:bg-red-400 text-white p-3 rounded-md shadow-md">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Qfrom;
