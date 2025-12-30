import { useEffect, useState } from "react";
import axios from "axios";

const EffectWithAPI = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>We are going to work with API.</h1>
      <h2>Printing Posts title.</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
};
export default EffectWithAPI;
