import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { CounterProvider } from './contexts/counter'

export function App() {

  return (
    <>
      <CounterProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CounterProvider>
    </>
  )
}

export default App
