const cardData = [
    {
      id: "crew",
      title: "Crew",
      img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSaxW7HqP8BldNO2q-jw9IpV0TUDjtjUmhXvK8nKLXcepLsdypyTzzB5QQqNL6Ow8crexz9qWkKeP9lVBcVPC3fb374Gui5CEC8.jpg?r=7dd",
      genre: " Bollywood, Quirky, Comedy ",
      description: "When their airline faces bankruptcy, three desperate flight attendants resort to a high-flying gold smuggling ring to keep their careers afloat."
    },
    {
      id: "shehzada",
      title: "Shehzada",
      img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY0y6kuT4OM_py9HjB_q4ZoTkCx6GpQWfvoBq3s8H1rnnZMG6VNW3wFPA2dgYzL6g_hr3ZAMYVowIXK3p1CeQXpU2THTv-b6LOw.jpg?r=9f9",
      genre: "Bollywood, Exciting, Comedy ",
      description: "After realizing he was switched at birth by a conniving father, a rakish Bantu's life is upended when he becomes the heir to a billionaire."
    },
    {
      id: "aap_jaisa_koi",
      title: "Aap Jaisa Koi",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVn7j1EiWUjaAB7alll1E4pvVifNPtHrlaJylpZsdCd3M6TmdpeZhnN6GCNTHSD9lc7QydD1C4jNjBl1j_AbxOAFmuUF8qOTqUsYvC-TsF8YxxpPz-HjRa7a-BFd0TZP-m-FVu72MldWU1OAYjEsR-hXXRWZBk_84ZljattGYukuXfdYm3aAevEmGuGbKQUItSoGxRv2tngbSG0IRVo6gTRY9uotwUpKL6VxS49IOUrpAOODgZ9kvwUzmHy4TL5Cje0.jpg?r=7aa',
      genre: "Bollywood,Drama, Comedy",
      description: "Shrirenu lives by tradition. Madhu lives unapologetically. When their paths cross, a tender romance unfolds — awkward, sweet but shadowed by patriarchy."
    },
    {
      id: "dream_girl_2",
      title: "Dream Girl 2",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRbsl7e8nMksd4cUpSPml40BxI-N9GatiKO9kcR3Wj35KQN0KshmQOCmy1BB9-WtCVvUSRJEhpqW595IbAeAjkvPkI4zZIZSPnw.jpg?r=e35',
      genre: "Bollywood,Goofy, Romantic, Comedy ",
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
      genre: "Bollywood,Quirky, Comedy, Drama",
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
      genre: " Bollywood,Emotional, Romantic ",
      description: "On a trekking trip, an introvert falls for a charming ex-classmate, whose thirst for adventure drives them apart. Years later, their paths cross again."
    },
    {
      id: "dear_zindagi",
      title: "Dear Zindagi",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb3bgUwc0rmOycDPfJ1_35tCWd3zgVIKDRwr_8u6kBaGurhAx-5YrNVsb4Kdomhxz1HWJqkfKC82PiLBiHxXNGhAxVcxJyJvFcE.jpg?r=d2a',
      genre: "Bollywood, Drama ",
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
      genre: "Comedy,Bollywood , Raunchy",
      description: "Four best friends come together after one gets engaged, working through relationship troubles, family expectations and marriage drama."
    },
    {
      id: "soty",
      title: "Student of the Year",
      img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb7zRdlz15595ImInMQpc0fXTT4mHKBfFxAc8vGhlq-6vLd9TqN1ErhMUppDoD7LRHWOy-6n-DFAp8H3SioFMakS6aXH_Va0D3c.jpg?r=d97',
      genre: "Bollywood,Emotional, Romantic, , Drama",
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
    id: "carry_on",
    title: "Carry-On",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYdYD-DEAQzGmV-Uw2n6doJbjFZvGxU_eg5AyLgzQNhShm1sVlnhcxmPgX83dDtEcPdKKvOuqxEYvm-EwVGyMLxXq73dDdBfBETZpRUYhdTlpAAtfl2EFgS4KEgQJso0bmJK.jpg?r=491", 
    genre: "Action, Thriller",
    description: "A young TSA officer is blackmailed into allowing a deadly nerve agent onboard a Christmas Eve flight carrying 250 people." 
  },
  {
    id: "extraction",
    title: "Extraction",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWGymTRRl1Sdcip0S6FyKg_MGjJFbxl_pNyyu0QQDrujeYDZ00UHQ1M6yzoDx2qucQq2GX_eke9dQb87KKU7Y1z9cA786S7x6IORZ15MBpSEOpw_kb2OaiyLZ8SNJ-gPy3d-.jpg?r=362",
    genre: "Action, Thriller",
    description: "An Australian black-ops mercenary takes on a mission to rescue a kidnapped boy in Dhaka — only to be betrayed and left for dead." 
  },
    {
    id: "one_direction_this_is_us",
    title: "One Direction: This Is Us",
    img: "data:image/jpeg;base64,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", 
    genre: "Documentary, Music, Concert",
    description: "A concert-style, behind-the-scenes chronicle of One Direction’s rise to fame, narrated through concert footage and backstage moments." 
  },
  {
    id: "kinda_pregnant",
    title: "Kinda Pregnant",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXChMbKxEJxcI2f7zd0-a2mR0rRFgvbJ1K9ONFw2R5LHwAT_zyjw1cWDWWDxUHwj5_QlQW-VHIRQ0rr9H5zVX-baWqheqPjWCcxQOg5oqv8N8InR98GvkAY7YZa_FRvP-xc8.jpg?r=898",
    genre: "Comedy",
    description: "Feeling envious of her pregnant colleagues, a teacher decides to fake her own pregnancy—complete with a stolen fake belly." 
  },
  {
    id: "the_electric_state",
    title: "The Electric State",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWJfrYB-ZuRG_5LkceIZeG2Aucr467TWBR52aY3Hy8S_h7kzAWFroRZiv9patUrv2yxFCv3PkIX7kLq2Ev2sUm9-vSsNcDf_IPpPkBwklsH4QEatCDii_9AUmBGGA-0SSjAz.jpg?r=ba3",
    genre: "Sci-Fi, Action, Adventure",
    description: "In a dystopian future, a teen and her robot companion traverse a ruined America, facing danger and self-discovery." 
  },
  {
    id: "the_life_list",
    title: "The Life List",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR_s-niF2UcDpsm8xqJjCihjaUfukLwkQ0heoeeGDVislDT7J05pIJRpioXaU-gfJiR6c7DobHH7K3gR0b7-H800aBhJhnd_8vtOPzS7KwqDdSTlOvnTKxkSNexh2wGLwgm_.jpg?r=f50",
    genre: "Romantic Comedy, Drama",
    description: "After her mother’s death, a woman revisits her childhood goals and discovers pursuing them takes her on a surprising, heartfelt journey." 
  },
  {
    id: "enola_holmes",
    title: "Enola Holmes",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSEEwJtpcDTwTuu0VswYsriG9Q5qn30zXl7WwfiByaM8xqh8w-2One6T2qInhlevHFrqwNrLCh2g_IHBZqmKM0BMzp_I0efgciTphXvqsnTZCctO6h-dIxYd1_SH4aguDqIk.jpg?r=4f8",
    genre: "Mystery, Adventure",
    description: "Teen detective Enola Holmes sets out to find her missing mother — and ends up unmasking a dangerous conspiracy." 
  },
  {
    id: "ziam",
    title: "Ziam",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTzY0yGSDz3L7ptlaMs4pmG5kLzy-jBNHbsct8VKTxXY5R8TUMZZuEpQpEX6PiZALbmmNBkdlr-znnZIjgAh0DLXbWzz8_K8_ed3-Zm4LSRem_xhEcFxHdb3EwNqk6QD1SlR.jpg?r=d2c",
    genre: "Action, Horror, Martial Arts",
    description: "This Thai action-horror blends Muay Thai choreography and zombie survival in a fast-paced, dystopian battle for life." 
  },
  {
    id: "night_always_comes",
    title: "Night Always Comes",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRZbauEQjjC_nrxPEMyhSP2M4WjLHz88Juye2y1Lvf_Oc-PVTT8LY9skLeMxoRhz_pxCfLjb7sFUqVmef6ZfjCW_WJRuAsavG1z4u4ajWORlZFGKkcUePGp_1vHCMG3ieya0iNhJmUfvtPp57ZZx6IL48c7LWd956wxXAOwLNh5nvEUP-GwFSSK8H22FF0Y.jpg?r=d29",
    genre: "Crime, Thriller, Drama",
    description: "A gritty crime thriller starring Vanessa Kirby, about desperate decisions and the fight to avoid losing everything." 
  },
 {
    id: "the_royal_treatment",
    title: "The Royal Treatment",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU94b2yv8DmBXRrv1eLKMJG7_vRpkKDuk7v9kxPqYNJh-N4bImO5FIxrg20leTI7PWA5u2zjhSt6fJsJjx_E278FDOBX0Hw9psg7jEKBTQFactTbu7nBShLZCO1i_aX3EhLz.jpg?r=ba6", 
    genre: "Romantic Comedy, Family, Feel-Good",
    description: "A New York hairdresser lands the chance to do the wedding styling for a charming prince—but sparks fly when her candid spirit clashes with royal etiquette." 
  },
 {
    id: "the_terminal",
    title: "The Terminal",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbcVocSEbPjxUWB1zWTpn466WgIJ6zyG5weRz9uA5IARPitpPe0QuK8Z8fg5I0SikPZeJhEdIxWQDYenoUIs-1EyvaE5xkfKUYk.jpg?r=367", 
    genre: "Comedy, Drama, Romance",
    description: "Stranded in JFK Airport after a coup in his homeland invalidates his passport, Viktor Navorski must make the terminal his temporary home—forming unexpected friendships and rediscovering hope in humanity." 
 },
  {
    id: "happy_gilmore_2",
    title: "Happy Gilmore 2",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdtZ2v3gJw5NTUiMrEF2YJd9Xrc7QDmGNF2XiQHd27MPPOtimHeBhyH7lzWDvDdFvby6xR0YhMJtzdxTbJTpCG4TcRpd2gNJ7SoG_PLKzTcl4GTCYbJbLehVOuv2haZrh_h4xYxqFkNIxY2gQsA4L1ilCZXS_CZpqUw7lFnhbaCuHHz35lMHFhlyAjUCDQn0Lt4eh7I4.jpg?r=142",
    genre: "Comedy",
    description: "The long-awaited sequel to the classic Adam Sandler comedy brings new antics and laughs to the green." 
  }
];

