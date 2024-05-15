import React from "react";

import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// components
import ToastifyContainer from "./components/ToastifyContainer";

// layouts
import MainRoot from "./layouts/MainRoot";

// pages
import Home from "./pages/Home";
import News from "./pages/News";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AddNews from "./pages/AddNews";
import Reviews from "./pages/Reviews";
import Newness from "./pages/Newness";
import Appeals from "./pages/Appeals";
import Contest from "./pages/Contest";
import Page404 from "./pages/Page404";
import Contests from "./pages/Contests";
import Products from "./pages/Products";
import Payments from "./pages/Payments";
import ProductAdd from "./pages/ProductAdd";
import EditProduct from "./pages/EditProduct";
import DonationBox from "./pages/DonationBox";
import ProductRequests from "./pages/ProductRequests";
import FindProductById from "./pages/FindProductById";

const App = () => {
  const { authData } = useSelector((store) => store.authData);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={
            <>
              {authData.isLoggedIn ? <MainRoot /> : <Login />}
              {/* notification */}
              <ToastifyContainer />
            </>
          }
        >
          <Route index element={<Home />} />

          {/* product */}
          <Route path="product" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:productId" element={<EditProduct />} />
            <Route
              path="find-by-id/:productId?"
              element={<FindProductById />}
            />
          </Route>

          {/* news */}
          <Route path="news" element={<Outlet />}>
            <Route path="add" element={<AddNews />} />
            <Route index path=":newsPageIndex?" element={<News />} />
            <Route index path=":newness/:newnessId" element={<Newness />} />
          </Route>

          {/* appeals */}
          <Route path="appeals" element={<Outlet />}>
            <Route index element={<Appeals />} />
            <Route path="chat/:chatId?" element={<Chat />} />
          </Route>

          {/* contests */}
          <Route path="contests" element={<Outlet />}>
            <Route index element={<Contests />} />
            <Route path=":contestPageIndex?" element={<Contests />} />
            <Route path="contest/:contestId?" element={<Contest />} />
          </Route>

          {/* payments */}
          <Route path="payments" element={<Payments />} />

          {/* product requests */}
          <Route
            path="product-requests/:productRequestsPageIndex?"
            element={<ProductRequests />}
          />

          {/* donation box */}
          <Route path="donation-box" element={<DonationBox />} />

          {/* users */}
          <Route path="users/:usersPageIndex?" element={<Users />} />

          {/* comments */}
          <Route path="reviews/:reviewsPageIndex?" element={<Reviews />} />
        </Route>

        {/* err page */}
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
