import NotebookForm from "./components/NotebookForm";
function App() {
  return (
    <div className=" mx-auto bg-orange-200  min-h-screen h-full flex p-6 justify-center items-center">
      <div className="p-4 bg-neutral-100 w-full max-w-[1200px] shadow-md rounded-md">
        <h1 className="text-center font-bold text-4xl">Not Defteri Uygulaması</h1>
        <NotebookForm />
      </div>
    </div>
  );
}

export default App;
