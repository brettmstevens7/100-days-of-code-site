import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
    shareIcon: {
        marginRight: "1em"
    }
}));

/**
 *
 * @param {String} title - post title
 * @param {String} text - share text
 * @param {Array} hashtags - list of Twitter hashtags
 */
function Share({ title, text, hashtags }) {
    const classes = useStyles();

    text = text ? text : "";
    const hashtagsStr = hashtags ? hashtags.join(",") : "";
    const url = typeof window !== "undefined" ? window.location.href : "";

    const twt = `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${hashtagsStr}`;
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const lnk = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`;

    return (
        <>
            <a href={fb} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classes.shareIcon} icon={faFacebookF} size="lg" />
            </a>
            <a href={twt} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classes.shareIcon} icon={faTwitter} size="lg" />
            </a>
            <a href={lnk} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classes.shareIcon} icon={faLinkedinIn} size="lg" />
            </a>
        </>
    );
}

export default Share;
