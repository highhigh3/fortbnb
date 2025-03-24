'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://fastly.picsum.photos/id/178/200/200.jpg?hmac=GK9f8ye2NPD_TryXyT9usVR7k8DqVVnm5JSxzwvBWvk",
        preview: false
      },
      {
        spotId: 1,
        url: "https://fastly.picsum.photos/id/81/200/200.jpg?hmac=dFNEVF-qbegjxydMvtTOtbJGZL9ofrpsTh6FA-FTtkI",
        preview: false
      },
      {
        spotId: 1,
        url: "https://fastly.picsum.photos/id/288/200/200.jpg?hmac=PrR6Ld35xhRNiCKOIS-dmUjGl-L-3ylEddVJrdwCAHw",
        preview: false
      },
      {
        spotId: 1,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 3,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 3,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 3,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 3,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 4,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 4,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 4,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 4,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 5,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 5,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 5,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },
      {
        spotId: 5,
        url: "https://fastly.picsum.photos/id/774/200/200.jpg?hmac=kHZuEL0Tzh_9wUk4BnU9zxodilE2mGBdAAor2hKpA_w",
        preview: false
      },

    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
    }, {});
  }
};
