import { useEffect, useState } from "react";


/* Full working implementation — replace your file with this exact code */
const style = {
  table: { borderCollapse: "collapse", marginTop: 20 },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "6px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "16px",
      border: "1px solid #E6EEF2",
      borderRadius: "10px",
      width: "max-content",
      marginBottom: "20px"
    },
    inputs: { marginBottom: "8px" },
    submitBtn: {
      marginTop: "8px",
      padding: "8px 12px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "6px",
      color: "#fff",
      cursor: "pointer"
    }
  }
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [form, setForm] = useState({
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { userFirstname, userLastname, userPhone } = form;
    if (!userFirstname.trim() || !userLastname.trim() || !userPhone.trim()) return;
    addEntryToPhoneBook({
      firstName: userFirstname.trim(),
      lastName: userLastname.trim(),
      phone: userPhone.trim()
    });
    setForm({ userFirstname: "Coder", userLastname: "Byte", userPhone: "8885559999" });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container} id="phoneBookForm">
      <label>First name:</label><br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={form.userFirstname}
        onChange={handleChange}
      /><br />

      <label>Last name:</label><br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={form.userLastname}
        onChange={handleChange}
      /><br />

      <label>Phone:</label><br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={form.userPhone}
        onChange={handleChange}
      /><br />

      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        disabled={!form.userFirstname || !form.userLastname || !form.userPhone}
      />
    </form>
  );
}

function InformationTable({ entries }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(entries) && entries.length > 0 ? (
          entries.map((e, i) => (
            <tr key={i}>
              <td style={style.tableCell}>{e.firstName}</td>
              <td style={style.tableCell}>{e.lastName}</td>
              <td style={style.tableCell}>{e.phone}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={style.tableCell} colSpan={3}>
              No entries
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function Application() {
    const [entries, setEntries] = useState([]);

  // Load entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("entries");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save only when entries changes
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);



  const addEntryToPhoneBook = (entry) => {
    const base = Array.isArray(entries) ? [...entries] : [];
    base.push(entry);
    base.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setEntries(base);
  };




  return (
    <section className=" h-screen w-full flex flex-col items-center justify-center bg-slate-50 shadow-2xl  mx-auto p-5">
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
    </section>
  );
}



export default Application;
