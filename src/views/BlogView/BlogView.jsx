import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"


function BlogView() {

  const {id} = useParams() 
  const selectedBlog = blogs.find((blogObject)=>blogObject.id === id)
  return (
    <div>
     <h1 className="blogview-title">{selectedBlog.title}</h1> 
     <p className="blogview-img-name">
      <img src={selectedBlog.author.avatar} alt="author" height={"40px"} />
      {selectedBlog.author.name} | {selectedBlog.date}
      </p>
      <p className="detail-content">
      {selectedBlog.content}
      </p>
    </div>
  )
}

export default BlogView
