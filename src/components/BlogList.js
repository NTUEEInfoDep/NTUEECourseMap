import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import { useSearch } from "./hooks/useSearch"
// import Img from "gatsby-image"

export default function BlogList() {
  const blogData = useBlogData()
  const { searchText, searchTags } = useSearch()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter((blog) => {
            return (
              blog.node.frontmatter.title !== "" &&
              blog.node.frontmatter.title.includes(searchText) &&
              blog.node.frontmatter.Instructor !== "" &&
              (searchTags["Professor"] === undefined ||
                searchTags["Professor"].some((Professor) =>
                  blog.node.frontmatter.Instructor.includes(Professor)
                ))
            )
          })
          .map((blog) => {
            return (
              <Link to={`/blog/${blog.node.id}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.id}>
                  <div className={blogListStyles.list__hero}>
                    <img
                      src={
                        blog.node.frontmatter.Files___media[0]
                          ? blog.node.frontmatter.Files___media[0].file.url
                          : null
                      }
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <div className={blogListStyles.list__base}>
                      <h2>{blog.node.frontmatter.title}</h2>
                      <h3>{blog.node.frontmatter.Date}</h3>
                      <p>{blog.node.excerpt}</p>
                    </div>
                    
                    <div className={blogListStyles.list__addition}>
                      <h3>author</h3>
                      <h3>{blog.node.frontmatter.Author}</h3>
                      <div className={blogListStyles.list__rating}>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarBorderIcon/>
                        <StarBorderIcon/>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}
