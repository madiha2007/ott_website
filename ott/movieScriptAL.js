const cardData = [
    {
      id: "crew",
      title: "Crew",
      img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSaxW7HqP8BldNO2q-jw9IpV0TUDjtjUmhXvK8nKLXcepLsdypyTzzB5QQqNL6Ow8crexz9qWkKeP9lVBcVPC3fb374Gui5CEC8.jpg?r=7dd",
      genre: "Quirky, Comedy, Bollywood",
      description: "When their airline faces bankruptcy, three desperate flight attendants resort to a high-flying gold smuggling ring to keep their careers afloat."
    },
    {
      id: "shehzada",
      title: "Shehzada",
      img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY0y6kuT4OM_py9HjB_q4ZoTkCx6GpQWfvoBq3s8H1rnnZMG6VNW3wFPA2dgYzL6g_hr3ZAMYVowIXK3p1CeQXpU2THTv-b6LOw.jpg?r=9f9",
      genre: "Exciting, Comedy, Bollywood",
      description: "After realizing he was switched at birth by a conniving father, a rakish Bantu's life is upended when he becomes the heir to a billionaire."
    },
    {
      id: "aap_jaisa_koi",
      title: "Aap Jaisa Koi",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVn7j1EiWUjaAB7alll1E4pvVifNPtHrlaJylpZsdCd3M6TmdpeZhnN6GCNTHSD9lc7QydD1C4jNjBl1j_AbxOAFmuUF8qOTqUsYvC-TsF8YxxpPz-HjRa7a-BFd0TZP-m-FVu72MldWU1OAYjEsR-hXXRWZBk_84ZljattGYukuXfdYm3aAevEmGuGbKQUItSoGxRv2tngbSG0IRVo6gTRY9uotwUpKL6VxS49IOUrpAOODgZ9kvwUzmHy4TL5Cje0.jpg?r=7aa',
      genre: "Drama, Comedy, Bollywood",
      description: "Shrirenu lives by tradition. Madhu lives unapologetically. When their paths cross, a tender romance unfolds — awkward, sweet but shadowed by patriarchy."
    },
    {
      id: "dream_girl_2",
      title: "Dream Girl 2",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRbsl7e8nMksd4cUpSPml40BxI-N9GatiKO9kcR3Wj35KQN0KshmQOCmy1BB9-WtCVvUSRJEhpqW595IbAeAjkvPkI4zZIZSPnw.jpg?r=e35',
      genre: "Goofy, Romantic, Comedy, Bollywood",
      description: "Karam secretly turns his female alter ego into a dancer and woos a millionaire's son in hopes of paying family debts and impressing his fiancée's father."
    },
    {
      id: "tu_jhooti_main_makkaar",
      title: "Tu Jhoothi Main Makkaar",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXdseW6oX8Qw5IDoCFVzlqOoZOBZ6v7kkpykqfpJfsyTvUGV5BgSp-U1-oz4z-umy3nUaUdevsEC-Fpy4nIFK7HV941nc1YJDsY.jpg?r=b0a',
      genre: "Bollywood, Romantic, Comedy",
      description: "To earn extra cash, Mickey helps couples break up — but life gets complicated when he falls for Tinni, a career woman with an independent streak."
    },
    {
      id: "doctorg",
      title: "Doctor G",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSYrXdObr8v0pQkFqBhsl55wJXb8c-ANYCQm5VUrW-9rzJamOTW2nk7BsQuj9lYpn7811nW3XLq0UxtOBRL5upABblPJYvwI17k.jpg?r=6e4',
      genre: "Quirky, Comedy, Drama",
      description: "Medical student Uday Gupta grudgingly joins an all-women's gynecology class, but being a good doctor — and person — rests on pondering his prejudice."
    },
    {
      id: "zindagi_na_milegi_dobara",
      title: "Zindagi Na Milegi Dobara",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABczg8ArwfH0ZvTy-pUhMnnOeCFj2c5o9G_0RuOWsUDC0hn39R2UyGn3NC73B7ZTxYrSyipRyNs9JPvshxsjk9LSkc9c0-uuivew.jpg?r=3f4',
      genre: "Bollywood , Romance, Drama",
      description: "Three friends on an adventurous road trip/bachelor party in Spain learn some lessons about themselves and each other that will change them forever."
    },
    {
      id: "yeh_jawaani_hai_deewani",
      title: "Yeh Jawaani Hai Deewani",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd31BvvySOebfiD3rvENzh6OlXUaEhgBRqlQJT9Mmk_R3fc4a58124SxYK-OfCN41VmVFwPSG40NaWE8cqRJAlA7gIVR00Wt2N8.jpg?r=8c0',
      genre: "Emotional, Romantic, Bollywood",
      description: "On a trekking trip, an introvert falls for a charming ex-classmate, whose thirst for adventure drives them apart. Years later, their paths cross again."
    },
    {
      id: "dear_zindagi",
      title: "Dear Zindagi",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb3bgUwc0rmOycDPfJ1_35tCWd3zgVIKDRwr_8u6kBaGurhAx-5YrNVsb4Kdomhxz1HWJqkfKC82PiLBiHxXNGhAxVcxJyJvFcE.jpg?r=d2a',
      genre: "Drama, Bollywood",
      description: "A young cinematographer with a bright professional future and a lack of empathy learns the importance of balancing ambition with humanity.."
    },
    {
      id: "ginny_weds_sunny",
      title: "Ginny Weds Sunny",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSfcc3kvh29G4AeNm3OBpOtKFfQCoD1hzwbUTr3fmCZYgPSZNhKUf1PItuzrMqwj4D52jrW_wPFBeJSO38h89tGfx2roIhnDWZiOeOYStDzUZtG6Ewe2Vuop6ifmD9w_PpZa.jpg?r=600',
      genre: "Charming, Feel-good, Comedy",
      description: "Eager to marry but constantly rejected by women, a bachelor hopes to win over a former crush by accepting help from an unlikely source: her mother."
    },
    {
      id: "veere_di_wedding",
      title: "Veere Di Wedding",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABevA5ZcsVZbYRjosb_vDAW1pVcayermF3gX8yTfykMhMDq7j7dZofl3QGKX4DMGTKDYJJc5i2lnaUfh5pUQqPJ_mkOXYlZe-_o8.jpg?r=ff0',
      genre: "Comedy, Bollywood, Raunchy",
      description: "Four best friends come together after one gets engaged, working through relationship troubles, family expectations and marriage drama."
    },
    {
      id: "soty",
      title: "Student of the Year",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb7zRdlz15595ImInMQpc0fXTT4mHKBfFxAc8vGhlq-6vLd9TqN1ErhMUppDoD7LRHWOy-6n-DFAp8H3SioFMakS6aXH_Va0D3c.jpg?r=d97',
      genre: "Emotional, Romantic, Bollywood, Drama",
      description: "Rivals turned friends find their bromance tested when they battle it out to win not only a grueling school competition, but also the same girl's heart."
    }
];


