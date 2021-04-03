'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('type_books', [
    { name: "Premium"}, 
    { name: "Biografi"},
    { name: "Dongeng"},
    { name: "Komik"},
    { name: "Ensiklopedia"},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('type_books', null, {});
  }
};
