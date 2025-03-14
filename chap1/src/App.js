import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");
  const [fetchaError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("did not receive expected data");
        const data = await response.json();
        console.log(data);
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
    
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    setNewItems("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items....</p>}
        {fetchaError && (
          <p style={{ color: "red" }}>{`Error: ${fetchaError}`}</p>
        )}
        {!fetchaError && !isLoading && <Contents
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
