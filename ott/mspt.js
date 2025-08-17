const movieData = [
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
  
  const movieData1 = [
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
  const movieData2 = [
    {
      id: 'the_waterfront',
      title: 'The Waterfront',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeCoyd1zhlQZkuW2r6h4FTiQ4h1T6b3vkbsYbC2dvvo12J1GYtoDTgtlPwiomd0GU6RZBdnQfaPjil9f4HYTKrtpTyr_kyBhypNPRT4m4xLGoVw3sZyOn2Lvil6Vz7swthWn.jpg?r=426',
      genre:'Crime,Thriller',
      description:"As their storied North Carolina fishing empire decays, the damaged Buckleys grapple to revive their imperiled maritime heritage."
    },
    {
      id: 'ginny_n_georgia',
      title: 'Ginny & Georgia',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaHcyuDQoCed0zXVd9tRu7mbJLj_7yYGFiJd2RdxB3lWst-ZUzUvJqNrMfBlwWbd2yMCT2pDXSQH0KSAUvw_uuKk-3E_NwFaYvoQcnqrCl5JJUgR8y9ie0ddOUvaXvY2-NQw.jpg?r=c0a',
      genre:'Romance,Comedy',
      description:"Angsty 15-year-old Ginny Miller often feels more mature than her 30-year-old mother, the irresistible and dynamic Georgia Miller."
    },
    {
      id: 'bridgerton',
      title: 'Bridgerton',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbb-nqVeQk4ZF2IdccUOo9MdTMg8k70FtYaCdlNHCKSH8IkcLn2Lj084doTDhYzzzwO0Rn6-F2Cl6zdiZLod5eIrmERbPaG4p0bNzrI3CUowPPZZl9AS-p8N9ISY_K8WC-4F.jpg?r=5e5',
      genre:'Soap-opera ,Romance',
      description:'The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.'
    },
    {
      id: 'shadow_hunters',
      title: 'Shadow Hunters',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeo9yeZTCkMG66XzRP-vS0sNkegsw2chS1Z2hjBrieTZsf4_jBqdrDEm7GA1iCxGuPjdjgp7S-alv-u2gitZudaUqdUutYaYLfRq1V7RvVarN5uBGMYGg2J5mFR7Nyfn_0aC.jpg?r=158',
      genre:'Fantasy,Drama',
      description:"After her mother disappears, Clary must venture into the dark world of demon hunting, and embrace her new role among the Shadowhunters."
    },
    {
      id: 'queen_charlotte',
      title: 'Queen Charlotte',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWhaH3T6Ep4KBmAWzprFix0wPM9U8BdDPVH6Xa8FsVILOApcqDlYK0tDmdzDlxSQFzwzbeypizmFDiOzXuq3YWtYsxlzuW1_UGZt2L7vGJA5bHaF13VznEhvx5O6Nr3_HhiW.jpg?r=2f8',
      genre:'History , Romance',
      description:"Betrothed against her will to King George, young Charlotte arrives in London on her wedding day and faces scrutiny from the monarch's cunning mother."
    },
    {
      id: 'heeramandi',
      title: 'Heeramandi',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUH8NFZMMoPr4JHVJVTz0t8ZY3IKkRwitkL5wRWonK7zgc8Olm1rho7z8f0uIzkMcZmi6R8G4JLil1c3qM4UhfZ2EeRvrRGxkyX7vzbu4dynk5YVXTd4LUbrEeNsr7sSySHG.jpg?r=66f',
      genre:'History,Drama',
      description:"Sanjay Leela Bhansali brings his majestic signature flair to stories of love and betrayal in the lives of courtesans in pre-independence India."
    },
    {
      id: 'mismatched',
      title: 'Mismatched',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfMvl5WgjF-iY3jVVYiHQNfDQ3fAJ5h_rBpcISEsI4FoB4mryZdrh_xfhM7lSrP40NxA2wfQATDvBvsJbtFmkLGcy00_kul-237PsbUOB4r5X2rYYRoILGMfYlMoWcZ2pOa9.jpg?r=73d',
      genre:'Rom-com , Drama ',
      description:"A romantic series featuring two people who are not right for each other. The story is about Prajakta's character who is a tech wizard and the guy who is interested in her."
    },
    {
      title: 'A Time Called You',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWjUmYVsT56MdJXeyYwd32UU4gy2-3g7FD2W9ogJRzPb1Y5yM731jcFjlE7l3qoJ07xCpM3BOaEDdBgZSb1JuTFBaCqFIOnTFxrKgEp78fn-8EZIQf7Dj_8fprAkgfTpieeu.jpg?r=202'
    }
    ,
    {
      title: 'Nevertheless',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUY1BKgDcKqxooFXv6dlxNXvF81_rFxWwaj0vWk6r3vptjW1RDO0Mgm_HdqQTLhn32yWwj-rVQewMyQj147z1T4R-K5osLcC2GR1NAwd6tted5iBq-k_3HkOc_pKJH8qZDuN.jpg?r=dff'
    },
    {
        title: 'The Witcher',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf5exow7YR19ou4F_Afma6lC9npbAZqCyzMa2cU0HVaz0mmeAQ5CkqLy_e8zNzjbZrbug44-W3LpYw4Ne-eVmcQD6n0VIJAw20tvFpphszMy_p5IiA-vBMtBr2n2BPbxuyml.jpg?r=23e'
      },
      {
        title: 'Shadow & Bone',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRLlC9Wfhvxkkb0p1GTc96VHT5pBHGvLr886jOx4ByD5jVhKTa18wgubPr5O-87c1Pyj_IAOAmpgubkZPnF8Z6bCFKwYGe9hsFiCDGaK6SqjW7DNkszgl5lRariZb-Whrgz-.jpg?r=d5b'
      },
      {
        title: "Arcane",
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRvoBpI1EKy7W7THnRK4LZ0wlxghT3PNvfctXgEJWJEtNg4MttH5M911iIrx-N9bz9-Vq76b-hAk17y9MQK-7kpaPiRnU_2cA18cskOjMZN_wGmsOKcxFLsOnsyc_nUH7SgR.jpg?r=273'
      }
  ];
  const movieData3 = [
    {
      id: 'emily_in_paris',
      title: 'Emily in Paris',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb509jgLJkqO_KEMFctI9a392FQn1JO_79UNnAikFssW1DtGhoN37IAAcaXSkWtA9NwxFk-jf1z4QeiOstBM32EfLlwyYVjD3IM0__l7qgF4ZCXZI7ACthd8PzmZez-MJxzH.jpg?r=4f9',
      genre:"Rom-com,Drama",
      description:"A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things."
    },
    {
      id: 'peaky_blinders',
      title: 'Peaky Blinders',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTU3_q-CINXVdjlijgk1THbgnzWIGC-eFlZzAVkXiaY66_AYRGgPdX_j3weXYTi9qY_Wv0oDnzFazhGgquAoUQzOBgv6k8bfObyn3uuD0-u2WpNCTsdsBvqUE40uLdZmJWvo.jpg?r=c0e',
      genre:"History,Crime",
      description:"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
    },
    {
      id: 'the_glory',
      title: 'The Glory',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVfPGa77dyP88-Xt_q-1tFannPOu5z0IK0DpvzCAZQUIPmWD5S8H2COg1wpWnIdBmRnxz3rFkobaI53h0zDaW9A7bNskvscjOkM9XWv7TT-_7KKnGgQqLt680sXelr48HssQ.jpg?r=3d2',
      genre:"thriller, Melodrama",
      description:"A woman lives for absolute revenge against her childhood bullies who destroyed her life"
    },
    {
      id: 'the_crown',
      title: 'The Crown',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSMGPuPUDfc6l_t-QWv4ZLQ_0gK38ne168mjsP-FUSdnPu6FUCQyyQ0Q4bSstaY55d2cq9kpBQLbOwY3h8YVXnX5cEgxxi09WTq-_JhgKxaFKHMre_IMwad8WYkV1ALTIQV.jpg?r=8c1',
      genre:"History, Drama",
      description:"Follows the political rivalries and romances of Queen Elizabeth II's reign and the events that shaped Britain for the second half of the 20th century."
    },
    {
      id: 'gyeongseong_creature',
      title: 'Gyeongseong Creature',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaQ6H8XsFP6xCa75gjZlmvzvrCxQ1SZmXeYFYhP2wVk93XAMpbrlu3Tsw7k8hG_sPYXsRNTlZD3IQOSQED7FR7NHmmfXILWBo0Nm__wkuBgjm-lQFMWRV8FE_qbLHunLQ6_m.jpg?r=868',
      genre:"Horror, Action",
      description:"In Spring 1945 in Gyeongseong, during Japanese rule over Korea, two young adults confront a strange creature born of greed, and battle against it for survival."
    },
    {
      id: 'you',
      title: 'YOU',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZnV23ioUzxMyYq1vfXIoRQVcwe-Fad5gsc_PHHR2nZ96KIjtdGSY1Zf4PetEuTPaaqyJzAXPLpekwasxjVhkIrVuOWEeW7Ox_dN_kQl0QZ67yaZI2Tsenne8AeEHoY987Vn.jpg?r=c37',
      genre:"Psychological Thriller, Romance",
      description:"A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by"
    },
    {
      id: 'dahmer',
      title: 'DAHMER',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRltWuhErhcS6v8LsIuk4yVGFYSjC5Hx6eOYo79yd7X3dtGdKhFptBE76eJxwgb0m5G7Hh9st_7ht55c2rtfwPOLO2S7JNh-aX9I1VMUdhPYdhI9xo-fb7sXDYVr0RhHANEs.jpg?r=385',
      genre:"Drama, Suspense",
      description:"Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?"
    },
    {
      id: '13_reasons_why',
      title: '13 Reasons Why',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWq8LpFBZgua51HS6zqDNme5_Cr_Q43mdqpqvr8QKKeUsXeOv9cy8J01QmMziB1xVWSh63jE4QiyLSmeu5B2QSG5x7B2Jt9OwiJLvnEZ5vKawZXjLP9nMBAvb6uDofgzyv7G.jpg?r=ba6',
      genre:"Drama, Mystery",
      description:"Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life."
    }
    ,
    {
      id: 'inventing_anna',
      title: 'Inventing Anna',
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXMJpokioAH5ge2GxnMq7TAlVO3utBWEG0SQGajtY-XAYbqU1e6FRLq05G4mFthoKLXxwZyE5kMR6fIP_cyGnc6nFOHZv9d0DEwLpvfEcC1Y2UBxYg0pyuZOZp43wpaJOH1K.jpg?r=44e',
      genre:"Crime, Soap-Opera",
      description:"A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York's social scene - and stole their money as well."
    },
    {
        id: 'business_proposal',
        title: 'Business Proposal',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa6R0zawmvBIlpRMxH9N2cD-aKWcmyqM8q3d_u41QnzVuaTgU8vxi1cWa4Q5oLSVCRjVDIoC0opTfZO_s-hyMzZl1_8PGK449ohLgy9CvPNXpKKkgCeta667RBPXODjZ2UWr.jpg?r=095',
        genre:"Rom-Com, Action",
        description:"In disguise as her friend, Ha-ri shows up to a blind date to scare him away. But plans go awry when he turns out to be her CEO - and makes a proposal."
      },
      {
        id: 'my_name',
        title: 'My Name',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTAqZM4S68FUJu4QTWOQWZy-KYMh4kwn3TohXL_aBEYLrjgDlsQ2QZXyKSNLvRB24d5L-D3v0gXmfCmIM11M5ePWYSWRunVPd7MSxtngriUB8vLMH8-6Oq0m7A4Y-Rvvk4QM.jpg?r=c71',
        genre:"Action, Thriller",
        description:"The story about a woman who joins an organized crime ring and infiltrates the police as an undercover agent in order to find out the truth about her father's death."
      },
      {
        id: "mlwtwb",
        title: "My Life With The Walter Boys",
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbDtAv6HGIaSQvwDsHe1I1D9DrXIUH21Lwq2QoRd1EH56yCvEoR3xfR-BFr6hrdRxIu3GSbdWS_ZQ83ns4_lETpTUXNKvNwQrTwlcrW2F9-sTmg782-IgQe6ZGSIeZVJ8HX9.jpg?r=5b9',
        genre:"Romance, Drama",
        description:"Jackie Howard's life is disrupted by a freak accident, she is ripped from her home and has to start over on a ranch in Colorado, with her guardian and a family of 9 boys, and 1 girl."
      }
  ];


// ----------------- CAROUSEL CREATION -----------------
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
       <div class="card card-modal-trigger navbar text-white"
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


//   // ----------------- RENDER ALL CAROUSELS -----------------
  createCarousel("movieContent", movieData, "movieCarousel1");
  createCarousel("movieContent1", movieData1, "movieCarousel2");
  createCarousel("movieContent2", movieData2, "movieCarousel3");
  createCarousel("movieContent3", movieData3, "movieCarousel4");
  createCarousel("movieContent4", movieData, "movieCarousel5");
  createCarousel("movieContent5", movieData2, "movieCarousel6");

// ----------------- MODAL HANDLING -----------------
const allCards = [...movieData, ...movieData1, ...movieData2, ...movieData3];



let selectedCardData = null;

document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("cardModal1"));

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

    document.getElementById("cardTitle1").textContent = title;
    document.getElementById("cardModalLabel1").textContent = card.dataset.title;
    document.getElementById("modalImage1").src = img;
    document.getElementById("modalGenre1").textContent = genre;
    document.getElementById("modalDescription1").textContent = description;

    // Fetch movieDetails.html and insert
    const contentDiv = document.getElementById("modalExtraContent1");
    contentDiv.innerHTML = "Loading...";

    fetch("movieDetails.html")
      .then((res) => res.text())
      .then((html) => {
        contentDiv.innerHTML = html;

        populateMoreLikeThis(genre, id);

        // // Re-attach any scripts
        // const scripts = contentDiv.querySelectorAll("script");
        // scripts.forEach((oldScript) => {
        //   const newScript = document.createElement("script");
        //   if (oldScript.src) {
        //     newScript.src = oldScript.src;
        //   } else {
        //     newScript.textContent = oldScript.textContent;
        //   }
        //   document.body.appendChild(newScript);
        //   oldScript.remove();
        // });
        
        // initMovieDetailsCarousel();
     
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

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('watch-now-btn')) {
      const videoId = e.target.getAttribute('data-id');
      window.location.href = `video.html?videoId=${videoId}`;
    }
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

  // const similarCards = allCards.filter(card => {
  //   const cardGenres = card.genre.split(",").map(g => g.trim().toLowerCase());
  //   return card.id !== excludeId && genres.some(g => cardGenres.includes(g));
  // }).slice(0, 9);
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


  