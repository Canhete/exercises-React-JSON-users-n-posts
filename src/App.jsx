import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsuarios);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.website}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Posts</h1>

      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
