import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index.js";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
  { reducer: { who: whoReducer, tuits: tuitsReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <div class="d-none d-xxl-block">
      <div class="position-fixed">XXL</div>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={true}/>
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-3">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-xl-block d-xxl-none">
      <div class="position-fixed">XL</div>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar iconstatus={true}/>
            </div>
            <div className="col-6">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-4">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-lg-block d-xl-none">
      <div class="position-fixed">L</div>
        <div>
          <Nav />
          <div className="row">
            <div className="col-1">
              <NavigationSidebar iconstatus={false}/>
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
            <div className="col-4">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-md-block d-lg-none">
      <div class="position-fixed">M</div>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
            <NavigationSidebar iconstatus={false}/>
            </div>
            <div className="col-8">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-sm-block d-md-none">
      <div class="position-fixed">S</div>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
            <NavigationSidebar iconstatus={false}/>
            </div>
            <div className="col-8">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
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