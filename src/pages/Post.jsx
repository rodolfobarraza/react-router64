import { useLoaderData, Link } from "react-router-dom";

const Post = () => { 
  const { post } = useLoaderData()
  return (
    <>
      <h1>Post...</h1>
      <h3>{ post.id } - { post.title }</h3>
      <p>{ post.body }</p>
      <Link to="/blog">Volver</Link>
    </>
  )
}

export default Post;

export const loaderPost = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json();

  return { post }
}