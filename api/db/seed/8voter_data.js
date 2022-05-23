const voterList = [
  {Voter_Id: 1,Wards_Code: 'MMR005027701504',Village_Code: '175640',Voter_Name: 'ထက်ထက်ဝေ',NRIC_No: '၅/ကလန(နိုင်)၁၆၄၁၈၉',Date_Of_Birth: '1999/4/15',Religion: 'ဗုဒ္ဓ',Race: 'Race One',Permanent_Address: 'ထောက်ကြံ့',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 2,Wards_Code: 'MMR005077701501',Village_Code: '171847',Voter_Name: 'နန်းအိလှိုင်',NRIC_No: '၅/ကဘလ(နိုင်)၁၉၇၇၆၅',Date_Of_Birth: '1999/4/24',Religion: 'ခရစ်ယာန်',Race: 'Race two',Permanent_Address: 'ကိုးထောင်ဘို့',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 3,Wards_Code: 'MMR005033701502',Village_Code: '174281',Voter_Name: 'သဲဥခိုင်',NRIC_No: '၅/မရန(နိုင်)၁၉၇၇၆၇',Date_Of_Birth: '1999/2/21',Religion: 'ဟိန္ဒူ',Race: 'Race One',Permanent_Address: 'ချောင်းဝ',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 4,Wards_Code: 'MMR005031701501',Village_Code: '176086',Voter_Name: 'မျိုးသန္တာထွန်း',NRIC_No: '၅/မလန(နိုင်)၁၂၆၁၀၁',Date_Of_Birth: '1999/12/13',Religion: 'ဗုဒ္ဓ',Race: 'Race One',Permanent_Address: 'ကင်းတပ်',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 5,Wards_Code: 'MMR005012701511',Village_Code: '172967',Voter_Name: 'ရီမွန်ဦး',NRIC_No: '၅/မရန(နိုင်)၁၂၃၄၄၇',Date_Of_Birth: '1999/6/2',Religion: 'ဗုဒ္ဓ',Race: 'Race One',Permanent_Address: 'ကြေးမုံ',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 6,Wards_Code: 'MMR005001701516',Village_Code: '171117',Voter_Name: 'သက်ထားဆွေ',NRIC_No: '၅/စကန(နိုင်)၀၉၈၇၃၇',Date_Of_Birth: '2000/2/21',Religion: 'ဗုဒ္ဓ',Race: 'Race One',Permanent_Address: 'ကျောက်ဆည်',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 7,Wards_Code: 'MMR005001701501',Village_Code: '171314',Voter_Name: 'ဇင်နွယ်ထွန်း',NRIC_No: '၅/ရဘန(နိုင်)၂၃၁၈၉၀',Date_Of_Birth: '2000/5/23',Religion: 'ခရစ်ယာန်',Race: 'Race One',Permanent_Address: 'ရှားတော',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 8,Wards_Code: 'MMR005016701504',Village_Code: '173705',Voter_Name: 'မိုးမင်းဦး',NRIC_No: '၅/ယမပ(နိုင်)၁၂၅၄၆၈',Date_Of_Birth: '1999/8/8',Religion: 'ဟိန္ဒူ',Race: 'Race One',Permanent_Address: 'ကြပ်',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 9,Wards_Code: 'MMR005030701503',Village_Code: '176043',Voter_Name: 'ရဝေအောင်',NRIC_No: '၅/တမန(နိုင်)၀၉၈၇၃၇',Date_Of_Birth: '1999/7/8',Religion: 'ခရစ်ယာန်',Race: 'Race One',Permanent_Address: 'ရွာသာ',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 10,Wards_Code: 'MMR005033701501',Village_Code: '176388',Voter_Name: 'ကြူကြူဝင်း',NRIC_No: '၅/ပလဘ(နိုင်)၀၉၈၇၄၅',Date_Of_Birth: '1999/5/12',Religion: 'ဗုဒ္ဓ',Race: 'Race One',Permanent_Address: 'မင်းဆင်',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''},
  {Voter_Id: 11,Wards_Code: 'MMR005026701503',Village_Code: '175507',Voter_Name: 'ထက်သဥ္ဇာအောင်',NRIC_No: '၅/ပလဘ(နိုင်)၀၉၄၄၆၆',Date_Of_Birth: '1999/5/12',Religion: 'ဟိန္ဒူ',Race: 'Race One',Permanent_Address: 'တိုက်မွန်း',Created_By: 'mmk',Updated_By: 'mmk',Status:'Active',Remark:''}
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('voter').del()
    .then(function () {
      // Inserts seed entries
      return knex('voter').insert(voterList);
    });
};
