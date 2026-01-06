import { useState } from "react";

const Notes = () => {
  const [formData, setFormData] = useState({
    title: "",
    notes: ""
  });

  const [notes, setNotes] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, notes: noteText } = formData;

    if (title.trim() === "" || noteText.trim() === "") return;

    setNotes((prevNotes) => [...prevNotes, { title, noteText }]);

    console.log(notes); // (will log the old state because setState is async)

    setFormData({ title: "", notes: "" });
  };

  return (
    <section className="flex flex-row h-screen items-center justify-between">
      <div className="w-full h-full items-center mx-auto flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
          <div className="w-full flex-col flex gap-3">
            <label className="text-2xl text-white">Enter Your Title*</label>
            <input
              type="text"
              name="title"
              placeholder="Notes... Title"
              className="rounded-md w-[20rem] p-2.5 h-[3rem] border border-amber-50"
              onChange={handleChange}
              value={formData.title}
            />
          </div>

          <div className="w-full flex-col flex gap-3 mt-5">
            <label className="text-2xl text-white">Enter Your Notes*</label>
            <textarea
              name="notes"
              placeholder="Notes..."
              className="rounded-md w-[25rem] p-2.5 h-[10rem] border border-amber-50"
              onChange={handleChange}
              value={formData.notes}
            />
          </div>

          <button
            type="submit"
            disabled={formData.title.trim() === "" || formData.notes.trim() === ""}
            className="py-3 px-3 bg-amber-200 text-black rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          <ul className="flex flex-col gap-4">
            {notes.map((note, index) => (
              <li key={index} className="bg-amber-100 text-black p-4 rounded-md w-[25rem]">
                <h3 className="font-bold">{note.title}</h3>
                <p>{note.noteText}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Notes;
