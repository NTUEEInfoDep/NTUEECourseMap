import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Search from "../components/Search"
import { SearchProvider } from "../components/hooks/useSearch"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <SearchProvider>
        <Search />
        <section>
          <BlogList />
        </section>
      </SearchProvider>
    </Layout>
  )
}
