import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import ReactMarkdown from "react-markdown"

const MarkdownComponents = {
  p: paragraph => {
    const { node } = paragraph

    if (node.children[0].tagName === "img") {
      const image = node.children[0]
      const metastring = image.properties.alt
      const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
      const hasCaption = metastring?.toLowerCase().includes("{caption:")
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
      console.log(image)
      return (
        <div>
          <img src={image.properties.src} alt={alt} />
          {hasCaption ? <div aria-label={caption}>{caption}</div> : null}
        </div>
      )
    }
    return <p>{paragraph.children}</p>
  },
}

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.id)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.id
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.title}</h1>
          <h3>{data.frontmatter.Date}</h3>
        </div>
        <ReactMarkdown
          className={blogTemplateStyles.blog__body}
          components={MarkdownComponents}
          children={data.rawMarkdownBody}
        ></ReactMarkdown>
        <div className={blogTemplateStyles.blog__footer}>
          <h2>Written By: {data.frontmatter.Author}</h2>
          <Link
            to={`blog/${nextSlug}`}
            className={blogTemplateStyles.footer__next}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 26 26"
              enableBackground="new 0 0 26 26"
            >
              <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
            </svg>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(id: { eq: $slug }) {
      frontmatter {
        title
        Author
        Date(formatString: "MMMM Do, YYYY")
      }
      rawMarkdownBody
    }
  }
`
