import React, { useState } from 'react'

const Contents = () => {
    const [getname, setName] = useState("santu");
    const [count, setCount] = useState(0);


    const handleNameChanges = () => {
        const names = ["santu", "Ajeet", "Anju"];
        const Changes = Math.floor(Math.random() * 3);
        setName(names[Changes]);
    };

    const handleClicks = ()=> {
        console.log(count);
    }

    // const handleClick2 = (name)=> {
    //     console.log(`${name} has clicked`);
    // }

  return (
    <main>
      <p onDoubleClick={handleClicks}>
        Hello {getname}
      </p>
      <button onClick={handleNameChanges}>Change Name</button>
      <button onClick={handleClicks}>click it</button>
      {/* <button onClick={() => handleClick2("santu")}>click it-2</button> */}
    </main>
  )
}

export default Contents











