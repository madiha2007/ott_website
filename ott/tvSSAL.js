const cardData = [
{
    id: 'emily_in_paris',
    title: 'Emily in Paris',
    img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb509jgLJkqO_KEMFctI9a392FQn1JO_79UNnAikFssW1DtGhoN37IAAcaXSkWtA9NwxFk-jf1z4QeiOstBM32EfLlwyYVjD3IM0__l7qgF4ZCXZI7ACthd8PzmZez-MJxzH.jpg?r=4f9',
    genre:"Rom-com,Drama",
    description:"A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.",
   seasons: [
      {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "Emily in Paris", 
            description: "Emily brings her can-do American attitude and fresh ideas to her new office in Paris, but her inability to speak French turns out to be a major faux pas.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc_cJ3eZN6e-sZxS4v129FcjGgPUMGJsU8Me2OtVGhY2TS1hgva7aJffZLB9aq1aIqBjAcYg9A8GuAX8ytb-AxYl6XBeXYWSy3XicTXEnGeTD_3puVIRIRir.webp?r=c2f" 
          },
          { 
            ep: 2, 
            title: "Masculin Féminin", 
            description: "Emily navigates the intricacies of French amour when her enthusiasm at a work soirée impresses a flirtatious — and married — client.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZptgWA2LxhcBjb6B-MMxcFkgwJGVzbeKiVWLdEk78JL5_BNVwgi3t1EOeuUCbcX2z017rgDLPPmdhLuDTzST7BDfhTurTpUi2zKyF8b7_mgH-nPjHVbA0Rb.webp?r=811" 
          },
          { 
            ep: 3, 
            title: "Sexy or Sexist", 
            description: "Emily voices her concerns over a risqué new ad campaign while juggling plumbing problems, language lessons and disagreeable co-workers.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZO4yzKyO9-QLr0Zm5cZRKe7M4uhuI5ME3JAjqIbVvgdF1oNkx-TdXmiaMyBWeZ6pzTSnbz6mWJZQKSWLIBgUI5xdKa8T2RFfUMfzNZRW_jS8Qu-4z3xsffy.webp?r=bb2" 
          },
          { 
            ep: 4, 
            title: "A Kiss Is Just a Kiss", 
            description: "A sweet new acquaintance helps Emily sniff out a potentially huge new client, but a messy workplace liaison endangers the deal.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbslRYJbyYsddbKOvs09AZnVuEciB5nw7fv2R3ATPuz-nYXm4FdwpRkHsAPDHMn58Z50FLgnkgEU-567oiW6uPEei3y1RGSrvTy2cWmsmwIL4_70D3VhWAU1.webp?r=37a" 
          },
          { 
            ep: 5, 
            title: "Faux Amis", 
            description: "Emily discovers that her growing social media following opens doors in Paris, and a friendly night out on the town leads to a tête-à-tête with Gabriel.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbzcTn87v55JkalI5I86GvR22kNSIvxtFnO-Ja9LRrFQig-x-9z-GbCPdwDI6BOE8dS5-9U_QM9rLdY5nkHgoDPV43KN6SK2xdk-t1d2Q-TAuvKZl_ZEy3t_.webp?r=c47" 
          },
          { 
            ep: 6, 
            title: "Ringarde", 
            description: "When a meeting with an iconic couture house unravels over a basic mistake, Emily finds comfort in the company of a seemingly charming professor.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY-I1CiUfrSKzyYQ162BamY4ygm40tDtSSxcI4OWgwQ5nixkiJu49swfLDeLS1U3ctizKfZxK8cGAXcHA-DQWgA-jyUeVuPlWgiRLgazUJDw2crPZ3GBYtHy.webp?r=f45" 
          },
          { 
            ep: 7, 
            title: "French Ending", 
            description: "After agreeing to watch over an American actress at a chic red-carpet event, Emily finds her night — and her famous charge — spinning out of control.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQn-f1UNwVx1e_W8QZ8lCycZH0GuVLDAnAiU0cFqoV0eXzIkp7OI3vb03McOvL8HYF20CCB_uaGoWKM9pDYMIWXuOnrA-3ghn2YNcLN3OJ39sIzB7azLsi9y.webp?r=875" 
          },
          { 
            ep: 8, 
            title: "Family Affair", 
            description: "Emily's weekend trip to a friend's château fizzles like day-old Champagne. Back in Paris, Mindy's reluctant meet-up with old friends ends on a high note.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeLTjM-3TORgGcrfIJ0n32g5NXCaTghzpby2mY792rndocywDfjLhGD5qu5iZJEOFJa6kz3tbchlffzy0Yame1HLGEuIWF2u2bLGOQBPOThO60UfXwjXMOfn.webp?r=998" 
          },
          { 
            ep: 9, 
            title: " An American Auction in Paris", 
            description: "A charity auction, a donated gown and an avant-garde design duo add up to trouble for Emily as she catches the eye of Pierre Cadault's heir apparent.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU6VNApm8eyZn4uhONAmFeLD8f9YzIqNSwFQerlW23uqLGTNmB_lXVXyRmKqjwlPGVkdWuBRw_grEOVidZEf8YkN8PhrbMaMXfJ1IFzGN0zvil-5Ux3XHf7b.webp?r=db7" 
          },
          { 
            ep: 10, 
            title: " Cancel Couture", 
            description: "With her job on the line over a Fashion Week debacle, Emily scrambles to devise a new plan while preparing to say adieu to a good friend.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb2SXa_gi43DhYjMoDw23f45Cg9vRs-WG8fOVDcrV3fub_WWDdKiSLumCL_UsnRhsIiG-ibXw-fh3rkIZv89hksANDCXWDPFaEnuhkrV82KSj2iiUCSPbyzR.webp?r=438" 
          }
        ]
      },
      {
        season: 2,
        episodes: [
          { 
            ep: 1, 
            title: " Voulez-Vous Coucher Avec Moi?", 
            description: "Feeling très guilty over her encounter with Gabriel, Emily decides to move on with a romantic weekend away. Mindy's new job turns out to be a total drag.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa1ra_NtaNcYUH61l2IpPQXsqPl5-q32bHT92kitwpUC5C8fBlZqUZ2-KdbD4P-vtHm0fYd4TXd4Payh1oD6pLQMgdMaFC1xBgfAR8mSkpwvBOOzR9cxVvAV.webp?r=cdb" 
          },
           { 
            ep: 2, 
            title: " Do You Know the Way to St. Tropez?", 
            description: "Working on a weekend? Quelle horreur. Even in Saint-Tropez, Emily can't leave her job behind, but after a social media gaffe, she may not have a choice.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABajIRdKwrxWFkBpChqqsrMwADWBlNA479XAJpkMKuJa-ya54ONCxc9wGr919GqdUQqgewSS6lzKmwZc0QJuPgg7SFnzh2-LQY6O2BWtzLJLcTYdgA9aVgEri.webp?r=1fc" 
          }, 
          { 
            ep: 3, 
            title: "Bon Anniversaire!", 
            description: "While planning a dinner party for her birthday, Emily gets steamy with Camille’s friends and accepts Gabriel’s helping hand with the menu.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRF_rR94gZ6AQFv3K6qHGJpYkyIIXVmpV6hDLFXm8DlMI6z1wzXK5cNe7HDgz94r8bVzCaO731bl_wadN1G-2KNoy8qx0hDEe26WcZ4Bf5vag0H0CY2yLkkz.webp?r=95e" 
          },
          { 
            ep: 4, 
            title: " Jules and Em", 
            description: "When Emily's personal drama impacts her work at Savoir, it pushes her to focus harder on her French lessons. Mindy faces off with a mime at her new gig.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWz6CJ2RPyGnQ8TRwsDQaEhZxVXxBgMSV6bDiXJ7vQPUx69RraZJ9H-WswIcA8TCyUEPsFFIQGxUcD5KNjp4Z6Y-tCMrbVTDUGhCzMJCXTNvOCtkBh46tjbg.webp?r=56c" 
          }, 
          { 
            ep: 5, 
            title: "An Englishman in Paris", 
            description: "Emily tries to practice speaking en Français with a bored classmate while juggling Gabriel's restaurant debut, a Chopard soirée and a seething Camille.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaariiJr8EW_UASM0l4EvFrLv_qxMJzh7svezY4LbEkyX2pIlUxV8YeknAT4zvdLX0SjRQyxqXoyzvqhIY4Vjr2evjEYwcTUbUh88ra8PysIrsrvvH_m3Wua.webp?r=d91" 
          }, 
          { 
            ep: 6, 
            title: "Boiling Point", 
            description: "Tempers flare on the opening night of Chez Lavaux. Emily feels Alfie has misjudged her style and joie de vivre. Sylvie catches the eye of a photographer.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ-WXSLbtQqTtta3X5UMnqrifXNHllsh04qK4JU3zQe82CI8IW-q2jvOERDymU0ttFXY4FesDUeA1Lmx1g3G_ab45afcwnBS-NnHqT6aFisqm8vUp86KKjaF.webp?r=37c" 
          }, 
          { 
            ep: 7, 
            title: "The Cook, the Thief, Her Ghost and His Lover", 
            description: "Emily finally establishes a rapport with Alfie, but a borrowed jacket makes things beaucoup awkward. Sylvie bristles over Savoir's new American client.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTkt4CxeSCFRTmdmbIAJM_zjf-n3Z1r4j8kGRVAZg7LuRI1qPk1IJGthi_6NtCLBmauen2E-6dZeTgUGct_jo3JRSnBQQPH0iKd7c-uG6_Qs8v4y31epPXcx.webp?r=885" 
          }, 
          { 
            ep: 8, 
            title: "Champagne Problems", 
            description: "After a suspiciously decadent dinner with Alfie, Emily heads to Camille's family chateau, where more than just the tops of Champére bottles pop off.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcCPvO5BFlBycqxRLpkU6Coc_adzEz5saXybu6umw5-SdlfmV6St01QrSJK_oB01o2ruq4EOp6SPyGI_nR-h-ytOD-EjbZuWkEi32XLMB6SOsLOj8Ruq7BVY.webp?r=331" 
          }, 
          { 
            ep: 9, 
            title: "Scents & Sensibility", 
            description: "Emily's boss from Chicago digs deeper into Savoir's accounts, putting Sylvie on edge. Mindy's budding romance suffers a blow when her secret comes out.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa0LUgjjcutAP3HeTSS2WMYiQc3ueTnTZZuwux5qIhkrMx6TSnuc6SLl9Yo9b8iKx6U0P0cgTgfMtjVNKFm8MCNWzcLAjJRGH8rW34xpGQpvDvMqQZ552UDn.webp?r=3ca" 
          }, 
          { 
            ep: 10, 
            title: "French Revolution", 
            description: "Emily finds her loyalties torn when a fashion show at Versailles sets the stage for a showdown that could determine Savoir's future — and her own.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWLqiqa-xTodBa0tIshO5hRdU4bgqyxJo4rRNwtBdZeh7dgI0nAckuBBSnfLDIvm_b00dobkVkTqyUwHoQaayrA3Y0YBOIX33WjYAFjPv-RxpoRUImh3Ck6s.webp?r=594" 
          }
        ]
      },
      {
        season: 3,
        episodes: [
         
        ]
      },
      {
        season: 4,
        episodes: [
         
        ]
      }
    ]

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

