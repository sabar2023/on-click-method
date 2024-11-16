import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if ((e.key === "Enter")) {
      onSearchChange();
    }
  };
  return (
    <>
      <div>
        Cari Artikel : <input onChange={(e) => setSearch(e.target.value)}
        onKeyDown=SearchKeydown}>
        </input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        ditemukan {props.totalPosts} data dengan pencarina kata {search}
      </small>
    </>
  );
}

export default Search;
