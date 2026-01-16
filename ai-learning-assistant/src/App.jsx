import { useState } from 'react'

import './App.css'
import AssistantPage from './Components/AssistantPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AssistantPage/>
    </div>
  )
}

export default App
