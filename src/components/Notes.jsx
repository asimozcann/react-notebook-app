const Notes = ({ notes, onEdit, onRemove,onClear }) => {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        Henüz eklenmiş bir not yok.
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Notlar</h1>

      <div className="bg-amber-200 p-2 mt-2 grid lg:grid-cols-3 gap-4 rounded-md">
        {notes.map((note) => (
          <div key={note.id} className="bg-neutral-100 rounded-md p-2">
            <div className="flex justify-between items-center">
              <h2 className="capitalize font-semibold text-lg">{note.title}</h2>
              <h2 className="text-gray-400">{note.category}</h2>
            </div>
            <hr className="text-gray-300" />
            <div className="flex flex-row justify-between items-center gap-4 mt-2 ">
              <p className="break-words capitalize whitespace-pre-wrap h-full max-h-36 overflow-auto">
                {note.text}
              </p>

              <div className="flex lg:flex-row flex-col gap-2">
                <button
                  onClick={() => onEdit(note.id)}
                  className="bg-amber-200 lg:p-2 p-1 rounded-md cursor-pointer border border-amber-500"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => onRemove(note.id)}
                  className="bg-red-300 lg:p-2 p-1 rounded-md cursor-pointer border border-amber-200"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>onClear()} className="bg-red-400 mt-4 p-2 rounded-md cursor-pointer border border-amber-200 text-white">Hepsini Sil</button>
    </div>
  );
};

export default Notes;
