import React, { useState, Suspense, lazy } from "react";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Main  from "./Main";



const Dashboard = () => {
  const [showLinks, setShowLinks] = useState(false);
  // onClick={()=> setShowLinks(!showLinks)}
  return (
    <div className="grid-container">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
};

export default Dashboard;
