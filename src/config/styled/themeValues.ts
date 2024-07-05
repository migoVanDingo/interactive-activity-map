export const getThemeObject = (theme: string) => {
    const themeObject = {
        colors: getThemeColors(theme), 

        borderRadius:{
            sm:"4px",
            md: "8px",
            lg: "12px",
            xlg: "20px"
        }
    }

    return themeObject;
}

const lightTheme = {
    colors: {
        level5: "#171717",
        level4: "#525252",
        level3: "#8c8c8c",
        level2: "#a8a8a8",
        level1: "#cfcfcf",
        level0: "#f0f0f0",
    },
    accent: {
        level1: "#21b57c",
        level1_dim: "#15a36d",
    }
}

const getThemeColors = (theme: string) => {
    switch(theme) {
        case "light":
            return lightTheme.colors;
            break;
        case "dark":
            break;
        default:
            break;
    }
}