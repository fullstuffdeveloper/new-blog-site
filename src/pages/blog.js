import React from "react"
import Layout from "../components/shared/layout/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import "../styles/blog.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
            body {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ol className="posts">
        {data ? (
          data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="post" key={edge.node.slug}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })
        ) : (
          <li className="post" key={`commingSoon`}>
            <Link to="/blog">
              <h2>Comming Soon!</h2>
              <p>Blog will be displayed here.</p>
            </Link>
          </li>
        )}
      </ol>
    </Layout>
  )
}

export default BlogPage
