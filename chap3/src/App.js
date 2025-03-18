import React from 'react'
import {useState, useEffect} from 'react'
import Form from './Form';
// import List from './List'
import Table from './Table'

function App() {

  const [reqType, setReqType] = useState("");
  const [items, setItems] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response.ok) throw new Error("unable to fetch data");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error); 
      }
    }

    fetchData();

  },[reqType])

  return (
    <div className='App'>
      <Form 
        reqType={reqType} 
        setReqType={setReqType}
      />
      <List 
      items={items}
      />

      {/* <Table items={items}/> */}

    </div>
  )
}

export default App







