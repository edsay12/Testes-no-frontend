import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import { FetchPokeDetail, PokeApiData } from "./services/PokeApiData";
import PokeDetails from "./pages/PokeDetails/pokeDetails";

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/dashboard"
        element={<Dashboard pokeData={PokeApiData} />}
      ></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/pokemonDetails/:id"
        element={
          <PokeDetails FetchPokeDetail={FetchPokeDetail} />
        }
      ></Route>
      <Route
        path="/*"
        element={
          <>
            <h1>404 Page Not Found"</h1>
          </>
        }
      ></Route>

    </Routes>
  );
}
