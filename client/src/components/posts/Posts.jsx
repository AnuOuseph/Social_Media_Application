import Post from "../post/Post"
import "./Posts.scss"

function Posts() {
  const posts = [
    {
      id:1,
      name:"Jamie Doe",
      userId:1,
      profilePic:"https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      desc:"Fight like a girl",
      img:"https://images.unsplash.com/photo-1693833897288-4bcb88f5f777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
      id:2,
      name:"Jamie Doe",
      userId:2,
      profilePic:"https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      desc:"Fight like a girl",
      img:"https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    }
  ]
  return (
    <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