const cardData3 = [
  {
    id: "my_oxford_year",
    title: "My Oxford Year",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQp5B0LdDWm1IgOCX3lCC4wZcftd-YdXghgxN0g4Je6baj0ZcC86tOn8QJoLikzJDyEWHoTYX5J_TdMAi4axJG9c0954gmyWw1W3D8H6vz2uLjg6NYhkJZZv1TwxGypEzsh7QshhywBglQrgeOzy6Mi5kw7V7B4geiJYB6rQ-NxbID8dkMDkrS6JA-W3zkdLDNHqddk0MGtNyKiwZwEpaJP58uOQC_3fuJ6gsa7lIJhEdRg195zmrFU2yN05D-bTZRA.jpg?r=63b", 
    genre: "Romantic Drama",
    description: "A Rhodes Scholar year at Oxford leads to scholarly ambitions and an unexpected romance with her charismatic tutor." 
  },
  {
    id: "lost_in_starlight",
    title: "Lost in Starlight",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcnOAGxKN-t8-9A1vQQWxkIx-K6WPGi5KR2R5SQyKjmCLHerFPG9HIJOUjf-ef1OG-iwzF2nn1c-B_EI0tqyTs4BsojRC8yTjgCMP_wdYOmySNmX7C3Myng7Kn24r78AAMEd.jpg?r=8d7",
    genre: "Romantic Sci-Fi, Drama",
    description: "A scientist on the verge of a Mars mission falls in love with a down-to-earth musician in an interplanetary romance." 
  },
  {
    id: "set_it_up",
    title: "Set It Up",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTV0zCZ5z5h6oZoG0Xi1B1vENFN3cT0ZplPQLmmbiCk67gCEGCzH-Pcdpxri5vWlh6cW8HV3GTI2asqSsMqtjMVpYKXA4DO5dctHYNvEO1gZOn4M7a3uCanBV20BjxfplHIX.jpg?r=247", 
    genre: "Romantic Comedy, Comedy, Feel-Good",
    description: "Two overworked assistants in New York scheme to set up their demanding bosses with each other—only to discover a dangerous chemistry of their own." 
  },
  {
    id: "a_family_affair",
    title: "A Family Affair",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfpaiKurEobVugi66n885F__DWdv3LMyE63bl4i7U_RxNjUxNqcHHdqUSphPpDKYCAozEyeWBml44DS3aACjXJDQkkehkOaec129ksUIZiaFLGZDq2T3ImSDLT_eOfg0_UgV.jpg?r=11a",
    genre: "Romantic Comedy, Drama",
    description: "A widowed writer embarks on a romance with her daughter’s boss — stirring unexpected chemistry in this quirky Netflix rom-com." 
  },
  {
    id: "purple_hearts",
    title: "Purple Hearts",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc0TLIz1lgMcLTj1HSFocKWEVPE4o6XMSLRA-vd67GuGLHkvac_iT6vTY9fuRlZn2fyuG5gAIfDRAf8Gt4-ONzm7GuNRVGxNBcnG8yaIAbPXw7ib6de8j6Ca-gp70S4PZdll.jpg?r=2c8",
    genre: "Romantic Drama, Musical",
    description: "An aspiring singer-songwriter and a Marine marry for benefits but discover real love as they navigate hardship together." 
  },
  {  
    id: "the_kissing_booth",
    title: "The Kissing Booth",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUs46Nh1T1MJ4-atzlkqWOPlI_a8vDaGPcF2hhCSZG-L7C_c7tkH4lsXNdedhCIz9MmPy-ZrtA00Y3xWNMusB9bmMIR-cYjynGAHpZkcCKZruk--RsDHJ8UlGrk-JUviWsbX.jpg?r=4e6", 
    genre: "Romantic Comedy, Teen, Quirky",
    description: "A high school senior risks her friendship when she starts secretly dating her best friend’s older brother after running a kissing booth at the school carnival." 
  },
  {
    id: "your_place_or_mine",
    title: "Your Place or Mine",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSgMOBQQ6oppkVg_K4lh19At45vGWPMGdDcxW-Fc_-nXoiykJ2LdxWetAbqJqdGNS4RDEkuThv_WnHOY3Mh4eWmqNFQ20-mxIite_mUEzBvFzCdm0VcMEH_jCwI-pnhsey9I.jpg?r=817",
    genre: "Romantic Comedy, Slice of Life",
    description: "Two best friends swap houses for a week—only to discover how much they’ve been soulmates all along." 
  },
  {
    id: "along_for_the_ride",
    title: "Along for the Ride",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf4KMViD8z-ziltQrPotyvasukbTxwk77ILOgn8TMqiVTQM6Yi7EK3jWuV7WwkAsud-ZRU_VmYN_wn7uC0ZK0eQbhEgk8alonxFRHpXQKvSwzPbrqw1ot2rBM81DAxi-17qk.jpg?r=204",
    genre: "Romantic Drama, YA",
    description: "Before college, Auden meets a mysterious fellow insomniac and discovers the night can unlock the carefree life she never knew she wanted." 
  },
  {
    id: "la_dolce_villa",
    title: "La Dolce Villa",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZAKiGnngkMTuWc4Txcs7b-XU88K_vDVVwn5LdCDZrQmYzm60_kD1c2DaPPXBTOrjKcbsAgC4Ea1PRQGF2QX0zgRZKu9wB3yBzy8CraMi45ZVfUOcbLua9FD9JAOVtIPieuP.jpg?r=f1e",
    genre: "Romantic Comedy",
    description: "A single dad rushes to Italy to dissuade his daughter from settling—but ends up considering love in the picturesque town himself." 
  },
  {
    id: "lonely_planet",
    title: "Lonely Planet",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSNjVword8GQ86mZ23yuvD-rjVtN2rAMsgbbBEXo1NRJfNs0s1qxZKhrtmKgkeC2KtuTHFcWGnHS1wIXGS4520pyAz5umydOEcUV70JNFQf_eTa2pybJcs5cNCvb-MVPRXX4.jpg?r=0d9",
    genre: "Romantic Drama",
    description: "A writer at a retreat in Morocco explores love in unexpected places when she meets a young man—despite their age gap and personal baggage." 
  },
 {
    id: "love_at_first_sight",
    title: "Love at First Sight",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbjlni-A42YQUDVEf9GbZLW6Ker49amJp6t-YImIOfWMifKH2ePPm4e8S9C3DSQn_E3WVznTVvilidE2V0fOEjv9EMmBOsPIZuY2NwhJLNRhz5mShrS7rKqmMjdanYPRk6Yc.jpg?r=93a",
    genre: "Romantic Comedy, YA",
    description: "A serendipitous meeting at an airport leads to a romance that spans continents and a lifetime—literally measured in love."
  },
 {
    id: "to_all_the_boys_ive_loved_before",
    title: "To All the Boys I've Loved Before",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRzg1LytdS4j647kkbYa4rix7f-rEKBdoSykgkwgGDq8Qa9H15QQTAZrH7G6-x1mMIZfanmYk0P3sftn4fN-gAAH6Vk85Q_gfBZXH33BDYJVSw1cAhdXyiRX-7yWatkAjDcf.jpg?r=13d", 
    genre: "Romantic Comedy, Teen, Feel-Good",
    description: "When her secret love letters are mysteriously mailed out, shy teen Lara Jean finds her quiet high school life turned upside down as she navigates fake dating, unexpected romance, and family bonds."
  }
];

