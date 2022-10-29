import { useState } from "react";

export default function Search({ values, setValues }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="search"
        placeholder="Enter the names"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div>
        {values.filter((val) => {
          if (searchTerm == "") {
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })}
      </div>
    </div>
  );
}
