import "./BlogCard.css"
import "./../../data"
import { Link } from "react-router-dom"

function BlogCard({id,title,content,author,date,categories}) {
  return (
    
    <Link className="blog-card" to={`/blog/${id}`}>
        <h2 className="blog-title">{title}</h2>  
        <p className="blog-content-preview">
          {content.substring(0,70)}...
        </p>
        <div className="author-card">
           <img src={author.avatar} alt="author" className="author-avatar" /> 
          <span className="author-name">{author.name}</span>
         </div>
         <span className="blog-date">{date}</span>
         <div>
      {categories.map((category, i) =>{
        return <span key={i} className="category-badge">{category}</span>
      })
      }
      </div>
</Link>
  )
}

export default BlogCard 