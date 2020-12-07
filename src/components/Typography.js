import React from "react";
import { useEffect, useState } from "react";
import { getFontFaceStyle, prepFontFaceMap } from "./Typography.helper";
import styles from "./Typography.module.css";

export default function Typography({ fontCategories }) {
  const [fonts, setFonts] = useState({});

  // pick random fonts on initial start
  useEffect(() => {
    setFonts(prepFontFaceMap(fontCategories));
  }, [fontCategories]);

  // pick random fonts again on manual button click
  const handleOnClick = () => {
    setFonts(prepFontFaceMap(fontCategories));
  };

  return (
    <div className={styles.container}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          ${Object.keys(fonts)
            .map((key) => {
              return getFontFaceStyle(fonts[key]);
            })
            .join("")}
        `,
        }}
      />
      <button onClick={handleOnClick} aria-label="Generate replacement fonts">
        Generate
      </button>
    </div>
  );
}