const cardData4 = [
  {
    id: "kpop_demon_hunters",
    title: "K-Pop Demon Hunters",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb9olZk11OKYMpHhpKfDUgxz-Ur8HZl-RUHB8-upgsyjM7dVkI03isL69ZpezVtApcf_YVt_ILSQpw9mVO4iuQNGP-26tYEYPmv1vj8zbagTR-EVfp-hhJxeuBmt4ewh5cutBQNBk4lxlmmIY28Wu63cGKVbx96fImEs9lXiC8xGZCWgywGhqQ_TfOefGH0.jpg?r=b78", 
    genre: "Animated, Fantasy, Music",
    description: "A K-pop girl group saves the world from demon forces—with style, song, and supernatural flair." 
  },
  {
    id: "mononoke_ashes_of_rage",
    title: "Mononoke the Movie: The Ashes of Rage",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYYEXY6owxPKVb2Lwd763TdV2ySUf9q4GWX2fnG3GZ4s03YlJkOx9FqQMpxv1YBLL6mamrzmiivNeufB7XcNLWvIMlSWAkANEEm-jPXWNvzu0b7E3rGWdbRW_mcAyc4LRypmD05eyoqL2awJqV2PYBFO1ze_oPUGx2xaPGfeVIdOHTgspQM2z9_rDvg3UJ6o1SRSG4jo.jpg?r=561",
    genre: "Anime, Supernatural, Horror",
    description: "The Medicine Seller confronts mononoke spirits in Edo-era intrigue — surreal, atmospheric, and hauntingly beautiful." 
  },
  {
    id: "lost_in_starlight",
    title: "Lost in Starlight",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcnOAGxKN-t8-9A1vQQWxkIx-K6WPGi5KR2R5SQyKjmCLHerFPG9HIJOUjf-ef1OG-iwzF2nn1c-B_EI0tqyTs4BsojRC8yTjgCMP_wdYOmySNmX7C3Myng7Kn24r78AAMEd.jpg?r=8d7",
    genre: "Animated, Sci-Fi, Romance",
    description: "Netflix’s first Korean animated original—an interstellar romance unfolds between a scientist and a musician in a sci-fi future."
  },
  {
    id: "violet_evergarden_movie",
    title: "Violet Evergarden the Movie",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRjEN691PummF00S_n0QFh0XgYaRiPqWMsIvACRoIpEyO9WXo-HQ3NTSJ9-Ya_BkmE5HrHFEgA1JxqI27r9-Vaa8H7Pc_Zurkdc.jpg?r=1ec",
    genre: "Anime, Drama, Romance",
    description: "A tender, emotional conclusion to Violet’s story—an ex-soldier learns to feel again through heartfelt letters." 
  },
  {
    id: "words_bubble_up_like_soda_pop",
    title: "Words Bubble Up Like Soda Pop",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQu_qB936R_iACVMFqkmAZ4gjnOlbk2ozHc1ThK78znTVpFfBBHAYt4pCBDSji039NTIEVFq-YQ9McFBIEbzyrMQ6rj_5iWaQg1m6qaP9kDIg-Ubuwzd1PXjdyJLCyI3ve2d.jpg?r=d94",
    genre: "Anime, Romantic, Slice of Life",
    description: "Two introverted teens bond over poetry and music in a sweet, visually vibrant Tokyo setting." 
  },
  {
    id: "flavors_of_youth",
    title: "Flavors of Youth: International Version",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUkU7pk3RS0nhmu8PGmjvnyLS5hWJ8qDBoBgW7HHotJrp_XGPJpvodGWl_yVz2kUA2oERz_R1nJSgqR0_mgsp3tDQQUA72c1TKKlVDI7LCpl6MeVpdVMHtImgyWz738-5yyL.jpg?r=dae",
    genre: "Anime, Anthology, Nostalgia",
    description: "Three interconnected tales about food, memory, and teenage longing—powered by delicate visuals and wistful emotion." 
  },
  {
    id: "dragon_quest_your_story",
    title: "Dragon Quest: Your Story",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRmNoY48Qzo19-SGp4GdBW81PQjckWjYPUzWQ7XVxY1rJOhL_qqFh5yvKnU44Kx-sieDJ6N9ObLQatUK8KgMIAgNimXj1W7BeySqhrTjfrcsrsmndIhwkR76el5uONxraYfH.jpg?r=052",
    genre: "Anime, Fantasy, Adventure",
    description: "A CG adaptation of the beloved JRPG—magic, monsters, and a hero’s epic journey brought to life." 
  },
  {
    id: "altered_carbon_resleeved",
    title: "Altered Carbon: Resleeved",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSzhgAcNL8su4nxBB2UcyGbKI3qbD_snoXZW1y-gH5rVxxoAvSGmAaEBkgTVLj2DzYIPMW2nyfuAOq4MSljm6kQXVHKm-xEXawzowYG4H24v6rCNDYsrqCYp5rSbILtc5Hm0.jpg?r=187",
    genre: "Anime, Sci-Fi, Action",
    description: "A stylish, futuristic spin-off featuring Takeshi Kovacs embroiled in Yakuza wars on a distant planet." 
  },
  {
    id: "godzilla_city_on_edge_of_battle",
    title: "Godzilla: City on the Edge of Battle",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfgpcouS2458VpEuct1tfvmPwvNm7oVhaT5kXB3Cx3nHT9eqg3i1-WoT0S0t_RfZxEQtIQa6AvoIGwbw3_qiBI3RLyPrO5aMetTyXF7ifN1wHShXRHDUlvnxlHNPkquLsY3M.jpg?r=90b",
    genre: "Anime, Sci-Fi, Kaiju",
    description: "Humanity fights back against Godzilla with Mechagodzilla in the second chapter of Netflix’s anime trilogy." 
  },
  {
    id: "godzilla_the_planet_eater",
    title: "Godzilla: The Planet Eater",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZXvOcxDI1Xqy4HNSdpPpYBf4KaautjEf_zRcfd9EpHTjS1Lz5uT5IrQkt5q3HXH5zYzfXn4oLVxvlzzNFsXZAJTANoraPZaI0oaUfgtGodulFf4Q5rZb7nP9Cc0yR0roEkl.jpg?r=d15",
    genre: "Anime, Sci-Fi, Kaiju",
    description: "The apocalyptic finale of the anime Godzilla trilogy, where humanity allies with Godzilla to fight King Ghidorah." 
  },
  {
    id: "porco_rosso",
    title: "Porco Rosso",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeDfz0Jh3xlUlf6z9-GeEaWCVvwkDUZpQw9eS6Zv4Z3khh_MnnBkmFRKCRazL_jVKrKI10K--T54Kw6ZvUETtTViC9L1qEwaHEY.jpg?r=19f",
    genre: "Anime, Fantasy, Adventure",
    description: "A World War I ace turned pig-faced pirate fights sky bandits with wit, charm, and aerial flair." 
  },
  {
    id: "nausicaa_of_valley_of_wind",
    title: "Nausicaä of the Valley of the Wind",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcAabkYgHh5wLX7RupobvF2WuaK1owpUlP-iurBPS8WRWXIPAwGMlg3OymBzwJTSwTyKIFwakpKz8FSL1l29kXfnqv2zfZ3VThs.jpg?r=17d",
    genre: "Anime, Fantasy, Environmental",
    description: "A post-apocalyptic epic where a young princess becomes peace-seeker and warrior in a toxic world." 
  },
  {
    id: "a_whisker_away",
    title: "A Whisker Away",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcdevd3iziFZdCv00VSvHqJiV-e4mR1FtXLt9eEhbsrmcqyYGN3d2vWAq3s2SMCfL-pIeYBTM0EH7_6iHx-yR2acFOoRsm9MNa3SP1qkxegsTcuoq1bV4AqiYkVrQXZ5LgxR.jpg?r=4b1",
    genre: "Anime, Fantasy, Romance",
    description: "A girl disguises herself as a cat to get close to her crush—but realizes she risks losing her human form forever." 
  }
];

