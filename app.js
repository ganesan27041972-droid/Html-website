// Spotify Clone - Advanced Application State & Interaction Engine

// FEATURED CLOUDINARY SONGS METADATA
const FEATURED_SONGS = [
  {
    id: 1,
    title: "Anjali Anjali",
    artist: "A.R. Rahman, K.S. Chithra",
    album: "Duet",
    duration: "5:57",
    durationSec: 357,
    url: "Songs/Anjali Anjali.mp3",
    initials: "AA",
    gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
    themeColor: "rgba(248, 87, 166, 0.4)",
    year: "1994",
    lyrics: [
      "0:10 | Anjali Anjali Pushpanjali...",
      "0:25 | Poove un paathathil pushpanjali...",
      "0:40 | Kaadhal dhevadhai koil kondal...",
      "0:52 | Aha anjali anjali pushpanjali...",
      "1:15 | Sangeetha maari mazhai thoorum...",
      "1:30 | Isaiyodu manam thulli thulli aadum...",
      "1:45 | Kannil oliyaai vandhu kalandhu...",
      "2:00 | Aaraadha kadhal pushpanjali..."
    ]
  },
  {
    id: 2,
    title: "Ennake Ennaka",
    artist: "A.R. Rahman, Hariharan",
    album: "Jodi",
    duration: "5:54",
    durationSec: 354,
    url: "Songs/Ennake-Ennaka.mp3",
    initials: "EE",
    gradient: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
    themeColor: "rgba(71, 118, 230, 0.4)",
    year: "1999",
    lyrics: [
      "0:12 | Ennake ennaka nee pirandhayo...",
      "0:28 | Kaadhal kadalil naan neendhayo...",
      "0:44 | Un idhaya thudippin thalathile...",
      "0:58 | Naan en ulagai tholaithayoo...",
      "1:20 | Minminigal parakkum iravinile...",
      "1:35 | Kanavugal podhiyum manadhinile...",
      "1:50 | Nee vandha velai pon velai...",
      "2:05 | Ennodu serndha anbu solai..."
    ]
  },
  {
    id: 3,
    title: "Gehra Hua",
    artist: "Dhurandhar",
    album: "Gehra Hua Single",
    duration: "6:03",
    durationSec: 363,
    url: "Songs/Gehra Hua - Dhurandhar 320 Kbps.mp3",
    initials: "GH",
    gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    themeColor: "rgba(43, 88, 118, 0.4)",
    year: "2023",
    lyrics: [
      "0:08 | Gehra hua ye aasmaan...",
      "0:22 | Kho gaya hai mera jahaan...",
      "0:38 | Dheemi dheemi chalti hawayein...",
      "0:50 | Puchein kahaan hai teri duayein...",
      "1:10 | Iss shab ke andhere mein...",
      "1:25 | Teri yaadon ke saaye mein...",
      "1:40 | Gehra hua hai dard ye...",
      "1:55 | Dhurandhar ka safar ye..."
    ]
  },
  {
    id: 4,
    title: "Kashmir Main Tu Kanyakumari",
    artist: "Arijit Singh, Sunidhi Chauhan",
    album: "Chennai Express",
    duration: "5:07",
    durationSec: 307,
    url: "Songs/Kashmir Main Tu Kanyakumari.mp3",
    initials: "KK",
    gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
    themeColor: "rgba(255, 153, 102, 0.4)",
    year: "2013",
    lyrics: [
      "0:15 | Kashmir main tu kanyakumari...",
      "0:24 | Uttar-dakshin ki katt gayi bimari...",
      "0:32 | Gimme some heat, gimme some sound...",
      "0:40 | Get your feet up off the ground...",
      "0:55 | Chipak chipak chalti hai gaadi...",
      "1:04 | Jeene ki aadat ab hai sudhaari...",
      "1:12 | Kashmir main tu kanyakumari...",
      "1:20 | Ganga mein doobi alakh-niraari..."
    ]
  },
  {
    id: 5,
    title: "Aalaporan Thamizhan",
    artist: "A.R. Rahman, Kailash Kher",
    album: "Mersal",
    duration: "5:48",
    durationSec: 348,
    url: "Songs/Aalaporan-Thamizhan-MassTamilan.com.mp3",
    initials: "AT",
    gradient: "linear-gradient(135deg, #e65c00 0%, #F9D423 100%)",
    themeColor: "rgba(230, 92, 0, 0.4)",
    year: "2017",
    lyrics: [
      "0:20 | Aalaporan thamizhan ulagamellaam...",
      "0:35 | Nalladhor paadhai padhaippaan...",
      "0:50 | Meesaya murukki thimirodu nadappaano...",
      "1:05 | Veera thamizh magan thaanada...",
      "1:30 | Mannil thadam padhithu selvom...",
      "1:45 | Vinnai vilai pesi velvom...",
      "2:00 | Aalaporan thamizhan vetri murasu...",
      "2:15 | Ulagil olithidum perarasu..."
    ]
  },
  {
    id: 6,
    title: "Mei Nigara",
    artist: "Sid Sriram, A.R. Rahman",
    album: "24",
    duration: "5:32",
    durationSec: 332,
    url: "Songs/Mei-Nigara.mp3",
    initials: "MN",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    themeColor: "rgba(17, 153, 142, 0.4)",
    year: "2016",
    lyrics: [
      "0:15 | Mei nigara mei nigara anbe...",
      "0:30 | Kai viralodu kai viralum korthu...",
      "0:45 | Nee thandha muththathil vaazhum...",
      "1:00 | En idhayam un vasamaagiradhey...",
      "1:20 | Kalamellaam kadhal seiyum...",
      "1:35 | Kaatrai pol parandhiduven...",
      "1:50 | Mei nigara oliyaaga vandhu...",
      "2:05 | En vaanil niraindhiduven..."
    ]
  },
  {
    id: 7,
    title: "Kannukulla",
    artist: "Vijay Prakash, Shweta Mohan",
    album: "Maryan",
    duration: "6:02",
    durationSec: 362,
    url: "Songs/Kannukulla - NaaSongs.mp3",
    initials: "KN",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    themeColor: "rgba(0, 198, 255, 0.4)",
    year: "2013",
    lyrics: [
      "0:12 | Kannukulla unnai vaithen...",
      "0:28 | Nenjukulla unnai sumappen...",
      "0:44 | Kadalaagi ponadhae en anbe...",
      "0:58 | Uyirae unnai paarthukkolven...",
      "1:18 | Kattodu aadiya kaatrai pol...",
      "1:33 | Alai thazhuvum manal veedu pol...",
      "1:48 | Nee illaadha ulagil naanillai...",
      "2:03 | Unnai piriyum thavamum seiyen..."
    ]
  },
  {
    id: 8,
    title: "Ennodu Nee Irundhal",
    artist: "Sid Sriram, Sunitha Sarathy",
    album: "I",
    duration: "5:52",
    durationSec: 352,
    url: "Songs/Ennodu-Nee-Irundhal.mp3",
    initials: "EI",
    gradient: "linear-gradient(135deg, #e52d27 0%, #b31217 100%)",
    themeColor: "rgba(229, 45, 39, 0.4)",
    year: "2015",
    lyrics: [
      "0:25 | Ennodu nee irundhal...",
      "0:40 | Vaazhve perinpame...",
      "0:55 | Nee ennai pirindhaalae...",
      "1:10 | Maraname en nuzhaivayile...",
      "1:35 | Kannil un mugame minnudhu...",
      "1:50 | Nenjil un isaiye olikkudhu...",
      "2:05 | Kalamum neramum kadandhu...",
      "2:20 | Ennodu nee irundhal..."
    ]
  },
  {
    id: 9,
    title: "Kannalanae Enadhu",
    artist: "K.S. Chithra, A.R. Rahman",
    album: "Bombay",
    duration: "5:48",
    durationSec: 348,
    url: "Songs/Kannalanae Enadhu.mp3",
    initials: "KE",
    gradient: "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)",
    themeColor: "rgba(101, 78, 163, 0.4)",
    year: "1995",
    lyrics: [
      "0:18 | Kannalanae enadhu kannai netrodu...",
      "0:34 | Kaanavillai endradhu enna...",
      "0:50 | Kadhalin velaiyil naan tholaindhu...",
      "1:05 | Meelaamal thavikkinra podhu...",
      "1:28 | Nee thandhu pona oru paarvaiyil...",
      "1:43 | En iravugal pagal aayittadhey...",
      "1:58 | Kannalanae aravanaithu kolvaai...",
      "2:13 | Un anbil ennai mudithiduvaai..."
    ]
  },
  {
    id: 10,
    title: "Kutti Story",
    artist: "Thalapathy Vijay, Anirudh",
    album: "Master",
    duration: "5:18",
    durationSec: 318,
    url: "Songs/Kutti-Story-MassTamilan.io.mp3",
    initials: "KS",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    themeColor: "rgba(65, 67, 69, 0.4)",
    year: "2020",
    lyrics: [
      "0:10 | Let me sing a kutti story...",
      "0:18 | Pay attention, listen to me...",
      "0:26 | Life is very short, child...",
      "0:34 | Always be happy...",
      "0:42 | Design your own destiny...",
      "0:50 | Keep away tension baby...",
      "0:58 | If you fail, don't worry...",
      "1:06 | Success is next door baby..."
    ]
  },
  {
    id: 11,
    title: "Nannare Nannare",
    artist: "Shreya Ghoshal, A.R. Rahman",
    album: "Guru",
    duration: "5:59",
    durationSec: 359,
    url: "Songs/Nannare-Nannare.mp3",
    initials: "NN",
    gradient: "linear-gradient(135deg, #11998e 0%, #f9d423 100%)",
    themeColor: "rgba(17, 153, 142, 0.4)",
    year: "2007",
    lyrics: [
      "0:15 | Nannare nannare nannare na...",
      "0:30 | Puyal mazhai thoorum sandhathile...",
      "0:45 | En vasam thappi naan parappen...",
      "1:00 | Vaan megam thazhuvi kolven...",
      "1:20 | Kaadhalin charalil nanaindhu...",
      "1:35 | Manam kotti kotti paadudhey...",
      "1:50 | Nannare nannare kondaadum...",
      "2:05 | Mazhai vandhu manadhai thottadhum..."
    ]
  },
  {
    id: 12,
    title: "Aaruyire",
    artist: "A.R. Rahman, Chinmayi",
    album: "Guru",
    duration: "5:54",
    durationSec: 354,
    url: "Songs/Aaruyire.mp3",
    initials: "AY",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    themeColor: "rgba(32, 58, 67, 0.4)",
    year: "2007",
    lyrics: [
      "0:22 | Aaruyire aaruyire uyire...",
      "0:38 | Unnodadhae en ulagam uyirae...",
      "0:54 | Pagalum iravum un ninaivil kaadhal...",
      "1:10 | Mudivillaamal thodarum anbe...",
      "1:32 | Isaiyil nuzhaindha swasame pole...",
      "1:47 | Unnil kalandhu poven naane...",
      "2:02 | Aaruyire en jeevanum anbil...",
      "2:17 | Uruvaagi nirkum pon chithiramey..."
    ]
  }
];

