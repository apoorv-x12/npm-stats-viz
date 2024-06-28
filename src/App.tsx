import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <>
      <div className="mb-2 sticky top-0 z-50 dark:bg-dark-bgo bg-gray-50">
        <Header/>
        <Separator/>
      </div>
      <main>
        <Outlet/>
      </main>
      <div className="mt-12 dark:bg-dark-bgo bg-purple-50">
        <Separator/>
        <Footer/>
        <Separator/>
      </div>
      <Toaster />
    </>
  )
}

export default App
