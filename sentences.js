// ===== Parla! — محتوى اللغة =====
// WORDS: بنك مفردات وضع النطق
// LESSON_SENTENCES: بنك جمل الدرس الإنفينيتي

const WORDS = [
  {it:"cane",     ar:"كلب",                ipa:"/ˈkaː.ne/",      pron:"كا-نيه",       cat:"حيوانات",    ex:"Il cane è felice."},
  {it:"gatto",    ar:"قط",                 ipa:"/ˈɡat.to/",      pron:"جاتّو",         cat:"حيوانات",    ex:"Il gatto dorme sempre."},
  {it:"casa",     ar:"بيت",                ipa:"/ˈkaː.za/",      pron:"كا-زا",         cat:"أماكن",      ex:"La mia casa è grande."},
  {it:"acqua",    ar:"ماء",                ipa:"/ˈak.kwa/",      pron:"أكـ-كوا",       cat:"طعام وشراب", ex:"Voglio dell'acqua."},
  {it:"pane",     ar:"خبز",                ipa:"/ˈpaː.ne/",      pron:"با-نيه",        cat:"طعام وشراب", ex:"Il pane è fresco."},
  {it:"libro",    ar:"كتاب",               ipa:"/ˈliː.bro/",     pron:"لي-برو",        cat:"أشياء",      ex:"Leggo un libro ogni giorno."},
  {it:"porta",    ar:"باب",                ipa:"/ˈpɔr.ta/",      pron:"بور-تا",        cat:"أشياء",      ex:"La porta è aperta."},
  {it:"sole",     ar:"شمس",                ipa:"/ˈsoː.le/",      pron:"سو-ليه",        cat:"طبيعة",      ex:"Il sole splende forte."},
  {it:"luna",     ar:"قمر",                ipa:"/ˈluː.na/",      pron:"لو-نا",         cat:"طبيعة",      ex:"Stasera c'è la luna piena."},
  {it:"amico",    ar:"صديق",               ipa:"/aˈmiː.ko/",     pron:"أ-مي-كو",       cat:"ناس",        ex:"Il mio amico si chiama Marco."},
  {it:"mangiare", ar:"يأكل",               ipa:"/manˈdʒaː.re/",  pron:"مان-جا-ريه",    cat:"أفعال",      ex:"Voglio mangiare qualcosa."},
  {it:"dormire",  ar:"ينام",               ipa:"/dorˈmiː.re/",   pron:"دور-مي-ريه",    cat:"أفعال",      ex:"Devo dormire presto."},
  {it:"parlare",  ar:"يتكلم",              ipa:"/parˈlaː.re/",   pron:"بار-لا-ريه",    cat:"أفعال",      ex:"Parlo italiano ogni giorno."},
  {it:"bello",    ar:"جميل",               ipa:"/ˈbɛl.lo/",      pron:"بيلّو",          cat:"صفات",       ex:"Che bello! Mi piace molto."},
  {it:"grande",   ar:"كبير",               ipa:"/ˈɡran.de/",     pron:"جران-ديه",      cat:"صفات",       ex:"Roma è una città grande."},
  {it:"buono",    ar:"كويس / طيب",         ipa:"/ˈbwɔː.no/",     pron:"بووو-نو",       cat:"صفات",       ex:"Questo caffè è molto buono."},
  {it:"grazie",   ar:"شكراً",              ipa:"/ˈɡrat.tsje/",   pron:"جراتـ-سييه",    cat:"تعبيرات",    ex:"Grazie mille per tutto!"},
  {it:"prego",    ar:"عفواً",              ipa:"/ˈprɛː.ɡo/",     pron:"بريه-جو",       cat:"تعبيرات",    ex:"— Grazie! — Prego, figurati."},
  {it:"scusa",    ar:"آسف / معلش",         ipa:"/ˈskuː.za/",     pron:"سكو-زا",        cat:"تعبيرات",    ex:"Scusa, non ho capito."},
  {it:"ciao",     ar:"مرحبا / مع السلامة", ipa:"/tʃaʊ/",         pron:"تشاو",          cat:"تعبيرات",    ex:"Ciao! Come stai oggi?"},
  {it:"amore",    ar:"حب",                 ipa:"/aˈmoː.re/",     pron:"أ-مو-ريه",      cat:"مشاعر",      ex:"L'amore è la cosa più bella."},
  {it:"strada",   ar:"شارع",               ipa:"/ˈstraː.da/",    pron:"سترا-دا",       cat:"أماكن",      ex:"Attraverso la strada piano."},
  {it:"treno",    ar:"قطار",               ipa:"/ˈtrɛː.no/",     pron:"تريه-نو",       cat:"مواصلات",    ex:"Il treno parte tra cinque minuti."},
  {it:"macchina", ar:"سيارة",              ipa:"/ˈmak.ki.na/",   pron:"ماكـ-كي-نا",    cat:"مواصلات",    ex:"Ho una macchina rossa."},
  {it:"tempo",    ar:"وقت / طقس",          ipa:"/ˈtɛm.po/",      pron:"تيم-بو",        cat:"عام",        ex:"Che tempo fa oggi?"},
  {it:"caffè",    ar:"قهوة",               ipa:"/kafˈfɛ/",       pron:"كافـ-فيه",      cat:"طعام وشراب", ex:"Prendo un caffè, per favore."},
  {it:"pizza",    ar:"بيتزا",              ipa:"/ˈpit.tsa/",     pron:"بيتـ-تسا",      cat:"طعام وشراب", ex:"La pizza napoletana è la migliore."},
  {it:"città",    ar:"مدينة",              ipa:"/tʃitˈta/",      pron:"تشيتـ-تا",      cat:"أماكن",      ex:"Questa città è bellissima."},
  {it:"musica",   ar:"موسيقى",             ipa:"/ˈmuː.zi.ka/",   pron:"مو-زي-كا",      cat:"فن",         ex:"Ascolto la musica ogni sera."},
  {it:"lavoro",   ar:"شغل / عمل",          ipa:"/laˈvoː.ro/",    pron:"لا-فو-رو",      cat:"عام",        ex:"Vado al lavoro in bicicletta."},
];

