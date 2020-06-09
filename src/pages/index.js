import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GridLayout from "../components/GridLayout";

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEO title={data.site.siteMetadata.title} />
            <GridLayout data={data.allMarkdownRemark.nodes} siteTitle={data.site.siteMetadata.title} />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query pageQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/pages/" }, frontmatter: { draft: { ne: true } } }
            sort: { fields: [frontmatter___day], order: DESC }
        ) {
            nodes {
                html
                frontmatter {
                    day
                    title
                    publishDate
                    thumbnailImage {
                        childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
