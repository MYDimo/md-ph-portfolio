const path = require(`path`)
const postTemplate = path.resolve(`./src/templates/postTemplate.js`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: postTemplate,
      context: { id: node.id },
    })
  })
}
