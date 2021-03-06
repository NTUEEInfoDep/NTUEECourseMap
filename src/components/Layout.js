import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import * as layoutStyles from "../styles/components/layout.module.scss"
import theme from "../theme"
import { ThemeProvider } from "@mui/material/styles"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <section
        className={`${layoutStyles.layout} ${
          props.page === "info" && layoutStyles.info_page
        }`}
        style={{
          backgroundColor: props.bgColor,
        }}
      >
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header page={props.page} title={title} />
        <div className={layoutStyles.content}>{props.children}</div>
      </section>
    </ThemeProvider>
  )
}
