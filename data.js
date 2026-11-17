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

  var api = {
    STRINGS: STRINGS, DUAS: DUAS, QADR_DUA: QADR_DUA,
    DEEDS: DEEDS, LAST_TEN_ACTS: LAST_TEN_ACTS, EID_PREP: EID_PREP,
    KIDS_DEEDS: KIDS_DEEDS, COLORING_IDS: COLORING_IDS, COLORING_NAMES: COLORING_NAMES,
    QURAN_DUAS: QURAN_DUAS, SURAHS: SURAHS,
    MONTHS_EN: MONTHS_EN, MONTHS_AR: MONTHS_AR,
    WEEKDAYS_EN: WEEKDAYS_EN, WEEKDAYS_AR: WEEKDAYS_AR
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.RPDATA = api;
})(typeof window !== 'undefined' ? window : globalThis);
