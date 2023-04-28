// import { Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Pages/Profile";
import MainNavigation from "./Components/Layout/MainNavigation";
import AuthForm from "./Components/Auth/AuthForm";
// import AuthForm from "./Components/Auth/AuthForm";
// import Profile from "./Components/Pages/Profile";
// import MainNavigation from "./Components/Layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/auth">
        <AuthForm />
      </Route>
    </>
  );
}

export default App;
