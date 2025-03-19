# setup your project

1. Create NPM project, hit enter till done
```bash
npm init
```

2. Install express
```bash
npm install express
```

3. Install nodemon (optional)
```
npm install --save-dev nodemon
```

4. Edit package.json
In `"scripts"` create an entry for the main program and nodemon
```json
"start": "node index.js",
"dev": "nodemon index.js"
```

replace index.js with the name of your express server file.

Run with either
```
npm start
```

or for nodemon.

```
npm run dev
```
