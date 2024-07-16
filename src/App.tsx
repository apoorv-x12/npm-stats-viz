import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/toaster";
// import { Meteors } from "./components/ui/meteors";

function App() {

  return (
    <>
      <div className="mb-2 sticky top-0 z-[10000] dark:bg-dark-bgo bg-gray-50">
        <Header/>
        <Separator/>
      </div>
      <main>
        <Outlet />
      </main>
      <div className="mt-12 dark:bg-dark-bgo bg-purple-50">
        <Separator/>
        <Footer/>
        <Separator/>

      </div>
      {/* <Meteors number={20} /> */}
      <Toaster />
    </>
  )
}

export default App
