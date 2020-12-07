const GOOGLE_FONTS_API =
  "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDERiwBdJI2c7SQ7-rz1dzqEouhnyY5B2g";

/**
 * getGoogleFontsList
 * @returns {Promise<*>} google fonts list data
 */
export const getGoogleFontsList = async () => {
  let data = null;

  try {
    const response = await fetch(GOOGLE_FONTS_API);
    data = await response.json();
  } catch (e) {
    throw new Error(e);
  }

  return data;
};

/**
 * getFontCategories
 * This loops through all google fonts and categorise them by category name
 * @param {array} fonts
 * @returns {object} - object with fonts list for each category
 */
export const getFontCategories = (fonts) => {
  if (!Array.isArray(fonts)) {
    return [];
  }
  const fontsCategories = {};
  fonts.forEach((font) => {
    const categoryName = font.category || "";
    if (categoryName) {
      fontsCategories[categoryName] = fontsCategories[categoryName] || [];
      fontsCategories[categoryName].push(font);
    }
  });
  return fontsCategories;
};