const cardData1 = [
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
// createCarousel("carouselContent2", cardData2, "carousel3");
// createCarousel("carouselContent3", cardData3, "carousel4");
// createCarousel("carouselContent4", cardData1, "carousel5");
// createCarousel("carouselContent5", cardData2, "carousel6");

const allCards = [...cardData, ...cardData1];


let selectedCardData = null;

document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("cardModal"));

document.addEventListener("click", function (e) {
  const card = e.target.closest(".card-modal-trigger");
  if (!card) return;

  const id = card.dataset.id;

  // ✅ Get full card object (from allCards) so seasons aren’t lost
  selectedCardData = allCards.find(c => c.id === id) || {
    id: card.dataset.id,
    title: card.dataset.title,
    img: card.dataset.img,
    genre: card.dataset.genre,
    description: card.dataset.description
  };

  document.getElementById("cardTitle").textContent = selectedCardData.title;
  document.getElementById("cardModalLabel").textContent = selectedCardData.title;
  document.getElementById("modalImage").src = selectedCardData.img;
  document.getElementById("modalGenre").textContent = selectedCardData.genre;
  document.getElementById("modalDescription").textContent = selectedCardData.description;

  populateSeasons(selectedCardData);   // ✅ now works for shows with seasons
  checkMyListStateAndStyleButton();

  modal.show();

    // // Fetch movieDetails.html and insert
    // const contentDiv = document.getElementById("modalExtraContent");
    // contentDiv.innerHTML = "Loading...";

    // fetch("movieDetails.html")
    //   .then((res) => res.text())
    //   .then((html) => {
    //     contentDiv.innerHTML = html;

    //     populateMoreLikeThis(genre, id);
    //     populateSeasons(selectedCardData); 

     
    //   // ✅ Check and update button once modal is loaded
    //   checkMyListStateAndStyleButton();
    //   });
// populateMoreLikeThis(genre, id);


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



// ------------------------------------- SEASONS AND EPISODES POPULATION -------------------------------------------------------------
function populateSeasons(card) {
  const container = document.getElementById("seasonsContainer");
  container.innerHTML = "";

  // --- Tabs (2 tabs: Episodes + More Like This) ---
  const tabs = `
    <ul class="nav nav-tabs" id="seasonTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active text-dark fs-4" 
                id="episodes-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#episodes" 
                type="button" role="tab">
          Seasons & Episodes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark fs-4" 
                id="morelike-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#morelike" 
                type="button" role="tab">
          More Like This
        </button>
      </li>
    </ul>
  `;

  // --- Dropdown for Seasons ---
  let dropdownHTML = "";
  if (card.seasons && card.seasons.length > 0) {
    dropdownHTML = `
      <div class="mt-3">
        <label for="seasonSelect" class="form-label fw-bold"></label>
        <select class="form-select w-auto d-inline-block fs-4" id="seasonSelect">
          ${card.seasons
            .map(
              (s, i) =>
                `<option value="${i}" ${i === 0 ? "selected" : ""}>Season ${s.season}</option>`
            )
            .join("")}
        </select>
      </div>
      <div id="episodesContainer" class="m-4 p-4"></div>
    `;
  } else {
    dropdownHTML = `<p class="mt-3 text-muted">No episodes available (this might be a movie).</p>`;
  }

  // --- Full Tab Content ---
  const content = `
    <div class="tab-content mt-3">
      <!-- Episodes Tab -->
      <div class="tab-pane fade show active" id="episodes" role="tabpanel">
        ${dropdownHTML}
      </div>

      <!-- More Like This Tab -->
      <div class="tab-pane fade" id="morelike" role="tabpanel">
        <div id="morelikethiscontainer" class="mt-3"></div>
      </div>
    </div>
  `;

  // Inject into container
  container.innerHTML = tabs + content;

  // Function to render episodes for selected season
  function renderEpisodes(seasonIndex) {
    const season = card.seasons[seasonIndex];
    const episodesDiv = document.getElementById("episodesContainer");
    if (!season) return;

    episodesDiv.innerHTML = season.episodes
      .map(
        (ep) => `
        <div class="card text-white flex-row navbg mb-3 border-0 rounded shadow-sm p-2">
          <div class="col-4">
                 <img src="${ep.img || card.img}" 
                   class="img-fluid h-100 object-fit-cover rounded-start" 
                   alt="Episode ${ep.ep}: ${ep.title}" />
          </div>
          <div class="col-8 ps-3 d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title mb-1">Episode ${ep.ep}: ${ep.title}</h5>
              <p class="card-text small fs-6 text-muted">${ep.description}</p>
            </div>
            <div class="mb-2">
              
              <button class="btn btn-danger btn-md w-25 me-2 watch-now-btn" type="button" data-id="${ep.ep}">Watch Now</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Initialize with first season
  if (card.seasons && card.seasons.length > 0) {
    renderEpisodes(0);

    // Dropdown change event
    document.getElementById("seasonSelect").addEventListener("change", (e) => {
      renderEpisodes(e.target.value);
    });
  }

  // Populate "More Like This"
  if (card.genre) {
    populateMoreLikeThis(card.genre, card.id);
  }
}
// ------------------------------------- SEASONS AND EPISODES POPULATION  saglyat changla chalnara -------------------------------------------------------------
// function populateSeasons(card) {
//   const container = document.getElementById("seasonsContainer");
//   container.innerHTML = "";

//   // Create nav tabs (2 tabs: Episodes + More Like This)
//   const tabs = `
//     <ul class="nav nav-tabs " id="seasonTabs" role="tablist">
//       <li class="nav-item" role="presentation">
//         <button class="nav-link active text-dark fs-4 " 
//                 id="episodes-tab" 
//                 data-bs-toggle="tab" 
//                 data-bs-target="#episodes" 
//                 type="button" role="tab">
//           Seasons & Episodes
//         </button>
//       </li>
//       <li class="nav-item " role="presentation">
//         <button class="nav-link text-dark fs-4" 
//                 id="morelike-tab" 
//                 data-bs-toggle="tab" 
//                 data-bs-target="#morelike" 
//                 type="button" role="tab">
//           More Like This
//         </button>
//       </li>
//     </ul>
//   `;

//   // --- Episodes content ---
//   let episodesContent = "";
//   if (card.seasons && card.seasons.length > 0) {
//     card.seasons.forEach(season => {
//       episodesContent += `<h5 class="mt-4">Season ${season.season}</h5>`;
      
//       season.episodes.forEach(ep => {
//         episodesContent += `
//           <div class="card text-white flex-row navbg mb-3 border-0 rounded shadow-sm">
//             <div class="col-3">
//               <img src="${ep.img || card.img}" 
//                    class="img-fluid h-100 object-fit-cover rounded-start" 
//                    alt="Episode ${ep.ep}: ${ep.title}" />
//             </div>
//             <div class="col-9 p-3 d-flex flex-column justify-content-between">
//               <div>
//                 <h6 class="card-title mb-1">Episode ${ep.ep}: ${ep.title}</h6>
//                 <p class="card-text small text-muted">${ep.description}</p>
//               </div>
//               <div class="mt-2">
//                 <button class="btn btn-danger btn-sm">▶ Watch Now</button>
//               </div>
//             </div>
//           </div>
//         `;
//       });
//     });
//   } else {
//     episodesContent = `<p class="mt-3 text-muted">No episodes available (this might be a movie).</p>`;
//   }

//   // --- Full Tab Content ---
//   const content = `
//     <div class="tab-content mt-3">
//       <!-- Episodes Tab -->
//       <div class="tab-pane fade show active" id="episodes" role="tabpanel">
//         ${episodesContent}
//       </div>

//       <!-- More Like This Tab -->
//       <div class="tab-pane fade" id="morelike" role="tabpanel">
//         <div id="morelikethiscontainer" class="mt-3"></div>
//       </div>
//     </div>
//   `;

//   // Inject into container
//   container.innerHTML = tabs + content;

//   // Populate "More Like This" immediately
//   if (card.genre) {
//     populateMoreLikeThis(card.genre, card.id);
//   }
// }

// function populateSeasons(card) {
//   const container = document.getElementById("seasonsContainer");
//   container.innerHTML = "";

//   // Create nav tabs (fixed: only two)
//   let tabs = `
//     <ul class="nav nav-tabs" id="seasonTabs" role="tablist">
//       <li class="nav-item" role="presentation">
//         <button class="nav-link active" 
//                 id="episodes-tab" 
//                 data-bs-toggle="tab" 
//                 data-bs-target="#episodes" 
//                 type="button" role="tab">
//           Seasons & Episodes
//         </button>
//       </li>
//       <li class="nav-item" role="presentation">
//         <button class="nav-link" 
//                 id="morelike-tab" 
//                 data-bs-toggle="tab" 
//                 data-bs-target="#morelike" 
//                 type="button" role="tab">
//           More Like This
//         </button>
//       </li>
//     </ul>
//   `;

//   // --- Seasons & Episodes content ---
//   let episodesContent = "";
//   if (card.seasons) {
//     card.seasons.forEach(season => {
//       episodesContent += `<h5 class="mt-3">Season ${season.season}</h5>`;
//       season.episodes.forEach(ep => {
//         episodesContent += `
//           <div class="card navbar text-white flex-row bg-dark mb-3">
//             <div class="col-3">
//               <img src="${ep.img || card.img}" class="img-fluid h-100 object-fit-cover rounded-start" alt="${ep.title}" />
//             </div>
//             <div class="col-8 p-3 d-flex flex-column justify-content-between">
//               <div>
//                 <h5 class="card-title">Episode ${ep.ep}: ${ep.title}</h5>
//                 <p class="card-text"><small>${ep.description}</small></p>
//               </div>
//               <div class="mt-3">
//                 <button class="btn btn-danger">Watch Now</button>
//               </div>
//             </div>
//           </div>
//         `;
//       });
//     });
//   } else {
//     episodesContent = `<p class="mt-3">No episodes available (this might be a movie).</p>`;
//   }

//   // --- Tab Content ---
//   let content = `
//     <div class="tab-content mt-3">
//       <!-- Episodes tab -->
//       <div class="tab-pane fade show active" id="episodes" role="tabpanel">
//         ${episodesContent}
//       </div>

//       <!-- More Like This tab -->
//       <div class="tab-pane fade" id="morelike" role="tabpanel">
//         <div id="morelikethiscontainer"></div>
//       </div>
//     </div>
//   `;

//   container.innerHTML = tabs + content;

//   // Populate More Like This immediately so it's ready when switched
//   if (card.genre) {
//     populateMoreLikeThis(card.genre, card.id);
//   }
// }

// function populateSeasons(card) {
//   const container = document.getElementById("seasonsContainer");
//   container.innerHTML = "";

//   if (!card.seasons) return; // If movie, skip

//   // Create nav tabs
//   let tabs = `
//     <ul class="nav nav-tabs" id="seasonTabs" role="tablist">
//       ${card.seasons
//         .map((s, i) => `
//           <li class="nav-item" role="presentation">
//             <button class="nav-link ${i === 0 ? "active" : ""}" 
//                     id="season${s.season}-tab" 
//                     data-bs-toggle="tab" 
//                     data-bs-target="#season${s.season}" 
//                     type="button" role="tab">
//               Season ${s.season}
//             </button>
//           </li>
//         `)
//         .join("")}
//     </ul>
//   `;

//   // Create tab content
//   let content = `
//     <div class="tab-content mt-3">
//       ${card.seasons
//         .map(
//           (s, i) => `
//           <div class="tab-pane fade ${i === 0 ? "show active" : ""}" 
//                id="season${s.season}" role="tabpanel">
//             <div class="list-group">
//               ${s.episodes
//                 .map(
//                   (ep) => `
//                 <div class="list-group-item bg-dark text-white">
//                   <strong>Episode ${ep.ep}: ${ep.title}</strong>
//                   <p class="mb-0 small">${ep.description}</p>
//                 </div>
//               `
//                 )
//                 .join("")}
//             </div>
//           </div>
//         `
//         )
//         .join("")}
//     </div>
//   `;

//   container.innerHTML = tabs + content;
// }

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