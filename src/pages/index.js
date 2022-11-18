import React, { useState } from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Search from "../components/Search"

export default function IndexPage() {
  const [keyword, setKeyword] = useState("")
  return (
    <Layout page="home" bgColor="inherit">
      <Search inputKeyword={setKeyword} />
      <section>
        <BlogList keyword={keyword} />
      </section>
    </Layout>
  )
}
