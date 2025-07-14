import NotebookForm from "./components/NotebookForm";
function App() {
  return (
    <div className=" mx-auto bg-orange-200  min-h-screen h-full flex lg:p-6 p-2 justify-center items-center">
      <div className="md:p-4 p-2 bg-neutral-100 w-full max-w-[1200px] shadow-md rounded-md">
        <h1 className="text-center font-bold lg:text-4xl text-3xl">
          Not Defteri
        </h1>
        <NotebookForm />
      </div>
    </div>
  );
}

export default App;
