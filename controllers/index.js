exports.index = function index(req, res) {
  res.render('home', {
    title: 'Ana & Lino',
    header: {
      title: '"A festa"',
      subtitle: '01.12.2018',
      names: 'Ana e Lino',
    },
    reviews: [
      { phrase: '<strong>Não vais chorar</strong>, pois não?', author: 'José Carlos', role: 'Pai da Noiva' },
      { phrase: 'Fiquei mesmo contente, <strong>putinha</strong>.', author: 'Francisco Ribeiro', role: '"Amigo"' },
      { phrase: 'Eu até te parabenizava, Ana... <strong>Mas é o Lino.</strong>', author: 'Leandro Silva', role: 'Irmão do Noivo' },
      { phrase: '<strong>Awwwwww</strong>', author: 'Adelino Faria', role: 'Amigo' },
      { phrase: 'Eu já sabia - <strong>o Chico disse no Facebook</strong>.', author: 'Avelino Silva', role: 'Pai do Noivo' },
      { phrase: '<strong>Juraaaaaaaa</strong>', author: 'Mariana Ascenção', role: 'Amiga' },
    ],
    dia: [{
      title: 'Bebidas',
      description: 'Até cair!',
    }],
    map: {
      embed: 'https://www.google.com/maps/embed/v1/place?q=Vila%20do%20Conde%2C%20Portugal&key=AIzaSyD825MHYVdwfvbx7CRsK93GOwfMZ8i2cxs',
    },
    footer: {
      rsvpDate: '1 de Novembro',
      address: {
        line1: 'Address 1 yada yada',
        line2: 'City State Zipcode',
      },
      contact: {
        ana: {
          phone: '967 405 447',
          email: 'amargarida09@gmail.com',
        },
        lino: {
          phone: '939 461 498',
          email: 'linolsilva@gmail.com',
        },
      },
    },
  });
};
