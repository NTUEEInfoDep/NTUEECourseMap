import React, { useState } from "react"
import * as ReactDOM from "react-dom"

import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import useBlogData from "../../static_queries/useBlogData"
import * as searchbarStyle from "../../styles/components/Searchbar.scss"
// import { useSearch } from "../hooks/useSearch"

export default function Searchbar(props) {
  const blogData = useBlogData()
  // const { searchText, updateSearchText } = useSearch()
  const { localSearchText, setLocalSearchText, handleChange } = props

  // const validBlogData = blogData.filter(
  //   (blog) => blog.node.frontmatter.title !== ""
  // )
  // const titles = validBlogData.map((blog) => blog.node.frontmatter.title)
  // console.log(titles)

  // const filterList = () => {
  //   var updatedList = titles.filter((item) => {
  //     return item.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1
  //   })
  //   let data_filter = updatedList.map((item, index, array) => {
  //     return (
  //       <option className="list-group-item" data-category={item} key={index}>
  //         {item}
  //       </option>
  //     )
  //   })
  //   return data_filter
  // }

  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        variant="outlined"
        className={"form-control form-control-lg " + searchbarStyle.textfield}
        placeholder="Search course..."
        value={localSearchText}
        onChange={(e) => {
          setLocalSearchText(e.target.value)
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onKeyPress={handleChange}
        type="text"
        style={{ margin: "10px" }}
      />
      {/* {inputText === "" ? null : (
        <select className="list-group">{filterList()}</select>
      )} */}
    </div>
  )
}
