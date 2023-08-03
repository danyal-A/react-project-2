import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Editpost({ posts, setPosts }) {
    const history = useNavigate();
    const { id } = useParams();
    const postToEdit = posts.find((post) => post.id === id);
    const [editedContent, setEditedContent] = useState(postToEdit)
   
    const getdata = (e) => {
        const { name, value } = e.target;
        setEditedContent({
            ...editedContent,
            [name]: value,
            userId: postToEdit.userId,
            id: postToEdit.id,
        })
      
    }
    const handleSaveChanges = () => {
        const updatedPosts = posts.map((post) =>
          post.id === id ? { ...post, title: editedContent?.title, body: editedContent?.body} : post
        );
        setPosts(updatedPosts);
    
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    
        history("/timeline");
      };

    return (
        <div>
            <div>
                <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Edit Post</div>
                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                    <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                        spellcheck="false"
                        name="title"
                        value={editedContent.title}
                        placeholder="Title"
                        type="text"
                        onChange={getdata} />
                    <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                        spellcheck="false"
                        name="body"
                        value={editedContent.body}
                        placeholder="Describe everything about this post here"
                        onChange={getdata}
                    ></textarea>
                    <div className="icons flex text-gray-500 m-2">
                        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>
                    <div className="buttons flex">

                        <button
                        onClick={handleSaveChanges} 
                        className="border rounded hover:bg-blue-600 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500"
                        >Save change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
