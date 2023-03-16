import { createClient } from "contentful";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./style.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import NavBar from "./NavBar";

// Creating a Contentful client using the provided credentials
const client = createClient({
  space: "dibdvtm2bup0",
  accessToken: "axCyOsF3hC83IroZuxJ_R0M2yY3ZCjXiDpIi9zIUBqA",
});


function App() {
  // Initializing a state variable for holding recipe data
  const [data, setData] = useState(null);

  // Fetching recipe data from Contentful API on component mount
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setData(response.items))
      .catch(console.error);
  }, []);

  // Displaying "Loading..." message if data has not yet been fetched
  if (!data) {
    return <div>Loading...</div>;
  }
console.log(data)
  // Rendering the app's UI
  return (
    <>
    <NavBar />

      <h1 className="header">Find a Recipes</h1>
      <div className="search">
        {/* Rendering the SearchBar component */}
        <SearchBar client={client} />
      </div>
      <div className="recipe-list">
        {/* Rendering a Recipe component for each recipe in the data */}
        {data.map((item) => (
          <Recipe key={item.sys.id} item={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}


export default App;

