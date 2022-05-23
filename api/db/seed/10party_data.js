const partyList = [
  {Party_ID: 1,Party_Name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချူပ်ပါတီ',Description: 'NLD',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 2,Party_Name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့် ဖွံ့ဖြိုးရေးပါတီ',Description: 'USDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 3,Party_Name: 'ဇိုမီးဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ',Description: 'ZCD',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 4,Party_Name: 'အမျိုးသားတိုးတက်ရေးပါတီ',Description: 'NDF',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 5,Party_Name: 'တိုင်းလိုင်(ရှမ်းနီ)အမျိူးသားများဖွံ့ဖြိုးတိုးတတ်ရေးပါတီ',Description: 'TNDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 6,Party_Name: 'မြန်မာနိုင်ငံတောင်သူလယ်သမားဖွံ့ဖြိုးတိုးတတ်ရေးပါတီ',Description: 'MFDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 7,Party_Name: 'အခြေခံလူတန်းစားဘ၀မြင့်မားရေးပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 8,Party_Name: 'ပြည်ထောင်စုကောင်းကျိူးဆောင်ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 9,Party_Name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 10,Party_Name: 'တစ်သီးပုဂ္ဂလ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 11,Party_Name: 'ပြည်သူ့ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 12,Party_Name: 'တိုင်းရင်းသားစည်းလုံးညီညွတ်ရေးပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 13,Party_Name: 'ချင်းအမျိုးသားဒီမိုကရေစီအဖွဲ့ချူပ်ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 14,Party_Name: 'အမျိုးသားနိုင်ငံရေးဒီမိုကရက်တစ်ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 15,Party_Name: 'ပြည်သူ့ရှေ့ဆောင်ပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 16,Party_Name: 'နာဂအမျိုးသားပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 17,Party_Name: 'ရှမ်းနီ(တိုင်းလျန်)သွေးစည်းညီညွတ်ရေးပါတီ',Description: 'ZNRDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'},
  {Party_ID: 18,Party_Name: 'လီဆူအမျိူးသားဖွံ့ဖြိုးတိုးတတ်ရေးပါတီ(ဒူးလေးပါတီ)(“လီဆူအမျိုးသားညီညွတ်ရေး ဒို့အရေး၊ ဒို့အရေး”)',Description: 'LNDP',Created_By: 'mmk',Updated_By: 'lll',Status:'Active'}
 
]
exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('Party').del()
   .then(function () {
     // Inserts seed entries
     return knex('Party').insert(partyList);
   });
};



