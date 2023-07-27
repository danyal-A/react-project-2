import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import profile from '../Animation/animation_lkjhzdvo.json'
import createpost from '../Animation/animation_lkjk97a1.json'
import { Link, useNavigate } from 'react-router-dom';
import Comments from './Comments';
export default function Timeline() {

  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")))


  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const handleAddCommentClick = () => {
    setShowComments(!showComments);
  };
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
    <div className="w-2/3 m-auto">
      <div className="flex justify-between items-center space-x-10">
        <h1 className="text-3xl text-center font-bold">TimeLine</h1>
        <div className="flex justify-center">
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
        </div>
      </div>
      <ul className="">
        {posts.map((post) => (
          <li className="border shadow w-full px-6 py-6 mb-5" key={post.id}>
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3">User {post.userId}</h1>
              <div>

                <button
                  type="button"
                  class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  >
                  Del
                </button>
                <button
                  type="button"
                  class="border border-green-300 bg-green-300 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>

              </div>
            </div>
            <h1 className="text-2xl">{post.title}</h1>
            <br />
            {post.body}
            <div className="flex justify-between items-center mt-4">
              <h2 className="font-bold">Comments</h2>
              <button className="bg-green-300 rounded px-4 py-2" onClick={handleAddCommentClick}>Add Comment</button>
            </div>
            <div>
              {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
            {showComments && <Comments postid={post.userId} />}
            {/* <div className="flex justify-between items-center mt-4">
              <h2 className="font-bold">Comments</h2>
              {comments.length > 0 && (
                <div>
                  {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                  ))}
                </div>
              )}
              {showComment ? (
                <div>
                  <textarea
                    value={commentText}
                    onChange={handleCommentInputChange}
                    placeholder="Enter your comment"
                  />
                  <button onClick={handleAddComment}>Add Comment</button>
                  <button onClick={() => setShowComment(false)}>Cancel</button>
                </div>
              ) : (
                
              )}
            
            </div> */}

          </li>
        ))}
      </ul>
    </div>
  )
}
