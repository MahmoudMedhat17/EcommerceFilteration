import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Productdetails from "./components/Productdetails";


const App = () => {
  return (
    <div className="flex h-auto">
      <Sidebar/>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/product/:id" element={<Productdetails/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App