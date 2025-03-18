// Learn Event & useState

// import React, { useState } from 'react'

// const Contents = () => {
//     const [getname, setName] = useState("santu");
//     const [count, setCount] = useState(0);

//     const handleNameChanges = () => {
//         const names = ["santu", "Ajeet", "Anju"];
//         const Changes = Math.floor(Math.random() * 3);
//         setName(names[Changes]);
//     };

//     const handleClicks = ()=> {
//       setCount((prevCount) => prevCount + 1);
//       console.log(count);

//     }

//     // const handleClick2 = (name)=> {
//     //     console.log(`${name} has clicked`);
//     // }

//   return (
//     <main>
//       <p onDoubleClick={handleClicks}>
//         Hello {getname}
//       </p>
//       <button onClick={handleNameChanges}>Change Name</button>
//       <button onClick={handleClicks}>click it</button>
//       {/* <button onClick={() => handleClick2("santu")}>click it-2</button> */}
//     </main>
//   )
// }

// export default Contents

// List & Key

/*import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Contents = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound bag of Cocca Covered Almonds Unsalted",
        },
        {
            id: 2,
            checked: false,
            item: "Item 2",
        },
        {
            id: 3,
            checked: false,
            item: "Item 3",
        },
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    handleCheck(item.id);
                                }}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: "line-through" } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: "2rem" }}> Your list is empty.</p>
            )}
        </main>
    );
};

export default Contents;

*/

// props & props Drilling

import ItemsList from "./ItemsList";

const Contents = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty.</p>
      )}
    </>
  );
};

export default Contents;
