import * as app from './routes.mjs'
const port = 3001

app.default.listen(port)
console.info(`listening on http://localhost:${port}`)