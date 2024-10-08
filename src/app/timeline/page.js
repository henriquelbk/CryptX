"use client";

import Head from "next/head";
import NewPost from "@/components/NewPost";
import Post from "@/components/Post";
import { getLastPost } from "@/services/Web3Service";
import { useState, useEffect } from "react";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPosts(page = 1) {
    try {
      const results = await getLastPost(page);
      if (page > 1) {
        posts.push(...results);
        setPosts(posts.reverse());
      } else setPosts(results.reverse());
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  function btnLoadMoreClick() {
    setPage(page + 1);
  }

  return (
    <>
      <Head>
        <title>CryptX | Timeline</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="layout">
            <NewPost />
            {posts && posts.length ? (
              posts.map((p) => <Post key={Number(p.timestamp)} data={p} />)
            ) : (
              <p> Nothing to see here. Post something!</p>
            )}
            {posts.length > 0 && posts.length % 10 === 0 ? (
              <div className="center">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="More Posts"
                  onClick={btnLoadMoreClick}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
