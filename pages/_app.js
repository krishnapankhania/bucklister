import React, { useEffect } from "react";
import {  GlobalProvider } from "../context/global";
import { gerenrateCats } from "../data/categories";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) { 
  // useEffect(() => {
  //   gerenrateCats()
  // }, [])
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
