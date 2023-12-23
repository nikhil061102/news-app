import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(10);

  const types = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const listItems = types.map((item, index) => (
    <Route exact path={`/${item}`} element={<News handleProgress={setProgress} key={index} pageSize={10} country={"in"} category={item}/>} />
  ));
  
  return (
    <Router>
      {/* <Navbar mode={myMode} toggleMode={handleMode}/> */}
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        {listItems}
      </Routes>
    </Router>
  );
}

export default App;
