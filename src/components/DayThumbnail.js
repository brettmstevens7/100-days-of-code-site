import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 204
    },
    cardContent: {
        height: 120
    }
}));

function truncate(input, length) {
    if (input.length > length) return input.substring(0, length) + "...";
    else return input;
}

export default function DayThumbnail({ data }) {
    const classes = useStyles();
    const title = truncate(data.frontmatter.title, 120);
    return (
        <Card className={classes.root} elevation={2}>
            <CardActionArea component="div">
                <CardMedia
                    className={classes.media}
                    image={data.frontmatter.thumbnailImage.childImageSharp.fluid.src}
                    title={title}
                />
                <CardContent classes={{ root: classes.cardContent }}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
