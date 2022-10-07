import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Search from "../components/Search"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <Search />
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}
