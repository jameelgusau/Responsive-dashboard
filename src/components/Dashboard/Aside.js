import React, { useState } from "react";
import {
  Link,useRouteMatch
} from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Aside = () => {
  let { path, url } = useRouteMatch();
  const [ showLinks, setShowLinks ] = useState(false)
  const lists=[
    {
      name: "Dashboard",
      to: `${url}/`,
      id: 1
    },
    {
      name: "Students",
      to: `${url}/students`,
      id: 2
    },
    {
      name: "Teachers",
      to: `${url}/teachers`,
      id: 3
    },

  ]
  const list = lists.map(x =><Link key={x.id} className="sidenav__list-item" onClick={() => setShowLinks(!showLinks)} to={x.to}>{x.name}</Link>)

  return (
    <>
      <button className="menu-icon" onClick={() => setShowLinks(!showLinks)}>
        <AiOutlineMenu />
      </button>
      <aside className={`sidenav ${showLinks ? "active" : ""}`}>
        <button className="sidenav__close-icon"  onClick={() => setShowLinks(!showLinks)}>
          <AiOutlineClose />
        </button>
        <div className="sidenav__list">
          {list}
        </div>
      </aside>
    </>
  );
};

export default Aside;
