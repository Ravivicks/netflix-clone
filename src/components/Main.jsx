import React, { Suspense } from "react";
import Header from "./pages/Header";

const FirstContent = React.lazy(() => import("./pages/FirstContent"));
const SecondContent = React.lazy(() => import("./pages/SecondContent"));
const ThirdContent = React.lazy(() => import("./pages/ThirdContent"));
const FourthContent = React.lazy(() => import("./pages/FourthContent"));
const FifthContent = React.lazy(() => import("./pages/FifthContent"));

const Main = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading.........</div>}>
        <FirstContent />
        <SecondContent />
        <ThirdContent />
        <FourthContent />
        <FifthContent />
      </Suspense>
    </>
  );
};

export default Main;
