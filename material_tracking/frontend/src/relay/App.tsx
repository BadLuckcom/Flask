import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./relay/index";
import Clients from "./components/Clients";

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Clients />
    </RelayEnvironmentProvider>
  );
};

export default App;
