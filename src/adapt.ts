const dpr = window.devicePixelRatio;
const UIWidth = 375;
const BASE_FONTSIZE = 16;

export const getFontSize = (fontSize = BASE_FONTSIZE): number => {
  const screenScale = window.screen.width / UIWidth;
  return fontSize * screenScale * dpr;
};

const setFontSize = () => {
  document.documentElement.style.fontSize = `${getFontSize()}px`;
};

const setMeta = () => {
  const viewportScale = 1 / dpr;
  const viewportContent = `width=device-width,initial-scale=${viewportScale},maximum-scale=${viewportScale}`;
  document
    .querySelector("meta[name=viewport]")
    ?.setAttribute("content", viewportContent);
};

const setAdapt = (): void => {
  setFontSize();
  setMeta();
};

export default setAdapt;