const EXTRA_SONG_FILES = [
  "01 Powerhouse (From _Coolie_) (Tamil).m4a",
  "Aaluma-Doluma.mp3",
  "Aarariraro.mp3",
  "Aasa Kooda.mp3",
  "Aathadi-Aathadi.mp3",
  "Aathangara-Orathil.mp3",
  "Adhaaru-Adhaaru.mp3",
  "Adheeraa-MassTamilan.dev.mp3",
  "Adiyae-Kolluthey-MassTamilan.com.mp3",
  "Aga-Naga-MassTamilan.dev.mp3",
  "Anbe-En-Anbe-MassTamilan.fm.mp3",
  "Anbil-Avan.mp3",
  "Andha Arabi Kadaloram.mp3",
  "Andha-Kanna-Paathaakaa-MassTamilan.io.mp3",
  "Anju Vanna Poove.mp3",
  "Antartica-MassTamilan.fm.mp3",
  "Aura 10-10.mp3",
  "Ava-Enna-Enna-MassTamilan.com.mp3",
  "Boomi-Enna-Suthudhe.mp3",
  "Chumma-Kizhi-MassTamilan.io.mp3",
  "Dahaa Theme.mp3",
  "Dharala-Prabhu-Title-Track-MassTamilan.io.mp3",
  "En Kadhale (Male).mp3",
  "Engeyum-Kaadhal.mp3",
  "Enna Solla (The New Life of Tamizh).mp3",
  "Ennadi-Maayavi-Nee-MassTamilan.com.mp3",
  "Ennai-Konjam.mp3",
  "Fear Song.mp3",
  "God-Mode-MassTamilan.dev.mp3",
  "Google-Google-MassTamilan.fm.mp3",
  "Halena.mp3",
  "Hasili-Fisiliye-MassTamilan.dev.mp3",
  "Hawa-Hawa.mp3",
  "Hosanna.mp3",
  "Hunter Vantaar.mp3",
  "I Am The Danger.mp3",
  "Ichu Ichu.mp3",
  "Ilamai-Thirumbudhe-MassTamilan.org.mp3",
  "Ishq Jalakar - Karvaan - Dhurandhar (320 kbps).mp3",
  "Jinguchaa.mp3",
  "Kadhale-Kadhale.mp3",
  "Kannala-Kannala.mp3",
  "Kannodu-Kaanberallam.mp3",
  "Kannukulla.mp3",
  "Kerala-Song-MassTamilan.org.mp3",
  "Konji-Pesida-Venaam.mp3",
  "Kuchi Kuchi Rakkamma.mp3",
  "Kutti-Puli-Kootam-MassTamilan.fm.mp3",
  "Lolita.mp3",
  "Maacho-Ennacho-MassTamilan.com.mp3",
  "Machi-Open-The-Bottle.mp3",
  "Mallipoo-MassTamilan.dev.mp3",
  "Manasilaayo.mp3",
  "Mankatha-Theme-Music.mp3",
  "Master-the-Blaster-MassTamilan.io.mp3",
  "Mazhai-Vara-Pogudhe.mp3",
  "Meesaya-Murukku-MassTamilan.com.mp3",
  "Mersalayitten.mp3",
  "Muththa Mazhai.mp3",
  "Naan-Un.mp3",
  "Naani-Koni.mp3",
  "Nallaru Po.mp3",
  "Nee Yeppo Pulla - NaaSongs.mp3",
  "Nee-Singam-Dhan-MassTamilan.dev.mp3",
  "Neethanae-Neethane-MassTamilan.com.mp3",
  "Nenjukkul-Peidhidum-MassTamilan.com.mp3",
  "Oh-Shanthi-Shanthi-MassTamilan.com.mp3",
  "Omana-Penne.mp3",
  "Oorum Blood.mp3",
  "Ordinary-Person-MassTamilan.dev.mp3",
  "Oru-Maalai.mp3",
  "Othaiyadi-Pathayila-MassTamilan.com.mp3",
  "Oxygen.mp3",
  "Pakkam Vanthu.mp3",
  "Pathala-Pathala-MassTamilan.so.mp3",
  "Pathikichu.mp3",
  "Pavazha Malli.mp3",
  "Petta-Paraak-MassTamilan.org.mp3",
  "Powerhouse.mp3",
  "Raawadi-MassTamilan.dev.mp3",
  "Rangola.mp3",
  "Rettai-Kathirae.mp3",
  "Roja-Kadale.mp3",
  "Senjitaley.mp3",
  "Silu-Silu.mp3",
  "Singari.mp3",
  "Sirai - Neelothi Lyric Video _ Vikram Prabhu _ L K Akshay Kumar _ Justin Prabhakaran _ Suresh R - (320 Kbps).mp3",
  "So-Baby-MassTamilan.fm.mp3",
  "Subramaniapuram - Kangal Irandal Video  James  Jai-other-Gb major-109bpm-433hz.m4a",
  "Surviva-MassTamilan.com.mp3",
  "Suttum-Vizhi.mp3",
  "Tamilselvi.mp3",
  "Thangapoovey.mp3",
  "Thani-Oruvan.mp3",
  "Theemai-Dhan-Vellum.mp3",
  "Vaarayo-Vaarayo-MassTamilan.dev.mp3",
  "Vaathi-Coming-MassTamilan.io.mp3",
  "Vaathi-Raid-MassTamilan.io.mp3",
  "Vanganna-Vanakanganna.mp3",
  "Vaseegara.mp3",
  "Veera-Raja-Veera-MassTamilan.dev.mp3",
  "Velicha-Poove.mp3",
  "Vengamavan-MassTamilan.org.mp3",
  "Venmegam-other-Eb_major-115bpm-440hz[1].m4a",
  "Vinveli Nayaga.mp3",
  "Vizhi Moodi Yosithaal.mp3",
  "Vizhi Veekura.mp3",
  "Yaanji - Masstamilan.MY.mp3",
  "Yaar-Indha-Saalai-Oram.mp3",
  "Yamma-Yamma.mp3",
  "Yean-Ennai-Pirindhaai-MassTamilan.org.mp3",
  "Yethi-Yethi-MassTamilan.com.mp3",
];

