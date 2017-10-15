const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const expressValidator = require('express-validator');
const path = require('path');

const app = module.exports = express();

// remove header
app.disable('x-powered-by');

// set our default template engine to "handlebars"
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers: {
    section(name, options) {
      // eslint-disable-next-line no-underscore-dangle
      if (!this._sections) this._sections = {};
      // eslint-disable-next-line no-underscore-dangle
      this._sections[name] = options.fn(this);
      return null;
    },
    raw(options) {
      return options.fn(this);
    },
    if(conditional, options) {
      if (conditional) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
  },
}));

app.set('view engine', 'handlebars');
app.enable('view cache');

// set views for error and 404 pages
app.set('views', path.join(__dirname, '/views'));

app.use(morgan('tiny'));

// serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/vendors', express.static(path.join(__dirname, '/bower_components')));

// parse request bodies (req.body)
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));
// this line must be immediately after any of the bodyParser middlewares!
app.use(expressValidator({
  customValidators: {
    lte(param, num) {
      return param <= num;
    },
    gte(param, num) {
      return param >= num;
    },
  },
}));

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

require('./routes/index')(app);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.render('5xx');
});

// assume 404 since no middleware responded
app.use((req, res) => {
  res.status(404);
  res.render('404', {
    url: req.originalUrl,
  });
});

if (!module.parent) {
  const server = app.listen(process.env.PORT || 5000);
  console.log(`Express started on port ${process.env.PORT || 5000}`);
}
