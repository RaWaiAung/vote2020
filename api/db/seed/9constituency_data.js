const caonstituencyList = [
  {Constituency_ID: 1,Township_ID: 2,Constituency_Name: 'ကလေးမဲဆန္ဒနယ်',Election_Name: 'election one',Code1: 'code one',Code2: 'code one ',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 2,Township_ID: 3,Constituency_Name: 'ကန့်ဘလူမဲဆန္ဒနယ်',Election_Name: 'election two',Code1: 'code two',Code2: 'code two',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 3,Township_ID: 5,Constituency_Name: 'မုံရွာမဲဆန္ဒနယ်',Election_Name: 'election three',Code1: 'code three',Code2: 'code three',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 4,Township_ID: 7,Constituency_Name: 'စစ်ကိုင်းမဲဆန္ဒနယ်',Election_Name: 'election four',Code1: 'code four',Code2: 'code four',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 5,Township_ID: 4,Constituency_Name: 'ခန္တီးမဲဆန္ဒနယ်',Election_Name: 'election five',Code1: 'code five',Code2: 'code five',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 6,Township_ID: 6,Constituency_Name: 'မော်လိုက်မဲဆန္ဒနယ်',Election_Name: 'election six',Code1: 'code six',Code2: 'code six',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 7,Township_ID: 1,Constituency_Name: 'ပင်လည်ဘူးမဲဆန္ဒနယ်',Election_Name: 'election seven',Code1: 'code seven',Code2: 'code seven',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 8,Township_ID: 8,Constituency_Name: 'ရွှေဘိုမဲဆန္ဒနယ်',Election_Name: 'election eight',Code1: 'code eight',Code2: 'code eight',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 9,Township_ID: 9,Constituency_Name: 'တမူးမဲဆန္ဒနယ်',Election_Name: 'election nine',Code1: 'code nine',Code2: 'code nine',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 10,Township_ID: 10,Constituency_Name: 'ယင်းမာပင်မဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code ten',Code2: 'code ten',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 11,Township_ID: 11,Constituency_Name: 'ဗန်းမော်မဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tenn',Code2: 'code elecen',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 12,Township_ID: 12,Constituency_Name: 'ရွှေကူမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tennn',Code2: 'code twelve',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 13,Township_ID: 13,Constituency_Name: 'ချီဖွေမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code teen',Code2: 'code one one',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 14,Township_ID: 14,Constituency_Name: 'မြစ်ကြီးနားမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tenne',Code2: 'code tenmk',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 15,Township_ID: 15,Constituency_Name: 'ပူတာအိုမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tennene',Code2: 'code teniii',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 16,Township_ID: 16,Constituency_Name: 'နောင်မွန်းမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tennnee',Code2: 'code tennmn',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 17,Township_ID: 17,Constituency_Name: 'မိုးညင်းမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tenndndn',Code2: 'code teddn',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 18,Township_ID: 18,Constituency_Name: 'မိုးကောင်းမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code kkdk',Code2: 'code tegfn',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 19,Township_ID: 19,Constituency_Name: 'ဘောလခဲမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code tne',Code2: 'code teaan',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 20,Township_ID: 20,Constituency_Name: 'ဖားဆောင်းမဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code ff',Code2: 'code teqwrn',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  {Constituency_ID: 21,Township_ID: 21,Constituency_Name: 'လွိုင်ကော်မဲဆန္ဒနယ်',Election_Name: 'election ten',Code1: 'code uf',Code2: 'code teuyn',Created_By: 'mmk',Updated_By: 'nnh',Status:'Active',Remark:''},
  
]
exports.seed = function(knex) {
// Deletes ALL existing entries
return knex('constituency').del()
  .then(function () {
    // Inserts seed entries
    return knex('constituency').insert(caonstituencyList);
  });
};
