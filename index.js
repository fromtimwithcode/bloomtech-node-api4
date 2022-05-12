require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT

if (PORT == null) {
  console.error('no port set')
} else {
  server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
}
