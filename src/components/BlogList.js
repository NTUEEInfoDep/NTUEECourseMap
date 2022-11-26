import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import { useSearch } from "./hooks/useSearch"
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
    // console.log("useEffect")
    updateBlogs()
    // console.log(searchTags)
    // setPerson({ ...person, doo: ["dpoo"] })
  }, [searchText, searchTags])
  // useEffect(() => {
  //   console.log("useEffect Person", person)
  // }, [person])

  const renderBlogData = () => {
    return (
      <div>
        {blogs === [] ? (
          <></>
        ) : (
          blogs.map((blog) => {
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
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.Date}</h3>
                    <p>{blog.node.excerpt}</p>
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
