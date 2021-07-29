export const size = {
  laptop: "75rem", // 1200px
  tablet: "43.75rem", // 700px
  mobile: "90vw", // 700px
  small: "31.25rem", // 500px
  smallest: "25rem", // 400px
};

export const margin = {
  laptop: "2.5rem",
  tablet: "2rem",
  mobile: "1.5rem",
};

export const paragraphMargin = {
  laptop: "2.5rem",
  tablet: "2rem",
  mobile: "0.5rem",
};

export const lightTheme = {
  fontColor: "#1D1D1F",
  bgColor: "#ffffff",
  subBgColor: "#FAFAFA",
  btnTextColor: "#ffffff",
  btnBgColor: "#086BCE",
  borderColor: "solid 1px #EBEBEB",
  indexColor: "#F1F2F4",
  postCoverColor: "#FFFFFF",
  commentColor: "light",
};
export const darkTheme = {
  fontColor: "#ffffff",
  bgColor: "#1D1D1F",
  subBgColor: "#2B2B2B",
  btnTextColor: "#62B1FF",
  btnBgColor: "#203E5C",
  borderColor: "solid 1px #2B2B2B",
  indexColor: "#1D1D1F",
  postCoverColor: "#2B2B2B",
  commentColor: "dark",
};

const theme = {
  mainColor: "#0000ff",
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
  width: {
    laptop: size.laptop,
    tablet: size.tablet,
    mobile: size.mobile,
  },
  paragraphMargin: {
    laptop: paragraphMargin.laptop,
    tablet: paragraphMargin.tablet,
    mobile: paragraphMargin.mobile,
  },
  margin: {
    laptop: margin.laptop,
    tablet: margin.tablet,
    mobile: margin.mobile,
  },
};

export default theme;
