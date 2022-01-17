import axios from 'axios';

export const getPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return data;
};

export const getPost = async id => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return data;
};

export const getPostComments = async id => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return data;
};
