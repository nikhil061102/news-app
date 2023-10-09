import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar mode={myMode} toggleMode={handleMode}/> */}
      <Navbar />
      {/* <Routes>
          <Route exact path="/" element={<Textform mode={myMode} tit="TextUtils - Home"/>} />
          <Route exact path="/about" element={<About mode={myMode} toggleMode={handleMode} tit="TextUtils - About"/>} />
      </Routes> */}
    </Router>
  );
}

export default App;
