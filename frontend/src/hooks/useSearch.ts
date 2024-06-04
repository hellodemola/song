import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [search, setSearch] = useState<string>()
  const navigate = useNavigate()

  const handleSearch = (e: string) => {
    setSearch(e);
  }

  const handleResult = () => navigate(`/result?result=${search}`)

  return { handleSearch, search, handleResult }
};

export default useSearch;