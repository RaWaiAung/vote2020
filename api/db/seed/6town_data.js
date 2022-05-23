const townList = [
  {Town_ID: 1,Township_ID: 5,Town_Code: 'MMR005012701',Town_Name: '‌မုံရွာမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 2,Township_ID: 8,Town_Code: 'MMR005004701',Town_Name: 'ရွှေဘိုမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 3,Township_ID: 7,Town_Code: 'MMR005001701',Town_Name: 'စစ်ကိုင်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 4,Township_ID: 1,Town_Code: 'MMR005026701',Town_Name: 'ပင်လည်ဘူးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 5,Township_ID: 3,Town_Code: 'MMR005007701',Town_Name: 'ကန့်ဘလူမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 6,Township_ID: 2,Town_Code: 'MMR005027701',Town_Name: 'ကလေးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 7,Township_ID: 6,Town_Code: 'MMR005031701',Town_Name: 'မော်လိုက်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 8,Township_ID: 9,Town_Code: 'MMR005030701',Town_Name: 'တမူးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 9,Township_ID: 4,Town_Code: 'MMR005033701',Town_Name: 'ခန္တီးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 10,Township_ID: 10,Town_Code: 'MMR005016701',Town_Name: 'ယင်းမာပင်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 11,Township_ID: 14,Town_Code: 'MMR001001702',Town_Name: 'ဆင်ဘိုမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 12,Township_ID: 14,Town_Code: 'MMR001001701',Town_Name: 'မြစ်ကြီးနားမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 13,Township_ID: 11,Town_Code: 'MMR001010701',Town_Name: 'ဗန်းမော််မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 14,Township_ID: 12,Town_Code: 'MMR001011702',Town_Name: 'ရွှေကူမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},
  {Town_ID: 15,Township_ID: 18,Town_Code: 'MMR001008701',Town_Name: 'မိုးကောင်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 16,Township_ID: 17,Town_Code: 'MMR001007702',Town_Name: 'မိုးညင်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 17,Township_ID: 11,Town_Code: 'MMR001010702',Town_Name: 'လွယ်ဂျယ်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 18,Township_ID: 13,Town_Code: 'MMR001005702',Town_Name: 'ချီဖွေမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 19,Township_ID: 15,Town_Code: 'MMR001014701',Town_Name: 'ပူတာအိုမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 20,Township_ID: 16,Town_Code: 'MMR001017701',Town_Name: 'နောင်မွန်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 21,Township_ID: 19,Town_Code: 'MMR002005701',Town_Name: 'ဘောလခဲမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 22,Township_ID: 20,Town_Code: 'MMR002006702',Town_Name: 'ဖားဆောင်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  {Town_ID: 23,Township_ID: 21,Town_Code: 'MMR002001701',Town_Name: 'လွိုင်ကော်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 24,Township_ID: 22,Town_Code: 'MMR003001701',Town_Name: 'ဘားအံမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 25,Township_ID: 23,Town_Code: 'MMR003004701',Town_Name: 'ဖာပွန်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 26,Township_ID: 24,Town_Code: 'MMR003002701',Town_Name: 'မြဝတီမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 27,Township_ID: 25,Town_Code: 'MMR004001701',Town_Name: 'ဖလန်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 28,Township_ID: 26,Town_Code: 'MMR004003701',Town_Name: 'ဟားခါးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 29,Township_ID: 27,Town_Code: 'MMR004002701',Town_Name: 'မင်းတပ်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 30,Township_ID: 28,Town_Code: 'MMR006001701',Town_Name: 'ထားဝယ်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 31,Township_ID: 29,Town_Code: 'MMR006003701',Town_Name: 'ကော့သောင်းမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 32,Township_ID: 30,Town_Code: 'MMR006002701',Town_Name: 'မြိတ်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 33,Township_ID: 31,Town_Code: 'MMR006002701',Town_Name: 'ပဲခူးမြို့နယ်',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 34,Township_ID: 32,Town_Code: 'MMR007002701',Town_Name: 'တောင်ငူမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 35,Township_ID: 33,Town_Code: 'MMR008001701',Town_Name: 'ပြည်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 36,Township_ID: 34,Town_Code: 'MMR008002701',Town_Name: 'သာယာဝတီမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 37,Township_ID: 35,Town_Code: 'MMR009001701',Town_Name: 'မကွေးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 38,Township_ID: 36,Town_Code: 'MMR009002701',Town_Name: 'မင်းဘူးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 39,Township_ID: 37,Town_Code: 'MMR009003701',Town_Name: 'သရက်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 40,Township_ID: 38,Town_Code: 'MMR001003701',Town_Name: 'ကျောက်ဆည်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 41,Township_ID: 39,Town_Code: 'MMR001001701',Town_Name: 'မန္တလေးမြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  
  // {Town_ID: 42,Township_ID: 40,Town_Code: 'MMR001002701',Town_Name: 'ပြင်ဦးလွင်မြို့',Created_By: 'kk',Updated_By: 'tt',Status:'Active',Remark:''},  

]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('town').del()
    .then(function () {
      // Inserts seed entries
      return knex('town').insert(townList);
    });
};
