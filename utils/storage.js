const STORAGE_KEY = 'urlShortenerData';

export const saveURLData = (originalURL, shortcode, expiry, clicks = 0, lastClicked = null) => {
  const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  existingData[shortcode] = { originalURL, expiry, clicks, lastClicked };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
};

export const getURLData = (shortcode) => {
  const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return existingData ? existingData[shortcode] : null;
};

export const getAllURLs = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
};

export const clearURLData = () => {
  localStorage.removeItem(STORAGE_KEY);
};