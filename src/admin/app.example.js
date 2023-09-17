const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    colors: {
      primary100: "#FFB3D1",
      primary200: "#FF89B3",
      primary300: "#FF5890",
      primary400: "#FF3273",
      primary500: "#FF086F",
      primary600: "#E30064",
      primary700: "#C1005A",

      buttonPrimary100: "#FFB3D1",
      buttonPrimary200: "#FF89B3",
      buttonPrimary300: "#FF5890",
      buttonPrimary400: "#FF3273",
      buttonPrimary500: "#FF086F",
      buttonPrimary600: "#E30064",
      buttonPrimary700: "#C1005A",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
