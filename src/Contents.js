import React from 'react'

const Contents = () => {
    const handleNameChanges = () => {
        const names = ["santu", "Ajeet", "Anju"];
        const instantChange = Math.floor(Math.random() * 3);
        return names[instantChange];
    };

    const handleClicks = ()=> {
        console.log("you're have clicked");
    }

    const handleClick2 = (name)=> {
        console.log(`${name} has clicked`);
    }

  return (
    <main>
      <p onDoubleClick={handleClicks}>
        Hello {handleNameChanges()}
      </p>
      <button onClick={handleClicks}>click it</button>
      <button onClick={() => handleClick2("santu")}>click it-2</button>
    </main>
  )
}

export default Contents




