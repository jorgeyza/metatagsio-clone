import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { globalStyles as styles } from "./styles";
import components from "./components";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  primary: "#2A81FB",
  secondary: "#EBF1FA",
  neutral: "#A3B3CA",
  text: "#18283E",
  previewDivider: "#E0E7F1",
  arrowBackground: "#D4E6FE",
  icon: {
    default: "#C7D3D9",
    active: "white",
  },
  google: {
    title: "#1a0dab",
    link: "#006621",
    description: "#545454",
  },
  facebook: {
    domain: "#606770",
    title: "#1d2129",
    description: "#606770",
    bottomBackground: "#f2f3f5",
    border: "#dadde1",
  },
  twitter: {
    domain: "#8899A6",
    title: "#18283E",
    description: "#18283E",
    mainBackground: "#E1E8ED",
    hoverBackground: "#F5F8FA",
    border: "#E1E8ED",
    hoverBorder: "rgba(136,153,166,0.5)",
  },
};

const fonts = {
  heading: "Open Sans",
  body: "Open Sans",
};

export const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
});
