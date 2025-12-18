const axios = require('axios');

const getAllBooks = async () => {
  return axios.get('http://localhost:5000/books');
};

const getBooksByISBN = async (isbn) => {
  return axios.get(`http://localhost:5000/books/${isbn}`);
};

const getBooksByAuthor = async (author) => {
  return axios.get(`http://localhost:5000/books/author/${author}`);
};

const getBooksByTitle = async (title) => {
  return axios.get(`http://localhost:5000/books/title/${title}`);
};

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
