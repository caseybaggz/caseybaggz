const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
  const workplaceTemplate = path.resolve(`src/templates/WorkPlace.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { path } = node.frontmatter;
    let template = blogPostTemplate;

    if (path.includes('work/')) {
      template = workplaceTemplate;
    }

    createPage({
      path,
      component: template,
      context: {} // additional data can be passed via context
    });
  });
};
