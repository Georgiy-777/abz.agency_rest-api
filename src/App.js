

import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Hero from "./components/Hero/Hero";
import Get_request from "./components/Get_request/Get_request";
import Post_request from "./components/Post_request/Post_request";
function App() {
  return (
    <div >
      <NavBar/>
        <Hero/>
        <Get_request/>
        <Post_request/>
    </div>
  );
}

export default App;
