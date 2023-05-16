import React from 'react';

interface propsPostPopUp {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddPost: Function;
}

interface propsLoginPopUp {
  onLoadPopUp: boolean;
  setOnLoadPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

interface propsPosts {
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
  likes?: number;
}

interface propsPost {
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

interface propsProfile {
  buttonPopUp: boolean;
  setButtonPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  posts: {}[];
  pfp: string;
  setPfp: React.Dispatch<React.SetStateAction<string>>;
  userID: string;
}

export type {
  propsLoginPopUp,
  propsPostPopUp,
  propsPosts,
  propsPost,
  propsProfile,
};
