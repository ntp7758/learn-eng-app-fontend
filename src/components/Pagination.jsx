const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="mt-6 mb-6 flex justify-center gap-2">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        ⬅️
      </button>
      <span className="px-4 py-2 font-semibold">
        Page {page} / {totalPages}
      </span>
      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;
