/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const days = await graphql(
        `
            {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/pages/" }, frontmatter: { draft: { ne: true } } }
                    sort: { fields: [frontmatter___day], order: DESC }
                ) {
                    nodes {
                        id
                    }
                }
            }
        `
    );

    // Handle errors
    if (days.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const daysPages = days.data.allMarkdownRemark.nodes;

    // More on pagination here: https://www.gatsbyjs.org/docs/adding-pagination/.
    const postsPerPage = 6;
    const numPages = Math.ceil(daysPages.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve(`./src/components/PageTemplate.js`),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
                pagePath: i === 0 ? `/` : `/${i + 1}`
            }
        });
    });
};
