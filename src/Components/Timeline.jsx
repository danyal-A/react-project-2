import React, { useEffect, useState } from 'react'
import Comments from './Comments';
import Lottie from 'react-lottie-player'
import profile from '../Animation/animation_lkjhzdvo.json'
import createpost from '../Animation/animation_lkjk97a1.json'
import logout from '../Animation/animation_lktqhnf1.json'
import { Link, Router, useNavigate } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


export default function Timeline() {
  const existingUserData = localStorage.getItem('users');
  const usersArray = existingUserData ? JSON.parse(existingUserData) : [];
  
  const history = useNavigate();
  const [commentid, setCommentId] = useState("");
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")))
  const [loginuser] = JSON.parse(localStorage.getItem("loginuser"));

  const [comments, setComments] = useState([]);

  //handle the delete post
  const deleteposthandle = (postid) => {
    const updatedPosts = posts.filter((post) => post.id !== postid);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    alert("post delted success fully");
  }

  //handle the delete comment 
  const handledeletecomment = (id_, text) => {
    const updatecomment = comments.filter((comment) => comment.id_ !== id_ && comment.text !== text);
    setComments(updatecomment);

    localStorage.setItem("Comments", JSON.stringify(updatecomment));
    alert("comment deleted successfully");
  }

  //handle logout button 
  const handlelogout = () => {
    localStorage.removeItem("loginuser");
    localStorage.setItem("loggedin", false)
    history("/");
  }

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('Comments'));
    if (storedComments) {
      setComments(...comments, storedComments);
    }
  }, []);
  // useEffect(() => {
  //   const getPosts = async() => {

  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error('Error fetching data:', error));

  //     // setPosts(posts)
  //     localStorage.setItem("posts",JSON.stringify(posts));
  //   }
  //   getPosts()
  // },[]);
  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>
          </ModalHeader>
          <ModalBody toggle={() => setModal(!modal)}>
            <Comments postid={commentid} setModal={setModal} modal={modal} />
          </ModalBody>
        </Modal>
      </div>
      <div className="w-2/3 m-auto">
        <div className="flex justify-between items-center space-x-10">
          <h1 className="text-3xl text-center font-bold">TimeLine</h1>
          <div className="flex justify-center items-center">
            <div className='cursor-pointer'>
              <Link to="/createpost">
                <Lottie
                  loop
                  animationData={createpost}
                  play
                  style={{ width: 120, height: 120 }}
                />
              </Link>
            </div>

            <Link to="/profile"><Lottie
              loop
              animationData={profile}
              play
              style={{ width: 150, height: 150 }}
            /></Link>
            <div className='cursor-pointer'>
              <Lottie
                loop
                animationData={logout}
                play
                onClick={() => handlelogout()}
                style={{ width: 120, height: 120 }}
              />
            </div>
          </div>
        </div>

        <ul>
          {posts.map((post) => (
            <li className="border shadow w-full px-6 py-6 mb-5" key={post.id}>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">User {post.userId}</h1>
                {loginuser.id === post.userId ? (
                  <div>
                    <button
                      onClick={() => deleteposthandle(post.id)}
                      type="button"
                      class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    >
                      Del
                    </button>
                    <Link
                      to={`/edit/${post.id}`}
                      type="button"
                      class="border border-green-300 no-underline text-white bg-green-300 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <h1 className="text-2xl">{post.title}</h1>
              <br />
              {post.body}
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-3xl font-bold">Comments</h2>
                <button className="bg-green-300 rounded px-4 py-2 hover:bg-green-400" onClick={() => { setModal(true); setCommentId(post.id) }} >Add Comment</button>
              </div>
              <div className="w-full">
                {comments.length > 0 ? (
                  <ul className="mt-2">
                    {comments.filter(comment => comment.id_ === post.id).map((comment) => (
                      <ul className="flex justify-between items-center border mb-2 p-2 rounded">
                        <li>User {post.userId}</li>
                        <li key={comment.id}>{comment.text}</li>
                        {loginuser.id === post.userId ? (
                          <li>
                            <button
                              type="button"
                              onClick={() => handledeletecomment(comment.id_, comment.text)}
                              class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                            >Del
                            </button></li>
                        ) : ("")}
                      </ul>
                    ))}

                  </ul>
                ) : (
                  <p>No comments yet.</p>
                )}
              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
