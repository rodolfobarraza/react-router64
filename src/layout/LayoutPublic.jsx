import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => { 

  const navigation = useNavigation()

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === 'loading' && (
          <div className="alert alert-info my-5">Cargando...</div>
        )}
        <Outlet />
      </main>
      <footer className="container text-center">El Footer</footer>
    </>
  )
}

export default LayoutPublic;