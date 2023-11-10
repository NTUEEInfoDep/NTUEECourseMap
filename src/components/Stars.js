import React, { useEffect, useState } from "react"
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded"
import StarRoundedIcon from "@mui/icons-material/StarRounded"
export default ({ starsNum }) => {
  const [num, setNum] = useState(starsNum)
  useEffect(() => {
    setNum(starsNum)
  }, [starsNum])
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= num)
          return (
            <StarRoundedIcon style={{ margin: -2 }} sx={{ color: "#FFBF00" }} />
          )
        else return <StarBorderRoundedIcon style={{ margin: -2 }} />
      })}
    </>
  )
}
