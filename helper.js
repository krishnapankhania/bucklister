export const detectDevice = () => {
  try {
    const width = window.screen.width;
    if (width >= 1024) {
      return "desktop";
    } else if (width > 767 && width < 1024) {
      return "tablet";
    } else if (width < 576) {
      return "mobileLg";
    }
  } catch (error) {
    return "";
  }
};
