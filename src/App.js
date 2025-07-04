import { use, useEffect } from "react";
import PostItem from "./components/PostItem";
import { fetchPost,addPost,editPost,deletePost } from "./store";
import { connect } from "react-redux";

function App({posts,fetchPost, addPost,editPost,deletePost}){

    const renderedPostList = posts.posts.map((post) =>{
        return <PostItem 
            key={post.id} 
            title={post.title} 
            body={post.body} 
            onEdit={()=> editPost(post.id)}
            onDelete={()=> deletePost(post.id)}
            ></PostItem>;
    });

    let content = null;
    if(posts.error){
        content = <div>{posts.error.message}</div>
    }else if(posts.isLoading){
        content = <div>Loading ...</div>
    }else if(posts.posts){
        content = <div>{renderedPostList}</div>
    }

    return <div className="container">
        <h1 className="title p-3">Welcome To Post Listing With Redux</h1>
        <div className="buttons p-3">
            <button onClick={addPost} className="button is-info">Add Post</button>
            <button onClick={fetchPost} className="button is-warning">Reload</button>
        </div>
        {content}
    </div>;
}

const mapStateToProps = ({ posts }) => { 
    return  {posts};
}



export default connect(mapStateToProps, {
    fetchPost,
    addPost,
    editPost,
    deletePost
})(App);