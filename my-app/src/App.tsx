import * as React from "react";
import WbsTabView from "./components/wp/WbsTabView";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <WbsTabView />
    </>
  );
};

export default App;
