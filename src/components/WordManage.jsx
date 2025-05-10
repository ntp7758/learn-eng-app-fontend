const WordManage = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Vocabulary Management
      </h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Word"
        value={formData.word}
        onChange={(e) => setFormData({ ...formData, word: e.target.value })}
      />
      <select
        className="border p-2 w-full mb-2"
        value={formData.partsOfSpeech}
        onChange={(e) =>
          setFormData({ ...formData, partsOfSpeech: e.target.value })
        }
      >
        <option value="">Select Parts of Speech</option>
        <option value="Noun">Noun</option>
        <option value="Verb">Verb</option>
        <option value="Verb-1">Verb-1</option>
        <option value="Verb-2">Verb-2</option>
        <option value="Verb-3">Verb-3</option>
        <option value="Adjective">Adjective</option>
        <option value="Adverb">Adverb</option>
        <option value="Preposition">Preposition</option>
        <option value="Conjunction">Conjunction</option>
        <option value="Interjection">Interjection</option>
        <option value="Pronoun">Pronoun</option>
      </select>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Category"
        value={formData.categories}
        onChange={(e) =>
          setFormData({ ...formData, categories: e.target.value })
        }
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder={`Meaning`}
        value={formData.meanings}
        onChange={(e) => {
          setFormData({ ...formData, meanings: e.target.value });
        }}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {"Add or Update"}
      </button>
    </div>
  );
};

export default WordManage;