// ===== INFINITE LESSON BANK =====
const LESSON_SENTENCES = [

// ── Io ──────────────────────────────────────────────────────────────
{it:"La biblioteca era chiusa, quindi andavo a casa e leggevo un libro di storia, mentre la TV era accesa", ar:"المكتبة كانت مقفولة، فعشان كده كنت بروح البيت وأقرا كتاب تاريخ والتليفزيون شغال.", en:"The library was closed, so I used to go home and read a history book while the TV was on.", pronoun:"Io (أنا)",
 words:[
   {it:"La",     ar:"الـ",         note:"أداة تعريف مؤنث مفرد"},
   {it:"biblioteca",ar:"المكتبة",  note:null},
   {it:"era",    ar:"كانت",        note:"من Essere (فعل شاذ)، Imperfetto — الغائب المفرد"},
   {it:"chiusa", ar:"مقفولة",      note:"صفة مؤنث مفرد، اتفقت مع biblioteca"},
   {it:"quindi", ar:"فعشان كده",   note:"حرف ربط سببي"},
   {it:"andavo", ar:"كنت بروح",    note:"من Andare (فعل شاذ)، Imperfetto مع Io"},
   {it:"a",      ar:"لـ",          note:"جزء من a casa"},
   {it:"casa",   ar:"البيت",       note:"بدون أداة تعريف (تعبير ثابت)"},
   {it:"e",      ar:"و",           note:null},
   {it:"leggevo",ar:"كنت بقرا",    note:"من Leggere، Imperfetto مع Io"},
   {it:"un",     ar:"(تنكير)",     note:null},
   {it:"libro",  ar:"كتاب",        note:null},
   {it:"di",     ar:"عن",          note:"حرف جر"},
   {it:"storia", ar:"تاريخ",       note:null},
   {it:"mentre", ar:"بينما",       note:"حرف ربط زمني"},
   {it:"la",     ar:"الـ",         note:null},
   {it:"TV",     ar:"التليفزيون",  note:null},
   {it:"era",    ar:"كان",         note:"من Essere، Imperfetto"},
   {it:"accesa", ar:"شغال",        note:"صفة مؤنث (من Accendere)"}
 ], conj:{verb:"Andare (Imperfetto)",rows:[
   {person:"Io (أنا)",   form:"Andavo"},  {person:"Tu (أنت)",    form:"Andavi"},
   {person:"Lui (هو)",   form:"Andava"},  {person:"Lei (هي)",    form:"Andava"},
   {person:"Noi (احنا)", form:"Andavamo"},{person:"Voi (انتم)",  form:"Andavate"},
   {person:"Loro (هم)",  form:"Andavano"}]}},

{it:"Io prendevo il caffè alla mattina, appena andavo al bar del centro", ar:"كنت باخد القهوة الصبح أول ما كنت بروح البار بتاع وسط البلد.", en:"I used to have coffee in the morning as soon as I went to the bar in the center.", pronoun:"Io (أنا)",
 words:[
   {it:"Io",      ar:"أنا",         note:null},
   {it:"prendevo",ar:"كنت باخد",    note:"من Prendere، Imperfetto مع Io"},
   {it:"il",      ar:"الـ",         note:"أداة تعريف مذكر مفرد"},
   {it:"caffè",   ar:"القهوة",      note:null},
   {it:"alla",    ar:"في الـ",      note:"حرف جر مدمج = a + la"},
   {it:"mattina", ar:"الصبح",       note:null},
   {it:"appena",  ar:"أول ما",      note:"ظرف زمني بمعنى: فور ما"},
   {it:"andavo",  ar:"كنت بروح",    note:"من Andare (فعل شاذ)، Imperfetto مع Io"},
   {it:"al",      ar:"للـ",         note:"حرف جر مدمج = a + il"},
   {it:"bar",     ar:"البار",       note:null},
   {it:"del",     ar:"بتاع الـ",    note:"حرف جر مدمج = di + il"},
   {it:"centro",  ar:"وسط البلد",   note:null}
 ], conj:null, arOrders:[[4,5,0,1,2,3,6,7,8,9,10,11]]},

{it:"Io ero stanco quando tornavo a casa tardi, perché andavo a piedi dall'ufficio, e la strada era lunga", ar:"كنت تعبان لما كنت برجع البيت متأخر لأني كنت بروح مشي من المكتب والسكة كانت طويلة.", en:"I was tired when I came home late because I walked from the office and the road was long.", pronoun:"Io (أنا)",
 words:[
   {it:"Io",       ar:"أنا",         note:null},
   {it:"ero",      ar:"كنت",         note:"من Essere (فعل شاذ)، Imperfetto مع Io"},
   {it:"stanco",   ar:"تعبان",       note:"صفة مذكر مفرد"},
   {it:"quando",   ar:"لما",         note:"أداة ربط زمنية"},
   {it:"tornavo",  ar:"كنت برجع",    note:"من Tornare، Imperfetto مع Io"},
   {it:"a",        ar:"لـ",          note:"جزء من a casa"},
   {it:"casa",     ar:"البيت",       note:"بدون أداة تعريف (تعبير ثابت)"},
   {it:"tardi",    ar:"متأخر",       note:"ظرف زمان"},
   {it:"perché",   ar:"لأن",         note:"حرف ربط سببي"},
   {it:"andavo",   ar:"كنت بروح",    note:"من Andare، Imperfetto مع Io"},
   {it:"a",        ar:"على",         note:"جزء من تعبير ثابت a piedi"},
   {it:"piedi",    ar:"الأقدام",     note:"تعبير a piedi يعني مشياً على الأقدام"},
   {it:"dall'",    ar:"من الـ",      note:"حرف جر مدمج = da + l'"},
   {it:"ufficio",  ar:"المكتب",      note:null},
   {it:"e",        ar:"و",           note:null},
   {it:"la",       ar:"الـ",         note:null},
   {it:"strada",   ar:"السكة",       note:null},
   {it:"era",      ar:"كانت",        note:"من Essere، Imperfetto"},
   {it:"lunga",    ar:"طويلة",       note:"صفة مؤنث مفرد"}
 ], conj:{verb:"Essere (Imperfetto)",rows:[
   {person:"Io (أنا)",   form:"Ero"},    {person:"Tu (أنت)",   form:"Eri"},
   {person:"Lui (هو)",   form:"Era"},    {person:"Lei (هي)",   form:"Era"},
   {person:"Noi (احنا)", form:"Eravamo"},{person:"Voi (انتم)", form:"Eravate"},
   {person:"Loro (هم)",  form:"Erano"}]}},

// ── Tu ──────────────────────────────────────────────────────────────
{it:"Tu andavi a letto tardi, perché leggevi un libro di lingue la sera sul divano in pelle con la luce accesa", ar:"أنت كنت بتروح السرير متأخر لأنك كنت بتقرا كتاب لغات بالليل على الكنبة الجلد والنور شغال.", en:"You used to go to bed late because you read a language book in the evening on the leather sofa with the light on.", pronoun:"Tu (أنت)",
 words:[
   {it:"Tu",       ar:"أنت",         note:"ضمير المخاطب المفرد"},
   {it:"andavi",   ar:"كنت بتروح",   note:"من Andare (فعل شاذ)، Imperfetto مع Tu"},
   {it:"a",        ar:"لـ",          note:"جزء من a letto (تعبير ثابت)"},
   {it:"letto",    ar:"السرير",      note:null},
   {it:"tardi",    ar:"متأخر",       note:"ظرف زمان"},
   {it:"perché",   ar:"لأن",         note:null},
   {it:"leggevi",  ar:"كنت بتقرا",   note:"من Leggere، Imperfetto مع Tu"},
   {it:"un",       ar:"(تنكير)",     note:null},
   {it:"libro",    ar:"كتاب",        note:null},
   {it:"di",       ar:"عن",          note:"حرف جر"},
   {it:"lingue",   ar:"لغات",        note:null},
   {it:"la",       ar:"الـ",         note:null},
   {it:"sera",     ar:"بالليل",      note:null},
   {it:"sul",      ar:"على الـ",     note:"حرف جر مدمج = su + il"},
   {it:"divano",   ar:"الكنبة",      note:null},
   {it:"in",       ar:"من",          note:"حرف جر لتحديد خامات الأثاث والملابس الثقيلة"},
   {it:"pelle",    ar:"الجلد",       note:null},
   {it:"con",      ar:"والـ",        note:"حرف جر بسيط"},
   {it:"la",       ar:"الـ",         note:null},
   {it:"luce",     ar:"النور",       note:null},
   {it:"accesa",   ar:"شغال",        note:"صفة مؤنث مفرد (من Accendere)"}
 ], conj:null},

{it:"Tu capivi sempre tutto a lezione, quando andavi a sederti nella prima fila, non appena la porta si apriva", ar:"أنت كنت دايماً بتفهم كل حاجة في الحصة لما كنت بتروح تقعد في الصف الأول أول ما الباب بيتفتح.", en:"You always understood everything in class when you went to sit in the front row as soon as the door opened.", pronoun:"Tu (أنت)",
 words:[
   {it:"Tu",       ar:"أنت",         note:null},
   {it:"capivi",   ar:"كنت بتفهم",   note:"من Capire، Imperfetto مع Tu"},
   {it:"sempre",   ar:"دايماً",      note:null},
   {it:"tutto",    ar:"كل حاجة",     note:"ضمير شامل"},
   {it:"a",        ar:"في",          note:"جزء من a lezione"},
   {it:"lezione",  ar:"الحصة",       note:null},
   {it:"quando",   ar:"لما",         note:"أداة ربط زمنية"},
   {it:"andavi",   ar:"كنت بتروح",   note:"من Andare، Imperfetto مع Tu"},
   {it:"a",        ar:"لـ",          note:"جزء من a sederti"},
   {it:"sederti",  ar:"تقعد",        note:"مصدر تأملي (ti=أنت)، من Sedersi"},
   {it:"nella",    ar:"في الـ",      note:"حرف جر مدمج = in + la"},
   {it:"prima",    ar:"الأول",       note:"صفة ترتيبية"},
   {it:"fila",     ar:"الصف",        note:null},
   {it:"non",      ar:"(جزء من non appena)",note:"جزء من تعبير ثابت non appena"},
   {it:"appena",   ar:"أول ما",      note:"جزء من non appena (بمجرد ما)"},
   {it:"la",       ar:"الـ",         note:null},
   {it:"porta",    ar:"الباب",       note:null},
   {it:"si",       ar:"(لازم)",      note:"جزء من الفعل اللازم si apriva"},
   {it:"apriva",   ar:"بيتفتح",      note:"من Aprirsi، Imperfetto — الغائب المفرد"}
 ], conj:null},

{it:"Tu tornavi dalla lezione stanco, perché andavi subito all'allenamento, ma a volte la palestra era chiusa", ar:"أنت كنت بترجع من الحصة تعبان لأنك كنت بتروح فوراً للتمرين، بس أحياناً الجيم كان مقفول.", en:"You came back from class tired because you went straight to training, but sometimes the gym was closed.", pronoun:"Tu (أنت)",
 words:[
   {it:"Tu",          ar:"أنت",        note:null},
   {it:"tornavi",     ar:"كنت بترجع",  note:"من Tornare، Imperfetto مع Tu"},
   {it:"dalla",       ar:"من الـ",     note:"حرف جر مدمج = da + la"},
   {it:"lezione",     ar:"الحصة",      note:null},
   {it:"stanco",      ar:"تعبان",      note:"صفة مذكر مفرد"},
   {it:"perché",      ar:"لأن",        note:null},
   {it:"andavi",      ar:"كنت بتروح",  note:"من Andare، Imperfetto مع Tu"},
   {it:"subito",      ar:"فوراً",      note:"ظرف"},
   {it:"all'",        ar:"للـ",        note:"حرف جر مدمج = a + l' (قبل حرف متحرك)"},
   {it:"allenamento", ar:"التمرين",    note:null},
   {it:"ma",          ar:"بس",         note:null},
   {it:"a",           ar:"أحياناً",    note:"جزء من a volte"},
   {it:"volte",       ar:"مرات",       note:"جزء من تعبير a volte (أحياناً)"},
   {it:"la",          ar:"الـ",        note:null},
   {it:"palestra",    ar:"الجيم",      note:null},
   {it:"era",         ar:"كان",        note:"من Essere، Imperfetto"},
   {it:"chiusa",      ar:"مقفول",      note:"صفة مؤنث مفرد (اتفقت مع palestra)"}
 ], conj:null},

// ── Lui ─────────────────────────────────────────────────────────────
{it:"Lui lavorava di notte, e era sempre stanco quando andava in fabbrica, mentre tutti dormivano", ar:"هو كان بيشتغل بالليل وكان دايماً تعبان لما كان بيروح المصنع وكل الناس نايمين.", en:"He used to work at night and was always tired when he went to the factory while everyone slept.", pronoun:"Lui (هو)",
 words:[
   {it:"Lui",       ar:"هو",           note:"ضمير الغائب المفرد المذكر"},
   {it:"lavorava",  ar:"كان بيشتغل",   note:"من Lavorare، Imperfetto مع Lui"},
   {it:"di",        ar:"بـ",           note:"جزء من di notte"},
   {it:"notte",     ar:"الليل",        note:null},
   {it:"e",         ar:"و",            note:null},
   {it:"era",       ar:"كان",          note:"من Essere (فعل شاذ)، Imperfetto مع Lui"},
   {it:"sempre",    ar:"دايماً",       note:null},
   {it:"stanco",    ar:"تعبان",        note:null},
   {it:"quando",    ar:"لما",          note:null},
   {it:"andava",    ar:"كان بيروح",    note:"من Andare (فعل شاذ)، Imperfetto مع Lui"},
   {it:"in",        ar:"لـ",           note:"حرف جر قبل أماكن بدون أداة تعريف"},
   {it:"fabbrica",  ar:"المصنع",       note:null},
   {it:"mentre",    ar:"بينما",        note:null},
   {it:"tutti",     ar:"كل الناس",     note:"ضمير شامل جمع"},
   {it:"dormivano", ar:"كانوا نايمين", note:"من Dormire، Imperfetto مع Loro"}
 ], conj:null},

{it:"Lui prendeva un caffè ogni mattina e andava all'università di Milano, appena si svegliava", ar:"هو كان بياخد قهوة كل صبح وكان بيروح جامعة ميلانو أول ما يصحى.", en:"He used to have a coffee every morning and go to the university of Milan as soon as he woke up.", pronoun:"Lui (هو)",
 words:[
   {it:"Lui",        ar:"هو",          note:null},
   {it:"prendeva",   ar:"كان بياخد",   note:"من Pretendere، Imperfetto مع Lui"},
   {it:"un",         ar:"(تنكير)",     note:null},
   {it:"caffè",      ar:"قهوة",        note:null},
   {it:"ogni",       ar:"كل",          note:null},
   {it:"mattina",    ar:"صبح",         note:null},
   {it:"e",          ar:"و",           note:null},
   {it:"andava",     ar:"كان بيروح",   note:"من Andare، Imperfetto مع Lui"},
   {it:"all'",       ar:"للـ",         note:"حرف جر مدمج = a + l'"},
   {it:"università", ar:"الجامعة",     note:null},
   {it:"di",         ar:"بتاع",        note:"حرف جر الانتساب"},
   {it:"Milano",     ar:"ميلانو",      note:"اسم مدينة"},
   {it:"appena",     ar:"أول ما",      note:"ظرف زمني"},
   {it:"si",         ar:"(لازم)",      note:"جزء من si svegliava"},
   {it:"svegliava",  ar:"كان بيصحى",  note:"من Svegliarsi، Imperfetto مع Lui"}
 ], conj:null, arOrders:[[4,5,0,1,2,3,6,7,8,9,10,11,12,13,14]]},

{it:"Il condizionatore dell'ufficio non funzionava bene, e lui era stanco del caldo, quindi andava a bere l'acqua fredda", ar:"مكيف المكتب ماكنش شغال كويس وهو كان تعبان من الحر، فعشان كده كان بيروح يشرب المية الساقعة.", en:"The office AC wasn't working well and he was tired of the heat, so he used to go drink cold water.", pronoun:"Lui (هو)",
 words:[
   {it:"Il",             ar:"الـ",         note:"أداة تعريف مذكر مفرد"},
   {it:"condizionatore", ar:"المكيف",      note:null},
   {it:"dell'",          ar:"بتاع الـ",    note:"حرف جر مدمج = di + l' (قبل حرف متحرك)"},
   {it:"ufficio",        ar:"المكتب",      note:null},
   {it:"non",            ar:"مش",          note:"أداة نفي"},
   {it:"funzionava",     ar:"كان شغال",    note:"من Funzionare، Imperfetto"},
   {it:"bene",           ar:"كويس",        note:"ظرف"},
   {it:"e",              ar:"و",           note:null},
   {it:"lui",            ar:"هو",          note:null},
   {it:"era",            ar:"كان",         note:"من Essere، Imperfetto مع Lui"},
   {it:"stanco",         ar:"تعبان",       note:null},
   {it:"del",            ar:"من الـ",      note:"حرف جر مدمج = di + il"},
   {it:"caldo",          ar:"الحر",        note:null},
   {it:"quindi",         ar:"فعشان كده",   note:"حرف ربط سببي"},
   {it:"andava",         ar:"كان بيروح",   note:"من Andare، Imperfetto مع Lui"},
   {it:"a",              ar:"لـ",          note:"جزء من a bere"},
   {it:"bere",           ar:"يشرب",        note:"مصدر بعد a (للغاية)"},
   {it:"l'",             ar:"الـ",         note:"أداة تعريف قبل حرف متحرك"},
   {it:"acqua",          ar:"المية",       note:null},
   {it:"fredda",         ar:"الساقعة",     note:"صفة مؤنث مفرد"}
 ], conj:null},

// ── Lei ─────────────────────────────────────────────────────────────
{it:"Lei tornava a casa dalla lezione la sera e andava a dormire subito sull'autobus, mentre ascoltava la musica", ar:"هي كانت بترجع البيت من الحصة بالليل وكانت بتروح تنام فوراً على الأتوبيس وهي بتسمع الموسيقى.", en:"She used to come home from class in the evening and fall asleep straight away on the bus while listening to music.", pronoun:"Lei (هي)",
 words:[
   {it:"Lei",       ar:"هي",           note:"ضمير الغائب المفرد المؤنث"},
   {it:"tornava",   ar:"كانت بترجع",   note:"من Tornare، Imperfetto مع Lei"},
   {it:"a",         ar:"لـ",           note:"جزء من a casa"},
   {it:"casa",      ar:"البيت",        note:null},
   {it:"dalla",     ar:"من الـ",       note:"حرف جر مدمج = da + la"},
   {it:"lezione",   ar:"الحصة",        note:null},
   {it:"la",        ar:"الـ",          note:null},
   {it:"sera",      ar:"بالليل",       note:null},
   {it:"e",         ar:"و",            note:null},
   {it:"andava",    ar:"كانت بتروح",   note:"من Andare، Imperfetto مع Lei"},
   {it:"a",         ar:"لـ",           note:"جزء من a dormire"},
   {it:"dormire",   ar:"تنام",         note:"مصدر بعد a"},
   {it:"subito",    ar:"فوراً",        note:"ظرف"},
   {it:"sull'",     ar:"على الـ",      note:"حرف جر مدمج = su + l'"},
   {it:"autobus",   ar:"الأتوبيس",     note:null},
   {it:"mentre",    ar:"بينما",        note:null},
   {it:"ascoltava", ar:"كانت بتسمع",   note:"من Ascoltare، Imperfetto مع Lei"},
   {it:"la",        ar:"الـ",          note:null},
   {it:"musica",    ar:"الموسيقى",     note:null}
 ], conj:null},

{it:"Lei capiva tutto a lezione, ma era stanca la sera, quando andava al supermercato, perché la fila era sempre lunga", ar:"هي كانت بتفهم كل حاجة في الحصة بس كانت تعبانة بالليل لما كانت بتروح السوبرماركت لأن الطابور كان دايماً طويل.", en:"She understood everything in class but was tired in the evening when she went to the supermarket because the queue was always long.", pronoun:"Lei (هي)",
 words:[
   {it:"Lei",          ar:"هي",         note:null},
   {it:"capiva",       ar:"كانت بتفهم", note:"من Capire، Imperfetto مع Lei"},
   {it:"tutto",        ar:"كل حاجة",    note:null},
   {it:"a",            ar:"في",         note:null},
   {it:"lezione",      ar:"الحصة",      note:null},
   {it:"ma",           ar:"بس",         note:null},
   {it:"era",          ar:"كانت",       note:"من Essere، Imperfetto مع Lei"},
   {it:"stanca",       ar:"تعبانة",     note:"صفة مؤنث مفرد، اتفقت مع Lei"},
   {it:"la",           ar:"الـ",        note:null},
   {it:"sera",         ar:"بالليل",     note:null},
   {it:"quando",       ar:"لما",        note:null},
   {it:"andava",       ar:"كانت بتروح", note:"من Andare، Imperfetto مع Lei"},
   {it:"al",           ar:"للـ",        note:"حرف جر مدمج = a + il"},
   {it:"supermercato", ar:"السوبرماركت",note:null},
   {it:"perché",       ar:"لأن",        note:null},
   {it:"la",           ar:"الـ",        note:null},
   {it:"fila",         ar:"الطابور",    note:null},
   {it:"era",          ar:"كان",        note:"من Essere، Imperfetto"},
   {it:"sempre",       ar:"دايماً",     note:null},
   {it:"lunga",        ar:"طويل",       note:"صفة مؤنث مفرد"}
 ], conj:null},

{it:"Lei prendeva un caffè e un panino piccolo ogni mattina, perché andava di fretta alla stazione dei treni", ar:"هي كانت بتاخد قهوة وسندوتش صغير كل صبح لأنها كانت بتروح مستعجلة لمحطة القطارات.", en:"She used to have a coffee and a small sandwich every morning because she rushed to the train station.", pronoun:"Lei (هي)",
 words:[
   {it:"Lei",      ar:"هي",          note:null},
   {it:"prendeva", ar:"كانت بتاخد",  note:"من Prendere، Imperfetto مع Lei"},
   {it:"un",       ar:"(تنكير)",     note:null},
   {it:"caffè",    ar:"قهوة",        note:null},
   {it:"e",        ar:"و",           note:null},
   {it:"un",       ar:"(تنكير)",     note:null},
   {it:"panino",   ar:"سندوتش",      note:null},
   {it:"piccolo",  ar:"صغير",        note:"صفة مذكر مفرد طابقت كلمة panino"},
   {it:"ogni",     ar:"كل",          note:null},
   {it:"mattina",  ar:"صبح",         note:null},
   {it:"perché",   ar:"لأنها",        note:null},
   {it:"andava",   ar:"كانت بتروح",  note:"من Andare، Imperfetto مع Lei"},
   {it:"di",       ar:"(جزء من)",    note:null},
   {it:"fretta",   ar:"مستعجلة",     note:"تعبير di fretta يعني بسرعة أو مستعجل"},
   {it:"alla",     ar:"للـ",         note:"حرف جر مدمج = a + la"},
   {it:"stazione", ar:"المحطة",      note:null},
   {it:"dei",      ar:"بتاع الـ",    note:"حرف جر مدمج = di + i"},
   {it:"treni",    ar:"القطارات",    note:null}
 ], conj:null, arOrders:[[8,9,0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17]]},

// ── Noi ─────────────────────────────────────────────────────────────
{it:"Noi leggevamo un libro di religione la sera, quando eravamo stanchi, e andavamo al cinema, mentre fuori pioveva", ar:"احنا كنا بنقرا كتاب دين بالليل لما كنا تعبانين وكنا بنروح السينما بينما كانت بتمطر بره.", en:"We used to read a religion book in the evening when we were tired and go to the cinema while it rained outside.", pronoun:"Noi (احنا)",
 words:[
   {it:"Noi",        ar:"احنا",         note:"ضمير المتكلم الجمع"},
   {it:"leggevamo",  ar:"كنا بنقرا",    note:"من Leggere، Imperfetto مع Noi"},
   {it:"un",         ar:"(تنكير)",      note:null},
   {it:"libro",      ar:"كتاب",         note:null},
   {it:"di",         ar:"عن",           note:"حرف جر"},
   {it:"religione",  ar:"دين",          note:null},
   {it:"la",         ar:"الـ",          note:null},
   {it:"sera",       ar:"بالليل",       note:null},
   {it:"quando",     ar:"لما",          note:null},
   {it:"eravamo",    ar:"كنا",          note:"من Essere (فعل شاذ)، Imperfetto مع Noi"},
   {it:"stanchi",    ar:"تعبانين",      note:"صفة جمع مذكر"},
   {it:"e",          ar:"و",            note:null},
   {it:"andavamo",   ar:"كنا بنروح",    note:"من Andare (فعل شاذ)، Imperfetto مع Noi"},
   {it:"al",         ar:"للـ",          note:"حرف جر مدمج = a + il"},
   {it:"cinema",     ar:"السينما",      note:null},
   {it:"mentre",     ar:"بينما",        note:null},
   {it:"fuori",      ar:"بره",          note:"ظرف مكان"},
   {it:"pioveva",    ar:"كانت بتمطر",   note:"من Piovere، Imperfetto"}
 ], conj:null},

{it:"Noi tornavamo dalla lezione e andavamo a prendere un caffè al bar della piazza, quando il tempo era bello", ar:"احنا كنا بنرجع من الحصة وكنا بنروح ناخد قهوة في البار بتاع الميدان لما الجو بيكون حلو.", en:"We used to come back from class and go to get a coffee at the square's bar when the weather was nice.", pronoun:"Noi (احنا)",
 words:[
   {it:"Noi",        ar:"احنا",        note:null},
   {it:"tornavamo",  ar:"كنا بنرجع",   note:"من Tornare، Imperfetto مع Noi"},
   {it:"dalla",      ar:"من الـ",      note:"حرف جر مدمج = da + la"},
   {it:"lezione",    ar:"الحصة",       note:null},
   {it:"e",          ar:"و",           note:null},
   {it:"andavamo",   ar:"كنا بنروح",   note:"من Andare، Imperfetto مع Noi"},
   {it:"a",          ar:"لـ",          note:"جزء من a prendere"},
   {it:"prendere",   ar:"ناخد",        note:"مصدر بعد a"},
   {it:"un",         ar:"(تنكير)",     note:null},
   {it:"caffè",      ar:"قهوة",        note:null},
   {it:"al",         ar:"للـ",         note:"حرف جر مدمج = a + il"},
   {it:"bar",        ar:"البار",       note:null},
   {it:"della",      ar:"بتاع الـ",    note:"حرف جر مدمج = di + la"},
   {it:"piazza",     ar:"الميدان",     note:null},
   {it:"quando",     ar:"لما",         note:"أداة ربط زمنية"},
   {it:"il",         ar:"الـ",         note:null},
   {it:"tempo",      ar:"الجو",        note:"وقت / طقس"},
   {it:"era",        ar:"كان",         note:"من Essere، Imperfetto"},
   {it:"bello",      ar:"حلو",         note:"صفة مذكر مفرد"}
 ], conj:null},

{it:"Noi capivamo tutto a lezione, ma di notte eravamo stanchi, perché andavamo a correre nello stadio", ar:"احنا كنا بنفهم كل حاجة في الحصة بس بالليل كنا تعبانين لأننا كنا بنروح نجري في الاستاد.", en:"We understood everything in class but at night we were tired because we used to go running in the stadium.", pronoun:"Noi (احنا)",
 words:[
   {it:"Noi",       ar:"احنا",        note:null},
   {it:"capivamo",  ar:"كنا بنفهم",   note:"من Capire، Imperfetto مع Noi"},
   {it:"tutto",     ar:"كل حاجة",     note:null},
   {it:"a",         ar:"في",          note:null},
   {it:"lezione",   ar:"الحصة",       note:null},
   {it:"ma",        ar:"بس",          note:null},
   {it:"di",        ar:"بـ",          note:"جزء من di notte"},
   {it:"notte",     ar:"الليل",       note:null},
   {it:"eravamo",   ar:"كنا",         note:"من Essere، Imperfetto مع Noi"},
   {it:"stanchi",   ar:"تعبانين",     note:null},
   {it:"perché",    ar:"لأننا",        note:null},
   {it:"andavamo",  ar:"كنا بنروح",   note:"من Andare، Imperfetto مع Noi"},
   {it:"a",         ar:"لـ",          note:"جزء من a correre"},
   {it:"correre",   ar:"نجري",        note:"مصدر بعد a"},
   {it:"nello",     ar:"في الـ",      note:"حرف جر مدمج = in + lo (قبل st-)"},
   {it:"stadio",    ar:"الاستاد",     note:null}
 ], conj:null, arOrders:[[6,7,0,1,2,3,4,5,8,9,10,11,12,13,14,15]]},

// ── Voi ─────────────────────────────────────────────────────────────
{it:"Voi leggevate un libro di filosofia ogni sera prima di tornare a casa", ar:"كنتوا بتقروا كتاب فلسفة كل ليلة قبل ما ترجعوا البيت؟", en:"Did you (pl) use to read a philosophy book every evening before going home?", pronoun:"Voi (انتم)",
 words:[
   {it:"Voi",ar:"انتم",note:"ضمير المخاطب الجمع"},
   {it:"leggevate",ar:"كنتوا بتقروا",note:"من Leggere، Imperfetto مع Voi"},
   {it:"un",ar:"(تنكير)",note:null},
   {it:"libro",ar:"كتاب",note:null},
   {it:"di",ar:"عن",note:"حرف جر"},
   {it:"filosofia",ar:"فلسفة",note:null},
   {it:"ogni",ar:"كل",note:null},
   {it:"sera",ar:"ليلة",note:null},
   {it:"prima",ar:"قبل",note:"جزء من حرف الجر المركب prima di"},
   {it:"di",ar:"(حرف جر)",note:null},
   {it:"tornare",ar:"ترجعوا",note:"مصدر بعد prima di (بدون تصريف)"},
   {it:"a",ar:"لـ",note:null},
   {it:"casa",ar:"البيت",note:null}
 ], conj:null},

{it:"Voi prendevate sempre un caffè e un panino piccolo alla mattina", ar:"كنتوا دايماً بتاخدوا قهوة وسندوتش صغير في الصباح.", en:"You (pl) always used to have a coffee and a small sandwich in the morning.", pronoun:"Voi (انتم)",
 words:[
   {it:"Voi",ar:"انتم",note:null},
   {it:"prendevate",ar:"كنتوا بتاخدوا",note:"من Prendre، Imperfetto مع Voi"},
   {it:"sempre",ar:"دايماً",note:null},
   {it:"un",ar:"(أداة تنكير)",note:null},
   {it:"caffè",ar:"قهوة",note:null},
   {it:"e",ar:"و",note:null},
   {it:"un",ar:"(تنكير)",note:null},
   {it:"panino",ar:"سندوتش",note:null},
   {it:"piccolo",ar:"صغير",note:"صفة مذكر طابقت كلمة panino"},
   {it:"alla",ar:"في الـ",note:"حرف جر مدمج"},
   {it:"mattina",ar:"الصباح",note:null}
 ], conj:null},

{it:"Voi eravate stanchi, quando il condizionatore non funzionava", ar:"كنتوا تعبانين لما المكيف ماكنش شغال.", en:"You (pl) were tired when the AC wasn't working.", pronoun:"Voi (انتم)",
 words:[
   {it:"Voi",ar:"انتم",note:null},
   {it:"eravate",ar:"كنتوا",note:"من Essere (فعل شاذ)، Imperfetto مع Voi"},
   {it:"stanchi",ar:"تعبانين",note:null},
   {it:"quando",ar:"لما",note:null},
   {it:"il",ar:"الـ",note:null},
   {it:"condizionatore",ar:"المكيف",note:null},
   {it:"non",ar:"مش",note:"جزء من النفي"},
   {it:"funzionava",ar:"كان شغال",note:null}
 ], conj:{verb:"Essere",rows:[
   {person:"Io (أنا)",form:"Ero"},{person:"Tu (أنت)",form:"Eri"},
   {person:"Lui (هو)",form:"Era"},{person:"Lei (هي)",form:"Era"},
   {person:"Noi (احنا)",form:"Eravamo"},{person:"Voi (انتم)",form:"Eravate"},
   {person:"Loro (هم)",form:"Erano"}]}},

// ── Loro ────────────────────────────────────────────────────────────
{it:"Loro leggevano un libro di arte e capivano tutto da piccoli", ar:"هم كانوا بيقروا كتاب فنون وبيفهموا كل حاجة من وهم صغيرين.", en:"They used to read an art book and understand everything since they were little.", pronoun:"Loro (هم)",
 words:[
   {it:"Loro",ar:"هم",note:"ضمير الغائب الجمع"},
   {it:"leggevano",ar:"كانوا بيقروا",note:"من Leggere، Imperfetto مع Loro"},
   {it:"un",ar:"(تنكير)",note:null},
   {it:"libro",ar:"كتاب",note:null},
   {it:"di",ar:"عن",note:"حرف جر"},
   {it:"arte",ar:"فنون",note:null},
   {it:"e",ar:"و",note:null},
   {it:"capivano",ar:"كانوا بيفهموا",note:"من Capire، Imperfetto مع Loro"},
   {it:"tutto",ar:"كل حاجة",note:null},
   {it:"da",ar:"من",note:"حرف جر بسيط، جزء من تعبير da piccoli"},
   {it:"piccoli",ar:"وهم صغيرين",note:"صفة جمع تعبر عن مرحلة الصغر زمنيًا"}
 ], conj:null},

{it:"Loro tornavano a casa tardi la sera, sempre stanchi", ar:"هم كانوا بيرجعوا البيت متأخرين بالليل، دايماً تعبانين.", en:"They used to come home late in the evening, always tired.", pronoun:"Loro (هم)",
 words:[
   {it:"Loro",ar:"هم",note:null},
   {it:"tornavano",ar:"كانوا بيرجعوا",note:"من Tornare، Imperfetto مع Loro"},
   {it:"a",ar:"لـ",note:null},
   {it:"casa",ar:"البيت",note:null},
   {it:"tardi",ar:"متأخرين",note:null},
   {it:"la",ar:"الـ",note:null},
   {it:"sera",ar:"بالليل",note:null},
   {it:"sempre",ar:"دايماً",note:null},
   {it:"stanchi",ar:"تعبانين",note:null}
 ], conj:null},

{it:"Loro prendevano un caffè ogni mattina prima della lezione", ar:"هم كانوا بياخدوا قهوة كل صبح قبل الحصة.", en:"They used to have a coffee every morning before class.", pronoun:"Loro (هم)",
 words:[
   {it:"Loro",ar:"هم",note:null},
   {it:"prendevano",ar:"كانوا بياخدوا",note:"من Prendere، Imperfetto مع Loro"},
   {it:"un",ar:"(أداة تنكير)",note:null},
   {it:"caffè",ar:"قهوة",note:null},
   {it:"ogni",ar:"كل",note:null},
   {it:"mattina",ar:"صبح",note:null},
   {it:"prima",ar:"قبل",note:null},
   {it:"della",ar:"الـ",note:"di + la = della"},
   {it:"lezione",ar:"الحصة",note:null}
 ], conj:null}
];

