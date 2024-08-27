"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addPost } from "@/services/Web3Service";


export default function NewPost() {

  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const { push } = useRouter();

  function btnPublishClick() {
    setMessage(" Sending your post to the blockchain...");
    addPost(text)
    .then(result => {
      setText("");
      setMessage(" Post sent successfully. Please wait...");
    })
    .catch(err => {
      setMessage(err.message);
      console.log(err);
      
    })
  }

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (!wallet) 
        push("/");
  }, [])

  return (
    <>
      <div className="top">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1519114563721-eb52c00b9129?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="brand"
          />
          <h1>Welcome Back!</h1>
          <p>What's up?</p>
          <textarea className="form-control my-3" value={text} onChange={evt => setText(evt.target.value)}></textarea>
          <div>
            <input type="button" onClick={btnPublishClick} className="btn btn-primary" value="Post" />
            <span className="message">{message}</span>
          </div>
        </div>
      </div>
    </>
  );
}
