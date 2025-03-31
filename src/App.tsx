import { useAuth } from "@frontegg/react";
import { memo, useEffect } from "react";
import "./App.css";
import AccountInfo from "./components/AccountInfo";
import Header from "./components/Header";
import SignupBanner from "./components/SignupBanner";
import Welcome from "./components/Welcome";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Uncomment to skip welcome page and redirect to login or app if authenticated
  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, isLoading, loginWithRedirect]);

  const login = () =>{
    window.location.href = "/account/login";
  }
  const handleLogout = () => {
    window.location.href = "/account/logout";
  };

  return (
    <div className="app">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {isAuthenticated ? (
        <AccountInfo />
      ) : (
        <Welcome onSignIn={login} />
      )}
      <SignupBanner />
    </div>
  );
};

export default memo(App);
