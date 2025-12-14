let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let xp = 0;


const questions = {
  syntax: [
    { q: "Sözlemiň baş agzalary haýsylar?", options: ["Doldurgyçlar", "Aýyrgyçlar", "Eýe we habar"], answer: "Eýe we habar" },
    { q: "Sintaktika nämäni öwrenýär?", options: ["Sesleri", "Sözlem gurluşyny", "Morfemalary"], answer: "Sentence structure" }
  ],
  morphology: [
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" }
  ],
  phonetics: [
    { q: "Fonetika nämäni öwrenýär?", options: ["Many", "Sesleri", "Sözlemi"], answer: "Sesleri" },
    { q: "Dymyk çekimsizler haýsylar?", options: ["/k,p,t,ç/", "/j,g,b,d/", "/o,a,u,y/", "/k,l,m,n/"], answer: "/k,p,t,ç/" }
  ],
  hyzmaty: [
    { q: "Dil bilimi diýip nämä aýdylýar?", options: ["Dil hakyndaky taglymata ", "Dilimizdäki sesleri öwrenýän ylym", "Sözleri we sözlemleri derňemegi öwredýän ylym", "Dialektologiýa baradaky ylym"], answer: "Dil hakyndaky taglymata" },
    { q: "Türkmenleriň şiwedir gepleşikleriniň hemmesini öz içine alýan düşünje näme?", options: ["Sözleýiş dili", "Edebi dil", "Dialektologiýa", "Türkmen dili"], answer: "Türkmen dili" },
    { q: "“Dil baýlygy - ....”?", options: [". - ýurt saglygy", "- il saglygy", "-il baýlygy","- bilimli nesil"], answer: "- bilimli nesil" },
    { q: " 'Çagaňa dili manysy bilen öwret!' diýip belläp geçen kim?", options: [" Görogly", "Gorkut ata ", "Oguzhan"," Magtymguly"], answer: "Gorkut ata " },
    { q: "'Ýerini bilip sözleseň, ......'", options: ["- ýüzüň nury dökülmez", "- gözüň nury seçilmez", " - gözüň nury dökülmez"], answer: "- ýüzüň nury dökülmez" }
  ],
  gadymylygy: [
    { q: "Edebi dil nämesi bilen tapawutlanýar?", options: ["Düşnüksizligi, ýapyklygy bilen", "Söz ussatlary bilen ", "Aýdyňlygy, anyklygy, düşnükliligi bilen", "Şiwe dillerine baýlygy "], answer: "Aýdyňlygy, anyklygy, düşnükliligi bilen" },
    { q: "Adamzat taryhynyň ösüş prosesinde düzülen dil umumylygyna näme diýilýär?", options: ["Gepleşik dili", "Türki dili", "Sözleýiş dili", "Umumyhalk dili "], answer: "Umumyhalk dili " },
    { q: "Diliň umumyhalk nusgasyna näme diýilýär?", options: ["Forma", "Norma", "Edebi dil","Dialekt"], answer: "Norma" },
    { q: "Edebi dil diýip türkmen diliniň haýsy şiwe diline aýdylýar?", options: ["Edebi dil ,şol diliň iň köp ulanylýan dialektidir", "Edebi dil , söz ussatlary tarapyndan işlenilen halk dilidir", "Edebi dil , teke dialektidir","Edebi dil , şol halkyň şahyrlarynyň, ýazyjylarynyň  dilidir"], answer: "Edebi dil , söz ussatlary tarapyndan işlenilen halk dilidir" },
    { q: "Orhon derýasynyň boýundan nämeler tapyldy?", options: ["Ýüzünde taryhy ýazgyly daşlar tapyldy", "Ýüzünde suratlar çekilen daşlar tapyldy", "Küýze galyndylary tapyldy","Gadymy şäher tapyldy"], answer: "Ýüzünde taryhy ýazgyly daşlar tapyldy" },
  ],
  ses_we_harp: [
    { q: "Gepleşikde ulanylýan sesler iki topara bölünýärler. Olar haýsylar?Morfema näme?", options: ["Galmagally we sonorly", "Açyk we dymyk", "Çekimli we çekimsiz","Ýogyn we inçe"], answer: "Çekimli we çekimsiz" },
    { q: "Sap owazdan hasyl bolup, owaz perdeleriniň titremeginden emele gelýän seslere näme diýilýär?", options: ["Çekimli sesler", "Çekimsiz sesler", "Ikisi hem däl","Inçe çekimliler"], answer: "Çekimli sesler" },
    { q: "Çekimli sesler haýsylar?", options: ["a, o, u, y, f, e, ä, ö", "a, o, u, y, e, ä, ö, i, ü", "a, b, o, u, y, e, ä, ö, ü, i","a, o, y, u "], answer: "a, o, u, y, e, ä, ö, i, ü" },
    { q: "Dil we dodaklar bogazdan gelýän howanyň öňüne gabat bolup, onuň asuda çykyp gitmegine päsgel berip, galmagal emele getirýän seslere näme diýilyär?", options: ["Dymyk çekimsizler", "Çekimli sesler", "Sonorly sesler","Çekimsiz sesler"], answer: "Çekimsiz sesler" },
    { q: "Dymyk çekimsizler haýsylar?", options: ["t, d, ç, j, s, z, ş, ž, r, l, n", "l, m, n, ň, p, w, ý", "g, b, d, j, z, ž, ý, r, l, m, n","k, p, t, ç, ş, s, h, f"], answer: "k, p, t, ç, ş, s, h, f" },
    { q: "Gep organlaryň ýerine ýetirmekdäki hereketine garap çekimli sesleri näçe topara bölýäris?", options: ["3", "4", "5","2"], answer: "3" },
    { q: "Inçe çekimliler haýsylar?", options: ["a, ä, e, u", ". ä, ö, ü, i, e", ". ä, ö, u, i, e","e, ä, i, ü, u, ö, o"], answer: "ä, ö, ü, i, e" },
    { q: "Ýogyn çekimliler haýsylar?", options: ["a, ä, o, ö", "a, y, ö, u", "a, e, u, y, o","a, o, u, y"], answer: "a, o, u, y" },
    { q: "Dar çekimliler haýsylar?", options: ["a, o, u, y", "u, ü, e, ä", "y, i, u, ü ","y, i, o, ö"], answer: "y, i, u, ü" },
    { q: "Dodaklanýan çekimliler haýsylar?", options: ["a, o, ö, ü", "o, ö, u, ü", "o, ö, e, i","u, ü, y, o"], answer: "o, ö, u, ü" },
    { q: "Çekimli sesleriň sazlaşygyna başgaça näme diýilýär?", options: ["Assimliýasiýa", "Sazlaşyk", "Singarmonizm","Akustika"], answer: "Singarmonizm" },
    { q: "Singarmonizm näçe topara bölünýär?", options: ["2", "3", "4","5"], answer: "2" },
    { q: "Palatal singarmonizm näme?", options: ["Sesleriň giň-darlyk sazlaşygy", "Çekimli sesleriň inçe-ýogynlyk sazlaşygy", "Çekimli sesleriň dodaklanýan-dodaklanmaýan sazlaşygy","Uzyn-gysgalyk sazlaşygy"], answer: "Çekimli sesleriň inçe-ýogynlyk sazlaşygy" },
    { q: "Labial singarmonizm näme?", options: ["Çekimli sesleriň giň-darlyk sazlaşygy", "Çekimli sesleriň inçe-ýogynlyk sazlaşygy", "Uzynly-gysgalyk sazlaşygy","Çekimli sesleriň dodak sazlaşygy"], answer: "Çekimli sesleriň dodak sazlaşygy" },
    { q: "“Oglonlommuz, güllömmüz” sözleri haýsy sazlaşyga degişli?", options: ["Palatal sazlaşygy", "Labial sazlaşygy", "Inçe-ýogynlyk sazlaşygy","Dar-giň sazlaşygy"], answer: "Labial sazlaşygy" },
    { q: "Çekimsiz sesler diýip nämä aýdylýar?", options: [" Sap galmagaldan ýa-da galmagala owazyň goşulmagyndan emele gelýän sesler", " Diňe galmagaldan emele gelýän sesler", "Sap owazdan emele gelýän sesler","Dymyk çekimsizlerdir"], answer: "Sap galmagaldan ýa-da galmagala owazyň goşulmagyndan emele gelýän sesler" },
    { q: "Sonorly çekimsizler haýsylar?", options: ["l, m, n, r, w, ý, k, j", "l, m, n, r, w, ý, j", "k, l, m, n, r, w"," g, z, ž, ý, r, l, m, n, ň, w"], answer: "l, m, n, r, w, ý, j" },
    { q: "Çekimsiz sesler hiline garap näçe topara bölünýär?", options: ["5", "3", "4","2"], answer: "2" },
    { q: "Açyk çekimsizler haýsylar?", options: ["k, p, t, ç, z, f, h", "k, p, d, j, f, s, ş, t", "k, p, t, ç, s, f, h, ş","g, b, d, j, z, ž"], answer: "k, p, t, ç, s, f, h, ş" },
    { q: "Dodak çekimsizleri haýsylar?", options: ["k, g, ň, f, e", "p, b, w, f, m", "m, r, w, k","r, ý, w, b, m"], answer: "p, b, w, f, m" },
    { q: "Çekimsiz sesler gatanjyna garap näçe topara bölünýärler?", options: ["4", "3", "2","1"], answer: "3" },
    { q: "g, b, d, j, z, ž sesleri nähili sesler?", options: ["Sonorly", "Açyk", "Dymyk","Bogaz"], answer: "Açyk" },
    { q: "k, g, ň, h sesleri nähili sesler?", options: ["Dil orta", "Dodak", "Dilardy"], answer: "Dilardy" },
    { q: "r harpy nähili ses?", options: ["Titreýji", "Dilujy ", "Dodak"], answer: "Titreýji" },
    { q: "Burun ýolly sesler haýsylar?", options: ["k, g, ň", "m, ň, l", "m, n, ň"], answer: "m, n, ň" },
    { q: "Çekimsiz sesleriň sazlaşygyna başgaça näme diýilýär?", options: ["Singarmonizm", "Assimilýasiýa", "Geminasiýa"], answer: "Assimilýasiýa" },
    { q: "Ugry boýunça assimilýasiýa näçe topara bölünýär? Haýsylar?", options: ["2 topara: oňyn, tersin", "3 topara: doly, doly däl we çylşyrymly", "3 topara: oňyn, tersin we çylşyrymly","toparlara bölünenok"], answer: "3 topara: oňyn, tersin we çylşyrymly" },
    { q: "Netijesi boýunça assimilýasiýany näçe topara bölünýär we haýsylar?", options: ["2 topara: doly we doly däl", "3 topara: doly, doly däl, çylşyrymly", "2 topara: oňyn we tersin","toparlara bölünenok"], answer: "2 topara: doly we doly däl" },
    { q: "“Görer gözüň gymmaty, ... ” ", options: ["Bu Hudaýyň ymmaty", "Kör ýanynda bellidir", "Ker ýanynda biliner","Kim ýanynda bellidir"], answer: "Kör ýanynda bellidir" },
    { q: "“Müň işçiden bir başçy” diýen atalar sözünde şç sesleri nähili eşidilýär?", options: ["şş", "çş", "şç","jş"], answer: "şş" },

  ],
  bogun: [
    { q: "Bogun adalgasy haýsy sözler bilen asyldaş?", options: ["Bogy, bogym", "bölmek, bogunlamak","Bogy, bogum"], answer: "Bogy, bogum" },
    { q: "Bogun näme?", options: ["Sözüň birbada aýdylýan bölegi", "Sesiň birbada aýdylýan bölegi", "Sözlemiň birbada aýdylýan bölegi","Bogunyň birbada aýdylýan bölegi"], answer: "Sözüň birbada aýdylýan bölegi" },
    { q: "Türkmen diline häsiýetli bogun tiplerine aşakdakylaryň haýsylary degişli?", options: ["VK, VVVV, KKKK", "VKK, KV, KVKK", "VV, KVV, KKKK"], answer: "VKK, KV, KVKK" },
    { q: "“Bagt” sözüne aşakdaky bogun ölçegleriniň haýsysy gabat gelýär?", options: [" KVKK", "VKKV", "VKVV","Hiçisi gabat gelenok"], answer: "KVKK" },
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },

  ],
 basym: [
    { q: "Sözdäki bogunlaryň biriniň başgalara garanda güýçli, basylyp aýdylmagyna näme diýilýär?", options: ["Güýç basymy", "Takt", "Jümle basymy","Söz basymy "], answer: "Güýç basymy " },
    { q: "Intonasiýa arkaly birleşen sözleriň jemine näme diýilýär?", options: ["Söz basymy ", "Fraza basymy", "Ekspirator basymy","Takt basymy"], answer: "Fraza basymy" },
    { q: "Söz basymyna başgaça näme diýilýär?", options: ["Fraza basymy", " Ekspirator basymy", "Takt basymy","Jümle basymy"], answer: "Takt basymy" },
    { q: "“Okuwçylar” diýen sözüň haýsy bognuna basym düşýär?", options: ["okuw- ", "- çy", "- lar"], answer: " - lar" },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" }

  ],
  düşmek_düzgüni: [
    { q: "Soňy z, l, n, r, s, ş seslerine gutarýan iki bogunly düýp sözleriň yzyna goşulma goşulanda dar çekimliler nähili ýazylýar?", options: ["Düşürilýär ", "Dodaklandyrylýar", "Uzyn aýdylýar","Gysga aýdylýar"], answer: "Düşürilýär " },
    { q: "Aşakdakylaryň haýsysy düşmek kadasyna boýun egmeýär?", options: ["Howuz, agyz", "Asyl, pasyl", "Gelin, ylym","bilim, üzüm"], answer: "Asyl, pasyl" },
    { q: "Dar çekimlileriň düşmek kadasynda çekimliden öň haýsy sesler gelmeli däl?", options: ["l, n, r", "z, t, ç", "k, p, t","z, d, j"], answer: "k, p, t" },
    { q: "Guzy, dury, süri ýaly sözlere -la /-le goşulmasy goşulanda nähili ýazylýar?", options: ["guzlamak, durlamak, sürlenmek", "guzylamak, durylamak, sürilemek", "guzulamak, durulamak, sürülemek","guzlamak, sürülemek, durylamak"], answer: "guzlamak, durlamak, sürlenmek" },
    { q: "-ýyş /-ýiş goşulyp ýasalan sözleriň soňuna çekimli ses bilen başlanýan goşulma goşulanda -ýys/ -ýiş  goşulmasyndaky dar çekimli nähili ýazylýar?", options: ["ýaşaýyşym, işleýişim, okaýyşym", "ýaşaýyşym, işleýişim, okaýyşym", "ýaşaýyşym, işleýişim, okaýyşym","ýaşaýşym, işleýşim, okaýşym "], answer: "ýaşaýşym, işleýşim, okaýşym " }

  ],
  orfoepiýa: [
    { q: "Orfoepiýa sözi grek sözünden gelip çykyp, näme diýmegi aňladýar?", options: ["Orfo-ters, epos-sözleýiş", "Orphos-dürs, dogry, epos-gepleýiş", "Orphos-dürs, epiýa-ýazylyş","Gürrüň bermek"], answer: "Orphos-dürs, dogry, epos-gepleýiş" },
    { q: "Orfoepiýa nämäni öwredýär?", options: ["Dürs ýazylyşy (ýazuwy)", "Dürs gepleýişi", "Okalyşy","Dogry ýazmagy"], answer: "Dürs gepleýişi" },
    { q: "Orfoepik normanyň esasy elementleri haýsylar?", options: ["Çekimli sesleriň uzynlyk, gysgalyk häsiýeti", "Çekimli sesleriň dar, giňlik häsiýeti", "Çekimli sesleriň dodaklanýan, dodaklanmazlyk häsiýeti, dar, giňlik häsiýeti","Çekimli sesleriň ýazylyşy"], answer: "Çekimli sesleriň uzynlyk, gysgalyk häsiýeti" },
    { q: "Aşakdaky sözleriň haýsysy orfoepik kada laýyk ýazylan?", options: ["Owadan, kömelek", "Çörek, okara ", "Owodon, çörök","Gül, bag, hyýar"], answer: "Owadan, kömelek" },
    { q: "Sözleriň edebi norma laýyklykda dogry aýdylyşlary haýsy sözlüklerde görkezilýar?", options: ["orfoepik sözlük", "orfografik sözlük", "ensiklopedik sözlük","düşündirişli sözlük"], answer: "orfoepik sözlük" }

  ],
  orfografiýa: [
    { q: "Grafika sözi haýsy dilden gelip çykandyr?", options: ["Latyn", "Iňlis", "Grek","Arap"], answer: "Grek" },
    { q: "Orfografiýa nämäni öwredýär?", options: ["Dogry sözleýiş kadalaryny", "Sözleriň dogry ýazylyş normalaryny", "Sesleriň dogry ulanyş şertlerini","Sözlük bilen işlemegi"], answer: "Sözleriň dogry ýazylyş normalaryny" },
    { q: "Sözleriň dogry ýazylyşy haýsy sözlüklerde görkezilýar?", options: ["Orfografik sözlükde", "Orfoepik sözlükde", "Türkmen diliniň düşündirişi sözlüginde","Ensiklopedik sözlükde"], answer: "Orfoepik sözlükde" },
    { q: "Türkmenistanda arap elipbiýi näçenji ýyla çenli ulanylypdyr?", options: ["1918-nji ýyla çenli ", "1928-nji ýyla çenli", "1938-nji ýyla çenli","1950-nji ýyla çenli"], answer: "1928-nji ýyla çenli" },
    { q: "Türkmen diliniň häzirki orfografiýasy, esasan, näçe prinsipe esaslanýar?", options: ["3 prinsip, olar – fonetik, morfologik, taryhy prinsipler", "2 prinsip – dogry sözleýiş we dürs ýazuw", ". 3 prinsip, olar – fonetik, morfologik, sintaktik","Hiç hili prinsip ýok"], answer: "3 prinsip, olar – fonetik, morfologik, sintaktik" },
    { q: "Orfografiýa haýsy sözden gelip çykyp, näme diýmegi aňladýar?", options: ["Grekçe orphos-dürs, dogry, grapho-ýazýaryn", "Latynça orphos-dogry, grapho-çyzýaryn", "Iňlisçe orfos-dürs, grapho-ýazýaryn","rusça орфо gürrüň bermek"], answer: "Grekçe orphos-dürs, dogry, grapho-ýazýaryn" },
    { q: "Orfografiýa nämäni öwredýär?", options: ["Dürs gürlemegi", "Dogry okamagy", "Dogry çyzmagy","Dürs ýazmagy "], answer: "Dürs ýazmagy " },
    { q: "1930-nji ýylyň maý aýynda Birinji ylmy konferensiýa geçirilip, nämäniň düýbi tutuldy?", options: ["Ilkinji türkmen diliniň", "Edebi dilimiziň elipbiýiniň", "Edebi dilimiziň orfografiýasynyň","Ilkinji türkmen elipbiýiniň"], answer: "Edebi dilimiziň orfografiýasynyň" },
    { q: "Türkmenistanyň Birinji lingiwistik gurultaýy näçenji ýylda geçirildi?", options: ["1936-njy ýylyň 18-24-nji maýy", "1934-nji ýylyň 6-9-njy oktýabry", "1932-nji ýylyň 12-17-nji maýy","1936-njy ýylyň 24-31-nji maýy"], answer: "1936-njy ýylyň 18-24-nji maýy" },
    { q: "Türkmenistanyň Ikinji lingiwistik gurlutaýy näçenji ýylda geçirildi?", options: ["1945-nji ýylyň 12-18-nji dekabry", "1951-nji ýylyň 18-24-nji maýy", "1954-nji ýylyň 6-9-njy oktýabry","1954-nji ýylyň 13-19-njy oktýabry"], answer: "1954-nji ýylyň 6-9-njy oktýabry" }
   
  ],
  ýörelge: [
    { q: "1930-njy ýylyň maý aýyndaky Birinji ylmy konferensiýada harplaryň sany näçä getirilýär?", options: ["31", "32", "33","30"], answer: "33" },
    { q: "“Türkmen dili döwlet dilidir” diýip haçan yglan edildi?", options: ["1990-njy ýylyň 13-nji maýynda", "1991-nji ýylyň 24-nji fewralynda", "1994-nji ýylyň 3-nji aprelinde","1990-njy ýylyň 24-nji maýynda"], answer: "1990-njy ýylyň 24-nji maýynda" },
    { q: "Rus dilinden türkmen diline geçen sözler haýsylar?", options: ["Tema, bedre, kürüşge", "Tertip, düzgün, nyşan", "Ruçka, pozguç, galam"," edep, edebiýat, mekdep"], answer: "Tema, bedre, kürüşge" },
    { q: "“Guşşagaz, tussam, işläp git” diýen sözleriň dürs ýazylyşy aşakdakylaryň haýsysynda dogry berlipdir?", options: ["Guşşagaz, tutsam, işläk git", "Guşjagaz, tutsam, işläp git", "Guşjagaz, tussam, işläp git","Hiçisinde "], answer: "Guşjagaz, tutsam, işläp git" },
    { q: "Goşma sözlerde ilkinji sözüň soňy çekimlä gutaryp, ikinji söz hem çekimli bilen başlananda nähili ýazylýar?", options: ["Ikinji sözüň başynda gelen çekimli düşürilýär", "Has atlardan başga sözlerde birinji sözüň soňundaky çekimli düşürilýär", "Birinji sözüň soňundaky we ikinji sözüň başynda çekimliler düşürilýär","Diňe has atlarda düşürilýär"], answer: "Has atlardan başga sözlerde birinji sözüň soňundaky çekimli düşürilýär" }
   
  ],
  leksika: [
    { q: "Leksika ylmy nämäni öwredýär?", options: ["Dildäki sözlerimizi, sözlük düzümi", "Sözlemleri, olaryň gurluşyny", "Goşulmalary, olaryň toparlara bölünişini","Söz düzümlerini"], answer: "Dildäki sözlerimizi, sözlük düzümini " },
    { q: "Türkmen dilindäki sözlerimizi döreýiş çeşmeleri taýdan näçe topara bölmek bolar?", options: ["2 topara – täze  sözlere (neologizmler) we könelişen sözlere (arhaizmler)", "2 topara – alynma we oguz türkmen sözleri", " 3 topara – umumytürki,özleşdirilen we türkmen sözleri","topar bölünişigi ýok"], answer: "3 topara – umumytürki, özleşdirilen we türkmen sözleri" },
    { q: "“El ile gelen dügün baýramdyr” diýen gadymy atalar sözüniň häzirki wagtdaky aňladýan atalar sözi näme?", options: ["Iller bilen toý baýram", "Il bilen gelen toýda baýram", "Il ýörän ýol, ýol bolar"," Biziň dilimize degişli däl"], answer: "Il bilen gelen toýda baýram" },
    { q: "Türkmen diliniň taryhyny näçe döwre bölüp görkezmek mümkin?", options: ["3", "5", "7","2"], answer: "5" },
    { q: "“Gözel ýigrimi bäş” mersiýe goşgusy kimiň goşgusy?", options: ["Oguz hanyň goşgusy", "G.Ezizowyň goşgusy", "Magtymgulynyň goşgusy","Şeýdaýynyň goşgusy"], answer: "Şeýdaýynyň goşgusy" }

  ],
  sintaksis: [
    { q: "Sözleri grammatik taýdan baglanyşdyrmagyň näçe täri bar?", options: ["2", "5", "3","4"], answer: "3" },
    { q: "Söz düzümleri esasy sözüniň haýsy söz toparyndandygyna garap, haýsy toparlara bölünýärler?", options: ["Işlik söz düzümleri, Isim söz düzümleri ", "Isim söz düzümleri, Sypat söz düzümleri", "San söz düzümleri, Isim söz düzümleri"], answer: "Işlik söz düzümleri, Isim söz düzümleri " },
    { q: "Düzüminiň durnuklylygy, erkinligi taýdan söz düzümleriniň nähili görnüşleri bar?", options: ["Morfologik söz düzümleri we sintaktik söz düzümleri", "Erkin söz düzümleri we goşma söz düzümleri", "Sintaktik söz düzümleri we erkin söz düzümleri","Durnukly söz düzümleri we erkin söz düzümleri"], answer: "Durnukly söz düzümleri we erkin söz düzümleri" },
    { q: "Sintaksis diýip nämä aýdylýar ?", options: ["Sesleri we fonemalary", "Sözleri we sözlemleri", "Söz düzümleri we sözlemleri","Sesleri we söz düzümleri"], answer: "Söz düzümleri we sözlemleri" },
    { q: "Many we grammatik taýdan baglanyşyp gelen sözlere näme diýilýär?", options: ["Söz düzümi ", "Asyl söz ", "Sözlem","Goşma sözler"], answer: "Söz düzümi " },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" },
    { q: "Birnäçe sözlemlerden düzülip çylşyrymly goşulyşan pikiri aňladýan sözleme nähili sözlem diýilýär?", options: ["ýönekeý sözlemi", "goşma sözlemi", "habar sözlemi","ýüzlenme sözlemi"], answer: "goşma sözlemi" },
    { q: "Söz düzümleri esasy sözüniň haýsy söz toparyndandygyna garap, haýsy toparlara bölünýärler?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" },
    { q: "Düzüminiň durnuklylygy, erkinligi taýdan söz düzümleriniň nähili görnüşleri bar?", options: ["Morfologik söz düzümleri we sintaktik söz düzümleri", "Erkin söz düzümleri we goşma söz düzümleri", "Sintaktik söz düzümleri we erkin söz düzümleri","Durnukly söz düzümleri we erkin söz düzümleri "], answer: "Durnukly söz düzümleri we erkin söz düzümleri " },
    { q: "Sintaksis diýip nämä aýdylýar ?", options: ["Sesleri we fonemalary", "Sözleri we sözlemleri", "Söz düzümleri we sözlemleri","Sesleri we söz düzümleri"], answer: "Söz düzümleri we sözlemleri" },
    { q: "Many we grammatik taýdan baglanyşyp gelen sözlere näme diýilýär?", options: ["Söz düzümi ", "Asyl söz ", "Sözlem","Goşma sözler"], answer: "Söz düzümi " }
  ],

  sözlem: [
    { q: "Birnäçe sözlemlerden düzülip çylşyrymly goşulyşan pikiri aňladýan sözleme nähili sözlem diýilýär?", options: ["ýönekeý sözlemi", "goşma sözlemi", "habar sözlemi","ýüzlenme sözlemi"], answer: "goşma sözlemi" },
    { q: "Gutarnykly oý-pikiri aýladýan, kommunikatiw hyzmaty ýerine ýetirýän, sözlenilýän pursatda düzülýän sintaktik birlige näme diýilýär ?", options: ["sözlem", "söz düzümleri", "sözlem agzalary","morfologiýa "], answer: "sözlem" },
    { q: "Gutarlan oý pikiri aňladýan sözleme nähili sözlem diýilýär?", options: ["goşma sözlem", "ýüzlenme sözlem", "ýönekeý sözlem ","sorag sözlemi"], answer: "ýönekeý sözlem " }, 
    { q: "Sözlemiň baş agzalary haýsylar ", options: ["eýe bilen habar", "aýyrgyç we doldurgyç ", "eýe we aýyrgyç ","aýyklaýjy agzalar"], answer: "eýe bilen habar" },
    { q: "Sözlemi emele getirmäge gatnaşan sözlere name diýilýär ?", options: ["sözlemiň eýesi ", "sözlemiň gurluşy", "söz düzümleri","sözlem agzalary"], answer: "sözlem agzalary" },
    { q: "Haýsy sözlere aýdylýan habaryň kime gňnükdirilýändigini bildirmek, oňa diňleýjiniň (okyjynyň) ünsüni çekmek ýaly sözler degişli?", options: ["ýüz tutma sözler", "giriş sözler", "jogap sözler"], answer: "ýüz tutma sözler" },
    { q: "Sözlemiň başynda we ahyrynda gelip, has belent joşgun dabara bilen aýdylanda ýüz tutma sözleriň yzyndan nähili belgi goýulýar?", options: ["nokat", "sorag belgisi", "goşa dyrnak","ýüzlenme belgisi"], answer: "ýüzlenme belgisi" },
    { q: "Haýsy sözlemde aýdylýan pikire sözleýjiniň öz garaýşyny bildirmek üçin ulanylýar?", options: ["ýüzlenme sözler", "giriş sözler", "jogap sözler"], answer: "giriş sözler" },
    { q: "Gepleşikde berilen soraga jogap bolýan how, ýok, bolýar, hoş ýaly sözler sözlemler bilen grammatik taýdan baglanyşsa  nähili sözler diýilýär?", options: ["jogap sözler ", "ýönekeý sözler", "sözlem","eýeli sözlem"], answer: "ýönekeý sözler" },
    { q: "“Eje, jan,  yaş toýuňyz gutly bolsun” sözlem nähili sözlem?", options: ["habar sözlem", "sorag sözlem ", "ýüzlenme sözlem"], answer: "ýüzlenme sözlem" },
    { q: "Sözlemler gurluşlary taýyndan näçe topara bölünýär?", options: ["6", "2", "4"], answer: "2" },
    { q: "Düzüminde bir eýe, bir habar bolup, bir pikiri aňladýan sözleme nähili sözlem diýilýär?", options: ["ýönekeý sözlem", "goşma sözlem", "eýerjeňli sözlem","eýesi daşynda sözlem"], answer: "eýesi daşynda sözlem" },
    { q: "Düzümünde aýyklaýjy agzasy bolmadyk diňe eýe bilen, habaradan düzülen sözleme nähili sözlem diýilýär?", options: ["ýaýraň ýönekeý sözlem", "ýygnak ýönekeý sözlem", "ýönekeý sözlem"], answer: "ýygnak ýönekeý sözlem" },
    { q: "Eger düzüminde baş agzalaryň ikisi hemem bar bolsa, beýle sözleme nähili sözlem diýilýär?", options: ["düzmeli ýönekeý sözlem", "goşma sözlem", "ýygnak ýönekeý sözlem","ýaýraň ýönekeý sözlem"], answer: "düzmeli ýönekeý sözlem" },
    { q: "Biz orta mekdepde okaýarys. – sözlem nähili ýönekeý sözlem?", options: ["ýygnak ýönekeý sözlem", "düzmeli ýönekeý sözlem", "ýaýraň ýönekeý sözlem"], answer: "ýaýraň ýönekeý sözlem" },
    { q: "Hemme gerekli agzasy öz içinde bolan sözleme nähili sözlem diýilýär?", options: ["doly däl sözlem", "doly sözlem", "eýeli sözlem","goşma sözlem"], answer: "doly sözlem" },
    { q: "Sözlemiň haýsy hem bolsa, bir ýa birnäçe agzasy galdyrylyp, şonuň barlygy töwerekden duýulýan sözleme nähili sözlem diýilýär?", options: ["doly sözlem", "eýesiz sözlem", "doly däl sözlem"], answer: "doly sözlem" },
    { q: "Sözlemiň eýesi öz içinde bar bolsa, beýle sözlemlere nähili sözlem diýilýär?", options: ["eýesiz sözlem", "eýeli sözlem", "doly däl sözlem"], answer: "eýeli sözlem" },
    { q: "Öz içinde we daşynda eýesi bolmadyk, onuň barlygy-da güman edilmeýän sözleme nähili sözlem diýilýär?", options: ["doly däl sözlem", "ýygnak ýönekeý sözlem", "eýeli sözlem"], answer: "ýygnak ýönekeý sözlem" },
    { q: "“Tomus günleri köplenç daşarda ýatylýar” diýen sözlem haýsy sözleme degişli?", options: ["eýesiz sözlem ", "doly sözlem ", "doly däl sözlem"], answer: "eýesiz sözlem " },

  ],
  baş_agzalar: [
   { q: "Sözlemiň many-mazmunyna dogry düşünmek üçin ilki bilen sözlemiň nämesini anyklamaly?", options: ["doldurgyjyny, aýyrgyjyny", "eýesini we habaryny ", "sözlemiň özüni","aýyklaýjy agzalaryny"], answer: "eýesini we habaryny " },
    { q: "Sözlemde özi dogrusynda sözlenip, kim?, näme?, nire? diýen soraglara jogap berýän we habar tarapyndan aýyklanýan söze näme diýilýär ?", options: ["eýe", "habar", "doldurgyç","aýyrgyç"], answer: "eýe" },
    { q: "Sözlemde baş pikiri aňladýan eýe bilen habara sözlemiň nämesi diýilýär?", options: ["söz düzümi", "aýyklaýjy agzalary ", " baş agzalary","deňdeş agzalary"], answer: " baş agzalary" },
    { q: "Sözlemiň eýesi gurluşy boýunça nähili görnüşlere bölünýär ?", options: ["tirkeş eýe", "asyl eýe", "goşma eýe","sada we söz düzümi görnüşli eýeler"], answer: "sada we söz düzümi görnüşli eýeler" },
    { q: "Eýe adatça haýsy sözlerden bolýar ?", options: ["atlardan ýa-da at hyzmatynda gelen sözlerden", "işliklerden ", "aýyrgyçlardan","doldurgyçlardan"], answer: "atlardan ýa-da at hyzmatynda gelen sözlerden" },
    { q: "Gurluşy taýyndan  habarlar nähili bolýar?", options: ["aýyklaýjy agzalar", "aýyrgyçlar we doldurgyçlar", "deňdeş agzalar","sada habarlar we söz düzümi görnüşli habarlar"], answer: "sada habarlar we söz düzümi görnüşli habarlar" },
    { q: "Sözlemiň eýe dogrusynda habar berýän, pikiri gutarnykly görnüşe getirýän baş agzasyna näme diýilýär?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },
    { q: "Sözlemiň eýe dogrusynda habar berýän, pikiri gutarnykly görnüşe getirýän baş agzasyna näme diýilýär? ", options: ["sözlemiň eýesi diýilýär", "sözlemiň habary diýilýär ", "sözlemiň baş agzalary diýilýär","sözlemiň aýyklaýjy agzalary diýilýär"], answer: "sözlemiň habary diýilýär " },
    { q: "Bir sözden ybarat bolan habara nähili habar diýilýär ?", options: ["düzmeli habar ", "goşma habar", "sada habar","tirkeş habar"], answer: "sada habar" },
    { q: "“Watanymyzyň geljegi – biz” sözlemiň habary haýsy söz toparlaryndan?", options: ["çalyşmalardan", "işliklerden", " atlardan"], answer: "çalyşmalardan" },
    { q: " Habar – sözlemiň haýsy agzasyna degişli ?", options: ["aýyrgyç we doldurgyç ", "deňdeş agzasy", "baş agzasy","aýyklaýjy agzasy"], answer: "baş agzasy" },
  ],
  aýyklaýjy_agzalar: [
    { q: "Sözlemde eýe bilen habardan başga olaryň manylaryny anyklaşdyrmaga hyzmat edýän sözlere sözlemiň nämesi diýilýär ?", options: ["baş agzalary", " aýyklaýjy agzalary", "aýyrgyçlary","doldurgyçlary"], answer: "aýyklaýjy agzalary" },
    { q: "Sözlemde öz aýyklap gelen atlarynyň  manysyny anyklaşdyryp, sypatlaryň soragyna jogap bolýan aýyrgyçlar haýsy aýyrgyçlardyr?", options: ["sypat aýyrgyjy ", "san aýyrgyjy", "işlik aýyrgyjy","at aýyrgyjy"], answer: "at aýyrgyjy" },
    { q: "Aýyklaýjy agzalar haýsylar ?" , options: ["aýyrgyçlar", "eýe we habar", "aýyrgyçlar we doldurgyçlar ","doldurgyçlar"], answer: "aýyrgyçlar we doldurgyçlar " },
    { q: "Haýsy söz toparyna degişli sözler sözlemde eýelik-degişlilik aýyrgyjy bolup gelýär?", options: [" atlar", "işlikler ", "sanlar","sypatlar"], answer: " atlar" },
    { q: "“Müň gaýgy bir iş bitirmez”  diýen sözlem haýsy aýyrgyja degişli?", options: ["eýelik-degişlilik aýyrgyjy", "sypat aýyrgyç ", " at aýyrgyç","san aýyrgyç "], answer: "san aýyrgyç " },
    { q: "Haýsy aýyrgyç kimiň, nämäniň, niräniň haýsy diýen soraglara jogap bolýär.", options: ["eýelik-degişlilik aýyrgyjy", "sypat aýyrgyjy", "at aýyrgyjy"], answer: "eýelik-degişlilik aýyrgyjy" },
    { q: "Atlaryň, çalyşmalaryň yzyndan hakdaky, hakyndaky baradaky, barasyndaky, babatdaky, babatyndaky ýaly sözsoňy kömekçiler getirilip ulanylanda ikisi birlikde sözlemde haýsy aýyrgyç bolýar ?", options: ["degişlilik aýyrgyjy", "at aýyrgyjy", "hakyndalyk aýyrgyjy","meňzetme aýyrgyjy "], answer: "hakyndalyk aýyrgyjy" },
    { q: "Eýelik-degişlilik açyrgyjy forma taýyndan haýsy düşüm görnuşinde gelip biler?", options: ["baş düşüm", "eýelik düşüm", "wagt orun düşüm","ýöneliş düşüm"], answer: "eýelik düşüm" },
    { q: "Haýsy aýyrgyjy gürrüňiň obýektini ýagny kim hakyndadygyny, näme hakyndadygyny, nire hakyndadygyny bildirýär?", options: ["işlik aýyrgyjy", "degişlilik aýyrgyjy ", "orun aýyrgyjy","hakyndalyk aýyrgyjy"], answer: "hakyndalyk aýyrgyjy" },
    { q: "Şahs bildirmeýän hökmanlyk hem ortak işlik formalary atlary aýyklap gelende işlik formalaryndan bolan aýyrgyçlara haýsy aýyrgyçlar diýilýär ?", options: ["sypat aýyrgyjy ", "işlik aýyrgyjy", "san aýyrgyjy","sypat aýyrgyjy"], answer: "işlik aýyrgyjy" },
    { q: "Näme ýaly, kim ýaly diýen soraglara jogap berip many taýyndan bir zadyň başga bir zada meňzedilýändigini aňladýan aýyrgyçlara näme diýilýär?", options: ["sypat aýyrgyjy  ", " meňzetme aýyrgyjy ", "hakyndalyk aýyrgyjy","işlik aýyrgyjy"], answer: "meňzetme aýyrgyjy " },
    { q: "Barlyk aýyrgyçlarynyň manysy?", options: ["işlikleri aýyklap gelýän sözlerdir", "eýesiz sözleme aýdylýar", "sypatlary aýyklap gelýän sözler barlyk aýyrgyjydyr","aňlanylýan düşünjäniň bardygyny gökezýär"], answer: "aňlanylýan düşünjäniň bardygyny gökezýär" },
    { q: "“Dag ýaly altynyň bolanyndan aşyk ýaly akylyň bolsun”", options: ["işlik aýyrgyjy ", "san aýyrgyjy ", "meňzetme aýyrgyjy","hakyndalyk aýyrgyjy "], answer: "meňzetme aýyrgyjy" },
    { q: "Ýokluk aýyrgyç näme?", options: ["aýyrgyçlaryň görnüşleri diýilýär", "aýyrgyç bilen doldurgyja diýilýär", "gymyldy hereketiň ýokdugyny aňladýar","aňlanylýan düşünjäniň ýokdugyny gökezýär"], answer: "aňlanylýan düşünjäniň ýokdugyny gökezýär" },
    { q: "Orun aýyrgyjy diýip nämä aýdylýar?", options: ["aňlanylýan düşünjäniň ornuny görkezýän sözlere", "bir zadyň meňzedilmegine aýdylýar", " gymyldy hereketiň ornuny aňladýar","wagt-orun düşüm goşulmasyny kabul eden sözlere"], answer: "aňlanylýan düşünjäniň ornuny görkezýän sözlere" },
    { q: "Sözlemiň habaryna, işlikden we işlik häsiýeti bolan bir agzasyna baglanyp, şolary açyklap gelýän sözlere näme diýilýär ?", options: ["aýyrgyçlar", " doldurgyçlar ", "baş agzalar ","deňdeş agzalar"], answer: "deňdeş agzalar" },
    { q: "Öz aýyklaýan sözünden aňlanylýan gymyldy-hereketiň wagtyny bildirýän we haçan?, näwagt?, näçe wagt? diýen soraglara jogap bolýan doldurgyja haýsy doldurgyç diýilýär?", options: ["wagt doldurgyjy ", "orun doldurgyjy ", "çykyş doldurgyjy","ýeňiş doldurgyjy"], answer: " wagt doldurgyjy " },
    { q: "Wagt-orun düşümde gelen atlar, atlaşan sözler sözlemiň işlikden bolan agzasyny aýyklap gelende gymyldy-hereketiň kimde, nämede, nirede bolýandygyny görkezýän doldurgyja haýsy doldurgyç diýilýär?", options: ["ýöneliş doldurgyjy", "çykyş doldurgyjy ", "wagt doldurgyjy","orun doldurgyjy"], answer: "orun doldurgyjy" },
    { q: "Daşynda, içinde, aňyrsynda, bärsinde, üstünde, aşagynda ýaly sözler öňlerinden gelen eýelik düşümdäki söz bilen birlikde haýsy doldurgyç bolýarlar?", options: ["çykyş doldurgyjy ", "wagt doldurgyjy", "orun doldurgyjy"], answer: "orun doldurgyjy" },
    { q: "“Suwa girmezden öň (haçan?) çykmagyň barada alada et” diýen sözlem haýsy doldurgyja degişli?", options: ["wagt doldurgyjy", "orun doldurgyjy ", "ýöneliş doldurgyjy","ýeňiş doldurgyjy"], answer:  "ýöneliş doldurgyjy" },
    { q: "", options: ["maksat doldurgyjy", "hakyndalyk doldurgyjy", "sebap doldurgyjy","orun doldurgyjy"], answer: "Iň kiçi many bölegi" },
    { q: "“Biziň ussat ýazyjymyz B.Kerbabaýewiň “Yhlasa myrat” eseri dogrusynda pikir alyşdyk” diýen sözlem haýsy doldurgyja degişli?", options: ["ýeňiş doldurgyjy", "ýöneliş doldurgyjy", "hakyndalyk doldurgyjy","meňzetme doldurgyjy"], answer: "hakyndalyk doldurgyjy" },
    { q: "Gymyldy-hereketiň ugryny, nirä ýönelendigini kime, nämä gönükdirilýändigini görkezýän doldurgyja nähili doldurgyç diýilýär ?", options: ["Ýöneliş doldurgyjy", "Ýeňiş doldurgyjy", "Wagt doldurgyjy"], answer: "Ýöneliş doldurgyjy" },
    { q: "Ýöneliş doldurgyjy haýsy düşümdäki sözlerden bolýar ?", options: ["baş düşüm", "ýöneliş düşüm", "wagt-orun düşüm","çykyş düşüm"], answer: "ýöneliş düşüm" },
    { q: "Näme hakynda?, nire hakynda?, näme dogrusynda, kim dogrusynda, nire dogrusynda? diýen soraglar haýsy doldurgyja degişli ?", options: ["wagt doldurgyjy", "çykyş doldurgyjy", "hakyndalyk doldurgyjy"], answer: "hakyndalyk doldurgyjy" },
    { q: "Kim sebäpli, näme sebäpli diýen soraglara jogap bolýan doldurgyçlara nähili doldurgyç diýilýär?", options: ["sebäp doldurgyjy", "hal-ýagdaý doldurgyjy ", "maksat doldurgyjy","hakyndalyk doldurgyjy"], answer: "sebäp doldurgyjy" },
    { q: "Çykyş düşümde gelen atlar, atlaşan sözler sözlemiň işlikden bolan agzasyny aýyklap kimden, nämeden, nireden diýen soraglara jogap bolup gelýän doldurgyja nähili doldurgyç diýilýär? ", options: ["orun doldurgyjy", "çykyş doldurgyjy", "wagt doldurgyjy"], answer: "çykyş doldurgyjy" },
    { q: "Çykyş düşümdäki sözlerden, kimden?, nämeden?, nireden?, näçeden? diýen soraglara jogap bolup, köplenç, gymyldynyň başlanan nokadyny, bir zadyň alnan ýerini, onuň nämeden edilendigini görkezýän doldurgyçlar haýsydyr?", options: ["maksat doldurgyjy", "wagt doldurgyjy", "orun doldurgyjy ","çykyş doldurgyjy"], answer: "çykyş doldurgyjy" },
    { q: "Kim sebäpli?, näme sebäpli?, kim üçin?, näme üçin?, näme etmäge? ýaly soraglara jogap bolup, gymyldy-hereketiň ýüze çykmagynyň sebäbini ýa-da maksadyny görkezýär doldurgyçlar haýsylar?", options: ["sebäp-maksat doldurgyjy", "orun doldurgyjy", "çykyş doldurgyjy"], answer: " sebäp-maksat doldurgyjy" },
    { q: "“Kümüş seniň üçin jorap ördi” - diýen sözlemde sebäp-maksat doldurgyjyny görkeziň", options: ["jorap üçin", "Kümüş ördi", "jorap ördi"], answer: "jorap ördi" },
    { q: "Hal-ýagdaý  doldurgyjy haýsy soraglara  jogap bolýar ?", options: ["nädip?, neneňsi?, nähili?, näme bilen?, kim bilen?", "kim sebäpli?, näme sebäpli?, kim üçin?,", "kimden?, nämeden?, nireden?, näçeden?","kim aly?, näme ýaly? Näme üçin?"], answer: "nädip?, neneňsi?, nähili?, näme bilen?, kim bilen?" },
    { q: "Sözlemiň işlikden bolan agzasyna aýyklap gelende iş-hereketiň nähalda ýüze çykandygyny bildirýän doldurgyja nähili doldyrgyç diýilýär ?", options: ["ýeňiş doldurgyjy", "hal-ýagdaý doldurgyjy ", "maksat doldurgyjy","wagt doldurgyjy"], answer: "hal-ýagdaý doldurgyjy " },
    { q: "Ýaly, deýin, dek, kimin sözsoňy  kömekçileri bilen gelen atlara, atlaşan sözler sözlemiň işlikden bolan agzasyny aýyklap gelýän doldurgyja nähili doldurgyç diýilýär?", options: ["orun doldurgyjy", "sebäp-maksat doldurgyjy ", "hal-ýagdaý doldurgyjy","meňzetme doldurgyjy"], answer: "meňzetme doldurgyjy" },
    { q: "“Öýüň içi tamdyr ýaly gyzypdyr” diýen sözlem haýsy doldurgyja degişli?", options: ["orun doldurgyja ", " hal-ýagdaý doldurgyjy", "deňeşdirme doldurgyja "], answer: "deňeşdirme doldurgyja " },
    { q: "Sözlemiň işlikden bolan agzasyna baglanyp, şolary aýyklap gelýän we gymyldy-herekete degişli ýagdaýlary görkezýän sözlere haýsy agza diýilýär?", options: ["baş agza ", "aýyrgyçlar ", "doldurgyçlar"], answer: "baş agza " },
    { q: "“Atanazar aga hiç zat görmedi, eşitmedi” diýen sözlem haýsy agza degişli?", options: ["deňdeş doldurgyç ", "deňdeş habar ", "deňdeş eýe "], answer: "deňdeş habar " },
    { q: "Sözlemiň deň hukukly agzalaryna nähili agzalar diýilýär", options: ["deňdeş agzalar ", "deňdeş eýeler ", "deňdeş habarlar"], answer: "deňdeş agzalar " },
    { q: "Sözlemiň habary birbada birnäçe eýäni aýyklap gelýän eýelere nähili eýeler diýilýär ?", options: ["deňdeş aýyrgyç ", "deňdeş doldurgyç  ", "deňdeş eýe","deňdeş sypat"], answer: "deňdeş eýe" },
    { q: "Eýäniň eden iş hereketiniň birbada birnäçesini görkezýän agzalara nähili agzalar diýilýär ?", options: ["deňdeş habar ", "deňdeş eýe ", "deňdeş aýyrgyç","deňdeş işlik"], answer: "deňdeş habar " },
    { q: "“Köňüller, ýürekler bir bolup başlar, Tartsa ýygyn erär topraklar, daşlar” diýen goşgy setirleri haýsy agzalara degişli ?", options: ["deňdeş at", "deňdeş habar ", "deňdeş aýyrgyç ","deňdeş eýe"], answer: "deňdeş eýe" },
    { q: "Sözlemiň deň hukukly agzalaryna nähili agzalar diýilýär?", options: ["deňdeş eýeler ", "deňdeş agzalar ", "deňdeş habarlar ","deňdeş düşümler"], answer: "deňdeş agzalar " },
    { q: "Eýelik düşümde gelen atlardan we sypatlardan, sanlardan, çalyşmalardan, ortak işliklerden bolan aýyrgyçlara toplumyna sözlemde näme diýilýär?", options: ["deňdeş eýeler ", "deňdeş doldurgyçlar", "deňdeş aýyrgyçlar"], answer: "deňdeş aýyrgyçlar" },
    { q: "“Mal kowýan, sygyr gaýtarýan oglanlaryň sesleri çasly çykýardy” diýen sözlem nähili aýyrgyçly sözlem bolup biler?", options: ["deňdeş habarly", "deňdeş eýeli", "deňdeş doldurgyçly","deňdeş aýyrgyçly"], answer: "deňdeş aýyrgyçly" },
    { q: "Ýöneliş, ýeňiş, wagt-orun, çykyş düşümlerde gelen sözlerden, hallardan we hal işliklerden bolan deňdeş agzalara näme diýilýär?", options: ["deňdeş doldurgyçlar", " deňdeş aýyrgyçlar", "deňdeş eýeler","deňdeş habarlar"], answer: "deňdeş doldurgyçlar" },
    { q: "“Ol wagt onuň egninde ak köýnek-balagy, başynda maşyn tiken tahýasy, aýagynda köneräk galoşy bardy” diýen sözlem nähili sözlem?", options: ["deňdeş eýeli", "deňdeş doldurgyçly sözlem ", "deňdeş habarly"], answer: "deňdeş eýeli" },
    { q: "Sözlemde ulanylýan deňdeş agzalary jemläp görkezýän söze nähili söz diýilýär?", options: ["sorag söz ", "ýüzlenme söz ", "jemleýji söz"], answer: "jemleýji söz" },
    { q: "Jemleýji söz deňdeş agzalardan öňürti gelse, ondan soň nähili dyngy belgi goýulýar?", options: ["iki nokat", "nokat", "ýüzlenme belgisi"], answer: "iki nokat" },
    { q: "Jemleýji sözüň manysyny anyklaşdyrmak gerek bolanda, onuň manysyny anyklaşdyrýan deňdeş agzalar jemleýji sözüň niresinde gelýär?", options: ["soňunda ", "yzynda", "arasynda"], answer: "soňunda" },
    { q: "«Ortadan ýokary, daýaw, tutuş bir ýigit gapydan ätledi” sözlemde deňdeş agzalaryň haýsyny görýärsiňiz?", options: ["deňdeş doldurgyçlary", "deňdeş eýeleri", "deňdeş habarlary","deňdeş habarlary"], answer: "deňdeş habarlary" },
    { q: "Eger deňdeş agzalar jemleýji sözden öň gelseler, deňdeş agza bilen jemleýji sözüň arasynda nähili belgi goýulýar?", options: ["nokat", "iki nokat", "kese çyzyk"], answer: "kese çyzyk" },
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },

  ],
  morphology: [
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" }
  ],

  morphology: [
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" }
  ],
  morphology: [
    { q: "Morfema näme?", options: ["Iň kiçi many bölegi", "Ses", "Sözlem"], answer: "Iň kiçi many bölegi" },
    { q: "Bigaýrat sözündäki bi- , nämäni aňladýar?", options: ["Root", "Prefix", "Suffix"], answer: "Prefix" }
  ],
};



