const districtList=[
  {District_ID:1,State_ID:5,District_Code:'MMR005D003',District_Name:'မုံရွာခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:2,State_ID: 5,District_Code:'MMR005D002',District_Name:'ရွှေဘိုခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:3,State_ID: 5,District_Code:'MMR005D008',District_Name:'ခန္တီးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:4,State_ID: 5,District_Code:'MMR005D005',District_Name:'ကလေးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:5,State_ID: 5,District_Code:'MMR005D010',District_Name:'ကန့်ဘလူခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:6,State_ID: 5,District_Code:'MMR005D004',District_Name:'ကသာခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:7,State_ID: 5,District_Code:'MMR005D007',District_Name:'မော်လိုက်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:8,State_ID: 5,District_Code:'MMR005D001',District_Name:'စစ်ကိုင်းခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:9,State_ID: 5,District_Code:'MMR005D006',District_Name:'တမူးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:10,State_ID: 5,District_Code:'MMR005D009',District_Name:'ယင်းမာပင်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:11,State_ID: 1,District_Code:'MMR001D003',District_Name: 'ဗန်းမော်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:12,State_ID: 1,District_Code:'MMR001D001',District_Name: 'မြစ်ကြီးနားခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:13,State_ID: 1,District_Code:'MMR001D004',District_Name: 'ပူတာအိုခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:14,State_ID: 1,District_Code:'MMR001D002',District_Name: 'မိုးညင်းခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:15,State_ID: 2,District_Code:'MMR002D002',District_Name: 'ဘောလခဲခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  {District_ID:16,State_ID: 2,District_Code:'MMR002D001',District_Name: 'လွိုင်ကော်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:17,State_ID: 3,District_Code:'MMR003D001',District_Name: 'ဘားအံခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:18,State_ID: 3,District_Code:'MMR003D004',District_Name: 'ဖာပွန်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:19,State_ID: 3,District_Code:'MMR003D002',District_Name: 'မြဝတီခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:20,State_ID: 4,District_Code:'MMR004D001',District_Name: 'ဖလန်းခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:21,State_ID: 4,District_Code:'MMR004D003',District_Name: 'ဟားခါးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:22,State_ID: 4,District_Code:'MMR004D002',District_Name: 'မင်းတပ်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:23,State_ID: 6,District_Code:'MMR006D001',District_Name: 'ထားဝယ်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:24,State_ID: 6,District_Code:'MMR006D003',District_Name: 'ကော့သောင်းခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:25,State_ID: 6,District_Code:'MMR006D002',District_Name: 'မြိတ်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:26,State_ID: 7,District_Code:'MMR007D001',District_Name: 'ပဲခူးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:27,State_ID: 7,District_Code:'MMR007D002',District_Name: 'တောင်ငူခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:28,State_ID: 8,District_Code:'MMR008D001',District_Name: 'ပြည်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID:29,State_ID: 8,District_Code:'MMR008D002',District_Name: 'သာယာဝတီခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 30,State_ID: 9,District_Code:'MMR009D001',District_Name: 'မကွေးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 31,State_ID: 9,District_Code:'MMR009D002',District_Name: 'မင်းဘူးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 32,State_ID: 9,District_Code:'MMR009D003',District_Name: 'သရက်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 33,State_ID: 10,District_Code:'MMR001D003',District_Name: 'ကျောက်ဆည်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 34,State_ID: 10,District_Code:'MMR001D001',District_Name: 'မန္တလေးခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''},
  // {District_ID: 35,State_ID: 10,District_Code:'MMR001D002',District_Name: 'ပြင်ဦးလွင်ခရိုင်',Created_By:'ths',Updated_By:'ttt',Status:'Active',Remark:''}

]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('district').del()
    .then(function () {
      // Inserts seed entries
      return knex('district').insert(districtList)
        
    });
};
