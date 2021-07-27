import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <nav className="flex">
        <Link
          to="/"
          className="flex-auto bg-red-400 text-black text-center mt-16 px-2 py-1 mx-8 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/about"
          className=" flex-auto bg-red-400 text-black text-center mt-16 px-2 py-1 mx-8 rounded-lg hover:bg-red-700 hover:text-white"
        >
          About
        </Link>
      </nav>
      <h1>{pageTitle}</h1>
      <div className="bg-blue-200">{children}</div>
    </main>
  )
}

export default Layout
