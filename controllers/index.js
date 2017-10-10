'use strict';

exports.index = function (req, res) {
  res.render('home', {
    header: {
      title: 'É verdade!',
      subtitle: 'A Ana e o Lino vão casar!'
    },
    about: {
      title: 'Yep, não é brincadeira - vai mesmo haver festa!',
      subtitle: 'E, visto que o Lino é parvo, fizemos um convite digital para vocês!'
    },
    dia: [{
      title: 'Bebidas',
      description: 'Até cair!'
    }],
    map: {
      embed: 'https://www.google.com/maps/embed/v1/place?q=Vila%20do%20Conde%2C%20Portugal&key=AIzaSyD825MHYVdwfvbx7CRsK93GOwfMZ8i2cxs'
    },
    footer: {
      rsvpDate: '1 de Novembro',
      address: {
        line1: 'Address 1 yada yada',
        line2: 'City State Zipcode'
      },
      contact: {
        ana: {
          phone: '967 405 447',
          email: 'amargarida09@gmail.com'
        },
        lino: {
          phone: '939 461 498',
          email: 'linolsilva@gmail.com'
        }
      }
    }
  });
};
