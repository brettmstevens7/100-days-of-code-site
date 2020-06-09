import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
    chip: {
        backgroundColor: "rgba(233, 236, 238, 0.2)",
        borderRadius: 3
    }
}));

const Tag = ({ tag }) => {
    const classes = useStyles();
    return <Chip label={tag} size="small" className={classes.chip} />;
};

export default Tag;
