import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import { useSearch } from "./hooks/useSearch"
import DefaultImage from "../../public/default.png"
import Stars from "./Stars"
// import Img from "gatsby-image"

export default function BlogList() {
  const blogData = useBlogData()
  const { searchText, searchTags } = useSearch()

  const [blogs, setBlogs] = useState([])
  // const [person, setPerson] = useState([])

  const updateBlogs = () => {
    // console.log("fliter start")
    const newblogs = blogData.filter((blog) => {
      // console.log(blog.node.frontmatter.CourseTitle === null, i)
      return (
        // blog.node.frontmatter.title !== "" &&
        blog.node.frontmatter.title.includes(searchText) &&
        blog.node.frontmatter.Professor !== null &&
        (searchTags.Professor === undefined ||
          searchTags.Professor.length === 0 ||
          searchTags["Professor"].some((Professor) =>
            blog.node.frontmatter.Instructor.includes(Professor)
          )) &&
        blog.node.frontmatter.CourseTitle !== null &&
        (searchTags.Course === undefined ||
          searchTags.Course.length === 0 ||
          searchTags["Course"].some((Course) =>
            blog.node.frontmatter.CourseTitle.includes(Course)
          )) &&
        blog.node.frontmatter.Semester !== null &&
        (searchTags.Semester === undefined ||
          searchTags.Semester.length === 0 ||
          searchTags["Semester"].some((Semester) =>
            blog.node.frontmatter.Semester.includes(Semester)
          ))
      )
    })
    setBlogs(newblogs)
  }

  useEffect(() => {
    updateBlogs()
  }, [searchText, searchTags])

  console.log(blogs)
  const renderBlogData = () => {
    return (
      <div>
        {blogs === [] ? (
          <></>
        ) : (
          blogs.map((blog) => {
            return (
              <Link to={`/blog/${blog.node.id}`} key={blog.node.id}>
                <li className={blogListStyles.list} key={blog.node.id}>
                  <div className={blogListStyles.list__hero}>
                    <img
                      src={
                        blog.node.frontmatter.Files___media[0]
                          ? blog.node.frontmatter.Files___media[0].file.url
                          : DefaultImage
                      }
                      alt=""
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <div className={blogListStyles.text}>
                      <div className={blogListStyles.leftPart}>
                        <div className={blogListStyles.flex__addtion}>
                          <div className={blogListStyles.main__info}>
                            <h2 className={blogListStyles.title}>
                              {blog.node.frontmatter.Semester}{" "}
                              {blog.node.frontmatter.title}
                            </h2>
                            <h3 className={blogListStyles.instructor}>
                              {blog.node.frontmatter.Instructor}
                            </h3>
                          </div>
                          <div className={blogListStyles.addtion}>
                            <h3 className={blogListStyles.text__rightPart}>
                              貼文日期 : {blog.node.frontmatter.Date}
                            </h3>
                            <h3 className={blogListStyles.text__addtion}>
                              課程類型 : {blog.node.frontmatter.CourseType}
                            </h3>
                            <h3 className={blogListStyles.text__addtion}>
                              學分數 : {blog.node.frontmatter.Credits}
                            </h3>
                          </div>
                        </div>
                        <p className={blogListStyles.detail}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero aliquam culpa quod a molestias nobis
                          maiores temp
                        </p>
                        <p>{blog.node.excerpt}</p>
                      </div>
                      <div className={blogListStyles.rightPart}>
                        <h3 className={blogListStyles.text__rightPart}>
                          {blog.node.frontmatter.Author}
                        </h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className={blogListStyles.star}>
                          <Stars starsNum={blog.node.frontmatter.Star} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })
        )}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}
