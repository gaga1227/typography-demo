/**
 * prepFontFaceMap
 * This will prepare a font face map for each category with a randomly picked font face
 * @param {object} fontCategories - font categories map
 * @returns {{mono: *, sans: *, serif: *}} font map with each required category
 */
export const prepFontFaceMap = (fontCategories = {}) => {
  return {
    sans: getRandomFont(fontCategories["sans-serif"]),
    serif: getRandomFont(fontCategories["serif"]),
    mono: getRandomFont(fontCategories["monospace"]),
  };
};

/**
 * getRandomFont
 * This will pick a random font out of a given list
 * @param {array} fonts - list of fonts
 * @returns {object} google font item object
 */
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

/**
 * getFontFaceStyle
 * This will convert a Google Font item into a font face CSS definition
 * @param {object} font - google font item
 * @returns {string} - CSS font face styling string
 */
export const getFontFaceStyle = (font) => {
  if (!font) {
    return "";
  }

  // determine font family based on google font category name
  let fontFamily = "";
  if (font.category === "sans-serif") {
    fontFamily = "sans";
  } else if (font.category === "serif") {
    fontFamily = "serif";
  } else if (font.category === "monospace") {
    fontFamily = "mono";
  }

  // construct and return CSS definition
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
