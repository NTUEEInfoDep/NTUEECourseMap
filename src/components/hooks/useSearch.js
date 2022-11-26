import React, { useState, useContext, createContext } from "react"

const SearchContext = createContext({
  searchText: "",
  searchTags: {},
  updateSearchText: () => {},
  updateSearchTags: () => {},
})
const SearchProvider = (props) => {
  const [searchText, setSearchText] = useState("")
  const [searchTags, setSearchTags] = useState({})
  // usage: {'Professor': ['Prof1', 'Prof2', ...], 'Course': [], 'Semester': []}

  const updateSearchText = (msg) => {
    setSearchText(msg)
    // console.log("hooks text")
  }
  const updateSearchTags = (types, msg) => {
    switch (types) {
      case "Clear":
        setSearchTags({})
        break
      default:
        setSearchTags({ ...searchTags, [types]: msg })
    }
    // console.log("hooks tags")
    // console.log(newSearchTags)
  }
  return (
    <SearchContext.Provider
      value={{ searchText, searchTags, updateSearchText, updateSearchTags }}
      {...props}
    />
  )
}
const useSearch = () => useContext(SearchContext)
export { useSearch, SearchProvider }
