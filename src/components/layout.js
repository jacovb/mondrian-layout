import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="mx-auto bg-gray-900 h-screen w-screen">
      <title>{pageTitle}</title>
      <div id="grid" className="grid grid-cols-12 grid-rows-6 w-full h-full">
        <h1 className="text-white">Hello</h1>
        <div className="row-start-2 row-end-3 col-start-3 col-end-9 bg-white ">
          <nav className="flex space-x-1.5 mx-4 my-4 items-center">
            <Link
              to="/"
              className="flex-auto bg-red-400 text-white text-center py-1 hover:bg-red-700 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="flex-auto bg-red-400 text-white text-center py-1 hover:bg-red-700 hover:text-white"
            >
              About
            </Link>

            <Link
              to="/page-2"
              className="flex-auto bg-red-400 text-white text-center py-1 hover:bg-red-700 hover:text-white"
            >
              Page-2
            </Link>
          </nav>
        </div>
      </div>
      <h1 className="text-white">{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
