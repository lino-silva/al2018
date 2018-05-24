const index = function index(req, res) {
  res.render('home', {
    title: 'Ana & Lino',
    header: {
      title: '"A festa"',
      subtitle: '01.12.2018',
      names: 'Ana e Lino',
    },
    map: {
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.005057605059!2d-8.62069658498627!3d41.5258310953648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24522d76c1d1b3%3A0xc4920dc3bffa3933!2sCasa+do+Egipto!5e0!3m2!1sen!2spt!4v1508794803221',
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

const follow = (req, res) => {
  res.render('follow', {});
};

module.exports.index = index;
module.exports.follow = follow;
