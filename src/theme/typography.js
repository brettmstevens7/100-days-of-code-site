const typography = {
    /** FONT SIZING
     *
     * Base is set in layout.css
     * 10px = 0.625rem
     * 12px = 0.75rem
     * 14px = 0.875rem
     * 16px = 1rem (base)
     * 18px = 1.125rem
     * 20px = 1.25rem
     * 24px = 1.5rem
     * 30px = 1.875rem
     * 32px = 2rem
     * 36px = 2.25rem
     *
     * More on type scale: https://material.io/design/typography/the-type-system.html#type-scale
     *
     * Colors are set in the MuiTypography theme override */
    fontSize: 14, // default value
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        '"Helvetica Neue"',
        "sans-serif"
    ].join(","),
    h1: {
        fontSize: "2.25rem",
        fontWeight: 600,
        lineHeight: 1.2,
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    h2: {
        marginTop: "1rem",
        marginBottom: "1rem",
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.2
    },
    h3: {
        fontSize: "1.875rem",
        fontWeight: 600,
        lineHeight: 1.5,
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    h5: {
        fontSize: "1.25rem",
        fontWeight: 600
    },
    h6: {
        fontSize: "1.125rem",
        fontWeight: 600
    },
    subtitle1: {
        fontSize: "1rem",
        fontWeight: 500
    },
    subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 600
    },
    body1: {
        fontSize: "1rem"
    },
    body2: { fontSize: "1rem" },
    caption: { fontWeight: 400 },
    overline: { fontWeight: 400 },
    button: {
        fontSize: 12,
        textTransform: "none",
        fontWeight: 400
    }
};

export default typography;

