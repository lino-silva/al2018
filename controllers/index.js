const index = function index(req, res) {
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
      { phrase: 'É, eu já tinha ouvido - mas tava esperando <strong>comunicação oficial</strong>!', author: 'Thaís M. Gabrielli', role: 'Prima' },
    ],
    map: {
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.005057605059!2d-8.62069658498627!3d41.5258310953648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24522d76c1d1b3%3A0xc4920dc3bffa3933!2sCasa+do+Egipto!5e0!3m2!1sen!2spt!4v1508794803221',
    },
    footer: {
      rsvpDate: '1 de Novembro',
      address: {
        line1: 'R. Irmãos La Salle 125',
        line2: '4755-055 Barcelos',
        time: '16:30',
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

module.exports.index = index;
