import { FronteggProvider } from "@frontegg/react";
import { memo, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { sanboxContextOptions } from "./config/sanboxContextOptions";

const App = () => {
  const [fronteggLoading, setFronteggLoading] = useState(true);

  return (
    <>
      <FronteggProvider
        contextOptions={sanboxContextOptions}
        hostedLoginBox={false}
        customLoader={setFronteggLoading}
      >
        <Main />
      </FronteggProvider>
      {fronteggLoading && <div className="spinner"></div>}
    </>
  );
};

export default memo(App);