// ===== AR_SEQ_SENTENCES =====
// مخصصة لوضع "رتّب بالعربي"
const AR_SEQ_SENTENCES = [

// ── بار / قهوة ──────────────────────────────────────────────────────
{it:"Vado al bar ogni mattina e prendo un caffè", ar:"بروح البار كل صبح وباخد قهوة", en:"I go to the bar every morning and have a coffee.",
 words:[
  {it:"Vado",ar:"بروح"},{it:"al",ar:"للـ"},{it:"bar",ar:"البار"},
  {it:"ogni",ar:"كل"},{it:"mattina",ar:"صبح"},{it:"e",ar:"و"},
  {it:"prendo",ar:"باخد"},{it:"un",ar:"(تنكير)"},{it:"caffè",ar:"قهوة"}
]},

{it:"Il barista mi prepara il caffè senza zucchero", ar:"النادل بيجهزلي القهوة من غير سكر", en:"The barista makes me a coffee without sugar.",
 words:[
  {it:"Il",ar:"الـ"},{it:"barista",ar:"النادل"},{it:"mi",ar:"لي"},
  {it:"prepara",ar:"بيجهز"},{it:"il",ar:"الـ"},{it:"caffè",ar:"القهوة"},
  {it:"senza",ar:"من غير"},{it:"zucchero",ar:"سكر"}
]},

{it:"Posso avere un bicchiere d'acqua per favore", ar:"ممكن كوباية مية لو سمحت", en:"Can I have a glass of water please?",
 words:[
  {it:"Posso",ar:"ممكن"},{it:"avere",ar:"آخد"},{it:"un",ar:"(تنكير)"},
  {it:"bicchiere",ar:"كوباية"},{it:"d'acqua",ar:"مية"},{it:"per",ar:"من"},
  {it:"favore",ar:"فضلك"}
]},

// ── سوبر ماركت / تسوق ───────────────────────────────────────────────
{it:"Devo andare al supermercato a comprare il pane", ar:"لازم أروح السوبر ماركت أشتري عيش", en:"I need to go to the supermarket to buy bread.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"andare",ar:"أروح"},{it:"al",ar:"للـ"},
  {it:"supermercato",ar:"السوبر ماركت"},{it:"a",ar:"عشان"},
  {it:"comprare",ar:"أشتري"},{it:"il",ar:"الـ"},{it:"pane",ar:"العيش"}
]},

