const wardsList = [
  { Wards_ID: 1,Township_Code: 'MMR005033',Town_Code: 'MMR005033701',Village_Code: '174281',Wards_Code: 'MMR005033701502',Wards_Name: 'ပင်လည်ဘူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 2,Township_Code: 'MMR005033',Town_Code: 'MMR005033701',Village_Code: '217222',Wards_Code: 'MMR005033701501',Wards_Name: 'မိုးကောင်းရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 3,Township_Code: 'MMR005027',Town_Code: 'MMR005027701',Village_Code: '175640',Wards_Code: 'MMR005027701504',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 4,Township_Code: 'MMR005027',Town_Code: 'MMR005027701',Village_Code: '173439',Wards_Code: 'MMR0050027701507',Wards_Name: 'အောင်မြေမာန်ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 5,Township_Code: 'MMR005012',Town_Code: 'MMR005012701',Village_Code: '172967',Wards_Code: 'MMR005012701511',Wards_Name: 'အလယ်ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 6,Township_Code: 'MMR005012',Town_Code: 'MMR005012701',Village_Code: '172968',Wards_Code: 'MMR005012701520',Wards_Name: 'အလုံရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 7,Township_Code: 'MMR005012',Town_Code: 'MMR005012701',Village_Code: '172969',Wards_Code: 'MMR005012701513',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 8,Township_Code: 'MMR005033',Town_Code: 'MMR005033701',Village_Code: '176388',Wards_Code: 'MMR005033701501',Wards_Name: 'ခန္တီးမြို့မရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 9,Township_Code: 'MMR005033',Town_Code: 'MMR005033701',Village_Code: '217367',Wards_Code: 'MMR005033701502',Wards_Name: 'ပေါမိုင်းရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 10,Township_Code: 'MMR005026',Town_Code: 'MMR005026701',Village_Code: '175507',Wards_Code: 'MMR005026701503',Wards_Name: 'အောင်ချမ်းသာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 11,Township_Code: 'MMR005026',Town_Code: 'MMR005026701',Village_Code: '175508',Wards_Code: 'MMR005026701504',Wards_Name: 'မြဝတီရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 12,Township_Code: 'MMR005026',Town_Code: 'MMR005026701',Village_Code: '175509',Wards_Code: 'MMR005026701505',Wards_Name: 'ထုံးဘိုရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 13,Township_Code: 'MMR005001',Town_Code: 'MMR005001701',Village_Code: '171117',Wards_Code: 'MMR005001701516',Wards_Name: 'နီလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 14,Township_Code: 'MMR005001',Town_Code: 'MMR005001701',Village_Code: '171118',Wards_Code: 'MMR005001701505',Wards_Name: 'မြို့သစ်ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 15,Township_Code: 'MMR005004',Town_Code: 'MMR005004701',Village_Code: '171314',Wards_Code: 'MMR005001701501',Wards_Name: 'အမှတ်(၁)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 16,Township_Code: 'MMR005016',Town_Code: 'MMR005016701',Village_Code: '173705',Wards_Code: 'MMR005016701504',Wards_Name: '(ဃ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 17,Township_Code: 'MMR005016',Town_Code: 'MMR005016701',Village_Code: '173706',Wards_Code: 'MMR005016701503',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 18,Township_Code: 'MMR005016',Town_Code: 'MMR005016701',Village_Code: '173707',Wards_Code: 'MMR005016701501',Wards_Name: '(က)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 19,Township_Code: 'MMR005016',Town_Code: 'MMR005016701',Village_Code: '173708',Wards_Code: 'MMR005016701502',Wards_Name: '(ခ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 20,Township_Code: 'MMR005030',Town_Code: 'MMR005030701',Village_Code: '176043',Wards_Code: 'MMR005030701503',Wards_Name: 'စန္ဒကူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 21,Township_Code: 'MMR005031',Town_Code: 'MMR005031701',Village_Code: '176086',Wards_Code: 'MMR005031701501',Wards_Name: 'မြို့မ(၁)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 22,Township_Code: 'MMR005031',Town_Code: 'MMR005031701',Village_Code: '176087',Wards_Code: 'MMR005031701502',Wards_Name: 'မြို့မ(၂)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 23,Township_Code: 'MMR005031',Town_Code: 'MMR005031701',Village_Code: '176088',Wards_Code: 'MMR005031701503',Wards_Name: 'မြို့မ(၃)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 24,Township_Code: 'MMR005007',Town_Code: 'MMR005007701',Village_Code: '171847',Wards_Code: 'MMR005077701501',Wards_Name: 'အမှတ်(၁)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 25,Township_Code: 'MMR005007',Town_Code: 'MMR005007701',Village_Code: '171851',Wards_Code: 'MMR005077701502',Wards_Name: 'အမှတ်(၂)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 26,Township_Code: 'MMR005033',Town_Code: 'MMR005033701',Village_Code: '176389',Wards_Code: 'MMR005033701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 27,Township_Code: 'MMR002005',Town_Code: 'MMR002005701',Village_Code: '111222',Wards_Code: 'MMR002005701501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 28,Township_Code: 'MMR002005',Town_Code: 'MMR002005701',Village_Code: '222333',Wards_Code: 'MMR002005701502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 29,Township_Code: 'MMR002005',Town_Code: 'MMR002005701',Village_Code: '444555',Wards_Code: 'MMR002005701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 30,Township_Code: 'MMR002005',Town_Code: 'MMR002005701',Village_Code: '666777',Wards_Code: 'MMR002005701504',Wards_Name: 'စန္ဒကူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 31,Township_Code: 'MMR002005',Town_Code: 'MMR002005701',Village_Code: '111555',Wards_Code: 'MMR002005701505',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 32,Township_Code: 'MMR002006',Town_Code: 'MMR002006702',Village_Code: '121212',Wards_Code: 'MMR002006702501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 33,Township_Code: 'MMR002006',Town_Code: 'MMR002006702',Village_Code: '131313',Wards_Code: 'MMR002006702502',Wards_Name: 'မြို့သစ်ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 34,Township_Code: 'MMR002001',Town_Code: 'MMR002001701',Village_Code: '141414',Wards_Code: 'MMR002001701503',Wards_Name: 'အောင်ချမ်းသာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 35,Township_Code: 'MMR002001',Town_Code: 'MMR002001701',Village_Code: '151515',Wards_Code: 'MMR002001701501',Wards_Name: '(ခ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 36,Township_Code: 'MMR001001',Town_Code: 'MMR001001701',Village_Code: '161616',Wards_Code: 'MMR003001701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 37,Township_Code: 'MMR001001',Town_Code: 'MMR001001701',Village_Code: '262626',Wards_Code: 'MMR003001701502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 38,Township_Code: 'MMR001014',Town_Code: 'MMR001014701',Village_Code: '181818',Wards_Code: 'MMR001014701501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 39,Township_Code: 'MMR001014',Town_Code: 'MMR001014701',Village_Code: '191919',Wards_Code: 'MMR001014701502',Wards_Name: '(က)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 40,Township_Code: 'MMR001014',Town_Code: 'MMR001014701',Village_Code: '232323',Wards_Code: 'MMR001014701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
   { Wards_ID: 41,Township_Code: 'MMR001014',Town_Code: 'MMR001014701',Village_Code: '292929',Wards_Code: 'MMR001014701504',Wards_Name: 'စန္ဒကူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 42,Township_Code: 'MMR001001',Town_Code: 'MMR001001701',Village_Code: '242424',Wards_Code: 'MMR001001701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 43,Township_Code: 'MMR001001',Town_Code: 'MMR001001701',Village_Code: '252525',Wards_Code: 'MMR001001701501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 44,Township_Code: 'MMR001010',Town_Code: 'MMR001010701',Village_Code: '272727',Wards_Code: 'MMR001010701503',Wards_Name: 'စန္ဒကူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
   { Wards_ID: 45,Township_Code: 'MMR001010',Town_Code: 'MMR001010701',Village_Code: '282828',Wards_Code: 'MMR001010701502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 46,Township_Code: 'MMR001017',Town_Code: 'MMR001017701',Village_Code: '343433',Wards_Code: 'MMR001017701501',Wards_Name: 'စန္ဒကူးရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 47,Township_Code: 'MMR001017',Town_Code: 'MMR001017701',Village_Code: '353535',Wards_Code: 'MMR001017701502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
 { Wards_ID: 48,Township_Code: 'MMR001017',Town_Code: 'MMR001017701',Village_Code: '373737',Wards_Code: 'MMR001017701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 49,Township_Code: 'MMR001017',Town_Code: 'MMR001017701',Village_Code: '363636',Wards_Code: 'MMR001017701504',Wards_Name: 'မိုးကောင်းရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 50,Township_Code: 'MMR001007',Town_Code: 'MMR001007702',Village_Code: '383838',Wards_Code: 'MMR001007702501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
   { Wards_ID: 51,Township_Code: 'MMR001007',Town_Code: 'MMR001007702',Village_Code: '393939',Wards_Code: 'MMR001007702502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 52,Township_Code: 'MMR001007',Town_Code: 'MMR001007702',Village_Code: '454545',Wards_Code: 'MMR001007702503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 53,Township_Code: 'MMR001007',Town_Code: 'MMR001007702',Village_Code: '212121',Wards_Code: 'MMR001007702504',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 54,Township_Code: 'MMR001008',Town_Code: 'MMR001008701',Village_Code: '323232',Wards_Code: 'MMR001008701501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
 { Wards_ID: 55,Township_Code: 'MMR001008',Town_Code: 'MMR001008701',Village_Code: '434343',Wards_Code: 'MMR001008701502',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 56,Township_Code: 'MMR001008',Town_Code: 'MMR001008701',Village_Code: '676767',Wards_Code: 'MMR001008701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 57,Township_Code: 'MMR001008',Town_Code: 'MMR001008701',Village_Code: '666121',Wards_Code: 'MMR001008701504',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 58,Township_Code: 'MMR001011',Town_Code: 'MMR001011702',Village_Code: '989898',Wards_Code: 'MMR001011702501',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 59,Township_Code: 'MMR001011',Town_Code: 'MMR001011702',Village_Code: '898989',Wards_Code: 'MMR001011702502',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 60,Township_Code: 'MMR001011',Town_Code: 'MMR001011702',Village_Code: '535353',Wards_Code: 'MMR001011702503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 61,Township_Code: 'MMR001011',Town_Code: 'MMR001011702',Village_Code: '636363',Wards_Code: 'MMR001011702504',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 62,Township_Code: 'MMR001005',Town_Code: 'MMR001005702',Village_Code: '727272',Wards_Code: 'MMR001005702501',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 63,Township_Code: 'MMR001005',Town_Code: 'MMR001005702',Village_Code: '828282',Wards_Code: 'MMR001005702502',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 64,Township_Code: 'MMR001005',Town_Code: 'MMR001005702',Village_Code: '929292',Wards_Code: 'MMR001005702503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 65,Township_Code: 'MMR001005',Town_Code: 'MMR001005702',Village_Code: '525252',Wards_Code: 'MMR001005702504',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 66,Township_Code: 'MMR002001',Town_Code: 'MMR002001701',Village_Code: '828910',Wards_Code: 'MMR002001701503',Wards_Name: 'အောင်မင်္ဂလာရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  { Wards_ID: 67,Township_Code: 'MMR002001',Town_Code: 'MMR002001701',Village_Code: '101987',Wards_Code: 'MMR002001701502',Wards_Name: '(ဂ)ရပ်ကွက်',Created_By: 'kk',Updated_By: 'll',Status:'Active',Remark:''},
  
  ]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wards').del()
    .then(function () {
      // Inserts seed entries
      return knex('wards').insert(wardsList);
    });
};
