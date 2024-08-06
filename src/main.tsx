import ReactDOM from "react-dom/client";

import MainRouters from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainRouters />
  </BrowserRouter>
);