const EXTRA_GRADIENTS = [
  "linear-gradient(135deg, #1db954 0%, #0f7a3a 100%)",
  "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)",
  "linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)",
  "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
  "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)",
  "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)",
];

function cleanSongTitle(fileName) {
  return fileName
    .replace(/\.(mp3|m4a)$/i, "")
    .replace(/\s*-\s*(MassTamilan|NaaSongs|Masstamilan)\.(com|dev|fm|io|org|MY|so)$/i, "")
    .replace(/\s*\((320 kbps|Tamil)\)\s*/gi, " ")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function initialsFromTitle(title) {
  const words = title.split(" ").filter(Boolean);
  return words.slice(0, 2).map(word => word[0]).join("").toUpperCase() || "SP";
}

function makeGeneratedSong(fileName, index) {
  const title = cleanSongTitle(fileName);
  const id = FEATURED_SONGS.length + index + 1;
  return {
    id,
    title,
    artist: "Cloudinary Library",
    album: "Expanded Cloudinary Gold",
    duration: "--:--",
    durationSec: 240,
    url: `Songs/${fileName}`,
    initials: initialsFromTitle(title),
    gradient: EXTRA_GRADIENTS[index % EXTRA_GRADIENTS.length],
    themeColor: "rgba(29, 185, 84, 0.28)",
    year: "2026",
    lyrics: [
      "Now playing from your expanded library...",
      "Search, save, shuffle, and queue this track...",
      "More music has joined Cloudinary Gold...",
      "Enjoy the flow..."
    ]
  };
}

const SONGS = [
  ...FEATURED_SONGS,
  ...EXTRA_SONG_FILES.map(makeGeneratedSong)
];

// STATE MANAGEMENT
const state = {
  songs: SONGS,
  activeQueue: [...SONGS], // Default queue is initial tracks
  currentIndex: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeat: 'none', // 'none' | 'one' | 'all'
  volume: 0.7,
  isMuted: false,
  likedTracks: [], // Hydrated from localStorage
  currentView: 'home', // 'home' | 'search' | 'liked'
  searchQuery: "",
  isPanelCollapsed: false,
  historyStack: ['home'],
  forwardStack: []
};

// DOM ELEMENT REFERENCES
const elements = {
  audio: document.getElementById("main-audio-element"),
  mainScrollable: document.getElementById("main-scrollable"),
  ambientOverlay: document.getElementById("ambient-overlay"),
  
  // Navigation
  navHome: document.getElementById("nav-home"),
  navSearch: document.getElementById("nav-search"),
  libLiked: document.getElementById("lib-liked-songs"),
  libHits: document.getElementById("lib-hits"),
  navBackBtn: document.getElementById("nav-back-btn"),
  navForwardBtn: document.getElementById("nav-forward-btn"),
  
  // Views
  viewHome: document.getElementById("view-home"),
  viewSearch: document.getElementById("view-search"),
  viewLiked: document.getElementById("view-liked"),
  
  // Containers
  quickGrid: document.getElementById("quick-grid-container"),
  tracklistTbody: document.getElementById("tracklist-tbody"),
  likedTracklistTbody: document.getElementById("liked-tracklist-tbody"),
  emptyLikedState: document.getElementById("empty-liked-state"),
  likedCountText: document.getElementById("liked-count-text"),
  likedCountBadge: document.getElementById("liked-count-badge"),
  totalCountBadge: document.getElementById("total-count-badge"),
  greetingText: document.getElementById("greeting-text"),
  findSongsBtn: document.getElementById("find-songs-btn"),
  
  // Search Controls
  searchContainer: document.getElementById("search-container"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  searchCategoriesGrid: document.getElementById("search-categories-grid"),
  searchResultsSection: document.getElementById("search-results-section"),
  searchTitleText: document.getElementById("search-title-text"),
  topResultContent: document.getElementById("top-result-content-container"),
  matchingSongsList: document.getElementById("matching-songs-list"),
  
  // Collapsible Side Panel
  panel: document.getElementById("now-playing-panel"),
  closePanelBtn: document.getElementById("close-panel-btn"),
  panelCoverArt: document.getElementById("panel-cover-art"),
  panelTrackTitle: document.getElementById("panel-track-title"),
  panelTrackArtist: document.getElementById("panel-track-artist"),
  panelLikeBtn: document.getElementById("panel-like-btn"),
  panelLyricsContainer: document.getElementById("panel-lyrics-container"),
  panelQueueArt: document.getElementById("panel-queue-art"),
  panelQueueTitle: document.getElementById("panel-queue-title"),
  panelQueueArtist: document.getElementById("panel-queue-artist"),
  playLikedMainBtn: document.getElementById("play-liked-main-btn"),
  
  // Footer controls
  footerMiniArt: document.getElementById("player-mini-art"),
  footerTrackTitle: document.querySelector(".player-track-info #player-track-title"),
  footerTrackArtist: document.querySelector(".player-track-info #player-track-artist"),
  footerLikeBtn: document.getElementById("player-like-btn"),
  playPauseBtn: document.getElementById("play-pause-btn"),
  actionPlayBtn: document.getElementById("action-play-btn"),
  actionPauseBtn: document.getElementById("action-pause-btn"),
  actionResumeBtn: document.getElementById("action-resume-btn"),
  actionRepeatBtn: document.getElementById("action-repeat-btn"),
  footerLyricsPreview: document.getElementById("footer-lyrics-preview"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  repeatBtn: document.getElementById("repeat-btn"),
  repeatBadge: document.getElementById("repeat-badge"),
  
  // Seek bar
  currentTimeLabel: document.getElementById("current-time-label"),
  durationLabel: document.getElementById("duration-label"),
  audioSeekbarInput: document.getElementById("audio-seekbar"),
  seekbarProgress: document.getElementById("seekbar-progress"),
  seekbarHandle: document.getElementById("seekbar-handle"),
  
  // Utilities
  queueBtn: document.getElementById("queue-btn"),
  volumeMuteBtn: document.getElementById("volume-mute-btn"),
  volumeSlider: document.getElementById("volume-slider"),
  volumeProgress: document.getElementById("volume-progress"),
  volumeHandle: document.getElementById("volume-handle"),
  miniPlayerBtn: document.getElementById("mini-player-btn"),
  fullscreenBtn: document.getElementById("fullscreen-btn"),
  maxPlayerOverlay: document.getElementById("max-player-overlay"),
  maxPlayerClose: document.getElementById("max-player-close"),
  maxSongGrid: document.getElementById("max-song-grid"),
  maxNowArt: document.getElementById("max-now-art"),
  maxNowTitle: document.getElementById("max-now-title"),
  maxNowArtist: document.getElementById("max-now-artist"),
  lyricsBtn: document.getElementById("lyrics-btn"),
  fullscreenLyricsOverlay: document.getElementById("fullscreen-lyrics-overlay"),
  fullscreenLyricsClose: document.getElementById("fullscreen-lyrics-close"),
  overlayLyricsContainer: document.getElementById("overlay-lyrics-container"),
  overlayLyricsTitle: document.getElementById("overlay-lyrics-title"),
  overlayLyricsArtist: document.getElementById("overlay-lyrics-artist")
};

// INITIALIZATION
window.addEventListener("DOMContentLoaded", () => {
  hydrateState();
  setupInitialGreetings();
  setupUI();
  bindEvents();
  loadTrack(0, false);
});

// HYDRATION FROM LOCALSTORAGE
function hydrateState() {
  const savedLikes = localStorage.getItem("spotify_liked_tracks");
  if (savedLikes) {
    try {
      const parsedLikes = JSON.parse(savedLikes);
      state.likedTracks = Array.isArray(parsedLikes)
        ? parsedLikes.filter(songId => SONGS.some(song => song.id === songId))
        : [];
    } catch {
      state.likedTracks = [];
      localStorage.removeItem("spotify_liked_tracks");
    }
  }
  
  const savedVol = localStorage.getItem("spotify_volume");
  if (savedVol) {
    const parsedVolume = parseFloat(savedVol);
    if (!Number.isNaN(parsedVolume)) {
      state.volume = Math.min(Math.max(parsedVolume, 0), 1);
    }
  }

  elements.volumeSlider.value = state.volume * 100;
  elements.audio.volume = state.volume;
  updateVolumeSliderUI();
}

// PROCEDURAL DYNAMIC GRADIENT COVER ART WRAPPER
function createArtMarkup(gradientText, initialsText, sizeClass = "cell-art") {
  return `<div class="${sizeClass}" style="background: ${gradientText}; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #ffffff; letter-spacing: -0.05em; text-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: calc(1em + 0.2vw);">${initialsText}</div>`;
}

function setupUI() {
  // Render Greeting Shelves Quick Grid (first 6 items)
  let quickGridHTML = "";
  for (let i = 0; i < 6 && i < SONGS.length; i++) {
    const song = SONGS[i];
    const isLiked = state.likedTracks.includes(song.id);
    quickGridHTML += `
      <div class="quick-card" data-index="${i}">
        ${createArtMarkup(song.gradient, song.initials, "quick-art")}
        <span class="quick-title">${song.title}</span>
        <button class="quick-play-btn" data-index="${i}">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    `;
  }
  elements.quickGrid.innerHTML = quickGridHTML;

  // Render Full 12 Songs Playlist Table
  renderTracklistTable();
  updateLikedStats();
}

function renderTracklistTable() {
  let tableHTML = "";
  SONGS.forEach((song, i) => {
    const isLiked = state.likedTracks.includes(song.id);
    const likeIconClass = isLiked ? "fa-solid fa-heart track-row-like-btn liked" : "fa-regular fa-heart track-row-like-btn";
    const playingClass = (state.isPlaying && state.currentIndex === i) ? "track-row playing" : "track-row";
    
    tableHTML += `
      <tr class="${playingClass}" data-index="${i}">
        <td class="col-index">
          <div class="index-container">
            <span class="row-index">${i + 1}</span>
            <i class="fa-solid fa-play row-play-btn"></i>
          </div>
        </td>
        <td class="col-title">
          <div class="title-cell">
            ${createArtMarkup(song.gradient, song.initials, "cell-art")}
            <div class="track-name-wrapper">
              <span class="track-name">${song.title}</span>
              <span class="track-artist">${song.artist}</span>
            </div>
          </div>
        </td>
        <td class="col-album">
          <span class="album-cell">${song.album}</span>
        </td>
        <td class="col-date">May 25, 2026</td>
        <td class="col-duration">
          <div class="track-like-wrapper">
            <button class="like-row-btn" data-id="${song.id}">
              <i class="${likeIconClass}"></i>
            </button>
            <span class="duration-text">${song.duration}</span>
          </div>
        </td>
      </tr>
    `;
  });
  elements.tracklistTbody.innerHTML = tableHTML;
}

// SYNC LIKED STATS OVERLAY
function updateLikedStats() {
  const count = state.likedTracks.length;
  elements.likedCountBadge.innerText = count;
  elements.likedCountText.innerText = `${count} ${count === 1 ? 'song' : 'songs'}`;
  elements.totalCountBadge.innerText = SONGS.length;
}

// GREETINGS CALCULATOR
function setupInitialGreetings() {
  const hour = new Date().getHours();
  let msg = "Good Evening";
  if (hour < 12) msg = "Good Morning";
  else if (hour < 18) msg = "Good Afternoon";
  elements.greetingText.innerText = msg;
}

// APP EVENT WIRE-UPS
function bindEvents() {
  // Navigation clicks
  elements.navHome.addEventListener("click", (e) => {
    e.preventDefault();
    switchView('home');
  });
  elements.navSearch.addEventListener("click", (e) => {
    e.preventDefault();
    switchView('search');
  });
  elements.libLiked.addEventListener("click", () => switchView('liked'));
  elements.libHits.addEventListener("click", () => switchView('home'));
  elements.findSongsBtn.addEventListener("click", () => switchView('search'));
  
  // History clickers
  elements.navBackBtn.addEventListener("click", navigateBack);
  elements.navForwardBtn.addEventListener("click", navigateForward);

  // Home quick grid row bindings
  document.querySelectorAll(".quick-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Prevent card play button double triggering
      if (e.target.closest(".quick-play-btn")) return;
      const idx = parseInt(card.dataset.index);
      playSong(idx);
    });
  });

  document.querySelectorAll(".quick-play-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      playSong(idx);
    });
  });

  // Home shelf play triggers (Mock play grids)
  document.getElementById("shelf-play-1").addEventListener("click", () => playSong(0));
  document.getElementById("shelf-play-2").addEventListener("click", () => playSong(5));
  document.getElementById("shelf-play-3").addEventListener("click", () => playSong(8));
  document.getElementById("shelf-play-4").addEventListener("click", () => playSong(9));

  // Double click and single click table triggers
  elements.tracklistTbody.addEventListener("click", (e) => {
    const row = e.target.closest(".track-row");
    if (!row) return;
    const index = parseInt(row.dataset.index);
    
    // Check if like button inside row clicked
    const likeBtn = e.target.closest(".like-row-btn");
    if (likeBtn) {
      const songId = parseInt(likeBtn.dataset.id);
      toggleLike(songId);
      return;
    }
    
    playSong(index);
  });

  // Liked table triggers
  elements.likedTracklistTbody.addEventListener("click", (e) => {
    const row = e.target.closest(".track-row");
    if (!row) return;
    const index = parseInt(row.dataset.index);
    
    const likeBtn = e.target.closest(".like-row-btn");
    if (likeBtn) {
      const songId = parseInt(likeBtn.dataset.id);
      toggleLike(songId);
      return;
    }
    
    playSong(index);
  });

  elements.playLikedMainBtn.addEventListener("click", () => {
    if (state.likedTracks.length > 0) {
      const firstLikedId = state.likedTracks[0];
      const actualSongIndex = SONGS.findIndex(s => s.id === firstLikedId);
      if (actualSongIndex !== -1) {
        playSong(actualSongIndex);
      }
    }
  });

  // Audio Playback event engines
  elements.audio.addEventListener("timeupdate", updateProgressUI);
  elements.audio.addEventListener("ended", handleTrackEnded);
  elements.audio.addEventListener("loadedmetadata", () => {
    elements.durationLabel.innerText = formatTime(elements.audio.duration);
  });
  elements.audio.addEventListener("play", () => {
    state.isPlaying = true;
    updatePlaybackControls();
    highlightActiveRow();
  });
  elements.audio.addEventListener("pause", () => {
    state.isPlaying = false;
    updatePlaybackControls();
    highlightActiveRow();
  });

  // Playback control interfaces
  elements.playPauseBtn.addEventListener("click", togglePlay);
  elements.actionPlayBtn.addEventListener("click", playCurrentTrack);
  elements.actionPauseBtn.addEventListener("click", pauseCurrentTrack);
  elements.actionResumeBtn.addEventListener("click", resumeCurrentTrack);
  elements.actionRepeatBtn.addEventListener("click", toggleRepeat);
  elements.prevBtn.addEventListener("click", prevTrack);
  elements.nextBtn.addEventListener("click", nextTrack);
  elements.shuffleBtn.addEventListener("click", toggleShuffle);
  elements.repeatBtn.addEventListener("click", toggleRepeat);
  
  // Seek bar triggers
  elements.audioSeekbarInput.addEventListener("input", handleSeekInput);
  elements.audioSeekbarInput.addEventListener("change", handleSeekChange);

  // Volume triggers
  elements.volumeSlider.addEventListener("input", handleVolumeSliderInput);
  elements.volumeMuteBtn.addEventListener("click", toggleMute);

  // Expand panel triggers
  elements.queueBtn.addEventListener("click", toggleNowPlayingPanel);
  elements.closePanelBtn.addEventListener("click", toggleNowPlayingPanel);
  
  // Footer/Side-panel Like buttons
  elements.footerLikeBtn.addEventListener("click", () => toggleLike(SONGS[state.currentIndex].id));
  elements.panelLikeBtn.addEventListener("click", () => toggleLike(SONGS[state.currentIndex].id));

  // Search real-time engine
  elements.searchInput.addEventListener("input", handleSearchQueryInput);
  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    elements.clearSearchBtn.style.display = "none";
    handleSearchQueryInput();
  });

  // Mini-player and maximum player
  elements.miniPlayerBtn.addEventListener("click", triggerMiniPlayer);
  elements.fullscreenBtn.addEventListener("click", openMaxPlayer);
  elements.maxPlayerClose.addEventListener("click", closeMaxPlayer);
  elements.maxPlayerOverlay.addEventListener("click", (e) => {
    const card = e.target.closest(".max-song-card");
    if (!card) return;
    playSong(parseInt(card.dataset.index));
  });

  // Fullscreen lyrics listeners
  if (elements.lyricsBtn) {
    elements.lyricsBtn.addEventListener("click", () => {
      if (elements.fullscreenLyricsOverlay.classList.contains("open")) {
        closeFullscreenLyrics();
      } else {
        openFullscreenLyrics();
      }
    });
  }
  if (elements.fullscreenLyricsClose) {
    elements.fullscreenLyricsClose.addEventListener("click", closeFullscreenLyrics);
  }
}

