# PIGA
## _Web Design Template Gallery_

PIGa is a web design templates gallery, ready to be implemented for your benefits. No technical knowledge required. Just entusiasm to see your bussiness grow up.

- You see it
- You got it
- ✨Magic ✨

This SPA was developed on Nodejs with NPM. You are free to download it and run it upon Windows, MAC OS, or Linux system.
## Requirements
- Nodejs v15.14.0 or supperior 
- NPM v7.9.0
## Files Structure
This solution has two principal components: 
- API Server (API_Server folder)
- Web Client (client-app folder).

## Tech

#### API Server

- [Express] - Based on Express framework to develop the routes of endpoints: has one endpoint
  - [GET] /thumbs/:id 
  1. Can consume this endpoint hitting straight to http://localhost:3001/api/thumbs this will retun a list of objects with the structure: 
      > title: string;
      > cost: string;
      > id: string;
      > description: string;
      > thumbnail: string;
      > image: string;
  2. To get the info for one template, you need to hit the endpoint using the id of the desired thumbnail calling http://localhost:3001/api/thumbs/:id, the result will be an object with the same structure as the ones on the list.

#### Web Client
- [ReactJS](https://reactjs.org/) - Decided to use this library
- [Typescript](https://www.typescriptlang.org/) - Using the type definitions of this language, have a better order for variables data type and a more structured syntax of every react component
- [React Semantic UI](https://react.semantic-ui.com/) - Fast, easy and strong UI components.

Into the client-app folder exist all the TSX files, grouping by features.

## Installation

Install the dependencies and devDependencies and start the API Server.
#### API Server
```sh
cd API_Server
npm install
```

#### SPA
```sh
cd client-app
npm install
```

## Running

Want to run it? Great!

Open your favorite Terminal and run these commands.

#### API Server

```sh
cd API_Server
npm run dev
```

#### SPA

```sh
cd client-app
npm start
```

## License

MIT

**Free Software, Yeah!**
