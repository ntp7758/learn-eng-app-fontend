const VocabFilter = ({
  filter,
  uniqueParts,
  categoriesUniqueParts,
  setFilter,
}) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">🔍 Filter Vocabulary</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Search Word"
          value={filter.word}
          onChange={(e) => setFilter({ ...filter, word: e.target.value })}
        />
        <select
          className="border p-2 w-full"
          value={filter.partsOfSpeech}
          onChange={(e) =>
            setFilter({ ...filter, partsOfSpeech: e.target.value })
          }
        >
          <option value="">All Parts of Speech</option>
          {uniqueParts.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="border p-2 w-full"
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <option value="">Select Categories</option>
          {categoriesUniqueParts.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VocabFilter;
