import * as React from "react"
import LimitTags from "../Tag_filter/Tag"
import * as headerStyles from "../../styles/components/header.module.scss"
import { styled } from "@mui/material/styles"

const courseData = [
  "信號與系統",
  "交換電路與邏輯設計",
  "普通物理學甲上",
  "電路學",
  "電磁學",
]
const ProfData = ["呂良鴻", "鄭宇翔", "黃鐘揚", "葉丙成", "石明豐", "李琳山"]
const semesterData = ["111-1", "110-2", "110-1", "109-2", "109-1"]

const Tags = styled("div")(() => ({
  width: "70%",
  // display: "flex",
  // alignItems: "center",
}))
const SearchTags = (props) => {
  const {
    ProfSearchTags,
    CourseSearchTags,
    SemesterSearchTags,
    setProfSearchTags,
    setCourseSearchTags,
    setSemesterSearchTags,
  } = props
  return (
    <Tags className={headerStyles.header__tagList}>
      <LimitTags
        name="Professor"
        data={ProfData}
        tags={ProfSearchTags}
        setTags={setProfSearchTags}
      />
      <br />
      <LimitTags
        name="Course"
        data={courseData}
        tags={CourseSearchTags}
        setTags={setCourseSearchTags}
      />
      <br />
      <LimitTags
        name="Semester"
        data={semesterData}
        tags={SemesterSearchTags}
        setTags={setSemesterSearchTags}
      />
    </Tags>
  )
}

export default SearchTags
