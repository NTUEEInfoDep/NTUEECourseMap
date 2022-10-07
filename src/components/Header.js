import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import Sort_list from "./sort_list"

export default function Header(props) {
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
          <h1>{props.title}</h1>
        </Link>
        <Sort_list/>
        <div>
          <h1>
            <Link
              to={props.page === "info" ? "/" : "/info"}
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === "info" ? "close" : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}
