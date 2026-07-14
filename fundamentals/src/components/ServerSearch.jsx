import { useState } from "react";

const ServerSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div>
      <h2>Server Search</h2>

      <input
        type="text"
        placeholder="Enter server name"
        value={searchText}
        onChange={handleSearchChange}
      />

      <button onClick={clearSearch}>
        Clear
      </button>

      <p>You are searching for: {searchText}</p>
    </div>
  );
};

export default ServerSearch;