// CORE VIEW SELECTOR
function switchView(targetView, updateStack = true) {
  if (state.currentView === targetView) return;
  
  // Hide active views
  elements.viewHome.style.display = "none";
  elements.viewSearch.style.display = "none";
  elements.viewLiked.style.display = "none";
  
  // Remove navigation highlights
  elements.navHome.classList.remove("active");
  elements.navSearch.classList.remove("active");
  elements.libLiked.classList.remove("active");
  elements.libHits.classList.remove("active");

  elements.searchContainer.style.display = "none";

  if (targetView === 'home') {
    elements.viewHome.style.display = "block";
    elements.navHome.classList.add("active");
    elements.libHits.classList.add("active");
  } else if (targetView === 'search') {
    elements.viewSearch.style.display = "block";
    elements.navSearch.classList.add("active");
    elements.searchContainer.style.display = "block";
    elements.searchInput.focus();
  } else if (targetView === 'liked') {
    elements.viewLiked.style.display = "block";
    elements.libLiked.classList.add("active");
    renderLikedSongsList();
  }

  if (updateStack) {
    state.historyStack.push(targetView);
    state.forwardStack = []; // Reset forward on fresh click
  }
  
  state.currentView = targetView;
  elements.mainScrollable.scrollTop = 0; // Scroll back to top
  updateNavArrows();
}

