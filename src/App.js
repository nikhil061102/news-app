import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const types = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const listItems = types.map((item, index) => (
    <Route exact path={`/${item}`} element={<News key={index} pageSize={10} country={"in"} category={item}/>} />
  ));
  
  return (
    <Router>
      {/* <Navbar mode={myMode} toggleMode={handleMode}/> */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        {listItems}
      </Routes>
    </Router>
  );
}

export default App;
