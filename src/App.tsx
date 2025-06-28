import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";


const App = () => {
  return (
    <div className="flex h-auto">
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App