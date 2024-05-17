import { useState } from "react"
import SideBar from "./modules/Sidebar"
import TopNavBar from "./modules/TopNavbar"
import View from "./modules/View"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="main_container">
      <section className="section_left">
        <SideBar />
      </section>
      <section className="section_right">
        <TopNavBar />
        <View />
      </section>
    </main>
  )
}

export default App