{it:"Quanto costa questo prodotto nel negozio", ar:"بكام المنتج ده في المحل", en:"How much does this product cost in the shop?",
 words:[
  {it:"Quanto",ar:"بكام"},{it:"costa",ar:"بيكلف"},{it:"questo",ar:"الـ"},
  {it:"prodotto",ar:"المنتج"},{it:"nel",ar:"في الـ"},{it:"negozio",ar:"المحل"}
]},

{it:"Ho dimenticato di comprare il latte al supermercato", ar:"نسيت أشتري اللبن من السوبر ماركت", en:"I forgot to buy milk at the supermarket.",
 words:[
  {it:"Ho",ar:"أنا"},{it:"dimenticato",ar:"نسيت"},{it:"di",ar:"إني"},
  {it:"comprare",ar:"أشتري"},{it:"il",ar:"الـ"},{it:"latte",ar:"اللبن"},
  {it:"al",ar:"من الـ"},{it:"supermercato",ar:"السوبر ماركت"}
]},

// ── مواصلات ─────────────────────────────────────────────────────────
{it:"Il treno per Milano parte tra dieci minuti dal binario tre", ar:"القطار لميلانو بيمشي بعد عشر دقايق من الرصيف التلاتة", en:"The train to Milan leaves in ten minutes from platform three.",
 words:[
  {it:"Il",ar:"الـ"},{it:"treno",ar:"القطار"},{it:"per",ar:"لـ"},
  {it:"Milano",ar:"ميلانو"},{it:"parte",ar:"بيمشي"},{it:"tra",ar:"بعد"},
  {it:"dieci",ar:"عشر"},{it:"minuti",ar:"دقايق"},{it:"dal",ar:"من الـ"},
  {it:"binario",ar:"الرصيف"},{it:"tre",ar:"التلاتة"}
]},

