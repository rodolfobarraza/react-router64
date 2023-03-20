import { Outlet } from "react-router-dom";

const LayoutPublic = () => { 
  return (
    <>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
      <footer>El Footer</footer>
    </>
  )
}

export default LayoutPublic;