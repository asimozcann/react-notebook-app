import { useEffect, useState } from "react";
import Notes from "./Notes";

const NotebookForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [notes, setNotes] = useState(() => {
    try {
      const stored = localStorage.getItem("notes");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Bozuk localStorage verisi:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (e) => {
    e.preventDefault();

    const newNote = { id: Date.now(), category, title, text };

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = newNote;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes((prevState) => [...prevState, newNote]);
    }

    // Formu temizle
    setCategory("");
    setTitle("");
    setText("");
  };

  const handleEdit = (index) => {
    const note = notes[index];
    setCategory(note.category);
    setTitle(note.title);
    setText(note.text);
    setEditIndex(index);
  };
  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  const clearNote = () => {
    setNotes([]);
  };
  const filteredNotes =
    selectedCategory === "Tümü"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Yeni Not Ekle</h1>
      <form onSubmit={addNewNote}>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Not Başlığı "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="">
          <div>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="my-4 py-2 px-3 rounded-md border border-gray-300 shadow-md"
              required
            >
              <option value="">Kategoriler</option>
              <option value="İş">İş</option>
              <option value="Yaşam">Yaşam</option>
              <option value="Eğitim">Eğitim</option>
              <option value="Kişisel">Kişisel</option>
            </select>
          </div>
        </div>
        <textarea
          type="text"
          className="resize-none w-full border p-2 rounded-md border-gray-300"
          rows="6"
          placeholder="Notunuzu buraya yazınız..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-amber-200 p-2 rounded-md cursor-pointer border border-amber-500"
        >
          {editIndex !== null ? "Notu Güncelle" : "Notu Ekle"}
        </button>
      </form>
      <div className="my-4">
        <label className="mr-2">Kategoriye göre filtrele:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="py-2 px-3 rounded-md border border-gray-300"
        >
          <option value="Tümü">Tümü</option>
          <option value="İş">İş</option>
          <option value="Yaşam">Yaşam</option>
          <option value="Eğitim">Eğitim</option>
          <option value="Kişisel">Kişisel</option>
        </select>
      </div>

      <Notes
        notes={filteredNotes}
        onEdit={handleEdit}
        onRemove={removeNote}
        onClear={clearNote}
      />
    </div>
  );
};

export default NotebookForm;
