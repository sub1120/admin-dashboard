import Table from "./components/table/Table";

function App() {
  return (
    <div className="h-screen bg-slate-100">
      <header>
        <h1 className="pt-10 text-center text-4xl">User Admin Dashboard</h1>
      </header>
      <main>
        <div className="mx-10 my-10 w-[80%] md:mx-auto md:my-20 md:w-[1000px]">
          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
