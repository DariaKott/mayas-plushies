export type Product = {
  id: string;
  slug: string;
  category: string;
  title: { en: string; ru: string; me: string };
  description: { en: string; ru: string; me: string };
  price: number;
  dimensions: string;
  weight: string;
  material: { en: string; ru: string; me: string };
  images: string[];
  featured: boolean;
  inStock: boolean;
};

export const products: Product[] = [
  {
    "id": "border-terrier",
    "slug": "border-terrier",
    "category": "dogs",
    "title": {
      "en": "Border Terrier",
      "ru": "Бордер-терьер",
      "me": "Border terijer"
    },
    "description": {
      "en": "A small plush Border Terrier with a warm sandy coat and an alert, friendly expression.",
      "ru": "Небольшая плюшевая собака породы бордер-терьер с тёплой песочной шерсткой и дружелюбной мордочкой.",
      "me": "Mali plišani border terijer sa toplim pješčanim krznom i prijateljskim izrazom njuške."
    },
    "price": 25.0,
    "dimensions": "13.00 x 22.00 x 29.00 cm",
    "weight": "210 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "arctic-fox",
    "slug": "arctic-fox",
    "category": "wildlife",
    "title": {
      "en": "Arctic Fox",
      "ru": "Песец",
      "me": "Arktička lisica"
    },
    "description": {
      "en": "A soft Arctic Fox with snowy fur and a calm woodland look.",
      "ru": "Мягкий плюшевый песец со снежно-белой шерсткой и спокойным северным настроением.",
      "me": "Mekana plišana arktička lisica sa snježno bijelim krznom i mirnim sjevernim karakterom."
    },
    "price": 25.0,
    "dimensions": "12.00 x 20.00 x 29.00 cm",
    "weight": "232 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "tiger",
    "slug": "tiger",
    "category": "wildlife",
    "title": {
      "en": "Tiger",
      "ru": "Тигр",
      "me": "Tigar"
    },
    "description": {
      "en": "A striking plush tiger with bold markings and a strong, cuddly shape.",
      "ru": "Выразительный плюшевый тигр с яркими полосками и сильным, но очень уютным силуэтом.",
      "me": "Upečatljiv plišani tigar sa izraženim prugama i snažnom, ali veoma umiljatom siluetom."
    },
    "price": 40.0,
    "dimensions": "14.00 x 25.00 x 41.00 cm",
    "weight": "282 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "dachshund-dog",
    "slug": "dachshund-dog",
    "category": "dogs",
    "title": {
      "en": "Dachshund Dog",
      "ru": "Такса",
      "me": "Jazavičar"
    },
    "description": {
      "en": "A charming Dachshund plush with a long body, floppy ears, and a playful character.",
      "ru": "Очаровательная плюшевая такса с длинным телом, мягкими ушками и игривым характером.",
      "me": "Šarmantni plišani jazavičar sa dugim tijelom, mekim ušima i razigranim karakterom."
    },
    "price": 25.0,
    "dimensions": "10.00 x 18.00 x 32.00 cm",
    "weight": "204 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "labradoodle-dog",
    "slug": "labradoodle-dog",
    "category": "dogs",
    "title": {
      "en": "Labradoodle Dog",
      "ru": "Лабрадудль",
      "me": "Labradudl pas"
    },
    "description": {
      "en": "A fluffy Labradoodle plush with a gentle face and an irresistibly soft coat.",
      "ru": "Пушистый плюшевый лабрадудль с доброй мордочкой и особенно мягкой шерсткой.",
      "me": "Pufnasti plišani labradudl sa blagim izrazom i posebno mekanim krznom."
    },
    "price": 25.0,
    "dimensions": "12.00 x 21.00 x 26.00 cm",
    "weight": "226 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "ragdoll-cat",
    "slug": "ragdoll-cat",
    "category": "cats",
    "title": {
      "en": "Ragdoll Cat",
      "ru": "Кошка рэгдолл",
      "me": "Ragdoll mačka"
    },
    "description": {
      "en": "A realistic Ragdoll Cat plush with a silky coat and bright blue eyes.",
      "ru": "Реалистичная плюшевая кошка рэгдолл с шелковистой шерсткой и ярко-голубыми глазами.",
      "me": "Realistična plišana ragdoll mačka sa svilenkastim krznom i jarko plavim očima."
    },
    "price": 33.0,
    "dimensions": "23.00 x 15.00 x 43.00 cm",
    "weight": "304 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": true,
    "inStock": true
  },
  {
    "id": "german-shepherd-dog",
    "slug": "german-shepherd-dog",
    "category": "dogs",
    "title": {
      "en": "German Shepherd Dog",
      "ru": "Немецкая овчарка",
      "me": "Njemački ovčar"
    },
    "description": {
      "en": "A loyal-looking German Shepherd plush with lifelike coloring and a soft coat.",
      "ru": "Плюшевая немецкая овчарка с реалистичным окрасом и мягкой, приятной на ощупь шерсткой.",
      "me": "Plišani njemački ovčar sa realističnim bojama i mekanim krznom prijatnim na dodir."
    },
    "price": 25.0,
    "dimensions": "11.00 x 23.00 x 32.00 cm",
    "weight": "194 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "golden-lab-puppy",
    "slug": "golden-lab-puppy",
    "category": "dogs",
    "title": {
      "en": "Golden Lab Puppy",
      "ru": "Щенок золотистого лабрадора",
      "me": "Štene zlatnog labradora"
    },
    "description": {
      "en": "A cuddly Golden Lab puppy plush with a sweet face and a classic golden coat.",
      "ru": "Уютный плюшевый щенок золотистого лабрадора с милой мордочкой и классическим золотистым окрасом.",
      "me": "Umiljato plišano štene zlatnog labradora sa slatkim licem i klasičnim zlatnim krznom."
    },
    "price": 33.0,
    "dimensions": "14.00 x 23.00 x 30.00 cm",
    "weight": "256 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "bernese-mountain-dog",
    "slug": "bernese-mountain-dog",
    "category": "dogs",
    "title": {
      "en": "Bernese Mountain Dog",
      "ru": "Бернский зенненхунд",
      "me": "Bernski planinski pas"
    },
    "description": {
      "en": "A plush Bernese Mountain Dog with a big soft body and beautifully marked fur.",
      "ru": "Плюшевый бернский зенненхунд с большим мягким телом и красивой контрастной шерстью.",
      "me": "Plišani bernski planinski pas sa velikim mekim tijelom i lijepo označenim krznom."
    },
    "price": 25.0,
    "dimensions": "15.00 x 30.00 x 21.00 cm",
    "weight": "258 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "brown-labradoodle-dog",
    "slug": "brown-labradoodle-dog",
    "category": "dogs",
    "title": {
      "en": "Brown Labradoodle Dog",
      "ru": "Коричневый лабрадудль",
      "me": "Braon labradudl pas"
    },
    "description": {
      "en": "A brown Labradoodle plush with a fluffy texture and a cheerful expression.",
      "ru": "Коричневый плюшевый лабрадудль с пушистой текстурой и весёлым выражением мордочки.",
      "me": "Braon plišani labradudl sa pufnastom teksturom i veselim izrazom njuške."
    },
    "price": 25.0,
    "dimensions": "23.00 x 25.50 x 12.00 cm",
    "weight": "241 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "wolf",
    "slug": "wolf",
    "category": "wildlife",
    "title": {
      "en": "Wolf",
      "ru": "Волк",
      "me": "Vuk"
    },
    "description": {
      "en": "A realistic plush wolf with soft fur and a quiet wild spirit.",
      "ru": "Реалистичный плюшевый волк с мягкой шерсткой и тихим диким характером.",
      "me": "Realistični plišani vuk sa mekim krznom i tihim, divljim karakterom."
    },
    "price": 33.0,
    "dimensions": "12.00 x 16.00 x 38.00 cm",
    "weight": "261 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "snowy-owl",
    "slug": "snowy-owl",
    "category": "owls",
    "title": {
      "en": "Snowy Owl",
      "ru": "Полярная сова",
      "me": "Snježna sova"
    },
    "description": {
      "en": "A snowy white owl plush with soft feathers and wide, curious eyes.",
      "ru": "Белоснежная плюшевая сова с мягкими перышками и большими любопытными глазами.",
      "me": "Snježno bijela plišana sova sa mekanim perjem i velikim radoznalim očima."
    },
    "price": 12.5,
    "dimensions": "7.50 x 15.50 x 8.00 cm",
    "weight": "53 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "barn-owl",
    "slug": "barn-owl",
    "category": "owls",
    "title": {
      "en": "Barn Owl",
      "ru": "Сипуха",
      "me": "Kukuvija"
    },
    "description": {
      "en": "A gentle Barn Owl plush with a heart-shaped face and warm natural tones.",
      "ru": "Нежная плюшевая сипуха с сердцевидной мордочкой и тёплыми природными оттенками.",
      "me": "Nježna plišana kukuvija sa srcolikim licem i toplim prirodnim tonovima."
    },
    "price": 12.5,
    "dimensions": "7.50 x 15.50 x 8.00 cm",
    "weight": "53 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "little-brown-owl",
    "slug": "little-brown-owl",
    "category": "owls",
    "title": {
      "en": "Little Brown Owl",
      "ru": "Маленькая коричневая сова",
      "me": "Mala smeđa sova"
    },
    "description": {
      "en": "A small brown owl plush with a cozy shape and bright watchful eyes.",
      "ru": "Небольшая коричневая плюшевая сова с уютной формой и внимательными яркими глазами.",
      "me": "Mala smeđa plišana sova sa prijatnim oblikom i budnim sjajnim očima."
    },
    "price": 12.5,
    "dimensions": "7.50 x 15.50 x 8.00 cm",
    "weight": "53 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "woodland-owl",
    "slug": "woodland-owl",
    "category": "owls",
    "title": {
      "en": "Woodland Owl",
      "ru": "Лесная сова",
      "me": "Šumska sova"
    },
    "description": {
      "en": "A richly patterned woodland owl plush inspired by the colors of the forest.",
      "ru": "Плюшевая лесная сова с выразительным узором, вдохновлённым оттенками леса.",
      "me": "Plišana šumska sova sa izraženim šarama inspirisanim bojama šume."
    },
    "price": 12.5,
    "dimensions": "7.50 x 15.50 x 8.00 cm",
    "weight": "53 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "west-highland-terrier",
    "slug": "west-highland-terrier",
    "category": "dogs",
    "title": {
      "en": "West Highland Terrier",
      "ru": "Вест-хайленд-терьер",
      "me": "Vest hajlend terijer"
    },
    "description": {
      "en": "A soft West Highland Terrier plush with a bright expression and a fluffy white coat.",
      "ru": "Мягкий плюшевый вест-хайленд-терьер с живым выражением мордочки и пушистой белой шерстью.",
      "me": "Mekani plišani vest hajlend terijer sa živahnim izrazom i pufnastim bijelim krznom."
    },
    "price": 20.0,
    "dimensions": "14.00 x 21.00 x 18.00 cm",
    "weight": "142 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "cheetah-cub",
    "slug": "cheetah-cub",
    "category": "wildlife",
    "title": {
      "en": "Cheetah Cub",
      "ru": "Детёныш гепарда",
      "me": "Mladunče geparda"
    },
    "description": {
      "en": "A playful cheetah cub plush with a spotted coat and a lively little face.",
      "ru": "Игривый плюшевый детёныш гепарда с пятнистой шерсткой и живой симпатичной мордочкой.",
      "me": "Razigrano plišano mladunče geparda sa pjegavim krznom i živim simpatičnim licem."
    },
    "price": 15.0,
    "dimensions": "9.00 x 19.00 x 15.00 cm",
    "weight": "112 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  },
  {
    "id": "french-bulldog-puppy",
    "slug": "french-bulldog-puppy",
    "category": "dogs",
    "title": {
      "en": "French Bulldog Puppy",
      "ru": "Щенок французского бульдога",
      "me": "Štene francuskog buldoga"
    },
    "description": {
      "en": "A lovable French Bulldog puppy plush with a compact shape and a sweet character.",
      "ru": "Очаровательный плюшевый щенок французского бульдога с компактной формой и милым характером.",
      "me": "Šarmantno plišano štene francuskog buldoga sa kompaktom formom i slatkim karakterom."
    },
    "price": 15.0,
    "dimensions": "16.00 x 9.00 x 19.70 cm",
    "weight": "103 g",
    "material": {
      "en": "Soft plush, recycled polyester filling",
      "ru": "Мягкий плюш, наполнитель из переработанного полиэстера",
      "me": "Mekani pliš, punjenje od recikliranog poliestera"
    },
    "images": [],
    "featured": false,
    "inStock": true
  }
];
