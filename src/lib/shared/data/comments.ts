const comments = [
  {
    id: "1731673088-1",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sweta Fasada",
    comment: "Bardzo polecam ☺️ smaczne ciasta to napoje. Bardzo miła atmosfera i fajne właściciela 🤗…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIa3n3cbKn2yFcNVQRaSIoqKDAvzIKbqvAoLGK1v3XsMojS3g=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-2",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna Mur",
    comment: "Bardzo miłe miejsce i sympatyczny właściciel! Kawałeczek Białorusi w Warszawie.\nNajdelikatniejszy sernik baskijski, bulbaczki pyszniejsze niż w dzieciństwie, orzeszki jak od mamy, no i cynamonki w czwartki ...mmmm... A jak chcę poczęstować…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW1GuKX7N0Cavi_l_PaswD7a3dudBl5EMOYfXhKhw68tNZJg8H0=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-3",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Jacek Kostkowski",
    comment: "Pyszne lody pistacjowe, czekoladowe oraz ciastko kokosowe 👌…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWhLz6J73iepGJdPlxGB6HnvKjNSlvNgEf1JeFj0z7k0FwQ4rMxtg=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-4",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Michał Chruściel",
    comment: "Fantastyczna i przytulna kawiarnia, gdzie można wypić przepyszną kawę i zjeść prawdziwe, białoruskie wypieki, rozmawiając przy tym po białorusku.\nЖыве Беларусь!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK1W3nasi85CQ07itGoIdTMB-m3V6twa87MpnHWAXtkSmQcsw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-5",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dzidki Koszalek",
    comment: "Bardzo miłe miejsce koło wiatraka. Polecam kawę “po beduińsku” z przyprawami oraz makaroniki i ciasto kopiec. Miła atmosfera i miły właściciel gwarantują dobre wspomnienia. Aż żal że nie ma tam więcej przestrzeni i widoku na to co się dzieje na ulicy!!! Będziemy wracac!!!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIur_qPBfznojM9V_uHtQ7KgH8dUsDHLEScIF5U-jzXYJSCpA=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-6",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Hanna Borowska",
    comment: "Bardzo fajne miejsce i super atmosfera. Nie jest to po prostu kawiarnia, gdzie można napić się dobrej kawy, lecz także przestrzeń do ciekawych rozmów i dyskusji, także z właścicielem. Must visit dla każdego Białorusina w Warszawie (i nie tylko dla Białorusinów!)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWPsSEyD9R_jM-0JG7-1DpAfdsnpibJRhvLg8Ydgv05UwlchKK-=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-7",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Stasia De",
    comment: "Mimo że kawiarnia nie znajduje się w centrum, to ceny są nadal wyższe niż w wielu kawiarniach w centralnej części miasta.\nUważam, że wypieki i kawa nie są warte tych cen.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLbtHkTaNPM5YuNzmzFV6MqCcQdDDb-DHol_68S5CQcx0Mz_w=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-8",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Weronika Milczarek",
    comment: "Pyszna kawa, przemiły właściciel, miejsce z klimatem 😊…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLaAmoL8jXNpqO2O2VKMUqRO0ULpKoRgHkr3HUTk1b8-hDrsw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-9",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Mar Lip",
    comment: "Najlepsza obsługa i ciastka na wiatraku! Zawsze uśmiechnięty właściciel. Warto wracać do tego miejsca na kawę i słodkości ❤️",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK5zuvoTShUTSZgI5mz79STmLRoZRumAJjXDTF_IkA-rOPBMw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-10",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anatoli Tarasiuk",
    comment: "Pyszna kawa, mili ludzi.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW0dQGkzSi3w6dMcbnDa7mt2oCRJRWhLr7-l9NHGR-T1vvL5Nun=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-11",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna Traczyk",
    comment: "Wspaniałe miejsce ! Kawa po beduińaku przepyszna, wspaniale się obserwowało proces parzenia ❤️ właściciel - cudowny człowiek, opowiadał o historii założenia tego lokalu, bardzo otwarty i widać że kocha to co robi. Bardzo zauroczyło mnie to miejsce i wrócę tam na pewno nie raz ❤️",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJSErFfFcL86s0o2hsVomwzCbL51jmr55QH-l8mvxC15w3CWg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-12",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Helena K",
    comment: "Pyszna kawusia i wypieki🤤 moje ulubione kawowe miejsce na warszawskiej Pradze)…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKqD3qODT4-m5MrCIYE88JD6KEQ2AjimEIoKvL1FJeJ-YxJ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-13",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Adrian Okołowicz",
    comment: "Nowe miejsce na mapie Pragi. Żona kupiła dzisiaj kilka rzeczy na próbę i byliśmy bardzo zadowoleni. Kawa americano mocna, aromatyczna, dla naszej dwójki posłużyła za podwójne przedłużone espresso. Bułeczka z ziemniakami (!) pozytywnie nas…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV6q_2Al7rXvtE9LrroQO4gWxjEAUe_6R2zt6aIYLNoVLLL1Vd9KA=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-14",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Edyta K.",
    comment: "Na kawiarnię trafiłam przypadkiem, ale już teraz wiem, że będę często wracać. Bardzo dobra kawa, a ciasta wprost przepyszne! Ciasto z wiśniami i makiem cudowne! Pan właściciel przemiły. Naprawdę warto zajrzeć :).",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWJhH4NfLjdml9PAai5V9iP7gBwwNuP6AqvMV3glrqftzkQNDP4=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-15",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna a",
    comment: "Wpadłam po drodze do kawiarni na kawę. Kawa przepyszna, aromatyczna, delikatna - tak jak lubię :\u2060-\u2060)\nDziękuję również za pozytywną energię jaką zabrałam ze sobą w świat wychodząc z…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK4Oy5bduWSKVDeqgDsP7z1A4KudqPBzoXTpuLZ6ZKoFQDJ2Q=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-16",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agnes Agnes",
    comment: "Kawa świetna, w weekendy nawet parzona na piasku. Do tego pyszne domowe wypieki i cudowna atmosfera 🥰 Wpadam często, polecajka!…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXFeC6cPiG3HUCJ2EYX9hIM2CQxq4N3RaAXHYtJ37kUj_BPjbR4=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-17",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Paulina D.",
    comment: "Cudowne miejsce :) Przesympatyczny Pan opowiedzial mi na miejsci o kuchni bialoruskiej i ich wypiekach. Wzięłam paczkę z Foodsi i dostalam buleczke z pieczarkami, kawalek ciasta, ciasteczko orzeszek i gorace kakao na wynos. Wszystko pyszne i swiezutkie - z pewnoscia wrócę sprobowac pozostale wypieki :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLy_nhDznMw8eDGqTFY9OwjDugVyDHLOVecGKrVEnSmP5f1Kw=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-18",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Iwan Khramchenko",
    comment: "Super miejsce żeby napić się kawy w drodze do pracy czy szkoły. RAF (kawa) pyszna i cenowo jest git. Wypieki świeże i jak najbardziej domowe. Rozmowa z właścicielem Eugeniem, który właśnie robi tam kawę, była przyjemna i miła))). Polecam",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUs4Xn0VH5UYRqrQhzaZJJ_oML3wReqUo7X1LBdhGxFkYAjFlg=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-19",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Filip Aleksander",
    comment: "Przepyszna kawa (zamawialiśmy espresso + flat white) i super sympatyczny Pan za ladą",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXNlycdedAs0Ml_kOi-Qf8O_HnXK3FpKBjMSjV7blZ8TashEso=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-20",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Karolina G",
    comment: "Naprawdę super miejsce prowadzone przez ludzi z pasją. Przemiły właściciel, który robi wszystko aby klient czuł się dobrze i aby to miejsce żyło. Do tego przepyszne, domowe wypieki. Polecam!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJsTCpHitCa2kDRa02tdTBvkwd2CGh-XXjPO8A_MVkHG7A7Rg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-21",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aliaksandr Shalak",
    comment: "Cudowne miejsce, pyszna kawa",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLVGNWMjXIhyFppdL4dcBRwvFzm4AIZBc1UHirR4GOHFJAefA=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-22",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Grzegorz Chamernik",
    comment: "Mały punkcik z pyszna kawą z bialoruskimi chlebkami i niewielkimi wypiekami cukierniczymi. Gienek zrobi ulubioną kawę i umili oczekiwanie rozmową. Fajna, godna polecenia, kawodajnia na grochowie.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXZTDIdhQa7XL5BtXRCPT1pysR8MW7zWFSy-XuotWQpQ4ayCq3e=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-23",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Elżbieta Sydorenko",
    comment: "Przepyszna kawa, polecam :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVig4VwKFzE-aU5jyjpF-Ic331VCx_M4ZHiNaOlvP4kWIwKa1Zu=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-24",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Wero Kamińska",
    comment: "Bardzo miły Pan z obsługi, pyszna Raf Coffee, i do tego jeszcze możliwość drukowania - super, bardzo kibicuję temu miejscu :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX3jxJKwFNOyQ1bpTfxI7uqyTHt38leMX38W6O6Q4KPQrzzMtzV=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-25",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "EziLLL",
    comment: "Miła obsługa, mocna kawa. Kakao podobno też niczego sobie",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVxDlBKR7B-nyPI8s5t_LpD_XBfH_iEXyv1ENpeVO-B7b7L1eI=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-26",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Julia S",
    comment: "moja ulubiona kawiarnia w okolicy. wypieki są przepyszne, a atmosfera na miejscu wyjątkowa :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK3pblq2siy6OsSYMbxaHQTX_mJXCYaWsPV_QzAI6O6-iOvpg=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-27",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna Węgłowska",
    comment: "Wspaniałe miejsce :) wypieki absolutnie wybitne, te cynamonki...o rany 😅 najgorzej, że mieszkam bardzo blisko. Będę okrągła jak bułka w konsekwencji :)…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX7DY8wz9FncgUr-q0LiOi_3jpXIRTgUlTX-Pq9QsVG9OBhE1pY=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-28",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maja Pszczółkowska",
    comment: "Profesjonalna obsługa i super klimat :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJY_mpvhi5rfVpUDZvjQpr1ZPdcZ6qxil7QL5TNHHn6oyZXOA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-29",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "em ka",
    comment: "Byłam jakiś czas temu, kiedy jeszcze lokal nie był zaznaczony na mapie. Cynamonki obłędne:) Właściciel bardzo miły :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUovQzzwroWsuDy2bZVFRJ_jfhnwchylHfciGLZ0xvP1hPN8V0y=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-30",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Witold Oleszkiewicz",
    comment: "Bardzo dobra kawa, smaczne wypieki i miła obsługa, polecam!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVlKys4Iy9mVxaBrX9f6upJ9_Aqxb6ju8PTcbRmhkpzRgiBx8s=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-31",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Walery Stukacz",
    comment: "Super miejsce\nPolecam kawe po Beduinsku\nCzekam na Napoleon...)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocID7ZRk_zqCXy3vvUJ97GJwn_9Nnw-SeJza_lr1pvOPx9djDA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-32",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Karol Chomicz",
    comment: "Bardzo sympatyczna obsługa, dobra kawa! Polecam!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLzyY0E0jd4Lyf7A5wakTG8pEnqcnRE8pGoVwVwVfL9LlYMVQ=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-33",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aleksandra K",
    comment: "Pyszna kawa i makaroniki. Bardzo miła obsługa. Będę wracać, polecam! :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI9xWgIGUSBmhUP0CiEBfJ3L1FeN9Yq7s4atxrxRTM9_tmFN9E=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-34",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agnieszka",
    comment: "Świetna kawa i ciasto ! Przyjemna atmosfera, aż chce się wracać!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKEOIWvDVjUhtN3Iqc6RJSQn7imlSpLhq3XnGFlo0syD2gL0A=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-35",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Mikołaj Pecheniuk",
    comment: "Tu znalazłem prawdziwe białoruskie wypieki i najlepszy chleb, który jadłem w Warszawie. Polecam wstąpić na kawkę i deser;)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJF_yfC_AkjURChMv7KyIZ3o7VDNQagneFa1Vuq4NxvPx4fbUI=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-36",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Bartosz Kwietniewski",
    comment: "Pyszne wypieki - będziemy wracać! Polecam ciasto cytrynowe!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbaLl3YIPN_4SPZmszWDKSMNOFMyPfzWm-79AlH_pdU4lekBzyuw=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-37",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Concierge Platinum Residence",
    comment: "Polecajka! Ale bądźcie uważni, bo wejście można przegapić :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUyCZuVBG5RJENGvXQSJ9EQYKFvvCLzx_Bw3S7pre-jgtr7iUU=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-38",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Julia Zamkowska",
    comment: "Bardzo fajne i przyjemne miejsce",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWjj6S9bZA7JjclYPMGW1beodnuA8AxHuj6tcsZVeW2e20wN43_=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-39",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Adam Wróbel",
    comment: "Spoko kawiarnia, syrniki dostępne na wynos i na miejscu też spoko.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX0KDttc3xPM8tc2Rh5AzmgUZZ1pju4w4plspSb_wjKn0cSId4=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-40",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "dannie",
    comment: "sympatyczny właściciel i smaczne produkty, wzięłam paczkę z foodsi i dostałam do niej kakao 🥰…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVZtcjnx-n2QOcV4MNJF1RkZwdW26Wa9QMWp1dSbAkcNNoL834=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-41",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agnieszka Mrozowska",
    comment: "Bardzo klimatycznie , smacznie.\nNajlepsze kakao.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKNs32W33OlTB_PsyR3vtkkM1gIg4VceEZ8C-2US75D4zGcmg=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-42",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agatex",
    comment: "Wspaniałe chlebki, pyszne ciasteczka i porządna kawa!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVzBaT9RjVHudqsbIXRwQZhStOS44O15Okk9d-VyD4PehMtOubZ=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-43",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Zmicer Jahorau",
    comment: "Polecam!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX-iAimi7ni0tW5qzDAyOH4R7AiSQ1lUYbku6MZo9VFsZ0Vqq-g=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-44",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ania",
    comment: "Super miejsce oraz bardzo ciepli i otwarci właściciele :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLmtmfgrg2Wa56uSCnm2mcwjx7En3IAyNzFF2fl04vTVXtQZw=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-45",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Antoni Zabielski",
    comment: "Dobra kawa i miło ogólnie.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXzYPz6BEaUPSXaue6ZTrkpZ5wEKWuAU1XCMkt5stgtWR06x4U=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-46",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sebastian Suliborski",
    comment: "Pyszna kawa po beduińsku :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXNdAWm79n-VoL39cZ42sHAiC9wYp60DRVx81aCTIUjTyaD7TcH=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-47",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Justyna Kisiel",
    comment: "Wszystko smaczne a właściciel uroczy. :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK5CjvSZg_3PLmVOgVfhVqLEsXIjcsNYRM2vMYek2-lvUicbg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-48",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna S",
    comment: "Super makaronik i kawa mocna",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIJKXm9IqmlnWQfqOZOMbEGoCXNpF24VXcj3jGuhgTKKuFUWQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-49",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Tetiana Khotiaintseva",
    comment: "Przepyszna kawa po beduińsku ❤️",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUchVRtyom8lG6jLR92wZX4fXHMW7uAUa6Ae30sC7IVHuuEeLNA=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-50",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "A. S.",
    comment: "Świetne miejsce na kawkę i dobre wypieki.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX30gsc7bxtZQo01R_j59y8CJfKdbiV0UVA2C6SFHltJ7PHwDi9=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-51",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "JaVi",
    comment: "Bardzo smaczne ciastka!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVTQeNsqPoAZVlX1qFfxunq4g853VZYsIn6KK2BUQ7nBQ9PPaFnwA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-52",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Яна Трачук",
    comment: "Miłe miejsce, stwożone  z miłością .",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKr0gc8rXDu06iOY783AkUcg5aB3sJta_9J_yRd8ZdEuQOnHw=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-53",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Karolina Alkemade",
    comment: "Przemiłe miejsce z pysznymi słodkościami",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWVp_qQQD_TDhLRtlYaYVZARsEwwM290mJlPx1ZUJILtkgGdMpTrQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-54",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agnieszka Borelowska",
    comment: "Pysznie i przytulnie : )",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKndbvJ6dx2WkbdRjlTSpeh9ov-qPQYZbEeeBsnNklTIOpJkQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-55",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Tatiana",
    comment: "Super miejsce🫶…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLJ6jGMV0E1f9eN6kSmKK2EG4JUx5BOhxXZhkt8h1gqqYpmaQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-56",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Nazarii Chekh",
    comment: "Rewelacyjne wypieki",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJu6FmdZgcDzhdIErm_hrCzQ_9YRQvQguj4rhQ4WrmR9Y6BzA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-57",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Hubert Barański",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWwuSSJA_GtJ4M2zT2NL6kw7zQu03RfDkJP61SAqPwOTWEW15CU=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-58",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Мария Синявская",
    comment: "Dzisiaj odwiedziłem tę kawiarnię, od razu po wejściu uderza mnie przytulna atmosfera i życzliwość personelu. Wnętrza urządzone są w tradycyjnym stylu, z elementami sztuki ludowej i autentycznymi detalami, co stwarza poczucie zanurzenia się…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJpN_2P7OYIKI09nCDp8XTRbg0ZrFOVFiAd_Oq2ptAKi77v-A=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-59",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Yuliya Abramava",
    comment: "Zawsze tu przychodzę dla atmosfery domu ❤️🌺 a moje ulubione ciasto „Milk Girl” na stałe zagościło w naszym domu podczas wakacji. Niedawno pojawiła się Matcha (i jest przygotowana z wysokiej jakości Moya Matcha), kto ją zrozumie, ten zrozumie…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIL38VKaSLBfxs96fXt8cw9EaMPmW3TkRb-y_Cf9GzqE6pZjw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-60",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ax Sidor",
    comment: "Najlepsza kawa jaką próbowałem w Polsce. Szczególnie przypadły mi do gustu słomki i orzechy z skondensowanym mlekiem, zupełnie jak w domu, smak dzieciństwa (ku mojemu ubolewaniu, słomki udało mi się kupić tylko raz na trzy wizyty w tym…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJwNylhXqG3ceG_zzT9BLaPqMrpwlpW0vfbP1_ppxCvGIqrrQ=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-61",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Peter",
    comment: "Jedzenie nie jest jadalne. Nawet gdyby ktoś był zainteresowany, nie ma szans przeczytać menu, bo jest ono namalowane jakimiś prymitywnymi znakami, a nie napisane zrozumiałym językiem, literami. Miejsce wygląda bardzo dziwnie, jakby było…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJl4cFRE2S2Ww2nanULjS-wQXn0icZPZIlYCzRL6dkYYGliwQ=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-62",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Arman Begoyan",
    comment: "Niesamowici ludzie! Smaczna kawa i piekarnia!\nA także świetne miejsce do ćwiczenia białoruskiego :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVxtDb02QLkhtvlEhflyZWR0pToQhJLFAZcSozU56Qm-y-E4Emp=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-63",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Marina Ivantsova",
    comment: "Moja ulubiona kawiarnia 😍\nUwielbiam dostawać tutaj kakao kokosowe i wypieki.\nTeraz są też mrożone pierogi i pierogi. Radzę spróbować wszystkiego 😉…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWx5FOvbnh67fGnpeCJ6-aAyeZy04gyeUvz7x3egUnYXyCinrdX=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-64",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Yeva Sargsyan",
    comment: "Nie kupuj tutaj mrożonej matcha, będziesz tego żałować. Proszek matcha był bardzo ziarnisty, bez smaku, o dziwnej konsystencji, zamiast gładkiego i przyjemnego napoju.…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLEFRd8-dZRsve0jkFB0ERrUczGRfCaegeOr2mBl9wR771ckA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-65",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "alice_ ch",
    comment: "Świetne miejsce i bardzo smaczna kawa :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUcEbgv8zc0PH6bAkn09pJsbzmVqAGS8CMP2u0VwiV962jOwJIG=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-66",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna Stefanska",
    comment: "Super miejsce. Specjalne podziękowania dla właściciela Jewhena za rozmowy, humor, białoruskie opowieści. Dziękujemy za pyszny poczęstunek i kawę. Wszystko naprawdę od serca. Właścicielom życzę pomyślności, rozwoju i sił!☕️😍…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW689at4dUHkcUCh3a8gUYRk9zkq1duR3u1ucYP-Xt7WGYtb_66bg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-67",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Svietlana Kostjukevitch",
    comment: "Niezwykle uduchowione miejsce! Najlepsze na świecie orzechy i słomki do mleka skondensowanego, doskonała gorąca kawa i bardzo szczera właścicielka🌞 a na dziedzińcu jest też stolik❤️…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXyoT_eJNcmPTV2RHJaUPpnJ7CzTsVI-s3d8a3mX0uxWJ1wtEQk=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-68",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Кристина Малышиц",
    comment: "To moja ulubiona kawiarnia. Bardzo lubię kakao z mlekiem kokosowym))) Jest mnóstwo różnych domowych wypieków, są orzechy i rurki ze skondensowanym mlekiem. Psy dozwolone)))",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJT9WNXwhl4kghCHJwXeJw0aNMoveIG6PnvmR6TzQIu-v3eDQ=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-69",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dominic Khadasouski",
    comment: "W tej kawiarni panuje niesamowita białoruska atmosfera, która nie zawsze jest obecna nawet na samej Białorusi. Kawa jest pyszna na żywo, podobnie jak smakołyki. Szczególnie polecam spróbować sernika, jest absolutnie pyszny. Wrócimy tu w przyszłości!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVVlrwt8KgNWtQ5tZOp9KQfqtFSJpRIbaQ4QfobgbYTMqdxYXXVyQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-70",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ruby Beeard",
    comment: "Wszystko super, kawa pyszna, sernik fajny, ale bez stolików na ulicy jest tłoczno",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLlgl2ouRE7Wg6yS7oCv5pOVlvV99VZOu6bEUtmQxCAvG_4eA=w72-h72-p-rp-mo-ba6-br100"
  },
  {
    id: "1731673088-71",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aliakasandr K",
    comment: "Pyszna kawa, miła obsługa, miejsce do siedzenia, ciasto miodowe, orzechy i ser na przekąskę",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUwdmYC1Qblcxxa88pwGAxstowGuh511iuToK9l4gNgAYEppZRNyQ=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-72",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Violetta Piuta",
    comment: "jedno z najlepszych białoruskich miejsc w warszawie\npyszne kakao i ciasto\npoleciłem to miejsce wszystkim, którzy chcą poznać białoruską kulturę i napić się wspaniałej kawy",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUlnErp1yeIOrpS0_UdLW1dRjqdrUcrQZ_Po4B3i9swJrPThTTHZw=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-73",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Kiryl Varanovich",
    comment: "Bardzo miło jest mieć takie miejsca blisko domu",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWVsKOHDD_99dp8JzBpGA1ExCrBo5kVMlFse4e3LRbI7J-IqA5RnA=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-74",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alena Druzhynina",
    comment: "Bardzo smaczny chleb, ciasteczka i kawa. Niestety w środku nie ma gdzie usiąść, ale mam nadzieję, że w przyszłości będzie to możliwe.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXNpzjQJPMTTlx4GGkt-TLbJxbQvVW3UGg4WCVvktntfiLN_bI6=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-75",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Olga Zyl",
    comment: "Pyszna kawa, miła atmosfera, uśmiechnięta obsługa🫶🏼…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI5tTEgffpdAPgTsbXK_bTZtjeMIgSu7na-zP2bto2Pz2AS2PpZ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-76",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Pavel Staurouski",
    comment: "Kawa sama w sobie była fantastyczna\nWarto przejechać się po mieście\nPrzydałaby mi się nawet nasza firmowa zniżka\nDzięki",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVxqg40fNh1A73oQIZmH43yHuwMQUjPZaeqvkDhiq629jW5xcMX=w72-h72-p-rp-mo-ba6-br100"
  },
  {
    id: "1731673088-77",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Tati Ta",
    comment: "Domowa atmosfera. Świetna kawa. Słodycze z dzieciństwa. A w weekendy wyrafinowani miłośnicy kawy mogą spróbować kawy beduińskiej!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLXXFg1B_wKeqfUHIAH3ppaGK5bP06ussq5Eq-JTxhP4FDP7A=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-78",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Александра Савина",
    comment: "Obłędnie pyszne ciasto marchewkowe! Nie jadłem jeszcze nic smaczniejszego",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW4gGs0goytBaQVCvNKwrI5f6IRLD19gt7wttstJoboIDSCJMo=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-79",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Mari Mir",
    comment: "Małe, ale bardzo przytulne miejsce z wyjątkową atmosferą!\nRóżne białoruskie desery, pyszna kawa - szczególnie po beduińsku.\nMożna u nas także kupić pyszne mrożone pierogi!\npolecam!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLALoyc3cHWsmOPnyl0qVrih7E_z4H7q880ugCHFAg2rdeI_A=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-80",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Елена М.",
    comment: "W domu bardzo fajna atmosfera, szczególnie miło, że udało nam się znaleźć tort wielkanocny jeszcze tego samego dnia przed zapaleniem świateł w świątyni :)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV08U4aBrwE-hDOa-si5FKQtBX-6tEAqrsdaFhLB7fs6erjgKKAAg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-81",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Oleksandr Yuvko",
    comment: "Miło, że w białoruskiej kawiarni można usłyszeć język białoruski.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJcrmKxGQ3WtujZnQDCW1ek6ZGw7Wt3o6Mk1gTnXNqHIHs-4A=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-82",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sophie Bircumshaw",
    comment: "Ładne i przytulne miejsce z pyszną kawą!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWBKcqTydD4QO00fkYlHZBK6yLJVt5ndY11i8z0Esjl-91aoKLoFw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-83",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alexandra Novikava (chillsash)",
    comment: "Ciasto z sokiem pomarańczowym i czekoladą - miłość od pierwszego wejrzenia!\nKameralna atmosfera, miła obsługa, język białoruski - wszystko, czego może potrzebować Białorusin tęskniący za Ojczyzną i pysznymi domowymi orzechami z…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLu9mfNKP9fRe5ViQtjxFdBGVp45uXZ1ypDfeRhDGWYSxW16M8=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-84",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Roman Soleado",
    comment: "Doskonała kawa beduińska i pyszne ciasta!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWLk1jTQWPwcCZUFcF_mGpH1HFHkowJvLFqHMuh8Nt-1Wyvm36G=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-85",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Александр Жежерун",
    comment: "Kawa wyśmienita, Napoleon jak mawiała moja żona „smak dzieciństwa”, tubka z mlekiem skondensowanym, to mój smak dzieciństwa :)…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVOTLdr__vCnQXNNYwutIsuhaKkf5tasoF83SMJRRHT-vn66sM=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-86",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Екатерина Юревич",
    comment: "Przytulna kawiarnia, pysznie, przyjemnie! Na pewno przyjedziemy ponownie!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJthJFldP4Hng2IpMYhnesXdPE3j8yTMWMC0WVXyvc8n8ZYaA=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-87",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Анастасия Гордиенко",
    comment: "Bez przesady: to najlepsza kawiarnia w Warszawie! Orzechy ze skondensowanym mlekiem smakują jak dzieciństwo! A kawa jest boska!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXBKaTTYxOuQ1e5Cn-eu3mVfZS8h3dn0nbcRLk5efuAiTQk3wPw=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-88",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Unknown Unknown",
    comment: "Mała i przytulna kawiarnia z bardzo przyjaznymi ludźmi. Ceny są oczywiście trochę wysokie, ale nie szkoda w szczytnym celu, zwłaszcza przy tak pysznym serniku.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL6YoF8hUOCoia8ff3_Llsxg8Nq9Nc3Y8lpCosCJTh8TCl94A=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-89",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Оксаночка Мартынова",
    comment: "Jest tu przytulnie, jak w domu, słomki i orzechy oraz wszelkie wypieki i każda nowość są bardzo smaczne!)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLS6h2a4ne43jVNRFSxFKlNRra52nYo0Ft8bGZyKhj8q7Cijw=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-90",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aaron Mare",
    comment: "Najlepsza kawiarnia w Warszawie ⚪️🔴⚪️…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKP_BuPFVCuQVqViFke4vMyslF8w4ixabln1zUu499FuLmk=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-91",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ivan Murashka",
    comment: "Bardzo piękne miejsce!\nBiałoruś żyje!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXEgYTuLikwbQMr3O99SGYNyFgGUu7l5pkvwxXPGioE5DvR_Ds=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-92",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ivan Prytsko",
    comment: "Najlepsze kakao jakie kiedykolwiek próbowałem w Polsce. Pyszne desery! Przyjazny personel.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXGatFNJC7Iuy7AHKYJLt2qUjlTeQB92A_y3DDX3phMGm3BI3nZ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-93",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Георгій Пугачоў",
    comment: "Cudowne miejsce z przyjazną białoruskojęzyczną obsługą. Kiedy mam wolny czas, staram się odwiedzać i zawsze wzbudzam pozytywne emocje (i słodycze).",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW1WITIf-fLQYLRffWt5SBzr9lm0y9qu26SPPb8WxU88kjskQPG=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-94",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Lena Krechyk",
    comment: "Pyszna kawa i bardzo sympatyczna barista Katya :) Jeśli pijesz kawę w Pradze, to tylko tutaj)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKNxDi2XpXeyUyaI6MNiN0E1_cMZYrYPSwMzBu9ZKZSQU-DZA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-95",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "A M",
    comment: "Pyszna kawa i pyszne desery. Mój ulubiony deser to tubka z gotowanym skondensowanym mlekiem.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUl6WFGqaDhextT5KeXqoJNVqg9ddIfGDD7BNX7JfzW6uUQJDHu=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-96",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Slava Popovich",
    comment: "pyszne)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWUuJsg1gi18fwm4jrGwdY81k2f0DdLZymDfZQrt128FUrX_7p7=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-97",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Piotr Jurewicz",
    comment: "Małe świetne miejsce. Przyjemna atmosfera, dobra kawa i pyszne ciasta.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLmnjUvLsFU6uRGBrr7MvHWmEMjs5HvdGKfBCbXlbZUm_Oqbg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-98",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alexandra Sh",
    comment: "Cudowne miejsce ❤️❤️❤️",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWJczt9797YaWvhFYjirrV6N85SFs_W0VhDWgk6IKq2BUJf5WY=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-99",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Lalala Bibibi",
    comment: "Dobra atmosfera. Personel jest bardzo miły. Jedzenie jest bardzo smaczne 👍🏻👍🏻👍🏻…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWnYW2Mfs63PlmJbJqOcznrm9QBAfPc6wkgpgoi3GaK6DFj2EhJ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-100",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Gleb Belyaev",
    comment: "Bardzo przytulna kawiarnia! Pierwsze wrażenie to po prostu WOW) Gorąco polecam)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX8qd-a4xRgTOClJ5bYZCPM0fk3hq0dQw2QleNBFx8lE0n4rkiZXQ=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-101",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Vladyslav Chentsov",
    comment: "Pyszna kawa beduińska i Napoleon",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWPn8y98kXGmmU5Rc12G06jcOGMKCdgVyZ0FjtF7QvwikF7uL5i=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-102",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andrei Burtsev",
    comment: "Pyszne kakao i przyjemne wypieki, przytulna atmosfera i przyjazny personel",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKTOXQemOpJw32pt90e2tgB22SJdGV5VJHjRs0fk-ZHjX3d6-o=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-103",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Иван Сирович",
    comment: "Świetna kawa i miły personel. Czego jeszcze potrzeba do dobrego miejsca :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIahk4UDo036btlMFTRkMJ1H5okaIrDM47kV4KsI9wnWiUNsQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-104",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Михаил Жуковский",
    comment: "Bardzo fajne dla Białorusinów!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLVzn050pTjVj0DrYax06A1nLx88xXnZZhOurXnJzhQDD-vIA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-105",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Natallia Pliashkun",
    comment: "Bardzo miła, domowa obsługa, rewelacyjne desery i pyszna kawa 🤍…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX1LEAU3Wz6sJdz5gWxa0cicFBpNBNx1gzMR5hp0JdGG--DSnpTpg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-106",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Misa Trisch",
    comment: "❤",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJL1Sgt0gxypO4_MFMx-w25DyGQuPyXxWtI1h112wCu_GKF8A=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-107",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dariusz Rubio",
    comment: "Małe świetne miejsce z dobrej jakości kawą!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKfqWv46ZDXIQ70sjEHsQ0O35gF7PyTAsXRkMMUTwAyspEogg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-108",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Hanna Yanovich",
    comment: "Świetna płaska biel! Bardzo miła obsługa, jest karta stałego klienta - bardzo miło)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLVoTC081u20TJNRLiApDGTSCV-zop8REUbqtTjcOS-llDRfA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-109",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Arseni Enin",
    comment: "Pyszna kawa i miły personel",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK7jjDVPxlMKZhK_zhWAL0zI6u2hMpnlE9sXf6mGQPHEsCkYt8=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-110",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ivan Kachailo",
    comment: "Jest pysznie i działają w niedzielę 👍 Polecam…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV5HrAvoY27DBDxLzdJqN9-MBdaNqjze0rrfDR2HZoj0enuMJXb=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-111",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maria Mukha",
    comment: "Pyszna kawa i desery, uduchowiona atmosfera.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX9Jy7BgJShIURWe66uFG11NZvjn5-6VD6mTr9zTPP-tWwiGEHc=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-112",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Victoria Nazimova",
    comment: "Bardzo smaczny miód pitny i rurki z mlekiem skondensowanym",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKNtAj2kbeiNazbbBfQ24Y6Dgu0sCl4sPF9s9gYiYte3jyEr38=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-113",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sasha G",
    comment: "Wszystko smakowało! Dziękuję ♡\n\nBiałoruś żyje!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXVMo3HpMBck_vERgQ51DBPInEVTFiXltxR6D0yNAzk4UgwyxLX=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-114",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Шалбан Монгуш",
    comment: "Kawa jest niesamowicie dobra. Polecam",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVUkRjj6UQIgfuMtNsofQRy6F4N3I3q41RyIMJFGZsjQmPbaEQ=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-115",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "MsKitty 333",
    comment: "Ulubione kakao",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXAmaMDZVsiqz3Bpn7BgbJT_yB0JghAdaadIoYZmtP30trKZe75=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-116",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Michael Sotnikov",
    comment: "Pyszna kawa. Mili właściciele.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUWyl_9w4qz0SHvPzEMmBGGrROmpS8s1nu-Lu_ofd1QaLn4xPOd=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-117",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Darya Rudman",
    comment: "Mochi najsmaczniejsze w Warszawie 😍…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXy0BruXDL4_4P3g9GRRQ09RdCQ9OQ27ZmS5etAB9rB7FZPZipR=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-118",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Пай Пай",
    comment: "Super",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJudA2D_HGd5pFRVXgKm4XSEb8_819sIVyy1iF_3cf-mReI=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-119",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Kate Kazubovich",
    comment: "Miękki makaron, przytulne miejsce ✨",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJFR1T5hQXbFGc2gdtfDP8XtZ4re97TQUyKDEg8kXs4sv0JaA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-120",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alexander Trasheater",
    comment: "Białoruś żyje! ⬜🟥⬜ z Zelvą w sercu!…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXh9386x-9RIg1P0IXH0CcpG-kHgDz_NzbDB8fwws3JKBYx6JMC=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-121",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Roman Kotov",
    comment: "Orzechy ze skondensowanym mlekiem to po prostu ogień!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWiWIRlON5Iao8w6uhgNEE2dBWX1iEDxZrAujKblaQ0cgT6QHxr=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-122",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andrus Kamisarau",
    comment: "Wszystko jest idealne, jak w domu.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVmW3rMgbYYS40j528FThYBYgYpfUCv9N-dkgbyHVHaxQ75jCFvGQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-123",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alexander Mihailovich",
    comment: "Polecam wszystko super!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWB86fO_8b-aUVh4ycYr4sLwE7SeH0S9ABbMHZrDpPkH2XpOUgJ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-124",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Vit H.",
    comment: "Zyje!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWADfzIZ74pJ7AHTwIg705PsvQw2oWcqpCa1h1jl2A92uvJw1pD=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-125",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sveti Hai",
    comment: "Są tacy słodcy :)",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLDtpGmhOtNxSq5XE18ZiShkJW7nVBFR1NDcCPOwTcjbq6KNx5M=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-126",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aliaksandr Anufryieu",
    comment: "Najlepsza kawa",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXD8o_bG5EfV05Ljqjk90Ipa6qr368aCPQ4pTHJknDrpeu7Ca_F=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-127",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "vitold adolf",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVg2uDJPgn8EIV2GnYMR2RsDheA3R_vUpFhW685uqgUihBkhZ4=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-128",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Albert Jerzy Wierzbicki",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVwoiJmgW8KIHIgTFRUKQzcvJFBuqnWz4F5p_5C8FaWEG_nYJeYHA=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-129",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Алина Войтухович",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKNeVdNXwDGZ8V2l0nPPRxNqjQJIPm71VzFYSjfLh8X9vBNHw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-130",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "クジマ",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCvKCD9CsiKTndHyjrpo2tXrhDzu5UituDPevc7hQiApZ0Rmlf=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-131",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Инна Симонова",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWlPf52CFzWb6U_cZKDNZqK6m_-Ym809Z6z_oyI8e1FcWc_dmQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-132",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Nikita Bialou",
    comment: "Bardzo dobrze",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLyxWQaiiFOUz-IpQZZ1zH4zFqGlZ39u0UL2qqrPTVQr1iGKHE=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-133",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dominik Różewicz",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVDljU6aEiAXYaEfKXG9B58hA7fesvYR83Hj2JheGtXtgx-OkI=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-134",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Makar Shulgin",
    comment: "Do mleka skondensowanego!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWMOeCM_KJIIGYZIzW701luljgV9NQ4Xr3gJTaqCGSj8QxwYj-n=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-135",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maksim List",
    comment: "Świetne miejsce!)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWB7bCkS8MWe_9MnjVG1jaTmGACQ3QegdSkvXhFX2NY-Vv4GW9I=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-136",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Yauhen Ardynets",
    comment: "Kawa 🔥\nMrowisko 🔥\nSer 🔥…",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLqBLIJum2JhzHEIOXrl26GNFLW-jiqS4GyFkAQOV3MYDBFeQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-137",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Евгений Кравченко",
    comment: "Świetne miejsce na wypicie pysznej kawy i co ciekawsze zjedzenie bardzo smacznego słodkości.\nCiasta, makaroniki, serniki - wszystko jest bardzo smaczne i robione jak…",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUuBa_53qTC4rdROTh4ORYUnOFkyjuF3sPU5JE44gsFquK8AwoBeA=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-138",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aliaksandr Furs",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKMuQ18iOfv8LPjZU0jqD0gJAuE2w42kRf3JKZNYwCXupfwTQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-139",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Radek Kaminski",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWgMIsRLnHfVnGGTY9XPqmqi99GS5GoW-fLJpxw7zR_1UFXMB-C=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-140",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Aneta Bartsevich",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXmXPE2xjXHqKxbb8d6SIRJO2iMtUEg2Is61T26ahxqaIrY3co=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-141",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Helena Kravchuk",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJRMm8n6Db7Piarmi9Qcty41Wip8yzJls1A9V-3V8QiaUpW_w=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-142",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maria Tw",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIpiF2X0MIrfTHKvTvu6jpLqqEL0esmi-NW_efhxgl_r-qCwA=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-143",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Selene Sergeenko",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVvQaricMGeKjfpPJiEfKQjQx6lTccZ4lZ2MqiOTlIIIvE-Jc6z=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-144",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "MrKrol",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVsarXhklsJBipmzXcOBlhRH81cNhIkZIfw7qhRuRKQCN8k6D8=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-145",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Oleg Venger",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ2gduHG6zn91mACkQTwSMG2Hff_KSSZ4LtRGCLYEQIvsWY3A=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-146",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "ALIAKSANDRA VASKO",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVLcfYHaxU8voJbnqvEIjONNbt9-ejjfsStyKq0ShX1uTnZpwH0=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-147",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Milena Kuczkowska",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKdOFhP4fNhMpzFgXQeTQmBKMASF47nnU3OjqaZbnLEzTIxmw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-148",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andreas Stefaniv",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIbsXAps7Jx0IQC4Ep0-W3LUEXpuUF237og6_LiWSR_tQBXig=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-149",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Grzegorzewski",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUfsWK0EIkWkCi0F-ZSIGrTMj_PWwX4yALynaPVAZ18niTHBn0=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-150",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Zmicier Chviedaruk",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV6bmKcjpZs1x-VMQowMjnhDAtRXjrW57p0bcyRGJ7DevMr0GQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-151",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maria Dzemyachenka",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI6NmMwFPOikYCTnpfcGYMpJ4dufryfuELI5ahfXVzFRC5WwQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-152",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Raman Kolas",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVdmFE0L0i_Prct2AHfP4YTyhDtUCiOGvFloN5AeqZea305eg8EQA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-153",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Rekach",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWqdWeIqJqkpSDoGb2WTuCD9wMYNQDf_Dxs0Gysam7_fus_ZiBazA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-154",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Anna Zygner",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIuRATGSuK2iEmITSnsbfGJC2uEdWLBBY-LkRLZ4m__J48wgA=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-155",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dzianis Buranka",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLFwsgLxrZoNxiPdaq4ASuZP4IKS7DBCp7noQfAXJnUAX-YHg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-156",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "dranik",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW5QmreD2ONpt8ddYB-_qV1Iem15FC5xvVYalGftrTCCl0UYHBx=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-157",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ilya Uleichyk",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUeIGno50ogDnWYicqrluB6_Jb6CeRU6gNzJPWIKiUpM9zho9Wn=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-158",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "J K (HonestlySleepy)",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKwIwRwRzx6c7LrIDGHeQ9IOYPrJ5KWrJMQgByVkcGaEPNpfQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-159",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Nadya Zhernak",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXZI7BKQNGkWOdRhyxhJJfTfcPDWFVh85p_sufCFnfIQ6VNR5FH7g=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-160",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Clyde Barrow",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLxgiV08JC9PUPEuU1HDy28E-Oq-SAvNH00s1RkbI2OPrk_OA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-161",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Semyon Minich",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWxmk754kB4_PbxIS_ywUz-XKtSK83aniqhtXBWugghQILgkVJ8=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-162",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Olga А",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVweUMrxFAXKFQQ8sy5aH88DsIy1K6VZAxXi0a-8FwWpkCmW47R=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-163",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Vladimir Telesh",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXLQLrh9o9cNV8I_rJvuqnQZRwv19virhbnsrpL7bffYY7Jf1sFLQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-164",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dmitry Chubrick",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWR4HH6ZreCxDtYa7Rs32VXmCxhXmKdXYp4nNh59Rg-QythGKqf=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-165",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Just Pol",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWBEG_RzjVQchWofMawXuv7si9IbhNzA3dzgpQooenoJsurYxtE=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-166",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Michał Medwid",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWLExXCMFpgzbTZ5yyyGhE-nO4EjfCxgG1j0HIK0kcFPKhluQ8H=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-167",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Diana Kishkurno",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI6chsVE4ekSTHnDZWjkRY8Zr0XGfZrIKzBDlThs3K7xfTB=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-168",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Palina Shtanko",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWj1SvLx4YpyTDemBSAiyhlajfDO_cumGZmg6JZKzsGMYrLRaaz=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-169",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Adam Czajkowski",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWNajrTP2XPwjm31pTYiKbb9GyDO6Yee2zqO4PR-YK4WoLVaZ8=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-170",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andrei Mukha",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUTUWpFHE9LjGKgQJ4keTmUYmonfLrkutIZ0FwzVVuCfx6gVJLZ=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-171",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Nasta Yurkevich",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXMcihexbWw681WmRXnqBe7-scJrsjJa3IetDEz261-03sVLRlF=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-172",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dziana Yanouskaya",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKgvbTH9fdo8sWDCX6EhzEEb8Pj6rTWT76_R70Uy_-2t5Frfg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-173",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Agnieszka Jamróz",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIdYI9KgZCGI8Ctap5cz8-LtM-7d4d8KpOBlO3rtGzsyZNsuA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-174",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Peter Povod",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUIM5Jh4XEKam9pzdal2O6sN1FYRZU0ypFcQXhGUFIjN_fHwYqi=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: "1731673088-175",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Yulia Baranchuk",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW0GfrcysFmpzgbTavjlC7WxIcKc00peJgLyoHIfzCvjrUjgIJf=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-176",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Kerry Gun",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ-8Jl2T9ap55XPeiaUNRuXdJULJD41OKUbThTkf_RnEPikwg=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-177",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Masha Burlakova",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUpagnGisLDyKJqXI7gvvI5KGvZlgohaxVR-kwuU79BglrEl_3pwA=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-178",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ewelina Lis",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVDhIyoa2IlCB8ZJlQ8A9IsWYSxlE23r4nr8duZm_G5die4v-I4=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-179",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andrew H.",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKtaGmkN7GxbE7i_BiGX9lz0YdorPJoXBrNrLvSw_icwuP95g0=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-180",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Diana",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXsGowYXVNgElp7TbcG9NWc7iT3-2f23czyiWrl-CB0YMQhNpgT=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-181",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Einar Buerengen",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKF1lB4AmqinLeDhls1dXhbaT2rhs44hlceREMyqDR-Fk8OYw=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: "1731673088-182",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dzianis Bunevich (Denis)",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJDBNBg9mDB8ZWLiXbc8hYbGERlAxoVYKlV_2ZfxMmJZhm_nQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-183",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Alex Ch",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIwoG3xtBkXctLecQu09q8B7uQljJHwkkfRM3TX1gcejhsR3w=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-184",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Volha Tsvirko",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL-kGOz9r3OEurRKUeojsEtAzjj5iqcGDSSaLmm4aQotvdAfQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-185",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Dmitry",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJnSxFLVyV0ogf771TPo0B2jY9CDKCsDbQ1sSxYqVhqwOyEXg=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-186",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maksim Bibik",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIsD_s8Jcq3wcAmoIfC6s4YRmSUHySpNLcg1WQA4StVzbTDcA=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-187",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Maksym Rusanovskiy",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI1TJhBdkdMWlHv9mXfuZKzi4MkUynvONJdrMhlwQ4GTx6GCQ=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-188",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "takeuchi there",
    comment: "niesamowita obsługa, jedzenie i kawa! gorąco polecam!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKHBHC36syJXGU-j4AoB_-0uVR-c2IkPpFA2L1FmhwUQ2usNQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-189",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Zlata Kalatskaya",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIjHfDSgDKy8m8VeWM6bny7u8cE_7L6PcjYJg0beqaadi9hMw=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-190",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Sergiusz Parkhats",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUgdJBWQK7j7MZaQA0d3KYOo_v-GVQr2AYFkrc8KA_Hy45w8XqfGQ=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-191",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Yuliya Samailouskikh",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWgdEbL24UFEd3-Nl6FChqL4OOm9UV_D44y9fFaF0jwdFmkW_4v=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-192",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Andy Roze",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXYUIxwB1p29mmsTDrkos1bF3c_EdFX-pn9TFiTEZG2yAnWZref=w72-h72-p-rp-mo-br100"
  },
  {
    id: "1731673088-193",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "Ori Reed",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX0QpTf4JABgHXeqOupOsb_Fgun5QtYaHbeAAPpeEADX-_8TiCH=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: "1731673088-194",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "In Ko",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXdnSLVFso5XqIzToquSOqDLyHLrsU_qi541NH6XrQAUjc6HU4C=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: "1731673088-195",
    url: "https://www.google.pl/maps/place/Kawiarnia+KAKAO.+Bia%C5%82oruskie+wypieki%2BDRUK/@52.2458079,21.0796515,17z/data=!4m8!3m7!1s0x471ecd30c8ae19e3:0x9d75933981438ec0!8m2!3d52.2458079!4d21.0796515!9m1!1b1!16s%2Fg%2F11tjv2s7f5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
    fullaname: "MirrorNER",
    comment: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKkl5nGV2OTc8k88hN1ZMp5odNmZ9dYC6qkmK6a1UsxHBQIYBU=w72-h72-p-rp-mo-br100"
  }
]


export default comments;