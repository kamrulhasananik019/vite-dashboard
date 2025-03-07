import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar"

function App() {


  return (
    <>
      <div className="flex h-screen bg-[#060504] dark:text-white">
     <div className="hidden md:block ">
     <Sidebar />
     </div>
      <Dashboard/>
    </div>
    </>
  )
}

export default App
