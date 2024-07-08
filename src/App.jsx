import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/404"
import Layout from "./layout/Layout"

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route index element={<Navigate to={"/Products"} replace />} />
            <Route path="/Products" element={<ProductsPage/>} />
            <Route path="/Products/:id" element={<DetailsPage/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
        </Layout>
    </>
  )
}

export default App
