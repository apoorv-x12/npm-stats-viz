import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <>
      <div className="mb-2">
        <Header/>
        <Separator/>
      </div>
      <main>
        <Outlet/>
      </main>
      <div className="mt-12">
        <Separator/>
        <Footer/>
        <Separator/>
      </div>
      <Toaster />
    </>
  )
}

export default App
