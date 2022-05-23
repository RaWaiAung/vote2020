
const userList = [
  {User_ID: 1,User_Name: 'Hla Hla',Password:'1234',Email: 'hla@gmail.com',Role:'Student',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 2,User_Name: 'Mya Mya',Password:'8834',Email: 'mya@gmail.com',Role:'Teacher',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 3,User_Name: 'Mg Mg',Password:'0034',Email: 'mg@gmail.com',Role:'Student',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 4,User_Name: 'Shwe Shwe',Password:'0234',Email: 'shwe@gmail.com',Role:'Teacher',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 5,User_Name: 'Tun Tun',Password:'1204',Email: 'tun@gmail.com',Role:'Developer',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 6,User_Name: 'Zin Zin',Password:'1294',Email: 'zin@gmail.com',Role:'Actor',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 7,User_Name: 'Myo Myo',Password:'1934',Email: 'myo@gmail.com',Role:'Actress',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 8,User_Name: 'Thandar',Password:'1774',Email: 'thandar@gmail.com',Role:'Stuent',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 9,User_Name: 'Thet Htar',Password:'9934',Email: 'tw123@gmail.com',Role:'Student',Status:'Active',Created_By: 'mmk',Updated_By: 'kk'},
  {User_ID: 10,User_Name: 'Swe Swe',Password:'1284',Email: 'swe@gmail.com',Role:'Tutor',Status:'Active',Created_By:'mmk',Updated_By: 'kk'}

]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert(userList);
    });
};

