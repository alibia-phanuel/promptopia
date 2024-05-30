"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

import React from "react";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  //creation du prompt

  const createPrompt = async (e) => {
    //stop le comportement par defaut du
    //navigateur au moment de la soumission du formulaire
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          //get the post from the form
          prompt: post.prompt,
          //check the user as send
          userId: session?.user.id,
          //get the Tag from the form
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Créer"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default page;
