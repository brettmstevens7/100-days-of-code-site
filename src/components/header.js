import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    avatarCt: {
        display: "flex",
        flexDirection: "row",
        maxWidth: 600
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2)
    }
}));

const Header = ({ avatar, siteDescription }) => {
    const classes = useStyles();
    return (
        <header>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`
                }}
            >
                <div className={classes.avatarCt}>
                    <Avatar src={avatar.childImageSharp.fixed.src} alt="A picture of me!" className={classes.avatar} />
                    <Typography gutterBottom variant="subtitle2">
                        {siteDescription}
                    </Typography>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteDescription: PropTypes.string
};

Header.defaultProps = {
    siteDescription: ""
};

export default Header;
