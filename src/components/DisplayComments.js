import React from 'react';
import Comment from './Comment';

function DisplayComments({ comments }) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map(({ id, user, comment }) => 
            <Comment 
                key={id}
                user={user}
                comment={comment}
            />
            )}
        </div>
    )
}

export default DisplayComments;