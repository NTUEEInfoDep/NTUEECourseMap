import React from "react"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

export default function SortTool({
  sortList,
  sortValue,
  setSortValue,
  sortOrder,
  setSortOrder,
}) {
  return (
    <React.Fragment key="sort">
      <ToggleButtonGroup
        value={sortValue}
        exclusive
        onChange={(event) => {
          if (sortValue === event.target.value) {
            setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
          } else {
            setSortOrder("ascending")
            setSortValue(event.target.value)
          }
        }}
        aria-label="text alignment"
      >
        {sortList.map((sort) => (
          <ToggleButton value={sort.value}>
            {sort.label}
            {sort.value === sortValue &&
              (sortOrder === "ascending" ? (
                <ArrowDownwardIcon sx={{ fontSize: "inherit" }} />
              ) : (
                <ArrowUpwardIcon sx={{ fontSize: "inherit" }} />
              ))}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </React.Fragment>
  )
}
