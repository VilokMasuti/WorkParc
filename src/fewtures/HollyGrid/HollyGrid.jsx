function HolyGrid() {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 p-4 text-center shadow">
        <h1 className="text-3xl font-bold text-gray-800">Header</h1>
      </header>

      {/* Main Content Wrapper */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Sidebar */}
        <aside className="bg-gray-100 p-4 md:w-1/5 flex items-center justify-center shadow-inner">
          <h2 className="text-xl font-semibold text-gray-700">Left Sidebar</h2>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-4 flex items-center justify-center shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800">Main Content</h2>
        </main>

        {/* Right Sidebar */}
        <aside className="bg-gray-100 p-4 md:w-1/5 flex items-center justify-center shadow-inner">
          <h2 className="text-xl font-semibold text-gray-700">Right Sidebar</h2>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center shadow">
        <h2 className="text-2xl font-bold text-gray-800">Footer</h2>
      </footer>
    </section>
  );
}

export default HolyGrid;
