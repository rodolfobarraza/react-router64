import { useRouteError, Link } from "react-router-dom";

const NotFound = () => { 

  const error = useRouteError()

  return (
    <div>
      <h1>{ error.status }</h1>
      <h3>{ error.statusText }</h3>
      <p>{ error.data }</p>
      <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default NotFound;