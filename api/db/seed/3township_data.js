const townshipList = [
  {Township_ID: 2,District_ID: 4,Township_Code: 'MMR005027',Township_Name: 'ကလေးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 1,District_ID: 6,Township_Code: 'MMR005026',Township_Name: 'ပင်လည်ဘူးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 3,District_ID: 5,Township_Code: 'MMR005007',Township_Name: 'ကန့်ဘလူမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 4,District_ID: 3,Township_Code: 'MMR005033',Township_Name: 'ခန္တီးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 5,District_ID: 1,Township_Code: 'MMR005012',Township_Name: 'မုံရွာမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 6,District_ID: 7,Township_Code: 'MMR005031',Township_Name: 'မော်လိုက်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 7,District_ID: 8,Township_Code: 'MMR005001',Township_Name: 'စစ်ကိုင်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 8,District_ID: 2,Township_Code: 'MMR005004',Township_Name: 'ရွှေဘိုမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 9,District_ID: 9,Township_Code: 'MMR005030',Township_Name: 'တမူးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 10,District_ID: 10,Township_Code: 'MMR005016',Township_Name: 'ယင်းမာပင်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 11,District_ID: 11,Township_Code: 'MMR001010',Township_Name: 'ဗန်းမော််မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 12,District_ID: 11,Township_Code: 'MMR001011',Township_Name: 'ရွှေကူမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 13,District_ID: 12,Township_Code: 'MMR001005',Township_Name: 'ချီဖွေမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 14,District_ID: 12,Township_Code: 'MMR001001',Township_Name: 'မြစ်ကြီးနားမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 15,District_ID: 13,Township_Code: 'MMR001014',Township_Name: 'ပူတာအိုမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 16,District_ID: 13,Township_Code: 'MMR001017',Township_Name: 'နောင်မွန်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 17,District_ID: 14,Township_Code: 'MMR001007',Township_Name: 'မိုးညင်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 18,District_ID: 14,Township_Code: 'MMR001008',Township_Name: 'မိုးကောင်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 19,District_ID: 15,Township_Code: 'MMR002005',Township_Name: 'ဘောလခဲမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 20,District_ID: 15,Township_Code: 'MMR002006',Township_Name: 'ဖားဆောင်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  {Township_ID: 21,District_ID: 16,Township_Code: 'MMR002001',Township_Name: 'လွိုင်ကော်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 22,District_ID: 17,Township_Code: 'MMR003001',Township_Name: 'ဘားအံမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 23,District_ID: 18,Township_Code: 'MMR003004',Township_Name: 'ဖာပွန်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 24,District_ID: 19,Township_Code: 'MMR003002',Township_Name: 'မြဝတီမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 25,District_ID: 20,Township_Code: 'MMR004001',Township_Name: 'ဖလန်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 26,District_ID: 21,Township_Code: 'MMR004003',Township_Name: 'ဟားခါးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 27,District_ID: 22,Township_Code: 'MMR004002',Township_Name: 'မင်းတပ်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 28,District_ID: 23,Township_Code: 'MMR006001',Township_Name: 'ထားဝယ်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 29,District_ID: 24,Township_Code: 'MMR006003',Township_Name: 'ကော့သောင်းမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 30,District_ID: 25,Township_Code: 'MMR006002',Township_Name: 'မြိတ်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 31,District_ID: 26,Township_Code: 'MMR007001',Township_Name: 'ပဲခူးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 32,District_ID: 27,Township_Code: 'MMR007002',Township_Name: 'တောင်ငူမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 33,District_ID: 28,Township_Code: 'MMR008001',Township_Name: 'ပြည်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 34,District_ID: 29,Township_Code: 'MMR008002',Township_Name: 'သာယာဝတီမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 35,District_ID: 30,Township_Code: 'MMR009001',Township_Name: 'မကွေးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 36,District_ID: 31,Township_Code: 'MMR009002',Township_Name: 'မင်းဘူးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 37,District_ID: 32,Township_Code: 'MMR009003',Township_Name: 'သရက်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 38,District_ID: 33,Township_Code: 'MMR001003',Township_Name: 'ကျောက်ဆည်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 39,District_ID: 34,Township_Code: 'MMR001001',Township_Name: 'မန္တလေးမြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
  // {Township_ID: 40,District_ID: 35,Township_Code: 'MMR001002',Township_Name: 'ပြင်ဦးလွင်မြို့နယ်',Created_By: 'uu',Updated_By: 'oo',Status:'Active',Remark:''},
    
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('township').del()
    .then(function () {
      // Inserts seed entries
      return knex('township').insert(townshipList);
    });
};
