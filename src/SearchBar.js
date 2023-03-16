import React, { useRef, useState } from "react";

// Defining the SearchBar component that takes a 'client' prop
function SearchBar({ client }) {
  // Initializing a state variable for holding search results
  const [results, setResults] = useState([]);
  // Creating a reference to the search input field
  const inputRef = useRef(null);

  // Handling search form submission
  async function handleSearch(event) {
    event.preventDefault();
    const query = inputRef.current.value;
    // Using the provided Contentful client to search for entries based on the user's input query
    const response = await client.getEntries({
      query: query,
    });
    // Updating the state with the search results
    setResults(response.items);
  }

  // Rendering the search bar UI, including the search input field and search results
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputRef} />
        <button type="submit">Search</button>
      </form>
      {/* Rendering search results as a list of recipe titles and ingredients */}
      {results.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <details>
          <summary>Method</summary>
          <ul>
            {item.fields.methods}
          </ul>
        </details>
        </div>
      ))}
    </div>
  );
}


export default SearchBar;