{it:"Devo prendere l'autobus numero dodici per andare in centro", ar:"لازم آخد الأتوبيس رقم اتناشر عشان أروح وسط البلد", en:"I need to take bus number twelve to go to the city center.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"prendere",ar:"آخد"},{it:"l'autobus",ar:"الأتوبيس"},
  {it:"numero",ar:"رقم"},{it:"dodici",ar:"اتناشر"},{it:"per",ar:"عشان"},
  {it:"andare",ar:"أروح"},{it:"in",ar:"في"},{it:"centro",ar:"وسط البلد"}
]},

{it:"Il traffico era bloccato e sono arrivato tardi al lavoro", ar:"الزحمة كانت واقفة ووصلت متأخر للشغل", en:"The traffic was jammed and I arrived late to work.",
 words:[
  {it:"Il",ar:"الـ"},{it:"traffico",ar:"الزحمة"},{it:"era",ar:"كانت"},
  {it:"bloccato",ar:"واقفة"},{it:"e",ar:"و"},{it:"sono",ar:"أنا"},
  {it:"arrivato",ar:"وصلت"},{it:"tardi",ar:"متأخر"},{it:"al",ar:"للـ"},
  {it:"lavoro",ar:"الشغل"}
]},

// ── مطعم ────────────────────────────────────────────────────────────
{it:"Vorrei un tavolo per due persone vicino alla finestra", ar:"عايز ترابيزة لاتنين قريب من الشباك", en:"I'd like a table for two people near the window.",
 words:[
  {it:"Vorrei",ar:"عايز"},{it:"un",ar:"(تنكير)"},{it:"tavolo",ar:"ترابيزة"},
  {it:"per",ar:"لـ"},{it:"due",ar:"اتنين"},{it:"persone",ar:"شخص"},
  {it:"vicino",ar:"قريب"},{it:"alla",ar:"من الـ"},{it:"finestra",ar:"الشباك"}
]},

