import './index.css'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return <div>{routes}</div>
}

export default App
