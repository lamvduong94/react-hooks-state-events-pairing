import React, { useState } from 'react';
import video from '../data/video';
import Details from './Details';
import DisplayComments from './DisplayComments';

function DisplayDetails(props) {
    const [upVote, setUpVote] = useState(video.upvotes);
    const [downVote, setDownVote] = useState(video.downvotes);
    const [hideComments, setHideComments] = useState(false);

    function handleUpVote() {
        setUpVote(() => upVote + 1)
    }

    function handleDownVote() {
        setDownVote(() => downVote + 1)
    }

    function handleHideComments() {
        setHideComments(!hideComments);
    }

    return (
        <div>
            <Details 
                title={props.video.title}
                views={props.video.views}
                createdAt={props.video.createdAt}
                upVotes={props.video.upVotes}
                downVotes={props.video.downVotes}
            />
            <button onClick={handleUpVote}>{upVote} 👍</button>
            <button onClick={handleDownVote}>{downVote} 👎</button>
            <br />
            <button onClick={handleHideComments}>{hideComments ? 'Show Comments' : 'Hide Comments'}</button>
            {hideComments ? null: <DisplayComments comments={video.comments} hideComments={hideComments}/>}
        </div>
    )
}

export default DisplayDetails;