import { useRouteError } from "react-router-dom";

const NotFound = () => { 

  const error = useRouteError()
  console.log(error);

  return (
    <div>
      <h1>{ error.status }</h1>
      <h3>{ error.statusText }</h3>
      <p>{ error.data }</p>
    </div>
  )
}

export default NotFound;