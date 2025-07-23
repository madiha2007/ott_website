// ----------------- CARD DATA -----------------
const cardData = [
    {
      id: "money_heist",
      title: "Money Heist",
      img: "https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
      genre: "Action, Drama",
      description: "A criminal mastermind plans the biggest heist in history. An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    },
    {
      id: "alice_borderland",
      title: "Alice in Borderland",
      img: "https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9MbR1kXcEjxQ3339N7chhCF9aaFDaQ7rvuYwI5RnTlNgAk1BmGN4tYZCxNuoOIivaRl-Z_siJeRMoBFisErN7PnAT1Q-eL5Ld8etFRR3K25MLAcI7jeOkkEuXbtOaOen-Z.jpg?r=400",
      genre: "Thriller, Sci-Fi",
      description: "A group of friends find themselves in a deadly game. Arisu - a listless, jobless and video-game-obsessed young man - suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive."
    },
    {
      id: "all_of_us_dead",
      title: "All of us are dead",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdOdSuAwEvu_jZKZr4g_GHiP3YpfGSkqDi5yisAEpNVwAv-raxL1fcezQZn4aEu7ixtzlsbRg2GlY2_dkqo9QJyaJgz0Qkr1tH76wgOK9ulsSgZDe_QhgqxBTPeTJgIRGGSI.jpg?r=d40',
      genre: "Horror, Thriller",
      description: "A zombie outbreak traps students in their high school. A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected."
    },
    {
      id: "kpop_demon_hunters",
      title: "Kpop Demon Hunters",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRDc-cnVqrssAwUcUwKtpmcyKLgBnI2FEpjrCjLZT6LOnVktgaNSYtXCCvBGW0EWbAKjP1mJoAZ6JU72PC1a_tA9Rp31i5KJRvZJybfBtiP-pUYy96AquisPovRdV8slQAmepGcsDVQzcM_qUDzdZGPTTIczWyu8QfazIjAMWsz35zvd3AQhjHy1Q_ozGdjNkOkboY-ooQJdFTtx1jwkjQbrYsz-9S77cVmcKnOcxs9XgFMDeQwoi92kLOE0kFn5Nk8.jpg?r=b78',
      genre: "Action, Musical",
      description: "K-pop stars become demon hunters in secret. A world-renowned K-Pop girl group balance their lives in the spotlight with their secret identities as demon hunters."
    },
    {
      id: "vincenzo",
      title: "Vincenzo",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b',
      genre: "Drama, Action",
      description: "A Korean-Italian mafia lawyer takes on corruption. During a visit to his motherland, a Korean-Italian Mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice."
    },
    {
      id: "queen_of_tears",
      title: "Queen of Tears",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauaf_pjBXX9G_dl-IYBIWLYWexsTpaSGU0ulKaCMLmsn_ew6nmLGev9nFJJ7bRDMaKAGE0G2Egdgy30VgHbVI7c0-IeOxmMp5j-0AoMIuToZbPzDmGzCQjZIN_OLvtEARjE.jpg?r=3e4',
      genre: "Romance, Comedy",
      description: "A royal couple navigates love and loss. A miraculous love story of a married couple overcoming a dizzying crisis."
    },
    {
      id: "never_have_i_ever",
      title: "Never have I Ever",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfyfO998JNWAx6snVHf7_ydlwuk8I1tPQCttH_W4OCzmhkWufyFODQaEnnftder7T2geYuzZuznJiFtGd8GxlgCATqrUxV8CkgdJkuyboFlkdXKsAmUwSH4kB8UeD0NT7SVp.jpg?r=fb2',
      genre: "Romance, Comedy",
      description: "Teen drama comedy of an Indian-American girl. The complicated life of a first-generation Indian-American teenage girl, inspired by Mindy Kaling's own childhood."
    },
    {
      id: "one_piece",
      title: "One Piece",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSul_dyl7Vp3dMc_7KoET72knNATy8bgAjoJj9KpYYeqK3RaxRd2-S1pIqDUVsb74gPp5fiAYNFV5iNq-LYmTLFuZBVn3cOmyRhtJL0bHAqejMOv3T0kslLRDKvH6WujDZd.jpg?r=4fc',
      genre: "Adventure, Fantasy",
      description: "Monkey D. Luffy sails the Grand Line for treasure. Rubber-bodied dreamer Monkey D. Luffy gathers an eclectic pirate crew and braves the perilous Grand Line, battling tyrants and monsters to claim the legendary 'One Piece' and become King of the Pirates."
    },
    {
      id: "stranger_things",
      title: "Stranger Things",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68',
      genre: "Horror, Supernatural",
      description: "Kids face creatures from another dimension. In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
    },
    {
      id: "weak_hero",
      title: "Weak Hero",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVHwufC2TYmY7piel8bPWwvkzFWTSDSkw-rDAfAjybbU9gEVzlaTr59OKGzLGO91NafROT3m6kJGGMGV4WtWpTd8Cxm2vbVuKUajTVW6HOcm0zWj63qcr7HBxl_I5eAVHkDb.jpg?r=adc',
      genre: "Action, Thriller",
      description: "A quiet genius stands up to bullies in brutal ways. Yeon Shi-eun is a model student, who ranks at the top at his school. Physically, he appears like a weak boy, but, by using his smarts, tools, and psychology, he fights against violence that takes place inside and outside of his school."
    },
    {
      id: "lucifer",
      title: "Lucifer",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV7ZN16RyF_NX1jifDL0gUttbuv6g7dMEFopItw0DTCDV8GpTb0-9A30fpIkA7KrqihYndFFyYnTQSGOQrkL2K00kv6NUfoUWq4DlcZOYkCMoVwcuZFn9WkQLCg_HQoQkpM2.jpg?r=1c3',
      genre: "Action, Comedy",
      description: "The devil helps the LAPD solve crimes. Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels."
    },
    {
      id: "wednesday",
      title: "Wednesday",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5URtqG36cHmUzXPrn9qaN1prCdZB3Llrhe8w4fvPKUxMp1phgN738mP1ctTe9QshMH8f0NlK-GdSAZDYJpXtvofUffd8o4BQuB7AKZogG-KbG0kR5H5w9kp3pXbogjGHSN.jpg?r=082',
      genre: "Horror, Comedy",
      description: "Wednesday Addams investigates a monster mystery. Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents."
    }
  ];
  
  const cardData1 = [
    {
      id: "kpop_demon_hunters",
      title: "Kpop Demon Hunters",
      img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRDc-cnVqrssAwUcUwKtpmcyKLgBnI2FEpjrCjLZT6LOnVktgaNSYtXCCvBGW0EWbAKjP1mJoAZ6JU72PC1a_tA9Rp31i5KJRvZJybfBtiP-pUYy96AquisPovRdV8slQAmepGcsDVQzcM_qUDzdZGPTTIczWyu8QfazIjAMWsz35zvd3AQhjHy1Q_ozGdjNkOkboY-ooQJdFTtx1jwkjQbrYsz-9S77cVmcKnOcxs9XgFMDeQwoi92kLOE0kFn5Nk8.jpg?r=b78',
      genre: "Action, Musical",
      description: "K-pop stars become demon hunters in secret. A world-renowned K-Pop girl group balance their lives in the spotlight with their secret identities as demon hunters."
    },
    {
      id: 'trainwreck',
      title: 'Trainwreck: Poop Cruise',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWFiZZ41GGG3GbYUIc1LzYIUNBmuNpWdkJ3fnCIQHwbIuMrw_hjul9WJqKVsZfQ_P8ZvpMA7foyJjSaL4wfGiB1fKx-K7WlaAW8Wb8R4GX_oCVSP7PxqSg3-FeVXHreBOVRb.jpg?r=3fa',
      genre:'Documentary ,Real life events',
      description:'A luxury cruise turns disastrous when an engine fire cuts power to the entire ship. 4,000 passengers face failing systems, sewage leaks, and food shortages, sparking passenger unrest and media coverage of "The Poop Cruise."'
    },
    {
      id: 'straw',
      title: 'Straw',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbhGGiTzSlOCFBL6eXtFGoiminkUkjB6PnYWNODTXczH4mY6GuKM30XixU2tui77nCM76ga3nRHodeVgEtYMPwmSR759BBIq3Fhi5DV2dtvZ6mJ4dfedHpi3eXCXaOXkNIG7.jpg?r=809',
      genre:'Psychological, Thriller',
      description:'A single mother navigates a series of unfortunate events, leading her down an unforeseen path where she becomes embroiled in a situation she never envisioned, finding herself at the center of suspicion in an indifferent world.'
    },
    {
      id: 'the_intern',
      title: 'The Intern',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABempONPM10G3shXnqkR3wRcw4KQi0O5VUlw9hISzjhn2b78CpyYWvsS9IQB4ICgmZ4kgTQQLZaUa6i8wLR9jwhZK3uZPWuUEUdo.jpg?r=d7e',
      genre:'Comedy , Romance',
      description:"Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin."
    },
    {
      id: 'land_of_bad',
      title: 'Land of Bad',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXU2CNHCK2qrvBC9jJP-7qMC3IgkN9gflPHOYwTyjjx6JaOYFgQAR8_LDTiLbzXqAbfL-TXxGGVgtq8qvb8vRUQdCvS25Psf-Mo.jpg?r=a7d',
      genre:'Action ,Thriller',
      description:'A Delta Force team fights for survival as an Air Force drone pilot becomes its eyes in the sky'
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
      id: 'sing',
      title: 'Sing',
      img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ1e8IVzElN95RAGnrSEtlK5UKoAgIcH4yAbPxiG8gFdeQrL_FrgYLCyQcvjPMosNLQK3JIz0xALu2ZYUVmX6FgNC9LK5ynWT4A.jpg?r=df4',
      genre:'Musical , Comedy',
      description:"In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists find that their lives will never be the same."
    },
    {
        id: 'raid_2',
        title: 'Raid 2',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcUX3kCd9YueT8M2ZIXL5Ds-y2kDwNOHXKMxSYboksYSVj4LnQNFhr7Fcd8OHIIHSskwm1-G1NtwTtYGEJnLn4VW2s15CxY8qSE.jpg?r=f75',
        genre:'Action , Thriller',
        description:"In 1989 Rajasthan, IPS officer Patnaik raids a palace but fails. After requesting a bribe, he's transferred to Bhoj, where he investigates Dada Bhai, a respected local figure. Suspended after a failed raid, he uncovers hidden truths."
      },
      {
        id: 'exterritorial',
        title: 'Exterritorial',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVjss7LlfolpJWuDPeuYDnWZZpVSNxATncak2_BbfRKT-6LMurQflM9xhi5FAQLi6VvBuzyQjC7JREMeeJs_im97bm0MhrCtLJQOr5hnYyrnVCcBwX5DBJuKIA1A6CXhLakb.jpg?r=76e',
        genre:'Thriller ,Drama',
        description:"When a soldier's son vanishes at a US consulate, she illegally remains on the premises to search for him, unknowingly entangling herself in a dangerous conspiracy."
      },
      {
        id: "a_widows_game",
        title: "A Widow's Game",
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEWAC_QeolWpGjlEDqNOCbpMIGAQpOGIeTm9QTKYjXS9YZelSCSoNZDKpZ_JHQZ9OEIQLOPi7QojyHHlD3kc6Fbu96qIsTngtghWgqIhlqVaHzFTUwbQmFOpsUq03t9V6yl.jpg?r=4f2',
        genre:'Crime , Mystery',
        description:"A murder mystery about a young widow who is the prime suspect in her husband's stabbing death."
      }
  ];
  const cardData2 = [
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
  const cardData3 = [
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
  // function createCarousel(containerId, cards, carouselId) {
  //   const container = document.getElementById(containerId);
  //   const cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
  
  //   for (let i = 0; i < cards.length; i += cardsPerSlide) {
  //     const slide = document.createElement('div');
  //     slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
  //     const row = document.createElement('div');
  //     row.className = 'row g-4 justify-content-center';
  
  //     cards.slice(i, i + cardsPerSlide).forEach(card => {
  //       const col = document.createElement('div');
  //       col.className = 'col-4 col-md-3';
  //       col.innerHTML = `
  //        <div class="card card-modal-trigger bg-dark text-white"
  //      data-title="${card.title}"
  //      data-img="${card.img}"
  //      data-genre="${card.genre}"
  //      data-description="${card.description}">
  //   <img src="${card.img}" class="card-img-top" />
  //   <div class="card-body text-center">
  //     <small class="card-title">${card.title}</small>
  //   </div>
  // </div>
  // `;
          
  //       row.appendChild(col);
  //     });
  
  //     slide.appendChild(row);
  //     container.appendChild(slide);
  //   }
  // }
  
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
  
  
  // ----------------- RENDER ALL CAROUSELS -----------------
  createCarousel("carouselContent", cardData, "carousel1");
  createCarousel("carouselContent1", cardData1, "carousel2");
  createCarousel("carouselContent2", cardData2, "carousel3");
  createCarousel("carouselContent3", cardData3, "carousel4");
  createCarousel("carouselContent4", cardData, "carousel5");
  createCarousel("carouselContent5", cardData2, "carousel6");
  
  // ----------------- MODAL HANDLING -----------------
  const allCards = [...cardData, ...cardData1, ...cardData2, ...cardData3];
  
  // document.addEventListener("DOMContentLoaded", () => {
  //   const modal = new bootstrap.Modal(document.getElementById("cardModal"));
  
  //   // Trigger card click (update selector as per your card structure)
  //   document.addEventListener("click", function (e) {
  //     const card = e.target.closest(".card-modal-trigger");
  //     if (!card) return;
  
  //     // Set modal data
  //     document.getElementById("cardTitle").textContent = card.dataset.title;
  // document.getElementById("cardModalLabel").textContent = card.dataset.title; // ✅ this line sets the header title
  
  //     document.getElementById("modalImage").src = card.dataset.img;
  //     document.getElementById("modalGenre").textContent = card.dataset.genre;
  //     document.getElementById("modalDescription").textContent = card.dataset.description;
  
  //     const contentDiv = document.getElementById("modalExtraContent");
  //     contentDiv.innerHTML = "Loading...";
  
  //     fetch("movieDetails.html")
  //   .then((res) => res.text())
  //   .then((html) => {
  //     contentDiv.innerHTML = html;
  
  //     // ✅ Initialize the carousel after HTML is inserted
  //     initMovieDetailsCarousel();
  //   });
  
  
  //     modal.show();
  //   });
  // });
  
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
  
          // Re-attach any scripts
          const scripts = contentDiv.querySelectorAll("script");
          scripts.forEach((oldScript) => {
            const newScript = document.createElement("script");
            if (oldScript.src) {
              newScript.src = oldScript.src;
            } else {
              newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
            oldScript.remove();
          });
          initMovieDetailsCarousel();
          // OPTIONAL: re-init carousel if inside modal
          // const carousel = document.querySelector("#cardCarouselm");
          // if (carousel) {
          //   new bootstrap.Carousel(carousel);
          // }
        });
  
      modal.show();
    });
  
    // Listen for "My List" button clicks (from external HTML)
    document.addEventListener("click", function (e) {
      if (e.target.matches("#addToListBtn")) {
        if (selectedCardData) {
          let myList = JSON.parse(localStorage.getItem("myList")) || [];
          if (!myList.find(item => item.id === selectedCardData.id)) {
            myList.push(selectedCardData);
            localStorage.setItem("myList", JSON.stringify(myList));
            alert("Added to your list!");
          } else {
            alert("Already in your list.");
          }
        }
      }
    });
  });
  
  
  
  
  // movie details script
  function initMovieDetailsCarousel() {
    const moreLikeThisData = [
      {
        title: 'Money Heist',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326'
      },
      {
        title: 'Alice in Borderland',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9MbR1kXcEjxQ3339N7chhCF9aaFDaQ7rvuYwI5RnTlNgAk1BmGN4tYZCxNuoOIivaRl-Z_siJeRMoBFisErN7PnAT1Q-eL5Ld8etFRR3K25MLAcI7jeOkkEuXbtOaOen-Z.jpg?r=400'
      },
      {
        title: 'All of us are dead',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdOdSuAwEvu_jZKZr4g_GHiP3YpfGSkqDi5yisAEpNVwAv-raxL1fcezQZn4aEu7ixtzlsbRg2GlY2_dkqo9QJyaJgz0Qkr1tH76wgOK9ulsSgZDe_QhgqxBTPeTJgIRGGSI.jpg?r=d40'
      },
      {
        title: 'Kpop Demon Hunters',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRDc-cnVqrssAwUcUwKtpmcyKLgBnI2FEpjrCjLZT6LOnVktgaNSYtXCCvBGW0EWbAKjP1mJoAZ6JU72PC1a_tA9Rp31i5KJRvZJybfBtiP-pUYy96AquisPovRdV8slQAmepGcsDVQzcM_qUDzdZGPTTIczWyu8QfazIjAMWsz35zvd3AQhjHy1Q_ozGdjNkOkboY-ooQJdFTtx1jwkjQbrYsz-9S77cVmcKnOcxs9XgFMDeQwoi92kLOE0kFn5Nk8.jpg?r=b78'
      },
      {
        title: 'Vincenzo',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b'
      },
      {
        title: 'Queen of Tears',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauaf_pjBXX9G_dl-IYBIWLYWexsTpaSGU0ulKaCMLmsn_ew6nmLGev9nFJJ7bRDMaKAGE0G2Egdgy30VgHbVI7c0-IeOxmMp5j-0AoMIuToZbPzDmGzCQjZIN_OLvtEARjE.jpg?r=3e4'
      },
      {
        title: 'Never have I Ever',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfyfO998JNWAx6snVHf7_ydlwuk8I1tPQCttH_W4OCzmhkWufyFODQaEnnftder7T2geYuzZuznJiFtGd8GxlgCATqrUxV8CkgdJkuyboFlkdXKsAmUwSH4kB8UeD0NT7SVp.jpg?r=fb2'
      },
      {
        title: 'One Piece',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSul_dyl7Vp3dMc_7KoET72knNATy8bgAjoJj9KpYYeqK3RaxRd2-S1pIqDUVsb74gPp5fiAYNFV5iNq-LYmTLFuZBVn3cOmyRhtJL0bHAqejMOv3T0kslLRDKvH6WujDZd.jpg?r=4fc'
      }
      ,
      {
        title: 'Stranger Things',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68'
      },
      {
          title: 'Weak Hero',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVHwufC2TYmY7piel8bPWwvkzFWTSDSkw-rDAfAjybbU9gEVzlaTr59OKGzLGO91NafROT3m6kJGGMGV4WtWpTd8Cxm2vbVuKUajTVW6HOcm0zWj63qcr7HBxl_I5eAVHkDb.jpg?r=adc'
        },
        {
          title: 'Lucifer',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV7ZN16RyF_NX1jifDL0gUttbuv6g7dMEFopItw0DTCDV8GpTb0-9A30fpIkA7KrqihYndFFyYnTQSGOQrkL2K00kv6NUfoUWq4DlcZOYkCMoVwcuZFn9WkQLCg_HQoQkpM2.jpg?r=1c3'
        },
        {
          title: 'Wednesday',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5URtqG36cHmUzXPrn9qaN1prCdZB3Llrhe8w4fvPKUxMp1phgN738mP1ctTe9QshMH8f0NlK-GdSAZDYJpXtvofUffd8o4BQuB7AKZogG-KbG0kR5H5w9kp3pXbogjGHSN.jpg?r=082'
        }
      ];
    const carouselContentm = document.getElementById('carouselContentm');
    if (!carouselContentm) return;
  
    const cardsPerSlide = window.innerWidth < 600 ? 2 : 3;
  
    for (let i = 0; i < moreLikeThisData.length; i += cardsPerSlide) {
      const slide = document.createElement('div');
      slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
      const row = document.createElement('div');
      row.className = 'row g-3 justify-content-center';
  
      moreLikeThisData.slice(i, i + cardsPerSlide).forEach(card => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3';
        col.innerHTML = `
          <div class="card bg-transparent text-white">
            <img src="${card.img}" class="card-img-top" alt="${card.title}">
            <div class="card-body text-center">
              <small class="card-title">${card.title}</small>
            </div>
          </div>`;
        row.appendChild(col);
      });
  
      slide.appendChild(row);
      carouselContentm.appendChild(slide);
    }
  
    new bootstrap.Carousel(document.querySelector("#cardCarouselm"));
  }
  
  
  // my list
  document.addEventListener("click", function (e) {
    const listBtn = e.target.closest(".btn-outline-light"); // Adjust if needed
    if (listBtn && listBtn.textContent.includes("My List")) {
      const card = listBtn.closest(".card-modal-trigger");
  
      if (card) {
        const item = {
          title: card.dataset.title,
          img: card.dataset.img,
          genre: card.dataset.genre,
          description: card.dataset.description,
        };
  
        let myList = JSON.parse(localStorage.getItem("myList")) || [];
  
        // Avoid duplicates
        if (!myList.some(existing => existing.title === item.title)) {
          myList.push(item);
          localStorage.setItem("myList", JSON.stringify(myList));
          alert("Added to My List!");
        } else {
          alert("Already in My List!");
        }
      }
    }
  });
  
  /*  
  cardData       content
             top picks for you Today
  1           top 10 movies
  2           top 10 series
  3           Critically accaimled
  */
  
  
  // // ----------------- CARD DATA -----------------
  // const cardData = [
  //   {
  //     id: "money_heist",
  //     title: "Money Heist",
  //     img: "https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
  //     genre: "Action, Drama"
  //   },
  //   {
  //     id: "alice_borderland",
  //     title: "Alice in Borderland",
  //     img: "https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9MbR1kXcEjxQ3339N7chhCF9aaFDaQ7rvuYwI5RnTlNgAk1BmGN4tYZCxNuoOIivaRl-Z_siJeRMoBFisErN7PnAT1Q-eL5Ld8etFRR3K25MLAcI7jeOkkEuXbtOaOen-Z.jpg?r=400",
  //     genre: "Thriller, Sci-Fi",
  //     description: 'A group of friends find themselves in a deadly game.'    
  //   },
  //   {
  //     id: "all_of_us_dead",
  //     title: 'All of us are dead',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdOdSuAwEvu_jZKZr4g_GHiP3YpfGSkqDi5yisAEpNVwAv-raxL1fcezQZn4aEu7ixtzlsbRg2GlY2_dkqo9QJyaJgz0Qkr1tH76wgOK9ulsSgZDe_QhgqxBTPeTJgIRGGSI.jpg?r=d40',
  //     genre:"Horror,Thriller"
  //   },
  //   {
  //     id: "kpop_demon_hunters",
  //     title: 'Kpop Demon Hunters',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRDc-cnVqrssAwUcUwKtpmcyKLgBnI2FEpjrCjLZT6LOnVktgaNSYtXCCvBGW0EWbAKjP1mJoAZ6JU72PC1a_tA9Rp31i5KJRvZJybfBtiP-pUYy96AquisPovRdV8slQAmepGcsDVQzcM_qUDzdZGPTTIczWyu8QfazIjAMWsz35zvd3AQhjHy1Q_ozGdjNkOkboY-ooQJdFTtx1jwkjQbrYsz-9S77cVmcKnOcxs9XgFMDeQwoi92kLOE0kFn5Nk8.jpg?r=b78',
  //     genre:"Action,Musical"
  //   },
  //   {
  //     id: "vincenzo",
  //     title: 'Vincenzo',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b',
  //     genre:"Drama,Action"
  //   },
  //   {
  //     id: "queen_of_tears",
  //     title: 'Queen of Tears',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauaf_pjBXX9G_dl-IYBIWLYWexsTpaSGU0ulKaCMLmsn_ew6nmLGev9nFJJ7bRDMaKAGE0G2Egdgy30VgHbVI7c0-IeOxmMp5j-0AoMIuToZbPzDmGzCQjZIN_OLvtEARjE.jpg?r=3e4',
  //     genre:"Romance,Comedy"
  //   },
  //   {
  //     id: "never_have_i_ever",
  //     title: 'Never have I Ever',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfyfO998JNWAx6snVHf7_ydlwuk8I1tPQCttH_W4OCzmhkWufyFODQaEnnftder7T2geYuzZuznJiFtGd8GxlgCATqrUxV8CkgdJkuyboFlkdXKsAmUwSH4kB8UeD0NT7SVp.jpg?r=fb2',
  //     genre:"Romance,Comedy"
  //   },
  //   {
  //     id: "one_piece", 
  //     title: 'One Piece',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSul_dyl7Vp3dMc_7KoET72knNATy8bgAjoJj9KpYYeqK3RaxRd2-S1pIqDUVsb74gPp5fiAYNFV5iNq-LYmTLFuZBVn3cOmyRhtJL0bHAqejMOv3T0kslLRDKvH6WujDZd.jpg?r=4fc',
  //     genre:"Adventure,Fantasy"
  //   }
  //   ,
  //   {
  //     id: "stranger_things",
  //     title: 'Stranger Things',
  //     img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68',
  //     genre:"Horror,Supernatural"
  //   },
  //   {
  //     id: "weak_hero",
  //       title: 'Weak Hero',
  //       img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVHwufC2TYmY7piel8bPWwvkzFWTSDSkw-rDAfAjybbU9gEVzlaTr59OKGzLGO91NafROT3m6kJGGMGV4WtWpTd8Cxm2vbVuKUajTVW6HOcm0zWj63qcr7HBxl_I5eAVHkDb.jpg?r=adc',
  //       genre:"Action,Thriller"
  //     },
  //     {
  //       id: "lucifer",
  //       title: 'Lucifer',
  //       img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV7ZN16RyF_NX1jifDL0gUttbuv6g7dMEFopItw0DTCDV8GpTb0-9A30fpIkA7KrqihYndFFyYnTQSGOQrkL2K00kv6NUfoUWq4DlcZOYkCMoVwcuZFn9WkQLCg_HQoQkpM2.jpg?r=1c3',
  //       genre: "Action ,Comedy"
  //     },
  //     {
  //       id: "wednesday",
  //       title: 'Wednesday',
  //       img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5URtqG36cHmUzXPrn9qaN1prCdZB3Llrhe8w4fvPKUxMp1phgN738mP1ctTe9QshMH8f0NlK-GdSAZDYJpXtvofUffd8o4BQuB7AKZogG-KbG0kR5H5w9kp3pXbogjGHSN.jpg?r=082',
  //       genre: "Horror , Comedy"
  //     }
  // ];
  
  // const cardData1 = [ /* same format with `id`, `title`, `img`, `genre` */ ];
  // const cardData2 = [ /* same format with `id`, `title`, `img`, `genre` */ ];
  // const cardData3 = [ /* same format with `id`, `title`, `img`, `genre` */ ];
  
  
  // // ----------------- CAROUSEL CREATION -----------------
  // function createCarousel(containerId, cards, carouselId) {
  //   const container = document.getElementById(containerId);
  //   const cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
  
  //   for (let i = 0; i < cards.length; i += cardsPerSlide) {
  //     const slide = document.createElement('div');
  //     slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
  //     const row = document.createElement('div');
  //     row.className = 'row g-4 justify-content-center';
  
  //     cards.slice(i, i + cardsPerSlide).forEach(card => {
  //       const col = document.createElement('div');
  //       col.className = 'col-4 col-md-3';
  
  //       col.innerHTML = `
  //         <div class="card bg-transparent text-white card-modal-trigger" data-id="${card.id}" data-bs-toggle="modal" data-bs-target="#cardModal" style="cursor:pointer;">
  //           <img src="${card.img}" class="card-img" alt="${card.title}">
  //           <div class="card-body text-center">
  //             <h6 class="card-title mb-0">${card.title}</h6>
  //           </div>
  //         </div>`;
  
  //       row.appendChild(col);
  //     });
  
  //     slide.appendChild(row);
  //     container.appendChild(slide);
  //   }
  // }
  
  // // ----------------- RENDER ALL CAROUSELS -----------------
  // createCarousel("carouselContent", cardData, "carousel1");
  // createCarousel("carouselContent1", cardData1, "carousel2");
  // createCarousel("carouselContent2", cardData2, "carousel3");
  // createCarousel("carouselContent3", cardData3, "carousel4");
  
  
  // // ----------------- MODAL HANDLING -----------------
  // const allCards = [...cardData, ...cardData1, ...cardData2, ...cardData3];
  
  // document.addEventListener('click', function (event) {
  //   const card = event.target.closest('.card-modal-trigger');
  //   if (!card) return;
  
  //   const cardId = card.getAttribute('data-id');
  //   const selectedCard = allCards.find(c => c.id === cardId);
  
  //   if (selectedCard) {
  //     document.getElementById('cardModalLabel').textContent = selectedCard.title;
  //     document.getElementById('cardTitle').textContent = selectedCard.title;
  //     document.getElementById('modalImage').src = selectedCard.img;
  //     document.getElementById('modalGenre').textContent = selectedCard.genre || "Genre not available";
  //     document.getElementById('modalDescription').textContent = data.description;
  
  //     // Load external page into modal (optional)
  //     fetch('movieDetails.html')
  //       .then(response => response.text())
  //       .then(html => {
  //         document.getElementById('modalExtraContent').innerHTML = html;
  //       });
  //   }
  // });
  
  
  /*purana code
  
  const cardData = [
      {
        title: 'Money Heist',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326'
      },
      {
        title: 'Alice in Borderland',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9MbR1kXcEjxQ3339N7chhCF9aaFDaQ7rvuYwI5RnTlNgAk1BmGN4tYZCxNuoOIivaRl-Z_siJeRMoBFisErN7PnAT1Q-eL5Ld8etFRR3K25MLAcI7jeOkkEuXbtOaOen-Z.jpg?r=400'
      },
      {
        title: 'All of us are dead',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdOdSuAwEvu_jZKZr4g_GHiP3YpfGSkqDi5yisAEpNVwAv-raxL1fcezQZn4aEu7ixtzlsbRg2GlY2_dkqo9QJyaJgz0Qkr1tH76wgOK9ulsSgZDe_QhgqxBTPeTJgIRGGSI.jpg?r=d40'
      },
      {
        title: 'Kpop Demon Hunters',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRDc-cnVqrssAwUcUwKtpmcyKLgBnI2FEpjrCjLZT6LOnVktgaNSYtXCCvBGW0EWbAKjP1mJoAZ6JU72PC1a_tA9Rp31i5KJRvZJybfBtiP-pUYy96AquisPovRdV8slQAmepGcsDVQzcM_qUDzdZGPTTIczWyu8QfazIjAMWsz35zvd3AQhjHy1Q_ozGdjNkOkboY-ooQJdFTtx1jwkjQbrYsz-9S77cVmcKnOcxs9XgFMDeQwoi92kLOE0kFn5Nk8.jpg?r=b78'
      },
      {
        title: 'Vincenzo',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b'
      },
      {
        title: 'Queen of Tears',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauaf_pjBXX9G_dl-IYBIWLYWexsTpaSGU0ulKaCMLmsn_ew6nmLGev9nFJJ7bRDMaKAGE0G2Egdgy30VgHbVI7c0-IeOxmMp5j-0AoMIuToZbPzDmGzCQjZIN_OLvtEARjE.jpg?r=3e4'
      },
      {
        title: 'Never have I Ever',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfyfO998JNWAx6snVHf7_ydlwuk8I1tPQCttH_W4OCzmhkWufyFODQaEnnftder7T2geYuzZuznJiFtGd8GxlgCATqrUxV8CkgdJkuyboFlkdXKsAmUwSH4kB8UeD0NT7SVp.jpg?r=fb2'
      },
      {
        title: 'One Piece',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSul_dyl7Vp3dMc_7KoET72knNATy8bgAjoJj9KpYYeqK3RaxRd2-S1pIqDUVsb74gPp5fiAYNFV5iNq-LYmTLFuZBVn3cOmyRhtJL0bHAqejMOv3T0kslLRDKvH6WujDZd.jpg?r=4fc'
      }
      ,
      {
        title: 'Stranger Things',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68'
      },
      {
          title: 'Weak Hero',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVHwufC2TYmY7piel8bPWwvkzFWTSDSkw-rDAfAjybbU9gEVzlaTr59OKGzLGO91NafROT3m6kJGGMGV4WtWpTd8Cxm2vbVuKUajTVW6HOcm0zWj63qcr7HBxl_I5eAVHkDb.jpg?r=adc'
        },
        {
          title: 'Lucifer',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV7ZN16RyF_NX1jifDL0gUttbuv6g7dMEFopItw0DTCDV8GpTb0-9A30fpIkA7KrqihYndFFyYnTQSGOQrkL2K00kv6NUfoUWq4DlcZOYkCMoVwcuZFn9WkQLCg_HQoQkpM2.jpg?r=1c3'
        },
        {
          title: 'Wednesday',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5URtqG36cHmUzXPrn9qaN1prCdZB3Llrhe8w4fvPKUxMp1phgN738mP1ctTe9QshMH8f0NlK-GdSAZDYJpXtvofUffd8o4BQuB7AKZogG-KbG0kR5H5w9kp3pXbogjGHSN.jpg?r=082'
        }
    ];
  
    var cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
    const carouselContent = document.getElementById('carouselContent');
  
    for (let i = 0; i < cardData.length; i += cardsPerSlide) {
      const slide = document.createElement('div');
      slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
      const row = document.createElement('div');
      row.className = 'row g-4 justify-content-center';
  
      cardData.slice(i, i + cardsPerSlide).forEach(card => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3';
  
        col.innerHTML = `
        <div class="card bg-transparent text-white card-modal-trigger" data-id="${card.id}" data-bs-toggle="modal" data-bs-target="#cardModal">
          <img src="${card.img}" class="card-img" alt="${card.title}">
          <div class="card-body text-center">
            <h6 class="card-title mb-0">${card.title}</h6>
          </div>
        </div>`;
      
  
        row.appendChild(col);
      });
  
      slide.appendChild(row);
      carouselContent.appendChild(slide);
    }
  
  
  const cardData1 = [
      {
        title: 'Kpop Demon Hunter',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZRpVoSpAD7XTjp6pjmgQbWog7mAZtKdOXUvZCINb-Oa_FTZxAjLt8MZIoSo5_1FVbXqKjKYNu91BmI_Yued7KoL-lgypPFhGtSTB7wqwI3cUZd6EvqvOJRrArrNznC5t1hl.jpg?r=b78'
      },
      {
        title: 'Trainwreck: Poop Cruise',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWFiZZ41GGG3GbYUIc1LzYIUNBmuNpWdkJ3fnCIQHwbIuMrw_hjul9WJqKVsZfQ_P8ZvpMA7foyJjSaL4wfGiB1fKx-K7WlaAW8Wb8R4GX_oCVSP7PxqSg3-FeVXHreBOVRb.jpg?r=3fa'
      },
      {
        title: 'Straw',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbhGGiTzSlOCFBL6eXtFGoiminkUkjB6PnYWNODTXczH4mY6GuKM30XixU2tui77nCM76ga3nRHodeVgEtYMPwmSR759BBIq3Fhi5DV2dtvZ6mJ4dfedHpi3eXCXaOXkNIG7.jpg?r=809'
      },
      {
        title: 'The Intern',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABempONPM10G3shXnqkR3wRcw4KQi0O5VUlw9hISzjhn2b78CpyYWvsS9IQB4ICgmZ4kgTQQLZaUa6i8wLR9jwhZK3uZPWuUEUdo.jpg?r=d7e'
      },
      {
        title: 'Land of Bad',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXU2CNHCK2qrvBC9jJP-7qMC3IgkN9gflPHOYwTyjjx6JaOYFgQAR8_LDTiLbzXqAbfL-TXxGGVgtq8qvb8vRUQdCvS25Psf-Mo.jpg?r=a7d'
      },
      {
        title: 'Fate of Furious',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXTi3YtZgBaBmttxbsO8HQI63MnKTrKJoukrngTE0HBLzUUH2zA4807rccAg2JUyvJw3d0tsZjzyqjvjpK_3184r9oJpC7baxeM.jpg?r=3a2'
      },
      {
        title: 'Infinite',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVjjyAHZclC5dwBBvyjP4q3_PL8wuTDtubKK4JQuo4WzsrS4eRzlnXn8lCejJl4aAYcD3kW5Rj7jjzSx11U5KIdEUfIMiMuOn3M.jpg?r=7c4'
      },
      {
        title: 'The Old Guard',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZMz3ITTm4xtxwrdOH1OZLO-XxDGuIniTghMv3YDXk7gftic_8vImf7wQ7_y7m0hbFI7LxDoRvXhEJXMo6fMQBlrTjxTNF86sLxM9BxcVO6DrTenk9AXCSFKitbfq6q3Hfpg.jpg?r=75c'
      }
      ,
      {
        title: 'Sing',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ1e8IVzElN95RAGnrSEtlK5UKoAgIcH4yAbPxiG8gFdeQrL_FrgYLCyQcvjPMosNLQK3JIz0xALu2ZYUVmX6FgNC9LK5ynWT4A.jpg?r=df4'
      },
      {
          title: 'Raid 2',
          img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcUX3kCd9YueT8M2ZIXL5Ds-y2kDwNOHXKMxSYboksYSVj4LnQNFhr7Fcd8OHIIHSskwm1-G1NtwTtYGEJnLn4VW2s15CxY8qSE.jpg?r=f75'
        },
        {
          title: 'Exterritorial',
          img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVjss7LlfolpJWuDPeuYDnWZZpVSNxATncak2_BbfRKT-6LMurQflM9xhi5FAQLi6VvBuzyQjC7JREMeeJs_im97bm0MhrCtLJQOr5hnYyrnVCcBwX5DBJuKIA1A6CXhLakb.jpg?r=76e'
        },
        {
          title: "A Widow's Game",
          img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEWAC_QeolWpGjlEDqNOCbpMIGAQpOGIeTm9QTKYjXS9YZelSCSoNZDKpZ_JHQZ9OEIQLOPi7QojyHHlD3kc6Fbu96qIsTngtghWgqIhlqVaHzFTUwbQmFOpsUq03t9V6yl.jpg?r=4f2'
        }
    ];
  
    var cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
    const carouselContent1 = document.getElementById('carouselContent1');
  
    for (let i = 0; i < cardData1.length; i += cardsPerSlide) {
      const slide = document.createElement('div');
      slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
      const row = document.createElement('div');
      row.className = 'row g-4 justify-content-center';
  
      cardData1.slice(i, i + cardsPerSlide).forEach(card => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3';
  
        col.innerHTML = `
          <div class="card bg-transparent text-white">
            <img src="${card.img}" class="card-img" alt="...">
            <div class="card-body text-center">
              <h6 class="card-title mb-0">${card.title}</h6>
            </div>
          </div>`;
  
        row.appendChild(col);
      });
  
      slide.appendChild(row);
      carouselContent1.appendChild(slide);
    }
  
  
  
    const cardData2 = [
      {
        title: 'The Waterfront',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeCoyd1zhlQZkuW2r6h4FTiQ4h1T6b3vkbsYbC2dvvo12J1GYtoDTgtlPwiomd0GU6RZBdnQfaPjil9f4HYTKrtpTyr_kyBhypNPRT4m4xLGoVw3sZyOn2Lvil6Vz7swthWn.jpg?r=426'
      },
      {
        title: 'Ginny & Georgia',
        img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaHcyuDQoCed0zXVd9tRu7mbJLj_7yYGFiJd2RdxB3lWst-ZUzUvJqNrMfBlwWbd2yMCT2pDXSQH0KSAUvw_uuKk-3E_NwFaYvoQcnqrCl5JJUgR8y9ie0ddOUvaXvY2-NQw.jpg?r=c0a'
      },
      {
        title: 'Bridgerton',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbb-nqVeQk4ZF2IdccUOo9MdTMg8k70FtYaCdlNHCKSH8IkcLn2Lj084doTDhYzzzwO0Rn6-F2Cl6zdiZLod5eIrmERbPaG4p0bNzrI3CUowPPZZl9AS-p8N9ISY_K8WC-4F.jpg?r=5e5'
      },
      {
        title: 'Shadow Hunters',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeo9yeZTCkMG66XzRP-vS0sNkegsw2chS1Z2hjBrieTZsf4_jBqdrDEm7GA1iCxGuPjdjgp7S-alv-u2gitZudaUqdUutYaYLfRq1V7RvVarN5uBGMYGg2J5mFR7Nyfn_0aC.jpg?r=158'
      },
      {
        title: 'Queen Charlotte',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWhaH3T6Ep4KBmAWzprFix0wPM9U8BdDPVH6Xa8FsVILOApcqDlYK0tDmdzDlxSQFzwzbeypizmFDiOzXuq3YWtYsxlzuW1_UGZt2L7vGJA5bHaF13VznEhvx5O6Nr3_HhiW.jpg?r=2f8'
      },
      {
        title: 'Heeramandi',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUH8NFZMMoPr4JHVJVTz0t8ZY3IKkRwitkL5wRWonK7zgc8Olm1rho7z8f0uIzkMcZmi6R8G4JLil1c3qM4UhfZ2EeRvrRGxkyX7vzbu4dynk5YVXTd4LUbrEeNsr7sSySHG.jpg?r=66f'
      },
      {
        title: 'Mismatched',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfMvl5WgjF-iY3jVVYiHQNfDQ3fAJ5h_rBpcISEsI4FoB4mryZdrh_xfhM7lSrP40NxA2wfQATDvBvsJbtFmkLGcy00_kul-237PsbUOB4r5X2rYYRoILGMfYlMoWcZ2pOa9.jpg?r=73d'
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
  
    var cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
    const carouselContent2 = document.getElementById('carouselContent2');
  
    for (let i = 0; i < cardData2.length; i += cardsPerSlide) {
      const slide = document.createElement('div');
      slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
      const row = document.createElement('div');
      row.className = 'row g-4 justify-content-center';
  
      cardData2.slice(i, i + cardsPerSlide).forEach(card => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3';
  
        col.innerHTML = `
          <div class="card bg-transparent text-white">
            <img src="${card.img}" class="card-img" alt="...">
            <div class="card-body text-center">
              <h6 class="card-title mb-0">${card.title}</h6>
            </div>
          </div>`;
  
        row.appendChild(col);
      });
  
      slide.appendChild(row);
      carouselContent2.appendChild(slide);
    }
  
  
  
  
    const cardData3 = [
      {
        title: 'Emily in Paris',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb509jgLJkqO_KEMFctI9a392FQn1JO_79UNnAikFssW1DtGhoN37IAAcaXSkWtA9NwxFk-jf1z4QeiOstBM32EfLlwyYVjD3IM0__l7qgF4ZCXZI7ACthd8PzmZez-MJxzH.jpg?r=4f9'
      },
      {
        title: 'Peaky Blinders',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTU3_q-CINXVdjlijgk1THbgnzWIGC-eFlZzAVkXiaY66_AYRGgPdX_j3weXYTi9qY_Wv0oDnzFazhGgquAoUQzOBgv6k8bfObyn3uuD0-u2WpNCTsdsBvqUE40uLdZmJWvo.jpg?r=c0e'
      },
      {
        title: 'The Glory',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVfPGa77dyP88-Xt_q-1tFannPOu5z0IK0DpvzCAZQUIPmWD5S8H2COg1wpWnIdBmRnxz3rFkobaI53h0zDaW9A7bNskvscjOkM9XWv7TT-_7KKnGgQqLt680sXelr48HssQ.jpg?r=3d2'
      },
      {
        title: 'The Crown',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSMGPuPUDfc6l_t-QWv4ZLQ_0gK38ne168mjsP-FUSdnPu6FUCQyyQ0Q4bSstaY55d2cq9kpBQLbOwY3h8YVXnX5cEgxxi09WTq-_JhgKxaFKHMre_IMwad8WYkV1ALTIQV.jpg?r=8c1'
      },
      {
        title: 'Gyeongseong Creature',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaQ6H8XsFP6xCa75gjZlmvzvrCxQ1SZmXeYFYhP2wVk93XAMpbrlu3Tsw7k8hG_sPYXsRNTlZD3IQOSQED7FR7NHmmfXILWBo0Nm__wkuBgjm-lQFMWRV8FE_qbLHunLQ6_m.jpg?r=868'
      },
      {
        title: 'YOU',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZnV23ioUzxMyYq1vfXIoRQVcwe-Fad5gsc_PHHR2nZ96KIjtdGSY1Zf4PetEuTPaaqyJzAXPLpekwasxjVhkIrVuOWEeW7Ox_dN_kQl0QZ67yaZI2Tsenne8AeEHoY987Vn.jpg?r=c37'
      },
      {
        title: 'DAHMER',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRltWuhErhcS6v8LsIuk4yVGFYSjC5Hx6eOYo79yd7X3dtGdKhFptBE76eJxwgb0m5G7Hh9st_7ht55c2rtfwPOLO2S7JNh-aX9I1VMUdhPYdhI9xo-fb7sXDYVr0RhHANEs.jpg?r=385'
      },
      {
        title: '13 Reasons Why',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWq8LpFBZgua51HS6zqDNme5_Cr_Q43mdqpqvr8QKKeUsXeOv9cy8J01QmMziB1xVWSh63jE4QiyLSmeu5B2QSG5x7B2Jt9OwiJLvnEZ5vKawZXjLP9nMBAvb6uDofgzyv7G.jpg?r=ba6'
      }
      ,
      {
        title: 'Inventing Anna',
        img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXMJpokioAH5ge2GxnMq7TAlVO3utBWEG0SQGajtY-XAYbqU1e6FRLq05G4mFthoKLXxwZyE5kMR6fIP_cyGnc6nFOHZv9d0DEwLpvfEcC1Y2UBxYg0pyuZOZp43wpaJOH1K.jpg?r=44e'
      },
      {
          title: 'Business Proposal',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa6R0zawmvBIlpRMxH9N2cD-aKWcmyqM8q3d_u41QnzVuaTgU8vxi1cWa4Q5oLSVCRjVDIoC0opTfZO_s-hyMzZl1_8PGK449ohLgy9CvPNXpKKkgCeta667RBPXODjZ2UWr.jpg?r=095'
        },
        {
          title: 'My Name',
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTAqZM4S68FUJu4QTWOQWZy-KYMh4kwn3TohXL_aBEYLrjgDlsQ2QZXyKSNLvRB24d5L-D3v0gXmfCmIM11M5ePWYSWRunVPd7MSxtngriUB8vLMH8-6Oq0m7A4Y-Rvvk4QM.jpg?r=c71'
        },
        {
          title: "My Life With The Walter Boys",
          img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbDtAv6HGIaSQvwDsHe1I1D9DrXIUH21Lwq2QoRd1EH56yCvEoR3xfR-BFr6hrdRxIu3GSbdWS_ZQ83ns4_lETpTUXNKvNwQrTwlcrW2F9-sTmg782-IgQe6ZGSIeZVJ8HX9.jpg?r=5b9'
        }
    ];
  
    var cardsPerSlide = window.innerWidth < 600 ? 3 : 4;
    const carouselContent3 = document.getElementById('carouselContent3');
  
    for (let i = 0; i < cardData3.length; i += cardsPerSlide) { 
      const slide = document.createElement('div');
      slide.className = `carousel-item${i === 0 ? ' active' : ''}`;
      const row = document.createElement('div');
      row.className = 'row g-4 justify-content-center';
  
      cardData3.slice(i, i + cardsPerSlide).forEach(card => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3';
  
        col.innerHTML = `
          <div class="card bg-transparent text-white">
            <img src="${card.img}" class="card-img" alt="...">
            <div class="card-body text-center">
              <h6 class="card-title mb-0">${card.title}</h6>
            </div>
          </div>`;
  
        row.appendChild(col);
      });
  
      slide.appendChild(row);
      carouselContent3.appendChild(slide);
    }*/
    