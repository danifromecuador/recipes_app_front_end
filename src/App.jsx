import './App.css'
import { Welcome } from './components/Welcome'
import { HealthStatus} from './components/HealthStatus'

function App() { 

  return (
    <div className="App">
      <Welcome />
      <HealthStatus />
    </div>
  )
}

export default App
