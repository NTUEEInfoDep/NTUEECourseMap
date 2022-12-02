import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Header(props) {
  const showTitle = (page, siteName) => {
    if (page === "home" || page === "info")
      return (<h1>{siteName}</h1>)
    else
      return (<h1><ArrowBackIosIcon style={{position: 'relative', top: '2px'}}/>Back</h1>)
  }

  return (
    <header
      className={`${headerStyles.header} ${
        props.page === "info" && headerStyles.info_page
      }`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          {showTitle(props.page, props.title)}
        </Link>
        <div>
          <Link
            to={props.page === "info" ? "javascript:history.back()" : "/info"}
            activeClassName={headerStyles.navItemActive}
          >
            <h1>{props.page === "info" ? "close" : "info"}</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}