const cardData1 = [
  {
      id: "dolittle",
      title: "Dolittle",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABboptFCpZtqmpBesEh4WM5R7CQT6V592Ktj6pGuOxahgWp4adDxjapUNxzSGAYwQ1_k5wVABEV1dqzPg9g5jLD18kZBgFDHn_ijPyIEq9E_Yf2y5I3UB2D18tvBWmcGETh2v3DBKdA9yf85hkVbKQ2X4KZPlLaPJkVg.jpg?r=f9d',
      genre: "Family, Comedy, US",
      description: "When Queen Victoria falls ill, the reclusive Dr. Dolittle, his young apprentice and his animal friends set sail on an epic quest to find a magical cure.."
    },
    {
      id: 'kungfu_panda_4',
      title: 'Kung Fu Panda 4',
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdM-Iwq3IrgPDL11bb4YJ3s-bKPxPBkmyv06CpSv7Pq_dG8zDyo8ga0h9hGN0K44RxOOGeHqpzTp2eVD_vtzpBE61l3odQvM8_cPw9oiH_MSQmOKqxMWlWWnADIQhZ5ssUjd85qPZ7sQNrNKdmJogGuZfuHn297t-I2MZ8CS4OdC.jpg?r=d64',
      genre:'Feel-good, Family, Animation',
      description:'Po kicked butt as the Dragon Warrior, and he thinks he may have found his successor – if they can defeat a new villain with shapeshifting powers.'
    },
    {
      id: 'my_oxford_year',
      title: 'My Oxford Year',
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQp5B0LdDWm1IgOCX3lCC4wZcftd-YdXghgxN0g4Je6baj0ZcC86tOn8QJoLikzJDyEWHoTYX5J_TdMAi4axJG9c0954gmyWw1W3D8H6vz2uLjg6NYhkJZZv1TwxGypEzsh7QshhywBglQrgeOzy6Mi5kw7V7B4geiJYB6rQ-NxbID8dkMDkrS6JA-W3zkdLDNHqddk0MGtNyKiwZwEpaJP58uOQC_3fuJ6gsa7lIJhEdRg195zmrFU2yN05D-bTZRA.jpg?r=63b',
      genre:'Rom-com, Drama, Comedy',
      description:'An ambitious American fulfilling her dream of studying at Oxford falls for a charming Brit hiding a secret that may upend her perfectly planned life.'
    },
    {
      id: 'the_intern',
      title: 'The Intern',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABempONPM10G3shXnqkR3wRcw4KQi0O5VUlw9hISzjhn2b78CpyYWvsS9IQB4ICgmZ4kgTQQLZaUa6i8wLR9jwhZK3uZPWuUEUdo.jpg?r=d7e',
      genre:'Comedy , Romance',
      description:"Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin."
    },
    {
      id: 'the_school_of_good_and_evil',
      title: 'The School of Good and Evil',
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUCc1z7CdoSA7UpNxEULxX00-VOiHyXpsBfTmnGzXQvCQ1SeEwbKkZ8hlCACDBCoMgjRGroDfIvg4n4BQOUEmeuBlL9snzFKkjdpV27w7ulw4Bd5xS4G-D6PfFZxFKzNr6uc.jpg?r=606',
      genre:'Quirky, Fantasy, Family, Teen',
      description:"Best friends Sophie and Agatha find their bond put to the test when they're whisked away to a magical school for future fairy-tale heroes and villains."
    },
    {
      id: 'fate_of_furious',
      title: 'Fate of Furious',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXTi3YtZgBaBmttxbsO8HQI63MnKTrKJoukrngTE0HBLzUUH2zA4807rccAg2JUyvJw3d0tsZjzyqjvjpK_3184r9oJpC7baxeM.jpg?r=3a2',
      genre:'Action ,Comedy',
      description:'When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.'
    },
    {
      id: 'infinite',
      title: 'Infinite',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVjjyAHZclC5dwBBvyjP4q3_PL8wuTDtubKK4JQuo4WzsrS4eRzlnXn8lCejJl4aAYcD3kW5Rj7jjzSx11U5KIdEUfIMiMuOn3M.jpg?r=7c4',
      genre:'Action ,Sci-fi',
      description:'A man discovers that his hallucinations are actually visions from past lives.'
    },
    {
      id: 'the_old_guard',
      title: 'The Old Guard',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZMz3ITTm4xtxwrdOH1OZLO-XxDGuIniTghMv3YDXk7gftic_8vImf7wQ7_y7m0hbFI7LxDoRvXhEJXMo6fMQBlrTjxTNF86sLxM9BxcVO6DrTenk9AXCSFKitbfq6q3Hfpg.jpg?r=75c',
      genre:'Action , Fantasy',
      description:'A covert group of tight-knit mercenaries with an inability to die have fought to protect the world for centuries. But when their abilities are suddenly exposed, they need to eliminate the threat of those who seek to replicate their power.'
    }
    ,
    {
      id: 'sing-thriller',
      title: 'Sing-Thriller',
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV92Vf9puEIotjYg0gRn7VqbUkdtryjPmLFhMEfiKmy8ATtH1fvRr4yJ7vnd8gbZY1AydseGf3Q6Cixh4zWmbkbKInW-ctkN1yo4zBWSVNjb7ZEQWclwe0hGe_qdknqiQ1za.jpg?r=00f',
      genre:'Musical , Comedy',
      description:'Buster Moon dreams up a star-studded spectacle set to Michael Jacksons "Thriller" in this animated short featuring characters from the hit "Sing" films.'
    },
    {
        id: 'we_can_be_heroes',
        title: 'We Can Be Heroes',
        img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdya4_wM5qg0gbK9BOniNgbcYbkSchEnUOEgeuBjZVZ4adD1XncTZ3usxS2gbkbjDbcwUa4428AlKfcQ1eeYDd8pzKDjKIcVfh2y4eOOVXTbRlWyWgCwKcEAs1QmMbnzWjTf.jpg?r=0fd',
        genre:'Family, Children, Comedy',
        description:"When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents — and the planet."
      },
      {
        id: 'the_amazing_spider-man',
        title: 'The Amazing Spider-man',
        img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2zczHI80brljN8c5jlbePfAJeb6K-yr_6K0580dd5OQ61GEOHcs05a-WaDSVDoWmxPuog9hqMj2G0GazfBul6IlBbCFQ0rv_w.jpg?r=a20',
        genre:'Sci-fi, Action, Adventure',
        description:"Andrew Garfield stars as Peter Parker, a high schooler learning to wield new powers while uncovering family secrets and battling a familiar archvillain."
      },
      {
        id: "venom_the_last_dance",
        title: "Venom: The Last Dance",
        img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcSgv0LeZ0fkOUz3vTnkqIwdUatNzXIWjIWSGYi3LLEqG1UkI8w2wDDK534g64GWTgikgJIjPDIzRgZtfEGTckehMjYAZIn7OYQ.jpg?r=bd8',
        genre:'Sci-fi, Action, Adventure, US',
        description:"Still on the run, journalist Eddie Brock and his alien companion Venom dodge threats from a vigilant military leader and ruthless invading symbiotes."
      }
    
];
const cardData2 = [
  {
    id: 'the_great_wall',
    title: 'The Great Wall',
    img: 'https://imgcdn.media/poster/341/80133543.jpg',
    genre:'Action,Adventure',
    description:"Searching for gunpowder in Song dynasty China, European mercenaries discover an epic war being waged between the country's heroes and savage monsters."
  },
  {
    id: 'pacific_rim',
    title: 'Pacific Rim',
    img: 'https://imgcdn.media/poster/h/70267241.jpg',
    genre:'Sci-Fi, Action',
    description:"When the world's defenses fail against the threat of alien sea creatures, the task of saving the planet falls to a former pilot and a raw trainee."
  },
  {
    id: 'damsel',
    title: 'Damsel',
    img: 'https://imgcdn.media/poster/h/80991090.jpg',
    genre:'Action,Adventure',
    description:"A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon."
  },
  {
    id: 'kalki',
    title: 'Kalki 2898-AD',
    img: 'https://imgcdn.media/poster/h/81726031.jpg',
    genre:'Sci-Fi, Action',
    description:"The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness."
  },
  {
    id: 'the_adam_project',
    title: 'The Adam Project',
    img: 'https://imgcdn.media/poster/h/81309354.jpg',
    genre:'Sci-Fi, Action',
    description:"After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his younger self on a mission to save the future."
  },
  {
    id: 'world_war_z',
    title: 'World War Z',
    img: 'https://imgcdn.media/poster/h/70262639.jpg',
    genre:'Sci-Fi, Horror',
    description:"When a zombie pandemic threatens to destroy a former UN investigator goes on a perilous global journey to track down the source of the outbreak."
  },
  {
    id: 'van_helsing',
    title: 'Van Helsing',
    img: 'https://imgcdn.media/poster/h/60034569.jpg',
    genre:'Action, Horror',
    description:"Vampire hunter Van Helsing travels to a mysterious region of Europe on a quest to vanquish Count Draculla, the Wolf Man and Frankenstein's Monster."
  },
  {
     id: 'tsfgae',
    title: 'The School For Good And Evil',
    img: 'https://imgcdn.media/poster/h/80218885.jpg',
    genre:'Fantasy, Adventure',
    description:"Best friends Sophie and Agatha find themselves on opposing sides of an epic battle when they're swept away into a magical school where they train to become fairy tale heroes and villains."
  }
  ,
  {
     id: 'geostorm',
    title: 'Geostorm',
    img: 'https://imgcdn.media/poster/h/80185871.jpg',
    genre:'Action, Sci-Fi',
    description:"When a weather-controlling satellite system malfunctions, it unleashes a series of catastrophic natural disasters around the world."
  },
  {
       id: 'family_pack',
    title: 'Family Pack',
    img: 'https://imgcdn.media/poster/h/81686180.jpg',
    genre:'French, Comedy',
    description:"When an old card games comes to life, a family jumps back in time to a medieval world where they must navigate challenges and adventures to return home."
    },
    {
       id: 'dracula_untold',
    title: 'Dracula Untold',
    img: 'https://imgcdn.media/poster/h/70305899.jpg',
    genre:'Action, Horror',
    description:"A medieval warrior must become a vampire in order to repel the Ottoman Empire of his country in this action-packed tale."
    },
    {
       id: 'ttsbd',
    title: 'The Twilight Saga: Breaking Dawn - Part 2',
    img: 'https://imgcdn.media/poster/h/70206632.jpg',
    genre:'Action, Horror',
    description:"In the epic series final chapter, Bella and Edward's newborn daughter forces the couple into a life-altering confrontation with the Volturi."
    }
];
const cardData3 = [
  {
    id: 'venom',
    title: 'Venom',
    img: 'https://imgcdn.media/poster/h/80991034.jpg',
    genre:"Action, Sci-Fi",
    description:"When Eddie Brock acquires the powers of a symbiote, he must fight a war against the corrupt corporation that experimented on him."
  },
  {
    id: 'war_of_the_worlds',
    title: 'War of the Worlds',
    img: 'https://imgcdn.media/poster/h/70021644.jpg',
    genre:"Sci-Fi, Action",
    description:"When a violent alien takeover threatens Earth, an estranged dad must step up to protect his two kids - and he'll stop at nothing to keep them safe."
  },
  {
    id: 'life',
    title: 'Life',
    img: 'https://imgcdn.media/poster/h/80158764.jpg',
    genre:"Sci-Fi, Horror",
    description:"The discovery of a single-celled organism in a sample from Mars causes excitement..... until the life-form starts displaying signs of intelligence."
  },
  {
    id: 'rim_of_the_world',
    title: 'Rim of the World',
    img: 'https://imgcdn.media/poster/h/80218306.jpg',
    genre:"Sci-Fi, Adventure",
    description:"Stranded at a summer camp when aliens attack planet, four teens with nothing in common embark on a perilous mission to save the world."
  },
  {
    id: 'super',
    title: 'Super 8',
    img: 'https://imgcdn.media/poster/h/70171581.jpg',
    genre:"Sci-Fi, Mystery",
    description:"While filming a zombie movie on a Super 8 camera, a group of friends witnesses a train crash and soon realize that something unimaginable has escaped from the wreckage."
  },
  {
    id: 'after_earth',
    title: 'After Earth',
    img: 'https://imgcdn.media/poster/h/70263889.jpg',
    genre:"Sci-Fi, Adventure",
    description:"After a crash landing on the long abandoned Earth, a young boy sets out to find a beacon that will save him -- and his dying father."
  },
  {
    id: 'spaceman',
    title: 'Spaceman',
    img: 'https://imgcdn.media/poster/h/81301595.jpg',
    genre:"Sci-Fi, Drama",
    description:"A washed-up baseball player is sent to space to collect cosmic dust, but his mission takes a turn when he discovers a mysterious alien artifact."
  },
  {
    id: 'the_extraterrestrial',
    title: 'The Extra-terrestrial',
    img: 'https://imgcdn.media/poster/h/60022398.jpg',
    genre:"Sci-Fi, Drama",
    description:"E.T wants to go home. But with government forces on his tail, a froup of kids must outwit the adults to save their intergalacyic friend."
  }
  ,
  {
    id: 'extinction',
    title: 'Extinction',
    img: 'https://imgcdn.media/poster/h/80236421.jpg',
    genre:"Sci-Fi, Thriller",
    description:"Plagued by dreams of an alien invasion, a family man faces his worst nightmares when an extraterrestrial force begins exterminating Earts inhabitants."
  },
  {
      id: 'gantz',
      title: 'GANTZ:O',
      img: 'https://imgcdn.media/poster/h/80149259.jpg',
      genre:"Sci-Fi, Horror",
      description:"In a post-apocalyptic world, a group of survivors must fight off hordes of monstrous creatures while uncovering the truth behind their existence."
    },
    {
      id: 'blasted',
      title: 'Blasted',
      img: 'https://imgcdn.media/poster/h/81276518.jpg',
      genre:"Sci-fi, Comedies",
      description:"When an alien invasion interrupts a group of friends' weekend getaway, two childhood friends must work together to save the day."
    },
    {
      id: "office_invasion",
      title: "Office Invasion",
      img: 'https://imgcdn.media/poster/h/81590587.jpg',
      genre:"Sci-Fi, Comedy",
      description:"When a group of office workers discovers an alien invasion, they must band together to save their jobs - and the world."
    }
];
// ----------------- CAROUSEL CREATION FUNCTION -----------------
function createCarousel(containerId, cards, carouselId) {
  const container = document.getElementById(containerId);
  const cardsPerSlide = window.innerWidth < 600 ? 3 : 4;

  for (let i = 0; i < cards.length; i += cardsPerSlide) {
    const slide = document.createElement('div');
    slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
    const row = document.createElement('div');
    row.className = 'row g-4 justify-content-center';

    cards.slice(i, i + cardsPerSlide).forEach(card => {
      const col = document.createElement('div');
      col.className = 'col-4 col-md-3';
      col.innerHTML = `
       <div class="card card-modal-trigger bg-dark text-white"
         data-id="${card.id}"
         data-title="${card.title}"
         data-img="${card.img}"
         data-genre="${card.genre}"
         data-description="${card.description}">
        <img src="${card.img}" class="card-img-top" />
        <div class="card-body text-center">
          <small class="card-title">${card.title}</small>
        </div>
      </div>
      `;
      row.appendChild(col);
    });

    slide.appendChild(row);
    container.appendChild(slide);
  }
}
createCarousel("carouselContent", cardData, "carousel1");
createCarousel("carouselContent1", cardData1, "carousel2");
createCarousel("carouselContent2", cardData2, "carousel3");
createCarousel("carouselContent3", cardData3, "carousel4");
createCarousel("carouselContent4", cardData1, "carousel5");
createCarousel("carouselContent5", cardData2, "carousel6");