{it:"Il cameriere ci porta il menu e l'acqua naturale", ar:"الجرسون جابلنا المنيو والمية الطبيعية", en:"The waiter brings us the menu and still water.",
 words:[
  {it:"Il",ar:"الـ"},{it:"cameriere",ar:"الجرسون"},{it:"ci",ar:"لنا"},
  {it:"porta",ar:"جاب"},{it:"il",ar:"الـ"},{it:"menu",ar:"المنيو"},
  {it:"e",ar:"و"},{it:"l'acqua",ar:"المية"},{it:"naturale",ar:"الطبيعية"}
]},

{it:"Vorrei ordinare una pizza margherita e un'insalata mista", ar:"عايز أطلب بيتزا مارغريتا وسلطة مشكلة", en:"I'd like to order a margherita pizza and a mixed salad.",
 words:[
  {it:"Vorrei",ar:"عايز"},{it:"ordinare",ar:"أطلب"},{it:"una",ar:"(تنكير)"},
  {it:"pizza",ar:"بيتزا"},{it:"margherita",ar:"مارغريتا"},{it:"e",ar:"و"},
  {it:"un'insalata",ar:"سلطة"},{it:"mista",ar:"مشكلة"}
]},

// ── صحة / صيدلية ────────────────────────────────────────────────────
{it:"Non mi sento bene, ho mal di testa da ieri sera", ar:"مش بحس بخير عندي صداع من امبارح بالليل", en:"I don't feel well, I've had a headache since last night.",
 words:[
  {it:"Non",ar:"مش"},{it:"mi",ar:"أنا"},{it:"sento",ar:"بحس"},
  {it:"bene",ar:"بخير"},{it:"ho",ar:"عندي"},{it:"mal",ar:"ألم"},
  {it:"di",ar:"في الـ"},{it:"testa",ar:"دماغ"},{it:"da",ar:"من"},
  {it:"ieri",ar:"امبارح"},{it:"sera",ar:"بالليل"}
]},

