import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import PostPopUp from '@/components/postPopUp'
import Profile from '@/components/profile'
import PostsSection from '@/components/posts'
import { useRouter } from 'next/Navigation'
import { useFetchPosts } from '@/hooks/useFetchPosts'
import { useCreatePost } from '@/hooks/useCreatePost'
import useDeletePost from '@/hooks/useDeletePost'

const Home = () => {

  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [posts, setPosts] = useState<{}[]>([]);
  const [pfp, setPfp] = useState("");
  const [auth, setAuth] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const postsData = useFetchPosts();
  const handleCreatePost = useCreatePost();
  const deletePostFromApi = useDeletePost();

  const handleAddPost = (text: string, imgPath: string, imgName: string) => {
    const newPost = {
      text: text,
      userID: username,
      likes: 0,
      // img: {
      //   name: imgName,
      //   url: imgPath
      // }
    }
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    handleCreatePost(newPost);
  }

  const handleDeletePost = (id: number) => {
    setPosts(oldPosts => oldPosts.filter((post) => post.postID !== id));
    deletePostFromApi(id);
  }

  // const handleUpdateLikes = (id: string, likes: number) => {
  //   const updatedPost = posts.map(post => {
  //     if (post.id === id)
  //       return { ...post, likes: likes };
  //     return post;
  //   })
  //   setPosts(updatedPost)
  // }

  useEffect(() => {
    setPosts(postsData)

    const pfpStorage = window.localStorage.getItem('pfp');
    const userAuth = window.localStorage.getItem('auth');
    const storedUsername = window.localStorage.getItem('username');
    setUsername(storedUsername);
    setAuth(userAuth);
    setPfp(pfpStorage);
    if (auth === 'false' || !storedUsername)
      router.push('/');
  }, [setPfp, setAuth, setUsername,setPosts, router, auth, postsData])

  if (auth === 'true')
    return (
      <>
        <Head>
          <title>Home Page</title>
        </Head>
        <Profile
          buttonPopUp={buttonPopUp}
          setButtonPopUp={setButtonPopUp}
          posts={posts}
          pfp={pfp}
          setPfp={setPfp}
          userID={username}
        />
        <PostsSection
          buttonPopUp={buttonPopUp}
          setButtonPopUp={setButtonPopUp}
          posts={posts}
          setPosts={setPosts}
          handleAddPost={handleAddPost}
          pfp={pfp}
          setPfp={setPfp}
          handleDeletePost={handleDeletePost}
          userID={username}
          // handleUpdateLikes={handleUpdateLikes}
        />
        <PostPopUp
          buttonPopUp={buttonPopUp}
          setButtonPopUp={setButtonPopUp}
          handleAddPost={handleAddPost}
        />
      </>
    )
}

export default Home;