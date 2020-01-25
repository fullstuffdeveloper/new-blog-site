const path = require('path');

// module.exports.onCreateNode = ({node, actions}) => {
//     const {createNodeField}  = actions
//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');
//         // Adding slug to the markdown node
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({graphql, actions}) => {
    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create dynamic pages
    const {createPage}  = actions;
    const blogTemplatePath = path.resolve('./src/template/blog-post.js');
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplatePath,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    
}