{it:"Il medico mi ha detto di prendere la medicina due volte al giorno", ar:"الدكتور قالي آخد الدوا مرتين في اليوم", en:"The doctor told me to take the medicine twice a day.",
 words:[
  {it:"Il",ar:"الـ"},{it:"medico",ar:"الدكتور"},{it:"mi",ar:"لي"},
  {it:"ha",ar:"قال"},{it:"detto",ar:"إني"},{it:"di",ar:"إني"},
  {it:"prendere",ar:"آخد"},{it:"la",ar:"الـ"},{it:"medicina",ar:"الدوا"},
  {it:"due",ar:"مرتين"},{it:"volte",ar:"في"},{it:"al",ar:"الـ"},
  {it:"giorno",ar:"يوم"}
]},

// ── شغل / مكتب ──────────────────────────────────────────────────────
{it:"Ho una riunione importante alle dieci di mattina", ar:"عندي اجتماع مهم الساعة عشرة الصبح", en:"I have an important meeting at ten in the morning.",
 words:[
  {it:"Ho",ar:"عندي"},{it:"una",ar:"(تنكير)"},{it:"riunione",ar:"اجتماع"},
  {it:"importante",ar:"مهم"},{it:"alle",ar:"الساعة"},{it:"dieci",ar:"عشرة"},
  {it:"di",ar:"الـ"},{it:"mattina",ar:"الصبح"}
]},

{it:"Devo finire questo progetto entro venerdì prossimo", ar:"لازم أخلص المشروع ده قبل الجمعة الجاية", en:"I need to finish this project by next Friday.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"finire",ar:"أخلص"},{it:"questo",ar:"الـ"},
  {it:"progetto",ar:"المشروع"},{it:"entro",ar:"قبل"},{it:"venerdì",ar:"الجمعة"},
  {it:"prossimo",ar:"الجاية"}
]},

{it:"Il mio capo mi ha mandato una email importante stamattina", ar:"مديري بعتلي إيميل مهم الصبح", en:"My boss sent me an important email this morning.",
 words:[
  {it:"Il",ar:"الـ"},{it:"mio",ar:"بتاعي"},{it:"capo",ar:"مدير"},
  {it:"mi",ar:"لي"},{it:"ha",ar:"بعت"},{it:"mandato",ar:"إيميل"},
  {it:"una",ar:"(تنكير)"},{it:"email",ar:"إيميل"},{it:"importante",ar:"مهم"},
  {it:"stamattina",ar:"الصبح"}
]},