function navigateBack() {
  if (state.historyStack.length <= 1) return;
  const current = state.historyStack.pop();
  state.forwardStack.push(current);
  const prev = state.historyStack[state.historyStack.length - 1];
  switchView(prev, false);
}

function navigateForward() {
  if (state.forwardStack.length === 0) return;
  const next = state.forwardStack.pop();
  state.historyStack.push(next);
  switchView(next, false);
}

function updateNavArrows() {
  elements.navBackBtn.disabled = state.historyStack.length <= 1;
  elements.navForwardBtn.disabled = state.forwardStack.length === 0;
}

// RENDER LIKED VIEW
function renderLikedSongsList() {
  if (state.likedTracks.length === 0) {
    elements.likedTracklistTbody.innerHTML = "";
    elements.emptyLikedState.style.display = "flex";
  } else {
    elements.emptyLikedState.style.display = "none";
    let likedHTML = "";
    
    state.likedTracks.forEach((songId, index) => {
      const song = SONGS.find(s => s.id === songId);
      if (!song) return;
      const actualIdx = SONGS.findIndex(s => s.id === songId);
      const playingClass = (state.isPlaying && state.currentIndex === actualIdx) ? "track-row playing" : "track-row";
      
      likedHTML += `
        <tr class="${playingClass}" data-index="${actualIdx}">
          <td class="col-index">
            <div class="index-container">
              <span class="row-index">${index + 1}</span>
              <i class="fa-solid fa-play row-play-btn"></i>
            </div>
          </td>
          <td class="col-title">
            <div class="title-cell">
              ${createArtMarkup(song.gradient, song.initials, "cell-art")}
              <div class="track-name-wrapper">
                <span class="track-name">${song.title}</span>
                <span class="track-artist">${song.artist}</span>
              </div>
            </div>
          </td>
          <td class="col-album">
            <span class="album-cell">${song.album}</span>
          </td>
          <td class="col-date">Saved Today</td>
          <td class="col-duration">
            <div class="track-like-wrapper">
              <button class="like-row-btn" data-id="${song.id}">
                <i class="fa-solid fa-heart track-row-like-btn liked"></i>
              </button>
              <span class="duration-text">${song.duration}</span>
            </div>
          </td>
        </tr>
      `;
    });
    elements.likedTracklistTbody.innerHTML = likedHTML;
  }
}

// SEARCH VIEW CONTROLLER
function handleSearchQueryInput() {
  const query = elements.searchInput.value.trim().toLowerCase();
  state.searchQuery = query;

  if (query.length > 0) {
    elements.clearSearchBtn.style.display = "block";
    elements.searchCategoriesGrid.style.display = "none";
    elements.searchTitleText.style.display = "none";
    elements.searchResultsSection.style.display = "block";
    renderSearchResults(query);
  } else {
    elements.clearSearchBtn.style.display = "none";
    elements.searchCategoriesGrid.style.display = "grid";
    elements.searchTitleText.style.display = "block";
    elements.searchResultsSection.style.display = "none";
  }
}

