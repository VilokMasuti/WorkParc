import { useRef, useState } from "react";

export default function SimpleUploadCard() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files).map((file) => ({
      id: crypto.randomUUID(),
      file,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Uploads
          </button>
        </div>

        <input
          type="file"
          multiple
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {files.map(({ id, file }) => (
          <div
            key={id}
            className="truncate rounded-xl border border-gray-200 bg-white p-3 text-center shadow"
            title={file.name}
          >
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}
