import React from "react"

// mui
import Button from "@mui/material/Button"
// import SwipeableDrawer from "@mui/material/SwipeableDrawer"
// import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material/styles"

// components
import Drawer from "./Drawer.js"

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

export default function Search() {
  return (
    <React.Fragment key="search">
      <Drawer />
    </React.Fragment>
  )
}
