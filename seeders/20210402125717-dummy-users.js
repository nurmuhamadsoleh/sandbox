'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: "Alexa",
      address: "7603 Spinka Garden Apt. 450\nNew Jennyfermouth, WA 83169",
      phone: "(083)161-162",
      gender: "M",
    }, 
    {
       name: "Ricis",
       address: "32722 Era Locks\nPaytonfort, MT 72145-1144",
       phone: "+90(5)840352",
       gender: "F",
    },
    {
       name: "Alamanda",
       address: "42481 Botsford Crescent\nStarkburgh, MO 40960-0210",
       phone: "+22(5)752837",
       gender: "F",
    },
    {
       name : "Shovia",
       address: "9696 Elvie Street Apt. 319\nSouth Alexys, TN 60636",
       phone: "605-874-5803",
       gender: "F",
    },
    {
       name: "Rendra",
       address: "9206 Keeling Trace\nNew Presleyview, MI 28476-3335",
       phone: "1-427-736-16",
       gender: "M",
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
