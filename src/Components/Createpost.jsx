import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


export default function Createpost(props) {

  const posts = useMemo(() => JSON.parse(localStorage.getItem("posts")))
  console.log(posts)
  const history = useNavigate();
  const [state, setState] = useState({
    userId: "",
    title: "",
    body: "",
    id: "",
  })
  const getdata = (e) => {

    const { name, value } = e.target;
    const userid = JSON.parse(localStorage.getItem("loginuser"));
    setState({
      ...state,
      [name]: value,
      userId: userid[0].id,
      id: uuidv4(),
    })
    console.log(state);
  }
  const hanndlecancel = () => {
    history("/timeline");
  }
  const handlecreatepost = () => {

    // const post = localStorage.getItem("posts");
    // const usersArray = post ? JSON.parse(post) : [];
    posts.unshift(state);
    localStorage.setItem('posts', JSON.stringify(posts));
    history("/timeline");

  }

  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          name="title"
          value={state.title}
          placeholder="Title"
          type="text"
          onChange={getdata} />
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          name="body"
          value={state.body}
          placeholder="Describe everything about this post here"
          onChange={getdata}
        ></textarea>
        <div className="icons flex text-gray-500 m-2">
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex">
          <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={hanndlecancel}>Cancel</button>
          <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500"
            onClick={handlecreatepost}>Post</button>
        </div>
      </div>
    </div>
  )
}