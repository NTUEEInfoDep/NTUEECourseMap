import React, { useState } from "react"

// mui
import Button from "@mui/material/Button"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material/styles"

// components
import SortTool from "./SortTool"
import Drawer from "./Drawer.js"
import SearchTags from "./Tags"

const sortList = [
  {
    value: "date",
    label: "時間",
  },
  {
    value: "score",
    label: "評分",
  },
  {
    value: "semester",
    label: "學期",
  },
  {
    value: "like",
    label: "推文數",
  },
]

// Customize the open button for search drawer
const SearchButton = styled(Button)({
  position: "absolute",
  left: "0",
  top: "20%",
  width: "50px",
  height: "80px",
  background: "#9CD0FF",
  borderRadius: "0% 10% 10% 0%",
})

export default function Search(props) {
  const [openSearch, setOpenSearch] = useState(false)
  const [sortValue, setSortValue] = useState("date")
  const [sortOrder, setSortOrder] = useState("ascending")

  const handleOpenSearch = () => {
    setOpenSearch(true)
  }
  const handleCloseSearch = () => {
    setOpenSearch(false)
  }

  return (
    <React.Fragment key="search">
      <Drawer inputKeyword={props.inputKeyword} />
      {/* <SearchButton onClick={handleOpenSearch}>
        <SearchIcon sx={{ fontSize: "30px", color: "#ffffff" }} />
      </SearchButton>
      <SwipeableDrawer
        open={openSearch}
        onClose={handleCloseSearch}
        onOpen={handleOpenSearch}
      >
        <SortTool
          sortList={sortList}
          sortValue={sortValue}
          setSortValue={setSortValue}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </SwipeableDrawer> */}
    </React.Fragment>
  )
}
