import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage/homepage"
import { About } from "../pages/about/about"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<HomePage  />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}