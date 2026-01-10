import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import Navbar from "../component/Navbar/Navbar";
import LeftAside from "../component/HomeLayout/LeftAside";
import RightAside from "../component/HomeLayout/RightAside";
import Loading from "../component/pages/Loading";

const LayoutHome = () => {
  const {state}=useNavigation();
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

      <main className="w-11/12 mx-auto  grid grid-cols-12 mt-8 gap-5">

        <aside className="left_nav col-span-3 sticky top-10 h-fit">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
         { 
         state=='loading' ? <Loading/> : <Outlet></Outlet>
         }
        </section>

        <section className="right_nav col-span-3 sticky top-10 h-fit">
        <RightAside></RightAside>
        </section>

      </main>
    </div>
  );
};

export default LayoutHome;
