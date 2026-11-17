/*
 * Songlap Ramadan Planner Generator — content data.
 * All religious text is quoted verbatim from the Qur'an or from
 * widely-transmitted, well-known hadith collections (source noted
 * for every dua). Nothing here is invented religious text.
 * Artwork and content depict OBJECTS only — no people, no faces.
 */
(function (global) {
  'use strict';

  /* ---------- UI strings: English + Arabic ---------- */
  var STRINGS = {
    brand:          { en: 'SONGLAP DEALS', ar: 'SONGLAP DEALS' },
    coverTitle:     { en: 'Ramadan Planner', ar: 'مخطط رمضان' },
    coverYear:      { en: 'Ramadan 1448 AH · 2027', ar: 'رمضان ١٤٤٨ هـ · ٢٠٢٧' },
    belongsTo:      { en: 'This planner belongs to', ar: 'هذا المخطط لـ' },
    moonNote:       { en: 'The start of Ramadan depends on the sighting of the moon. If Ramadan begins a day earlier or later where you live, change the start date in the settings and generate the planner again.',
                      ar: 'بداية رمضان تعتمد على رؤية الهلال. إذا بدأ رمضان في بلدك قبل هذا التاريخ بيوم أو بعده، غيّر تاريخ البدء في الإعدادات وأعد إنشاء المخطط.' },
    overviewTitle:  { en: 'Ramadan at a Glance — 30 Days', ar: 'رمضان في لمحة — ٣٠ يوماً' },
    fasted:         { en: 'Fasted', ar: 'الصيام' },
    prayers:        { en: 'Prayers', ar: 'الصلاة' },
    quran:          { en: "Qur'an", ar: 'القرآن' },
    dayOfRamadan:   { en: 'Day {n} of Ramadan', ar: 'اليوم {n} من رمضان' },
    suhoorEnds:     { en: 'Suhoor ends', ar: 'ينتهي السحور' },
    iftarTime:      { en: 'Iftar time', ar: 'وقت الإفطار' },
    prayerTracker:  { en: 'Prayer Tracker', ar: 'متابعة الصلاة' },
    fajr:           { en: 'Fajr', ar: 'الفجر' },
    dhuhr:          { en: 'Dhuhr', ar: 'الظهر' },
    asr:            { en: 'Asr', ar: 'العصر' },
    maghrib:        { en: 'Maghrib', ar: 'المغرب' },
    isha:           { en: 'Isha', ar: 'العشاء' },
    taraweeh:       { en: 'Taraweeh', ar: 'التراويح' },
    quranGoal:      { en: "Today's Qur'an", ar: 'قرآن اليوم' },
    quranTarget:    { en: 'Goal', ar: 'الهدف' },
    quranDone:      { en: 'Read', ar: 'قُرئ' },
    water:          { en: 'Water', ar: 'الماء' },
    glasses:        { en: 'glasses', ar: 'أكواب' },
    duaOfDay:       { en: 'Dua of the Day', ar: 'دعاء اليوم' },
    todo:           { en: "Today's To-Do List", ar: 'قائمة مهام اليوم' },
    mealPlan:       { en: 'Meal Plan', ar: 'خطة الطعام' },
    suhoor:         { en: 'Suhoor', ar: 'السحور' },
    iftar:          { en: 'Iftar', ar: 'الإفطار' },
    snacks:         { en: 'Snacks', ar: 'وجبات خفيفة' },
    goodDeedToday:  { en: "Today's good deed", ar: 'عمل اليوم الصالح' },
    gratitude:      { en: 'Today I am grateful for', ar: 'أنا شاكر اليوم لـ' },
    notes:          { en: 'Notes', ar: 'ملاحظات' },
    week:           { en: 'Week {n}', ar: 'الأسبوع {n}' },
    weekDays:       { en: 'Days {a}–{b}', ar: 'الأيام {a}–{b}' },
    weekGoals:      { en: "This Week's Goals", ar: 'أهداف هذا الأسبوع' },
    focusLine:      { en: 'Focus', ar: 'التركيز' },
    khatmaTitle:    { en: "Qur'an Khatma Tracker", ar: 'متابعة ختم القرآن' },
    khatmaIntro:    { en: 'One juz per day finishes the whole Qur’an in Ramadan. Tick each juz as you complete it.',
                      ar: 'جزء واحد كل يوم يختم القرآن كاملاً في رمضان. ضع علامة على كل جزء عند إتمامه.' },
    juz:            { en: 'Juz', ar: 'الجزء' },
    day:            { en: 'Day', ar: 'اليوم' },
    done:           { en: 'Done', ar: 'تم' },
    readingPlan:    { en: 'Reading Plan', ar: 'خطة القراءة' },
    lastTenTitle:   { en: 'The Last Ten Nights', ar: 'العشر الأواخر' },
    lastTenIntro:   { en: 'Among these nights is Laylatul Qadr — a night better than a thousand months. Increase worship on every night, especially the odd nights (21, 23, 25, 27, 29).',
                      ar: 'في هذه الليالي ليلة القدر، وهي خير من ألف شهر. أكثروا من العبادة في كل ليلة، وخاصة الليالي الوترية (٢١، ٢٣، ٢٥، ٢٧، ٢٩).' },
    night:          { en: 'Night', ar: 'الليلة' },
    qadrDuaTitle:   { en: 'The Dua for Laylatul Qadr', ar: 'دعاء ليلة القدر' },
    extraWorship:   { en: 'My worship plan for these nights', ar: 'خطتي للعبادة في هذه الليالي' },
    deedsTitle:     { en: 'Good Deeds Tracker', ar: 'متابعة الأعمال الصالحة' },
    deedsIntro:     { en: 'Tick a box each day you do the deed. Small deeds done every day are the most beloved.',
                      ar: 'ضع علامة كل يوم تقوم فيه بالعمل. الأعمال الصغيرة المداومة عليها هي الأحب.' },
    mealsTitle:     { en: 'Meal Planner — The Whole Month', ar: 'مخطط الطعام — الشهر كاملاً' },
    shoppingTitle:  { en: 'Ramadan Shopping List', ar: 'قائمة تسوق رمضان' },
    shopDates:      { en: 'Dates & drinks', ar: 'التمر والمشروبات' },
    shopSuhoor:     { en: 'Suhoor items', ar: 'أغراض السحور' },
    shopIftar:      { en: 'Iftar cooking', ar: 'طبخ الإفطار' },
    shopOther:      { en: 'Other things I need', ar: 'أشياء أخرى أحتاجها' },
    eidPrepTitle:   { en: 'Getting Ready for Eid', ar: 'الاستعداد للعيد' },
    eidDayTitle:    { en: 'Eid Day Planner', ar: 'مخطط يوم العيد' },
    eidMubarak:     { en: 'Eid Mubarak!', ar: 'عيد مبارك!' },
    eidGratitude:   { en: 'Three things I thank Allah for this Ramadan', ar: 'ثلاثة أشياء أشكر الله عليها في هذا رمضان' },
    timeCol:        { en: 'Time', ar: 'الوقت' },
    planCol:        { en: 'Plan', ar: 'الخطة' },
    kidsDivider:    { en: "Kids' Ramadan Pack", ar: 'حزمة رمضان للأطفال' },
    kidsDividerSub: { en: 'Star charts, good-deed cards, colouring pages and a certificate — just for kids!',
                      ar: 'جداول النجوم وبطاقات الأعمال الصالحة وصفحات التلوين وشهادة — للأطفال فقط!' },
    kidsChartTitle: { en: 'My Ramadan Star Chart', ar: 'جدول نجوم رمضان' },
    kidsChartIntro: { en: 'Colour a star every day you fast (even a little fast!), pray, do a good deed or read Qur’an.',
                      ar: 'لوّن نجمة كل يوم تصوم فيه (ولو صياماً قصيراً!) وتصلي وتعمل عملاً صالحاً وتقرأ القرآن.' },
    fasting:        { en: 'Fasting', ar: 'الصيام' },
    kidsCardsTitle: { en: '30 Good Deed Cards for Kids', ar: '٣٠ بطاقة أعمال صالحة للأطفال' },
    kidsCardsIntro: { en: 'One card for every day of Ramadan. Read the card, do the deed, and colour the star!',
                      ar: 'بطاقة واحدة لكل يوم من رمضان. اقرأ البطاقة واعمل العمل ولوّن النجمة!' },
    cardDay:        { en: 'Day {n}', ar: 'اليوم {n}' },
    coloringTitle:  { en: 'Colour the picture!', ar: 'لوّن الصورة!' },
    certTitle:      { en: 'My First Ramadan', ar: 'رمضاني الأول' },
    certPresented:  { en: 'This certificate is proudly presented to', ar: 'تُمنح هذه الشهادة بفخر إلى' },
    certFor:        { en: 'for a wonderful Ramadan of fasting, prayer, Qur’an and good deeds',
                      ar: 'لرمضان جميل مليء بالصيام والصلاة والقرآن والأعمال الصالحة' },
    certWellDone:   { en: 'Well done, little star!', ar: 'أحسنت يا نجمي الصغير!' },
    footerBrand:    { en: 'Ramadan Planner · Songlap Deals', ar: 'مخطط رمضان · Songlap Deals' },
    pageOf:         { en: 'Page {n}', ar: 'صفحة {n}' }
  };

  /* ---------- 30 duas: verbatim Arabic + English meaning + source ----------
   * Only famous, verifiable texts: Qur'an verses quoted exactly, and
   * short duas transmitted in the well-known hadith collections. */
  var DUAS = [
    { ar: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
      en: 'The thirst has gone, the veins are moistened, and the reward is certain, if Allah wills.',
      src: 'Abu Dawud — dua when breaking the fast' },
    { ar: 'اللَّهُمَّ إِنِّي لَكَ صُمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ',
      en: 'O Allah, I fasted for You, I believe in You, I put my trust in You, and I break my fast with Your provision.',
      src: 'Abu Dawud — dua when breaking the fast' },
    { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      en: 'Our Lord, give us good in this world and good in the Hereafter, and shield us from the punishment of the Fire.',
      src: "Qur'an 2:201" },
    { ar: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      en: 'O Allah, help me to remember You, to thank You, and to worship You in the best way.',
      src: 'Abu Dawud' },
    { ar: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
      en: 'My Lord, open my chest for me, and make my task easy for me.',
      src: "Qur'an 20:25–26" },
    { ar: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
      en: 'O Turner of hearts, keep my heart firm upon Your religion.',
      src: 'At-Tirmidhi' },
    { ar: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      en: 'There is no god but You; glory be to You. Truly, I have been among the wrongdoers.',
      src: "Qur'an 21:87" },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
      en: 'O Allah, I ask You for beneficial knowledge, pure provision, and deeds that are accepted.',
      src: 'Ibn Majah' },
    { ar: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      en: 'Our Lord, we have wronged ourselves — and if You do not forgive us and have mercy on us, we will surely be among the losers.',
      src: "Qur'an 7:23" },
    { ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      en: 'Allah is enough for us, and He is the best Guardian.',
      src: "Qur'an 3:173" },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
      en: 'O Allah, I ask You for pardon and well-being in this world and in the Hereafter.',
      src: 'Ibn Majah' },
    { ar: 'رَبِّ زِدْنِي عِلْمًا',
      en: 'My Lord, increase me in knowledge.',
      src: "Qur'an 20:114" },
    { ar: 'اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا',
      en: 'O Allah, give my soul its God-consciousness and purify it — You are the best to purify it; You are its Guardian and its Master.',
      src: 'Muslim' },
    { ar: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
      en: 'I seek the forgiveness of Allah the Almighty, besides Whom there is no god, the Ever-Living, the Sustainer of all, and I repent to Him.',
      src: 'At-Tirmidhi' },
    { ar: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
      en: 'Our Lord, accept this from us. Truly, You are the All-Hearing, the All-Knowing.',
      src: "Qur'an 2:127" },
    { ar: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
      en: 'O Allah, nothing is easy except what You make easy — and You can make hardship easy, if You will.',
      src: 'Ibn Hibban' },
    { ar: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      en: 'Our Lord, grant us from our spouses and our children comfort to our eyes, and make us leaders for the God-conscious.',
      src: "Qur'an 25:74" },
    { ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
      en: 'O Allah, I seek refuge in You from worry and grief, from weakness and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by men.',
      src: 'Al-Bukhari' },
    { ar: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
      en: 'O Ever-Living, O Sustainer of all — by Your mercy I seek help.',
      src: 'At-Tirmidhi' },
    { ar: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ',
      en: 'Our Lord, do not let our hearts turn away after You have guided us; grant us mercy from Yourself. Truly, You are the Bestower.',
      src: "Qur'an 3:8" },
    { ar: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      en: 'O Allah, You are Pardoning and You love to pardon — so pardon me.',
      src: 'At-Tirmidhi — the dua for Laylatul Qadr' },
    { ar: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      en: 'In the name of Allah, with whose name nothing on earth or in the heavens can cause harm — and He is the All-Hearing, the All-Knowing.',
      src: 'Abu Dawud' },
    { ar: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
      en: 'Our Lord, pour patience upon us, make our feet firm, and help us against the disbelieving people.',
      src: "Qur'an 2:250" },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      en: 'O Allah, I ask You for Paradise, and I seek refuge in You from the Fire.',
      src: 'Abu Dawud' },
    { ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
      en: 'Glory be to Allah and praise Him; glory be to Allah the Almighty.',
      src: 'Al-Bukhari & Muslim' },
    { ar: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
      en: 'Our Lord, forgive me, my parents, and the believers on the Day when the reckoning is established.',
      src: "Qur'an 14:41" },
    { ar: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ',
      en: 'O Allah, guide me among those You have guided, grant me well-being among those You have granted it, take me into Your care among those You have taken into Your care, bless for me what You have given me, and protect me from the evil of what You have decreed.',
      src: 'Abu Dawud — from the Qunut dua' },
    { ar: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
      en: 'Allah is enough for me; there is no god but Him. In Him I put my trust, and He is the Lord of the Mighty Throne.',
      src: "Qur'an 9:129" },
    { ar: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
      en: 'My Lord, forgive me and accept my repentance. Truly, You are the Most Forgiving, the Most Merciful.',
      src: 'Abu Dawud' },
    { ar: 'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا',
      en: 'Our Lord, do not hold us to account if we forget or make a mistake.',
      src: "Qur'an 2:286" }
  ];

  /* The Laylatul Qadr dua (also dua #21 above), featured on the
     Last Ten Nights page. Kept as a named constant so the page and
     the daily list can never drift apart. */
  var QADR_DUA = DUAS[20];

  /* ---------- Adult good-deeds tracker rows (12 deeds × 30 days) ---------- */
  var DEEDS = [
    { en: 'Give charity (even a little)', ar: 'تصدّق ولو بالقليل' },
    { en: 'Read Qur’an with meaning', ar: 'اقرأ القرآن بتدبر' },
    { en: 'Pray Taraweeh', ar: 'صلِّ التراويح' },
    { en: 'Feed a fasting person', ar: 'أفطِر صائماً' },
    { en: 'Help parents or family', ar: 'ساعد الوالدين أو الأهل' },
    { en: 'Say istighfar 100 times', ar: 'استغفر ١٠٠ مرة' },
    { en: 'Call or visit a relative', ar: 'صِل رحمك' },
    { en: 'Share food with a neighbour', ar: 'شارك جارك الطعام' },
    { en: 'Pray 2 extra rak’ahs', ar: 'صلِّ ركعتين إضافيتين' },
    { en: 'Learn one new dua', ar: 'تعلّم دعاءً جديداً' },
    { en: 'Speak kindly, no backbiting', ar: 'تكلّم بلطف واترك الغيبة' },
    { en: 'Make dua for someone else', ar: 'ادعُ لغيرك' }
  ];

  /* ---------- Last-ten-nights worship checklist rows ---------- */
  var LAST_TEN_ACTS = [
    { en: 'Pray Isha & Fajr in congregation', ar: 'صلِّ العشاء والفجر جماعة' },
    { en: 'Pray Taraweeh / Qiyam', ar: 'صلِّ التراويح والقيام' },
    { en: 'Read Qur’an', ar: 'اقرأ القرآن' },
    { en: 'Make lots of dua', ar: 'أكثر من الدعاء' },
    { en: 'Repeat the Qadr dua', ar: 'كرّر دعاء ليلة القدر' },
    { en: 'Give charity', ar: 'تصدّق' },
    { en: 'Dhikr & istighfar', ar: 'الذكر والاستغفار' },
    { en: 'I’tikaf / quiet worship time', ar: 'اعتكف أو اختلِ للعبادة' }
  ];

  /* ---------- Eid preparation checklist ---------- */
  var EID_PREP = [
    { en: 'Pay Zakat al-Fitr', ar: 'ادفع زكاة الفطر' },
    { en: 'Choose Eid clothes', ar: 'جهّز ملابس العيد' },
    { en: 'Plan the Eid prayer place & time', ar: 'خطط لمكان ووقت صلاة العيد' },
    { en: 'Buy gifts for family', ar: 'اشترِ هدايا للأهل' },
    { en: 'Give Eidi / money gifts', ar: 'جهّز العيدية' },
    { en: 'Plan Eid food & sweets', ar: 'خطط لطعام وحلويات العيد' },
    { en: 'Clean & decorate the home', ar: 'نظّف وزيّن البيت' },
    { en: 'Call relatives far away', ar: 'اتصل بالأقارب البعيدين' },
    { en: 'Forgive & make peace', ar: 'سامح واصلح ذات البين' },
    { en: 'Prepare charity for the needy', ar: 'جهّز صدقة للمحتاجين' },
    { en: 'Plan visits for Eid day', ar: 'خطط لزيارات يوم العيد' },
    { en: 'Thank Allah for Ramadan', ar: 'اشكر الله على رمضان' }
  ];

  /* ---------- Kids: 30 good deeds (one card per day) ---------- */
  var KIDS_DEEDS = [
    { en: 'Smile at someone — smiling is charity!', ar: 'ابتسم لشخص ما — الابتسامة صدقة!' },
    { en: 'Say Bismillah before you eat', ar: 'قل بسم الله قبل الأكل' },
    { en: 'Help set the table for iftar', ar: 'ساعد في تجهيز مائدة الإفطار' },
    { en: 'Say thank you to Mum and Dad', ar: 'قل شكراً لأمك وأبيك' },
    { en: 'Share your favourite toy', ar: 'شارك لعبتك المفضلة' },
    { en: 'Give a date to someone at iftar', ar: 'أعطِ تمرة لشخص عند الإفطار' },
    { en: 'Say Alhamdulillah after eating', ar: 'قل الحمد لله بعد الأكل' },
    { en: 'Put some coins in the charity box', ar: 'ضع عملات في صندوق الصدقة' },
    { en: 'Water a plant', ar: 'اسقِ نبتة' },
    { en: 'Feed the birds', ar: 'أطعم الطيور' },
    { en: 'Say salaam first', ar: 'ابدأ بالسلام أولاً' },
    { en: 'Help tidy your room', ar: 'ساعد في ترتيب غرفتك' },
    { en: 'Make a Ramadan card for someone', ar: 'اصنع بطاقة رمضان لشخص ما' },
    { en: 'Say sorry when you do wrong', ar: 'اعتذر عندما تخطئ' },
    { en: 'Read or listen to a short surah', ar: 'اقرأ أو استمع إلى سورة قصيرة' },
    { en: 'Make dua for your family', ar: 'ادعُ لعائلتك' },
    { en: 'Help carry something for someone', ar: 'ساعد في حمل شيء لشخص ما' },
    { en: 'Share your snack', ar: 'شارك وجبتك الخفيفة' },
    { en: 'Say SubhanAllah 10 times', ar: 'قل سبحان الله ١٠ مرات' },
    { en: 'Call or visit your grandparents', ar: 'اتصل بأجدادك أو زرهم' },
    { en: 'Pick up litter and bin it', ar: 'التقط القمامة وضعها في السلة' },
    { en: 'Draw a thank-you picture', ar: 'ارسم صورة شكر' },
    { en: 'Pray together with your family', ar: 'صلِّ مع عائلتك' },
    { en: 'Learn one new Arabic word', ar: 'تعلّم كلمة عربية جديدة' },
    { en: 'Give food to a neighbour', ar: 'أعطِ طعاماً لجارك' },
    { en: 'Be kind to a friend', ar: 'كن لطيفاً مع صديقك' },
    { en: 'Say Astaghfirullah 10 times', ar: 'قل أستغفر الله ١٠ مرات' },
    { en: 'Try a little fast today', ar: 'جرّب صياماً قصيراً اليوم' },
    { en: 'Help wash up after iftar', ar: 'ساعد في الغسيل بعد الإفطار' },
    { en: 'Make dua for all Muslims', ar: 'ادعُ لجميع المسلمين' }
  ];

  /* ---------- Kids colouring designs (objects only, no faces) ---------- */
  var COLORING_IDS = ['mosque', 'crescent', 'lantern', 'dates', 'mat', 'quran'];
  var COLORING_NAMES = {
    mosque:   { en: 'The Mosque', ar: 'المسجد' },
    crescent: { en: 'Crescent Moon & Star', ar: 'الهلال والنجمة' },
    lantern:  { en: 'Ramadan Lantern (Fanoos)', ar: 'فانوس رمضان' },
    dates:    { en: 'A Bowl of Dates', ar: 'طبق التمر' },
    mat:      { en: 'Prayer Mat', ar: 'سجادة الصلاة' },
    quran:    { en: 'Qur’an on a Stand', ar: 'المصحف على الكرسي' }
  };

  /* ---------- Calendar names ---------- */
  var MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var WEEKDAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var WEEKDAYS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  var api = {
    STRINGS: STRINGS, DUAS: DUAS, QADR_DUA: QADR_DUA,
    DEEDS: DEEDS, LAST_TEN_ACTS: LAST_TEN_ACTS, EID_PREP: EID_PREP,
    KIDS_DEEDS: KIDS_DEEDS, COLORING_IDS: COLORING_IDS, COLORING_NAMES: COLORING_NAMES,
    MONTHS_EN: MONTHS_EN, MONTHS_AR: MONTHS_AR,
    WEEKDAYS_EN: WEEKDAYS_EN, WEEKDAYS_AR: WEEKDAYS_AR
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.RPDATA = api;
})(typeof window !== 'undefined' ? window : globalThis);