const cardData5 = [
  {
    id: "time_cut",
    title: "Time Cut",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUZ4N0PqLdk1dCDXEnre3GPGtq0xJujAaKscdm5nYuFJs539gsSMJIXYVo_ia_v5RBqsg_PqSqmlVq_TOAfc-6O_9GrHBsZFP2qxc_WCCMrGHpjwJPtLI5kdYhVKv0ugxEKC.jpg?r=2e1", 
    genre: "Horror, Slasher, Time Travel",
    description: "A teenager discovers a way to travel back to the 1990s to prevent a brutal high school murder, but altering the past unleashes even deadlier consequences in the present."
  },
  {
    id: "fear_street_prom_queen",
    title: "Fear Street: Prom Queen",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUXy7EcJGDEwDS4KMB1Zmd9SFtC2XadMqzqLn548Z0Wfujl_aG_yGDaz3RTZZS2Sv08vOPqwabTkWRMoc2hoGJ2d9ddTQUiLyusH7lnfkhYy0jCtaMNP3LBLkT9GsXohVmEp.jpg?r=96d",
    genre: "Slasher, Supernatural, Teen Horror",
    description: "A masked killer stalks prom queen candidates at Shadyside High in this nostalgic ’80s-style installment of the Fear Street franchise." 
  },
  {
    id: "revelations",
    title: "Revelations",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ3tyVquQg6yG3DKIotoK6TtOWrOblKJqC_3xka71pCpT8joeHAyqozuHsJjmN9EWwCjRorjL4oNOH_M3ES6pzL_LaSO9yn6alRVuWdwq7h55gIQWmrKR1ojMoEV5k1py0C7.jpg?r=563",
    genre: "Mystery, Thriller, Horror",
    description: "A tense Korean mystery thriller from Yeon Sang-ho and Alfonso Cuarón, adapted from a webtoon—unraveling dark secrets and human fragility." 
  },
  {
    id: "mononoke_ashes_of_rage",
    title: "Mononoke the Movie: Chapter II – The Ashes of Rage",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYYEXY6owxPKVb2Lwd763TdV2ySUf9q4GWX2fnG3GZ4s03YlJkOx9FqQMpxv1YBLL6mamrzmiivNeufB7XcNLWvIMlSWAkANEEm-jPXWNvzu0b7E3rGWdbRW_mcAyc4LRypmD05eyoqL2awJqV2PYBFO1ze_oPUGx2xaPGfeVIdOHTgspQM2z9_rDvg3UJ6o1SRSG4jo.jpg?r=561",
    genre: "Animated, Supernatural, Psychological Horror",
    description: "The Medicine Seller investigates vengeful spirits in Edo-era Japan amidst political intrigue and haunting visuals." 
  },
  {
    id: "frankenstein_del_toro",
    title: "Frankenstein",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTbW6BLmR1UAWtRmAwmM2HyCce8EkaNec2AZ2eN07djbBiguH0ty2TQONSStCHvxndDkhhUc65C_iRWYctyetdIJqLlSQlro4ZV1OnhPcVcifZUiS_Y7voqh5M5jXHP7FeIr6DS7o61iX_s5WheCPg0gbNz2BgDiKKnjcIEY01R6.jpg?r=e39",
    genre: "Gothic, Horror, Drama",
    description: "Guillermo del Toro’s atmospheric adaptation of Mary Shelley’s classic, humanizing the creature in a poetic and emotional gothic tale."
  },
  {
    id: "under_the_shadow",
    title: "Under the Shadow",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUGPRb7BVjqOm6TkY5e2437fUtowfsKjXn5mVcIpRX8XRTx-HL8cQiui6_6Pv-L6EliisUq-0QL2Rk_LobBpsN3qsIYGy48cMMI.jpg?r=719",
    genre: "Psychological Horror, Supernatural",
    description: "A mother and daughter in war-torn 1980s Tehran contend with a sinister supernatural force—and trauma that lingers long after."
  },
  {
    id: "his_house",
    title: "His House",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUoTV_ItfpLQgec_lDKUwPViNfHjwT1IUxibqeucWok-rzOZXqRYREaAd9PmetZfqnLF3wQKu6wRNKKAyzOMq9h-yQ8Gb8m_6s00VDnv27buXvUHhWxtgtvi-iRd0R8XLRlm.jpg?r=e41",
    genre: "Psychological Horror, Social Drama",
    description: "A refugee couple grapples with racism and a horrifying presence in their new British home in this claustrophobic supernatural thriller." 
  },
   {
    id: "the_possession_of_hannah_grace",
    title: "The Possession of Hannah Grace",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYDtN8g3vxLde3SB6DQz1S3qsJFOvbYKbhugAReNWl5iwOW_zNXZQHnDZ5BowkyMyTHrVIdnCIGjzi6EF-SXGpwUWIpgLTHNw2Q.jpg?r=2ef", 
    genre: "Horror, Supernatural, Thriller",
    description: "A troubled ex-cop takes a night-shift job at a morgue, only to discover that a disfigured corpse may harbor a terrifying demonic presence."
  },
  {
    id: "annabelle_creation",
    title: "Annabelle: Creation",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWMFlDzC6X-p7jjHN7GjCxrMb9IQgdH_N4qDga6tVld77nKCa1HyQ27xI4cMb-7DwRlYFutl4lIfXRO3MaSzlzmyhQXzpSUqwJxodZsRM8NayIiLniortyHplKtSznDMpf_R_-84EX6u926Mh8AZnTnhFjOzGNAjxyHRBVkvyA.jpg?r=d67", 
    genre: "Horror, Supernatural, Demons",
    description: "Several years after the tragic death of their daughter, a dollmaker and his wife welcome a group of orphaned girls into their home—only to unleash the sinister power of Annabelle."
  },
  {
    id: "it_chapter_2",
    title: "It Chapter Two",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUd0E3QBFnku8LbhbEOU49tjQujIpOL4J5qBe2t7MOoDwOG7aw9EVpPULrylgyYXRombXh-1Cim-h4-h9WUkToEka5MEKjz4_Vg.jpg?r=a85", 
    genre: "Horror, Supernatural, Thriller",
    description: "Twenty-seven years after defeating Pennywise, the grown-up members of the Losers' Club return to Derry to face their deepest fears and destroy the evil clown once and for all."
  },
  {
    id: "death_whisperer",
    title: "Death Whisperer",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdhf5bxNuRZe-AMQf6U8kphYHQ8d0MMk_F1d9ZotoP9HDkgjdOfqt-j4cGA-hosJc4EVe5rPY7H01dR0RTcaabAanV5fnQQssi8.jpg?r=0cc", 
    genre: "Horror, Asian, Supernatural",
    description: "After moving into a new home, a teenager begins experiencing terrifying visions and whispers from beyond, revealing a dark and dangerous secret tied to his family."
  },
  {
    id: "final_destination_5",
    title: "Final Destination 5",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWS4NDwrZPAAkEMME65DTrWAWPOFNM7Idw0kfD2O7-3HnnRVNrUQfH4VrHCDQJQLAuEAKZvViL46eJv_vHgVAFA_CeLLbDMcy_U.jpg?r=887", 
    genre: "Horror, Thriller, Supernatural",
    description: "A man's premonition of a deadly suspension bridge collapse saves his co-workers' lives, but Death has a plan to reclaim them one by one in gruesome ways."
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
       <div class="card card-modal-trigger navbg text-white"
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
createCarousel("carouselContent4", cardData4, "carousel5");
createCarousel("carouselContent5", cardData5, "carousel6");

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