// Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Seo title="About" />
      <p> Testing this site built with Gatsby and Tailwind CSS.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage