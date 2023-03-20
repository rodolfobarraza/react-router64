import { useLoaderData, Link } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData()
  return (
    <>
      <h1>Blog...</h1>
      <ul className="list-group">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link className="list-group-item list-group-item-action" key={post.id} to={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
          ))
        ) : ( <li>No hay resultados a mostrar</li> )}
      </ul>
    </>
  )
}

export default Blog;

export const loaderBlog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {posts};
}