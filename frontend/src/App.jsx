import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })
 const [msg, setMsg] = useState("");
  const [txt, setTxt] = useState(false);
  const click = ()=>{
    axios.get('/api').then((response)=>{
      setMsg(response.data);
    } ).catch((error)=> {console.log(error)})
   setTxt((prev)=> !prev);
  }
  return (
    <>
      <h1>Chaliye suru karte h</h1>
      <h3>Users = {users.length}</h3>
      {users.map((user, index) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
          <p>hi</p>
        </div>
      ))
      }
      <div>
      <button onClick={click}>click</button>
      {txt && <h3>{msg}</h3> }
      </div>
    </>
  )
}

export default App
