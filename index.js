const express = require('express')
const app = express()

// the package the has the handlebars logic
const exphbs = require('express-handlebars')

// public files setup
app.use(express.static('public'))

// setting dynamic view folders
app.engine('handlebars', exphbs(
  // handlebars configurations
  {
    defaultLayout: 'main',
    partialsDir: 'views/partials'
  }
))
app.set('view engine', 'handlebars')

// listening for request
app.get('/', function (req, res) {
  // this will be your search thru db
  var user = {
    name: 'Prima',
    email: 'prima@ga.co',
    isAdmin: true
  }

  var blogs = [
    {
      title: 'my blogpost',
      content: 'here\'s my blogpost'
    },
    {
      title: 'second blogpost',
      content: 'here\'s my second blogpost'
    }
  ]

  res.render('index', {
    user,
    blogs
  })
})

app.get('/about', function (req, res) {

  res.render('about')
})

app.get('/faq', function (req, res) {
  res.render('faq')
})

var port = process.env.PORT || 5000
app.listen(port, function () {
  console.log('express is running on port ' + port)
})
