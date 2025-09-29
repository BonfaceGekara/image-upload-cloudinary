import Home from "./components/Home"
import Upload from "./components/Upload"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' template={<Home />} />
          <Route path='/upload' template={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
