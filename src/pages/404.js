import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Link to={`/`}>Back to home page.</Link>
  </div>
)

export default NotFoundPage
