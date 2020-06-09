import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DayThumbnail from "../components/DayThumbnail";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 64,
        padding: theme.spacing(4, 0),
        maxWidth: theme.maxWidth.lg
    },
    background: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}));

const GridLayout = ({ data, siteTitle }) => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <Typography gutterBottom variant="h1">
                    {siteTitle}
                </Typography>
                <Grid container spacing={4}>
                    {data.map((d, i) => (
                        <Grid key={i} item sm={4} xs={12}>
                            <DayThumbnail data={d} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default GridLayout;
