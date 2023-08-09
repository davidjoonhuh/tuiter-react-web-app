import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index.js";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
  {
    reducer: {
      who: whoReducer, tuits: tuitsReducer,
      user: authReducer
    }
  });

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="d-none d-xxl-block">
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={true} />
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-3">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-xl-block d-xxl-none">
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={true} />
            </div>
            <div className="col-6">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-4">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-lg-block d-xl-none">
        <div>
          <Nav />
          <div className="row">
            <div className="col-1">
              <NavigationSidebar iconstatus={false} />
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-4">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block d-lg-none">
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={false} />
            </div>
            <div className="col-8">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-sm-block d-md-none">
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={false} />
            </div>
            <div className="col-8">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;