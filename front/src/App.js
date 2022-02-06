import { Redirect } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import "./App.css";

const App = () => {

  return (
    <div className="app">
      <Redirect exact from="/" to="/home" />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