const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const categorySelect = document.getElementById("category");
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const resultText = document.getElementById("resultText");
const currentNum = document.getElementById("currentNum");
const totalNum = document.getElementById("totalNum");
const toggleThemeBtn = document.getElementById("toggleTheme");
const xpBox = document.getElementById("xp");
const progressFill = document.getElementById("progressFill");


startBtn.addEventListener("click", () => {
  const cat = categorySelect.value;
  if (!cat) {
    alert("Kategoriýa saýlaň!");
    return;
  }
  const pool = questions[cat];
  currentQuestions = shuffle(pool).slice(0, 20);
  currentIndex = 0;
  score = 0;
  totalNum.textContent = currentQuestions.length;
  quizSection.classList.remove("hidden");
  document.querySelector(".start-screen").classList.add("hidden");
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

retryBtn.addEventListener("click", () => {
  location.reload();
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

function showQuestion() {
  document.getElementById("progressFill").style.width =
  ((currentIndex + 1) / currentQuestions.length) * 100 + "%";

  currentNum.textContent = currentIndex + 1;
  if (progressFill) {
  progressFill.style.width =
    ((currentIndex + 1) / currentQuestions.length) * 100 + "%";
}

  const q = currentQuestions[currentIndex];
  questionBox.textContent = q.q;
  optionsBox.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.addEventListener("click", () => {
      const allBtns = optionsBox.querySelectorAll("button");
      allBtns.forEach(b => b.disabled = true);
      if (opt === q.answer) {
  btn.classList.add("correct");
  score++;
  xp += 10;
  
}
 else {
        btn.classList.add("incorrect");
        allBtns.forEach(b => {
          if (b.textContent === q.answer) {
            b.classList.add("correct");
          }
        });
      }
      nextBtn.disabled = false;
    });
    optionsBox.appendChild(btn);
  });
}
function showResults() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let level = "Beginner 📘";
  if (score >= 15) level = "Advanced 🎓";
  else if (score >= 10) level = "Intermediate 🚀";

  resultText.textContent =
    `Netije: ${score}/${currentQuestions.length}
Dereje: ${level}
Toplanan XP: ${xp}`;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}