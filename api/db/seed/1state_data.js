const stateList = [
  {State_ID:1,State_Code:'MMR001',State_Region:'ကချင်ပြည်နယ်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:2,State_Code:'MMR002',State_Region:'ကယားပြည်နယ်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:3,State_Code:'MMR003',State_Region:'ကရင်ပြည်နယ်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:4,State_Code:'MMR004',State_Region:'ချင်းပြည်နယ်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:5,State_Code:'MMR005',State_Region:'စစ်ကိုင်းတိုင်းဒေသကြီး',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:6,State_Code:'MMR006',State_Region:'တနင်္သာရီတိုင်းဒေသကြီး',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:7,State_Code:'MMR007',State_Region:'ပဲခူးတိုင်းဒေသကြီး(အရှေ့)',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:8,State_Code:'MMR008',State_Region:'ပဲခူးတိုင်းဒေသကြီး(အနောက်)',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:9,State_Code:'MMR009',State_Region:'မကွေးတိုင်းဒေသကြီး',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {State_ID:10,State_Code:'MMR010',State_Region:'မန္တလေးတိုင်းဒေသ◌ကြီး',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''}


]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('state').del()
    .then(function () {
      // Inserts seed entries
      return knex('state').insert(stateList)
    });
};