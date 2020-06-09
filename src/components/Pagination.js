import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    container: {
        maxWidth: theme.maxWidth.lg,
        margin: theme.spacing(4)
    },
    button: {
        margin: theme.spacing(0.5, 0.5)
    }
}));

export default function Pagination({ pageContext }) {
    const classes = useStyles();
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;

    // create the numbered pages array between previous and next
    const pagesArray = Array.from({ length: numPages }, (v, k) => k + 1);
    const spacing = 3; // number of pages to look ahead/back from current page
    const start = currentPage - spacing - 1;
    const end = currentPage + spacing;
    // check that the start and end is in the bounds of the number of pages
    const pageNumbers = pagesArray.slice(start > 0 ? start : 0, end < numPages ? end : numPages);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        <Button variant="outlined" color="primary" size="small" className={classes.button}>
                            Previous
                        </Button>
                    </Link>
                )}
                {pageNumbers.map(i => {
                    const variant = i === currentPage ? "contained" : "outlined";
                    return (
                        <Link key={`pagination-number${i}`} to={i === 1 ? "/" : `/${i}`}>
                            <Button variant={variant} color="primary" size="small" className={classes.button}>
                                {i}
                            </Button>
                        </Link>
                    );
                })}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        <Button variant="outlined" color="primary" size="small" className={classes.button}>
                            Next
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
