import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___Date }) {
        edges {
          node {
            id
            frontmatter {
              Date(formatString: "MMMM Do, YYYY")
              Star
              CourseType
              Author
              title
              Instructor
              Semester
              CourseTitle
              Files___media{
                file{
                  url
                }
              }
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
