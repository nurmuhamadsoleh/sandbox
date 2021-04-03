'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('books', [
    { type_books_id:1, name: "Jika kamu menjadi tanda tambah"}, 
    { type_books_id:2, name: "Beruang kutub dan panda"}, 
    { type_books_id:3, name: "Hantu Digoel; Politik Pengamanan Politik Zaman Kolonial"},
    { type_books_id:4, name: "Islam Agama ramah perempuan; Pembelaan kiai pesantren"},
    { type_books_id:5, name: "buku pintar pengetahuan umum"},
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('books', null, {});
  }
};
