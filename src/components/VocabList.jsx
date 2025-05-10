const VocabList = ({ columns, setFormData, tts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map((column, colIdx) => (
        <ul key={colIdx} className="space-y-2">
          {column.map((item, idx) => (
            <li
              key={idx}
              className="border p-2 rounded shadow bg-white flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-base">
                  {item.word}{" "}
                  <span className="text-sm text-gray-500">
                    ({item.partsOfSpeech})
                  </span>
                </span>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>
                    {item.meanings.map(
                      (data, i) => ` ${i > 0 ? ", " : ""} ${data}`
                    )}
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => tts(item.word)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  🔊
                </button>
                <button
                  onClick={() => setFormData(item)}
                  className="text-blue-600 underline text-sm"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default VocabList;
