"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profiles from "@components/Profiles";
//un utilisateur en particulier
const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  //get name user in the url
  const userName = searchParams.get("name");
  //all post of  this user
  const [userPosts, setUserPosts] = useState([]);
  //detection au moment du chargement de la page avec id de user
  //fin all post of this user
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profiles
      name={userName}
      desc={`Bienvenue sur la page de profil personnalisé de ${userName} page de profil personnalisée. Explore ${userName}' Explorez les invites exceptionnelles d'arsenetsopze et laissez-vous inspirer par la puissance de leur imagination.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
