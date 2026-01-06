import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import Navbar from "../component/Navbar/Navbar";
import LeftAside from "../component/HomeLayout/LeftAside";
import RightAside from "../component/HomeLayout/RightAside";

const LayoutHome = () => {
  return (
    <div>
        {/* header section */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto py-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto py-3">
          <Navbar></Navbar>
        </nav>
      </header>

    {/* main section */}

      <main className="w-11/12 mx-auto  grid grid-cols-12 my-3">

        <aside className="left_nav col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

        <section className="right_nav col-span-3">
        <RightAside></RightAside>
        </section>

      </main>
    </div>
  );
};

export default LayoutHome;
