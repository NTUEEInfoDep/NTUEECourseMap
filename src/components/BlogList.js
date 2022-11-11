import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import Img from "gatsby-image"

export default function BlogList() {
  const blogData = useBlogData()

  const CountingStars = (rating) => {
    if (rating === '1'){return <h1>★☆☆☆☆</h1>}
    else if (rating === '2'){return <h1>★★☆☆☆</h1>}
    else if (rating === '3'){return <h1>★★★☆☆</h1>}
    else if (rating === '4'){return <h1>★★★★☆</h1>}
    else {return <h1>★★★★★</h1>}
  }

  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.id}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.id}>
                  <div className={blogListStyles.list__hero}>
                  </div>
                  <div className={blogListStyles.list__info}>
                    <div className={blogListStyles.text}>
                      <div className={blogListStyles.leftPart}>
                        <div className={blogListStyles.flex__addtion}>
                          <div className={blogListStyles.main__info}>
                            <h2 className={blogListStyles.title}>{blog.node.frontmatter.Semester} {blog.node.frontmatter.title}</h2>
                            <h3>{blog.node.frontmatter.Instructor}</h3>
                          </div>
                          <div className={blogListStyles.addtion}>
                            <h3 className={blogListStyles.text__addtion}>Course Type : {blog.node.frontmatter.CourseType}</h3>
                            <h3 className={blogListStyles.text__addtion}>Credits : {blog.node.frontmatter.Credits}</h3>
                          </div>
                        </div>
                        <p className={blogListStyles.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquam culpa quod a molestias nobis maiores temp</p>
                        <p>{blog.node.excerpt}</p>
                      </div>
                      <div className={blogListStyles.rightPart}>
                        <h3 className={blogListStyles.text__rightPart}>{blog.node.frontmatter.Author}</h3>
                        <h3 className={blogListStyles.text__rightPart}>{blog.node.frontmatter.Date}</h3>
                        <div>
                          {CountingStars(blog.node.frontmatter.Star)}
                        </div>
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
