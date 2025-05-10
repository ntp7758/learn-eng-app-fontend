import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import VocabFilter from "../components/VocabFilter";
import WordManage from "../components/WordManage";
import Pagination from "../components/Pagination";
import VocabList from "../components/VocabList";
import tts from "../services/tts";

const VocabularyPage = () => {
  const [vocabList, setVocabList] = useState([]);
  const [filteredVocab, setFilteredVocab] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    word: "",
    partsOfSpeech: "",
    category: "",
  });
  const [formData, setFormData] = useState({
    word: "",
    meanings: [""],
    partsOfSpeech: "",
    categories: [""],
  });

  const fetchData = async () => {
    const res = await apiClient.get("/get-all");
    const list = res.data.data;
    const sortedList = [...list].reverse();
    setVocabList(sortedList);
    setFilteredVocab(sortedList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meaningsArray = Array.isArray(formData.meanings)
      ? formData.meanings
      : typeof formData.meanings === "string"
      ? formData.meanings.split(",").map((m) => m.trim())
      : [];
    const categoriesArray = Array.isArray(formData.categories)
      ? formData.categories
      : typeof formData.categories === "string"
      ? formData.categories.split(",").map((m) => m.trim())
      : [];
    const payload = {
      word: formData.word.trim(),
      partsOfSpeech: formData.partsOfSpeech.trim(),
      meanings: meaningsArray,
      categories: categoriesArray,
    };
    await apiClient.post("/add-word-or-meaning", payload);
    setFormData({
      word: "",
      meanings: [""],
      partsOfSpeech: "",
      categories: [""],
    });
    fetchData();
  };

  useEffect(() => {
    const filtered = vocabList.filter((item) => {
      const wordMatch = item.word
        .toLowerCase()
        .includes(filter.word.toLowerCase());
      const posMatch = filter.partsOfSpeech
        ? item.partsOfSpeech === filter.partsOfSpeech
        : true;
      const categoryMatch = filter.category
        ? (item.categories || []).includes(filter.category)
        : true;
      return wordMatch && posMatch && categoryMatch;
    });
    setFilteredVocab(filtered);
    setPage(1);
  }, [filter, vocabList]);

  const wordsPerPage = 15;
  const paginatedWords = filteredVocab.slice(
    (page - 1) * wordsPerPage,
    page * wordsPerPage
  );
  const totalPages = Math.ceil(filteredVocab.length / wordsPerPage);
  const uniqueParts = [
    ...new Set(vocabList.map((item) => item.partsOfSpeech).filter(Boolean)),
  ];
  const categoriesUniqueParts = [
    ...new Set(
      vocabList.flatMap((item) => item.categories || []).filter(Boolean)
    ),
  ];

  const columns = [[], [], []];
  paginatedWords.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <VocabFilter
          filter={filter}
          uniqueParts={uniqueParts}
          categoriesUniqueParts={categoriesUniqueParts}
          setFilter={setFilter}
        ></VocabFilter>

        <WordManage
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        ></WordManage>
      </div>

      <Pagination
        page={page}
        totalPage={totalPages}
        setPage={setPage}
      ></Pagination>

      <VocabList
        columns={columns}
        setFormData={setFormData}
        tts={tts}
      ></VocabList>
    </div>
  );
};

export default VocabularyPage;
