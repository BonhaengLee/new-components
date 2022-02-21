import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: string;
}

function Search({ value, onChange, children }: SearchProps) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Home;
