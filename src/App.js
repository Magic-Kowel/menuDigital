import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import RegisterUser from "./pages/Signon";
import Home from "./pages/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import { ProtectedRoute } from "./components/ProtectedRoute";
import User from "./pages/user/User";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signon" element={<RegisterUser />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <Home />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
