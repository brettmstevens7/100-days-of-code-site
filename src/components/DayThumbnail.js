import React from "react";
import moment from "moment";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import DayTag from "./DayTag";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 204
    },
    cardContent: {
        height: 140
    },
    dialog: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    grid: {
        height: "100%"
    },
    typography: {
        paddingBottom: theme.spacing(2)
    }
}));

function truncate(input, length) {
    if (input.length > length) return input.substring(0, length) + "...";
    else return input;
}

const DialogTitle = props => {
    const classes = useStyles();
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.dialog} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

const DialogContent = withStyles(theme => {
    return {
        root: {
            padding: theme.spacing(2)
        }
    };
})(MuiDialogContent);

export default function DayThumbnail({ data }) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const title = truncate(data.frontmatter.title, 120);
    return (
        <>
            <Card className={classes.root} elevation={2}>
                <CardActionArea component="button" onClick={handleClickOpen}>
                    <CardMedia
                        className={classes.media}
                        image={data.frontmatter.thumbnailImage.childImageSharp.fluid.src}
                        title={title}
                    />
                    <CardContent classes={{ root: classes.cardContent }}>
                        <Grid container direction="column" justify="space-between" className={classes.grid}>
                            <Grid item>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <DayTag tag={`Day ${data.frontmatter.day}`} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.frontmatter.title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="subtitle2" className={classes.typography}>
                        {moment(data.frontmatter.publishDate).format("MMMM Do, YYYY")}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        gutterBottom
                        dangerouslySetInnerHTML={{
                            __html: data.html
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
