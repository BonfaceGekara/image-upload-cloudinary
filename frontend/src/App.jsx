import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home"
import Upload from "./components/Upload"

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Link to='/'>Home |</Link>
          <Link to='/upload'> Upload</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