// ── بيت / يوميات ────────────────────────────────────────────────────
{it:"Stasera cucino la pasta con il sugo di pomodoro", ar:"الليلة بطبخ باستا بصوص الطماطم", en:"Tonight I'm cooking pasta with tomato sauce.",
 words:[
  {it:"Stasera",ar:"الليلة"},{it:"cucino",ar:"بطبخ"},{it:"la",ar:"الـ"},
  {it:"pasta",ar:"الباستا"},{it:"con",ar:"بـ"},{it:"il",ar:"الـ"},
  {it:"sugo",ar:"صوص"},{it:"di",ar:"بـ"},{it:"pomodoro",ar:"طماطم"}
]},

{it:"Devo fare la spesa e poi portare i bambini a scuola", ar:"لازم أعمل المشتريات وبعدين أوصّل الأطفال للمدرسة", en:"I need to do the shopping and then take the kids to school.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"fare",ar:"أعمل"},{it:"la",ar:"الـ"},
  {it:"spesa",ar:"المشتريات"},{it:"e",ar:"و"},{it:"poi",ar:"بعدين"},
  {it:"portare",ar:"أوصّل"},{it:"i",ar:"الـ"},{it:"bambini",ar:"الأطفال"},
  {it:"a",ar:"لـ"},{it:"scuola",ar:"المدرسة"}
]},

{it:"L'affitto di questo appartamento è troppo caro per me", ar:"إيجار الشقة دي غالي أوي عليا", en:"The rent for this apartment is too expensive for me.",
 words:[
  {it:"L'affitto",ar:"إيجار"},{it:"di",ar:"الـ"},{it:"questo",ar:"الـ"},
  {it:"appartamento",ar:"الشقة"},{it:"è",ar:"هو"},{it:"troppo",ar:"أوي"},
  {it:"caro",ar:"غالي"},{it:"per",ar:"على"},{it:"me",ar:"أنا"}
]},

// ── جامعة / دراسة ───────────────────────────────────────────────────
{it:"Devo studiare per l'esame di italiano della prossima settimana", ar:"لازم أذاكر لامتحان الإيطالي الأسبوع الجاي", en:"I need to study for the Italian exam next week.",
 words:[
  {it:"Devo",ar:"لازم"},{it:"studiare",ar:"أذاكر"},{it:"per",ar:"لـ"},
  {it:"l'esame",ar:"امتحان"},{it:"di",ar:"الـ"},{it:"italiano",ar:"إيطالي"},
  {it:"della",ar:"الـ"},{it:"prossima",ar:"الجاي"},{it:"settimana",ar:"الأسبوع"}
]},

{it:"La professoressa ha spiegato la grammatica in modo molto chiaro", ar:"الأستاذة شرحت القواعد بطريقة واضحة جداً", en:"The professor explained the grammar in a very clear way.",
 words:[
  {it:"La",ar:"الـ"},{it:"professoressa",ar:"الأستاذة"},{it:"ha",ar:"هي"},
  {it:"spiegato",ar:"شرحت"},{it:"la",ar:"الـ"},{it:"grammatica",ar:"القواعد"},
  {it:"in",ar:"بـ"},{it:"modo",ar:"طريقة"},{it:"molto",ar:"جداً"},
  {it:"chiaro",ar:"واضحة"}
]},

// ── طقس ─────────────────────────────────────────────────────────────
{it:"Oggi fa molto caldo, ma domani arriva un po' di pioggia", ar:"النهارده حر جداً بس بكره هتيجي شوية مطر", en:"Today it's very hot but tomorrow some rain is coming.",
 words:[
  {it:"Oggi",ar:"النهارده"},{it:"fa",ar:"في"},{it:"molto",ar:"جداً"},
  {it:"caldo",ar:"حر"},{it:"ma",ar:"بس"},{it:"domani",ar:"بكره"},
  {it:"arriva",ar:"هتيجي"},{it:"un",ar:"(تنكير)"},{it:"po'",ar:"شوية"},
  {it:"di",ar:"من"},{it:"pioggia",ar:"مطر"}
]},

{it:"Portati un ombrello, perché sembra che piova oggi pomeriggio", ar:"خد معاك شمسية لأنه يبان إنه هيمطر بعد الضهر", en:"Take an umbrella because it looks like it will rain this afternoon.",
 words:[
  {it:"Portati",ar:"خد معاك"},{it:"un",ar:"(تنكير)"},{it:"ombrello",ar:"شمسية"},
  {it:"perché",ar:"لأن"},{it:"sembra",ar:"يبان"},{it:"che",ar:"إنه"},
  {it:"piova",ar:"هيمطر"},{it:"oggi",ar:"النهارده"},{it:"pomeriggio",ar:"بعد الضهر"}
]},

// ── تليفون / تواصل ──────────────────────────────────────────────────
{it:"Ti chiamo dopo cena per parlare di questa cosa importante", ar:"هتصلك بعد العشا عشان نتكلم في الموضوع المهم ده", en:"I'll call you after dinner to talk about this important thing.",
 words:[
  {it:"Ti",ar:"هتصلك"},{it:"chiamo",ar:"بتصل"},{it:"dopo",ar:"بعد"},
  {it:"cena",ar:"العشا"},{it:"per",ar:"عشان"},{it:"parlare",ar:"نتكلم"},
  {it:"di",ar:"في"},{it:"questa",ar:"الـ"},{it:"cosa",ar:"الموضوع"},
  {it:"importante",ar:"المهم"}
]},

{it:"Ho ricevuto un messaggio da Marco, ma non ho ancora risposto", ar:"استلمت رسالة من ماركو بس ما رديتش لسه", en:"I received a message from Marco but haven't replied yet.",
 words:[
  {it:"Ho",ar:"أنا"},{it:"ricevuto",ar:"استلمت"},{it:"un",ar:"(تنكير)"},
  {it:"messaggio",ar:"رسالة"},{it:"da",ar:"من"},{it:"Marco",ar:"ماركو"},
  {it:"ma",ar:"بس"},{it:"non",ar:"ما"},{it:"ho",ar:"(مساعد)"},
  {it:"ancora",ar:"لسه"},{it:"risposto",ar:"ردّيت"}
]},

// ── ترفيه / أوقات فراغ ──────────────────────────────────────────────
{it:"Questo fine settimana andiamo al cinema con gli amici", ar:"الويك إند ده هنروح السينما مع الأصحاب", en:"This weekend we're going to the cinema with friends.",
 words:[
  {it:"Questo",ar:"الـ"},{it:"fine",ar:"نهاية"},{it:"settimana",ar:"الأسبوع"},
  {it:"andiamo",ar:"هنروح"},{it:"al",ar:"للـ"},{it:"cinema",ar:"السينما"},
  {it:"con",ar:"مع"},{it:"gli",ar:"الـ"},{it:"amici",ar:"الأصحاب"}
]},

{it:"Mi piace molto ascoltare la musica, mentre cucino la sera", ar:"بحب أوي أسمع موسيقى وأنا بطبخ بالليل", en:"I really like listening to music while I cook in the evening.",
 words:[
  {it:"Mi",ar:"أنا"},{it:"piace",ar:"بحب"},{it:"molto",ar:"أوي"},
  {it:"ascoltare",ar:"أسمع"},{it:"la",ar:"الـ"},{it:"musica",ar:"موسيقى"},
  {it:"mentre",ar:"وأنا"},{it:"cucino",ar:"بطبخ"},{it:"la",ar:"الـ"},
  {it:"sera",ar:"بالليل"}
]},

];