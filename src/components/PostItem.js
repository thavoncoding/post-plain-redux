function PostItem({title, body, onEdit, onDelete}){
    return <div className="card mb-3">
  <div className="card-content">
    <p className="title">
      {title}
    </p>
    <p className="subtitle">
      {body}
    </p>
  </div>
  <footer className="card-footer">
    <div className="card-footer-item">
      <div className="buttons">
      <button onClick={onEdit} className="button">Edit</button>
      <button onClick={onDelete} className="button is-danger">Delete</button>
      </div>
    </div>
  </footer>
</div>
}

export default PostItem;