const allCards = [...cardData, ...cardData1, ...cardData2, ...cardData3];


let selectedCardData = null;

document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("cardModal"));

  document.addEventListener("click", function (e) {
    const card = e.target.closest(".card-modal-trigger");
    if (!card) return;

    // Set modal content
    const title = card.dataset.title;
    const img = card.dataset.img; 
    const genre = card.dataset.genre;
    const description = card.dataset.description;
    const id = card.dataset.id;

    selectedCardData = { id, title, img, genre, description };

    document.getElementById("cardTitle").textContent = title;
    document.getElementById("cardModalLabel").textContent = card.dataset.title;
    document.getElementById("modalImage").src = img;
    document.getElementById("modalGenre").textContent = genre;
    document.getElementById("modalDescription").textContent = description;

    // Fetch movieDetails.html and insert
    const contentDiv = document.getElementById("modalExtraContent");
    contentDiv.innerHTML = "Loading...";

    fetch("movieDetails.html")
      .then((res) => res.text())
      .then((html) => {
        contentDiv.innerHTML = html;

        populateMoreLikeThis(genre, id);
     
      // ✅ Check and update button once modal is loaded
      checkMyListStateAndStyleButton();
      });

    modal.show();

      // 🔥 This is the right place to safely bind .onclick
  const myListBtn = document.getElementById("myListBtn");

  myListBtn.onclick = function () {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];

    const exists = myList.some(item => item.id === card.id);
    if (!exists) {
      myList.push(card);
      localStorage.setItem("myList", JSON.stringify(myList));
      alert("Added to your list");

      // Optional: update UI
      myListBtn.textContent = "✓ Added to My List";
      myListBtn.classList.remove("btn-outline-light");
      myListBtn.classList.add("btn-success");
      myListBtn.disabled = true;
    } else {
      alert("Already in your list");
    }
  };

  });

  
  document.addEventListener("click", function (e) {
    if (e.target.matches("#addToListBtn")) {
      const btn = e.target;
  
      if (selectedCardData) {
        let myList = JSON.parse(localStorage.getItem("myList")) || [];
  
        const alreadyExists = myList.some(item => item.id === selectedCardData.id);
        if (!alreadyExists) {
          myList.push(selectedCardData);
          localStorage.setItem("myList", JSON.stringify(myList));
          alert("Added to your list!");
          updateMyListButtonState(btn, true); // ✅ correct button passed
        } else {
          alert("Already in your list.");
          updateMyListButtonState(btn, true);
        }
      }
    }
  });

  
  // Function to update the button style based on list state
