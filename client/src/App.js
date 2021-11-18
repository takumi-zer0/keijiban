import {useState, useEffect} from 'react'

import axios from 'axios';


function App() {
  const [users, setUsers] = useState([])
  console.log("sending")

  axios.get('http://localhost:3001/')
  .then((res) => console.log(res))
  .catch(err => console.log(err))

  return (
    <div className="App">
      <Form/>
      {users}
    </div>
  );
}

function Form () {
  return (
    <div className="disc">
      <h1>hello world</h1>
      <form action="/api" method="POST">
        <input type="text" name="inputText" id="inputText"/>
          <input type="submit" value="Generate!"/>
        </form>
        </div>
  )
}

export default App;
