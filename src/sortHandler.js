function semesterHandler(a, b) {
  const semesterA = a.split("-").map((x) => {
    return Number(x)
  })
  const semesterB = b.split("-").map((x) => {
    return Number(x)
  })
  if (semesterA[0] !== semesterB[0]) {
    return semesterA[0] - semesterB[0]
  } else if (semesterA[1] !== semesterB[1]) {
    return semesterA[1] - semesterB[1]
  } else {
    return 0
  }
}

export default function sortHandler(sortValue, sortOrder, a, b) {
  const order = sortOrder === "descending" ? -1 : 1
  switch (sortValue) {
    case "date":
      return 0
    case "score":
      return order * (a.node.frontmatter.Star - b.node.frontmatter.Star)
    case "semester":
      return (
        order *
        semesterHandler(
          a.node.frontmatter.Semester,
          b.node.frontmatter.Semester
        )
      )
    case "like":
      return 0
    default:
      return 0
  }
}
