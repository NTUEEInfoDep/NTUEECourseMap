import * as React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import CssBaseline from "@mui/material/CssBaseline"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import InputAdornment from "@mui/material/InputAdornment"

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import SearchIcon from "@mui/icons-material/Search"
import { margin } from "@mui/system"
import { BorderAllOutlined, Translate } from "@mui/icons-material"
import { Input } from "@mui/material"

import { useState } from "react"
import SearchTags from "./Tags"
import SortTool from "./SortTool"

const drawerWidth = 350

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   })
// )

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }))
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

export default function DrawerLeft() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [sortValue, setSortValue] = useState("date")
  const [sortOrder, setSortOrder] = useState("ascending")

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment key="search">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        // edge="start"
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        sx={{
          position: "fixed",
          top: "50%",
          left: open ? drawerWidth + 10 : 10,
          transform: "translate(0, -50%)",
          // transition: "0.1s ease",
          transitionDuration: theme.transitions.duration.enteringScreen,
        }}
      >
        {/* {open ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
        <SearchIcon />
      </IconButton>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}

        {/* <Main open={open}>
          <DrawerHeader />
        </Main> */}

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        >
          <Box
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 20px 0px",
            }}
          >
            Search Tools
          </Box>
          <Divider />
          {/* Search text */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              // label="TextField"
              placeholder="Search course..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>

          {/* Search Tags */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <SearchTags />
          </Box>

          <Divider />

          {/* Sort Tools */}
          <Box
            sx={{
              margin: "30px 0px 30px 0px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SortTool
              sortList={sortList}
              sortValue={sortValue}
              setSortValue={setSortValue}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </Box>

          <Divider />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "30px 0px 30px 0px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                width: "40%",
                border: "1px solid gray",
                font: "inherit",
              }}
            >
              Apply
            </Button>
            <Button
              sx={{
                textTransform: "none",
                width: "40%",
                border: "1px solid gray",
                font: "inherit",
              }}
            >
              Clear All
            </Button>
          </Box>
          {/* <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Drawer>
      </Box>
    </React.Fragment>
  )
}
