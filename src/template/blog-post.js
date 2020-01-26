import React from "react"
import Layout from "../components/shared/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogPostStyles from "./blog-post.module.scss"
import Head from "../components/shared/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const BlogPost = props => {
  console.log(props)
  let alt = ""
  let url = ""
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        if (!node.data.target.fields) {
          alt = ""
          url = ""
        } else if (node.data.target.fields) {
          alt = node.data.target.fields.title["en-US"]
          url = node.data.target.fields.file["en-US"].url
        }
        console.log(alt, url)
        return <img alt={alt} src={url} className={blogPostStyles.background} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogPostStyles.container}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
