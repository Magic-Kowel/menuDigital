import { Route,Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from "./pages/Login";
import RegisterUser from "./pages/Signon";
import Home from "./pages/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import RestaurantEdit from "./pages/restaurant/RestaurantEdit";
import Seccions from "./pages/seccion/Seccions";
import SeccionEdit from "./pages/seccion/SeccionEdit";
import Product from "./pages/producto/Product";
import User from "./pages/user/User";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signon" element={<RegisterUser />} />
          <Route path="/restaurant" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <Restaurant />
            </ProtectedRoute>
          } />
          <Route path="/restaurant/edit/:idRestaurant" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <RestaurantEdit />
            </ProtectedRoute>
          } />
          <Route path="/seccions/:idRestaurant" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <Seccions />
            </ProtectedRoute>
          } />
          <Route path="/seccion/edit/:idSeccion" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <SeccionEdit />
            </ProtectedRoute>
          } />
          <Route path="/producto/:idSeccion" element={
            <ProtectedRoute
              permission="restaurant"
            >
              <Product />
            </ProtectedRoute>
          } />
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
