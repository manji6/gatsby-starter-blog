// src/templates/blog-template.js
import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ location,pageContext: { title, path, date } }) => (
  <Layout location={location} title={title}>
      <SEO
        title={title}
        description={title}
      />
    <p>use createPagesAPI.</p>
  </Layout>
)

export default PageTemplate