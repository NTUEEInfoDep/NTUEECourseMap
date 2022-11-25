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
  }
  const updateSearchTags = (type, msg) => {
    let newSearchTags = searchTags
    switch (type) {
      case "Clear":
        newSearchTags = {}
        break
      default:
        newSearchTags[type] = msg
    }
    setSearchTags(newSearchTags)
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
