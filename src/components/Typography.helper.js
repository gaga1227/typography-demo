export const prepFontFaceMap = (fontCategories = {}) => {
  return {
    sans: getRandomFont(fontCategories["sans-serif"]),
    serif: getRandomFont(fontCategories["serif"]),
    mono: getRandomFont(fontCategories["monospace"]),
  };
};

export const getRandomFont = (fonts) => {
  if (!Array.isArray(fonts) || fonts.length === 0) {
    return "";
  }

  let font = {};
  if (fonts.length === 1) {
    font = fonts[0];
  } else {
    const idx = Math.floor(Math.random() * fonts.length);
    font = fonts[idx];
  }

  return font;
};

export const getFontFaceStyle = (font) => {
  if (!font) {
    return "";
  }

  let fontFamily = "";
  if (font.category === "sans-serif") {
    fontFamily = "sans";
  } else if (font.category === "serif") {
    fontFamily = "serif";
  } else if (font.category === "monospace") {
    fontFamily = "mono";
  }

  let ffStyle = "";
  if (!!fontFamily && !!font.files && !!font.files.regular) {
    ffStyle = `
    @font-face {
      font-family: '${fontFamily}';
      src: url(${font.files.regular})
    }
  `;
  }

  return ffStyle;
};
