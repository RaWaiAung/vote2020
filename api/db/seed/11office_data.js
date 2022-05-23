const officeList = [
  {Office_ID: 1,Party_ID: 1,Office_Name: 'ကလေး(NLD)',Address: 'ကလေး',PONO: 'စာတိုက်နံပါတ်(၁၀)',PHNO1: '09123456788',PHNO2: '09776655443',Email: 'naypyitaw@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'ကိုယ်ပိုင်',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'kkk'},
  {Office_ID: 2,Party_ID: 10,Office_Name: 'မိုးညင်း(LHNDP)',Address: 'မိုးညင်း',PONO: 'စာတိုက်နံပါတ်(၁၂)',PHNO1: '09123056788',PHNO2: '09776655443',Email: 'monywa@gmail.com',Building_Type: 'နှစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mml',Updated_By: 'kk',Status:'Active',Remark:'mm'},
  {Office_ID: 3,Party_ID: 9,Office_Name: 'ဖားဆောင်း(PNO)',Address: 'ဖားဆောင်း',PONO: 'စာတိုက်နံပါတ်(၁၃)',PHNO1: '09123556722',PHNO2: '09776655443',Email: 'sagaing@gmail.com',Building_Type: 'သုံးထပ်တိုက်',Own_or_Rental: 'ကိုယ်ပိုင်',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'hh'},
  {Office_ID: 4,Party_ID: 8,Office_Name: 'စစ်ကိုင်း(NUP)',Address: 'စစ်ကိုင်း',PONO: 'စာတိုက်နံပါတ်(၁၄)',PHNO1: '09123056712',PHNO2: '09776655443',Email: 'shwebo@gmail.com',Building_Type: 'နှစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'ll'},
  {Office_ID: 5,Party_ID: 7,Office_Name: 'ဘောလခဲ(MNP)',Address: 'ဘောလခဲ',PONO: 'စာတိုက်နံပါတ်(၁၅)',PHNO1: '09123056338',PHNO2: '09776655443',Email: 'pinlebu@gmail.com',Building_Type: 'သုံးထပ်တိုက်',Own_or_Rental: 'ကိုယ်ပိုင်',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'ff'},
  {Office_ID: 6,Party_ID: 6,Office_Name: 'ချီဖွေ(ZCD)',Address: 'ချီဖွေ',PONO: 'စာတိုက်နံပါတ်(၁၆)',PHNO1: '09123053788',PHNO2: '09776655443',Email: 'tamu@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'hh'},
  {Office_ID: 7,Party_ID: 5,Office_Name: 'နောင်မွန်း(SNLD)',Address: 'နောင်မွန်း',PONO: 'စာတိုက်နံပါတ်(၁၇)',PHNO1: '09124556788',PHNO2: '09776655443',Email: 'yinmarpin@gmail.com',Building_Type: 'နှစ်ထပ်တိုက်',Own_or_Rental: 'ကိုယ်ပိုင်',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'ss'},
  {Office_ID: 8,Party_ID: 4,Office_Name: 'မြစ်ကြီးနား(KSDP)',Address: 'မြစ်ကြီးနား',PONO: 'စာတိုက်နံပါတ်(၁၈)',PHNO1: '09124456788',PHNO2: '09776655443',Email: 'mawleik@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'tt'},
  {Office_ID: 9,Party_ID: 3,Office_Name: 'ရွှေကူ(ANP)',Address: 'ရွှေကူ',PONO: 'စာတိုက်နံပါတ်(၁၉)',PHNO1: '09125656788',PHNO2: '09776655443',Email: 'hkamti@gmail.com',Building_Type: 'နှစ်ထပ်တိုက်',Own_or_Rental: 'ကိုယ်ပိုင်',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'uu'},
  {Office_ID: 10,Party_ID: 2,Office_Name: 'ကန့်ဘလူ(USDP)',Address: 'ကန့်ဘလူ',PONO: 'စာတိုက်နံပါတ်(၂၀)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 11,Party_ID: 11,Office_Name: 'လွိုင်ကော်(SNLDP)',Address: 'လွိုင်ကော်',PONO: 'စာတိုက်နံပါတ်(၂၁)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 12,Party_ID: 12,Office_Name: 'မိုးကောင်း(UDP)',Address: 'မိုးကောင်း',PONO: 'စာတိုက်နံပါတ်(၂၂)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 13,Party_ID: 13,Office_Name: 'မုံရွာ(BLHP)',Address: 'မုံရွာ',PONO: 'စာတိုက်နံပါတ်(၂၃)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 14,Party_ID: 14,Office_Name: 'ဗန်းမော်(WDP)',Address: 'ဗန်းမော်',PONO: 'စာတိုက်နံပါတ်(၂၄)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 15,Party_ID: 15,Office_Name: 'ပင်လည်ဘူး(KPP)',Address: 'ပင်လည်ဘူး',PONO: 'စာတိုက်နံပါတ်(၂၅)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 16,Party_ID: 16,Office_Name: 'ပူတာအို(KYHNP)',Address: 'ပူတာအို',PONO: 'စာတိုက်နံပါတ်(၂၆)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 17,Party_ID: 17,Office_Name: 'တမူး(KYNP)',Address: 'တမူး',PONO: 'စာတိုက်နံပါတ်(၂၇)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 18,Party_ID: 18,Office_Name: 'ခန္တီး(CNP)',Address: 'ခန္တီး',PONO: 'စာတိုက်နံပါတ်(၂၈)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 19,Party_ID: 14,Office_Name: 'ရွှေဘို(CP)',Address: 'ရွှေဘို',PONO: 'စာတိုက်နံပါတ်(၂၈)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 20,Party_ID: 10,Office_Name: 'မော်လိုက်(LWNUSDP)',Address: 'မော်လိုက်',PONO: 'စာတိုက်နံပါတ်(၃၀)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'},
  {Office_ID: 21,Party_ID: 2,Office_Name: 'ယင်းမာပင်(DP)',Address: 'ယင်းမာပင်',PONO: 'စာတိုက်နံပါတ်(၃၁)',PHNO1: '09121056788',PHNO2: '09776655443',Email: 'kale@gmail.com',Building_Type: 'တစ်ထပ်တိုက်',Own_or_Rental: 'အငှား',Created_By: 'mmk',Updated_By: 'kk',Status:'Active',Remark:'oo'}

]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('office').del()
    .then(function () {
      // Inserts seed entries
      return knex('office').insert(officeList);
    });
};
