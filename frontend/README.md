### FrontEnd here..

1. `npm create vite@latest . ` (dot is because we dont want another folder to be created inside frontend folder).
Beacause vite is a bundler, it bundles a lot of things for us Thats what BUNDLERS do, no need for `npm init` , also it automatically adds scripts and dependencies in `package.json` and some other things like modulers JS `"type"="module"`. Creates readme, gitignore and other config files.

2. `npm i` - beacause all dependencies are already there, we need to do npm i.

#### To connect with BE- Axios(gives more features), fetch, react query.

NOTE => CORS will be same if url/ip and port both are same, even if port is different then it will be considered as CORS.
TO SOLVE THIS => We have 2 ways - 1.(WHITELISTING) Do whitelist the FE URL in BE code. 2.(PROXY) Create proxy in FE code  

1. Install axios `npm install axios`
2. We can add proxy e.g.- `"proxy":"http://localhost:3000"` in pakage.json in CRA app. But in vite - we have to do it in vite.config file. 