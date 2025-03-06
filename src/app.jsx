import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar"

function App() {


  return (
    <>
      <div className="flex h-screen bg-[#0c0a09] dark:text-white">
      <Sidebar />
      <Dashboard/>
    </div>
    </>
  )
}

export default App
