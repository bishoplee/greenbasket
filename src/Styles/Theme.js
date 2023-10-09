const COLORS = {
  primary: "#43B028",
  primary1: "#34C969",
  secondary: "#4CAF50",
  accent1: "#DFFDD2",
  accent2: "#EBF6E9",
  accent3: "#E3F7DE",
  accent4: "#9CE58B",
  accent5: "#C0EEB4",
  dark: "#303238",
  dark1: "#998899",
  dark2: "#101D25",
  white: "#FFFFFF",
  grey: "#F4F0EF",
  grey1: "#EBEBEB",
  grey2: "#DBD9D966",
  dark_grey: "#8A8D90",
  light: "#F5F5F5",
  light1: "#EFFFE8",
  light2: "#F0FFF1",
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
}

const FONT = {
  regular: "MtRegular",
  medium: "MtMedium",
  light: "MtLight",
  thin: "MtThin",
  bold: "MtSemiBold",
  esteban: "Esteban"
}

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
}

const CAPTION = {
  title: {},
  title1: {
    fontSize: SIZES.xLarge + 4,
    lineHeight: 30,
    color: COLORS.primary1,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    fontWeight: '600'
  },
}

export { COLORS, FONT, SIZES, SHADOWS, CAPTION };
