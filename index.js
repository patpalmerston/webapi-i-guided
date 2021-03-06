const express = require('express'); // 1. add express functionality
// 1.a - download express package in terminal 'yarn add express'

const db =  require('./data/db.js'); // tells server where to find the database

const server = express();// 2.create an express server call it server(foobar"call it what you want")

// set up server to listen to localhost:4000
server.listen(4000, () => {
  console.log('\n***** Server running on localhos:4000 *****\n')
})
// start server in terminal 'yarn server'

//New Lines \n allows us to break up the code as it downloads

// commands - stop the server before we upload packages(cntrl 'C') and restart the server after package download with "yarn server".

// you can delete node_modules and yarn lock and then re install 'yarn start' to add fresh dependencies.

// Create endpoints - you control what your endpoints are - intuitive - make sense

//add home endpoint
server.get('/', (req, res) => {
  res.send('Hello World')
});
//add /now endpoint
server.get('/now', (req, res) => {
  const cDate = new Date().toISOString();// mdn search(reverts date object to a string)
  res.send(cDate)
});

// add Get/ hubs endpoint;
server.get('/hubs', (req, res) => {
  db.hubs
    .find()
    .then(hubs => {
      res.status(200).json(hubs)
    })
    .catch(err => {
      res.status(err.code).json({ message: 'error retrieving hub' })
    })
    /* 
    
    -different way to format the catch function to destructor the return message

    .catch(( { code, message } ) => {
      res.status(code).json({
        success: false,
        message,
      })
    })

    */
})

// adding data endpoint 
server.post('/hubs', (req, res) => {
  const hubInfo = req.body;

  db.hubs
    .add(hubInfo)
    .then(hubs => {
      res.status(201).json({success: true, hubs})
    })
    .catch(err => {
      res.status(err.code).json({success: false, message: err.message})
    });
});


// adding a delete endpoint

server.delete('/hubs/:id', (req, res) => {
  const id = req.params.id;
// we can use empty () or a word like deleted(foobar) for the delete .then method
  db.hubs
    .remove(id)
    .then(deleted => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(err.code).json({ success: true, message: err.message })
    })
})