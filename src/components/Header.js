import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import LimitTags from "./Tag_filter/Tag"

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
        <div>
          <LimitTags name = "Teacher" data={Data}/>
          <br/>
          <LimitTags name = "Course" data={Data}/>
          <br/>
          <LimitTags name = "Semester" data={Data}/>
        </div>

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

const Data = [
  '信號與系統' ,
  '交換電路與邏輯設計',
  '普通物理甲' ,
  '電路學' ,
  '電磁學' 
];