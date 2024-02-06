import { useEffect } from "react";
// import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { ThemeProvider, useTheme, useThemeDispatch } from "./ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();
  /* const dispatch = useThemeDispatch(); */

  console.log(state);
  console.log(state.userPreferences.theme);

  useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
    
    const rootEl = document.documentElement;
    rootEl.classList.toggle('dark'); //
    
    //document.body.classList.add('dark');
   
  }, [state.userPreferences.theme]); // toggle theme med en knapp, då togglas 'dark' ovanför!

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);