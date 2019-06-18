const express = require('express')
require('dotenv').config()


const app = express()

const massive = require('massive')

const session = require('express-session')

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('database set!')

})

app.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PORT} Kebabs in my tummy`)
})

const ctrl = require('./controller')


app.get('/checkSession', ctrl.sessionCheck)
app.delete('/logOut', ctrl.logout)
app.post('/auth/userlogin', ctrl.adminLogin)
app.post('/api/podcasts/upload', ctrl.podcastUpload)
app.get('/api/podcasts/getall', ctrl.getAllPodcasts)
