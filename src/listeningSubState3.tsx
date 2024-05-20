import { useEffect, useState } from "react";
import { useStore } from "./store/store";

export const ListeningSubState3 = () => {
    const posts = useStore(state => state.visits?.listStates?.posts);
    const setPosts = useStore(state => state.visits?.setPosts);

    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setPosts(await response.json());
      }
      if(!posts) fetchPosts();
    }, [posts, setPosts]);

    const post0 = Array.isArray(posts) ? posts[0] : undefined;
    console.log("rerendering sub3 (fetch)");
  
    return <div style={{display:'flex', flexDirection:'column'}}>
                <div>Post 0 title "{post0?.title ?? 'undefined'}"</div>
        </div>
};