function updateMyListButtonState(button, isInList) {
  if (isInList) {
    button.classList.add("btn-success");
    button.classList.remove("btn-outline-light");
    button.innerHTML = `<i class="bi bi-check2-circle"></i> In My List`;
  } else {
    button.classList.remove("btn-success");
    button.classList.add("btn-outline-light");
    button.innerHTML = `<i class="bi bi-plus-circle"></i> Add to My List`;
  }
}

// On modal load (or card click), check if card is in list and style the button
function checkMyListStateAndStyleButton() {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];
  const isInList = myList.some(item => item.id === selectedCardData.id);
  const btn = document.querySelector("#addToListBtn");
  if (btn) {
    updateMyListButtonState(btn, isInList);
  }
}

});

function populateMoreLikeThis(genreString, excludeId) {
  const container = document.getElementById("morelikethiscontainer");
  container.innerHTML = "";

  const row = document.createElement("div");
  row.className = "row g-3";

  const genres = genreString.split(",").map(g => g.trim().toLowerCase());

  const similarCards = allCards.filter(card => {
    if (!card.genre) return false; // skip if genre is undefined
  
    const cardGenres = card.genre.split(",").map(g => g.trim().toLowerCase());
    return card.id !== excludeId && genres.some(g => cardGenres.includes(g));
  }).slice(0, 12);
  
  similarCards.forEach(card => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";

    col.innerHTML = `
      <div 
        class="card bg-transparent text-white h-100 card-modal-trigger" 
        data-id="${card.id}"
        data-title="${card.title}"
        data-img="${card.img}"
        data-genre="${card.genre}"
        data-description="${card.description}"
      >
        <img src="${card.img}" class="card-img-top" alt="${card.title}">
        <div class="card-body text-center">
          <small class="card-title">${card.title}</small>
        </div>
      </div>
    `;
    console.log("Filtered cards:", similarCards);
console.log("Genres matched:", genres);


    row.appendChild(col);
  });

  container.appendChild(row);
}


