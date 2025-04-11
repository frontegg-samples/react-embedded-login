import { useAuth } from "@frontegg/react";
import AccountInfo from "./AccountInfo";
import Header from "./Header";
import SignupBanner from "./SignupBanner";
import Welcome from "./Welcome";

const Main = () => {
  const { isAuthenticated } = useAuth();

  const login = () => {
    window.location.href = "/account/login";
  };
  const handleLogout = () => {
    window.location.href = "/account/logout";
  };

  return (
    <div className="app">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {isAuthenticated ? <AccountInfo /> : <Welcome onSignIn={login} />}
      <SignupBanner />
    </div>
  );
};

export default Main;
