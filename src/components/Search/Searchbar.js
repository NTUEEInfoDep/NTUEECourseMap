import React, { useState } from "react"
import * as ReactDOM from "react-dom"

import TextField from "@mui/material/TextField"
import useBlogData from "../../static_queries/useBlogData"
import * as searchbarStyle from "../../styles/components/Searchbar.scss"
export default function Searchbar(props) {
  const blogData = useBlogData()
  const validBlogData = blogData.filter(
    (blog) => blog.node.frontmatter.title !== ""
  )
  const titles = validBlogData.map((blog) => blog.node.frontmatter.title)
  console.log(titles)
  var [inputText, setInputText] = useState("")

  const handleChange = (event) => {
    if (event.code === "Enter") {
      props.inputKeyword(event.target.value)
      setInputText(event.target.value)
    }
  }

  const filterList = () => {
    var updatedList = titles.filter((item) => {
      return item.toLowerCase().indexOf(inputText?.toLowerCase()) !== -1
    })
    let data_filter = updatedList.map((item, index, array) => {
      return (
        <option className="list-group-item" data-category={item} key={index}>
          {item}
        </option>
      )
    })
    return data_filter
  }

  return (
    <div>
      <TextField
        label="search"
        variant="outlined"
        className={"form-control form-control-lg " + searchbarStyle.textfield}
        placeholder="Search"
        onChange={(event) => {
          setInputText(event.target.value)
        }}
        onKeyPress={handleChange}
        type="text"
        style={{ margin: "10px" }}
      />
      {inputText === "" ? null : (
        <select className="list-group">{filterList()}</select>
      )}
    </div>
  )
}