// ------------------------------------- MY LIST (For Movie Section)-------------------------------------------------------------

document.addEventListener("click", function (e) {
  const listBtn = e.target.closest(".mylist-btn");
  if (!listBtn) return;

  const card =
    listBtn.closest(".card-modal-trigger") || listBtn.closest(".custom-mylist-card");

  if (!card) return;

  const item = {
    title: card.dataset.title,
    img: card.dataset.img,
    genre: card.dataset.genre,
    description: card.dataset.description,
  };

  let myList = JSON.parse(localStorage.getItem("myList")) || [];

  const isAlreadyAdded = myList.some(existing => existing.title === item.title);

  if (!isAlreadyAdded) {
    myList.push(item);
    localStorage.setItem("myList", JSON.stringify(myList));
    listBtn.innerHTML = `<i class="bi bi-check-lg"></i> In My List`;
    listBtn.classList.remove("btn-outline-light");
    listBtn.classList.add("btn-success");
    alert("Added to My List!");
  } else {
    alert("Already in My List!");
  }
});
// ✅ Place this at the very END of script.js
window.addEventListener("DOMContentLoaded", () => {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];

  document.querySelectorAll(".mylist-btn").forEach(btn => {
    const card =
      btn.closest(".card-modal-trigger") || btn.closest(".custom-mylist-card");

    const title = card?.dataset.title;
    if (title && myList.some(item => item.title === title)) {
      btn.innerHTML = `<i class="bi bi-check2-circle"></i> In My List`;
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-success");
    }
  });
});