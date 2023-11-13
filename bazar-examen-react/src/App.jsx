import './App.css'
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import ResultsPage from './Pages/ResultsPage';
import NotFoundPage from './Pages/NotFoundPage';
import { BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/items" element={<ResultsPage/>}/>
        <Route path="/items/:id" element={<DetailsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
