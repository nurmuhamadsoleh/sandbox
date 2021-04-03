    
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [
    { user_id:1, books_id:2, qty:10}, 
   { user_id:4, books_id:2, qty:13}, 
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
     
  }
};
