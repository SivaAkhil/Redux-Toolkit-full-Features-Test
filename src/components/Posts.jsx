import React from "react";

import { useGetPostsQuery } from "../store/api";

const Posts = () => {
  const { data, isFetching } = useGetPostsQuery();

  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <p>Posts {data.length}</p>
      {data.map((d) => {
        return <p key={d.id}>{d.title}</p>;
      })}
    </div>
  );
};

export default Posts;
