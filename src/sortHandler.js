const month_name = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function dateToNumbers(dateString) {
  //date: "MMMM Do, YYYY"
  //output: [year, month, day]
  const temp = dateString.split(" ")
  var result = [0, 0, 0]
  result[0] = Number(result[2])
  result[1] = month_name.indexOf(temp[0])
  result[2] = Number(temp[1].substring(0, temp[1].length - 3))
  return result
}

function dateHandler(a, b) {
  const dateA = dateToNumbers(a)
  const dateB = dateToNumbers(b)
  if (dateA[0] !== dateB[0]) {
    return dateA[0] - dateB[0]
  } else if (dateA[1] !== dateB[1]) {
    return dateA[1] - dateB[1]
  } else {
    return dateA[2] - dateB[2]
  }
}

function semesterHandler(a, b) {
  const semesterA = a.split("-").map((x) => {
    return Number(x)
  })
  const semesterB = b.split("-").map((x) => {
    return Number(x)
  })
  if (semesterA[0] !== semesterB[0]) {
    return semesterA[0] - semesterB[0]
  } else {
    return semesterA[1] - semesterB[1]
  }
}

export default function sortHandler(sortValue, sortOrder, a, b) {
  const order = sortOrder === "descending" ? -1 : 1
  switch (sortValue) {
    case "date":
      return (
        order * dateHandler(a.node.frontmatter.Date, b.node.frontmatter.Date)
      )
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
