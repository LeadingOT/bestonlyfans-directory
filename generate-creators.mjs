import fs from 'fs';
import path from 'path';

const categories = [
  'Fitness', 'Gaming', 'Lifestyle', 'Adult', 'ASMR', 
  'Cosplay', 'Art', 'Fashion', 'Music', 'Comedy'
];

const creators = [
  // Fitness (4)
  {
    name: "FitVixen",
    slug: "fitvixen",
    tagline: "Premium fitness content and workout routines",
    description: "FitVixen brings you exclusive fitness routines, meal prep guides, and motivational content. With over 500+ workout videos and personalized training plans, she helps thousands achieve their fitness goals.",
    category: "Fitness",
    subcategory: "Workout Training",
    url: "https://onlyfans.com/fitvixen",
    pricing: { model: "subscription", startingPrice: "$9.99/mo" },
    features: ["Daily workout videos", "Meal prep guides", "1-on-1 coaching", "Progress tracking", "Exclusive fitness tips"],
    pros: ["Highly engaging content", "Responsive to DMs", "Regular updates"],
    cons: ["Limited free content", "Premium PPV content"],
    rating: 4.7,
    tags: ["fitness", "workout", "health", "motivation"]
  },
  {
    name: "GymGoddessJade",
    slug: "gymgoddessjade",
    tagline: "Bodybuilding and strength training specialist",
    description: "Jade is a certified personal trainer sharing her bodybuilding journey, strength training programs, and nutrition science. Get access to competition prep guides and advanced lifting techniques.",
    category: "Fitness",
    subcategory: "Bodybuilding",
    url: "https://onlyfans.com/gymgoddessjade",
    pricing: { model: "subscription", startingPrice: "$12.99/mo" },
    features: ["Competition prep guides", "Strength programs", "Nutrition plans", "Form check videos", "Weekly Q&A sessions"],
    pros: ["Professional expertise", "Detailed programs", "Great community"],
    cons: ["Advanced level content", "Higher price point"],
    rating: 4.8,
    tags: ["fitness", "bodybuilding", "strength", "nutrition"]
  },
  {
    name: "YogaBaeEmily",
    slug: "yogabaeemily",
    tagline: "Yoga, flexibility and mindfulness coach",
    description: "Emily teaches yoga flows for all levels, flexibility routines, and meditation practices. Her calming presence and detailed instructions make yoga accessible and enjoyable.",
    category: "Fitness",
    subcategory: "Yoga",
    url: "https://onlyfans.com/yogabaeemily",
    pricing: { model: "subscription", startingPrice: "$7.99/mo" },
    features: ["Daily yoga flows", "Flexibility challenges", "Meditation guides", "Breathwork sessions", "Wellness tips"],
    pros: ["Beginner friendly", "Soothing content", "Affordable"],
    cons: ["Less intense workouts", "Limited equipment training"],
    rating: 4.6,
    tags: ["fitness", "yoga", "flexibility", "mindfulness"]
  },
  {
    name: "CardioQueenSophie",
    slug: "cardioqueensophie",
    tagline: "High-energy cardio and dance workouts",
    description: "Sophie delivers fun, high-energy cardio routines set to popular music. Her dance-based workouts make fitness feel like a party, perfect for those who hate traditional cardio.",
    category: "Fitness",
    subcategory: "Cardio",
    url: "https://onlyfans.com/cardioqueensophie",
    pricing: { model: "subscription", startingPrice: "$8.99/mo" },
    features: ["Dance cardio routines", "HIIT sessions", "Music playlists", "Calorie burn tracking", "Monthly challenges"],
    pros: ["Fun and engaging", "No equipment needed", "Energetic personality"],
    cons: ["High impact only", "Can be repetitive"],
    rating: 4.5,
    tags: ["fitness", "cardio", "dance", "hiit"]
  },

  // Gaming (4)
  {
    name: "GamerGirlAlex",
    slug: "gamergirlalex",
    tagline: "Pro gamer with exclusive gameplay and tips",
    description: "Alex is a professional esports player sharing exclusive gameplay, strategy guides, and behind-the-scenes content from tournaments. Get insider tips to level up your gaming skills.",
    category: "Gaming",
    subcategory: "Esports",
    url: "https://onlyfans.com/gamergirlalex",
    pricing: { model: "subscription", startingPrice: "$14.99/mo" },
    features: ["Pro gameplay videos", "Strategy tutorials", "Tournament insights", "1-on-1 coaching", "Early access content"],
    pros: ["Professional level content", "Detailed strategies", "Interactive community"],
    cons: ["Niche game focus", "Higher price"],
    rating: 4.8,
    tags: ["gaming", "esports", "strategy", "competitive"]
  },
  {
    name: "CozyGamerMia",
    slug: "cozygamermia",
    tagline: "Cozy gaming sessions and indie game reviews",
    description: "Mia creates relaxing gaming content featuring indie titles, simulation games, and cozy streams. Perfect for gamers who enjoy laid-back, wholesome content.",
    category: "Gaming",
    subcategory: "Casual Gaming",
    url: "https://onlyfans.com/cozygamermia",
    pricing: { model: "subscription", startingPrice: "$6.99/mo" },
    features: ["Indie game reviews", "Relaxing streams", "Game recommendations", "Cozy setup tours", "Chat sessions"],
    pros: ["Relaxing atmosphere", "Variety of games", "Affordable"],
    cons: ["No competitive content", "Slower paced"],
    rating: 4.4,
    tags: ["gaming", "indie", "cozy", "casual"]
  },
  {
    name: "RPGPrincessLuna",
    slug: "rpgprincessluna",
    tagline: "RPG walkthroughs and character builds",
    description: "Luna specializes in RPG content with detailed walkthroughs, optimal character builds, and lore discussions. A must-follow for RPG enthusiasts.",
    category: "Gaming",
    subcategory: "RPG",
    url: "https://onlyfans.com/rpgprincessluna",
    pricing: { model: "subscription", startingPrice: "$9.99/mo" },
    features: ["Complete walkthroughs", "Character build guides", "Lore videos", "Easter egg hunts", "Modding tutorials"],
    pros: ["Comprehensive guides", "Passionate about RPGs", "Great for completionists"],
    cons: ["Specific genre only", "Long-form content"],
    rating: 4.7,
    tags: ["gaming", "rpg", "walkthroughs", "strategy"]
  },
  {
    name: "FPSQueenSara",
    slug: "fpsqueensara",
    tagline: "First-person shooter expert and montages",
    description: "Sara dominates in FPS games with incredible aim and tactical gameplay. Watch epic montages, learn advanced techniques, and improve your FPS skills.",
    category: "Gaming",
    subcategory: "FPS",
    url: "https://onlyfans.com/fpsqueensara",
    pricing: { model: "subscription", startingPrice: "$11.99/mo" },
    features: ["Gameplay montages", "Aim training guides", "Tactical breakdowns", "Loadout recommendations", "Ranked gameplay"],
    pros: ["Skilled gameplay", "Educational content", "Frequent updates"],
    cons: ["Specific game titles", "Fast-paced content"],
    rating: 4.6,
    tags: ["gaming", "fps", "competitive", "tactical"]
  },

  // Lifestyle (4)
  {
    name: "LuxeLifeNina",
    slug: "luxelifenina",
    tagline: "Luxury lifestyle, travel and fashion",
    description: "Nina shares her glamorous lifestyle with exclusive travel vlogs, luxury hauls, and fashion lookbooks. Experience high-end living through her eyes.",
    category: "Lifestyle",
    subcategory: "Luxury",
    url: "https://onlyfans.com/luxelifenina",
    pricing: { model: "subscription", startingPrice: "$19.99/mo" },
    features: ["Luxury travel vlogs", "Designer hauls", "Fashion lookbooks", "Shopping tips", "Exclusive events"],
    pros: ["High production quality", "Aspirational content", "Unique experiences"],
    cons: ["Premium pricing", "Less relatable"],
    rating: 4.5,
    tags: ["lifestyle", "luxury", "travel", "fashion"]
  },
  {
    name: "VeganBabeOlivia",
    slug: "veganbabeolivia",
    tagline: "Plant-based lifestyle and vegan recipes",
    description: "Olivia promotes a sustainable vegan lifestyle with delicious recipes, shopping guides, and wellness tips. Make the transition to plant-based living easier.",
    category: "Lifestyle",
    subcategory: "Vegan",
    url: "https://onlyfans.com/veganbabeolivia",
    pricing: { model: "subscription", startingPrice: "$5.99/mo" },
    features: ["Vegan recipes", "Meal prep videos", "Product reviews", "Sustainability tips", "Q&A sessions"],
    pros: ["Affordable", "Practical advice", "Engaging personality"],
    cons: ["Niche audience", "Limited non-vegan content"],
    rating: 4.6,
    tags: ["lifestyle", "vegan", "recipes", "sustainability"]
  },
  {
    name: "MomLifeGrace",
    slug: "momlifegrace",
    tagline: "Real motherhood, parenting tips and family vlogs",
    description: "Grace keeps it real with honest motherhood content, parenting hacks, and family life vlogs. A supportive community for parents navigating the journey.",
    category: "Lifestyle",
    subcategory: "Parenting",
    url: "https://onlyfans.com/momlifegrace",
    pricing: { model: "subscription", startingPrice: "$4.99/mo" },
    features: ["Parenting tips", "Daily vlogs", "Product recommendations", "Meal planning", "Support community"],
    pros: ["Relatable content", "Very affordable", "Supportive community"],
    cons: ["Specific to parents", "Less polished production"],
    rating: 4.7,
    tags: ["lifestyle", "parenting", "family", "mom-life"]
  },
  {
    name: "DigitalNomadAva",
    slug: "digitalnomadava",
    tagline: "Remote work tips and travel hacking",
    description: "Ava teaches you how to work remotely while traveling the world. Get insider tips on travel hacking, remote job opportunities, and digital nomad essentials.",
    category: "Lifestyle",
    subcategory: "Travel",
    url: "https://onlyfans.com/digitalnomadava",
    pricing: { model: "subscription", startingPrice: "$13.99/mo" },
    features: ["Travel guides", "Remote work tips", "Budget hacking", "Destination reviews", "Packing guides"],
    pros: ["Practical advice", "Inspiring content", "Global perspective"],
    cons: ["Requires flexibility", "Higher subscription"],
    rating: 4.8,
    tags: ["lifestyle", "travel", "remote-work", "digital-nomad"]
  },

  // Adult (4)
  {
    name: "SensualSiren",
    slug: "sensualsiren",
    tagline: "Exclusive adult content and intimate experiences",
    description: "SensualSiren offers premium adult content with a focus on sensuality and intimacy. High-quality photos, videos, and personalized content for subscribers.",
    category: "Adult",
    subcategory: "Glamour",
    url: "https://onlyfans.com/sensualsiren",
    pricing: { model: "subscription", startingPrice: "$14.99/mo" },
    features: ["Daily photo sets", "HD videos", "Custom content", "Direct messaging", "Exclusive shows"],
    pros: ["Professional quality", "Responsive creator", "Regular uploads"],
    cons: ["PPV content", "Higher tier pricing"],
    rating: 4.9,
    tags: ["adult", "glamour", "exclusive", "premium"]
  },
  {
    name: "KinkyKassandra",
    slug: "kinkykassandra",
    tagline: "Fetish-friendly and kink exploration",
    description: "Kassandra creates a safe space for kink exploration with educational content, fetish-friendly material, and open communication. All boundaries respected.",
    category: "Adult",
    subcategory: "Fetish",
    url: "https://onlyfans.com/kinkykassandra",
    pricing: { model: "subscription", startingPrice: "$16.99/mo" },
    features: ["Fetish content", "Educational videos", "Custom requests", "Safe exploration", "Kink community"],
    pros: ["Inclusive and welcoming", "Educational approach", "Diverse content"],
    cons: ["Niche content", "Premium pricing"],
    rating: 4.7,
    tags: ["adult", "fetish", "kink", "exploration"]
  },
  {
    name: "GlamourGoddessRose",
    slug: "glamourgoddessrose",
    tagline: "High-fashion adult modeling and photography",
    description: "Rose combines high fashion with adult content, creating artistic and elegant photo sets. Professional photography with a glamorous aesthetic.",
    category: "Adult",
    subcategory: "Modeling",
    url: "https://onlyfans.com/glamourgoddessrose",
    pricing: { model: "subscription", startingPrice: "$17.99/mo" },
    features: ["Professional photoshoots", "Fashion content", "Behind-the-scenes", "Art photography", "Exclusive sets"],
    pros: ["Artistic approach", "High quality", "Unique aesthetic"],
    cons: ["Less explicit", "Premium cost"],
    rating: 4.6,
    tags: ["adult", "modeling", "fashion", "artistic"]
  },
  {
    name: "PlayfulPeach",
    slug: "playfulpeach",
    tagline: "Fun, playful and flirty content",
    description: "PlayfulPeach brings a fun and flirty vibe with engaging content that's both playful and sexy. Great personality and interactive with fans.",
    category: "Adult",
    subcategory: "Flirt",
    url: "https://onlyfans.com/playfulpeach",
    pricing: { model: "subscription", startingPrice: "$9.99/mo" },
    features: ["Daily posts", "Flirty videos", "Interactive games", "Fan requests", "Live chats"],
    pros: ["Fun personality", "Affordable", "Very interactive"],
    cons: ["Less hardcore content", "Frequent PPV"],
    rating: 4.8,
    tags: ["adult", "flirt", "playful", "interactive"]
  },

  // ASMR (3)
  {
    name: "ASMRAngelWhispers",
    slug: "asmrangelwhispers",
    tagline: "Relaxing ASMR triggers and sleep aid",
    description: "Angel creates soothing ASMR content with gentle whispers, tapping, and personal attention roleplay. Perfect for relaxation and better sleep.",
    category: "ASMR",
    subcategory: "Whisper",
    url: "https://onlyfans.com/asmrangelwhispers",
    pricing: { model: "subscription", startingPrice: "$7.99/mo" },
    features: ["Whispering videos", "Tapping sounds", "Roleplay scenarios", "Sleep triggers", "Binaural audio"],
    pros: ["Very relaxing", "High audio quality", "Consistent uploads"],
    cons: ["Niche content", "Requires headphones"],
    rating: 4.7,
    tags: ["asmr", "relaxation", "sleep", "whisper"]
  },
  {
    name: "TingleQueenZara",
    slug: "tinglequeenzara",
    tagline: "Creative ASMR triggers and tingles",
    description: "Zara explores unique ASMR triggers with creative props, sounds, and visual ASMR. Experience new tingles with every video.",
    category: "ASMR",
    subcategory: "Triggers",
    url: "https://onlyfans.com/tinglequeenzara",
    pricing: { model: "subscription", startingPrice: "$8.99/mo" },
    features: ["Creative triggers", "Visual ASMR", "Sound exploration", "Trigger tests", "Request videos"],
    pros: ["Innovative content", "Great variety", "Engaging"],
    cons: ["Hit or miss triggers", "Experimental"],
    rating: 4.5,
    tags: ["asmr", "tingles", "creative", "triggers"]
  },
  {
    name: "CozySoundsEllie",
    slug: "cozysoundsellie",
    tagline: "Cozy ASMR for comfort and stress relief",
    description: "Ellie specializes in cozy, comforting ASMR perfect for anxiety and stress relief. Her warm presence makes you feel safe and relaxed.",
    category: "ASMR",
    subcategory: "Comfort",
    url: "https://onlyfans.com/cozysoundsellie",
    pricing: { model: "subscription", startingPrice: "$6.99/mo" },
    features: ["Comfort ASMR", "Stress relief", "Soft speaking", "Cozy ambience", "Guided relaxation"],
    pros: ["Comforting presence", "Affordable", "Anxiety-friendly"],
    cons: ["Slower paced", "Limited trigger variety"],
    rating: 4.6,
    tags: ["asmr", "comfort", "stress-relief", "cozy"]
  },

  // Cosplay (3)
  {
    name: "CosplayQueenVera",
    slug: "cosplayqueenvera",
    tagline: "Detailed cosplay builds and character shoots",
    description: "Vera creates stunning cosplay with detailed build tutorials and professional photoshoots. From armor crafting to wig styling, learn it all.",
    category: "Cosplay",
    subcategory: "Crafting",
    url: "https://onlyfans.com/cosplayqueenvera",
    pricing: { model: "subscription", startingPrice: "$12.99/mo" },
    features: ["Cosplay tutorials", "Build progress", "Photoshoot BTS", "Pattern sharing", "Material guides"],
    pros: ["Educational", "High quality cosplays", "Detailed tutorials"],
    cons: ["Time-intensive content", "Crafting focus"],
    rating: 4.8,
    tags: ["cosplay", "crafting", "tutorial", "photography"]
  },
  {
    name: "AnimeWaifuChloe",
    slug: "animewaifuchloe",
    tagline: "Anime character cosplay and waifu content",
    description: "Chloe brings your favorite anime waifus to life with accurate cosplays and character-accurate photoshoots. A paradise for anime fans.",
    category: "Cosplay",
    subcategory: "Anime",
    url: "https://onlyfans.com/animewaifuchloe",
    pricing: { model: "subscription", startingPrice: "$10.99/mo" },
    features: ["Anime cosplays", "Character photoshoots", "Wig styling", "Makeup tutorials", "Convention coverage"],
    pros: ["Accurate cosplays", "Variety of characters", "Fan interaction"],
    cons: ["Anime-specific", "PPV for certain characters"],
    rating: 4.7,
    tags: ["cosplay", "anime", "waifu", "character"]
  },
  {
    name: "GamerCosplayJess",
    slug: "gamercosplayjess",
    tagline: "Video game character cosplay and props",
    description: "Jess specializes in video game cosplay with incredible prop building and armor crafting. See your favorite game characters come to life.",
    category: "Cosplay",
    subcategory: "Gaming",
    url: "https://onlyfans.com/gamercosplayjess",
    pricing: { model: "subscription", startingPrice: "$11.99/mo" },
    features: ["Game cosplays", "Prop making", "Armor crafting", "3D printing guides", "Convention vlogs"],
    pros: ["Amazing props", "Detailed builds", "Gaming focus"],
    cons: ["Specific game franchises", "Long build times"],
    rating: 4.9,
    tags: ["cosplay", "gaming", "props", "armor"]
  },

  // Art (3)
  {
    name: "ArtistAmeliaRose",
    slug: "artistameliarose",
    tagline: "Digital art tutorials and commission works",
    description: "Amelia shares her digital art process with step-by-step tutorials, time-lapses, and exclusive commission works. Perfect for aspiring digital artists.",
    category: "Art",
    subcategory: "Digital Art",
    url: "https://onlyfans.com/artistameliarose",
    pricing: { model: "subscription", startingPrice: "$8.99/mo" },
    features: ["Art tutorials", "Process videos", "Brush packs", "Commission showcases", "Live art sessions"],
    pros: ["Educational", "Beautiful artwork", "Helpful tutorials"],
    cons: ["Requires art software", "Technical content"],
    rating: 4.6,
    tags: ["art", "digital", "tutorial", "illustration"]
  },
  {
    name: "PinUpPainterLily",
    slug: "pinuppainterlily",
    tagline: "Pin-up art and vintage illustration",
    description: "Lily creates gorgeous pin-up style illustrations with a vintage aesthetic. Watch her traditional and digital process for creating classic pin-up art.",
    category: "Art",
    subcategory: "Illustration",
    url: "https://onlyfans.com/pinuppainterlily",
    pricing: { model: "subscription", startingPrice: "$9.99/mo" },
    features: ["Pin-up illustrations", "Vintage techniques", "Color theory", "Traditional media", "Art prints"],
    pros: ["Unique style", "Both digital and traditional", "Beautiful compositions"],
    cons: ["Specific genre", "Less frequent uploads"],
    rating: 4.5,
    tags: ["art", "pin-up", "vintage", "illustration"]
  },
  {
    name: "FantasyArtistKira",
    slug: "fantasyartistkira",
    tagline: "Fantasy character design and worldbuilding",
    description: "Kira specializes in fantasy art with character designs, creature concepts, and worldbuilding illustrations. Dive into magical realms through art.",
    category: "Art",
    subcategory: "Fantasy",
    url: "https://onlyfans.com/fantasyartistkira",
    pricing: { model: "subscription", startingPrice: "$10.99/mo" },
    features: ["Character designs", "Creature concepts", "Environment art", "Lore videos", "Sketch requests"],
    pros: ["Imaginative content", "Detailed worldbuilding", "Interactive"],
    cons: ["Fantasy-specific", "Complex techniques"],
    rating: 4.8,
    tags: ["art", "fantasy", "character-design", "worldbuilding"]
  },

  // Fashion (2)
  {
    name: "FashionistaElla",
    slug: "fashionistaella",
    tagline: "Fashion trends, styling tips and outfit ideas",
    description: "Ella curates the latest fashion trends with styling guides, outfit lookbooks, and shopping hauls. Elevate your wardrobe with expert fashion advice.",
    category: "Fashion",
    subcategory: "Styling",
    url: "https://onlyfans.com/fashionistaella",
    pricing: { model: "subscription", startingPrice: "$11.99/mo" },
    features: ["Outfit lookbooks", "Styling tips", "Fashion hauls", "Trend reports", "Wardrobe essentials"],
    pros: ["On-trend content", "Practical advice", "Budget options"],
    cons: ["Trend-focused", "Frequent shopping"],
    rating: 4.7,
    tags: ["fashion", "styling", "trends", "outfits"]
  },
  {
    name: "VintageVibesIsabella",
    slug: "vintagevibesisabella",
    tagline: "Vintage fashion and thrift finds",
    description: "Isabella celebrates vintage fashion with thrift hauls, retro styling, and sustainable fashion choices. Discover timeless pieces and unique finds.",
    category: "Fashion",
    subcategory: "Vintage",
    url: "https://onlyfans.com/vintagevibesisabella",
    pricing: { model: "subscription", startingPrice: "$7.99/mo" },
    features: ["Thrift hauls", "Vintage styling", "Era guides", "Sustainable tips", "Restoration videos"],
    pros: ["Unique content", "Sustainable focus", "Affordable"],
    cons: ["Niche aesthetic", "Limited modern trends"],
    rating: 4.5,
    tags: ["fashion", "vintage", "thrift", "sustainable"]
  },

  // Music (2)
  {
    name: "SingerSongwriterHarmony",
    slug: "singersongwriterharmony",
    tagline: "Original music, covers and behind-the-scenes",
    description: "Harmony shares her musical journey with original songs, acoustic covers, and songwriting process videos. Experience music creation from start to finish.",
    category: "Music",
    subcategory: "Singer-Songwriter",
    url: "https://onlyfans.com/singersongwriterharmony",
    pricing: { model: "subscription", startingPrice: "$9.99/mo" },
    features: ["Original songs", "Acoustic covers", "Songwriting process", "Lyrics breakdown", "Live sessions"],
    pros: ["Talented musician", "Personal connection", "Exclusive releases"],
    cons: ["Music-specific", "Variable upload schedule"],
    rating: 4.6,
    tags: ["music", "singer", "songwriter", "original"]
  },
  {
    name: "DJBeatMakerNova",
    slug: "djbeatmakernova",
    tagline: "Electronic music production and DJ sets",
    description: "Nova produces electronic music and shares her DJ sets, production tutorials, and music theory lessons. Learn to make beats and mix like a pro.",
    category: "Music",
    subcategory: "Electronic",
    url: "https://onlyfans.com/djbeatmakernova",
    pricing: { model: "subscription", startingPrice: "$12.99/mo" },
    features: ["DJ sets", "Production tutorials", "Sample packs", "Mixing techniques", "Live streams"],
    pros: ["Educational", "High energy", "Genre variety"],
    cons: ["Requires software knowledge", "Electronic focus"],
    rating: 4.7,
    tags: ["music", "dj", "electronic", "production"]
  },

  // Comedy (1)
  {
    name: "ComedyQueenRachel",
    slug: "comedyqueenrachel",
    tagline: "Stand-up comedy, sketches and funny vlogs",
    description: "Rachel delivers laugh-out-loud comedy with stand-up clips, sketch comedy, and hilarious vlogs. Start your day with a smile.",
    category: "Comedy",
    subcategory: "Stand-up",
    url: "https://onlyfans.com/comedyqueenrachel",
    pricing: { model: "subscription", startingPrice: "$6.99/mo" },
    features: ["Stand-up clips", "Comedy sketches", "Funny vlogs", "Improv videos", "Roast sessions"],
    pros: ["Genuinely funny", "Affordable", "Consistent content"],
    cons: ["Humor subjective", "Less visual appeal"],
    rating: 4.8,
    tags: ["comedy", "stand-up", "sketches", "humor"]
  }
];

// Add lastUpdated to all creators
const today = new Date().toISOString().split('T')[0];
creators.forEach(creator => {
  creator.lastUpdated = today;
});

// Save each creator to JSON file
const listingsDir = './src/content/listings';
if (!fs.existsSync(listingsDir)) {
  fs.mkdirSync(listingsDir, { recursive: true });
}

creators.forEach(creator => {
  const filename = path.join(listingsDir, `${creator.slug}.json`);
  fs.writeFileSync(filename, JSON.stringify(creator, null, 2));
  console.log(`✅ Created ${creator.slug}.json`);
});

console.log(`\n🎉 Generated ${creators.length} OnlyFans creator listings!`);
