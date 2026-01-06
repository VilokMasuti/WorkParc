const Res = ({ Quee, removeQuee, updateQuee }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'done':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="w-1/2 min-h-screen bg-red-900 flex flex-col items-start px-10 py-10 overflow-y-auto">
      {Quee.length === 0 ? (
        <h1 className="text-red-100 text-3xl underline">No data found</h1>
      ) : (
        <div className="w-full flex flex-col gap-6">
          {Quee.map((q) => (
            <div key={q.id} className="bg-red-700 p-6 rounded-lg shadow-md flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl text-white">Name — {q.customer}</h1>

                <span
                  className={`text-xl px-3 py-1 text-white rounded-md ${getStatusColor(q.status)}`}
                >
                  {q.status}
                </span>
              </div>

              <p className="text-xl text-white">Service — {q.service}</p>

              <div className="flex gap-4 mt-3">
                {q.status !== 'done' && (
                  <button
                    onClick={() => updateQuee(q.id, 'done')}
                    className="bg-green-600 px-3 py-1 rounded-md text-white"
                  >
                    Mark Done
                  </button>
                )}

                {q.status !== 'cancelled' && (
                  <button
                    onClick={() => updateQuee(q.id, 'cancelled')}
                    className="bg-yellow-500 px-3 py-1 rounded-md text-black"
                  >
                    Cancel
                  </button>
                )}

                <button
                  onClick={() => removeQuee(q.id)}
                  className="bg-red-600 px-3 py-1 rounded-md text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Res;
