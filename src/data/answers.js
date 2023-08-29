const data = [
  {
    //////////////////////////// Cartoon
    title : "Cartoons",
    theme: "Cartoons",
    content: [
      {
        id: 1,
        question: "Quel dessin animé a pour mascotte une souris électrique ?",
        answers: [
          { id: 2, text: "Mickey Mouse", correct: false },
          { id: 3, text: "Tom and Jerry", correct: false },
          { id: 1, text: "Pokémon", correct: true },
          { id: 4, text: "Bugs Bunny", correct: false }
        ]
      },
      {
        id: 2,
        question: "Dans la série Rémi sans Famille, qui meurt en premier ?",
        answers: [
          { id: 6, text: "Rémi", correct: false },
          { id: 7, text: "Vitalis", correct: false },
          { id: 8, text: "Joli-Cœur", correct: false },
          { id: 5, text: "La mère adoptive de Rémi", correct: true },
        ]
      },
      {
        id: 3,
        question: "Dans Dragon Ball Z, comment se nomme l'adversaire qui vient du futur ?",
        answers: [
          { id: 9, text: "Cell", correct: true },
          { id: 10, text: "Freezer", correct: false },
          { id: 11, text: "Buu", correct: false },
          { id: 12, text: "Raditz", correct: false }
        ]
      },
      {
        id: 4,
        question: "Quel personnage complètement chauve a une force dépassant toutes les autres ?",
        answers: [
          { id: 14, text: "Krillin", correct: false },
          { id: 15, text: "Piccolo", correct: false },
          { id: 13, text: "Saitama (One Punch Man)", correct: true },
          { id: 16, text: "Gon Freecss", correct: false }
        ]
      },
      {
        id: 5,
        question: "Dans Dragon Ball, comment s'appelle le compagnon de Yamcha ?",
        answers: [
          { id: 18, text: "Bulma", correct: false },
          { id: 19, text: "Oolong", correct: false },
          { id: 20, text: "Launch", correct: false },
          { id: 17, text: "Puar", correct: true },
        ]
      },
      {
        id: 6,
        question: "Dans One Piece, que veut devenir Luffy ?",
        answers: [
          { id: 21, text: "Le Roi des Pirates", correct: true },
          { id: 22, text: "Le Seigneur des Mers", correct: false },
          { id: 23, text: "Le Capitaine Suprême", correct: false },
          { id: 24, text: "L'Empereur des Océans", correct: false }
        ]
      },
      {
        id: 7,
        question: "Quel est le nom de la planète natale de Sangoku dans Dragon Ball Z ?",
        answers: [
          { id: 26, text: "Namek", correct: false },
          { id: 25, text: "Vegeta", correct: true },
          { id: 27, text: "Planète Terre", correct: false },
          { id: 28, text: "Frieza", correct: false }
        ]
      },
      {
        id: 8,
        question: "Dans quel dessin animé suit-on une bande de bébés qui parlent ?",
        answers: [
          { id: 30, text: "Les Tiny Toons", correct: false },
          { id: 31, text: "Les Animaniacs", correct: false },
          { id: 32, text: "Les Bisounours", correct: false },
          { id: 29, text: "Les Razmokets", correct: true },
        ]
      },
      {
        id: 9,
        question: "Dans Shrek, comment s'appelle le royaume de Lord Farquaad ?",
        answers: [
          { id: 34, text: "Farquaadia", correct: false },
          { id: 35, text: "Shrektopia", correct: false },
          { id: 33, text: "Duloc", correct: true },
          { id: 36, text: "Ogreland", correct: false }
        ]
      },
      {
        id: 10,
        question: "Quel est le titre de Po dans Kung Fu Panda ?",
        answers: [
          { id: 38, text: "Le Maître Panda", correct: false },
          { id: 37, text: "Le Guerrier Dragon", correct: true },
          { id: 39, text: "Le Kung Fu Panda", correct: false },
          { id: 40, text: "Le Protecteur de la Vallée", correct: false }
        ]
      }
    ]

  },

  //////////////////////////// film

  {
    title : "Movies",
    theme: "Movies",
    content: [
      {
        id: 1,
        question: "Dans quel film le protagoniste boit-il un cocktail appelé White Russian ?",
        answers: [
          { id: 1, text: "The Big Lebowski", correct: true },
          { id: 2, text: "Pulp Fiction", correct: false },
          { id: 3, text: "Matrix", correct: false },
          { id: 4, text: "Retour vers le futur", correct: false }
        ]
      },
      {
        id: 2,
        question: "Comment se nomme la danse faite dans le film Pulp Fiction ?",
        answers: [
          { id: 6, text: "Le rock", correct: false },
          { id: 7, text: "Le foxtrot", correct: false },
          { id: 8, text: "La valse", correct: false },
          { id: 5, text: "Le twist", correct: true },
        ]
      },
      {
        id: 3,
        question: "Dans Le Seigneur des Anneaux de Peter Jackson, qui dirige les elfes ?",
        answers: [
          { id: 10, text: "Legolas", correct: false },
          { id: 11, text: "Gandalf", correct: false },
          { id: 9, text: "Elrond", correct: true },
          { id: 12, text: "Aragorn", correct: false }
        ]
      },
      {
        id: 4,
        question: "Quel est le vrai nom de Iron Man ?",
        answers: [
          { id: 14, text: "Bruce Wayne", correct: false },
          { id: 15, text: "Steve Rogers", correct: false },
          { id: 13, text: "Tony Stark", correct: true },
          { id: 16, text: "Peter Parker", correct: false }
        ]
      },
      {
        id: 5,
        question: "Quel acteur incarne le premier Peter Parker alias Spider-Man dans le premier film de 2002 ?",
        answers: [
          { id: 18, text: "Andrew Garfield", correct: false },
          { id: 17, text: "Tobey Maguire", correct: true },
          { id: 19, text: "Tom Holland", correct: false },
          { id: 20, text: "Robert Downey Jr.", correct: false }
        ]
      },
      {
        id: 6,
        question: "Quelle est la capitale du Royaume de Narnia ?",
        answers: [
          { id: 22, text: "Narnia City", correct: false },
          { id: 23, text: "Aslanburg", correct: false },
          { id: 24, text: "Archenland", correct: false },
          { id: 21, text: "Cair Paravel", correct: true },
        ]
      },
      {
        id: 7,
        question: "Dans Matrix, de quelle couleur est la pilule qui permet de sortir de la Matrice ?",
        answers: [
          { id: 25, text: "Rouge", correct: true },
          { id: 26, text: "Bleue", correct: false },
          { id: 27, text: "Verte", correct: false },
          { id: 28, text: "Jaune", correct: false }
        ]
      },
      {
        id: 8,
        question: "Quelle chanson conclut le film Entretien avec un vampire ?",
        answers: [
          { id: 30, text: "Paint It Black", correct: false },
          { id: 31, text: "No More Tears", correct: false },
          { id: 29, text: "Sympathy for the Devil", correct: true },
          { id: 32, text: "Bohemian Rhapsody", correct: false }
        ]
      },
      {
        id: 9,
        question: "Dans Retour vers le futur, il faut combien de gigawatts pour que la machine voyage dans le temps ?",
        answers: [
          { id: 34, text: "2.21 gigawatts", correct: false },
          { id: 33, text: "1.21 gigawatts", correct: true },
          { id: 35, text: "0.88 gigawatts", correct: false },
          { id: 36, text: "1.88 gigawatts", correct: false }
        ]
      },
      {
        id: 10,
        question: "Où est né Luke Skywalker dans la série de films Star Wars ?",
        answers: [
          { id: 37, text: "Polis Massa", correct: true },
          { id: 38, text: "Tatooine", correct: false },
          { id: 39, text: "Coruscant", correct: false },
          { id: 40, text: "Naboo", correct: false }
        ]
      },
      {
        id: 11,
        question: "Quel est le nom de la Sorcière Rouge ?",
        answers: [
          { id: 41, text: "Wanda Maximoff", correct: true },
          { id: 42, text: "Natasha Romanoff", correct: false },
          { id: 43, text: "Jean Grey", correct: false },
          { id: 44, text: "Mystique", correct: false }
        ]
      },
      {
        id: 12,
        question: "Comment s'appelle l'invention créée par les frères Weasley qui permet de sécher les cours ?",
        answers: [
          { id: 46, text: "Le Retardateur", correct: false },
          { id: 47, text: "L'Heureux Hasard", correct: false },
          { id: 48, text: "La Machine à Excuses", correct: false },
          { id: 45, text: "La Boîte à Flemme", correct: true },
        ]
      }
    ]
  },

  //////////////////////////// series

  {
    title : "Series",
    theme: "Series",
    content: [
      {
        id: 1,
        question: "Dans la série Charmed, comment s'appelle le grimoire des 3 sœurs ?",
        answers: [
          { id: 2, text: "Le Grimoire Enchanté", correct: false },
          { id: 3, text: "Le Livre Magique", correct: false },
          { id: 1, text: "Le Livre des Ombres", correct: true },
          { id: 4, text: "Le Grimoire des Sorcières", correct: false }
        ]
      },
      {
        id: 2,
        question: "Dans Le Caméléon, comment se nomme le personnage principal ?",
        answers: [
          { id: 6, text: "Thomas", correct: false },
          { id: 5, text: "Jarod", correct: true },
          { id: 7, text: "David", correct: false },
          { id: 8, text: "Alex", correct: false }
        ]
      },
      {
        id: 3,
        question: "Quel est le gain promis initialement au vainqueur de Squid Game ?",
        answers: [
          { id: 10, text: "1 milliard de dollars", correct: false },
          { id: 11, text: "100 millions de yens", correct: false },
          { id: 9, text: "45 milliards de wons", correct: true },
          { id: 12, text: "10 000 euros", correct: false }
        ]
      },
      {
        id: 4,
        question: "Quel est le moyen de locomotion du Docteur dans la série Doctor Who ?",
        answers: [
          { id: 13, text: "Le TARDIS", correct: true },
          { id: 14, text: "La DeLorean", correct: false },
          { id: 15, text: "Le Téléporteur", correct: false },
          { id: 16, text: "Le Voyageur Temporel", correct: false }
        ]
      },
      {
        id: 5,
        question: "Dans la série Stranger Things, comment s'appellent les monstres qui viennent d'une autre dimension ?",
        answers: [
          { id: 18, text: "Les Ombregorgons", correct: false },
          { id: 19, text: "Les Étrangers", correct: false },
          { id: 20, text: "Les Monstrogorgons", correct: false },
          { id: 17, text: "Les Demogorgons", correct: true },
        ]
      },
      {
        id: 6,
        question: "Dans la série Friends, qui sort avec Monica ?",
        answers: [
          { id: 22, text: "Joey", correct: false },
          { id: 21, text: "Chandler", correct: true },
          { id: 23, text: "Ross", correct: false },
          { id: 24, text: "Phoebe", correct: false }
        ]
      },
      {
        id: 7,
        question: "Quelle est la devise de la maison Stark dans Game of Thrones ?",
        answers: [
          { id: 26, text: "Unis Nous Resterons", correct: false },
          { id: 27, text: "Le Feu et le Sang", correct: false },
          { id: 28, text: "Force et Honneur", correct: false },
          { id: 25, text: "L'Hiver Vient", correct: true },
        ]
      },
      {
        id: 8,
        question: "Comment se nomme le plus célèbre vaisseau dans Star Trek ?",
        answers: [
          { id: 30, text: "USS Voyager", correct: false },
          { id: 29, text: "USS Enterprise", correct: true },
          { id: 31, text: "USS Discovery", correct: false },
          { id: 32, text: "USS Defiant", correct: false },
        ]
      },
      {
        id: 9,
        question: "Dans X-Files, quel est le but de Mulder ?",
        answers: [
          { id: 34, text: "Chasser les extraterrestres", correct: false },
          { id: 35, text: "Déjouer des complots gouvernementaux", correct: false },
          { id: 33, text: "Retrouver sa sœur", correct: true },
          { id: 36, text: "Découvrir la vérité", correct: false }
        ]
      },
      {
        id: 10,
        question: "Quelle est la passion secrète de Dexter ?",
        answers: [
          { id: 37, text: "La pêche", correct: true },
          { id: 38, text: "Le jardinage", correct: false },
          { id: 39, text: "La cuisine", correct: false },
          { id: 40, text: "La lecture", correct: false }
        ]
      }
    ]
  },

  //////////////////////////// jeux video

  {
    title : "VideoGame",
    theme: "VideoGame",
    content: [
      {
        id: 1,
        question: "Quelle était la mascotte de Sega avant Sonic ?",
        answers: [
          { id: 2, text: "Sonic the Hedgehog", correct: false },
          { id: 1, text: "Alex Kidd", correct: true },
          { id: 3, text: "Tails", correct: false },
          { id: 4, text: "Knuckles", correct: false }
        ]
      },
      {
        id: 2,
        question: "Comment s'appelle le personnage principal de la série des Metal Gear ?",
        answers: [
          { id: 5, text: "Solid Snake", correct: true },
          { id: 6, text: "Liquid Snake", correct: false },
          { id: 7, text: "Big Boss", correct: false },
          { id: 8, text: "Revolver Ocelot", correct: false }
        ]
      },
      {
        id: 3,
        question: "Quelle est la dernière console produite par Sega ?",
        answers: [
          { id: 10, text: "La Saturn", correct: false },
          { id: 11, text: "La Mega Drive", correct: false },
          { id: 9, text: "La Dreamcast", correct: true },
          { id: 12, text: "La Master System", correct: false }
        ]
      },
      {
        id: 4,
        question: "Quelle est l'attaque spécifique de Kirby ?",
        answers: [
          { id: 14, text: "Inhalation", correct: false },
          { id: 13, text: "Aspiration", correct: true },
          { id: 15, text: "Absorption", correct: false },
          { id: 16, text: "Déglutition", correct: false }
        ]
      },
      {
        id: 5,
        question: "Dans quel FIFA est sorti le mode Ultimate Team ?",
        answers: [
          { id: 17, text: "FIFA 10", correct: true },
          { id: 18, text: "FIFA 15", correct: false },
          { id: 19, text: "FIFA 20", correct: false },
          { id: 20, text: "FIFA 22", correct: false }
        ]
      },
      {
        id: 6,
        question: "Dans le lore de Legend of Zelda, qui est Epona ?",
        answers: [
          { id: 22, text: "Un elfe", correct: false },
          { id: 23, text: "Un dragon", correct: false },
          { id: 24, text: "Un sorcier", correct: false },
          { id: 21, text: "Un cheval", correct: true },
        ]
      },
      {
        id: 7,
        question: "Dans Street Fighter, quels sont les personnages principaux ?",
        answers: [
          { id: 26, text: "Guile et Chun-Li", correct: false },
          { id: 25, text: "Ryu et Ken", correct: true },
          { id: 27, text: "M. Bison et Sagat", correct: false },
          { id: 28, text: "Blanka et Dhalsim", correct: false }
        ]
      },
      {
        id: 8,
        question: "Dans la série Mass Effect, comment se nomment les principaux adversaires ?",
        answers: [
          { id: 29, text: "Les Moissonneurs", correct: true },
          { id: 30, text: "Les Ravageurs", correct: false },
          { id: 31, text: "Les Envahisseurs", correct: false },
          { id: 32, text: "Les Conquérants", correct: false }
        ]
      },
      {
        id: 9,
        question: "Dans World of Warcraft, quelle est la capitale de l'Alliance ?",
        answers: [
          { id: 34, text: "Darnassus", correct: false },
          { id: 35, text: "Forgefer", correct: false },
          { id: 33, text: "Hurlevent", correct: true },
          { id: 36, text: "Exodar", correct: false },
        ]
      },
      {
        id: 10,
        question: "Quelle est la devise du jeu League of Legends ?",
        answers: [
          { id: 38, text: "Vaincre ou mourir", correct: false },
          { id: 37, text: "Accomplissons de grandes choses ensemble", correct: true },
          { id: 39, text: "Toujours plus fort", correct: false },
          { id: 40, text: "La victoire à tout prix", correct: false }
        ]
      }
    ]
  },

  //////////////////////////// general

  {
    title: "general",
    theme: "general",
    content: [
      {
        id: 1,
        question: "Quel dessin animé a pour mascotte une souris électrique ?",
        answers: [
          { id: 2, text: "Mickey Mouse", correct: false },
          { id: 3, text: "Tom and Jerry", correct: false },
          { id: 1, text: "Pokémon", correct: true },
          { id: 4, text: "Bugs Bunny", correct: false }
        ]
      },
      {
        id: 2,
        question: "Quel est le vrai nom de Iron Man ?",
        answers: [
          { id: 5, text: "Tony Stark", correct: true },
          { id: 6, text: "Bruce Wayne", correct: false },
          { id: 7, text: "Steve Rogers", correct: false },
          { id: 8, text: "Peter Parker", correct: false }
        ]
      },
      {
        id: 3,
        question: "Dans la série Mass Effect, comment se nomment les principaux adversaires ?",
        answers: [
          { id: 10, text: "Les Renégats", correct: false },
          { id: 9, text: "Les Moissonneurs", correct: true },
          { id: 11, text: "Les Zergs", correct: false },
          { id: 12, text: "Les Collecteurs", correct: false }
        ]
      },
      {
        id: 4,
        question: "Quelle est la devise de la maison Stark dans Game of Thrones ?",
        answers: [
          { id: 14, text: "Unis Nous Resterons", correct: false },
          { id: 15, text: "Le Feu et le Sang", correct: false },
          { id: 13, text: "L'Hiver Vient", correct: true },
          { id: 16, text: "Force et Honneur", correct: false }
        ]
      },
      {
        id: 5,
        question: "Dans le lore de Legend of Zelda, qui est Epona ?",
        answers: [
          { id: 18, text: "Un elfe", correct: false },
          { id: 19, text: "Un dragon", correct: false },
          { id: 20, text: "Un magicien", correct: false },
          { id: 17, text: "Un cheval", correct: true },
        ]
      },
      {
        id: 6,
        question: "Dans quel film le protagoniste boit-il un cocktail appelé White Russian ?",
        answers: [
          { id: 22, text: "Pulp Fiction", correct: false },
          { id: 23, text: "Matrix", correct: false },
          { id: 21, text: "The Big Lebowski", correct: true },
          { id: 24, text: "Retour vers le futur", correct: false }
        ]
      },
      {
        id: 7,
        question: "Quelle était la mascotte de Sega avant Sonic ?",
        answers: [
          { id: 26, text: "Knuckles", correct: false },
          { id: 25, text: "Alex Kidd", correct: true },
          { id: 27, text: "Tails", correct: false },
          { id: 28, text: "Robotnik", correct: false }
        ]
      },
      {
        id: 8,
        question: "Comment s'appelle le personnage principal de la série des Metal Gear ?",
        answers: [
          { id: 30, text: "Liquid Snake", correct: false },
          { id: 31, text: "Big Boss", correct: false },
          { id: 29, text: "Solid Snake", correct: true },
          { id: 32, text: "Revolver Ocelot", correct: false }
        ]
      },
      {
        id: 9,
        question: "Quel est le gain promis initialement au vainqueur de Squid Game ?",
        answers: [
          { id: 34, text: "1 milliard de dollars", correct: false },
          { id: 35, text: "100 millions de yens", correct: false },
          { id: 33, text: "45 milliards de wons", correct: true },
          { id: 36, text: "10 000 euros", correct: false }
        ]
      },
      {
        id: 10,
        question: "Quel personnage complètement chauve a une force dépassant toutes les autres ?",
        answers: [
          { id: 38, text: "Krillin", correct: false },
          { id: 39, text: "Piccolo", correct: false },
          { id: 40, text: "Gon Freecss", correct: false },
          { id: 37, text: "Saitama (One Punch Man)", correct: true },
        ]
      }
    ]
  }
]

export default data;
