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
    duaCardsTitle:  { en: 'Printable Dua Cards', ar: 'بطاقات أدعية للطباعة' },
    duaCardsIntro:  { en: 'All 30 daily duas as cut-out cards — one for each day of Ramadan. Cut along the dashed lines and keep a card where you will see it.',
                      ar: 'أدعية الأيام الثلاثين كلها في بطاقات تُقصّ — بطاقة لكل يوم من رمضان. قُصّ على الخطوط المتقطعة وضع كل بطاقة حيث تراها.' },
    duaCardDay:     { en: 'Day {n}', ar: 'اليوم {n}' },
    quranDuasTitle: { en: 'Duas from the Qur’an', ar: 'أدعية من القرآن الكريم' },
    quranDuasIntro: { en: 'Supplications taken from the Qur’an itself — the “Rabbana” duas and the prayers of the prophets and the believers, with the surah and verse of each one. These are in addition to the daily duas.',
                      ar: 'أدعية مأخوذة من القرآن نفسه — أدعية «ربنا» ودعاء الأنبياء والمؤمنين، مع ذكر السورة والآية لكل دعاء. وهي زيادة على أدعية الأيام.' },
    surahTrackerTitle: { en: 'Qur’an Reading Tracker — All 114 Surahs', ar: 'متابعة قراءة القرآن — السور الـ١١٤ كلها' },
    surahTrackerIntro: { en: 'Every surah in order, with its number of verses. Tick the box and write the date each time you finish a surah.',
                      ar: 'كل سورة بترتيبها مع عدد آياتها. ضع علامة واكتب التاريخ كلما أنهيت سورة.' },
    surahCol:       { en: 'Surah', ar: 'السورة' },
    versesCol:      { en: 'Verses', ar: 'الآيات' },
    dateCol:        { en: 'Date', ar: 'التاريخ' },
    bookmarksTitle: { en: 'Ramadan Bookmarks', ar: 'فواصل رمضان' },
    bookmarksIntro: { en: 'Four bookmarks for your planner and your Qur’an. Cut along the dashed lines.',
                      ar: 'أربع فواصل لمخططك ومصحفك. قُصّ على الخطوط المتقطعة.' },
    bookmarkDua:    { en: 'O Allah, help me to remember You, thank You and worship You well.',
                      ar: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك' },
    bookmarkDuaSrc: { en: 'Abu Dawud 1522', ar: 'أبو داود ١٥٢٢' },
    bookmarkMotto:  { en: 'Day by day, deed by deed', ar: 'يوماً بيوم، وعملاً بعمل' },
    ramadanMubarak: { en: 'Ramadan Mubarak', ar: 'رمضان مبارك' },
    notesTitle:     { en: 'Notes', ar: 'ملاحظات' },
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
    { ar: 'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
      en: 'O Allah, for You I have fasted, and with Your provision I break my fast.',
      src: 'Abu Dawud 2358' },
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
      src: 'Abu Dawud 792' },
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

  /* ---------- Quranic duas (Feature E, 2026-11-17) ----------
   * 52 supplications quoted from the Qur'an itself
   * (the Rabbana duas and the prophets' / believers' duas).
   * Arabic: Tanzil simple-script text, sliced programmatically
   * from the verified verse text — never retyped. English:
   * Sahih International, sliced the same way. src = Surah:Ayah. */
  var QURAN_DUAS = [
    {
      "ar": "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
      "en": "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.",
      "src": "Qur'an 2:127"
    },
    {
      "ar": "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا ۖ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
      "en": "Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.",
      "src": "Qur'an 2:128"
    },
    {
      "ar": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      "en": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
      "src": "Qur'an 2:201"
    },
    {
      "ar": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      "en": "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
      "src": "Qur'an 2:250"
    },
    {
      "ar": "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      "en": "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
      "src": "Qur'an 2:286"
    },
    {
      "ar": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ",
      "en": "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      "src": "Qur'an 3:8"
    },
    {
      "ar": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",
      "en": "Our Lord, surely You will gather the people for a Day about which there is no doubt. Indeed, Allah does not fail in His promise.",
      "src": "Qur'an 3:9"
    },
    {
      "ar": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
      "en": "Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire,",
      "src": "Qur'an 3:16"
    },
    {
      "ar": "رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
      "en": "My Lord, indeed I have pledged to You what is in my womb, consecrated [for Your service], so accept this from me. Indeed, You are the Hearing, the Knowing.",
      "src": "Qur'an 3:35"
    },
    {
      "ar": "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ",
      "en": "My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.",
      "src": "Qur'an 3:38"
    },
    {
      "ar": "رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
      "en": "Our Lord, we have believed in what You revealed and have followed the messenger Jesus, so register us among the witnesses [to truth].",
      "src": "Qur'an 3:53"
    },
    {
      "ar": "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      "en": "Our Lord, forgive us our sins and the excess [committed] in our affairs and plant firmly our feet and give us victory over the disbelieving people.",
      "src": "Qur'an 3:147"
    },
    {
      "ar": "رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
      "en": "Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.",
      "src": "Qur'an 3:191"
    },
    {
      "ar": "رَبَّنَا إِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ ۖ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ",
      "en": "Our Lord, indeed whoever You admit to the Fire - You have disgraced him, and for the wrongdoers there are no helpers.",
      "src": "Qur'an 3:192"
    },
    {
      "ar": "رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا ۚ رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ",
      "en": "Our Lord, indeed we have heard a caller calling to faith, [saying], 'Believe in your Lord,' and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die with the righteous.",
      "src": "Qur'an 3:193"
    },
    {
      "ar": "رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ ۗ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
      "en": "Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise.",
      "src": "Qur'an 3:194"
    },
    {
      "ar": "رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِأَوَّلِنَا وَآخِرِنَا وَآيَةً مِنْكَ ۖ وَارْزُقْنَا وَأَنْتَ خَيْرُ الرَّازِقِينَ",
      "en": "O Allah, our Lord, send down to us a table [spread with food] from the heaven to be for us a festival for the first of us and the last of us and a sign from You. And provide for us, and You are the best of providers.",
      "src": "Qur'an 5:114"
    },
    {
      "ar": "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      "en": "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
      "src": "Qur'an 7:23"
    },
    {
      "ar": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
      "en": "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].",
      "src": "Qur'an 7:126"
    },
    {
      "ar": "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ ۖ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
      "en": "My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful.",
      "src": "Qur'an 7:151"
    },
    {
      "ar": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
      "en": "Our Lord, make us not [objects of] trial for the wrongdoing people And save us by Your mercy from the disbelieving people.",
      "src": "Qur'an 10:85–86"
    },
    {
      "ar": "رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِنْ تَأْوِيلِ الْأَحَادِيثِ ۚ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
      "en": "My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and in the Hereafter. Cause me to die a Muslim and join me with the righteous.",
      "src": "Qur'an 12:101"
    },
    {
      "ar": "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَنْ نَعْبُدَ الْأَصْنَامَ",
      "en": "My Lord, make this city [Makkah] secure and keep me and my sons away from worshipping idols.",
      "src": "Qur'an 14:35"
    },
    {
      "ar": "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ ۗ وَمَا يَخْفَىٰ عَلَى اللَّهِ مِنْ شَيْءٍ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
      "en": "Our Lord, indeed You know what we conceal and what we declare, and nothing is hidden from Allah on the earth or in the heaven.",
      "src": "Qur'an 14:38"
    },
    {
      "ar": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
      "en": "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.",
      "src": "Qur'an 14:40"
    },
    {
      "ar": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
      "en": "Our Lord, forgive me and my parents and the believers the Day the account is established.",
      "src": "Qur'an 14:41"
    },
    {
      "ar": "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا",
      "en": "My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority.",
      "src": "Qur'an 17:80"
    },
    {
      "ar": "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
      "en": "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
      "src": "Qur'an 18:10"
    },
    {
      "ar": "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
      "en": "My Lord, expand for me my breast [with assurance] And ease for me my task And untie the knot from my tongue That they may understand my speech.",
      "src": "Qur'an 20:25–28"
    },
    {
      "ar": "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
      "en": "Indeed, adversity has touched me, and you are the Most Merciful of the merciful.",
      "src": "Qur'an 21:83"
    },
    {
      "ar": "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      "en": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      "src": "Qur'an 21:87"
    },
    {
      "ar": "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ",
      "en": "My Lord, do not leave me alone [with no heir], while you are the best of inheritors.",
      "src": "Qur'an 21:89"
    },
    {
      "ar": "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ",
      "en": "My Lord, I seek refuge in You from the incitements of the devils,",
      "src": "Qur'an 23:97"
    },
    {
      "ar": "وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
      "en": "And I seek refuge in You, my Lord, lest they be present with me.",
      "src": "Qur'an 23:98"
    },
    {
      "ar": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
      "en": "Our Lord, we have believed, so forgive us and have mercy upon us, and You are the best of the merciful.",
      "src": "Qur'an 23:109"
    },
    {
      "ar": "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
      "en": "My Lord, forgive and have mercy, and You are the best of the merciful.",
      "src": "Qur'an 23:118"
    },
    {
      "ar": "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
      "en": "Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering;",
      "src": "Qur'an 25:65"
    },
    {
      "ar": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      "en": "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
      "src": "Qur'an 25:74"
    },
    {
      "ar": "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
      "en": "My Lord, grant me authority and join me with the righteous.",
      "src": "Qur'an 26:83"
    },
    {
      "ar": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
      "en": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
      "src": "Qur'an 27:19"
    },
    {
      "ar": "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي فَغَفَرَ لَهُ ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
      "en": "My Lord, indeed I have wronged myself, so forgive me,\" and He forgave him. Indeed, He is the Forgiving, the Merciful.",
      "src": "Qur'an 28:16"
    },
    {
      "ar": "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
      "en": "My Lord, indeed I am, for whatever good You would send down to me, in need.",
      "src": "Qur'an 28:24"
    },
    {
      "ar": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
      "en": "My Lord, grant me [a child] from among the righteous.",
      "src": "Qur'an 37:100"
    },
    {
      "ar": "رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَا يَنْبَغِي لِأَحَدٍ مِنْ بَعْدِي ۖ إِنَّكَ أَنْتَ الْوَهَّابُ",
      "en": "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower.",
      "src": "Qur'an 38:35"
    },
    {
      "ar": "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
      "en": "Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your way and protect them from the punishment of Hellfire.",
      "src": "Qur'an 40:7"
    },
    {
      "ar": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي ۖ إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ",
      "en": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to work righteousness of which You will approve and make righteous for me my offspring. Indeed, I have repented to You, and indeed, I am of the Muslims.",
      "src": "Qur'an 46:15"
    },
    {
      "ar": "أَنِّي مَغْلُوبٌ فَانْتَصِرْ",
      "en": "Indeed, I am overpowered, so help.",
      "src": "Qur'an 54:10"
    },
    {
      "ar": "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ",
      "en": "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.",
      "src": "Qur'an 59:10"
    },
    {
      "ar": "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
      "en": "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
      "src": "Qur'an 60:4"
    },
    {
      "ar": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ",
      "en": "Our Lord, make us not [objects of] torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is the Exalted in Might, the Wise.",
      "src": "Qur'an 60:5"
    },
    {
      "ar": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      "en": "Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.",
      "src": "Qur'an 66:8"
    },
    {
      "ar": "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا",
      "en": "My Lord, forgive me and my parents and whoever enters my house a believer and the believing men and believing women. And do not increase the wrongdoers except in destruction.",
      "src": "Qur'an 71:28"
    }
  ];

  /* ---------- All 114 surahs (Feature F, 2026-11-17) ----------
   * Number, Arabic name, English (transliterated) name and
   * verse count — Tanzil surah metadata, cross-checked against
   * AlQuran Cloud meta: all 114 ayah counts agree. */
  var SURAHS = [
   {
    "n": 1,
    "ar": "الفاتحة",
    "en": "Al-Faatiha",
    "ayahs": 7
   },
   {
    "n": 2,
    "ar": "البقرة",
    "en": "Al-Baqara",
    "ayahs": 286
   },
   {
    "n": 3,
    "ar": "آل عمران",
    "en": "Aal-i-Imraan",
    "ayahs": 200
   },
   {
    "n": 4,
    "ar": "النساء",
    "en": "An-Nisaa",
    "ayahs": 176
   },
   {
    "n": 5,
    "ar": "المائدة",
    "en": "Al-Maaida",
    "ayahs": 120
   },
   {
    "n": 6,
    "ar": "الأنعام",
    "en": "Al-An'aam",
    "ayahs": 165
   },
   {
    "n": 7,
    "ar": "الأعراف",
    "en": "Al-A'raaf",
    "ayahs": 206
   },
   {
    "n": 8,
    "ar": "الأنفال",
    "en": "Al-Anfaal",
    "ayahs": 75
   },
   {
    "n": 9,
    "ar": "التوبة",
    "en": "At-Tawba",
    "ayahs": 129
   },
   {
    "n": 10,
    "ar": "يونس",
    "en": "Yunus",
    "ayahs": 109
   },
   {
    "n": 11,
    "ar": "هود",
    "en": "Hud",
    "ayahs": 123
   },
   {
    "n": 12,
    "ar": "يوسف",
    "en": "Yusuf",
    "ayahs": 111
   },
   {
    "n": 13,
    "ar": "الرعد",
    "en": "Ar-Ra'd",
    "ayahs": 43
   },
   {
    "n": 14,
    "ar": "ابراهيم",
    "en": "Ibrahim",
    "ayahs": 52
   },
   {
    "n": 15,
    "ar": "الحجر",
    "en": "Al-Hijr",
    "ayahs": 99
   },
   {
    "n": 16,
    "ar": "النحل",
    "en": "An-Nahl",
    "ayahs": 128
   },
   {
    "n": 17,
    "ar": "الإسراء",
    "en": "Al-Israa",
    "ayahs": 111
   },
   {
    "n": 18,
    "ar": "الكهف",
    "en": "Al-Kahf",
    "ayahs": 110
   },
   {
    "n": 19,
    "ar": "مريم",
    "en": "Maryam",
    "ayahs": 98
   },
   {
    "n": 20,
    "ar": "طه",
    "en": "Taa-Haa",
    "ayahs": 135
   },
   {
    "n": 21,
    "ar": "الأنبياء",
    "en": "Al-Anbiyaa",
    "ayahs": 112
   },
   {
    "n": 22,
    "ar": "الحج",
    "en": "Al-Hajj",
    "ayahs": 78
   },
   {
    "n": 23,
    "ar": "المؤمنون",
    "en": "Al-Muminoon",
    "ayahs": 118
   },
   {
    "n": 24,
    "ar": "النور",
    "en": "An-Noor",
    "ayahs": 64
   },
   {
    "n": 25,
    "ar": "الفرقان",
    "en": "Al-Furqaan",
    "ayahs": 77
   },
   {
    "n": 26,
    "ar": "الشعراء",
    "en": "Ash-Shu'araa",
    "ayahs": 227
   },
   {
    "n": 27,
    "ar": "النمل",
    "en": "An-Naml",
    "ayahs": 93
   },
   {
    "n": 28,
    "ar": "القصص",
    "en": "Al-Qasas",
    "ayahs": 88
   },
   {
    "n": 29,
    "ar": "العنكبوت",
    "en": "Al-Ankaboot",
    "ayahs": 69
   },
   {
    "n": 30,
    "ar": "الروم",
    "en": "Ar-Room",
    "ayahs": 60
   },
   {
    "n": 31,
    "ar": "لقمان",
    "en": "Luqman",
    "ayahs": 34
   },
   {
    "n": 32,
    "ar": "السجدة",
    "en": "As-Sajda",
    "ayahs": 30
   },
   {
    "n": 33,
    "ar": "الأحزاب",
    "en": "Al-Ahzaab",
    "ayahs": 73
   },
   {
    "n": 34,
    "ar": "سبإ",
    "en": "Saba",
    "ayahs": 54
   },
   {
    "n": 35,
    "ar": "فاطر",
    "en": "Faatir",
    "ayahs": 45
   },
   {
    "n": 36,
    "ar": "يس",
    "en": "Yaseen",
    "ayahs": 83
   },
   {
    "n": 37,
    "ar": "الصافات",
    "en": "As-Saaffaat",
    "ayahs": 182
   },
   {
    "n": 38,
    "ar": "ص",
    "en": "Saad",
    "ayahs": 88
   },
   {
    "n": 39,
    "ar": "الزمر",
    "en": "Az-Zumar",
    "ayahs": 75
   },
   {
    "n": 40,
    "ar": "غافر",
    "en": "Al-Ghaafir",
    "ayahs": 85
   },
   {
    "n": 41,
    "ar": "فصلت",
    "en": "Fussilat",
    "ayahs": 54
   },
   {
    "n": 42,
    "ar": "الشورى",
    "en": "Ash-Shura",
    "ayahs": 53
   },
   {
    "n": 43,
    "ar": "الزخرف",
    "en": "Az-Zukhruf",
    "ayahs": 89
   },
   {
    "n": 44,
    "ar": "الدخان",
    "en": "Ad-Dukhaan",
    "ayahs": 59
   },
   {
    "n": 45,
    "ar": "الجاثية",
    "en": "Al-Jaathiya",
    "ayahs": 37
   },
   {
    "n": 46,
    "ar": "الأحقاف",
    "en": "Al-Ahqaf",
    "ayahs": 35
   },
   {
    "n": 47,
    "ar": "محمد",
    "en": "Muhammad",
    "ayahs": 38
   },
   {
    "n": 48,
    "ar": "الفتح",
    "en": "Al-Fath",
    "ayahs": 29
   },
   {
    "n": 49,
    "ar": "الحجرات",
    "en": "Al-Hujuraat",
    "ayahs": 18
   },
   {
    "n": 50,
    "ar": "ق",
    "en": "Qaaf",
    "ayahs": 45
   },
   {
    "n": 51,
    "ar": "الذاريات",
    "en": "Adh-Dhaariyat",
    "ayahs": 60
   },
   {
    "n": 52,
    "ar": "الطور",
    "en": "At-Tur",
    "ayahs": 49
   },
   {
    "n": 53,
    "ar": "النجم",
    "en": "An-Najm",
    "ayahs": 62
   },
   {
    "n": 54,
    "ar": "القمر",
    "en": "Al-Qamar",
    "ayahs": 55
   },
   {
    "n": 55,
    "ar": "الرحمن",
    "en": "Ar-Rahmaan",
    "ayahs": 78
   },
   {
    "n": 56,
    "ar": "الواقعة",
    "en": "Al-Waaqia",
    "ayahs": 96
   },
   {
    "n": 57,
    "ar": "الحديد",
    "en": "Al-Hadid",
    "ayahs": 29
   },
   {
    "n": 58,
    "ar": "المجادلة",
    "en": "Al-Mujaadila",
    "ayahs": 22
   },
   {
    "n": 59,
    "ar": "الحشر",
    "en": "Al-Hashr",
    "ayahs": 24
   },
   {
    "n": 60,
    "ar": "الممتحنة",
    "en": "Al-Mumtahana",
    "ayahs": 13
   },
   {
    "n": 61,
    "ar": "الصف",
    "en": "As-Saff",
    "ayahs": 14
   },
   {
    "n": 62,
    "ar": "الجمعة",
    "en": "Al-Jumu'a",
    "ayahs": 11
   },
   {
    "n": 63,
    "ar": "المنافقون",
    "en": "Al-Munaafiqoon",
    "ayahs": 11
   },
   {
    "n": 64,
    "ar": "التغابن",
    "en": "At-Taghaabun",
    "ayahs": 18
   },
   {
    "n": 65,
    "ar": "الطلاق",
    "en": "At-Talaaq",
    "ayahs": 12
   },
   {
    "n": 66,
    "ar": "التحريم",
    "en": "At-Tahrim",
    "ayahs": 12
   },
   {
    "n": 67,
    "ar": "الملك",
    "en": "Al-Mulk",
    "ayahs": 30
   },
   {
    "n": 68,
    "ar": "القلم",
    "en": "Al-Qalam",
    "ayahs": 52
   },
   {
    "n": 69,
    "ar": "الحاقة",
    "en": "Al-Haaqqa",
    "ayahs": 52
   },
   {
    "n": 70,
    "ar": "المعارج",
    "en": "Al-Ma'aarij",
    "ayahs": 44
   },
   {
    "n": 71,
    "ar": "نوح",
    "en": "Nooh",
    "ayahs": 28
   },
   {
    "n": 72,
    "ar": "الجن",
    "en": "Al-Jinn",
    "ayahs": 28
   },
   {
    "n": 73,
    "ar": "المزمل",
    "en": "Al-Muzzammil",
    "ayahs": 20
   },
   {
    "n": 74,
    "ar": "المدثر",
    "en": "Al-Muddaththir",
    "ayahs": 56
   },
   {
    "n": 75,
    "ar": "القيامة",
    "en": "Al-Qiyaama",
    "ayahs": 40
   },
   {
    "n": 76,
    "ar": "الانسان",
    "en": "Al-Insaan",
    "ayahs": 31
   },
   {
    "n": 77,
    "ar": "المرسلات",
    "en": "Al-Mursalaat",
    "ayahs": 50
   },
   {
    "n": 78,
    "ar": "النبإ",
    "en": "An-Naba",
    "ayahs": 40
   },
   {
    "n": 79,
    "ar": "النازعات",
    "en": "An-Naazi'aat",
    "ayahs": 46
   },
   {
    "n": 80,
    "ar": "عبس",
    "en": "Abasa",
    "ayahs": 42
   },
   {
    "n": 81,
    "ar": "التكوير",
    "en": "At-Takwir",
    "ayahs": 29
   },
   {
    "n": 82,
    "ar": "الإنفطار",
    "en": "Al-Infitaar",
    "ayahs": 19
   },
   {
    "n": 83,
    "ar": "المطففين",
    "en": "Al-Mutaffifin",
    "ayahs": 36
   },
   {
    "n": 84,
    "ar": "الإنشقاق",
    "en": "Al-Inshiqaaq",
    "ayahs": 25
   },
   {
    "n": 85,
    "ar": "البروج",
    "en": "Al-Burooj",
    "ayahs": 22
   },
   {
    "n": 86,
    "ar": "الطارق",
    "en": "At-Taariq",
    "ayahs": 17
   },
   {
    "n": 87,
    "ar": "الأعلى",
    "en": "Al-A'laa",
    "ayahs": 19
   },
   {
    "n": 88,
    "ar": "الغاشية",
    "en": "Al-Ghaashiya",
    "ayahs": 26
   },
   {
    "n": 89,
    "ar": "الفجر",
    "en": "Al-Fajr",
    "ayahs": 30
   },
   {
    "n": 90,
    "ar": "البلد",
    "en": "Al-Balad",
    "ayahs": 20
   },
   {
    "n": 91,
    "ar": "الشمس",
    "en": "Ash-Shams",
    "ayahs": 15
   },
   {
    "n": 92,
    "ar": "الليل",
    "en": "Al-Lail",
    "ayahs": 21
   },
   {
    "n": 93,
    "ar": "الضحى",
    "en": "Ad-Dhuhaa",
    "ayahs": 11
   },
   {
    "n": 94,
    "ar": "الشرح",
    "en": "Ash-Sharh",
    "ayahs": 8
   },
   {
    "n": 95,
    "ar": "التين",
    "en": "At-Tin",
    "ayahs": 8
   },
   {
    "n": 96,
    "ar": "العلق",
    "en": "Al-Alaq",
    "ayahs": 19
   },
   {
    "n": 97,
    "ar": "القدر",
    "en": "Al-Qadr",
    "ayahs": 5
   },
   {
    "n": 98,
    "ar": "البينة",
    "en": "Al-Bayyina",
    "ayahs": 8
   },
   {
    "n": 99,
    "ar": "الزلزلة",
    "en": "Az-Zalzala",
    "ayahs": 8
   },
   {
    "n": 100,
    "ar": "العاديات",
    "en": "Al-Aadiyaat",
    "ayahs": 11
   },
   {
    "n": 101,
    "ar": "القارعة",
    "en": "Al-Qaari'a",
    "ayahs": 11
   },
   {
    "n": 102,
    "ar": "التكاثر",
    "en": "At-Takaathur",
    "ayahs": 8
   },
   {
    "n": 103,
    "ar": "العصر",
    "en": "Al-Asr",
    "ayahs": 3
   },
   {
    "n": 104,
    "ar": "الهمزة",
    "en": "Al-Humaza",
    "ayahs": 9
   },
   {
    "n": 105,
    "ar": "الفيل",
    "en": "Al-Fil",
    "ayahs": 5
   },
   {
    "n": 106,
    "ar": "قريش",
    "en": "Quraish",
    "ayahs": 4
   },
   {
    "n": 107,
    "ar": "الماعون",
    "en": "Al-Maa'un",
    "ayahs": 7
   },
   {
    "n": 108,
    "ar": "الكوثر",
    "en": "Al-Kawthar",
    "ayahs": 3
   },
   {
    "n": 109,
    "ar": "الكافرون",
    "en": "Al-Kaafiroon",
    "ayahs": 6
   },
   {
    "n": 110,
    "ar": "النصر",
    "en": "An-Nasr",
    "ayahs": 3
   },
   {
    "n": 111,
    "ar": "المسد",
    "en": "Al-Masad",
    "ayahs": 5
   },
   {
    "n": 112,
    "ar": "الإخلاص",
    "en": "Al-Ikhlaas",
    "ayahs": 4
   },
   {
    "n": 113,
    "ar": "الفلق",
    "en": "Al-Falaq",
    "ayahs": 5
   },
   {
    "n": 114,
    "ar": "الناس",
    "en": "An-Naas",
    "ayahs": 6
   }
  ];


  /* ---------- Additional book languages (added 2026-11-17) ----------
   * Six more book languages: Bengali (bn), Urdu (ur), Turkish (tr),
   * Malay (ms), Indonesian (id), French (fr). The tables below are
   * merged into STRINGS / DUAS / QURAN_DUAS / the deed lists /
   * COLORING_NAMES above, so every entry gains a field per language.
   * Sources:
   *  - Book strings + the 30 daily-dua meanings + list items:
   *    careful in-house translations of the English text.
   *  - The 52 Quranic duas: sliced programmatically out of the
   *    verified verse text of AlQuran Cloud translation editions —
   *    bn.bengali (Muhiuddin Khan), ur.jalandhry (Fateh Muhammad
   *    Jalandhry), tr.diyanet (Diyanet), ms.basmeih (Basmeih),
   *    id.indonesian, fr.hamidullah (Hamidullah) — with the same
   *    marker-matching method used for the English (Sahih
   *    International) build. One documented repair: bn.bengali's
   *    text for 27:19 contains a broken entity artifact ("?2470;")
   *    inside dua 40; it is restored to its unambiguous reading.
   * Months/weekdays for the new languages live in the MONTHS /
   * MONTHS_SHORT / WEEKDAYS maps exported below. */
  var I18N = {"bn":{"strings":{"asr":"আসর","belongsTo":"এই প্ল্যানারটি যার","bookmarkDua":"হে আল্লাহ, আমাকে সাহায্য করুন যেন আমি আপনাকে স্মরণ করি, আপনার শুকরিয়া আদায় করি এবং সুন্দরভাবে আপনার ইবাদত করি।","bookmarkDuaSrc":"আবু দাউদ 1522","bookmarkMotto":"দিনে দিনে, কাজে কাজে","bookmarksIntro":"আপনার প্ল্যানার ও কুরআনের জন্য চারটি বুকমার্ক। ড্যাশ লাইন ধরে কেটে নিন।","bookmarksTitle":"রমজান বুকমার্ক","brand":"SONGLAP DEALS","cardDay":"দিন {n}","certFor":"রোজা, নামাজ, কুরআন ও ভালো কাজে ভরা চমৎকার একটি রমজানের জন্য","certPresented":"এই সার্টিফিকেটটি গর্বের সঙ্গে দেওয়া হলো","certTitle":"আমার প্রথম রমজান","certWellDone":"শাবাশ, ছোট্ট তারা!","coloringTitle":"ছবিটি রঙ করো!","coverTitle":"রমজান প্ল্যানার","coverYear":"রমজান 1448 হিজরি · 2027","dateCol":"তারিখ","day":"দিন","dayOfRamadan":"রমজানের দিন {n}","deedsIntro":"যেদিন কাজটি করবেন, সেদিন বাক্সে টিক দিন। প্রতিদিন করা ছোট কাজই সবচেয়ে প্রিয়।","deedsTitle":"ভালো কাজের ট্র্যাকার","dhuhr":"জোহর","done":"সম্পন্ন","duaCardDay":"দিন {n}","duaCardsIntro":"প্রতিদিনের ৩০টি দোয়া কেটে নেওয়ার কার্ডে — রমজানের প্রতিটি দিনের জন্য একটি। ড্যাশ লাইন ধরে কেটে কার্ডটি এমন জায়গায় রাখুন যেখানে চোখে পড়বে।","duaCardsTitle":"ছাপানোর দোয়া কার্ড","duaOfDay":"আজকের দোয়া","eidDayTitle":"ঈদের দিনের প্ল্যানার","eidGratitude":"এই রমজানে আমি আল্লাহর কাছে যে তিনটি বিষয়ে কৃতজ্ঞ","eidMubarak":"ঈদ মোবারক!","eidPrepTitle":"ঈদের প্রস্তুতি","extraWorship":"এই রাতগুলোর জন্য আমার ইবাদতের পরিকল্পনা","fajr":"ফজর","fasted":"রোজা রেখেছি","fasting":"রোজা","focusLine":"মনোযোগ","footerBrand":"রমজান প্ল্যানার · Songlap Deals","glasses":"গ্লাস","goodDeedToday":"আজকের ভালো কাজ","gratitude":"আজ আমি যার জন্য কৃতজ্ঞ","iftar":"ইফতার","iftarTime":"ইফতারের সময়","isha":"এশা","juz":"পারা","khatmaIntro":"প্রতিদিন এক পারা পড়লে রমজানেই পুরো কুরআন খতম হয়। প্রতিটি পারা শেষ হলে টিক দিন।","khatmaTitle":"কুরআন খতম ট্র্যাকার","kidsCardsIntro":"রমজানের প্রতিটি দিনের জন্য একটি কার্ড। কার্ডটি পড়ো, কাজটি করো, আর তারাটি রঙ করো!","kidsCardsTitle":"বাচ্চাদের জন্য ৩০টি ভালো কাজের কার্ড","kidsChartIntro":"যেদিন রোজা রাখবে (ছোট্ট রোজা হলেও!), নামাজ পড়বে, ভালো কাজ করবে বা কুরআন পড়বে — একটি তারা রঙ করো।","kidsChartTitle":"আমার রমজান স্টার চার্ট","kidsDivider":"বাচ্চাদের রমজান প্যাক","kidsDividerSub":"স্টার চার্ট, ভালো কাজের কার্ড, রঙ করার পৃষ্ঠা আর সার্টিফিকেট — শুধু বাচ্চাদের জন্য!","lastTenIntro":"এই রাতগুলোর মধ্যেই আছে লাইলাতুল কদর — হাজার মাসের চেয়ে উত্তম রাত। প্রতি রাতে, বিশেষ করে বেজোড় রাতগুলোতে (২১, ২৩, ২৫, ২৭, ২৯) ইবাদত বাড়িয়ে দিন।","lastTenTitle":"শেষ দশ রাত","maghrib":"মাগরিব","mealPlan":"খাবারের পরিকল্পনা","mealsTitle":"খাবারের প্ল্যানার — পুরো মাস","moonNote":"রমজান শুরু চাঁদ দেখার উপর নির্ভর করে। আপনার এলাকায় রমজান একদিন আগে বা পরে শুরু হলে, সেটিংসে শুরুর তারিখ বদলে আবার প্ল্যানার তৈরি করুন।","night":"রাত","notes":"নোট","notesTitle":"নোট","overviewTitle":"এক নজরে রমজান — ৩০ দিন","pageOf":"পৃষ্ঠা {n}","planCol":"পরিকল্পনা","prayerTracker":"নামাজের ট্র্যাকার","prayers":"নামাজ","qadrDuaTitle":"লাইলাতুল কদরের দোয়া","quran":"কুরআন","quranDone":"পড়া হয়েছে","quranDuasIntro":"কুরআন থেকেই নেওয়া দোয়া — ‘রব্বানা’ দোয়া এবং নবীগণ ও মুমিনদের দোয়া, প্রতিটির সূরা ও আয়াতসহ। এগুলো প্রতিদিনের দোয়ার অতিরিক্ত।","quranDuasTitle":"কুরআনের দোয়াসমূহ","quranGoal":"আজকের কুরআন","quranTarget":"লক্ষ্য","ramadanMubarak":"রমজান মোবারক","readingPlan":"পাঠের পরিকল্পনা","shopDates":"খেজুর ও পানীয়","shopIftar":"ইফতারের রান্না","shopOther":"আমার আরও যা লাগবে","shopSuhoor":"সেহরির জিনিসপত্র","shoppingTitle":"রমজানের কেনাকাটার তালিকা","snacks":"হালকা খাবার","suhoor":"সেহরি","suhoorEnds":"সেহরি শেষ","surahCol":"সূরা","surahTrackerIntro":"ক্রমানুসারে প্রতিটি সূরা, আয়াত সংখ্যাসহ। প্রতিবার একটি সূরা শেষ করলে বাক্সে টিক দিন ও তারিখ লিখুন।","surahTrackerTitle":"কুরআন পাঠের ট্র্যাকার — সব ১১৪ সূরা","taraweeh":"তারাবীহ","timeCol":"সময়","todo":"আজকের কাজের তালিকা","versesCol":"আয়াত","water":"পানি","week":"সপ্তাহ {n}","weekDays":"দিন {a}–{b}","weekGoals":"এই সপ্তাহের লক্ষ্য"},"duas30":["পিপাসা দূর হয়েছে, শিরাগুলো সিক্ত হয়েছে, আর পুরস্কার নিশ্চিত হয়েছে, ইনশাআল্লাহ।","হে আল্লাহ, আমি আপনার জন্যই রোজা রেখেছি, আর আপনার দেওয়া রিজিক দিয়েই ইফতার করছি।","হে আমাদের প্রতিপালক, আমাদেরকে দুনিয়াতে কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন, আর আমাদেরকে আগুনের শাস্তি থেকে রক্ষা করুন।","হে আল্লাহ, আমাকে সাহায্য করুন যেন আমি আপনাকে স্মরণ করি, আপনার শুকরিয়া আদায় করি এবং সর্বোত্তমভাবে আপনার ইবাদত করি।","হে আমার প্রতিপালক, আমার বুক প্রশস্ত করে দিন, আর আমার কাজ আমার জন্য সহজ করে দিন।","হে অন্তরসমূহের পরিবর্তনকারী, আমার অন্তরকে আপনার ধর্মের উপর দৃঢ় রাখুন।","আপনি ছাড়া কোনো উপাস্য নেই; আপনারই পবিত্রতা। নিশ্চয়ই আমি অন্যায়কারীদের অন্তর্ভুক্ত হয়েছি।","হে আল্লাহ, আমি আপনার কাছে উপকারী জ্ঞান, পবিত্র রিজিক এবং কবুল হওয়া আমল চাই।","হে আমাদের প্রতিপালক, আমরা নিজেদের উপর অন্যায় করেছি — আর আপনি যদি আমাদের ক্ষমা না করেন ও দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।","আল্লাহই আমাদের জন্য যথেষ্ট, আর তিনি সর্বোত্তম অভিভাবক।","হে আল্লাহ, আমি আপনার কাছে দুনিয়া ও আখিরাতে ক্ষমা ও নিরাপত্তা চাই।","হে আমার প্রতিপালক, আমার জ্ঞান বাড়িয়ে দিন।","হে আল্লাহ, আমার আত্মাকে তার তাকওয়া দান করুন এবং তাকে পবিত্র করুন — আপনিই তাকে পবিত্র করার সর্বোত্তম; আপনিই তার অভিভাবক ও প্রভু।","আমি মহান আল্লাহর কাছে ক্ষমা চাই, যিনি ছাড়া কোনো উপাস্য নেই, যিনি চিরঞ্জীব, সবকিছুর ধারক, আর আমি তাঁর কাছেই তওবা করি।","হে আমাদের প্রতিপালক, আমাদের পক্ষ থেকে এটি কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।","হে আল্লাহ, আপনি সহজ না করলে কিছুই সহজ নয় — আর আপনি চাইলে কঠিনকেও সহজ করে দিতে পারেন।","হে আমাদের প্রতিপালক, আমাদের স্ত্রী/স্বামী ও সন্তানদের থেকে আমাদের চোখের শান্তি দান করুন, আর আমাদেরকে তাকওয়াবানদের নেতা বানান।","হে আল্লাহ, আমি আপনার কাছে আশ্রয় চাই দুশ্চিন্তা ও শোক থেকে, দুর্বলতা ও অলসতা থেকে, কৃপণতা ও ভীরুতা থেকে, ঋণের বোঝা থেকে এবং মানুষের দ্বারা পরাজিত হওয়া থেকে।","হে চিরঞ্জীব, হে সবকিছুর ধারক — আপনার রহমতের মাধ্যমে আমি সাহায্য চাই।","হে আমাদের প্রতিপালক, আপনি আমাদের হেদায়েত দেওয়ার পর আমাদের অন্তরকে বিচ্যুত হতে দেবেন না; আমাদেরকে আপনার পক্ষ থেকে রহমত দান করুন। নিশ্চয়ই আপনিই মহাদাতা।","হে আল্লাহ, আপনি ক্ষমাশীল এবং ক্ষমা করতে ভালোবাসেন — তাই আমাকে ক্ষমা করে দিন।","আল্লাহর নামে, যাঁর নামের বরকতে পৃথিবীতে বা আকাশে কোনো কিছুই ক্ষতি করতে পারে না — আর তিনি সর্বশ্রোতা, সর্বজ্ঞ।","হে আমাদের প্রতিপালক, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা দৃঢ় করুন, আর অবিশ্বাসী সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করুন।","হে আল্লাহ, আমি আপনার কাছে জান্নাত চাই, আর আগুন থেকে আপনার কাছে আশ্রয় চাই।","আল্লাহর পবিত্রতা ও তাঁর প্রশংসা; মহান আল্লাহর পবিত্রতা।","হে আমাদের প্রতিপালক, আমাকে, আমার পিতামাতাকে এবং মুমিনদেরকে সেদিন ক্ষমা করুন, যেদিন হিসাব কায়েম হবে।","হে আল্লাহ, আপনি যাদের হেদায়েত দিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করে হেদায়েত দিন, যাদের নিরাপত্তা দিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করে নিরাপত্তা দিন, যাদের দায়িত্ব নিয়েছেন আমাকে তাদের অন্তর্ভুক্ত করে আমার দায়িত্ব নিন, আপনি আমাকে যা দিয়েছেন তাতে বরকত দিন, আর আপনি যা নির্ধারণ করেছেন তার অনিষ্ট থেকে আমাকে রক্ষা করুন।","আল্লাহই আমার জন্য যথেষ্ট; তিনি ছাড়া কোনো উপাস্য নেই। আমি তাঁরই উপর ভরসা করি, আর তিনি মহান আরশের প্রতিপালক।","হে আমার প্রতিপালক, আমাকে ক্ষমা করুন এবং আমার তওবা কবুল করুন। নিশ্চয়ই আপনি সর্বাধিক ক্ষমাশীল, পরম দয়ালু।","হে আমাদের প্রতিপালক, আমরা ভুলে গেলে বা ভুল করলে আমাদেরকে পাকড়াও করবেন না।"],"quran":["পরওয়ারদেগার! আমাদের থেকে কবুল কর। নিশ্চয়ই তুমি শ্রবণকারী, সর্বজ্ঞ।","পরওয়ারদেগার! আমাদের উভয়কে তোমার আজ্ঞাবহ কর এবং আমাদের বংশধর থেকেও একটি অনুগত দল সৃষ্টি কর, আমাদের হজ্বের রীতিনীতি বলে দাও এবং আমাদের ক্ষমা কর। নিশ্চয় তুমি তওবা কবুলকারী। দয়ালু।","হে পরওয়ারদেগার! আমাদিগকে দুনয়াতেও কল্যাণ দান কর এবং আখেরাতেও কল্যাণ দান কর এবং আমাদিগকে দোযখের আযাব থেকে রক্ষা কর।","হে আমাদের পালনকর্তা, আমাদের মনে ধৈর্য্য সৃষ্টি করে দাও এবং আমাদেরকে দৃঢ়পদ রাখ-আর আমাদের সাহায্য কর সে কাফের জাতির বিরুদ্ধে।","হে আমাদের পালনকর্তা, যদি আমরা ভুলে যাই কিংবা ভুল করি, তবে আমাদেরকে অপরাধী করো না। হে আমাদের পালনকর্তা! এবং আমাদের উপর এমন দায়িত্ব অর্পণ করো না, যেমন আমাদের পূর্ববর্তীদের উপর অর্পণ করেছ, হে আমাদের প্রভূ! এবং আমাদের দ্বারা ঐ বোঝা বহন করিও না, যা বহন করার শক্তি আমাদের নাই। আমাদের পাপ মোচন কর। আমাদেরকে ক্ষমা কর এবং আমাদের প্রতি দয়া কর। তুমিই আমাদের প্রভু। সুতরাং কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের কে সাহায্যে কর।","হে আমাদের পালনকর্তা! সরল পথ প্রদর্শনের পর তুমি আমাদের অন্তরকে সত্যলংঘনে প্রবৃত্ত করোনা এবং তোমার নিকট থেকে আমাদিগকে অনুগ্রহ দান কর। তুমিই সব কিছুর দাতা।","হে আমাদের পালনকর্তা! তুমি মানুষকে একদিন অবশ্যই একত্রিত করবেঃ এতে কোনই সন্দেহ নেই। নিশ্চয় আল্লাহ তাঁর ওয়াদার অন্যথা করেন না।","হে আমাদের পালনকর্তা, আমরা ঈমান এনেছি, কাজেই আমাদের গোনাহ ক্ষমা করে দাও আর আমাদেরকে দোযখের আযাব থেকে রক্ষা কর।","হে আমার পালনকর্তা! আমার গর্ভে যা রয়েছে আমি তাকে তোমার নামে উৎসর্গ করলাম সবার কাছ থেকে মুক্ত রেখে। আমার পক্ষ থেকে তুমি তাকে কবুল করে নাও, নিশ্চয়ই তুমি শ্রবণকারী, সর্বজ্ঞাত।","হে, আমার পালনকর্তা! তোমার নিকট থেকে আমাকে পুত-পবিত্র সন্তান দান কর-নিশ্চয়ই তুমি প্রার্থনা শ্রবণকারী।","হে আমাদের পালনকর্তা! আমরা সে বিষয়ের প্রতি বিশ্বাস স্থাপন করেছি যা তুমি নাযিল করেছ, আমরা রসূলের অনুগত হয়েছি। অতএব, আমাদিগকে মান্যকারীদের তালিকাভুক্ত করে নাও।","হে আমাদের পালনকর্তা! মোচন করে দাও আমাদের পাপ এবং যা কিছু বাড়াবাড়ি হয়ে গেছে আমাদের কাজে। আর আমাদিগকে দৃঢ় রাখ এবং কাফেরদের উপর আমাদিগকে সাহায্য কর।","পরওয়ারদেগার! এসব তুমি অনর্থক সৃষ্টি করনি। সকল পবিত্রতা তোমারই, আমাদিগকে তুমি দোযখের শাস্তি থেকে বাঁচাও।","হে আমাদের পালনকর্তা! নিশ্চয় তুমি যাকে দোযখে নিক্ষেপ করলে তাকে সবসময়ে অপমানিত করলে; আর জালেমদের জন্যে তো সাহায্যকারী নেই।","হে আমাদের পালনকর্তা! আমরা নিশ্চিতরূপে শুনেছি একজন আহবানকারীকে ঈমানের প্রতি আহবান করতে যে, তোমাদের পালনকর্তার প্রতি ঈমান আন; তাই আমরা ঈমান এনেছি। হে আমাদের পালনকর্তা! অতঃপর আমাদের সকল গোনাহ মাফ কর এবং আমাদের সকল দোষত্রুটি দুর করে দাও, আর আমাদের মৃত্যু দাও নেক লোকদের সাথে।","হে আমাদের পালনকর্তা! আমাদেরকে দাও, যা তুমি ওয়াদা করেছ তোমার রসূলগণের মাধ্যমে এবং কিয়ামতের দিন আমাদিগকে তুমি অপমানিত করো না। নিশ্চয় তুমি ওয়াদা খেলাফ করো না।","হে আল্লাহ আমাদের পালনকর্তা আমাদের প্রতি আকাশ থেকে খাদ্যভর্তি খাঞ্চা অবতরণ করুন। তা আমাদের জন্যে অর্থাৎ, আমাদের প্রথম ও পরবর্তী সবার জন্যে আনন্দোৎসব হবে এবং আপনার পক্ষ থেকে একটি নিদর্শন হবে। আপনি আমাদের রুযী দিন। আপনিই শ্রেষ্ট রুযীদাতা।","হে আমাদের পালনকর্তা আমরা নিজেদের প্রতি জুলম করেছি। যদি আপনি আমাদেরকে ক্ষমা না করেন এবং আমাদের প্রতি অনুগ্রহ না করেন, তবে আমরা অবশ্যই অবশ্যই ধ্বংস হয়ে যাব।","হে আমাদের পরওয়ারদেগার আমাদের জন্য ধৈর্য্যের দ্বার খুলে দাও এবং আমাদেরকে মুসলমান হিসাবে মৃত্যু দান কর।","হে আমার পরওয়ারদেগার, ক্ষমা কর আমাকে আর আমার ভাইকে এবং আমাদেরকে তোমার রহমতের অন্তর্ভুক্ত কর। তুমি যে সর্বাধিক করুণাময়।","হে আমাদের পালনকর্তা, আমাদের উপর এ জালেম কওমের শক্তি পরীক্ষা করিও না। আর আমাদেরকে অনুগ্রহ করে ছাড়িয়ে দাও এই কাফেরদের কবল থেকে।","হে পালনকর্তা আপনি আমাকে রাষ্ট্রক্ষমতাও দান করেছেন এবং আমাকে বিভিন্ন তাৎপর্য সহ ব্যাখ্যা করার বিদ্যা শিখিয়ে দিয়েছেন। হে নভোমন্ডল ও ভূ-মন্ডলের স্রষ্টা, আপনিই আমার কার্যনির্বাহী ইহকাল ও পরকালে। আমাকে ইসলামের উপর মৃত্যুদান করুন এবং আমাকে স্বজনদের সাথে মিলিত করুন।","হে পালনকর্তা, এ শহরকে শান্তিময় করে দিন এবং আমাকে ও আমার সন্তান সন্ততিকে মূর্তি পূজা থেকে দূরে রাখুন।","হে আমাদের পালনকর্তা, আপনি তো জানেন আমরা যা কিছু গোপনে করি এবং যা কিছু প্রকাশ্য করি। আল্লাহর কাছে পৃথিবীতে ও আকাশে কোন কিছুই গোপন নয়।","হে আমার পালনকর্তা, আমাকে নামায কায়েমকারী করুন এবং আমার সন্তানদের মধ্যে থেকেও। হে আমাদের পালনকর্তা, এবং কবুল করুন আমাদের দোয়া।","হে আমাদের পালনকর্তা, আমাকে, আমার পিতা-মাতাকে এবং সব মুমিনকে ক্ষমা করুন, যেদিন হিসাব কায়েম হবে।","হে পালনকর্তা! আমাকে দাখিল করুন সত্যরূপে এবং আমাকে বের করুন সত্যরূপে এবং দান করুন আমাকে নিজের কাছ থেকে রাষ্ট্রীয় সাহায্য।","হে আমাদের পালনকর্তা, আমাদেরকে নিজের কাছ থেকে রহমত দান করুন এবং আমাদের জন্যে আমাদের কাজ সঠিকভাবে পূর্ণ করুন।","হে আমার পালনকর্তা আমার বক্ষ প্রশস্ত করে দিন। এবং আমার কাজ সহজ করে দিন। এবং আমার জিহবা থেকে জড়তা দূর করে দিন। যাতে তারা আমার কথা বুঝতে পারে।","আমি দুঃখকষ্টে পতিত হয়েছি এবং আপনি দয়াবানদের চাইতেও সর্বশ্রেষ্ট দয়াবান।","তুমি ব্যতীত কোন উপাস্য নেই; তুমি নির্দোষ আমি গুনাহগার।","হে আমার পালনকর্তা আমাকে একা রেখো না। তুমি তো উত্তম ওয়ারিস।","হে আমার পালনকর্তা! আমি শয়তানের প্ররোচনা থেকে আপনার আশ্রয় প্রার্থনা করি,","হে আমার পালনকর্তা! আমার নিকট তাদের উপস্থিতি থেকে আপনার আশ্রয় প্রার্থনা করি।","হে আমাদের পালনকর্তা! আমরা বিশ্বাস স্থাপন করেছি। অতএব তুমি আমাদেরকে ক্ষমা কর ও আমাদের প্রতি রহম কর। তুমি তো দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু।","হে আমার পালনকর্তা, ক্ষমা করুন ও রহম করুন। রহমকারীদের মধ্যে আপনি শ্রেষ্ট রহমকারী।","হে আমার পালনকর্তা, আমাদের কাছথেকে জাহান্নামের শাস্তি হটিয়ে দাও। নিশ্চয় এর শাস্তি নিশ্চিত বিনাশ;","হে আমাদের পালনকর্তা, আমাদের স্ত্রীদের পক্ষ থেকে এবং আমাদের সন্তানের পক্ষ থেকে আমাদের জন্যে চোখের শীতলতা দান কর এবং আমাদেরকে মুত্তাকীদের জন্যে আদর্শস্বরূপ কর।","হে আমার পালনকর্তা, আমাকে প্রজ্ঞা দান কর এবং আমাকে সৎকর্মশীলদের অন্তর্ভুক্ত কর","হে আমার পালনকর্তা, তুমি আমাকে সামর্থ্য দাও যাতে আমি তোমার সেই নিয়ামতের কৃতজ্ঞতা প্রকাশ করতে পারি, যা তুমি আমাকে ও আমার পিতা-মাতাকে দান করেছ এবং যাতে আমি তোমার পছন্দনীয় সৎকর্ম করতে পারি এবং আমাকে নিজ অনুগ্রহে তোমার সৎকর্মপরায়ন বান্দাদের অন্তর্ভুক্ত কর।","হে আমার পালনকর্তা, আমি তো নিজের উপর জুলুম করে ফেলেছি। অতএব, আমাকে ক্ষমা করুন। আল্লাহ তাকে ক্ষমা করলেন। নিশ্চয় তিনি ক্ষমাশীল, দয়ালু।","হে আমার পালনকর্তা, তুমি আমার প্রতি যে অনুগ্রহ নাযিল করবে, আমি তার মুখাপেক্ষী।","হে আমার পরওয়ারদেগার! আমাকে এক সৎপুত্র দান কর।","হে আমার পালনকর্তা, আমাকে মাফ করুন এবং আমাকে এমন সাম্রাজ্য দান করুন যা আমার পরে আর কেউ পেতে পারবে না। নিশ্চয় আপনি মহাদাতা।","হে আমাদের পালনকর্তা, আপনার রহমত ও জ্ঞান সবকিছুতে পরিব্যাপ্ত। অতএব, যারা তওবা করে এবং আপনার পথে চলে, তাদেরকে ক্ষমা করুন এবং জাহান্নামের আযাব থেকে রক্ষা করুন।","হে আমার পালনকর্তা, আমাকে এরূপ ভাগ্য দান কর, যাতে আমি তোমার নেয়ামতের শোকর করি, যা তুমি দান করেছ আমাকে ও আমার পিতা-মাতাকে এবং যাতে আমি তোমার পছন্দনীয় সৎকাজ করি। আমার সন্তানদেরকে সৎকর্মপরায়ণ কর, আমি তোমার প্রতি তওবা করলাম এবং আমি আজ্ঞাবহদের অন্যতম।","আমি অক্ষম, অতএব, তুমি প্রতিবিধান কর।","হে আমাদের পালনকর্তা, আমাদেরকে এবং ঈমানে আগ্রহী আমাদের ভ্রাতাগণকে ক্ষমা কর এবং ঈমানদারদের বিরুদ্ধে আমাদের অন্তরে কোন বিদ্বেষ রেখো না। হে আমাদের পালনকর্তা, আপনি দয়ালু, পরম করুণাময়।","হে আমাদের পালনকর্তা! আমরা তোমারই উপর ভরসা করেছি, তোমারই দিকে মুখ করেছি এবং তোমারই নিকট আমাদের প্রত্যাবর্তন।","হে আমাদের পালনকর্তা! তুমি আমাদেরকে কাফেরদের জন্য পরীক্ষার পাত্র করো না। হে আমাদের পালনকর্তা! আমাদের ক্ষমা কর। নিশ্চয় তুমি পরাক্রমশালী, প্রজ্ঞাময়।","হে আমাদের পালনকর্তা, আমাদের নূরকে পূর্ণ করে দিন এবং আমাদেরকে ক্ষমা করুন। নিশ্চয় আপনি সবকিছুর উপর সর্ব শক্তিমান।","হে আমার পালনকর্তা! আপনি আমাকে, আমার পিতা-মাতাকে, যারা মুমিন হয়ে আমার গৃহে প্রবেশ করে-তাদেরকে এবং মুমিন পুরুষ ও মুমিন নারীদেরকে ক্ষমা করুন এবং যালেমদের কেবল ধ্বংসই বৃদ্ধি করুন।"],"deeds":["দান করুন (যতটুকুই হোক)","অর্থসহ কুরআন পড়ুন","তারাবীহ পড়ুন","একজন রোজাদারকে ইফতার করান","বাবা-মা বা পরিবারকে সাহায্য করুন","১০০ বার ইস্তিগফার বলুন","কোনো আত্মীয়কে ফোন করুন বা দেখা করুন","প্রতিবেশীর সাথে খাবার ভাগ করুন","অতিরিক্ত ২ রাকাত নামাজ পড়ুন","একটি নতুন দোয়া শিখুন","মিষ্টি কথা বলুন, গীবত নয়","অন্য কারো জন্য দোয়া করুন"],"lastTen":["জামাতে এশা ও ফজর পড়ুন","তারাবীহ / কিয়াম পড়ুন","কুরআন পড়ুন","প্রচুর দোয়া করুন","কদরের দোয়াটি বারবার বলুন","দান করুন","জিকির ও ইস্তিগফার","ইতিকাফ / নীরব ইবাদতের সময়"],"eidPrep":["যাকাতুল ফিতর দিন","ঈদের পোশাক বেছে নিন","ঈদের নামাজের জায়গা ও সময় ঠিক করুন","পরিবারের জন্য উপহার কিনুন","ঈদি / টাকা উপহার দিন","ঈদের খাবার ও মিষ্টির পরিকল্পনা করুন","ঘর পরিষ্কার ও সাজান","দূরের আত্মীয়দের ফোন করুন","ক্ষমা করুন ও মিলমিশ করুন","অভাবীদের জন্য দানের প্রস্তুতি নিন","ঈদের দিনের দেখা-সাক্ষাতের পরিকল্পনা করুন","রমজানের জন্য আল্লাহর শুকরিয়া আদায় করুন"],"kidsDeeds":["কারো দিকে হাসো — হাসিও একটি দান!","খাওয়ার আগে বিসমিল্লাহ বলো","ইফতারের টেবিল সাজাতে সাহায্য করো","মা ও বাবাকে ধন্যবাদ বলো","তোমার প্রিয় খেলনাটি ভাগ করে নাও","ইফতারে কাউকে একটি খেজুর দাও","খাওয়ার পর আলহামদুলিল্লাহ বলো","দানের বাক্সে কিছু পয়সা রাখো","একটি গাছে পানি দাও","পাখিদের খাবার দাও","আগে সালাম দাও","নিজের ঘর গোছাতে সাহায্য করো","কারো জন্য রমজানের কার্ড বানাও","ভুল করলে দুঃখিত বলো","একটি ছোট সূরা পড়ো বা শোনো","তোমার পরিবারের জন্য দোয়া করো","কারো জন্য কিছু বহন করতে সাহায্য করো","তোমার নাশতা ভাগ করে নাও","১০ বার সুবহানআল্লাহ বলো","দাদা-দাদি / নানা-নানিকে ফোন করো বা দেখা করো","ময়লা তুলে ডাস্টবিনে ফেলো","ধন্যবাদের একটি ছবি আঁকো","পরিবারের সাথে একসাথে নামাজ পড়ো","একটি নতুন আরবি শব্দ শেখো","প্রতিবেশীকে খাবার দাও","বন্ধুর প্রতি সদয় হও","১০ বার আস্তাগফিরুল্লাহ বলো","আজ একটু রোজা রাখার চেষ্টা করো","ইফতারের পর ধোয়ামোছায় সাহায্য করো","সব মুসলিমের জন্য দোয়া করো"],"coloring":{"crescent":"অর্ধচন্দ্র ও তারা","dates":"এক বাটি খেজুর","lantern":"রমজানের ফানুস (লণ্ঠন)","mat":"জায়নামাজ","mosque":"মসজিদ","quran":"রেহালে কুরআন"},"months":["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],"monthsShort":["জানু","ফেব্রু","মার্চ","এপ্রি","মে","জুন","জুলা","আগ","সেপ্টে","অক্টো","নভে","ডিসে"],"weekdays":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"]},"ur":{"strings":{"asr":"عصر","belongsTo":"یہ پلانر ان کا ہے","bookmarkDua":"اے اللہ، میری مدد فرما کہ میں تجھے یاد کروں، تیرا شکر ادا کروں اور اچھی طرح تیری عبادت کروں۔","bookmarkDuaSrc":"ابو داؤد 1522","bookmarkMotto":"دن بہ دن، عمل بہ عمل","bookmarksIntro":"آپ کے پلانر اور قرآن کے لیے چار بک مارکس۔ نقطہ دار لکیروں پر کاٹیں۔","bookmarksTitle":"رمضان بک مارکس","brand":"SONGLAP DEALS","cardDay":"دن {n}","certFor":"روزے، نماز، قرآن اور نیکیوں سے بھرے خوبصورت رمضان کے لیے","certPresented":"یہ سرٹیفکیٹ فخر کے ساتھ پیش کیا جاتا ہے","certTitle":"میرا پہلا رمضان","certWellDone":"شاباش، چھوٹے ستارے!","coloringTitle":"تصویر میں رنگ بھرو!","coverTitle":"رمضان پلانر","coverYear":"رمضان 1448 ہجری · 2027","dateCol":"تاریخ","day":"دن","dayOfRamadan":"رمضان کا دن {n}","deedsIntro":"جس دن نیکی کریں، اس دن خانے میں نشان لگائیں۔ روزانہ کی جانے والی چھوٹی نیکیاں سب سے محبوب ہیں۔","deedsTitle":"نیکیوں کا ٹریکر","dhuhr":"ظہر","done":"مکمل","duaCardDay":"دن {n}","duaCardsIntro":"روزانہ کی تمام 30 دعائیں کاٹنے والے کارڈز کی صورت میں — رمضان کے ہر دن کے لیے ایک۔ نقطہ دار لکیروں پر کاٹیں اور کارڈ وہاں رکھیں جہاں نظر آئے۔","duaCardsTitle":"پرنٹ کے قابل دعا کارڈز","duaOfDay":"آج کی دعا","eidDayTitle":"عید کے دن کا پلانر","eidGratitude":"تین چیزیں جن پر میں اس رمضان اللہ کا شکر ادا کرتا ہوں","eidMubarak":"عید مبارک!","eidPrepTitle":"عید کی تیاری","extraWorship":"ان راتوں کے لیے میرا عبادت کا منصوبہ","fajr":"فجر","fasted":"روزہ رکھا","fasting":"روزہ","focusLine":"توجہ","footerBrand":"رمضان پلانر · Songlap Deals","glasses":"گلاس","goodDeedToday":"آج کی نیکی","gratitude":"آج میں جس کے لیے شکر گزار ہوں","iftar":"افطار","iftarTime":"افطار کا وقت","isha":"عشاء","juz":"پارہ","khatmaIntro":"روزانہ ایک پارہ پڑھنے سے رمضان میں پورا قرآن ختم ہو جاتا ہے۔ ہر پارہ مکمل کرنے پر نشان لگائیں۔","khatmaTitle":"قرآن ختم ٹریکر","kidsCardsIntro":"رمضان کے ہر دن کے لیے ایک کارڈ۔ کارڈ پڑھو، نیکی کرو، اور ستارہ رنگو!","kidsCardsTitle":"بچوں کے لیے 30 نیکی کارڈز","kidsChartIntro":"ہر اس دن ایک ستارہ رنگو جس دن تم روزہ رکھو (چھوٹا سا روزہ بھی!)، نماز پڑھو، نیکی کرو یا قرآن پڑھو۔","kidsChartTitle":"میرا رمضان ستارہ چارٹ","kidsDivider":"بچوں کا رمضان پیک","kidsDividerSub":"ستاروں کے چارٹ، نیکی کے کارڈز، رنگ بھرنے کے صفحات اور سرٹیفکیٹ — صرف بچوں کے لیے!","lastTenIntro":"انہی راتوں میں لیلۃ القدر ہے — ہزار مہینوں سے بہتر رات۔ ہر رات، خاص طور پر طاق راتوں (21، 23، 25، 27، 29) میں عبادت بڑھا دیں۔","lastTenTitle":"آخری دس راتیں","maghrib":"مغرب","mealPlan":"کھانے کا منصوبہ","mealsTitle":"کھانوں کا پلانر — پورا مہینہ","moonNote":"رمضان کا آغاز چاند دیکھنے پر منحصر ہے۔ اگر آپ کے یہاں رمضان ایک دن پہلے یا بعد میں شروع ہو تو سیٹنگز میں آغاز کی تاریخ بدل کر پلانر دوبارہ بنائیں۔","night":"رات","notes":"نوٹس","notesTitle":"نوٹس","overviewTitle":"رمضان ایک نظر میں — 30 دن","pageOf":"صفحہ {n}","planCol":"منصوبہ","prayerTracker":"نماز ٹریکر","prayers":"نمازیں","qadrDuaTitle":"لیلۃ القدر کی دعا","quran":"قرآن","quranDone":"پڑھا","quranDuasIntro":"خود قرآن سے لی گئی دعائیں — ”ربنا“ دعائیں اور انبیاء اور مومنوں کی دعائیں، ہر ایک کی سورت اور آیت کے ساتھ۔ یہ روزانہ کی دعاؤں کے علاوہ ہیں۔","quranDuasTitle":"قرآن کی دعائیں","quranGoal":"آج کا قرآن","quranTarget":"ہدف","ramadanMubarak":"رمضان مبارک","readingPlan":"مطالعے کا منصوبہ","shopDates":"کھجوریں اور مشروبات","shopIftar":"افطار کی پکائی","shopOther":"مجھے درکار دیگر چیزیں","shopSuhoor":"سحری کا سامان","shoppingTitle":"رمضان کی خریداری کی فہرست","snacks":"ہلکی غذا","suhoor":"سحری","suhoorEnds":"سحری ختم","surahCol":"سورت","surahTrackerIntro":"ترتیب سے ہر سورت، اس کی آیات کی تعداد کے ساتھ۔ جب بھی سورت ختم کریں، خانے میں نشان لگائیں اور تاریخ لکھیں۔","surahTrackerTitle":"قرآن خوانی ٹریکر — تمام 114 سورتیں","taraweeh":"تراویح","timeCol":"وقت","todo":"آج کے کاموں کی فہرست","versesCol":"آیات","water":"پانی","week":"ہفتہ {n}","weekDays":"دن {a}–{b}","weekGoals":"اس ہفتے کے اہداف"},"duas30":["پیاس ختم ہو گئی، رگیں تر ہو گئیں، اور اجر یقینی ہو گیا، ان شاء اللہ۔","اے اللہ، میں نے تیرے ہی لیے روزہ رکھا، اور تیرے ہی رزق سے افطار کرتا ہوں۔","اے ہمارے پروردگار، ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے، اور ہمیں آگ کے عذاب سے بچا۔","اے اللہ، میری مدد فرما کہ میں تجھے یاد کروں، تیرا شکر ادا کروں، اور بہترین طریقے سے تیری عبادت کروں۔","اے میرے پروردگار، میرے لیے میرا سینہ کھول دے، اور میرے لیے میرا کام آسان کر دے۔","اے دلوں کو پھیرنے والے، میرے دل کو اپنے دین پر ثابت قدم رکھ۔","تیرے سوا کوئی معبود نہیں؛ تو پاک ہے۔ بے شک میں ظالموں میں سے ہو گیا ہوں۔","اے اللہ، میں تجھ سے نفع بخش علم، پاکیزہ رزق اور قبول ہونے والے اعمال مانگتا ہوں۔","اے ہمارے پروردگار، ہم نے اپنی جانوں پر ظلم کیا — اور اگر تو ہمیں نہ بخشے اور ہم پر رحم نہ کرے تو ہم یقیناً خسارہ اٹھانے والوں میں سے ہو جائیں گے۔","اللہ ہمارے لیے کافی ہے، اور وہ بہترین کارساز ہے۔","اے اللہ، میں تجھ سے دنیا اور آخرت میں عفو اور عافیت مانگتا ہوں۔","اے میرے پروردگار، میرے علم میں اضافہ فرما۔","اے اللہ، میری جان کو اس کا تقویٰ عطا فرما اور اسے پاک کر دے — تو ہی اسے پاک کرنے والا سب سے بہتر ہے؛ تو ہی اس کا ولی اور مولیٰ ہے۔","میں اللہ عزوجل سے بخشش مانگتا ہوں، جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ ہے، سب کو قائم رکھنے والا ہے، اور میں اسی کی طرف توبہ کرتا ہوں۔","اے ہمارے پروردگار، ہم سے یہ قبول فرما۔ بے شک تو سب سننے والا، سب جاننے والا ہے۔","اے اللہ، کوئی چیز آسان نہیں مگر جسے تو آسان کر دے — اور تو چاہے تو مشکل کو بھی آسان کر سکتا ہے۔","اے ہمارے پروردگار، ہمیں ہمارے ازواج اور ہماری اولاد سے آنکھوں کی ٹھنڈک عطا فرما، اور ہمیں پرہیزگاروں کا امام بنا۔","اے اللہ، میں تیری پناہ مانگتا ہوں فکر اور غم سے، کمزوری اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ سے اور لوگوں کے غلبے سے۔","اے ہمیشہ زندہ، اے سب کو قائم رکھنے والے — تیری رحمت سے میں مدد مانگتا ہوں۔","اے ہمارے پروردگار، ہمیں ہدایت دینے کے بعد ہمارے دلوں کو ٹیڑھا نہ ہونے دے؛ ہمیں اپنے پاس سے رحمت عطا فرما۔ بے شک تو بڑا عطا فرمانے والا ہے۔","اے اللہ، تو معاف کرنے والا ہے اور معاف کرنا پسند فرماتا ہے — پس مجھے معاف فرما دے۔","اللہ کے نام سے، جس کے نام کی برکت سے زمین و آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی — اور وہ سب سننے والا، سب جاننے والا ہے۔","اے ہمارے پروردگار، ہم پر صبر انڈیل دے، ہمارے قدم ثابت رکھ، اور کافر قوم کے مقابلے میں ہماری مدد فرما۔","اے اللہ، میں تجھ سے جنت مانگتا ہوں، اور آگ سے تیری پناہ مانگتا ہوں۔","اللہ پاک ہے اور اسی کی حمد ہے؛ اللہ عزوجل پاک ہے۔","اے ہمارے پروردگار، مجھے، میرے والدین کو اور مومنوں کو اس دن بخش دے جب حساب قائم ہوگا۔","اے اللہ، جنہیں تو نے ہدایت دی ان میں شامل کر کے مجھے ہدایت دے، جنہیں تو نے عافیت دی ان میں شامل کر کے مجھے عافیت دے، جن کی تو نے سرپرستی کی ان میں شامل کر کے میری سرپرستی فرما، جو کچھ تو نے مجھے دیا اس میں برکت دے، اور جس کا تو نے فیصلہ کیا اس کے شر سے مجھے بچا۔","اللہ میرے لیے کافی ہے؛ اس کے سوا کوئی معبود نہیں۔ اسی پر میں نے بھروسہ کیا، اور وہ عرش عظیم کا رب ہے۔","اے میرے پروردگار، مجھے بخش دے اور میری توبہ قبول فرما۔ بے شک تو سب سے زیادہ بخشنے والا، سب سے زیادہ رحم فرمانے والا ہے۔","اے ہمارے پروردگار، اگر ہم بھول جائیں یا خطا کر بیٹھیں تو ہم سے مؤاخذہ نہ فرما۔"],"quran":["اے پروردگار، ہم سے یہ خدمت قبول فرما۔ بےشک تو سننے والا (اور) جاننے والا ہے","اے پروردگار، ہم کو اپنا فرمانبردار بنائے رکھیو۔ اور ہماری اولاد میں سے بھی ایک گروہ کو اپنا مطیع بنائے رہیو، اور (پروردگار) ہمیں طریق عبادت بتا اور ہمارے حال پر (رحم کے ساتھ) توجہ فرما۔ بے شک تو توجہ فرمانے والا مہربان ہے","پروردگار ہم کو دنیا میں بھی نعمت عطا فرما اور آخرت میں بھی نعمت بخشیو اور دوزخ کے عذاب سے محفوظ رکھیو","اے پروردگار ہم پر صبر کے دہانے کھول دے اور ہمیں (لڑائی میں) ثابت قدم رکھ اور (لشکر) کفار پر فتحیاب کر","اے پروردگار اگر ہم سے بھول یا چوک ہوگئی ہو تو ہم سے مؤاخذہ نہ کیجیو۔ اے پروردگار ہم پر ایسا بوجھ نہ ڈالیو جیسا تو نے ہم سے پہلے لوگوں پر ڈالا تھا۔ اے پروردگار جتنا بوجھ اٹھانے کی ہم میں طاقت نہیں اتنا ہمارے سر پر نہ رکھیو۔ اور (اے پروردگار) ہمارے گناہوں سے درگزر کر اور ہمیں بخش دے۔ اور ہم پر رحم فرما۔ تو ہی ہمارا مالک ہے اور ہم کو کافروں پر غالب فرما","اے پروردگار جب تو نے ہمیں ہدایت بخشی ہے تو اس کے بعد ہمارے دلوں میں کجی نہ پیدا کر دیجیو اور ہمیں اپنے ہاں سے نعمت عطا فرما تو تو بڑا عطا فرمانے والا ہے","اے پروردگار! تو اس روز جس (کے آنے) میں کچھ بھی شک نہیں سب لوگوں کو (اپنے حضور میں) جمع کرلے گا بے شک خدا خلاف وعدہ نہیں کرتا","اے پروردگار ہم ایمان لے آئے سو ہم کو ہمارے گناہ معاف فرما اور دوزخ کے عذاب سے محفوظ رکھ","اے پروردگار جو (بچہ) میرے پیٹ میں ہے میں اس کو تیری نذر کرتی ہوں اسے دنیا کے کاموں سے آزاد رکھوں گی تو (اسے) میری طرف سے قبول فرما توتو سننے والا (اور) جاننے والا ہے","پروردگار مجھے اپنی جناب سے اولاد صالح عطا فرما تو بے شک دعا سننے (اور قبول کرنے) والا ہے","اے پروردگار جو (کتاب) تو نے نازل فرمائی ہے ہم اس پر ایمان لے آئے اور (تیرے) پیغمبر کے متبع ہو چکے تو ہم کو ماننے والوں میں لکھ رکھ","اے پروردگار ہمارے گناہ اور زیادتیاں جو ہم اپنے کاموں میں کرتے رہے ہیں معاف فرما اور ہم کو ثابت قدم رکھ اور کافروں پر فتح عنایت فرما","اے پروردگار! تو نے اس (مخلوق) کو بے فائدہ نہیں پیدا کیا تو پاک ہے تو (قیامت کے دن) ہمیں دوزخ کے عذاب سے بچائیو","اے پروردگار جس کو تو نے دوزخ میں ڈالا اسے رسوا کیا اور ظالموں کا کوئی مددگار نہیں","اے پروردگارہم نے ایک ندا کرنے والے کو سنا کہ ایمان کے لیے پکار رہا تھا (یعنی) اپنے پروردگار پر ایمان لاؤ تو ہم ایمان لے آئے اے پروردگار ہمارے گناہ معاف فرما اور ہماری برائیوں کو ہم سے محو کر اور ہم کو دنیا سے نیک بندوں کے ساتھ اٹھا","اے پروردگار تو نے جن جن چیزوں کے ہم سے اپنے پیغمبروں کے ذریعے سے وعدے کیے ہیں وہ ہمیں عطا فرما اور قیامت کے دن ہمیں رسوا نہ کیجو کچھ شک نہیں کہ تو خلاف وعدہ نہیں کرتا","اے ہمارے پروردگار! ہم پر آسمان سے خوان نازل فرما کہ ہمارے لیے (وہ دن) عید قرار پائے یعنی ہمارے اگلوں اور پچھلوں (سب) کے لیے اور وہ تیری طرف سے نشانی ہو اور ہمیں رزق دے تو بہتر رزق دینے والا ہے","پروردگار ہم نے اپنی جانوں پر ظلم کیا اور اگر تو ہمیں نہیں بخشے گا اور ہم پر رحم نہیں کرے گا تو ہم تباہ ہو جائیں گے","اے پروردگار ہم پر صبرواستقامت کے دہانے کھول دے اور ہمیں (ماریو تو) مسلمان ہی ماریو","اے میرے پروردگار مجھے اور میرے بھائی کو معاف فرما اور ہمیں اپنی رحمت میں داخل کر تو سب سے بڑھ کر رحم کرنے والا ہے","اے ہمارے پروردگار ہم کو ظالم لوگوں کے ہاتھ سے آزمائش میں نہ ڈال اور اپنی رحمت سے قوم کفار سے نجات بخش","اے میرے پروردگار تو نے مجھ کو حکومت سے بہرہ دیا اور خوابوں کی تعبیر کا علم بخشا۔ اے آسمانوں اور زمین کے پیدا کرنے والے تو ہی دنیا اور آخرت میں میرا کارساز ہے۔ تو مجھے (دنیا سے) اپنی اطاعت (کی حالت) میں اٹھائیو اور (آخرت میں) اپنے نیک بندوں میں داخل کیجیو","میرے پروردگار اس شہر کو (لوگوں کے لیے) امن کی جگہ بنا دے۔ اور مجھے اور میری اولاد کو اس بات سے کہ بتوں کی پرستش کرنے لگیں بچائے رکھ","اے پروردگار جو بات ہم چھپاتے اور جو ظاہر کرتے ہیں تو سب جانتا ہے۔ اور خدا سے کوئی چیز مخفی نہیں (نہ) زمین میں نہ آسمان میں","اے پروردگار مجھ کو (ایسی توفیق عنایت) کر کہ نماز پڑھتا رہوں اور میری اولاد کو بھی (یہ توفیق بخش) اے پروردگار میری دعا قبول فرما","اے پروردگار حساب (کتاب) کے دن مجھ کو اور میرے ماں باپ کو اور مومنوں کو مغفرت کیجیو","اے پروردگار مجھے (مدینے میں) اچھی طرح داخل کیجیو اور (مکے سے) اچھی طرح نکالیو۔ اور اپنے ہاں سے زور وقوت کو میرا مددگار بنائیو","اے ہمارے پروردگار ہم پر اپنے ہاں سے رحمت نازل فرما۔ اور ہمارے کام درستی (کے سامان) مہیا کر","میرے پروردگار (اس کام کے لئے) میرا سینہ کھول دے اور میرا کام آسان کردے اور میری زبان کی گرہ کھول دے تاکہ وہ بات سمجھ لیں","مجھے ایذا ہو رہی ہے اور تو سب سے بڑھ کر رحم کرنے والا ہے","تیرے سوا کوئی معبود نہیں۔ تو پاک ہے (اور) بےشک میں قصوروار ہوں","پروردگار مجھے اکیلا نہ چھوڑ اور تو سب سے بہتر وارث ہے","اے پروردگار! میں شیطانوں کے وسوسوں سے تیری پناہ مانگتا ہو","اے پروردگار! اس سے بھی تیری پناہ مانگتا ہوں کہ وہ میرے پاس آموجود ہوں","اے ہمارے پروردگار ہم ایمان لائے تو تُو ہم کو بخش دے اور ہم پر رحم کر اور تو سب سے بہتر رحم کرنے والا ہے","میرے پروردگار مجھے بخش دے اور (مجھ پر) رحم کر اور تو سب سے بہتر رحم کرنے والا ہے","اے پروردگار دوزخ کے عذاب کو ہم سے دور رکھیو کہ اس کا عذاب بڑی تکلیف کی چیز ہے","اے پروردگار ہم کو ہماری بیویوں کی طرف سے (دل کا چین) اور اولاد کی طرف سے آنکھ کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا امام بنا","اے پروردگار مجھے علم ودانش عطا فرما اور نیکوکاروں میں شامل کر","اے پروردگار! مجھے توفیق عطا فرما کہ جو احسان تونے مجھ پر اور میرے ماں باپ پر کئے ہیں ان کا شکر کروں اور ایسے نیک کام کروں کہ تو ان سے خوش ہوجائے اور مجھے اپنی رحمت سے اپنے نیک بندوں میں داخل فرما","اے پروردگار میں نے اپنے آپ پر ظلم کیا تو مجھے بخش دے تو خدا نے اُن کو بخش دیا۔ بیشک وہ بخشنے والا مہربان ہے","پروردگار میں اس کا محتاج ہوں کہ تو مجھ پر اپنی نعمت نازل فرمائے","اے پروردگار مجھے (اولاد) عطا فرما (جو) سعادت مندوں میں سے (ہو)","اے پروردگار مجھے مغفرت کر اور مجھ کو ایسی بادشاہی عطا کر کہ میرے بعد کسی کو شایاں نہ ہو۔ بےشک تو بڑا عطا فرمانے والا ہے","اے ہمارے پروردگار تیری رحمت اور تیرا علم ہر چیز کو احاطہ کئے ہوئے ہے تو جن لوگوں نے توبہ کی اور تیرے رستے پر چلے ان کو بخش دے اور دوزخ کے عذاب سے بچالے","اے میرے پروردگار مجھے توفیق دے کہ تو نے جو احسان مجھ پر اور میرے ماں باپ پر کئے ہیں ان کا شکر گزار ہوں اور یہ کہ نیک عمل کروں جن کو تو پسند کرے۔ اور میرے لئے میری اولاد میں صلاح (وتقویٰ) دے۔ میں تیری طرف رجوع کرتا ہوں اور میں فرمانبرداروں میں ہوں","میں (ان کے مقابلے میں) کمزور ہوں تو (ان سے) بدلہ لے","اے پروردگار ہمارے اور ہمارے بھائیوں کے جو ہم سے پہلے ایمان لائے ہیں گناہ معاف فرما اور مومنوں کی طرف سے ہمارے دل میں کینہ (وحسد) نہ پیدا ہونے دے۔ اے ہمارے پروردگار تو بڑا شفقت کرنے والا مہربان ہے","اے ہمارے پروردگار تجھ ہی پر ہمارا بھروسہ ہے اور تیری ہی طرف ہم رجوع کرتے ہیں اور تیرے ہی حضور میں (ہمیں) لوٹ کر آنا ہے","اے ہمارے پروردگار ہم کو کافروں کے ہاتھ سے عذاب نہ دلانا اور اے پروردگار ہمارے ہمیں معاف فرما۔ بےشک تو غالب حکمت والا ہے","اے پروردگار ہمارا نور ہمارے لئے پورا کر اور ہمیں معاف کرنا۔ بےشک خدا ہر چیز پر قادر ہے","اے میرے پروردگار مجھ کو اور میرے ماں باپ کو اور جو ایمان لا کر میرے گھر میں آئے اس کو اور تمام ایمان والے مردوں اور ایمان والی عورتوں کو معاف فرما اور ظالم لوگوں کے لئے اور زیادہ تباہی بڑھا"],"deeds":["صدقہ دیں (تھوڑا سا ہی سہی)","معنی کے ساتھ قرآن پڑھیں","تراویح پڑھیں","کسی روزہ دار کو افطار کرائیں","والدین یا گھر والوں کی مدد کریں","100 بار استغفار کہیں","کسی رشتہ دار کو فون کریں یا ملنے جائیں","پڑوسی کے ساتھ کھانا بانٹیں","2 اضافی رکعتیں پڑھیں","ایک نئی دعا سیکھیں","نرمی سے بات کریں، غیبت نہ کریں","کسی اور کے لیے دعا کریں"],"lastTen":["عشاء و فجر باجماعت پڑھیں","تراویح / قیام پڑھیں","قرآن پڑھیں","بہت دعائیں کریں","قدر کی دعا دہرائیں","صدقہ دیں","ذکر و استغفار","اعتکاف / خاموش عبادت کا وقت"],"eidPrep":["زکاۃ الفطر ادا کریں","عید کے کپڑے منتخب کریں","عید کی نماز کی جگہ اور وقت طے کریں","گھر والوں کے لیے تحائف خریدیں","عیدی / نقد تحائف دیں","عید کے کھانوں اور مٹھائی کی منصوبہ بندی کریں","گھر صاف اور سجائیں","دور کے رشتہ داروں کو فون کریں","معاف کریں اور صلح کریں","ضرورت مندوں کے لیے صدقہ تیار کریں","عید کے دن کی ملاقاتیں طے کریں","رمضان پر اللہ کا شکر ادا کریں"],"kidsDeeds":["کسی کو دیکھ کر مسکراؤ — مسکرانا بھی صدقہ ہے!","کھانے سے پہلے بسم اللہ کہو","افطار کی میز لگانے میں مدد کرو","امی اور ابو کو شکریہ کہو","اپنا پسندیدہ کھلونا بانٹو","افطار میں کسی کو ایک کھجور دو","کھانے کے بعد الحمدللہ کہو","صدقے کے ڈبے میں کچھ سکے ڈالو","ایک پودے کو پانی دو","پرندوں کو دانہ ڈالو","پہلے سلام کرو","اپنا کمرہ صاف کرنے میں مدد کرو","کسی کے لیے رمضان کارڈ بناؤ","غلطی ہو تو معذرت کہو","کوئی چھوٹی سورت پڑھو یا سنو","اپنے گھر والوں کے لیے دعا کرو","کسی کا سامان اٹھانے میں مدد کرو","اپنا ناشتہ بانٹو","10 بار سبحان اللہ کہو","دادا دادی / نانا نانی کو فون کرو یا ملنے جاؤ","کوڑا اٹھا کر ڈسٹ بن میں ڈالو","شکریے کی ایک تصویر بناؤ","گھر والوں کے ساتھ مل کر نماز پڑھو","ایک نیا عربی لفظ سیکھو","پڑوسی کو کھانا دو","دوست کے ساتھ مہربانی کرو","10 بار استغفراللہ کہو","آج تھوڑا سا روزہ رکھنے کی کوشش کرو","افطار کے بعد برتن دھونے میں مدد کرو","تمام مسلمانوں کے لیے دعا کرو"],"coloring":{"crescent":"ہلال اور ستارہ","dates":"کھجوروں کا پیالہ","lantern":"رمضان کا فانوس","mat":"جائے نماز","mosque":"مسجد","quran":"ریل پر قرآن"},"months":["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],"monthsShort":["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],"weekdays":["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"]},"tr":{"strings":{"asr":"İkindi","belongsTo":"Bu planlayıcı şuna aittir:","bookmarkDua":"Allah'ım, Seni anmam, Sana şükretmem ve Sana güzelce ibadet etmem için bana yardım et.","bookmarkDuaSrc":"Ebu Davud 1522","bookmarkMotto":"Gün gün, amel amel","bookmarksIntro":"Planlayıcınız ve Kur'an'ınız için dört ayraç. Kesikli çizgilerden kesin.","bookmarksTitle":"Ramazan Ayraçları","brand":"SONGLAP DEALS","cardDay":"{n}. Gün","certFor":"oruç, namaz, Kur'an ve iyiliklerle dolu harika bir Ramazan için","certPresented":"Bu sertifika gururla takdim edilir","certTitle":"İlk Ramazanım","certWellDone":"Aferin, küçük yıldız!","coloringTitle":"Resmi boya!","coverTitle":"Ramazan Planlayıcı","coverYear":"Ramazan 1448 H · 2027","dateCol":"Tarih","day":"Gün","dayOfRamadan":"Ramazan'ın {n}. Günü","deedsIntro":"İyiliği yaptığınız her gün bir kutu işaretleyin. Her gün yapılan küçük iyilikler en sevimli olanlardır.","deedsTitle":"İyilik Takibi","dhuhr":"Öğle","done":"Bitti","duaCardDay":"{n}. Gün","duaCardsIntro":"30 günlük duanın tamamı kesilebilir kartlar hâlinde — Ramazan'ın her günü için bir kart. Kesikli çizgilerden kesin ve kartı göreceğiniz bir yere koyun.","duaCardsTitle":"Yazdırılabilir Dua Kartları","duaOfDay":"Günün Duası","eidDayTitle":"Bayram Günü Planlayıcı","eidGratitude":"Bu Ramazan Allah'a şükrettiğim üç şey","eidMubarak":"Bayramınız Mübarek Olsun!","eidPrepTitle":"Bayrama Hazırlık","extraWorship":"Bu geceler için ibadet planım","fajr":"Sabah","fasted":"Oruç tutuldu","fasting":"Oruç","focusLine":"Odak","footerBrand":"Ramazan Planlayıcı · Songlap Deals","glasses":"bardak","goodDeedToday":"Bugünün iyiliği","gratitude":"Bugün şunun için şükrediyorum","iftar":"İftar","iftarTime":"İftar vakti","isha":"Yatsı","juz":"Cüz","khatmaIntro":"Her gün bir cüz okumak, Ramazan'da Kur'an'ın tamamını bitirir. Her cüzü bitirdikçe işaretleyin.","khatmaTitle":"Kur'an Hatim Takibi","kidsCardsIntro":"Ramazan'ın her günü için bir kart. Kartı oku, iyiliği yap ve yıldızı boya!","kidsCardsTitle":"Çocuklar İçin 30 İyilik Kartı","kidsChartIntro":"Oruç tuttuğun (kısa bir oruç bile!), namaz kıldığın, iyilik yaptığın veya Kur'an okuduğun her gün bir yıldız boya.","kidsChartTitle":"Ramazan Yıldız Çizelgem","kidsDivider":"Çocuk Ramazan Paketi","kidsDividerSub":"Yıldız çizelgeleri, iyilik kartları, boyama sayfaları ve bir sertifika — sadece çocuklar için!","lastTenIntro":"Bu gecelerin arasında Kadir Gecesi vardır — bin aydan daha hayırlı bir gece. Her gece, özellikle tek gecelerde (21, 23, 25, 27, 29) ibadeti artırın.","lastTenTitle":"Son On Gece","maghrib":"Akşam","mealPlan":"Yemek Planı","mealsTitle":"Yemek Planlayıcı — Bütün Ay","moonNote":"Ramazan'ın başlangıcı hilalin görülmesine bağlıdır. Yaşadığınız yerde Ramazan bir gün önce veya sonra başlarsa, ayarlardan başlangıç tarihini değiştirip planlayıcıyı yeniden oluşturun.","night":"Gece","notes":"Notlar","notesTitle":"Notlar","overviewTitle":"Bir Bakışta Ramazan — 30 Gün","pageOf":"Sayfa {n}","planCol":"Plan","prayerTracker":"Namaz Takibi","prayers":"Namazlar","qadrDuaTitle":"Kadir Gecesi Duası","quran":"Kur'an","quranDone":"Okundu","quranDuasIntro":"Bizzat Kur'an'dan alınan dualar — “Rabbena” duaları ile peygamberlerin ve müminlerin duaları, her birinin suresi ve ayetiyle birlikte. Bunlar günlük dualara ek olarak verilir.","quranDuasTitle":"Kur'an'dan Dualar","quranGoal":"Bugünün Kur'an'ı","quranTarget":"Hedef","ramadanMubarak":"Ramazan Mübarek","readingPlan":"Okuma Planı","shopDates":"Hurma ve içecekler","shopIftar":"İftar yemekleri","shopOther":"İhtiyacım olan diğer şeyler","shopSuhoor":"Sahur malzemeleri","shoppingTitle":"Ramazan Alışveriş Listesi","snacks":"Atıştırmalıklar","suhoor":"Sahur","suhoorEnds":"Sahur biter","surahCol":"Sure","surahTrackerIntro":"Sırasıyla her sure, ayet sayısıyla birlikte. Bir sureyi her bitirdiğinizde kutuyu işaretleyin ve tarihi yazın.","surahTrackerTitle":"Kur'an Okuma Takibi — 114 Surenin Tamamı","taraweeh":"Teravih","timeCol":"Saat","todo":"Bugünün Yapılacakları","versesCol":"Ayetler","water":"Su","week":"{n}. Hafta","weekDays":"{a}–{b}. Günler","weekGoals":"Bu Haftanın Hedefleri"},"duas30":["Susuzluk gitti, damarlar ıslandı ve — Allah dilerse — mükâfat kesindir.","Allah'ım, Senin için oruç tuttum ve Senin rızkınla orucumu açıyorum.","Rabbimiz, bize bu dünyada iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.","Allah'ım, Seni anmam, Sana şükretmem ve Sana en güzel şekilde ibadet etmem için bana yardım et.","Rabbim, göğsümü benim için genişlet ve işimi bana kolaylaştır.","Ey kalpleri evirip çeviren, kalbimi dinin üzere sabit kıl.","Senden başka ilah yoktur; Seni tenzih ederim. Doğrusu ben zalimlerden oldum.","Allah'ım, Senden faydalı ilim, temiz rızık ve kabul edilen ameller istiyorum.","Rabbimiz, kendimize yazık ettik — bize bağışlamaz ve bize merhamet etmezsen, muhakkak kaybedenlerden oluruz.","Allah bize yeter ve O ne güzel vekildir.","Allah'ım, Senden bu dünyada ve ahirette af ve afiyet istiyorum.","Rabbim, ilmimi artır.","Allah'ım, nefsime takvasını ver ve onu arındır — onu arındıranların en hayırlısı Sensin; onun velisi ve mevlası Sensin.","Kendisinden başka ilah olmayan, diri ve her şeyi ayakta tutan Yüce Allah'tan bağışlanma diler ve O'na tevbe ederim.","Rabbimiz, bunu bizden kabul buyur. Doğrusu Sen her şeyi işiten, her şeyi bilensin.","Allah'ım, Senin kolaylaştırdığından başka hiçbir şey kolay değildir — ve Sen dilersen zorluğu da kolaylaştırırsın.","Rabbimiz, eşlerimizden ve çocuklarımızdan bize göz aydınlığı ihsan et ve bizi takva sahiplerine önder kıl.","Allah'ım, kaygı ve kederden, acizlik ve tembellikten, cimrilik ve korkaklıktan, borcun ağırlığından ve insanların bana üstün gelmesinden Sana sığınırım.","Ey diri olan, ey her şeyi ayakta tutan — rahmetinle yardım istiyorum.","Rabbimiz, bize hidayet verdikten sonra kalplerimizi eğriltme; katından bize rahmet bağışla. Doğrusu Sen sonsuz bağışta bulunansın.","Allah'ım, Sen affedicisin ve affetmeyi seversin — beni affet.","Allah'ın adıyla; O'nun adıyla birlikte yerde ve gökte hiçbir şey zarar veremez — O her şeyi işiten, her şeyi bilendir.","Rabbimiz, üzerimize sabır yağdır, ayaklarımızı sabit kıl ve inkâr eden topluluğa karşı bize yardım et.","Allah'ım, Senden cenneti istiyorum ve ateşten Sana sığınıyorum.","Allah'ı tenzih eder ve O'na hamd ederim; Yüce Allah'ı tenzih ederim.","Rabbimiz, hesabın kurulacağı gün beni, anne-babamı ve müminleri bağışla.","Allah'ım, hidayet verdiklerinin arasında bana da hidayet ver, afiyet verdiklerinin arasında bana da afiyet ver, himayene aldıklarının arasında beni de himayene al, bana verdiklerinde bereket kıl ve hükmettiğin şeyin şerrinden beni koru.","Allah bana yeter; O'ndan başka ilah yoktur. O'na güvendim ve O, yüce arşın Rabbidir.","Rabbim, beni bağışla ve tevbemi kabul et. Doğrusu Sen tevbeleri çok kabul eden, çok merhamet edensin.","Rabbimiz, unutur veya hata edersek bizi sorumlu tutma."],"quran":["Rabbimiz! Yaptığımızı kabul buyur. Şüphesiz ki, Sen hem işitir hem bilirsin","Rabbimiz! İkimizi Sana teslim olanlardan kıl, soyumuzdan da Sana teslim olanlardan bir ümmet yetiştir. Bize ibadet yollarımızı göster, tevbemizi kabul buyur, çünkü tevbeleri daima kabul eden, merhametli olan ancak Sensin","Rabbimiz! Bize dünyada iyiyi, ahirette de iyiyi ver, bizi ateşin azabından koru","Rabbimiz! Bize sabır ver, sebatımızı artır, inkar eden millete karşı bize yardım et","Rabbimiz! Eğer unutacak veya yanılacak olursak bizi sorumlu tutma. Rabbimiz bizden öncekilere yüklediğin gibi, bize de ağır yük yükleme. Rabbimiz! Bize gücümüzün yetmeyeceği şeyi taşıtma, bizi affet, bizi bağışla, bize acı. Sen Mevlamızsın, kafirlere karşı bize yardım et.","Rabbimiz! Bizi doğru yola erdirdikten sonra kalblerimizi eğriltme, katından bize rahmet bağışla; şüphesiz Sen sonsuz bağışta bulunansın.","Rabbimiz! Doğrusu geleceği şüphe götürmeyen günde, insanları toplayacak olan Sensin. Şüphesiz ki Allah verdiği sözden caymaz.","Rabbimiz! Biz şüphesiz inandık, bunun için günahlarımızı bize bağışla ve bizi ateşin azabından koru","Ya Rabbi! Karnımda olanı, sadece sana hizmet etmek üzere adadım, benden kabul buyur, doğrusu işiten ve bilen ancak Sensin","Ya Rabbi! Bana kendi katından temiz bir soy bahşet, doğrusu Sen duayı işitirsin","Rabbimiz! İndirdiğine inandık, Peygambere uyduk; bizi sahid olanlarla beraber yaz","Rabbimiz! Günahlarımızı, işimizdeki aşırılıklarımızı bize bağışla, sebatımızı arttır, inkarcı topluluğa karşı bize yardım et","Rabbimiz! Sen bunu boşuna yaratmadın, Sen münezzehsin. Bizi ateşin azabından koru","Rabbimiz! Sen ateşe kimi sokarsan, onu şüphesiz rezil etmiş olursun, zulmedenlerin hiç yardımcıları yoktur","Rabbimiz! Doğrusu biz Rabbinize inanın diye inanmaya çağıran bir çağırıcıyı işittik de iman ettik. Rabbimiz! Günahlarımızı bize bağışla, kötülüklerimizi ört, canımızi iyilerle beraber al","Rabbimiz! Peygamberlerinle vadettiklerini bize ver, kıyamet günü bizi rezil etme. Sen şüphesiz sözünden caymazsın","Allahım! Rabbimiz! Bize ve bizden sonra geleceklere bayram ve Sen'den bir delil olarak gökten bir sofra indir, bizi rızıklandır, Sen rızık verenlerin en hayırlısısın","Rabbimiz! Kendimize yazık ettik; bizi bağışlamaz ve bize merhamet etmezsen biz kaybedenlerden oluruz","Rabbimiz! Bize sabır ver ve canımızı müslim olarak al","Rabbim! Beni ve kardeşimi bağışla, bize acı, Sen merhametlilerin merhametlisisin","Ey Rabbimiz! Zalim bir millet ile bizi sınama, rahmetinle bizi kafirlerden kurtar","Rabbim! Bana hükümranlık verdin, rüyaların yorumunu öğrettin. Ey göklerin ve yerin yaradanı! Dünya ve ahirette işlerimi yoluna koyan sensin; benim canımı müslüman olarak al ve beni iyilere kat","Rabbim! Bu şehri güvenli kıl; beni ve oğullarımı putlara tapmaktan uzak tut","Rabbimiz! Doğrusu Sen gizlediğimizi de, açığa vurduğumuzu da bilirsin. Yerde ve gökte hiçbir şey Allah'tan gizli kalmaz","Rabbim! Beni ve çocuklarımı namaz kılanlardan eyle. Rabbimiz! Duamı kabul buyur","Rabbimiz! Hesap görülecek günde, beni, anamı babamı ve inananları bağışla","Rabbim! Beni dahil edeceğin yere hoşnutluk ve esenlikle dahil et; çıkaracağın yerden de hoşnutluk ve esenlikle çıkar. Katından beni destekleyecek bir kuvvet ver","Rabbimiz! Katından bize rahmet ver ve işimizde doğruyu göster, bizi başarılı kıl","Rabbim! Göğsümü genişlet, işimi kolaylaştır, dilimin düğümünü çöz ki sözümü iyi anlasınlar","Başıma bir bela geldi, (Sana sığındım), Sen merhametlilerin merhametlisisin","Senden başka tanrı yoktur, Sen münezzehsin, doğrusu ben haksızlık edenlerdenim","Rabbim! Beni tek Başıma bırakma, Sen varislerin en hayırlısısın","Rabbim! Şeytanların kışkırtmalarından Sana sığınırım","Rabbim! Yanımda bulunmalarından da Sana sığınırım","Rabbimiz! inandık, artık bizi bağışla, bize acı. Sen acıyanların en iyisisin","Rabbim! Bağışla, merhamet et, Sen merhamet edenlerin en hayırlısısın","Rabbimiz! Bizden cehennem azabını uzaklaştır; doğrusu onun azabı sürekli ve acıdır","Rabbimiz! Bize eşlerimizden ve çocuklarımızdan gözümüzün aydınlığı olacak insanlar ihsan et ve bizi, Allah'a karşı gelmekten sakınanlara önder yap","Rabbim! Bana hikmet ver ve beni iyiler arasına kat.","Rabbim! Bana ve ana babama verdiğin nimete şükürde, hoşnut olacağın işi yapmakta beni muvaffak kıl. Rahmetinle, beni iyi kullarının arasına koy","Rabbim! Doğrusu kendime yazık ettim, beni bağışla\" dedi. Allah da onu bağışladı. O, şüphesiz bağışlayandır, merhamet edendir.","Rabbim! Doğrusu bana indireceğin hayra muhtacım","Rabbim! Bana iyilerden olacak bir çocuk ver","Rabbim! Beni bağışla, bana benden sonra kimsenin ulaşamayacağı bir hükümranlık ver; Sen şüphesiz, daima bağışta bulunansın","Rabbimiz! İlmin ve rahmetin herşeyi içine almıştır. Tevbe edip Senin yoluna uyanları bağışla; onları cehennemin azabından koru","Rabbim! Bana ve anne babama verdiğin nimete şükretmemi ve benim hoşnut olacağın yararlı bir işi yapmamı sağla; bana verdiğin gibi soyuma da salah ver; doğrusu Sana yöneldim, ben, kendini Sana verenlerdenim","Ben yenildim, bana yardım et","Rabbimiz! Bizi ve bizden önce inanmış olan kardeşlerimizi bağışla; kalbimizde müminlere karşı kin bırakma; Rabbimiz! Şüphesiz Sen şefkatlisin, merhametlisin","Rabbimiz! Sana güvendik, Sana yöneldik; dönüş Sanadır","Rabbimiz! Bizi, inkar edenlerle deneme; bizi bağışla, doğrusu Sen, güçlü olan, Hakim olansın","Rabbimiz! Işığımızı tamamla, bizi bağışla, doğrusu Sen herşeye Kadir'sin","Rabbim! Beni, anamı, babamı, evime inanmış olarak gireni, inanan erkek ve kadınları bağışla; zalimlerin de yalnız helakını artır"],"deeds":["Sadaka ver (az da olsa)","Kur'an'ı anlamıyla oku","Teravih kıl","Oruçlu birine iftar ettir","Anne-babana veya ailene yardım et","100 kez istiğfar söyle","Bir akrabanı ara veya ziyaret et","Komşunla yemek paylaş","2 rekât fazla namaz kıl","Bir yeni dua öğren","Güzel konuş, gıybet etme","Başkası için dua et"],"lastTen":["Yatsı ve sabahı cemaatle kıl","Teravih / kıyam kıl","Kur'an oku","Bol bol dua et","Kadir duasını tekrarla","Sadaka ver","Zikir ve istiğfar","İtikâf / sessiz ibadet vakti"],"eidPrep":["Fıtır sadakasını ver","Bayram kıyafetlerini seç","Bayram namazının yerini ve saatini planla","Aile için hediyeler al","Bayram harçlığı / para hediyeleri ver","Bayram yemeklerini ve tatlılarını planla","Evi temizle ve süsle","Uzak akrabaları ara","Affet ve barış","İhtiyaç sahipleri için sadaka hazırla","Bayram günü ziyaretlerini planla","Ramazan için Allah'a şükret"],"kidsDeeds":["Birine gülümse — gülümsemek sadakadır!","Yemekten önce Besmele söyle","İftar sofrasını kurmaya yardım et","Anne ve babana teşekkür et","En sevdiğin oyuncağını paylaş","İftarda birine bir hurma ver","Yemekten sonra Elhamdülillah de","Sadaka kutusuna biraz bozuk para at","Bir bitkiyi sula","Kuşları besle","Önce selam ver","Odanı toplamaya yardım et","Birisi için Ramazan kartı yap","Yanlış yaptığında özür dile","Kısa bir sure oku veya dinle","Ailen için dua et","Birinin bir şey taşımasına yardım et","Atıştırmalığını paylaş","10 kez Sübhanallah de","Büyükanneni ve büyükbabanı ara veya ziyaret et","Çöpü topla ve çöp kutusuna at","Bir teşekkür resmi çiz","Ailenle birlikte namaz kıl","Bir yeni Arapça kelime öğren","Komşuya yemek ver","Arkadaşına iyi davran","10 kez Estağfirullah de","Bugün biraz oruç tutmayı dene","İftardan sonra bulaşığa yardım et","Bütün Müslümanlar için dua et"],"coloring":{"crescent":"Hilal ve Yıldız","dates":"Bir Kâse Hurma","lantern":"Ramazan Feneri (Fanus)","mat":"Seccade","mosque":"Cami","quran":"Rahlede Kur'an"},"months":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],"monthsShort":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],"weekdays":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},"ms":{"strings":{"asr":"Asar","belongsTo":"Perancang ini milik","bookmarkDua":"Ya Allah, bantulah aku untuk mengingati-Mu, bersyukur kepada-Mu dan beribadat kepada-Mu dengan sebaiknya.","bookmarkDuaSrc":"Abu Dawud 1522","bookmarkMotto":"Hari demi hari, amalan demi amalan","bookmarksIntro":"Empat penanda buku untuk perancang dan al-Quran anda. Gunting mengikut garis putus-putus.","bookmarksTitle":"Penanda Buku Ramadan","brand":"SONGLAP DEALS","cardDay":"Hari {n}","certFor":"untuk Ramadan yang indah dengan puasa, solat, al-Quran dan amalan baik","certPresented":"Sijil ini dengan bangganya disampaikan kepada","certTitle":"Ramadan Pertama Saya","certWellDone":"Tahniah, bintang kecil!","coloringTitle":"Warnakan gambar ini!","coverTitle":"Perancang Ramadan","coverYear":"Ramadan 1448 H · 2027","dateCol":"Tarikh","day":"Hari","dayOfRamadan":"Hari {n} Ramadan","deedsIntro":"Tandakan kotak setiap hari anda melakukan amalan itu. Amalan kecil yang dilakukan setiap hari adalah yang paling disukai.","deedsTitle":"Penjejak Amalan Baik","dhuhr":"Zuhur","done":"Selesai","duaCardDay":"Hari {n}","duaCardsIntro":"Kesemua 30 doa harian sebagai kad yang boleh digunting — satu untuk setiap hari Ramadan. Gunting mengikut garis putus-putus dan letakkan kad di tempat yang mudah dilihat.","duaCardsTitle":"Kad Doa Boleh Cetak","duaOfDay":"Doa Hari Ini","eidDayTitle":"Perancang Hari Raya","eidGratitude":"Tiga perkara yang saya syukuri kepada Allah pada Ramadan ini","eidMubarak":"Selamat Hari Raya!","eidPrepTitle":"Persediaan Menyambut Aidilfitri","extraWorship":"Pelan ibadat saya untuk malam-malam ini","fajr":"Subuh","fasted":"Berpuasa","fasting":"Berpuasa","focusLine":"Fokus","footerBrand":"Perancang Ramadan · Songlap Deals","glasses":"gelas","goodDeedToday":"Amalan baik hari ini","gratitude":"Hari ini saya bersyukur kerana","iftar":"Berbuka","iftarTime":"Waktu berbuka","isha":"Isyak","juz":"Juzuk","khatmaIntro":"Satu juzuk sehari menghabiskan seluruh al-Quran dalam Ramadan. Tandakan setiap juzuk apabila selesai.","khatmaTitle":"Penjejak Khatam al-Quran","kidsCardsIntro":"Satu kad untuk setiap hari Ramadan. Baca kad itu, lakukan amalannya, dan warnakan bintangnya!","kidsCardsTitle":"30 Kad Amalan Baik untuk Kanak-kanak","kidsChartIntro":"Warnakan satu bintang setiap hari anda berpuasa (walaupun puasa pendek!), solat, berbuat baik atau membaca al-Quran.","kidsChartTitle":"Carta Bintang Ramadan Saya","kidsDivider":"Pek Ramadan Kanak-kanak","kidsDividerSub":"Carta bintang, kad amalan baik, halaman mewarna dan sijil — khas untuk kanak-kanak!","lastTenIntro":"Antara malam-malam ini ialah Lailatul Qadar — malam yang lebih baik daripada seribu bulan. Tambahkan ibadat pada setiap malam, terutamanya malam ganjil (21, 23, 25, 27, 29).","lastTenTitle":"Sepuluh Malam Terakhir","maghrib":"Maghrib","mealPlan":"Pelan Makanan","mealsTitle":"Perancang Makanan — Sepanjang Bulan","moonNote":"Permulaan Ramadan bergantung pada penampakan anak bulan. Jika Ramadan bermula sehari lebih awal atau lewat di tempat anda, tukar tarikh mula dalam tetapan dan jana semula perancang ini.","night":"Malam","notes":"Nota","notesTitle":"Nota","overviewTitle":"Ramadan Sekilas Pandang — 30 Hari","pageOf":"Halaman {n}","planCol":"Pelan","prayerTracker":"Penjejak Solat","prayers":"Solat","qadrDuaTitle":"Doa Lailatul Qadar","quran":"al-Quran","quranDone":"Dibaca","quranDuasIntro":"Doa-doa yang diambil daripada al-Quran sendiri — doa “Rabbana” dan doa para nabi serta orang beriman, dengan surah dan ayat setiap satunya. Ini adalah tambahan kepada doa harian.","quranDuasTitle":"Doa-doa daripada al-Quran","quranGoal":"al-Quran Hari Ini","quranTarget":"Sasaran","ramadanMubarak":"Ramadan Mubarak","readingPlan":"Pelan Bacaan","shopDates":"Kurma & minuman","shopIftar":"Masakan berbuka","shopOther":"Perkara lain yang saya perlukan","shopSuhoor":"Barang sahur","shoppingTitle":"Senarai Beli-belah Ramadan","snacks":"Snek","suhoor":"Sahur","suhoorEnds":"Sahur berakhir","surahCol":"Surah","surahTrackerIntro":"Setiap surah mengikut tertib, dengan bilangan ayatnya. Tandakan kotak dan tulis tarikh setiap kali anda selesai membaca satu surah.","surahTrackerTitle":"Penjejak Bacaan al-Quran — Kesemua 114 Surah","taraweeh":"Tarawih","timeCol":"Masa","todo":"Senarai Tugasan Hari Ini","versesCol":"Ayat","water":"Air","week":"Minggu {n}","weekDays":"Hari {a}–{b}","weekGoals":"Matlamat Minggu Ini"},"duas30":["Dahaga telah hilang, urat-urat telah basah, dan ganjaran pasti, insya-Allah.","Ya Allah, kerana-Mu aku berpuasa, dan dengan rezeki-Mu aku berbuka.","Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami daripada azab neraka.","Ya Allah, bantulah aku untuk mengingati-Mu, bersyukur kepada-Mu, dan beribadat kepada-Mu dengan cara yang terbaik.","Wahai Tuhanku, lapangkanlah dadaku untukku, dan mudahkanlah tugasku untukku.","Wahai Yang Membolak-balikkan hati, tetapkanlah hatiku di atas agama-Mu.","Tiada tuhan melainkan Engkau; Maha Suci Engkau. Sesungguhnya aku termasuk orang yang zalim.","Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang bersih, dan amalan yang diterima.","Wahai Tuhan kami, kami telah menzalimi diri kami — dan jika Engkau tidak mengampuni kami dan merahmati kami, pasti kami termasuk orang yang rugi.","Allah cukup bagi kami, dan Dia sebaik-baik Pelindung.","Ya Allah, aku memohon kepada-Mu keampunan dan kesejahteraan di dunia dan di akhirat.","Wahai Tuhanku, tambahkanlah ilmuku.","Ya Allah, berikanlah jiwaku ketakwaannya dan sucikanlah ia — Engkau sebaik-baik yang menyucikannya; Engkau Pelindung dan Tuannya.","Aku memohon keampunan Allah Yang Maha Agung, yang tiada tuhan melainkan Dia, Yang Maha Hidup, Yang Mentadbir segala-galanya, dan aku bertaubat kepada-Nya.","Wahai Tuhan kami, terimalah ini daripada kami. Sesungguhnya Engkau Maha Mendengar, Maha Mengetahui.","Ya Allah, tiada yang mudah melainkan yang Engkau mudahkan — dan Engkau boleh menjadikan kesukaran itu mudah, jika Engkau menghendaki.","Wahai Tuhan kami, kurniakanlah kami daripada pasangan dan anak-anak kami penyejuk mata, dan jadikanlah kami pemimpin bagi orang yang bertakwa.","Ya Allah, aku berlindung dengan-Mu daripada kebimbangan dan kesedihan, daripada kelemahan dan kemalasan, daripada kedekut dan pengecut, daripada beban hutang dan daripada dikuasai manusia.","Wahai Yang Maha Hidup, Wahai Yang Mentadbir segalanya — dengan rahmat-Mu aku memohon pertolongan.","Wahai Tuhan kami, janganlah Engkau pesongkan hati kami setelah Engkau memberi petunjuk kepada kami; kurniakanlah kami rahmat daripada-Mu. Sesungguhnya Engkau Maha Pemberi.","Ya Allah, Engkau Maha Pengampun dan Engkau suka mengampuni — maka ampunilah aku.","Dengan nama Allah, yang dengan nama-Nya tiada sesuatu di bumi atau di langit dapat memberi mudarat — dan Dia Maha Mendengar, Maha Mengetahui.","Wahai Tuhan kami, limpahkanlah kesabaran kepada kami, teguhkanlah tapak kami, dan tolonglah kami terhadap kaum yang kafir.","Ya Allah, aku memohon syurga kepada-Mu, dan aku berlindung dengan-Mu daripada api neraka.","Maha Suci Allah dan pujian bagi-Nya; Maha Suci Allah Yang Maha Agung.","Wahai Tuhan kami, ampunilah aku, kedua-dua ibu bapaku, dan orang yang beriman pada hari perhitungan ditegakkan.","Ya Allah, berilah aku petunjuk dalam kalangan orang yang Engkau beri petunjuk, berilah aku kesejahteraan dalam kalangan orang yang Engkau beri kesejahteraan, ambillah aku dalam jagaan-Mu dalam kalangan orang yang Engkau jaga, berkatilah untukku apa yang Engkau berikan kepadaku, dan peliharalah aku daripada keburukan apa yang Engkau takdirkan.","Allah cukup bagiku; tiada tuhan melainkan Dia. Kepada-Nya aku bertawakal, dan Dia Tuhan Arasy yang Agung.","Wahai Tuhanku, ampunilah aku dan terimalah taubatku. Sesungguhnya Engkau Maha Penerima taubat, Maha Penyayang.","Wahai Tuhan kami, janganlah Engkau menghukum kami jika kami lupa atau tersilap."],"quran":["Wahai Tuhan kami! Terimalah daripada kami (amal kami); sesungguhnya Engkaulah yang Maha Mendengar, lagi Maha mengetahui","Wahai Tuhan kami! Jadikanlah kami berdua: orang-orang Islam (yang berserah diri) kepadaMu, dan jadikanlah daripada keturunan kami: umat Islam (yang berserah diri) kepadamu, dan tunjukkanlah kepada kami syariat dan cara-cara ibadat kami, dan terimalah taubat kami; sesungguhnya Engkaulah Maha Penerima taubat, lagi Maha Mengasihani","Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami dari azab neraka","Wahai Tuhan kami! Limpahkanlah sabar kepada kami, dan teguhkanlah tapak pendirian kami serta menangkanlah kami terhadap kaum yang kafir","Wahai Tuhan kami! Janganlah Engkau mengirakan kami salah jika kami lupa atau kami tersalah. Wahai Tuhan kami ! Janganlah Engkau bebankan kepada kami bebanan yang berat sebagaimana yang telah Engkau bebankan kepada orang-orang yang terdahulu daripada kami. Wahai Tuhan kami! Janganlah Engkau pikulkan kepada kami apa yang kami tidak terdaya memikulnya. Dan maafkanlah kesalahan kami, serta ampunkanlah dosa kami, dan berilah rahmat kepada kami. Engkaulah Penolong kami; oleh itu, tolonglah kami untuk mencapai kemenangan terhadap kaum-kaum yang kafir","Wahai Tuhan kami! Janganlah Engkau memesongkan hati kami sesudah Engkau beri petunjuk kepada kami, dan kurniakanlah kepada kami limpah rahmat dari sisiMu; sesungguhnya Engkau jualah Tuhan Yang melimpah-limpah pemberianNya.","Wahai Tuhan kami! Sesungguhnya Engkaulah yang akan menghimpunkan sekalian manusia, untuk (menerima balasan pada) suatu hari (hari kiamat) yang tidak ada syak padanya\". Sesungguhnya Allah tidak memungkiri janjiNya.","Wahai Tuhan kami! Sesungguhnya kami telah beriman, oleh itu, ampunkanlah dosa-dosa kami dan peliharalah kami dari azab neraka","Tuhanku! Sesungguhnya aku nazarkan kepadaMu anak yang ada dalam kandunganku sebagai seorang yang bebas (dari segala urusan dunia untuk berkhidmat kepadaMu semata-mata), maka terimalah nazarku; sesungguhnya Engkaulah Yang Maha Mendengar, lagi Maha Mengetahui","Wahai Tuhanku! Kurniakanlah kepadaku dari sisiMu zuriat keturunan yang baik; sesungguhnya Engkau sentiasa Mendengar (menerima) doa permohonan","Wahai Tuhan kami! Kami telah beriman kepada apa yang telah Engkau turunkan, dan kami mengikut RasulMu; oleh itu suratkanlah kami beserta orang-orang yang menjadi saksi (yang mengakui keesaanMu dan kebenaran RasulMu)","Wahai Tuhan kami! Ampunkanlah dosa-dosa kami dan perbuatan kami yang melampau dalam urusan kami, dan teguhkanlah tapak pendirian kami (dalam perjuangan); dan tolonglah kami mencapai kemenangan terhadap kaum yang kafir.","Wahai Tuhan kami! Tidaklah Engkau menjadikan benda-benda ini dengan sia-sia, Maha Suci Engkau, maka peliharalah kami dari azab neraka.","Wahai Tuhan kami! Sebenarnya sesiapa yang Engkau masukkan ke dalam neraka maka sesungguhnya Engkau telah menghinakannya, dan orang-orang yang zalim tidak akan beroleh seorang penolong pun","Wahai Tuhan kami! Sesungguhnya kami telah mendengar seorang Penyeru (Rasul) yang menyeru kepada iman, katanya: ` Berimanlah kamu kepada Tuhan kamu ', maka kami pun beriman. Wahai Tuhan kami, ampunkanlah dosa-dosa kami, dan hapuskanlah daripada kami kesalahan-kesalahan kami, dan matikanlah kami bersama orang-orang yang berbakti","Wahai Tuhan kami! Berikanlah kepada kami pahala yang telah Engkau janjikan kepada kami melalui Rasul-rasulMu, dan janganlah Engkau hinakan kami pada hari kiamat; sesungguhnya Engkau tidak memungkiri janji","Ya Allah, Tuhan kami! Turunkanlah kiranya kepada kami satu hidangan dari langit, untuk menjadi hari raya bagi kami, iaitu bagi kami yang ada hari ini dan bagi orang-orang kami yang datang kemudian, dan sebagai satu tanda (mukjizat) daripadamu (yang menunjukkan kebesaran dan kekuasaanMu); dan kurniakanlah rezeki kepada kami, kerana Engkau jualah sebaik-baik Pemberi rezeki","Wahai Tuhan kami, kami telah menganiaya diri kami sendiri, dan kalau Engkau tidak mengampunkan kami dan memberi rahmat kepada kami, nescaya menjadilah kami dari orang-orang yang rugi","Wahai Tuhan kami, limpahkanlah kesabaran kepada kami, dan matikanlah kami dalam keadaan Islam (berserah bulat-bulat kepadaMu)","Wahai Tuhanku, ampunkanlah bagiku dan bagi saudaraku, dan masukkanlah kami ke dalam rahmatMu, kerana Engkaulah sahaja Yang Maha Mengasihani dari segala yang lain mengasihani","Wahai Tuhan kami! Janganlah Engkau jadikan kami landasan fitnah kesengsaraan bagi kaum yang zalim ganas. \" Dan selamatkanlah kami dengan rahmatMu dari angkara kaum yang kafir","Wahai Tuhanku! Sesungguhnya Engkau telah mengurniakan daku sebahagian dari kekuasaan (pemerintahan) dan mengajarku sebahagian dari ilmu tafsiran mimpi. Wahai Tuhan yang menciptakan langit dan bumi Engkau Penguasa dan Pelindungku di dunia dan di akhirat; sempurnakanlah ajalku (ketika mati) dalam keadaan Islam, dan hubungkanlah daku dengan orang-orang yang soleh","Wahai Tuhanku! jadikanlah negeri Makkah ini negeri yang aman, dan jauhkanlah daku dan anak-anakku dari perbuatan menyembah berhala.","Wahai Tuhan kami! Sesungguhnya Engkau mengetahui akan apa yang kami sembunyikan dan apa yang kami zahirkan; dan tiada sesuatupun di langit dan di bumi, yang tersembunyi kepada Allah!","Wahai Tuhanku! Jadikanlah daku orang yang mendirikan sembahyang dan demikianlah juga zuriat keturunanku. Wahai Tuhan kami, perkenankanlah doa permohonanku","Wahai Tuhan kami! Berilah ampun bagiku dan bagi kedua ibu bapaku serta bagi orang-orang yang beriman, pada masa berlakunya hitungan amal dan pembalasan","Wahai Tuhanku! Masukkanlah daku ke dalam urusan ugamaku dengan kemasukan yang benar lagi mulia, serta keluarkanlah daku daripadanya dengan cara keluar yang benar lagi mulia; dan berikanlah kepadaku dari sisiMu hujah keterangan serta kekuasaan yang menolongku","Wahai Tuhan kami! Kurniakanlah kami rahmat dari sisiMu, dan berilah kemudahan-kemudahan serta pimpinan kepada kami untuk keselamatan ugama kami","Wahai Tuhanku, lapangkanlah bagiku, dadaku; \"Dan mudahkanlah bagiku, tugasku; \"Dan lepaskanlah simpulan dari lidahku, \"Supaya mereka faham perkataanku","Sesungguhnya aku ditimpa penyakit, sedang Engkaulah sahaja yang lebih mengasihani daripada segala (yang lain) yang mengasihani","Sesungguhnya tiada Tuhan (yang dapat menolong) melainkan Engkau (ya Allah)! Maha Suci Engkau (daripada melakukan aniaya, tolongkanlah daku)! Sesungguhnya aku adalah dari orang-orang yang menganiaya diri sendiri","Wahai Tuhanku! Janganlah Engkau biarkan daku seorang diri (dengan tidak meninggalkan zuriat); dan Engkaulah jua sebaik-baik yang mewarisi","Wahai Tuhanku, aku berlindung kepadaMu dari hasutan Syaitan-syaitan","Dan aku berlindung kepadaMu, wahai Tuhanku, supaya Syaitan-syaitan itu tidak menghampiriku","Wahai Tuhan kami, kami telah beriman; oleh itu ampunkanlah dosa kami serta berilah rahmat kepada kami, dan sememangnya Engkaulah jua sebaik-baik Pemberi rahmat","Wahai Tuhanku, berikanlah ampun dan kurniakan rahmat, dan sememangnya Engkaulah sahaja sebaik-baik Pemberi rahmat!","Wahai Tuhan kami, sisihkanlah azab neraka Jahannam dari kami, sesungguhnya azab seksanya itu adalah mengertikan","Wahai Tuhan kami, berilah kami beroleh dari isteri-isteri dan zuriat keturunan kami: perkara-perkara yang menyukakan hati melihatnya, dan jadikanlah kami imam ikutan bagi orang-orang yang (mahu) bertaqwa","Wahai Tuhanku, berikanlah daku ilmu pengetahuan ugama, dan hubungkanlah daku dengan orang-orang yang soleh","Wahai Tuhanku, ilhamkanlah daku supaya tetap bersyukur akan nikmatMu yang Engkau kurniakan kepadaku dan kepada ibu bapaku, dan supaya aku tetap mengerjakan amal soleh yang Engkau redai; dan masukkanlah daku - dengan limpah rahmatMu - dalam kumpulan hamba-hambaMu yang soleh","Wahai Tuhanku, sesungguhnya aku telah menganiaya diri sendiri; oleh itu ampunkanlah - apalah jua kiranya - akan dosaku\". (Maka Allah Taala menerima taubatnya) lalu mengampunkan dosanya; sesungguhnya Allah jualah Yang Maha Pengampun, lagi Maha Mengasihani.","Wahai Tuhanku, sesungguhnya aku sangat berhajat kepada sebarang rezeki pemberian yang Engkau berikan","Wahai Tuhanku! Kurniakanlah kepadaku anak yang terhitung dari orang-orang yang soleh!","Wahai Tuhanku! Ampunkanlah kesilapanku, dan kurniakanlah kepadaku sebuah kerajaan (yang tidak ada taranya dan) yang tidak akan ada pada sesiapapun kemudian daripadaku; sesungguhnya Engkaulah yang sentiasa Melimpah kurniaNya","Wahai Tuhan kami! RahmatMu dan IlmuMu meliputi segala-galanya; maka berilah ampun kepada orang-orang yang bertaubat serta menurut jalanMu, dan peliharalah mereka dari azab neraka","Wahai Tuhanku, ilhamkanlah daku supaya tetap bersyukur akan nikmatmu yang engkau kurniakan kepadaku dan kepada ibu bapaku, dan supaya aku tetap mengerjakan amal soleh yang Engkau redai; dan jadikanlah sifat-sifat kebaikan meresap masuk ke dalam jiwa zuriat keturunanku. Sesungguhnya aku bertaubat kepadamu, dan sesungguhnya aku dari orang-orang Islam (yang tunduk patuh kepadamu)","Sesungguhnya aku ini dikalahkan (oleh kaumku yang ingkar), oleh itu menangkanlah daku (terhadap mereka)!","Wahai Tuhan Kami! Ampunkanlah dosa kami dan dosa saudara-saudara kami yang mendahului kami dalam iman, dan janganlah Engkau jadikan dalam hati perasaan hasad dengki dan dendam terhadap orang-orang yang beriman. Wahai Tuhan kami! Sesungguhnya Engkau Amat Melimpah Belas kasihan dan RahmatMu","Wahai Tuhan kami! Kepada Engkaulah sahaja kami berserah diri, dan kepada Engkaulah kami rujuk bertaubat, serta kepada Engkaulah jua tempat kembali!","Wahai Tuhan kami! Janganlah Engkau jadikan pendirian dan keyakinan kami terpesong kerana penindasan orang-orang kafir, dan ampunkanlah dosa kami wahai Tuhan kami; sesungguhnya Engkaulah sahaja Yang Maha Kuasa, lagi Maha Bijaksana","Wahai Tuhan kami! Sempurnakanlah bagi kami cahaya kami, dan limpahkanlah keampunan kepada kami; sesungguhnya Engkau Maha Kuasa atas tiap-tiap sesuatu","Wahai Tuhanku! Ampunkanlah bagiku, dan bagi kedua ibu bapaku, serta bagi sesiapa yang masuk ke rumahku dengan keadaan beriman; dan (ampunkanlah) bagi sekalian orang-orang yang beriman, lelaki dan perempuan (dalam segala zaman); dan janganlah Engkau tambahi orang-orang yang zalim melainkan kebinasaan!\""],"deeds":["Bersedekah (walaupun sedikit)","Baca al-Quran dengan maknanya","Solat Tarawih","Beri berbuka kepada orang berpuasa","Bantu ibu bapa atau keluarga","Sebut istighfar 100 kali","Telefon atau ziarah saudara","Kongsi makanan dengan jiran","Solat 2 rakaat tambahan","Pelajari satu doa baharu","Bercakap baik, jangan mengumpat","Doakan orang lain"],"lastTen":["Solat Isyak & Subuh berjemaah","Solat Tarawih / Qiam","Baca al-Quran","Banyakkan berdoa","Ulang doa Qadar","Bersedekah","Zikir & istighfar","Iktikaf / masa ibadat yang tenang"],"eidPrep":["Bayar Zakat Fitrah","Pilih pakaian Hari Raya","Rancang tempat & masa solat Hari Raya","Beli hadiah untuk keluarga","Beri duit raya / hadiah wang","Rancang makanan & kuih Raya","Bersih & hias rumah","Telefon saudara yang jauh","Maafkan & berdamai","Sediakan sedekah untuk yang memerlukan","Rancang ziarah pada hari Raya","Syukuri Ramadan kepada Allah"],"kidsDeeds":["Senyum kepada seseorang — senyuman itu sedekah!","Sebut Bismillah sebelum makan","Bantu sediakan meja berbuka","Ucap terima kasih kepada Ibu dan Ayah","Kongsi mainan kegemaranmu","Beri sebiji kurma kepada seseorang semasa berbuka","Sebut Alhamdulillah selepas makan","Masukkan syiling ke dalam tabung sedekah","Siram pokok","Beri makan burung","Beri salam dahulu","Bantu kemas bilikmu","Buat kad Ramadan untuk seseorang","Minta maaf apabila buat salah","Baca atau dengar surah pendek","Doakan keluargamu","Bantu angkat barang untuk seseorang","Kongsi snekmu","Sebut SubhanAllah 10 kali","Telefon atau ziarah datuk dan nenek","Kutip sampah dan buang ke dalam tong","Lukis gambar terima kasih","Solat bersama keluargamu","Pelajari satu perkataan Arab baharu","Beri makanan kepada jiran","Berbuat baik kepada kawan","Sebut Astaghfirullah 10 kali","Cuba berpuasa sedikit hari ini","Bantu basuh pinggan selepas berbuka","Doakan semua umat Islam"],"coloring":{"crescent":"Bulan Sabit & Bintang","dates":"Semangkuk Kurma","lantern":"Tanglung Ramadan (Fanus)","mat":"Sejadah","mosque":"Masjid","quran":"al-Quran di Atas Rehal"},"months":["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],"monthsShort":["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],"weekdays":["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},"id":{"strings":{"asr":"Asar","belongsTo":"Perencana ini milik","bookmarkDua":"Ya Allah, tolonglah aku untuk mengingat-Mu, mensyukuri-Mu, dan beribadah kepada-Mu dengan baik.","bookmarkDuaSrc":"Abu Dawud 1522","bookmarkMotto":"Hari demi hari, amal demi amal","bookmarksIntro":"Empat penanda buku untuk perencana dan Al-Qur'an Anda. Gunting mengikuti garis putus-putus.","bookmarksTitle":"Penanda Buku Ramadan","brand":"SONGLAP DEALS","cardDay":"Hari {n}","certFor":"untuk Ramadan yang indah penuh puasa, shalat, Al-Qur'an, dan amal baik","certPresented":"Sertifikat ini dengan bangga diberikan kepada","certTitle":"Ramadan Pertamaku","certWellDone":"Kerja bagus, bintang kecil!","coloringTitle":"Warnai gambarnya!","coverTitle":"Perencana Ramadan","coverYear":"Ramadan 1448 H · 2027","dateCol":"Tanggal","day":"Hari","dayOfRamadan":"Hari {n} Ramadan","deedsIntro":"Centang satu kotak setiap hari Anda melakukan amal itu. Amal kecil yang dilakukan setiap hari adalah yang paling dicintai.","deedsTitle":"Pelacak Amal Baik","dhuhr":"Zuhur","done":"Selesai","duaCardDay":"Hari {n}","duaCardsIntro":"Ke-30 doa harian sebagai kartu yang bisa digunting — satu untuk setiap hari Ramadan. Gunting mengikuti garis putus-putus dan letakkan kartu di tempat yang mudah terlihat.","duaCardsTitle":"Kartu Doa Siap Cetak","duaOfDay":"Doa Hari Ini","eidDayTitle":"Perencana Hari Lebaran","eidGratitude":"Tiga hal yang saya syukuri kepada Allah di Ramadan ini","eidMubarak":"Selamat Lebaran!","eidPrepTitle":"Persiapan Lebaran","extraWorship":"Rencana ibadahku untuk malam-malam ini","fajr":"Subuh","fasted":"Berpuasa","fasting":"Berpuasa","focusLine":"Fokus","footerBrand":"Perencana Ramadan · Songlap Deals","glasses":"gelas","goodDeedToday":"Amal baik hari ini","gratitude":"Hari ini saya bersyukur atas","iftar":"Berbuka","iftarTime":"Waktu berbuka","isha":"Isya","juz":"Juz","khatmaIntro":"Satu juz sehari menyelesaikan seluruh Al-Qur'an dalam Ramadan. Centang setiap juz saat Anda menyelesaikannya.","khatmaTitle":"Pelacak Khatam Al-Qur'an","kidsCardsIntro":"Satu kartu untuk setiap hari Ramadan. Baca kartunya, lakukan amalnya, dan warnai bintangnya!","kidsCardsTitle":"30 Kartu Amal Baik untuk Anak","kidsChartIntro":"Warnai satu bintang setiap hari kamu berpuasa (walaupun puasa sebentar!), shalat, berbuat baik, atau membaca Al-Qur'an.","kidsChartTitle":"Bagan Bintang Ramadanku","kidsDivider":"Paket Ramadan Anak","kidsDividerSub":"Bagan bintang, kartu amal baik, halaman mewarnai, dan sertifikat — khusus untuk anak-anak!","lastTenIntro":"Di antara malam-malam ini ada Lailatul Qadar — malam yang lebih baik dari seribu bulan. Perbanyak ibadah di setiap malam, terutama malam ganjil (21, 23, 25, 27, 29).","lastTenTitle":"Sepuluh Malam Terakhir","maghrib":"Magrib","mealPlan":"Rencana Makan","mealsTitle":"Perencana Makanan — Sebulan Penuh","moonNote":"Awal Ramadan bergantung pada terlihatnya hilal. Jika Ramadan dimulai sehari lebih awal atau lebih lambat di tempat Anda, ubah tanggal mulai di pengaturan dan buat ulang perencananya.","night":"Malam","notes":"Catatan","notesTitle":"Catatan","overviewTitle":"Ramadan Sekilas — 30 Hari","pageOf":"Halaman {n}","planCol":"Rencana","prayerTracker":"Pelacak Shalat","prayers":"Shalat","qadrDuaTitle":"Doa Lailatul Qadar","quran":"Al-Qur'an","quranDone":"Dibaca","quranDuasIntro":"Doa-doa yang diambil dari Al-Qur'an itu sendiri — doa “Rabbana” dan doa para nabi serta orang-orang beriman, beserta surah dan ayat masing-masing. Ini tambahan di luar doa harian.","quranDuasTitle":"Doa-doa dari Al-Qur'an","quranGoal":"Al-Qur'an Hari Ini","quranTarget":"Target","ramadanMubarak":"Ramadan Mubarak","readingPlan":"Rencana Bacaan","shopDates":"Kurma & minuman","shopIftar":"Masakan berbuka","shopOther":"Hal lain yang saya butuhkan","shopSuhoor":"Kebutuhan sahur","shoppingTitle":"Daftar Belanja Ramadan","snacks":"Camilan","suhoor":"Sahur","suhoorEnds":"Sahur berakhir","surahCol":"Surah","surahTrackerIntro":"Setiap surah sesuai urutan, beserta jumlah ayatnya. Centang kotaknya dan tulis tanggalnya setiap kali Anda menyelesaikan satu surah.","surahTrackerTitle":"Pelacak Bacaan Al-Qur'an — Seluruh 114 Surah","taraweeh":"Tarawih","timeCol":"Waktu","todo":"Daftar Tugas Hari Ini","versesCol":"Ayat","water":"Air","week":"Minggu {n}","weekDays":"Hari {a}–{b}","weekGoals":"Target Minggu Ini"},"duas30":["Dahaga telah hilang, urat-urat telah basah, dan pahala pasti, insya Allah.","Ya Allah, untuk-Mu aku berpuasa, dan dengan rezeki-Mu aku berbuka.","Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.","Ya Allah, tolonglah aku untuk mengingat-Mu, mensyukuri-Mu, dan beribadah kepada-Mu dengan cara terbaik.","Ya Tuhanku, lapangkanlah dadaku untukku, dan mudahkanlah tugasku untukku.","Wahai Yang Membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.","Tidak ada tuhan selain Engkau; Maha Suci Engkau. Sesungguhnya aku termasuk orang-orang yang zalim.","Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang suci, dan amal yang diterima.","Ya Tuhan kami, kami telah menzalimi diri kami — dan jika Engkau tidak mengampuni kami dan merahmati kami, pasti kami termasuk orang-orang yang merugi.","Allah cukup bagi kami, dan Dia sebaik-baik Pelindung.","Ya Allah, aku memohon kepada-Mu ampunan dan kesejahteraan di dunia dan di akhirat.","Ya Tuhanku, tambahkanlah ilmuku.","Ya Allah, berikanlah jiwaku ketakwaannya dan sucikanlah ia — Engkau sebaik-baik yang menyucikannya; Engkau Pelindung dan Pemiliknya.","Aku memohon ampunan kepada Allah Yang Maha Agung, yang tidak ada tuhan selain Dia, Yang Maha Hidup, Yang Mengurus segala sesuatu, dan aku bertobat kepada-Nya.","Ya Tuhan kami, terimalah ini dari kami. Sesungguhnya Engkau Maha Mendengar, Maha Mengetahui.","Ya Allah, tidak ada yang mudah kecuali yang Engkau mudahkan — dan Engkau dapat menjadikan kesulitan itu mudah, jika Engkau menghendaki.","Ya Tuhan kami, anugerahkanlah kepada kami dari pasangan dan anak-anak kami penyejuk mata, dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.","Ya Allah, aku berlindung kepada-Mu dari kegelisahan dan kesedihan, dari kelemahan dan kemalasan, dari kekikiran dan kepengecutan, dari beban utang dan dari dikuasai orang lain.","Wahai Yang Maha Hidup, Wahai Yang Mengurus segalanya — dengan rahmat-Mu aku memohon pertolongan.","Ya Tuhan kami, janganlah Engkau condongkan hati kami setelah Engkau memberi kami petunjuk; anugerahkanlah kepada kami rahmat dari sisi-Mu. Sesungguhnya Engkau Maha Pemberi.","Ya Allah, Engkau Maha Pengampun dan Engkau suka mengampuni — maka ampunilah aku.","Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun di bumi atau di langit yang dapat membahayakan — dan Dia Maha Mendengar, Maha Mengetahui.","Ya Tuhan kami, limpahkanlah kesabaran kepada kami, teguhkanlah langkah kami, dan tolonglah kami terhadap kaum yang kafir.","Ya Allah, aku memohon surga kepada-Mu, dan aku berlindung kepada-Mu dari neraka.","Maha Suci Allah dan segala puji bagi-Nya; Maha Suci Allah Yang Maha Agung.","Ya Tuhan kami, ampunilah aku, kedua orang tuaku, dan orang-orang beriman pada hari perhitungan ditegakkan.","Ya Allah, berilah aku petunjuk di antara orang-orang yang Engkau beri petunjuk, berilah aku kesejahteraan di antara orang-orang yang Engkau beri kesejahteraan, peliharalah aku di antara orang-orang yang Engkau pelihara, berkatilah untukku apa yang Engkau berikan kepadaku, dan lindungilah aku dari keburukan apa yang Engkau tetapkan.","Allah cukup bagiku; tidak ada tuhan selain Dia. Kepada-Nya aku bertawakal, dan Dia adalah Tuhan Arsy yang Agung.","Ya Tuhanku, ampunilah aku dan terimalah tobatku. Sesungguhnya Engkau Maha Penerima tobat, Maha Penyayang.","Ya Tuhan kami, janganlah Engkau menghukum kami jika kami lupa atau berbuat kesalahan."],"quran":["Ya Tuhan kami terimalah daripada kami (amalan kami), sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui","Ya Tuhan kami, jadikanlah kami berdua orang yang tunduk patuh kepada Engkau dan (jadikanlah) diantara anak cucu kami umat yang tunduk patuh kepada Engkau dan tunjukkanlah kepada kami cara-cara dan tempat-tempat ibadat haji kami, dan terimalah taubat kami. Sesungguhnya Engkaulah Yang Maha Penerima taubat lagi Maha Penyayang.","Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka","Ya Tuhan kami, tuangkanlah kesabaran atas diri kami, dan kokohkanlah pendirian kami dan tolonglah kami terhadap orang-orang kafir","Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir","Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi Engkau; karena sesungguhnya Engkau-lah Maha Pemberi (karunia)","Ya Tuhan kami, sesungguhnya Engkau mengumpulkan manusia untuk (menerima pembalasan pada) hari yang tak ada keraguan padanya\". Sesungguhnya Allah tidak menyalahi janji.","Ya Tuhan kami, sesungguhnya kami telah beriman, maka ampunilah segala dosa kami dan peliharalah kami dari siksa neraka","Ya Tuhanku, sesungguhnya aku menazarkan kepada Engkau anak yang dalam kandunganku menjadi hamba yang saleh dan berkhidmat (di Baitul Maqdis). Karena itu terimalah (nazar) itu dari padaku. Sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui","Ya Tuhanku, berilah aku dari sisi Engkau seorang anak yang baik. Sesungguhnya Engkau Maha Pendengar doa","Ya Tuhan kami, kami telah beriman kepada apa yang telah Engkau turunkan dan telah kami ikuti rasul, karena itu masukanlah kami ke dalam golongan orang-orang yang menjadi saksi (tentang keesaan Allah)","Ya Tuhan kami, ampunilah dosa-dosa kami dan tindakan-tindakan kami yang berlebih-lebihan dalam urusan kami dan tetapkanlah pendirian kami, dan tolonglah kami terhadap kaum yang kafir","Ya Tuhan kami, tiadalah Engkau menciptakan ini dengan sia-sia, Maha Suci Engkau, maka peliharalah kami dari siksa neraka.","Ya Tuhan kami, sesungguhnya barangsiapa yang Engkau masukkan ke dalam neraka, maka sungguh telah Engkau hinakan ia, dan tidak ada bagi orang-orang yang zalim seorang penolongpun.","Ya Tuhan kami, sesungguhnya kami mendengar (seruan) yang menyeru kepada iman, (yaitu): \"Berimanlah kamu kepada Tuhanmu\", maka kamipun beriman. Ya Tuhan kami, ampunilah bagi kami dosa-dosa kami dan hapuskanlah dari kami kesalahan-kesalahan kami, dan wafatkanlah kami beserta orang-orang yang banyak berbakti.","Ya Tuhan kami, berilah kami apa yang telah Engkau janjikan kepada kami dengan perantaraan rasul-rasul Engkau. Dan janganlah Engkau hinakan kami di hari kiamat. Sesungguhnya Engkau tidak menyalahi janji","Ya Tuhan kami turunkanlah kiranya kepada kami suatu hidangan dari langit (yang hari turunnya) akan menjadi hari raya bagi kami yaitu orang-orang yang bersama kami dan yang datang sesudah kami, dan menjadi tanda bagi kekuasaan Engkau; beri rzekilah kami, dan Engkaulah pemberi rezeki Yang Paling Utama","Ya Tuhan kami, kami telah menganiaya diri kami sendiri, dan jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya pastilah kami termasuk orang-orang yang merugi.","Ya Tuhan kami, limpahkanlah kesabaran kepada kami dan wafatkanlah kami dalam keadaan berserah diri (kepada-Mu)","Ya Tuhanku, ampunilah aku dan saudaraku dan masukkanlah kami ke dalam rahmat Engkau, dan Engkau adalah Maha Penyayang di antara para penyayang","Ya Tuhan kami; janganlah Engkau jadikan kami sasaran fitnah bagi kaum yang'zalim, dan selamatkanlah kami dengan rahmat Engkau dari (tipu daya) orang-orang yang kafir","Ya Tuhanku, sesungguhnya Engkau telah menganugerahkan kepadaku sebahagian kerajaan dan telah mengajarkan kepadaku sebahagian ta'bir mimpi. (Ya Tuhan) Pencipta langit dan bumi. Engkaulah Pelindungku di dunia dan di akhirat, wafatkanlah aku dalam keadaan Islam dan gabungkanlah aku dengan orang-orang yang saleh.","Ya Tuhanku, jadikanlah negeri ini (Mekah), negeri yang aman, dan jauhkanlah aku beserta anak cucuku daripada menyembah berhala-berhala.","Ya Tuhan kami, sesungguhnya Engkau mengetahui apa yang kami sembunyikan dan apa yang kami lahirkan; dan tidak ada sesuatupun yang tersembunyi bagi Allah, baik yang ada di bumi maupun yang ada di langit.","Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan shalat, ya Tuhan kami, perkenankanlah doaku.","Ya Tuhan kami, beri ampunlah aku dan kedua ibu bapaku dan sekalian orang-orang mukmin pada hari terjadinya hisab (hari kiamat)","Ya Tuhan-ku, masukkanlah aku secara masuk yang benar dan keluarkanlah (pula) aku secara keluar yang benar dan berikanlah kepadaku dari sisi Engkau kekuasaan yang menolong.","Wahai Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami (ini)","Ya Tuhanku, lapangkanlah untukku dadaku, dan mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, supaya mereka mengerti perkataanku","(Ya Tuhanku), sesungguhnya aku telah ditimpa penyakit dan Engkau adalah Tuhan Yang Maha Penyayang di antara semua penyayang","Bahwa tidak ada Tuhan selain Engkau. Maha Suci Engkau, sesungguhnya aku adalah termasuk orang-orang yang zalim","Ya Tuhanku janganlah Engkau membiarkan aku hidup seorang diri dan Engkaulah Waris Yang Paling Baik.","Ya Tuhanku aku berlindung kepada Engkau dari bisikan-bisikan syaitan.","Dan aku berlindung (pula) kepada Engkau ya Tuhanku, dari kedatangan mereka kepadaku","Ya Tuhan kami, kami telah beriman, maka ampunilah kami dan berilah kami rahmat dan Engkau adalah Pemberi rahmat Yang Paling Baik.","Ya Tuhanku berilah ampun dan berilah rahmat, dan Engkau adalah Pemberi rahmat Yang Paling baik","Ya Tuhan kami, jauhkan azab jahannam dari kami, sesungguhnya azabnya itu adalah kebinasaan yang kekal","Ya Tuhan kami, anugrahkanlah kepada kami isteri-isteri kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa.","Ya Tuhanku, berikanlah kepadaku hikmah dan masukkanlah aku ke dalam golongan orang-orang yang saleh","Ya Tuhanku berilah aku ilham untuk tetap mensyukuri nikmat Mu yang telah Engkau anugerahkan kepadaku dan kepada dua orang ibu bapakku dan untuk mengerjakan amal saleh yang Engkau ridhai; dan masukkanlah aku dengan rahmat-Mu ke dalam golongan hamba-hamba-Mu yang saleh","Ya Tuhanku, sesungguhnya aku telah menganiaya diriku sendiri karena itu ampunilah aku\". Maka Allah mengampuninya, sesungguhnya Allah Dialah Yang Maha Pengampun lagi Maha Penyayang.","Ya Tuhanku sesungguhnya aku sangat memerlukan sesuatu kebaikan yang Engkau turunkan kepadaku","Ya Tuhanku, anugrahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang saleh.","Ya Tuhanku, ampunilah aku dan anugerahkanlah kepadaku kerajaan yang tidak dimiliki oleh seorang juapun sesudahku, sesungguhnya Engkaulah Yang Maha Pemberi","Ya Tuhan kami, rahmat dan ilmu Engkau meliputi segala sesuatu, maka berilah ampunan kepada orang-orang yang bertaubat dan mengikuti jalan Engkau dan peliharalah mereka dari siksaan neraka yang menyala-nyala","Ya Tuhanku, tunjukilah aku untuk mensyukuri nikmat Engkau yang telah Engkau berikan kepadaku dan kepada ibu bapakku dan supaya aku dapat berbuat amal yang saleh yang Engkau ridhai; berilah kebaikan kepadaku dengan (memberi kebaikan) kepada anak cucuku. Sesungguhnya aku bertaubat kepada Engkau dan sesungguhnya aku termasuk orang-orang yang berserah diri","bahwasanya aku ini adalah orang yang dikalahkan, oleh sebab itu menangkanlah (aku)","Ya Rabb kami, beri ampunlah kami dan saudara-saudara kami yang telah beriman lebih dulu dari kami, dan janganlah Engkau membiarkan kedengkian dalam hati kami terhadap orang-orang yang beriman; Ya Rabb kami, Sesungguhnya Engkau Maha Penyantun lagi Maha Penyayang","Ya Tuhan kami hanya kepada Engkaulah kami bertawakkal dan hanya kepada Engkaulah kami bertaubat dan hanya kepada Engkaulah kami kembali\".","Ya Tuhan kami, janganlah Engkau jadikan kami (sasaran) fitnah bagi orang-orang kafir. Dan ampunilah kami ya Tuhan kami. Sesungguhnya Engkaulah Yang Maha Perkasa lagi Maha Bijaksana","Ya Rabb kami, sempurnakanlah bagi kami cahaya kami dan ampunilah kami; Sesungguhnya Engkau Maha Kuasa atas segala sesuatu","Ya Tuhanku! Ampunilah aku, ibu bapakku, orang yang masuk ke rumahku dengan beriman dan semua orang yang beriman laki-laki dan perempuan. Dan janganlah Engkau tambahkan bagi orang-orang yang zalim itu selain kebinasaan"],"deeds":["Bersedekah (walaupun sedikit)","Baca Al-Qur'an beserta maknanya","Shalat Tarawih","Beri berbuka orang yang berpuasa","Bantu orang tua atau keluarga","Ucapkan istigfar 100 kali","Telepon atau kunjungi kerabat","Berbagi makanan dengan tetangga","Shalat 2 rakaat tambahan","Pelajari satu doa baru","Bicara dengan baik, jangan menggunjing","Doakan orang lain"],"lastTen":["Shalat Isya & Subuh berjamaah","Shalat Tarawih / Qiyam","Baca Al-Qur'an","Perbanyak doa","Ulangi doa Qadar","Bersedekah","Zikir & istigfar","Iktikaf / waktu ibadah yang tenang"],"eidPrep":["Bayar Zakat Fitrah","Pilih pakaian Lebaran","Rencanakan tempat & waktu shalat Id","Beli hadiah untuk keluarga","Beri THR / hadiah uang","Rencanakan makanan & kue Lebaran","Bersihkan & hias rumah","Telepon kerabat yang jauh","Maafkan & berdamai","Siapkan sedekah untuk yang membutuhkan","Rencanakan kunjungan di hari Lebaran","Syukuri Ramadan kepada Allah"],"kidsDeeds":["Tersenyum kepada seseorang — tersenyum itu sedekah!","Ucapkan Bismillah sebelum makan","Bantu menyiapkan meja berbuka","Ucapkan terima kasih kepada Ibu dan Ayah","Berbagi mainan favoritmu","Berikan sebutir kurma kepada seseorang saat berbuka","Ucapkan Alhamdulillah setelah makan","Masukkan koin ke kotak sedekah","Sirami tanaman","Beri makan burung","Ucapkan salam lebih dulu","Bantu merapikan kamarmu","Buat kartu Ramadan untuk seseorang","Minta maaf saat berbuat salah","Baca atau dengarkan surah pendek","Doakan keluargamu","Bantu membawakan sesuatu untuk seseorang","Berbagi camilanmu","Ucapkan SubhanAllah 10 kali","Telepon atau kunjungi kakek dan nenek","Pungut sampah dan buang ke tempatnya","Gambar ucapan terima kasih","Shalat bersama keluargamu","Pelajari satu kata Arab baru","Berikan makanan kepada tetangga","Bersikap baik kepada teman","Ucapkan Astaghfirullah 10 kali","Coba puasa sebentar hari ini","Bantu mencuci piring setelah berbuka","Doakan semua Muslim"],"coloring":{"crescent":"Bulan Sabit & Bintang","dates":"Semangkuk Kurma","lantern":"Lentera Ramadan (Fanus)","mat":"Sajadah","mosque":"Masjid","quran":"Al-Qur'an di Atas Rehal"},"months":["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],"monthsShort":["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],"weekdays":["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},"fr":{"strings":{"asr":"Asr","belongsTo":"Ce planificateur appartient à","bookmarkDua":"Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure façon.","bookmarkDuaSrc":"Abou Dawoud 1522","bookmarkMotto":"Jour après jour, acte après acte","bookmarksIntro":"Quatre marque-pages pour votre planificateur et votre Coran. Découpez le long des pointillés.","bookmarksTitle":"Marque-pages du Ramadan","brand":"SONGLAP DEALS","cardDay":"Jour {n}","certFor":"pour un merveilleux Ramadan de jeûne, de prière, de Coran et de bonnes actions","certPresented":"Ce diplôme est fièrement décerné à","certTitle":"Mon premier Ramadan","certWellDone":"Bravo, petite étoile !","coloringTitle":"Colorie le dessin !","coverTitle":"Planificateur du Ramadan","coverYear":"Ramadan 1448 H · 2027","dateCol":"Date","day":"Jour","dayOfRamadan":"Jour {n} du Ramadan","deedsIntro":"Cochez une case chaque jour où vous accomplissez l'action. Les petites actions faites chaque jour sont les plus aimées.","deedsTitle":"Suivi des bonnes actions","dhuhr":"Dhuhr","done":"Fait","duaCardDay":"Jour {n}","duaCardsIntro":"Les 30 douas quotidiennes en cartes à découper — une pour chaque jour du Ramadan. Découpez le long des pointillés et gardez chaque carte là où vous la verrez.","duaCardsTitle":"Cartes de douas à imprimer","duaOfDay":"Doua du jour","eidDayTitle":"Planificateur du jour de l'Aïd","eidGratitude":"Trois choses pour lesquelles je remercie Allah ce Ramadan","eidMubarak":"Aïd Moubarak !","eidPrepTitle":"Préparer l'Aïd","extraWorship":"Mon programme d'adoration pour ces nuits","fajr":"Fajr","fasted":"Jeûné","fasting":"Jeûne","focusLine":"Priorité","footerBrand":"Planificateur du Ramadan · Songlap Deals","glasses":"verres","goodDeedToday":"Bonne action du jour","gratitude":"Aujourd'hui, je suis reconnaissant pour","iftar":"Iftar","iftarTime":"Heure de l'iftar","isha":"Isha","juz":"Juz","khatmaIntro":"Un juz par jour permet de terminer tout le Coran pendant le Ramadan. Cochez chaque juz lorsque vous le terminez.","khatmaTitle":"Suivi de la khatma du Coran","kidsCardsIntro":"Une carte pour chaque jour du Ramadan. Lis la carte, fais l'action et colorie l'étoile !","kidsCardsTitle":"30 cartes de bonnes actions pour enfants","kidsChartIntro":"Colorie une étoile chaque jour où tu jeûnes (même un petit jeûne !), pries, fais une bonne action ou lis le Coran.","kidsChartTitle":"Mon tableau d'étoiles du Ramadan","kidsDivider":"Pack Ramadan des enfants","kidsDividerSub":"Tableaux d'étoiles, cartes de bonnes actions, pages de coloriage et un diplôme — rien que pour les enfants !","lastTenIntro":"Parmi ces nuits se trouve Laylat al-Qadr — une nuit meilleure que mille mois. Multipliez l'adoration chaque nuit, surtout les nuits impaires (21, 23, 25, 27, 29).","lastTenTitle":"Les dix dernières nuits","maghrib":"Maghrib","mealPlan":"Plan des repas","mealsTitle":"Planificateur de repas — Tout le mois","moonNote":"Le début du Ramadan dépend de l'observation de la lune. Si le Ramadan commence un jour plus tôt ou plus tard chez vous, changez la date de début dans les réglages et régénérez le planificateur.","night":"Nuit","notes":"Notes","notesTitle":"Notes","overviewTitle":"Le Ramadan en un coup d'œil — 30 jours","pageOf":"Page {n}","planCol":"Plan","prayerTracker":"Suivi des prières","prayers":"Prières","qadrDuaTitle":"La doua de Laylat al-Qadr","quran":"Coran","quranDone":"Lu","quranDuasIntro":"Des invocations tirées du Coran lui-même — les douas « Rabbana » et les prières des prophètes et des croyants, avec la sourate et le verset de chacune. Elles s'ajoutent aux douas quotidiennes.","quranDuasTitle":"Douas du Coran","quranGoal":"Coran du jour","quranTarget":"Objectif","ramadanMubarak":"Ramadan Moubarak","readingPlan":"Plan de lecture","shopDates":"Dattes & boissons","shopIftar":"Cuisine de l'iftar","shopOther":"Autres choses dont j'ai besoin","shopSuhoor":"Articles pour le suhoor","shoppingTitle":"Liste de courses du Ramadan","snacks":"Collations","suhoor":"Suhoor","suhoorEnds":"Fin du suhoor","surahCol":"Sourate","surahTrackerIntro":"Chaque sourate dans l'ordre, avec son nombre de versets. Cochez la case et écrivez la date chaque fois que vous terminez une sourate.","surahTrackerTitle":"Suivi de lecture du Coran — Les 114 sourates","taraweeh":"Tarawih","timeCol":"Heure","todo":"Tâches du jour","versesCol":"Versets","water":"Eau","week":"Semaine {n}","weekDays":"Jours {a}–{b}","weekGoals":"Objectifs de la semaine"},"duas30":["La soif est partie, les veines sont humidifiées, et la récompense est certaine, si Allah le veut.","Ô Allah, c'est pour Toi que j'ai jeûné, et c'est avec Ta subsistance que je romps mon jeûne.","Notre Seigneur, donne-nous le bien ici-bas et le bien dans l'au-delà, et protège-nous du châtiment du Feu.","Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure façon.","Mon Seigneur, ouvre pour moi ma poitrine et facilite ma tâche.","Ô Toi qui fais changer les cœurs, affermis mon cœur sur Ta religion.","Il n'y a de dieu que Toi ; gloire à Toi. Vraiment, j'ai été parmi les injustes.","Ô Allah, je Te demande une science utile, une subsistance pure et des actions acceptées.","Notre Seigneur, nous nous sommes fait du tort à nous-mêmes — et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certes parmi les perdants.","Allah nous suffit, et Il est le meilleur Protecteur.","Ô Allah, je Te demande le pardon et le bien-être ici-bas et dans l'au-delà.","Mon Seigneur, augmente ma science.","Ô Allah, donne à mon âme sa piété et purifie-la — Tu es le meilleur pour la purifier ; Tu es son Protecteur et son Maître.","Je demande pardon à Allah le Très-Grand, en dehors de Qui il n'y a pas de dieu, le Vivant, Celui qui subsiste par Lui-même, et je me repens à Lui.","Notre Seigneur, accepte ceci de notre part. Vraiment, Tu es l'Audient, l'Omniscient.","Ô Allah, rien n'est facile sauf ce que Tu rends facile — et Tu peux rendre la difficulté facile, si Tu le veux.","Notre Seigneur, accorde-nous, de nos conjoints et de nos enfants, la fraîcheur des yeux, et fais de nous des guides pour les pieux.","Ô Allah, je cherche refuge auprès de Toi contre le souci et la tristesse, contre la faiblesse et la paresse, contre l'avarice et la lâcheté, contre le poids des dettes et contre la domination des hommes.","Ô Vivant, ô Toi qui subsistes par Toi-même — par Ta miséricorde, je cherche secours.","Notre Seigneur, ne fais pas dévier nos cœurs après nous avoir guidés ; accorde-nous de Ta part une miséricorde. Vraiment, Tu es le Grand Donateur.","Ô Allah, Tu es Pardonneur et Tu aimes pardonner — alors pardonne-moi.","Au nom d'Allah, par le nom de Qui rien sur terre ni dans les cieux ne peut nuire — et Il est l'Audient, l'Omniscient.","Notre Seigneur, déverse sur nous la patience, affermis nos pas et aide-nous contre le peuple mécréant.","Ô Allah, je Te demande le Paradis, et je cherche refuge auprès de Toi contre le Feu.","Gloire à Allah et louange à Lui ; gloire à Allah le Très-Grand.","Notre Seigneur, pardonne-moi, ainsi qu'à mes parents et aux croyants, le jour où le compte sera établi.","Ô Allah, guide-moi parmi ceux que Tu as guidés, accorde-moi le bien-être parmi ceux à qui Tu l'as accordé, prends-moi sous Ta protection parmi ceux que Tu as pris sous Ta protection, bénis pour moi ce que Tu m'as donné, et protège-moi du mal de ce que Tu as décrété.","Allah me suffit ; il n'y a de dieu que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense.","Mon Seigneur, pardonne-moi et accepte mon repentir. Vraiment, Tu es le plus Pardonnant, le plus Miséricordieux.","Notre Seigneur, ne nous tiens pas rigueur si nous oublions ou commettons une erreur."],"quran":["O notre Seigneur, accepte ceci de notre part! Car c'est Toi l'Audient, l'Omniscient.","Notre Seigneur! Fais de nous Tes Soumis, et de notre descendance une communauté soumise à Toi. Et montre nous nos rites et accepte de nous le repentir. Car c'est Toi certes l'Accueillant au repentir, le Miséricordieux.","Seigneur! Accorde nous belle part ici-bas, et belle part aussi dans l'au-delà; et protège-nous du châtiment du Feu!","Seigneur! Déverse sur nous l'endurance, affermis nos pas et donne-nous la victoire sur ce peuple infidèle","Seigneur, ne nous châtie pas s'il nous arrive d'oublier ou de commettre une erreur. Seigneur! Ne nous charge pas d'un fardeau lourd comme Tu as chargé ceux qui vécurent avant nous. Seigneur! Ne nous impose pas ce que nous ne pouvons supporter, efface nos fautes, pardonne-nous et fais nous miséricorde. Tu es Notre Maître, accorde-nous donc la victoire sur les peuples infidèles.","Seigneur! Ne laisse pas dévier nos cœurs après que Tu nous aies guidés; et accorde-nous Ta miséricorde. C'est Toi, certes, le Grand Donateur!","Seigneur! C'est Toi qui rassembleras les gens, un jour - en quoi il n'y a point de doute - Allah, vraiment, ne manque jamais à Sa promesse","O notre Seigneur, nous avons la foi; pardonne-nous donc nos péchés, et protège-nous du châtiment du Feu","Seigneur, je T'ai voué en toute exclusivité ce qui est dans mon ventre. Accepte-le donc, de moi. C'est Toi certes l' Audient et l'Omniscient.","O mon Seigneur, donne-moi, venant de Toi, une excellente descendance. Car Tu es Celui qui entend bien la prière","Seigneur! Nous avons cru à ce que Tu as fait descendre et suivi le messager. Inscris-nous donc parmi ceux qui témoignent","Seigneur, pardonne-nous nos péchés ainsi que nos excès dans nos comportements, affermis nos pas et donne-nous la victoire sur les gens mécréants","Notre Seigneur! Tu n'as pas créé cela en vain. Gloire à Toi! Garde-nous du châtiment du Feu.","Seigneur! Quiconque Tu fais entrer dans le Feu, Tu le couvres vraiment d'ignominie. Et pour les injustes, il n'y a pas de secoureurs!","Seigneur! Nous avons entendu l'appel de celui qui a appelé ainsi à la foi: «Croyez en votre Seigneur» et dès lors nous avons cru. Seigneur, pardonne-nous nos péchés, efface de nous nos méfaits, et place nous, à notre mort, avec les gens de bien.","Seigneur! Donne-nous ce que Tu nous as promis par Tes messagers. Et ne nous couvre pas d'ignominie au Jour de la Résurrection. Car Toi, Tu ne manques pas à Ta promesse","O Allah, notre Seigneur, dit Jésus, fils de Marie, fais descendre du ciel sur nous une table servie qui soit une fête pour nous, pour le premier d'entre nous, comme pour le dernier, ainsi qu'un signe de Ta part. Nourris-nous: Tu es le meilleur des nourrisseurs","O notre Seigneur, nous avons fait du tort à nous-mêmes. Et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons très certainement du nombre des perdants","O notre Seigneur! Déverse sur nous l'endurance et fais nous mourir entièrement soumis","O mon Seigneur, pardonne à moi et à mon frère et fais-nous entrer en Ta miséricorde, car Tu es Le plus Miséricordieux des miséricordieux","O notre Seigneur, ne fais pas de nous une cible pour les persécutions des injustes. Et délivre-nous, par Ta miséricorde, des gens mécréants","O mon Seigneur, Tu m'as donné du pouvoir et m'as enseigné l'interprétation des rêves. [C'est Toi Le] Créateur des cieux et de la terre, Tu es mon patron, ici-bas et dans l'au-delà. Fais-moi mourir en parfaite soumission et fais moi rejoindre les vertueux.","O mon Seigneur, fais de cette cité un lieu sûr, et préserve-moi ainsi que mes enfants de l'adoration des idoles.","O notre Seigneur, Tu sais, vraiment, ce que nous cachons et ce que nous divulguons: - et rien n'échappe à Allah, ni sur terre, ni au ciel!","O mon Seigneur! Fais que j'accomplisse assidûment la Salât ainsi qu'une partie de ma descendance; exauce ma prière, ô notre Seigneur!","O notre Seigneur! pardonne-moi, ainsi qu'à mes père et mère et aux croyants, le jour de la reddition des comptes","O mon Seigneur, fais que j'entre par une entrée de vérité et que je sorte par une sortie de vérité; et accorde-moi de Ta part, un pouvoir bénéficiant de Ton secours","O notre Seigneur, donne-nous de Ta part une miséricorde; et assure nous la droiture dans tout ce qui nous concerne","Seigneur, ouvre-moi ma poitrine, et facilite ma mission, et dénoue un nœud en ma langue, afin qu'ils comprennent mes paroles,","Le mal m'a touché. Mais Toi, tu es le plus miséricordieux des miséricordieux","Pas de divinité à part Toi! Pureté à Toi! J'ai été vraiment du nombre des injustes","Ne me laisse pas seul, Seigneur, alors que Tu es le meilleur des héritiers","Seigneur, je cherche Ta protection, contre les incitations des diables.","je cherche Ta protection, Seigneur, contre leur présence auprès de moi","Seigneur, nous croyons; pardonne-nous donc et fais-nous miséricorde, car Tu es le meilleur des Miséricordieux","Seigneur, pardonne et fais miséricorde. C'est Toi le Meilleur des miséricordieux","Seigneur, écarte de nous le châtiment de l'Enfer","Seigneur, donne-nous, en nos épouses et nos descendants, la joie des yeux, et fais de nous un guide pour les pieux","Seigneur, accorde-moi sagesse (et savoir) et fais-moi rejoindre les gens de bien;","Permets-moi Seigneur, de rendre grâce pour le bienfait dont Tu m'as comblé ainsi que mes père et mère, et que je fasse une bonne œuvre que tu agrées et fais-moi entrer, par Ta miséricorde, parmi Tes serviteurs vertueux","Seigneur, je me suis fait du tort à moi-même; pardonne-moi». Et Il lui pardonna. C'est Lui vraiment le Pardonneur, le Miséricordieux!","Seigneur, j'ai grand besoin du bien que tu feras descendre vers moi","Seigneur, fais-moi don d'une [progéniture] d'entre les vertueux","Seigneur, pardonne-moi et fais-moi don d'un royaume tel que nul après moi n'aura de pareil. C'est Toi le grand Dispensateur","Seigneur! Tu étends sur toute chose Ta miséricorde et Ta science. Pardonne donc à ceux qui se repentent et suivent Ton chemin et protège-les du châtiment de l'Enfer.","O Seigneur! Inspire-moi pour que je rende grâce au bienfait dont Tu m'as comblé ainsi qu'à mes père et mère, et pour que je fasse une bonne œuvre que Tu agrées. Et fais que ma postérité soit de moralité saine. Je me repens à Toi et je suis du nombre des Soumis","Moi, je suis vaincu. Fais triompher (Ta cause)","Seigneur, pardonne-nous, ainsi qu'à nos frères qui nous ont précédés dans la foi; et ne mets dans nos cœurs aucune rancœur pour ceux qui ont cru. Seigneur, Tu es Compatissant et Très Miséricordieux","Seigneur, c'est en Toi que nous mettons notre confiance et à Toi nous revenons [repentants]. Et vers Toi est le Devenir.","Seigneur, ne fais pas de nous [un sujet] de tentation pour ceux qui ont mécru; et pardonne-nous, Seigneur, car c'est Toi le Puissant, le Sage","Seigneur, parfais-nous notre lumière et pardonne-nous. Car Tu es Omnipotent","Seigneur! Pardonne-moi, et à mes père et mère et à celui qui entre dans ma demeure croyant, ainsi qu'aux croyants et croyantes; et ne fais croître les injustes qu'en perdition"],"deeds":["Fais l'aumône (même un peu)","Lis le Coran avec son sens","Prie le tarawih","Offre l'iftar à un jeûneur","Aide tes parents ou ta famille","Dis istighfar 100 fois","Appelle ou rends visite à un proche","Partage un repas avec un voisin","Prie 2 unités supplémentaires","Apprends une nouvelle doua","Parle avec gentillesse, sans médisance","Fais une doua pour quelqu'un d'autre"],"lastTen":["Prie Isha et Fajr en groupe","Prie le tarawih / qiyam","Lis le Coran","Fais beaucoup de douas","Répète la doua du Qadr","Fais l'aumône","Dhikr et istighfar","Itikaf / temps d'adoration au calme"],"eidPrep":["Verse la Zakat al-Fitr","Choisis les vêtements de l'Aïd","Planifie le lieu et l'heure de la prière de l'Aïd","Achète des cadeaux pour la famille","Donne l'Eidi / des cadeaux en argent","Planifie les plats et douceurs de l'Aïd","Nettoie et décore la maison","Appelle les proches éloignés","Pardonne et fais la paix","Prépare l'aumône pour les nécessiteux","Planifie les visites du jour de l'Aïd","Remercie Allah pour le Ramadan"],"kidsDeeds":["Souris à quelqu'un — le sourire est une aumône !","Dis Bismillah avant de manger","Aide à dresser la table de l'iftar","Dis merci à Maman et Papa","Partage ton jouet préféré","Donne une datte à quelqu'un à l'iftar","Dis Alhamdulillah après avoir mangé","Mets quelques pièces dans la boîte d'aumône","Arrose une plante","Nourris les oiseaux","Dis le salam en premier","Aide à ranger ta chambre","Fabrique une carte de Ramadan pour quelqu'un","Dis pardon quand tu fais une erreur","Lis ou écoute une courte sourate","Fais une doua pour ta famille","Aide quelqu'un à porter quelque chose","Partage ton goûter","Dis SubhanAllah 10 fois","Appelle ou rends visite à tes grands-parents","Ramasse un déchet et jette-le à la poubelle","Dessine un dessin de remerciement","Prie avec ta famille","Apprends un nouveau mot arabe","Donne à manger à un voisin","Sois gentil avec un ami","Dis Astaghfirullah 10 fois","Essaie un petit jeûne aujourd'hui","Aide à faire la vaisselle après l'iftar","Fais une doua pour tous les musulmans"],"coloring":{"crescent":"Croissant de lune et étoile","dates":"Un bol de dattes","lantern":"Lanterne du Ramadan (fanous)","mat":"Tapis de prière","mosque":"La mosquée","quran":"Le Coran sur son lutrin"},"months":["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],"monthsShort":["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],"weekdays":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]}};

  var LANGS_NEW = ['bn', 'ur', 'tr', 'ms', 'id', 'fr'];
  LANGS_NEW.forEach(function (lg) {
    var t = I18N[lg];
    Object.keys(STRINGS).forEach(function (k) { STRINGS[k][lg] = t.strings[k]; });
    DUAS.forEach(function (d, i) { d[lg] = t.duas30[i]; });
    QURAN_DUAS.forEach(function (d, i) { d[lg] = t.quran[i]; });
    DEEDS.forEach(function (d, i) { d[lg] = t.deeds[i]; });
    LAST_TEN_ACTS.forEach(function (d, i) { d[lg] = t.lastTen[i]; });
    EID_PREP.forEach(function (d, i) { d[lg] = t.eidPrep[i]; });
    KIDS_DEEDS.forEach(function (d, i) { d[lg] = t.kidsDeeds[i]; });
    Object.keys(COLORING_NAMES).forEach(function (id) { COLORING_NAMES[id][lg] = t.coloring[id]; });
  });

  var MONTHS = { en: MONTHS_EN, ar: MONTHS_AR };
  var MONTHS_SHORT = {};
  var WEEKDAYS = { en: WEEKDAYS_EN, ar: WEEKDAYS_AR };
  LANGS_NEW.forEach(function (lg) {
    MONTHS[lg] = I18N[lg].months;
    MONTHS_SHORT[lg] = I18N[lg].monthsShort;
    WEEKDAYS[lg] = I18N[lg].weekdays;
  });

  var api = {
    STRINGS: STRINGS, DUAS: DUAS, QADR_DUA: QADR_DUA,
    DEEDS: DEEDS, LAST_TEN_ACTS: LAST_TEN_ACTS, EID_PREP: EID_PREP,
    KIDS_DEEDS: KIDS_DEEDS, COLORING_IDS: COLORING_IDS, COLORING_NAMES: COLORING_NAMES,
    QURAN_DUAS: QURAN_DUAS, SURAHS: SURAHS,
    MONTHS_EN: MONTHS_EN, MONTHS_AR: MONTHS_AR,
    WEEKDAYS_EN: WEEKDAYS_EN, WEEKDAYS_AR: WEEKDAYS_AR,
    MONTHS: MONTHS, MONTHS_SHORT: MONTHS_SHORT, WEEKDAYS: WEEKDAYS,
    LANGS_NEW: LANGS_NEW
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.RPDATA = api;
})(typeof window !== 'undefined' ? window : globalThis);
