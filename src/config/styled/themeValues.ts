export const getThemeObject = (theme: string) => {
    const themeObject = {
        colors: getThemeColors(theme), 
        accent: {
            color1: "#21b57c",
            color1_dim: "#15a36d",
        },
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
        darkest: "black",
        color6: "#171717",
        color5: "#525252",
        color4: "#8c8c8c",
        color3: "#a8a8a8",
        color2: "#cfcfcf",
        color1: "#f0f0f0",
        color0: "#f7f7f7",
        lightest: "white"
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