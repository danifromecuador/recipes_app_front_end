import './App.css'
import { Welcome } from './components/Welcome'

function fetchData() {
  fetch('http://127.0.0.1:3000/health')
    .then(response => response.json())
    .then(json => console.log(json))
}


function App() {
  fetchData()  

  return (
    <div className="App">
      <Welcome />
    </div>
  )
}

export default App
