import React from "react";
import { useState, useEffect } from "react";
import {
  getFontCategories,
  getGoogleFontsList,
} from "./helpers/googleFonts.helper";
import Loading from "./components/Loading";
import Typography from "./components/Typography";
import Main from "./components/Main";

export default function App() {
  const [GFData, setGFData] = useState(null);
  const isLoading = GFData === null;

  // get remote google fonts fonts data
  useEffect(() => {
    async function fetchData() {
      const data = await getGoogleFontsList();
      setGFData(data);
    }
    fetchData();
  }, []);

  // prepare all fonts into categories
  const allFonts = (GFData && GFData.items) || [];
  const fontCategories = getFontCategories(allFonts);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Typography fontCategories={fontCategories} />
      <Main />
    </>
  );
}