function renderSearchResults(query) {
  // Filter matching tracks
  const matches = SONGS.filter(s => 
    s.title.toLowerCase().includes(query) || 
    s.artist.toLowerCase().includes(query) ||
    s.album.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    elements.topResultContent.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-muted);">
        No results found for "${query}"
      </div>
    `;
    elements.matchingSongsList.innerHTML = `<div style="color: var(--text-muted); padding: 12px;">Try checking for spelling or typing another song.</div>`;
    return;
  }

  // Render Top Result (first match)
  const topSong = matches[0];
  const actualIndex = SONGS.findIndex(s => s.id === topSong.id);
  elements.topResultContent.innerHTML = `
    <div class="top-result-click-wrapper" data-index="${actualIndex}" style="height: 100%; display: flex; flex-direction: column;">
      ${createArtMarkup(topSong.gradient, topSong.initials, "top-result-art")}
      <span class="top-result-title">${topSong.title}</span>
      <div class="top-result-meta">
        <span class="top-result-artist">${topSong.artist}</span>
        <span class="top-result-type">Song</span>
      </div>
      <button class="top-result-play-btn" data-index="${actualIndex}">
        <i class="fa-solid fa-play"></i>
      </button>
    </div>
  `;

  // Bind top result card clicks
  elements.topResultContent.querySelector(".top-result-click-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".top-result-play-btn")) return;
    playSong(actualIndex);
  });
  elements.topResultContent.querySelector(".top-result-play-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    playSong(actualIndex);
  });

  // Render matching songs list (up to 12 matches)
  let matchesHTML = "";
  for (let i = 0; i < 12 && i < matches.length; i++) {
    const song = matches[i];
    const itemIndex = SONGS.findIndex(s => s.id === song.id);
    matchesHTML += `
      <div class="search-match-row" data-index="${itemIndex}">
        <div class="search-match-left">
          ${createArtMarkup(song.gradient, song.initials, "search-match-art")}
          <div class="search-match-text">
            <span class="search-match-title">${song.title}</span>
            <span class="search-match-artist">${song.artist}</span>
          </div>
        </div>
        <div class="search-match-right">
          <span class="search-match-duration">${song.duration}</span>
        </div>
      </div>
    `;
  }
  elements.matchingSongsList.innerHTML = matchesHTML;

  // Bind list row click triggers
  document.querySelectorAll(".search-match-row").forEach(row => {
    row.addEventListener("click", () => {
      const idx = parseInt(row.dataset.index);
      playSong(idx);
    });
  });
}

// PLAYBACK CORE MECHANICS
function loadTrack(index, playImmediately = false) {
  if (index < 0 || index >= SONGS.length) return;
  state.currentIndex = index;
  state.lastActiveLyricIndex = -1;
  
  const song = SONGS[index];
  
  // Set HTML5 Audio Source
  elements.audio.src = song.url;
  elements.audio.load();
  
  // Set Bottom Footer Track Details
  elements.footerMiniArt.innerHTML = createArtMarkup(song.gradient, song.initials, "cell-art");
  elements.footerTrackTitle.innerText = song.title;
  elements.footerTrackArtist.innerText = song.artist;
  updateMaxPlayerNowPlaying(song);
  
  // Set Collapsible Side Panel Track Details
  elements.panelCoverArt.innerHTML = createArtMarkup(song.gradient, song.initials, "panel-cover-art");
  elements.panelTrackTitle.innerText = song.title;
  elements.panelTrackArtist.innerText = song.artist;
  
  // Update like buttons UI states
  const isLiked = state.likedTracks.includes(song.id);
  updateLikeButtonStates(isLiked);

  // Set ambient banner background
  elements.ambientOverlay.style.background = `linear-gradient(180deg, ${song.themeColor} 0%, rgba(18, 18, 18, 0) 100%)`;

  // Draw synced lyrics box
  generateLyricsUI(song);

  // Draw Next Queue block details
  setupNextQueuePreview();

  // Reset seek sliders
  elements.audioSeekbarInput.value = 0;
  elements.seekbarProgress.style.width = "0%";
  elements.currentTimeLabel.innerText = "0:00";
  elements.durationLabel.innerText = song.duration;
  
  highlightActiveRow();

  if (playImmediately) {
    elements.audio.play()
      .then(() => {
        state.isPlaying = true;
        updatePlaybackControls();
      })
      .catch((err) => {
        console.error("Audio playback error: ", err);
        state.isPlaying = false;
        updatePlaybackControls();
      });
  }
}

function playSong(index) {
  if (state.currentIndex === index && elements.audio.src) {
    togglePlay();
  } else {
    loadTrack(index, true);
  }
}

function togglePlay() {
  if (!elements.audio.src) return;
  
  if (state.isPlaying) {
    elements.audio.pause();
  } else {
    elements.audio.play()
      .then(() => {
        state.isPlaying = true;
        updatePlaybackControls();
      })
      .catch(err => console.error("Playback failed: ", err));
  }
}

function playCurrentTrack() {
  if (!elements.audio.src) {
    loadTrack(state.currentIndex, true);
    return;
  }

  elements.audio.play()
    .then(() => {
      state.isPlaying = true;
      updatePlaybackControls();
    })
    .catch(err => console.error("Playback failed: ", err));
}

function pauseCurrentTrack() {
  if (!elements.audio.src) return;
  elements.audio.pause();
  state.isPlaying = false;
  updatePlaybackControls();
}

function resumeCurrentTrack() {
  playCurrentTrack();
}

function nextTrack() {
  if (state.isShuffle) {
    const randomIdx = Math.floor(Math.random() * SONGS.length);
    loadTrack(randomIdx, true);
  } else {
    let nextIdx = state.currentIndex + 1;
    if (nextIdx >= SONGS.length) {
      if (state.isRepeat === 'all') {
        nextIdx = 0;
      } else {
        state.isPlaying = false;
        updatePlaybackControls();
        highlightActiveRow();
        return; // Stop playlist
      }
    }
    loadTrack(nextIdx, true);
  }
}

function prevTrack() {
  // If track is more than 3 seconds in, restart the track
  if (elements.audio.currentTime > 3) {
    elements.audio.currentTime = 0;
  } else {
    let prevIdx = state.currentIndex - 1;
    if (prevIdx < 0) {
      if (state.isRepeat === 'all') {
        prevIdx = SONGS.length - 1;
      } else {
        prevIdx = 0; // Lock to first track
      }
    }
    loadTrack(prevIdx, true);
  }
}

function handleTrackEnded() {
  if (state.isRepeat === 'one') {
    elements.audio.currentTime = 0;
    elements.audio.play();
  } else {
    nextTrack();
  }
}

// SHUFFLE & REPEAT GRAPHICS SYNC
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  elements.shuffleBtn.classList.toggle("active", state.isShuffle);
}

function toggleRepeat() {
  if (state.isRepeat === 'none') {
    state.isRepeat = 'all';
    elements.repeatBtn.classList.add("active");
    elements.repeatBadge.style.display = "none";
  } else if (state.isRepeat === 'all') {
    state.isRepeat = 'one';
    elements.repeatBtn.classList.add("active");
    elements.repeatBadge.style.display = "flex";
  } else {
    state.isRepeat = 'none';
    elements.repeatBtn.classList.remove("active");
    elements.repeatBadge.style.display = "none";
  }
  updatePlaybackControls();
}

// PROGRESS CONTROLLER
function updateProgressUI() {
  const cur = elements.audio.currentTime;
  const dur = elements.audio.duration || SONGS[state.currentIndex].durationSec;
  
  // Set slider value
  const percentage = (cur / dur) * 100;
  elements.audioSeekbarInput.value = percentage;
  elements.seekbarProgress.style.width = `${percentage}%`;
  elements.seekbarHandle.style.left = `${percentage}%`;
  
  // Set labels
  elements.currentTimeLabel.innerText = formatTime(cur);
  
  // Advance synced lyrics dynamically based on percentage of song progress
  syncLyricsProgress(percentage);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function handleSeekInput() {
  const val = elements.audioSeekbarInput.value;
  elements.seekbarProgress.style.width = `${val}%`;
  elements.seekbarHandle.style.left = `${val}%`;
}

function handleSeekChange() {
  const val = elements.audioSeekbarInput.value;
  const dur = elements.audio.duration || SONGS[state.currentIndex].durationSec;
  elements.audio.currentTime = (val / 100) * dur;
}

// VOLUME SLIDER CONTROLS
function handleVolumeSliderInput() {
  const val = elements.volumeSlider.value;
  state.volume = val / 100;
  elements.audio.volume = state.volume;
  localStorage.setItem("spotify_volume", state.volume);
  updateVolumeSliderUI();

  if (state.volume === 0) {
    state.isMuted = true;
    updateVolumeIcon(true);
  } else {
    state.isMuted = false;
    updateVolumeIcon(false);
  }
}

function updateVolumeSliderUI() {
  const percentage = state.isMuted ? 0 : state.volume * 100;
  elements.volumeProgress.style.width = `${percentage}%`;
  elements.volumeHandle.style.left = `${percentage}%`;
  updateVolumeIcon(state.isMuted);
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  if (state.isMuted) {
    elements.audio.volume = 0;
    elements.volumeSlider.value = 0;
    elements.volumeProgress.style.width = "0%";
    elements.volumeHandle.style.left = "0%";
    updateVolumeIcon(true);
  } else {
    elements.audio.volume = state.volume;
    elements.volumeSlider.value = state.volume * 100;
    updateVolumeSliderUI();
  }
}

function updateVolumeIcon(isMuted) {
  const icon = elements.volumeMuteBtn.querySelector("i");
  icon.className = ""; // clear
  if (isMuted || state.volume === 0) {
    icon.className = "fa-solid fa-volume-xmark";
  } else if (state.volume < 0.3) {
    icon.className = "fa-solid fa-volume-off";
  } else if (state.volume < 0.7) {
    icon.className = "fa-solid fa-volume-low";
  } else {
    icon.className = "fa-solid fa-volume-high";
  }
}

// LIKING SYSTEMS
function toggleLike(songId) {
  const idx = state.likedTracks.indexOf(songId);
  let isLikedNow = false;

  if (idx !== -1) {
    state.likedTracks.splice(idx, 1);
  } else {
    state.likedTracks.push(songId);
    isLikedNow = true;
  }
  
  // Persist
  localStorage.setItem("spotify_liked_tracks", JSON.stringify(state.likedTracks));
  
  // Update UI components
  updateLikedStats();
  if (state.currentView === 'liked') {
    renderLikedSongsList();
  }
  
  // Update playlist table and shelf rows without destroying positions
  renderTracklistTable();
  
  // If active song is liked, update footer and sidebar heart
  if (SONGS[state.currentIndex].id === songId) {
    updateLikeButtonStates(isLikedNow);
  }
}

function updateLikeButtonStates(isLiked) {
  if (isLiked) {
    elements.footerLikeBtn.querySelector("i").className = "fa-solid fa-heart";
    elements.footerLikeBtn.classList.add("liked");
    elements.panelLikeBtn.querySelector("i").className = "fa-solid fa-heart";
    elements.panelLikeBtn.classList.add("liked");
  } else {
    elements.footerLikeBtn.querySelector("i").className = "fa-regular fa-heart";
    elements.footerLikeBtn.classList.remove("liked");
    elements.panelLikeBtn.querySelector("i").className = "fa-regular fa-heart";
    elements.panelLikeBtn.classList.remove("liked");
  }
}

// PLAYBACK INTERFACES VISUAL OVERLAYS
function updatePlaybackControls() {
  const icon = elements.playPauseBtn.querySelector("i");
  if (state.isPlaying) {
    icon.className = "fa-solid fa-pause";
    elements.playPauseBtn.title = "Pause";
  } else {
    icon.className = "fa-solid fa-play";
    elements.playPauseBtn.title = "Play";
  }

  if (elements.actionPlayBtn) {
    elements.actionPlayBtn.classList.toggle("active", state.isPlaying);
    elements.actionPauseBtn.classList.toggle("active", !state.isPlaying && elements.audio.src);
    elements.actionResumeBtn.classList.toggle("active", !state.isPlaying && elements.audio.currentTime > 0);
    elements.actionRepeatBtn.classList.toggle("active", state.isRepeat !== "none");
  }
}

function highlightActiveRow() {
  // Clear existing active flags
  document.querySelectorAll(".track-row").forEach(row => {
    row.classList.remove("playing");
    const playIcon = row.querySelector(".row-play-btn");
    const indexNum = row.querySelector(".row-index");
    
    if (playIcon) playIcon.className = "fa-solid fa-play row-play-btn";
    if (indexNum) indexNum.style.display = "block";
  });

  // Home grid rows highlight
  const homeRows = elements.tracklistTbody.querySelectorAll(".track-row");
  const activeHomeRow = homeRows[state.currentIndex];
  if (activeHomeRow) {
    activeHomeRow.classList.add("playing");
    const playIcon = activeHomeRow.querySelector(".row-play-btn");
    const indexNum = activeHomeRow.querySelector(".row-index");
    
    if (state.isPlaying) {
      if (playIcon) playIcon.className = "fa-solid fa-pause row-play-btn";
    }
  }

  // Liked rows highlight
  const likedRows = elements.likedTracklistTbody.querySelectorAll(".track-row");
  const likedTrackIndexInLikedList = state.likedTracks.indexOf(SONGS[state.currentIndex].id);
  if (likedTrackIndexInLikedList !== -1) {
    const activeLikedRow = likedRows[likedTrackIndexInLikedList];
    if (activeLikedRow) {
      activeLikedRow.classList.add("playing");
      const playIcon = activeLikedRow.querySelector(".row-play-btn");
      if (state.isPlaying && playIcon) {
        playIcon.className = "fa-solid fa-pause row-play-btn";
      }
    }
  }
}

// SYNCED LYRICS GRAPHICAL ENGINE
function getParsedLyrics(song) {
  if (!song || !song.lyrics) return [];
  return song.lyrics.map((line, index) => {
    if (typeof line === 'object' && line.time !== undefined) {
      return line;
    }
    // Check for "mm:ss | text" format
    const match = String(line).match(/^(\d+):(\d+)\s*\|\s*(.*)$/);
    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseFloat(match[2]);
      return {
        time: minutes * 60 + seconds,
        text: match[3]
      };
    }
    // Fallback: spread them evenly across durationSec
    const duration = song.durationSec || 240;
    return {
      time: (index / song.lyrics.length) * duration,
      text: line
    };
  });
}

function generateLyricsUI(song) {
  const parsedLyrics = getParsedLyrics(song);
  state.currentParsedLyrics = parsedLyrics; // Store in state for real-time sync
  
  if (!elements.panelLyricsContainer) return;
  
  let lyricsHTML = "";
  let overlayHTML = "";
  
  parsedLyrics.forEach((line, i) => {
    lyricsHTML += `<p class="lyrics-line" id="lyric-line-${i}" data-time="${line.time}" style="cursor: pointer; transition: all 0.25s ease; margin-bottom: 8px; font-weight: 700; padding: 6px 12px; border-radius: 8px;">${line.text}</p>`;
    overlayHTML += `<p class="overlay-lyrics-line" id="overlay-lyric-line-${i}" data-time="${line.time}">${line.text}</p>`;
  });
  
  elements.panelLyricsContainer.innerHTML = lyricsHTML;
  if (elements.overlayLyricsContainer) {
    elements.overlayLyricsContainer.innerHTML = overlayHTML;
  }

  // Bind click-to-seek logic directly on each sidebar lyric line
  const lines = elements.panelLyricsContainer.querySelectorAll(".lyrics-line");
  lines.forEach((line) => {
    line.addEventListener("click", () => {
      const targetTime = parseFloat(line.dataset.time);
      if (!isNaN(targetTime)) {
        elements.audio.currentTime = targetTime;
        updateProgressUI(); // Sync UI states instantly
      }
    });
  });

  // Bind click-to-seek logic directly on each fullscreen overlay lyric line
  if (elements.overlayLyricsContainer) {
    const overlayLines = elements.overlayLyricsContainer.querySelectorAll(".overlay-lyrics-line");
    overlayLines.forEach((line) => {
      line.addEventListener("click", () => {
        const targetTime = parseFloat(line.dataset.time);
        if (!isNaN(targetTime)) {
          elements.audio.currentTime = targetTime;
          updateProgressUI(); // Sync UI states instantly
        }
      });
    });
  }
  
  if (parsedLyrics.length > 0) {
    const firstLine = elements.panelLyricsContainer.querySelector("#lyric-line-0");
    if (firstLine) {
      firstLine.style.color = "#ffffff";
      firstLine.classList.add("active");
    }
    
    if (elements.overlayLyricsContainer) {
      const firstOverlayLine = elements.overlayLyricsContainer.querySelector("#overlay-lyric-line-0");
      if (firstOverlayLine) {
        firstOverlayLine.classList.add("active");
      }
    }

    if (elements.footerLyricsPreview) {
      elements.footerLyricsPreview.innerText = parsedLyrics[0].text;
    }
  } else {
    elements.panelLyricsContainer.innerHTML = `<p class="lyrics-line">No lyrics available.</p>`;
    if (elements.overlayLyricsContainer) {
      elements.overlayLyricsContainer.innerHTML = `<p class="overlay-lyrics-line active">No lyrics available.</p>`;
    }
    if (elements.footerLyricsPreview) {
      elements.footerLyricsPreview.innerText = "No lyrics available.";
    }
  }
}

function syncLyricsProgress(percentage) {
  const parsedLyrics = state.currentParsedLyrics;
  if (!parsedLyrics || parsedLyrics.length === 0) return;
  
  const currentTime = elements.audio.currentTime;
  
  // Find active line index: the last line whose time is <= current playing time
  let activeIndex = 0;
  for (let i = 0; i < parsedLyrics.length; i++) {
    if (currentTime >= parsedLyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // ONLY update DOM and trigger scroll if the active lyric index has actually changed!
  if (activeIndex !== state.lastActiveLyricIndex) {
    state.lastActiveLyricIndex = activeIndex;

    // 1. Update Sidebar Lyrics UI
    if (elements.panelLyricsContainer) {
      const lines = elements.panelLyricsContainer.querySelectorAll(".lyrics-line");
      lines.forEach((line, i) => {
        if (i === activeIndex) {
          line.classList.add("active");
          line.style.color = "#ffffff";
          line.style.transform = "scale(1.03)";
          line.style.transformOrigin = "left center";
          line.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
          if (elements.footerLyricsPreview) {
            elements.footerLyricsPreview.innerText = line.innerText;
          }
        } else {
          line.classList.remove("active");
          line.style.color = "rgba(255, 255, 255, 0.4)";
          line.style.transform = "scale(1)";
          line.style.backgroundColor = "transparent";
        }
      });

      // Auto scroll sidebar lyrics container to keep active lyrics perfectly centered vertically
      const lyricEl = document.getElementById(`lyric-line-${activeIndex}`);
      if (lyricEl) {
        const containerRect = elements.panelLyricsContainer.getBoundingClientRect();
        const lyricRect = lyricEl.getBoundingClientRect();
        const relativeOffsetTop = lyricRect.top - containerRect.top + elements.panelLyricsContainer.scrollTop;
        const targetScrollTop = relativeOffsetTop - (containerRect.height / 2) + (lyricRect.height / 2);
        elements.panelLyricsContainer.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }

    // 2. Update Fullscreen Lyrics Overlay UI
    if (elements.overlayLyricsContainer) {
      const overlayLines = elements.overlayLyricsContainer.querySelectorAll(".overlay-lyrics-line");
      overlayLines.forEach((line, i) => {
        if (i === activeIndex) {
          line.classList.add("active");
        } else {
          line.classList.remove("active");
        }
      });

      // Auto scroll fullscreen lyrics container to keep active lyrics perfectly centered vertically
      const overlayLyricEl = document.getElementById(`overlay-lyric-line-${activeIndex}`);
      if (overlayLyricEl) {
        const containerRect = elements.overlayLyricsContainer.getBoundingClientRect();
        const lyricRect = overlayLyricEl.getBoundingClientRect();
        const relativeOffsetTop = lyricRect.top - containerRect.top + elements.overlayLyricsContainer.scrollTop;
        const targetScrollTop = relativeOffsetTop - (containerRect.height / 2) + (lyricRect.height / 2);
        elements.overlayLyricsContainer.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  }
}

// FULLSCREEN LYRICS OVERLAY CONTROLLERS
function openFullscreenLyrics() {
  if (!elements.fullscreenLyricsOverlay) return;
  
  const song = SONGS[state.currentIndex];
  if (elements.overlayLyricsTitle) elements.overlayLyricsTitle.innerText = song.title;
  if (elements.overlayLyricsArtist) elements.overlayLyricsArtist.innerText = song.artist;
  
  // Set beautiful radial theme color background
  elements.fullscreenLyricsOverlay.style.background = `radial-gradient(circle at 50% 50%, ${song.themeColor} 0%, rgb(18, 18, 18) 100%)`;
  
  // Render and highlight correctly
  generateLyricsUI(song);
  
  elements.fullscreenLyricsOverlay.classList.add("open");
  elements.fullscreenLyricsOverlay.setAttribute("aria-hidden", "false");
  if (elements.lyricsBtn) elements.lyricsBtn.classList.add("active");
  
  // Force sync immediately
  state.lastActiveLyricIndex = -1; // Reset to force repaint
  syncLyricsProgress();
}

function closeFullscreenLyrics() {
  if (!elements.fullscreenLyricsOverlay) return;
  elements.fullscreenLyricsOverlay.classList.remove("open");
  elements.fullscreenLyricsOverlay.setAttribute("aria-hidden", "true");
  if (elements.lyricsBtn) elements.lyricsBtn.classList.remove("active");
}

// NEXT QUEUE PREVIEW DETAILS
function setupNextQueuePreview() {
  let nextIdx = state.currentIndex + 1;
  if (nextIdx >= SONGS.length) {
    nextIdx = 0; // Wrap around
  }
  const nextSong = SONGS[nextIdx];
  elements.panelQueueArt.innerHTML = createArtMarkup(nextSong.gradient, nextSong.initials, "queue-card-art");
  elements.panelQueueTitle.innerText = nextSong.title;
  elements.panelQueueArtist.innerText = nextSong.artist;

  // Bind quick click to load next in queue
  elements.panelQueueArt.closest(".queue-item-card").onclick = () => {
    playSong(nextIdx);
  };
}

// SIDE DETAILS PANEL TOGGLER
function toggleNowPlayingPanel() {
  state.isPanelCollapsed = !state.isPanelCollapsed;
  
  if (state.isPanelCollapsed) {
    elements.panel.style.display = "none";
    elements.queueBtn.classList.remove("active");
    document.querySelector(".app-container").style.gridTemplateColumns = `${state.isPanelCollapsed ? '240px 1fr' : '240px 1fr 340px'}`;
  } else {
    elements.panel.style.display = "flex";
    elements.queueBtn.classList.add("active");
    document.querySelector(".app-container").style.gridTemplateColumns = "240px 1fr 340px";
  }
}

// MINI-PLAYER AND MAXIMUM PLAYER MECHANICS
function triggerMiniPlayer() {
  alert("Mock Feature: Entering Picture in Picture mini player widget.");
}

function openMaxPlayer() {
  renderMaxSongGrid();
  elements.maxPlayerOverlay.classList.add("open");
  elements.maxPlayerOverlay.setAttribute("aria-hidden", "false");
  elements.fullscreenBtn.classList.add("active");
  elements.fullscreenBtn.querySelector("i").className = "fa-solid fa-compress";
}

function closeMaxPlayer() {
  elements.maxPlayerOverlay.classList.remove("open");
  elements.maxPlayerOverlay.setAttribute("aria-hidden", "true");
  elements.fullscreenBtn.classList.remove("active");
  elements.fullscreenBtn.querySelector("i").className = "fa-solid fa-expand";
}

function updateMaxPlayerNowPlaying(song) {
  if (!elements.maxNowArt) return;
  elements.maxNowArt.innerHTML = createArtMarkup(song.gradient, song.initials, "max-now-cover");
  elements.maxNowTitle.innerText = song.title;
  elements.maxNowArtist.innerText = song.artist;

  if (elements.maxSongGrid) {
    elements.maxSongGrid.querySelectorAll(".max-song-card").forEach((card) => {
      card.classList.toggle("active", parseInt(card.dataset.index) === state.currentIndex);
    });
  }
}

function renderMaxSongGrid() {
  if (!elements.maxSongGrid || elements.maxSongGrid.dataset.rendered === "true") {
    updateMaxPlayerNowPlaying(SONGS[state.currentIndex]);
    return;
  }

  elements.maxSongGrid.innerHTML = SONGS.map((song, index) => `
    <button class="max-song-card" type="button" data-index="${index}">
      ${createArtMarkup(song.gradient, song.initials, "max-song-art")}
      <span class="max-song-title">${song.title}</span>
      <span class="max-song-artist">${song.artist}</span>
    </button>
  `).join("");
  elements.maxSongGrid.dataset.rendered = "true";
  updateMaxPlayerNowPlaying(SONGS[state.currentIndex]);
}
