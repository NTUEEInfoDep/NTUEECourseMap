import React, { useState, useContext, createContext } from "react"

const SearchContext = createContext({
  searchText: "",
  searchTags: {},
  sortValue: "",
  sortOrder: "",
  updateSearchText: () => {},
  updateSearchTags: () => {},
  updateSortValue: () => {},
  updateSortOrder: () => {},
})
const SearchProvider = (props) => {
  const [searchText, setSearchText] = useState("")
  const [searchTags, setSearchTags] = useState({})
  const [sortValue, setSortValue] = useState("date")
  const [sortOrder, setSortOrder] = useState("ascending")
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
  const updateSortValue = (value) => {
    setSortValue(value)
  }
  const updateSortOrder = (order) => {
    setSortOrder(order)
  }
  return (
    <SearchContext.Provider
      value={{
        searchText,
        searchTags,
        sortValue,
        sortOrder,
        updateSearchText,
        updateSearchTags,
        updateSortValue,
        updateSortOrder,
      }}
      {...props}
    />
  )
}
const useSearch = () => useContext(SearchContext)
export { useSearch, SearchProvider }
