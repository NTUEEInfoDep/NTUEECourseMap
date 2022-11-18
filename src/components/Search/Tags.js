import * as React from "react"
import LimitTags from "../Tag_filter/Tag"
import * as headerStyles from "../../styles/components/header.module.scss"
import { styled } from "@mui/material/styles"

const Data = [
  "信號與系統",
  "交換電路與邏輯設計",
  "普通物理甲",
  "電路學",
  "電磁學",
]
const Tags = styled("div")(() => ({
  width: "70%",
  // display: "flex",
  // alignItems: "center",
}))
const SearchTags = () => {
  return (
    <Tags className={headerStyles.header__tagList}>
      <LimitTags name="Teacher" data={Data} />
      <br />
      <LimitTags name="Course" data={Data} />
      <br />
      <LimitTags name="Semester" data={Data} />
    </Tags>
  )
}

export default SearchTags
