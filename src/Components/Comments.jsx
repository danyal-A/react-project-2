import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Comments(props) {
  
    const history = useNavigate();
    const [showComment, setShowComment] = useState(true);
    const [comments, setComments] = useState([]); //containing all comments
    const [commentText, setCommentText] = useState('');

    const handleAddComment = () => {
        if (commentText.trim() !== '') {
            setComments((prevComments) => [...prevComments, commentText]);
            setCommentText('');
        }
    };
   
    const handleunmount = () =>{
        setShowComment(false);
    }

    const handleCommentInputChange = (event) => {
        setCommentText(event.target.value);
    };
    return (
        <>
        {showComment ? (
        <div className="mt-8 w-full">
            {comments.length > 0 && (
                <div>
                    {comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))}
                </div>
            )}
            <div className="flex justify-between">
                <textarea
                    value={commentText}
                    onChange={handleCommentInputChange}
                    placeholder="Enter your comment"
                />
                <div>
                <button className="mr-2" onClick={handleAddComment}>Post comment</button>
                <button  onClick={handleunmount}>Cancel</button>
                </div>
            </div>
        </div>
        ): (
            console.log("")                                     
        )}
    </>
    )
}
