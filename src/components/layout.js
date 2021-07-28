import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="mx-auto bg-gray-300 h-screen w-screen">
      <title>{pageTitle}</title>
      <nav className="flex">
        <Link
          to="/"
          className="flex-auto bg-red-400 text-black text-center mt-16 py-1 mx-8 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/about"
          className=" flex-auto bg-red-400 text-black text-center mt-16 py-1 mx-8 rounded-lg hover:bg-red-700 hover:text-white"
        >
          About
        </Link>

        <Link
          to="/page-2"
          className=" flex-auto bg-red-400 text-black text-center mt-16 py-1 mx-8 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Page-2
        </Link>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
