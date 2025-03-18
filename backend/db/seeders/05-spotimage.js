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
        spotId: 2,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg",
        preview: true
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
