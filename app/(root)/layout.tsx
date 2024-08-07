import LeftSideBar from "@/components/shared/leftsidebar/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex  ">
        {/* <LeftSideBar /> */}
        <section className="flex min-h-screen flex-1 flex-col  pb-6 pt-26 max-md:pb-14 ">
          <div className="mx-auto w-full">{children}</div>
        </section>
        {/* RightSideBar */}
      </div>
      Toaster
    </main>
  );
};

export default Layout;
