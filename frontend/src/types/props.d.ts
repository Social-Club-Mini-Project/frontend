import React from 'react';

interface PostPopUpProps {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddPost: Function;
}

interface LoginPopUpProps {
  onLoadPopUp: boolean;
  setOnLoadPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PostsProps {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  posts: {}[];
  setPosts: React.Dispatch<React.SetStateAction<{}[]>>;
  handleAddPost: (text: string, imgPath: string, imgName: string) => void;
  pfp: string;
  setPfp: React.Dispatch<React.SetStateAction<string>>;
  handleDeletePost: (id: number) => void;
  userID: string;
  // handleUpdatedLikes: (id: number, likes: number) => void;
  searchPost: {
    post: {}[];
    searchForPost: (userID: number) => Promise<void>;
    isSearching: boolean;
  };
}

interface PostProps {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  posts: {}[];
  setPosts: React.Dispatch<React.SetStateAction<{}[]>>;
  text: string;
  postID: number;
  handleAddPost: (text: string, imgPath: string, imgName: string) => void;
  pfp: string;
  setPfp: React.Dispatch<React.SetStateAction<string>>;
  handleDeletePost: (id: number) => void;
  userID: string;
  username: string;
  // handleUpdatedLikes: (id: number, likes: number) => void;
  searchPost: {
    post: {}[];
    searchForPost: (userID: number) => Promise<void>;
    isSearching: boolean;
  };
  likes: number;
}

interface ProfileProps {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  posts: {}[];
  pfp: string;
  setPfp: React.Dispatch<React.SetStateAction<string>>;
  userID: string;
}

export type {
  LoginPopUpProps,
  PostPopUpProps,
  PostsProps,
  PostProps,
  ProfileProps,
};
