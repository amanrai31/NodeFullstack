# NodeBackEnd
NodeJS backend using express.

Main data(to be work with) in BackEnd- 1 FILE, 2 DATA, 3 THIRD PARTY(API)  

Basic file structure in BE-
1. src [DB, model, controller, route, middlewre, utils(reusable things) etc]
2. package.json
3. .env
4. readme
5. git
6. lint

- Server is a software that serves something.

`computer/mobile/client <==> |express http requests| <==> server( FE code & DB )`

1. create git repo and clone it on local.
2. On local- it is empty folder, so `npm init` OR `npm init -y` i.e. intilize an app from npm & this will create a package.json only.
3. you can edit scripts in package.json `"start" : "node index.js"` [index.js is entry point for our app which we decided while creating package.json] {Bundlers like vite/versel do this all things for us - Writes some scripts, dependencies, DevDependencies etc}
4. Create index.js file write hello world and run by `npm run start` [Bare node application].
5. At this stage if you type `npm i` nothing will happen because `npm i` installs dependencies listed in our package.json & currently we dont have any dependencies.
6. Now install express or any framework `npm install express ` OR `npm install express --save`, you can see express as dependencies in pakage.json so node module folder will created automatic.
7. NOTE => if we use latest/ES6 type syntax to import express `import express from 'express'` then use "type":"module" in package.json;

---

We can send `<h1>` , `json` etc as response.

- We can install nodemon to restart nd load our application. `npm i -D nodemon` -D for dev dep. [Dev deps do not go in prod.]
- Create `.gitignore` file to ignore what not to upload. (Simply write name of file there)
- `npm install dotenv` - after this create `.env` file.
- import env in index.js `import 'dotenv/config';`

---

NOTE => CORS will be same if url/ip and port both are same, even if port is different then it will be considered as CORS.
TO SOLVE THIS => We have 2 ways - 1.(WHITELISTING) Do whitelist the FE URL in BE code. 2.(PROXY) Create proxy in FE code  

1. `npm i cors`, then configure CORS whitelisting in server.js.
