import { useState } from "react";

const Inter = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [res, setRes] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSUBMIT = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { fullName, email, password } = formData;
    setRes({ fullName, email, password });
    setFormData({ fullName: "", email: "", password: "" });
    setError({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Precompute validity for disabling button
  const isValid =
    formData.fullName.trim() &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.password.length >= 6;

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[40rem] h-[30rem] bg-white shadow-2xl rounded-2xl p-6">
        <form className="flex flex-col gap-4" onSubmit={handleSUBMIT}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            value={formData.fullName}
            onChange={handleChange}
          />
          {error.fullName && (
            <p className="text-red-500 text-sm">{error.fullName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && (
            <p className="text-red-500 text-sm">{error.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}

          <button
            type="submit"
            disabled={!isValid}
            className={`mt-4 h-11 rounded-md font-medium transition duration-300 ${
              isValid
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>

        <div className="mt-6 p-4 border-t">
          <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
          <pre className="bg-gray-100 p-4 rounded-md">
            {JSON.stringify(res, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Inter;
