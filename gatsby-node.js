const path = require(`path`)
const postTemplate = path.resolve(`./src/templates/postTemplate.js`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              author
              date
              abstract
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }
  console.log(result);
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
