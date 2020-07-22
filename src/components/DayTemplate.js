import React from "react";
import moment from "moment";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Layout from "../components/layout";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
    container: {
        // padding: theme.spacing(0, 2),
        maxWidth: 700,
        position: "relative"
    },
    background: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    article: {
        margin: "48px 0px",
        overflow: "hidden",
        "& img": {
            maxWidth: "100%"
        },
        wordBreak: "break-word" // need this to prevent words in title from causing page to split
    },
    text: {
        margin: theme.spacing(2, 0),
        "& p > a, li > a, h3 > a, h2 > a": {
            borderBottom: `2px solid ${theme.palette.primary.main}`
        },
        lineHeight: 1.8,
        padding: "16px 16px 0px 16px"
    },
    typography: {
        padding: "0px 16px 16px 16px"
    }
}));

const DayTemplate = ({ data, pageContext }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Layout>
            <SEO
                title={`${data.site.siteMetadata.title} | ${pageContext.title}`}
                description={data.site.siteMetadata.description}
            />
            <div className={classes.background}>
                <div className={classes.container}>
                    <Card className={classes.article}>
                        <Typography
                            variant="h1"
                            style={{ fontSize: isTablet ? "2rem" : "2.5rem" }}
                            className={classes.typography}
                        >
                            {data.markdownRemark.frontmatter.title}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.typography}>
                            {moment(data.markdownRemark.frontmatter.publishDate).format("MMMM Do, YYYY")}
                        </Typography>
                        <Img
                            fluid={data.markdownRemark.frontmatter.thumbnailImage.childImageSharp.fluid}
                            alt={pageContext.title}
                        />
                        <Typography
                            variant="body1"
                            className={classes.text}
                            component="div"
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html
                            }}
                        />
                    </Card>
                    <div style={{display: "flex", justifyContent: "center", marginBottom: 48}}>
                        <Link to="/">
                            <Button variant="text" color="default" size="large">
                                Back to home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DayTemplate;

export const dayQuery = graphql`
    query dayQuery($day: String!) {
        markdownRemark(frontmatter: { day: { eq: $day } }) {
            frontmatter {
                title
                day
                publishDate
                thumbnailImage {
                    childImageSharp {
                        fluid(maxWidth: 400, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
