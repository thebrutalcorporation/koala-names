import React from "react";
import Header from "./Header";

function Layout({ reset, children }) {
  return (
    <>
      <div>
        <Header reset={reset} />
      </div>
      <main>{children}</main>
    </>
  );
}

export default Layout;
