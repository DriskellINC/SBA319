// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Post = require('../models/Post.js');
const User = require('../models/User.js');

///////////////////////////
//CHANGE THIS SAMPLE DATA TO THE DATA YOU'RE WORKING WITH!!!
///////////////////////////
const users = [
  {
    email: 'john@doe.com',
    password: '123456',
    age: 40,
    isCool: true,
    skills: ['JavaScript', 'Node.js', 'React'],

  },
  {
    email: 'boba@fett.com',
    password: 'jetpackdude',
    age: 35,
    isCool: true,
    skills: ['Python', 'Django', 'Flask'],

  },
  {
    email: 'darth@vader.com',
    password: 'iamyourfather',
    age: 60,
    isCool: false,
    skills: ['Java', 'Spring Boot', 'Hibernate'],

{
    email: 'leia@organa.com',
    password: 'princess123',
    skills: ['C#', '.NET', 'ASP.NET'],
},
{
    email: 'harry@potter.com',
    password: 'magic123',
    skills: ['Ruby', 'Rails', 'RSpec'],
},


  },
];

const posts = [
    {
      title: 'Introduction to Express.js',
      content: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    },
    {
      title: 'Getting Started with MongoDB',
      content: 'MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.',
    },
    {
      title: 'React Hooks Tutorial',
      content: 'React Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class. This tutorial will introduce you to the useState and useEffect hooks.',
    },
    {
      title: 'Authentication with Passport.js',
      content: 'Passport.js is a middleware for Node.js that allows you to authenticate requests. It supports various authentication mechanisms, including username and password, Facebook, Google, etc.',
    },
    {
      title: 'Testing in Node.js with Mocha and Chai',
      content: 'Mocha is a feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple and fun. Chai is a BDD / TDD assertion library for Node.js and the browser.',
    },
  ];

async function seed() {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    const createdPosts = await Post.create(posts);

    console.log('Posts: ', createdPosts);

    const createdUsers = await User.create(users);

    console.log('Users: ', createdUsers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();