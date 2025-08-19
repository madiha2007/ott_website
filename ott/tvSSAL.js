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
    description:"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
     seasons: [
      {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "", 
            description: "Ambitious gang leader Thomas Shelby recognizes an opportunity to move up in the world thanks to a missing crate of guns.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdXboDE8HuzY07uTd9hiLaJlsQNzaGG6tdo1w9k9I3lztKokOY1F2OpX9KMC5RgRefZeBIpUkSaRnVdlonmaE52mf6eZW5APOVi5bQboYAy8diSs0qicI8Ea.webp?r=c76" 
          },
          { 
            ep: 2, 
            title: "", 
            description: "Thomas provokes a local kingpin by fixing a horse race and starts a war with a gypsy family; Inspector Campbell carries out a vicious raid.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf9vorP0O85zMsmyVQ0NdXlq2gIDYX4Yy_-h3urr0gZFDBgfF9zDJqzlWRzaMk25y2xW4FryEzlNa-iMJxaXTu6J4Ole7wrcD_E9HmLcbrNQj_WYsaM0iSZ_.webp?r=c06" 
          },
          { 
            ep: 3, 
            title: "", 
            description: "Thomas schemes to get closer to Billy Kimber at the Cheltenham races, and considers an offer from IRA sympathizers to buy his stolen guns.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaCYn3bDH50DZ5_qTvBzocxQ0SoglZ0wOxTlYz3QBs3OZIBh6JuiZhPRCdFsJxwDTh9Xr4CILLkIGE9qHy9DOULAZ7yP2_3_O4PxLfNHRwYRWdSx7eWP5JFF.webp?r=b69" 
          },
          { 
            ep: 4, 
            title: "", 
            description: "As his war with the Lee family escalates, Thomas harbors suspicions about his brother's fiancée; Campbell pressures the gang to deliver the guns.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfcGz3ctwYSlE8oc2m1pwVmwqqVnl9e3CYvQ_ru6oDcjawKb3EtLaD1LKAJWYYyiptHTgp9u06F2yLQIAZl8g0E_xmuv636UDXqEEC74j4FNAk0WpIO98Pk3.webp?r=753" 
          },
          { 
            ep: 5, 
            title: "", 
            description: "Thomas deals with an IRA chief bent on avenging his cousin's death; Grace must decide whether her loyalties lie with Campbell or Thomas.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUBA4blFQBpiWrHpHh5JqOi0MZ1_19dL2rf0Y1nmyIzxStGPSPcBN_mfr0Gd46Ftd72WkHluPw8NoZFxztGzDCbORn6opFzBtpuhsrakagbfT5fThzjCXV0e.webp?r=a07" 
          },
          { 
            ep: 6, 
            title: "", 
            description: "Thomas prepares to oust Billy Kimber from power, but family secrets that come to light and the obsessed Campbell may prove his undoing.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbp7vfgygpxV5AYbO9sZ5POGocZQqUdpKepQpCBK6da2zWa_n1rBC4JdTOnj8050Ki_JF0iqgsWXci-XRJSWblV3uZj08fGcl8PPoesR2B-MOTU4mCjg49TB.webp?r=e86" 
          }
        ]
      },
      {
        season: 2,
        episodes: [
          { 
            ep: 1, 
            title: "", 
            description: "When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcjTGT5_fXSY4ZUnQfMooEQNXAQnmMd3ToZJ0uBjAZdhYF4kcyDHVQEERTOALVMSoBdhcC113poMV3GZTsPTkhcfE9WqTTvgv-myugOC98MhEggHyr4T1VVP.webp?r=f51" 
          },
           { 
            ep: 2, 
            title: " ", 
            description: "After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game..", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTO-8EZUW4dro9kze-skcj3swYs4cCUrX5aoF9KahWOz9l_T4f4i3LyUPiYbS1wRYcSihaNb67OAxjX5CSMrn3E1ZxgWxRNyogYF0ES7erZnD1YyyqkltsyE.webp?r=5a6" 
          }, 
          { 
            ep: 3, 
            title: "", 
            description: "After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYG9m7AwG40jpH-fm9mz-Qw70ojrKuTxvElLucsB2dn-azzaUjQlVMSJ_c97AHD8-KCFfnxJs9SxV23YA0qVkHnndNmK1lbeW9zX9hV2DIEC3w5eDIWOPKTt.webp?r=a44" 
          },
          { 
            ep: 4, 
            title: " ", 
            description: "The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf_P3p2kWXJP8DEhzhty070LljBdL-0ncc6AQW45UWnaG8ozZFNhVegalEhJfUJdVEUlNiSqcVGX9gE1qGeRuCH6DFfDtLjIJcZMZaKlZCLRODrJxyu4Pn3w.webp?r=fba" 
          }, 
          { 
            ep: 5, 
            title: "", 
            description: "The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe1NxeyC_6lXifu5rOF9cutjir3mkduHXZXOKtuq5HJ9OmpigXTnTe3habUbI2TaLRFzw1vIpU6mUfUxD7PqI0Qy3Fnq3_qSLCMz8xWNYzpWO3ouMikIo2GX.webp?r=63b" 
          }, 
          { 
            ep: 6, 
            title: "", 
            description: "Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTGk9UIbS-QQ5E5YKzRvVO5Whm1VLSfKn4qaCCqdb7dC7NaU-sVEWbqoqXgq7PVAQKfuaHe0iKRIwqzLKjfiggMeLUlDyNqyCuAas31Q8OXSkVxXm-KJWMN-.webp?r=856" 
          }
        ]
      },
      {
  season: 3,
  episodes: [
    { 
      ep: 1, 
      title: "", 
      description: "Tommy marries Grace, but an assassination at the reception threatens his happiness and pulls him deeper into criminal alliances.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQLgPO93r8jLEyO1ybmNDvONwJ71nYmXjCF9y5vXO8HgU1nLpGLzk46j44_1x0uG7pFHWueKUG9PRHhf3r2mukB5GpW5mJKhPNTf0LoSyNqFd6dvJHLPh6g.webp?r=7c8" 
    },
    { 
      ep: 2, 
      title: "", 
      description: "A Russian business deal forces Tommy into a dangerous conspiracy, while Polly's past comes back to haunt her.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfYjaLLXkVYbPkTSG4WUIybHSeR5vUZlGxNcHnbcqwzNYVheHTb5UqaEB-WXKx6paUEv5Fbcxh2_F7ESf4RQgFHYNGsG-4lG3MHq0rfhE2F1AojshHD4xyo.webp?r=8ae" 
    }, 
    { 
      ep: 3, 
      title: "", 
      description: "Tommy must prove his loyalty to the Russians while Arthur struggles with his violent nature and family ties.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUjpE6OEdO2vvppcTq3ZpDeHDQuG8nni97jB9ltHqXRGSC6puElBu85ZhyOiSoilfL0ReVxYl6yB2lwLjc5B7p7mLXqWfC1woXtT0ldKuVgclIYPsgAox44.webp?r=6f7" 
    },
    { 
      ep: 4, 
      title: "", 
      description: "The Shelby family faces betrayal as their plan to rob the Russians grows more dangerous and complicated.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRlS5tV1qU9g1bnxX8mS1n8zoUTLGPNMDavA_vBhClK7yo4FbAFQZ8AUYxE7u18JfY8FEiJAlTgwJjEWbA38EZTrsnOm50wlV9Rrm2LqT_sOikdxOErypwE.webp?r=1f9" 
    }, 
    { 
      ep: 5, 
      title: "", 
      description: "With enemies closing in, Tommy uses deception to protect his family, but the cost is higher than expected.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWbbm7X1VQ6gX6y2HzO3Z0zrdO6ilrH8kIMbeY1kY7gTW5K17IIVCjRjIM6HV7MUkOwZTLf9UgUZnL7IJQftrnCO7gSmPEJ1UnrKBlivE2IFqgbyy9piY_c.webp?r=8c5" 
    }, 
    { 
      ep: 6, 
      title: "", 
      description: "In a tense finale, Tommy makes a deal that sacrifices those closest to him in order to secure power and survive.", 
      img: "https://occ-0-116-114-80.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYb-Va8ayx6dNLqMbJQgeglOj7JWoZaNhphj3HoEbrpbOMfnR6ZW4fo0p8H6X9RTl0ayX9EHLCSdpujh_dQoT5Q2F4kHYxQsyMxhtDL0QvnAQYh3fgwsUFI.webp?r=b35" 
    }
  ]
}
,
      {
        season: 4,
        episodes: [
         
        ]
      },
      {
        season: 5,
        episodes: [
         
        ]
      },
      {
        season: 6,
        episodes: [
         
        ]
      }
    ]
  },
  {
    id: 'the_glory',
    title: 'The Glory',
    img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVfPGa77dyP88-Xt_q-1tFannPOu5z0IK0DpvzCAZQUIPmWD5S8H2COg1wpWnIdBmRnxz3rFkobaI53h0zDaW9A7bNskvscjOkM9XWv7TT-_7KKnGgQqLt680sXelr48HssQ.jpg?r=3d2',
    genre:"thriller, Melodrama",
    description:"A woman lives for absolute revenge against her childhood bullies who destroyed her life",
    seasons: [
      {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "", 
            description: "Tormented by her high school classmates and with nowhere to turn for help, Moon Dong-eun sinks into despair before deciding on a new mission in life.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZuUza6rFymCeUANLN2JJ2ReLe-6_p7dcv7gHEacQ8A_hnMPOX4zDALsORWHO2mIprxbLFLLh0boeVYwJGYfLX33xEh3hsIWnCSrzClt4U7aEJYzuO32LZLN.webp?r=324"
          },
          { 
            ep: 2, 
            title: "", 
            description: "With Park Yeon-jin’s wedding on the way, Dong-eun’s revenge rolls out according to plan. Meanwhile, a fateful encounter at a hospital takes place.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbvJMhURKTrI9bP7c5LCCuvbkF0gjHeNqUzxm3y8IMUszR-JZDwsnLsW7EXE-Qm5rmPzVkAINNa8CfU-eDWaOxGzbmacG2WPCxjirtt7t1p8cGgg7gIw8wVn.webp?r=674"
          },
          { 
            ep: 3, 
            title: "", 
            description: "After securing the services of an amateur sleuth, Dong-eun uncovers scandalous secrets that she leverages for the next phase of her scheme.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSIgyyAwQ9zjGDt1OuD7hmxfuwl6RwyCBXG-d-WWMYDuo4wJHP466eVyWFCp6m7Vh9mpc8s4TLr37STgOD3mr1i_4Xa7S1PcWwy2vCTE_2052npOqlJoyJN1.webp?r=77b"
          },
          { 
            ep: 4, 
            title: "", 
            description: "Already on edge over the past resurfacing, Yeon-jin grows more anxious when she learns about her daughter's new homeroom teacher — and of a sudden death.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXMECk0swWWXwnFOLni7dyplgU-EPst7ovRXtrhM0wLUIXDLYiXyOHRRzD4bz7rNbBL8tZLojwprI2GapviPktjQWUDX4vVfPW3LkF-YUb9wX4ALPN8ivx5L.webp?r=614"
          },
          { 
            ep: 5, 
            title: "", 
            description: "While Ha Do-yeong comes across an intriguing game opponent, Yeon-jin realizes her deepest secrets are at stake when she tries to intimidate Dong-eun.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5Lqpc4Ms6rE73gic3RwOqIO3pyE_WPDG9-QGZ0YCmLN2DUBiCCAGGHrN4p4qYC3JUYJDv8ATWs5Mk6mssJn3VZ86V6dSv3GtW5x2A-MVVje4z8D1krH-_j.webp?r=e0a"
          },
          { 
            ep: 6, 
            title: "", 
            description: "Son Myeong-o's sudden absence causes tension in the friend group. Dong-eun finds her trust in Kang Hyeon-nam tested..",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZYGVrZLryInPHHmBSPwYfrhhOZm-mJ2b01hoClWINgAAmA3p9bFJpp2sNtmfsgaYKmWRVoCPkbGjkc15rVOEYtQMJUuIFt48OB74cAQTqGhVKnom4sb9yhu.webp?r=012"
          },
          { 
            ep: 7, 
            title: "", 
            description: "Dong-eun shares her traumatic past with Joo Yeo-jeong, who has unfinished business of his own. A new plan is put in place for Hyeon-nam’s daughter.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdgZBXmtVUOWzFjLH634HZO86q3ZXVSEoRXgOOcqXx0tP9bP5phJQ2yfJPWZadqihXeLLSeFbAsXazoiBcWvwDzIxWw9ZeyLPlzgFL--n8IleidvGuBAzjGr.webp?r=f02"
          },
          { 
            ep: 8, 
            title: "", 
            description: "Do-yeong meets with Choi Hye-jeong to find out more about his wife — and her past. Yeon-jin digs into Dong-eun’s private life.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtKA1QePD4j2DCkmiBOCm-J2ZQouvUvmOsywHhSlH8BroMnRaQSYH6fc71hUT63qrYV5YQK8t71eA3yoaEIDRO6IF9elLD-S1Zrz75l5nBufiFIbfXd3EyX.webp?r=343"
          },
          { 
            ep: 9, 
            title: "", 
            description: "Questions arise over Myeong-o, Dong-eun gives Yeon-jin a chance to come clean about her past, and the circumstances of Yoon So-hee's death are revealed.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc-E83boKoOL59dvD6P0j_rNqHtamBVw-Bhi1fmQaFUAzqxzvF1YCrlfbOw5LmrAW3mladKBD4Dr3igEbYd3E1BdrDczNyn1FxfzhAJtTienirpzYq6ji8cG.webp?r=a52"
          },
          { 
            ep: 10, 
            title: "", 
            description: "Yeon-jin threatens Hyeon-nam after discovering her involvement with Dong-eun. Yeo-jeong devises a way to get the truth out of Yeon-jin.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSFW1-SVgMS1Rkc9vMi1QZypGglhqP4UXoH6yMWk6T7J9WVt2ZEMa1VqIAfRGru5-JLviCI3grBVymqFrvUHIbvodll43weOToJfQwAk2oVh2lWhpsmSbie6.webp?r=7f5"
          }
        ]
      }
    ]
  },
  {
    id: 'the_crown',
    title: 'The Crown',
    img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaSMGPuPUDfc6l_t-QWv4ZLQ_0gK38ne168mjsP-FUSdnPu6FUCQyyQ0Q4bSstaY55d2cq9kpBQLbOwY3h8YVXnX5cEgxxi09WTq-_JhgKxaFKHMre_IMwad8WYkV1ALTIQV.jpg?r=8c1',
    genre:"History, Drama",
    description:"Follows the political rivalries and romances of Queen Elizabeth II's reign and the events that shaped Britain for the second half of the 20th century.",
    seasons: [
      {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "Wolferton Splash", 
            description: "In 1947, Elizabeth and Philip marry. In 1952, King George VI dies, and Elizabeth becomes queen. Winston Churchill is appointed prime minister.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ52ldRYw_XMBRHQQMxuxA-aPysulcXmYo8LW7PzgzOuZv7ZZWhA3M0iJRW5kyYcK7mJU-PRCRk8wfMmbR1-80a-lM1zPigUNX2M_1G9rPyq8j5KbHi4aDrO.webp?r=83d" 
          },
          { 
            ep: 2, 
            title: "Hyde Park Corner", 
            description: "Elizabeth struggles to adjust to her new role as queen. Churchill faces opposition from his own party and the press.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXSVsk-IsfMMvOtfeWo5wwmxjVznpAFYtsgNP3gY5m8yh00uFzH9Mw4BBb-_1vh0rnS7CepiGDa8lvhEEBlRcuYVyz2lRN2O8taqsXPd1neVfxx9CDIyhkMr.webp?r=cc2" 
          },
          { 
            ep: 3, 
            title: "Windsor", 
            description: "Elizabeth's coronation is planned, but she faces challenges from her family and the Church of England.", 
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRQEByFdeUU1O9lV3uBl17FkGRDRO3xVMt4g2juyA74_xPUE9gCsre5KASCbwMlINLw4nIl42M3Eb_KyIeG8bgOiKQqGyWGWA-MtJUS67KdZGLjxqJxplG3A.webp?r=2c8"
          },
          {
            ep: 4,
            title: "Act of God",
            description: "A storm hits London, causing chaos and destruction. Elizabeth and Churchill must navigate the aftermath and its impact on the monarchy.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfA2JjjFRAYR1yO6io8pYP3T-5Ylbrm0ZsdHmpZHsPHfOwQL-HLP79Ng44wdxrWnBJ0pNYyobJDLGzjI-dYWUU_7eKz3W8HRmds_bYTBJUGNSsmhxvXFcCDT.webp?r=805" 
          },
          {
            ep: 5,
            title: "Smoke and Mirrors", 
            description: "Churchill's health declines, and Elizabeth must consider her options for a new prime minister. Meanwhile, tensions rise with Egypt over the Suez Canal.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABai0AVBt1l1kXxTDA0U3X3_sa6xUcx2FHf_UkQ3MkbOg95gjRGczCZlt728CYrcaWsQPNfsiM7AOtMsFbD6ltQAj2XRiqA9eR1cuBGNzoIp_XJ-DFHkaomJO.webp?r=ee1"
          },
          {
            ep: 6,
            title: "Gelignite",
            description: "Margaret and Peter come to the Queen with a request. With a royal scandal about to break in the newspapers, the Queen Mother intervenes.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbQfBkNnCTV3zaJ4YkIccnL1AOgod6exyRleGScULV1jcprXQ54l4VF6odpAv4S4rG5bQI22mY2hVLJHe2WIue1nniJOpgDstrpkOh48Mo1fM8tqvrY_yG7G.webp?r=9a9"
          },
          {
            ep: 7,
            title: "Scientia Potentia Est",
            description: "Elizabeth and Philip's marriage is tested when he is sent on a royal tour of the Commonwealth. Churchill faces a crisis in Egypt.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ_nhp6RRWhTqMnnKeyROdgbENusAxti4ZzTFzNhih8-kZ4Wh-Iay9ATHoxW5goDStEJXvaoBizfOyGLju9r9x9CeZQVG5KY30SyROXPvT2s-5KirfyJi0ph.webp?r=104"
          },
          {
            ep: 8,
            title: "Pride and Joy",
            description: "Elizabeth and Philip's relationship is strained when he is sent on a royal tour of the Commonwealth. Churchill faces a crisis in Egypt.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc7LVkP3e82AHY-hNQXpSC136yXSwyNMPoxqoOtCLfhejxo7vHI0Cdki2pDCn7jBsVu-38NM0NkJFYC8QRptqR97OuRyMX78a0BbhtQ6cTQTtPR3YhDKTS10.webp?r=cd4"
          },
          {
            ep: 9,
            title: "Assassins",
            description: "Elizabeth and Philip's relationship is tested when he is sent on a royal tour of the Commonwealth. Churchill faces a crisis in Egypt.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf6Ys5spu-72dbasu_Esl4TlJe58a3Ipl3JRPaBxxGDgkwcGxiSJQjPih45Vf1Jj0c7D9j_FYuwXUvo-I7MgNQDeWfhY187y1XMRtqhlPe78Ej8VdWSedN5M.webp?r=c40"
          },
          {
            ep: 10,
            title: "Gloriana",
            description: "Elizabeth and Philip's relationship is tested when he is sent on a royal tour of the Commonwealth. Churchill faces a crisis in Egypt.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf1fz4FSEhTMTSJCMNfPFKoV5OnQmOcs0SCbetO_JvAaw9JwqhS7my2PzNaVM29y7augUheZdG3Y_g2cqeLgj1Oytf6QFZlP7dEsczKrGiK1nxla9xdNub2t.webp?r=835"
          }
        ]
      },
      {
        season: 2,
        episodes: [
          { 
            ep: 1, 
            title: "Misadventure", 
            description: "In 1956, Elizabeth faces a crisis when her marriage to Philip is strained by his affair with a ballerina. Churchill is forced to resign as prime minister.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaKddNDJchS2JJ5oOZdmV0Q0kaW_k6T6TiqBoduEUChZRJG4vTi2mm5cxljyQsLIvotjnaBXYfBRo1UNt4uPqaxPnIyJL9vXot8qRCuRbcsayJKDPR5aa7ti.webp?r=096"
          },
          {
            ep: 2, 
            title:"A Company of Men",
            description: "In 1956, Elizabeth faces a crisis when her marriage to Philip is strained by his affair with a ballerina. Churchill is forced to resign as prime minister.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABegmvaFpbpViN4bIet5PqKDK2vj7taf2jp8l6Aj8IE4aIwjURNo0Hnc49KOGTz4DEBZ0aPiHO8pnyZDIvfUK9bt2kbVuzDCBdsDYVFX9yT3wCpjNKH8-FXyO.webp?r=0a4"
          },
          {
            ep: 3,
            title: "Lisbon",
            description: "Palace insiders try to prevent a scandal that could reflect poorly on Philip. Eden faces censure from his cabinet and the press.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS0BeIs83O7mBWXo1i_syfEvT3lmUvx7Yjc361vAocRAb0MoMLQLmFCfMp9CyoVw9bUKbsedc22x0aAKjCbL0-cwe-AszcYkLkabnRDkDrUf9PmyNBVeUuAR.webp?r=aa2"
          },
          {
            ep: 4,
            title: "Beryl",
            description: "When the Queen and Philip throw a grand party for their 10th anniversary, both Margaret and the new prime minister experience romantic tribulations.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcWP3bzO8jpoh6Mrc08xsEK2_mVl9kcfCNTLmasPMmUmiMQ26xylSJQJY5EOZ-PygLllxv_hfiokYGdaaclrUl0B9DSgpJdYiAeT5Rvd_-uJCwzYO3h0NWFY.webp?r=dac"
          },
          {
            ep: 5,
            title: "Marionettes",
            description: "As the Suez Crisis escalates, Eden's health deteriorates. Elizabeth and Philip's marriage is tested when he is sent on a royal tour of the Commonwealth.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUKxc4l2r2U6QKEfU4R-ULkbSgDcoxDOM4HB3EL6sVxQH26D7edOSevCowDMJa5ahGZ9lWnGsx6AUoRhJzWXv6cYU3qBFvvERi3NbkB16Utw7iF4o9GA3Nbx.webp?r=f02"
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
      },
      {
        season: 5,
        episodes: [
        ]   
      },
      {
        season: 6,
        episodes: [
        ]   
      }

    ]
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
    description:"Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?",
    seasons: [
      {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "Monster: The Jeffrey Dahmer Story", 
            description: "After throwing his neighbor off the stench coming from his apartment, Jeff heads to a local bar, where a stranger takes him up on a tempting offer.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSj-yCOkKDF__bq9nSKjuAJgLnLkplc4uGxTqtc18vt2g18eb8K_pMZ0GxrQChMIAQvwPWuvp_vmFhyu3rURgrekQjCXOLBieZoJLUfsWjgl_MG3hgSeV-X3.webp?r=1c1"
          },
          { 
            ep: 2, 
            title: "Please Don't Go", 
            description: "A young Jeff contends with troubles at home and school. Years later, his strange behavior evolves into murderous deeds that slip past the police.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcgnlrYke8TehERqPn9qkFIs06ff9oiJqZzdYbMyrXFypyvSRkdJ_SBxcAsCl1t_H3ClqJy7_sE5pmW7tV-Pn1ZcGZhW6AN_qUvD6dcrY1DVaE8ToP9CwR_V.webp?r=698"
          },
          {
            ep: 3,
            title:"Doin' A Dahmer",
            description:"Left to live alone after his parents' turbulent divorce, high school senior Jeff breaks routine when he invites a hitchhiker into his home.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYXSxDVwZayBqSKucied9G0qzcqziorYzurLh1V4i-Rsalf4kwqt4_FM2CC6GVQDuBqVMhHAsAEds6W5Mdy5si1satDqAsmghjRnx3_Eqtqetl-hOw2BzBvn.webp?r=61a"
          },
          {
            ep: 4,
            title:"The Good Boy Box",
            description:"From high school to the Army, Jeff struggles to find stability. While living in his grandmother's house, Jeff begins targeting young men at gay bars.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXIBqO9AyxEOg1l69oaj6Du_ptb_QOOUCL-YzP9IJZ1VZeGg_LHAYcLhbrMWZYx_TzPStAs5f7xSW2a4jqsuMQFWO4WGbQQiFU4Mjqu2s-1xt70kjoPTj0ZI.webp?r=59a"
          },
          {
            ep:5,
            title:"Blood on Their Hands",
            description:"Jeff's list of victims grows longer without a full police investigation. An encounter with a teen lands him in jail. Later, he gets his own apartment.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVPysGJ4xzJkeFopjGARrxhGXv9whrZZ9BHxWR1r3fJWGtN6GPqiY7J6lproSpvITu6SuyDpNEydBwbfodZKE9p_QwyfVdqx21m6yy65GUPSXCBrty1LHdNx.webp?r=b7c"
          },
          {
            ep: 6,
            title: "Silenced",
            description:"Aspiring model Tony moves to Madison and meets Jeff at a bar, beginning a relationship through handwritten notes that takes a dark turn.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbIvpIGmltitJ1R4F4FIh2XVm-v1psPMyL5duod4rwcHYPQXRqpRpET8_DkI9M5FjoALnV5vi6OiTFW4qBnHGwC-Jo-B4jU07viI0zufGnoUUMoxQlyS6HJo.webp?r=b08"
          },
          {
            ep: 7,
            title: "Cassandra",
            description:"A prominent activist meets with Glenda, who recounts her harrowing experiences living next door to Jeff and how her concerns went largely ignored.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUVytjnto_9aozLWJiAVlvNmsjSEilXkJJ20LKe8zZpgfHeMMt6gGY_FS4fN1SNLuKuWpXyGz8w_oj5KOy7cgjtKOapDHrIf-XvCO10hm3z1fMS2wSnJgvCN.webp?r=2df"
          },
          {
            ep: 8,
            title: "Lionel Dahmer",
            description:"Jeff's father, Lionel, returns home to find his son in a dark place. After Jeff is arrested, Lionel tries to understand what went wrong.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABacl8rEVglxIWmmOnoTw8BMroDWFvyXK85gl18jf2mCkYTKQvD9J1wL_fMj5D9nl7xKVS5ktfWQDlWYExDtJY65Wb3pE3z3WGUMd7WN4bt9S9uwF7nQHFHkm.webp?r=002"
          },
          {
            ep: 9,
            title: "The Bogeyman",
            description:"Glenda, the victims and their families do their best to move forward despite haunting memories, while Jeff attracts fanfare from behind bars.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbwkKrHRLTCcByNFKkrs4kSsDrKClzKSfbGjngsbvDajRC_xuD4aIfCrGYn8oDbRErYgNP5815XZE5RR8lnMQgRIn20LfPE7MMZNFIwsuIQ5NF3v-tnsVxRY.webp?r=95f"
          },
          {
            ep: 10,
            title: "God of Forgiveness, God of Vengeance",
            description:"As the trial begins, Jeff's family and the victims' families face off in court. Jeff's fate is decided, and his story comes to a close.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYXoNSO3K8963ulMiB9fAbW7-vqLVDNgjpP9ntmV0V3NwKlOP-9MGU7SVOW_RZQczYtuBAE9APkpEBue7GOlAefJ9iWBql33e4HEICHJTFziLenC6hIRKPUp.webp?r=e5e"
          }
        ]
      },
       {
        season: 1,
        episodes: [
          { 
            ep: 1, 
            title: "Monster: The Jeffrey Dahmer Story", 
            description: "After throwing his neighbor off the stench coming from his apartment, Jeff heads to a local bar, where a stranger takes him up on a tempting offer.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSj-yCOkKDF__bq9nSKjuAJgLnLkplc4uGxTqtc18vt2g18eb8K_pMZ0GxrQChMIAQvwPWuvp_vmFhyu3rURgrekQjCXOLBieZoJLUfsWjgl_MG3hgSeV-X3.webp?r=1c1"
          },
          { 
            ep: 2, 
            title: "Please Don't Go", 
            description: "A young Jeff contends with troubles at home and school. Years later, his strange behavior evolves into murderous deeds that slip past the police.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcgnlrYke8TehERqPn9qkFIs06ff9oiJqZzdYbMyrXFypyvSRkdJ_SBxcAsCl1t_H3ClqJy7_sE5pmW7tV-Pn1ZcGZhW6AN_qUvD6dcrY1DVaE8ToP9CwR_V.webp?r=698"
          },
          {
            ep: 3,
            title:"Doin' A Dahmer",
            description:"Left to live alone after his parents' turbulent divorce, high school senior Jeff breaks routine when he invites a hitchhiker into his home.",
            img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYXSxDVwZayBqSKucied9G0qzcqziorYzurLh1V4i-Rsalf4kwqt4_FM2CC6GVQDuBqVMhHAsAEds6W5Mdy5si1satDqAsmghjRnx3_Eqtqetl-hOw2BzBvn.webp?r=61a"
          },
          {
            ep: 4,
            title:"The Good Boy Box",
            description:"From high school to the Army, Jeff struggles to find stability. While living in his grandmother's house, Jeff begins targeting young men at gay bars.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXIBqO9AyxEOg1l69oaj6Du_ptb_QOOUCL-YzP9IJZ1VZeGg_LHAYcLhbrMWZYx_TzPStAs5f7xSW2a4jqsuMQFWO4WGbQQiFU4Mjqu2s-1xt70kjoPTj0ZI.webp?r=59a"
          },
          {
            ep:5,
            title:"Blood on Their Hands",
            description:"Jeff's list of victims grows longer without a full police investigation. An encounter with a teen lands him in jail. Later, he gets his own apartment.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVPysGJ4xzJkeFopjGARrxhGXv9whrZZ9BHxWR1r3fJWGtN6GPqiY7J6lproSpvITu6SuyDpNEydBwbfodZKE9p_QwyfVdqx21m6yy65GUPSXCBrty1LHdNx.webp?r=b7c"
          },
          {
            ep: 6,
            title: "Silenced",
            description:"Aspiring model Tony moves to Madison and meets Jeff at a bar, beginning a relationship through handwritten notes that takes a dark turn.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbIvpIGmltitJ1R4F4FIh2XVm-v1psPMyL5duod4rwcHYPQXRqpRpET8_DkI9M5FjoALnV5vi6OiTFW4qBnHGwC-Jo-B4jU07viI0zufGnoUUMoxQlyS6HJo.webp?r=b08"
          },
          {
            ep: 7,
            title: "Cassandra",
            description:"A prominent activist meets with Glenda, who recounts her harrowing experiences living next door to Jeff and how her concerns went largely ignored.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUVytjnto_9aozLWJiAVlvNmsjSEilXkJJ20LKe8zZpgfHeMMt6gGY_FS4fN1SNLuKuWpXyGz8w_oj5KOy7cgjtKOapDHrIf-XvCO10hm3z1fMS2wSnJgvCN.webp?r=2df"
          },
          {
            ep: 8,
            title: "Lionel Dahmer",
            description:"Jeff's father, Lionel, returns home to find his son in a dark place. After Jeff is arrested, Lionel tries to understand what went wrong.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABacl8rEVglxIWmmOnoTw8BMroDWFvyXK85gl18jf2mCkYTKQvD9J1wL_fMj5D9nl7xKVS5ktfWQDlWYExDtJY65Wb3pE3z3WGUMd7WN4bt9S9uwF7nQHFHkm.webp?r=002"
          },
          {
            ep: 9,
            title: "The Bogeyman",
            description:"Glenda, the victims and their families do their best to move forward despite haunting memories, while Jeff attracts fanfare from behind bars.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbwkKrHRLTCcByNFKkrs4kSsDrKClzKSfbGjngsbvDajRC_xuD4aIfCrGYn8oDbRErYgNP5815XZE5RR8lnMQgRIn20LfPE7MMZNFIwsuIQ5NF3v-tnsVxRY.webp?r=95f"
          },
          {
            ep: 10,
            title: "God of Forgiveness, God of Vengeance",
            description:"As the trial begins, Jeff's family and the victims' families face off in court. Jeff's fate is decided, and his story comes to a close.",
            img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYXoNSO3K8963ulMiB9fAbW7-vqLVDNgjpP9ntmV0V3NwKlOP-9MGU7SVOW_RZQczYtuBAE9APkpEBue7GOlAefJ9iWBql33e4HEICHJTFziLenC6hIRKPUp.webp?r=e5e"
          }
        ]
      },
    ]
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
      description:"Jackie Howard's life is disrupted by a freak accident, she is ripped from her home and has to start over on a ranch in Colorado, with her guardian and a family of 9 boys, and 1 girl.",
      seasons:[
        {
          season: 1,
          episodes: [
            { 
              ep: 1, 
              title: "Welcome to Colorado", 
              description: "After a tragic loss, Jackie moves in with the Walters and tries to adjust to small-town life. But a new home and new high school bring new challenges.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfV4IMLdkm5-7RYcVO6_mXtoAkjsM32vMz_sZ6VPIOv7zFJxTg8TMJX9JcbaNRjczrCsqryhoIXlpf1klGSE06Hh0-iqSWG_sgAIbBcMLgUHXjoNnX3qnpBm.webp?r=b1b"
            },
            {
              ep: 2,
              title:"Live a Little",
              description:"When the brothers make a bet involving a prank on Jackie, she turns to Katherine but learns that the boys have their own way of handling their issues.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQrs2tkQ06CN_bdmzfY2GZh3GnNvQNjZbJlh4HSPe2Vgq7sGkfBH89fmARPjRhyyHMVGz75TmNKHRqj8NDioD8sOU2Jp2JZU8xyYgL7rU7prRI_HpN8k-ewU.webp?r=a4e"
            },
            {
              ep: 3,
              title:"The Cole Effect",
              description:"At the Homecoming Huddle, Alex and Jackie run the Walter family cider cart together with help from Cole, who struggles to accept life without football.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTTN3Noj_lxXeVnh1iFa7WDWl_1fj1khUGKm0fUEFux3nFAGjwIFVLQZmMvtoghcnCjXTu21Xem37uGN9DDjKadk81UvPrE7joBr4l07JyOoadimvfrGDUbk.webp?r=806"
            },
            {
              ep: 4 ,
              title:"Nineteen",
              description:"On Lucy's birthday, Jackie decides to skip school and attend a lake house party with Cole, where the two play a high-stakes version of Truth or Dare.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXuS4fVhvwvPDez1C4do9iQAFBIN16IH8O9bWsPWMiGv-npoyj9p3UHIO6tvxLIvcE0_gGuIZFHfD4ILIKiEUlscF2ruY7UGzLCNhxOSJb7GHblnoi2qRZoe.webp?r=19b"
            },
            {
              ep: 5,
              title:"Thanksgiving",
              description:"Jackie wants to avoid the first Thanksgiving without her family, but a surprise visitor lifts her mood and presents her with a difficult choice.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdC7D10M4PuVwDjnkzD6f1NwYh2MuUmySz6XF6d06bm2zfLYBjEu0yH2GwKN_weIQ_QBmDUctItgrwl4a6NS82FvLbv-VZdbfTL1zvkFcfXiNOQcBwegCv48.webp?r=cc9"
            },
            {
              ep: 6,
              title:" Baggage",
              description:"Before the big bonfire, Jackie learns about Cole and Alex's history with another girl. At the party, relationships new and old go up in flames.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaUcwcAyaf3MzfVS4BR8BJI6eVbfXKVMLPl0IgEOxNj_BgDgyBJLeX8Djx35ya8iGMaKHWxNwdqEd7Kj1Rr-wJ0QEXBlztqmPpMkCY0d-8pMVKqPKUAlFGok.webp?r=39d"
            },
            {
              ep: 7,
              title:"Small Town Rumors",
              description:"As rumors fly about the Walter boys, Alex and Cole's sibling rivalry reaches its breaking point. Later, the family deals with an unsettling emergency.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbIPkWaxUFjPNjeYeLsiAD35Kc_VToHmC-rQEfVfJEd1ZxP_f2Ld3V_2rJAh6TKbqksimppel8xMw9OcWPEtJjdRoFZuVIoampDEbVmI70zWuulctQvh2FmP.webp?r=d8a"
            },
            {
              ep: 8,
              title:"Spinning Out",
              description:"When Katherine wins an award for her veterinarian work, the family jumps to support her — except Cole, who instead heads down a path of self-destruction.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYzpVQr8sUswnKsJzAPBFkrPxpU-Qhw1xoE7hPAfwA1X5ypMYldHZ78J8DneMrNK0MjA3lQ3Yw0XZyyU0-fY8W975BQF6Uye5JnCtNfWSJBXaIUYUlJz1G5k.webp?r=b72"
            },
            {
              ep: 9,
              title:"Revolutions",
              description:"Jackie misses Alex's county fair rodeo for an important interview and tries to keep her distance from Cole after their hurtful exchange.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYAgHDVCbXjAzkuj4639YdXf88dS7x6w2lBkz2DlLnpDEoHL0_e4gNa0BUKXMFZAZsDyv8Bhb3d1mqcakmjALM3FGfJV1MKBLjg.webp?r=5f3"
            },
            {
              ep: 10,
              title:"Happily Ever After",
              description:"With the Walter boys' help, Jackie diligently plans a picture-perfect ranch wedding. But no amount of checklists can prepare her for what happens next.",
              img:"https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdpFOxMGvpFk9F07CmbNbKo5W9D5_taSBQztDqQSjyXZVspcCyu6nu8L8GYYV4TiVAGUjg2BVWw1R4GhdBUD0lhoKlH1zHuc4i-02EDHpF-mj9L4IxoWB059.webp?r=e00"
            }    
          ]
        }
    ]
  }
];

const cardData1 = [
  {
    id: 'the_waterfront',
    title: 'The Waterfront',
    img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeCoyd1zhlQZkuW2r6h4FTiQ4h1T6b3vkbsYbC2dvvo12J1GYtoDTgtlPwiomd0GU6RZBdnQfaPjil9f4HYTKrtpTyr_kyBhypNPRT4m4xLGoVw3sZyOn2Lvil6Vz7swthWn.jpg?r=426',
    genre:'Crime,Thriller',
    description:"As their storied North Carolina fishing empire decays, the damaged Buckleys grapple to revive their imperiled maritime heritage.",
     seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Deep Waters",
          description: "Struggling to support his family, dockworker Miguel uncovers suspicious activity on the waterfront after his brother disappears.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUhaie9GhxIr-UzbkbtlHfIEIAqKkyh2yqywXLOaLQMYkJSPRQxtg1-Zpng2zij9E8azLvfzMWisrG6eZ-NOmRuO8FSmPEVMpOemBKLLbw5lBHSu3agr1ybF.webp?r=276"
        },
        {
          ep: 2,
          title: "Shadows on the Docks",
          description: "Miguel confronts the dock bosses about his brother but finds himself entangled in a dangerous union dispute.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbC4MlxMAMhVfxbDWPOdfaUJCiLHgH_w_-sp4Urt14FwnC7sdW3iwXdb4XKCFt58CFolKVic0SQ6IEGpyHUgRiRtx6-IlYrwHhum_1SPx0vG2cC_6Ex0AKkp.webp?r=f86"
        },
        {
          ep: 3,
          title: "Blood Tides",
          description: "A violent confrontation pushes Miguel to make a choice between loyalty to family and survival.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRaRpOl0Il50W-GONn3Vk3BVx-KXFTg9hl_T4hdfaDNHZrRNBXO-gM4S4TSTbyeM_i_x0zvUk_IyVNUvqN4ocvMf2ronlttGCobfdmrI2XUGEblL1jIyowCf.webp?r=2be"
        },
        {
          ep: 4,
          title: "Currents of Betrayal",
          description: "Allies become enemies as the truth about the waterfront's smuggling operations begins to surface.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTjG807-JTXFeUlgxBnpGcvSMbJ3XVv7mLawHH5XxOuN7jyLWc4k0mk7vB8lO1eDFWGHRh09b_MWedSMxtv946LsyJ1bTOI6cKDBq7kuObLhsgYi5kuy4M23.webp?r=520"
        },
        {
          ep: 5,
          title: "The Last Dock",
          description: "With the police closing in, Miguel risks everything to expose the corruption threatening his family and city.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW0n232A4Yafm67mobZ5hN7JVQYDObXK-OGTgjy8-phJO4M0m-cr6GEj3COy-6k-DQ8H89B-1jOcTQey4_aLVg0aFRMF2B3KaSigJBqEYGXB9HCjf67iJo2i.webp?r=799"
        },
        {
          ep: 6,
          title: "Storms of Change",
          description: "As the storm hits, alliances are tested, and the future of the waterfront hangs in the balance.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdIcNce4l1nNhchzuNhZfCWT035SxoJF17uJTn0To_UcqYstQz5QUe73KE0N3aHyug0OTpAIW6JrlLoyncx5iWPtBnRzjIkb2_zR9q99uzn4XSlGdbQcInR3.webp?r=0ed"
        },
        {
          ep: 7,
          title: "Harbor of Hope",
          description: "In the aftermath, Miguel must rebuild his life and the community as the waterfront faces a new dawn.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZkVshnEVCESMrZiF8ZhvIeeCQlHfKzEGfzUiPmiwk0kLCCIj7ZziaFvXUj2GzDZyNnkjSmx8ooF8fHjPLvDOiroE313jPUzeUFgemxHlUIkcUTmJ-NRrI7T.webp?r=605"
        },
        {
          ep: 8,
          title: "Lost at Sea",
          description: "With the docks cleared of corruption, Miguel and his family look towards a hopeful future, but shadows of the past linger.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSFx8pR6P3WRlJjJZy7GFSjABgzOiTdkJg0CWMQtT0pX0wK2X5u6ikwyC0WQvWK_D3Y3GEtNk_Si2yx2x4wmtMsl_F3RroV4UDeLMgjSsbeuXPoFy8Qz7nHt.webp?r=d3e"
        }
      ]
    }
  ]
  },
  {
    id: 'ginny_n_georgia',
    title: 'Ginny & Georgia',
    img: 'https://dnm.nflximg.net/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaHcyuDQoCed0zXVd9tRu7mbJLj_7yYGFiJd2RdxB3lWst-ZUzUvJqNrMfBlwWbd2yMCT2pDXSQH0KSAUvw_uuKk-3E_NwFaYvoQcnqrCl5JJUgR8y9ie0ddOUvaXvY2-NQw.jpg?r=c0a',
    genre:'Romance,Comedy',
    description:"Angsty 15-year-old Ginny Miller often feels more mature than her 30-year-old mother, the irresistible and dynamic Georgia Miller.",
     seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "Pilot", description: "Georgia Miller arrives in the quaint New England town of Wellsbury with her daughter, Ginny, and her son, Austin. On her first day at her new school, Ginny faces challenges fitting in.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdxs7EAwXlRY3x8ljsu7q1MaRJE_4PQAQDHZlZAvUFb31is998G7yUSNZPCK7cvKaVdht1pdA8cTxTj4Rxg_9oCmRycLI1vgylgc9TES6KwQ3UEWTozJwmag.webp?r=757" },
        { ep: 2, title: "It's a Face Not a Mask", description: "Ginny struggles to fit in with her new friends and deals with fallout from a night with Marcus; Georgia tries to problem-solve for both Paul and Ellen.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ6iixDV9SjkwgdXq31dliTgM9mvPnHnl16a_qdeszU9JaTWHRHWcESA6J3B6_CJPMH7L9Cqp1julzKNz8IFrZ6orZzgwfpgtm6_I64xg74dksR3tvSLKAJY.webp?r=324" },
        { ep: 3, title: "Next Level Rich People Shit", description: "During a sophomore sleepover, Max bares her heart, Georgia resumes old habits, and Ginny forms connections with Hunter and Marcus.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXneYP1_RFiv9QIoqHKa-ealjtyMPCUkjDV3HiJXh31wiVkasYCc-bTQFEh45St4pETnIA9MnnYdZtXjMZT8LbX1uIeEP5Cl-XQgdId8kIRer3CD8Lts91CM.webp?r=040" },
        { ep: 4, title: "Lydia Bennett Is Hundo a Feminist", description: "Hunter’s aloofness makes Ginny insecure, Max obsesses over a new interest, and Georgia sells Paul a fundraiser idea she must deliver.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW28a-j0O--zRMYnoNV_oJuJ2WoorjesKOW7bjzE7-4c11qiCtQFZHUIVvEZThC4-0KeRTeEh0YW8dwTET1gFoPExcKskdNtrBGHS755miX828F_NyKbB_D5.webp?r=133" },
        { ep: 5, title: "Boo, Bitch", description: "Ginny’s popularity grows along with her identity questions; Paul discovers a new political rival after a night out with Georgia.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf4-vkB-hAn4kX1M4TSQ1JwQePg3JCKEd2kiS1yZt6l_cP4bSsIfRLye1DXY4ioToFm9LCQUM1mcO3g3NWVJTLdrqCxyi59f9IqipKkFFDyy1sdkd2KWYJXA.webp?r=716" },
        { ep: 6, title: "I'm Triggered", description: "Unplanned visitors cause chaos for Georgia and trust issues for Ginny arise as Georgia’s past begins to surface.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTd79_CjECzqgjlBjY9Gjb5beUdVQju4G9vqN1eLQGE_2Aq0OaxtmWeE9Zacyedv6IVGvvgrulkQfjxI_saMfJQ5L13lGQEeVlU8AQ6mgnjdciI1bZ7CW0jA.webp?r=e4a" },
        { ep: 7, title: "Happy Sweet Sixteen, Jerk", description: "On Ginny’s 16th birthday, Georgia plans a surprise party but Ginny and her friends have other big plans.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWnkM4ztS0oI8Ad4PTB7yeEN-i-UDBuoZf-zYFEe2DNeIDdrYcitbHK8t5czA0g5A6fjMN1JZjB5-ibJE_4VIsLgI60qdUiuawNOjRpam_2lH1WooLcClnFc.webp?r=803" },
        { ep: 8, title: "Check One, Check Other", description: "Ginny writes an essay inspired by her dad, causing friction with Hunter.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTUFT8x4ZqXUiA_Sb3-63rGjxr6N7kbeZaLZWPkUl_ou7DfrpmGZABddO4fp-L3umko02GvDbzVfAn8rfA-W4_PtCCENIR2aXBAXdBGWdkrZUYxS-Monmo0j.webp?r=60a" },
        { ep: 9, title: "Feelings Are Hard", description: "Ginny and Georgia find themselves caught between two potential partners while Max and Marcus face painful situations.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT6-V46ERLTReJe86z5eRsuv9bNd6OpLu6JUEaAsqP-wNyZi1ySI6J6xdM8ZwWWAYbhtsynPZMrwJ5pjGTxvbt039fZ1TzqQPZA8hZddPjENrvebnZb0iQXQ.webp?r=5fd" },
        { ep: 10, title: "The Worst Betrayal Since Jordyn and Kylie", description: "As Paul’s election nears, secrets catch up with Ginny and Georgia, threatening their futures.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc2sypI9mmIaf4-wdb9K2ljocgSxFPk1OpOdFqocgqovk2qQ9pqpwEJZG0hjY6ec9A00mUPOgvHHcWQbBYItkk-iS3wY1gCo0Xhf6Zon0SjPHpMQKz5_lw5u.webp?r=091" }
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "Welcome Back, Bitches!", description: "Thanksgiving with Zion brings emotional moments for Ginny; Georgia navigates awkward tension with Paul’s parents.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRGDVkyhdqEvFKkuzrBonP9iHyIVAkbI6ZJO7oUtGgKek9a1_bdG8BwK2R9VYUQfarRAMaINrc_c2Y7ZO3qnuJb5X4Wig2OR1RBv07dsmoQvV1Y_TLsBnw4M.webp?r=912" },
        { ep: 2, title: "Why Does Everything Have to Be So Terrible, All the Time, Forever?", description: "Georgia worries Nick might expose her secrets as she maneuvers politically; Ginny faces a chilly reception at school.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaGqCZ2eQI43za5vGw_tDVnacXZ1akrde29XIp9BdrmXRyKXrUjg4VdkSc3ZPqYB_fCngjqOul6HE5v95SWrhOGSTbINd1VOlghQ4_8ewZXo1f9bEAsxUsuM.webp?r=455" },
        { ep: 3, title: "What Are You Playing at, Little Girl?", description: "Following a revenge plot against a school mom, Georgia reveals her troubled past to Ginny while Paul moves in.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdc3he169PWfuZeXNbmNnqFgoT5JLyKECC6rUUfgdJhyYNyBqU6Vc0cZa77EFS3v9nMrba3pXySKHVB9aCPxtwetEgwXFuXMNLKBbp0BhFHg4juAnltMrfsz.webp?r=f94" },
        { ep: 4, title: "Happy My Birthday to You", description: "Georgia and Paul clash over parenting styles; Ginny throws a huge party; Cynthia discovers love unexpectedly.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABULaviMrhoKt06qSnnfyePUKRm5RJyFRequRpTc7kg_XqD7EAZVru33plzFr-P02YywdzaH8fgDYtebMI6SZDx3qMSvEJjEQ2wqJtS-YxY67nLXT0thtZbnj.webp?r=dff" },
        { ep: 5, title: "Latkes Are Lit", description: "After a night with Zion, Paul makes a startling discovery at home and Austin gets an unexpected visitor at school.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRB2Mwg--aJngCNKWn0YYDonM1C5a71Pwjx0V5sQC0svTOgomTeOki8RDiJK6zhWeo6S3UaH-LVAftURRQqt5k-qr1rc1evwna36k_Srm6x8C4YiKimrtxEa.webp?r=86c" },
        { ep: 6, title: "A Very Merry Ginny & Georgia Christmas Special", description: "Tensions flare in the Miller household when Paul’s and Zion’s families come together for holiday festivities.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR4poX7qnVZYTmsIsWl6vowMEkvWHqLzhcsMxMBHTKTksk7_Lq1IiT_XJm9-lxIO8IBQuDP6utiY9vHc4dsQWWEJPPUvD19ioO8MChXuB6KDmKoFfVABmVC2.webp?r=980" },
        { ep: 7, title: "Let Us Serenade the Sh*t Out of You", description: "Georgia forces her way into Ginny’s therapy; raw emotions bubble up and Gil intrudes on Austin’s life.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTks74-sTLBAGiyFifeR7s2Ii8aID6xPSrUVHUHMMoQLygYco3FT1d93R71KKXtINJAd8R8efGyj8TEYemBZdq2HCGmoromsWFZs0S4V-BiWZ8PE_hOHzGrs.webp?r=478" },
        { ep: 8, title: "Hark! Darkness Descends!", description: "Marcus struggles and surprises everyone; Austin witnesses something traumatic.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZLV_WF0-WJTcfoip8tO_iTznth6yysVzfreFg4xhO1Plznx8aDRNHvTGfQbkEsfX5Qce9I2eBgFz9cMa3dpQNf3W1L_y-tPAtHztpewpKuHtuyAdm_kZDwh.webp?r=54b" },
        { ep: 9, title: "Kill Gil", description: "Long-hidden secrets emerge; Joe and Georgia reminisce as Ginny struggles with a painful revelation.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABflkifSYwJaeWW4-YN7Rb7IKmEBhVGkp6pnq8XFYRgPipd8k0urTYT1CC0oueONWns_Vz1fpuWw2DtAx6uWmBFdrN7tEztbcnjD4tBTJgEprTeLxVPC7s5NS.webp?r=567" },
        { ep: 10, title: "I'm No Cinderella", description: "As Gil threatens them, the Cordova case intensifies and shocking truths about Georgia’s past are revealed.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZVbP1mTzSW53DiwCgSVScf-yaeIhGmBcNui5UrsxglqQXVp3AiVwRpQdlBe_Gz4V3HsWFEmTVDFYodBc8mbdAE0-hQlSgOKLZqce6xp8CUwV4667oIWFMC-.webp?r=5df" }
      ]
    },
    {      season: 3,
      episodes: []
    }
  ]
  },
  {
    id: 'bridgerton',
    title: 'Bridgerton',
    img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbb-nqVeQk4ZF2IdccUOo9MdTMg8k70FtYaCdlNHCKSH8IkcLn2Lj084doTDhYzzzwO0Rn6-F2Cl6zdiZLod5eIrmERbPaG4p0bNzrI3CUowPPZZl9AS-p8N9ISY_K8WC-4F.jpg?r=5e5',
    genre:'Soap-opera ,Romance',
    description:'The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.',
      seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "Episode 1", description: "The 1813 season begins, and a scandal sheet written by the mysterious 'Lady Whistledown' starts circulating London. Daphne Bridgerton makes her debut into society along with the three Featherington sisters… Simon suggests to her that they pretend to court to enhance her prospects and free him from any of his own.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW_hzq5hvsG5L-v7XxOP5dRvKo0hs3y0pLAohV3jTLSmxUgk52KGvdP8E8QUO7Q4ykxtpNU0wDmYrzrQjCP2Yq4AuwNS2Btixd8ag6Sy_XfqeiU-1D6QACsf.webp?r=d07" },
        { ep: 2, title: "Episode 2", description: "Flashbacks reveal Simon’s tragic childhood... Anthony threatens Lord Berbrooke’s marriage arrangement and intervenes to protect Daphne, forcing Berbrooke to leave London.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXuml4Ro5FBUX0p-0p4_Uut7NNxSEa2AbN9rs-_Q5w9u8oQmKWsf1tkkKmNxAgHO4yZGviJxUVAyJ7H3IAZ1OPK33qhkjsZ11N7rxep6AMpJ94YpLGkZS5QJ.webp?r=3a7" },
          {ep: 3,title: "Art of the Swoon",description: "The show explores Daphne’s growing feelings for Simon, set against the arrival of Prince Friedrich, and highlights Daphne’s sexual awakening and inner desires. Meanwhile, Marina Thompson’s pregnancy subplot and Eloise’s suspicions about Lady Whistledown add layers of intrigue.",img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUD5Q1RHdpMk8kW6zZq-OwjojmlxSCjUfGMF12YHto0LrYKlRvUlW-TIPs2BcDbwk9ay6yWcDdQ6tx4gylUoJVrA0GDZANR0NY5gV8oXZlcMMksW5PeRAk3-.webp?r=0ad"},
        { ep: 4,title: "An Affair of Honor",description: "Daphne receives a necklace from Prince Friedrich and is courted as a princess. At a ball, Daphne and Simon share a passionate kiss in the garden, prompting Anthony to challenge Simon to a duel—and Daphne insists Simon must marry her for her honor.",img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaUa4wpNIZJYC1ZW7NypUwgLitWfcYSG3Om714fX-riXUQf9wsqoGhOtIcypUT3JLlZw0qS3EYApq6llemam-1DuqgqFTmRriUv44lspKbM3Q71SoHvRt3PK.webp?r=55c"},
        {ep: 5,title: "The Duke and I",description: "Daphne and Simon’s engagement is announced. They petition the Queen for a special marriage license. Simultaneously, the Feathertons and Penelope's jealousy over Marina are revealed.",img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY_C6qGatFzb7FAZnOUntUDdDr0zZ8IZe5P61SY8ukvbpvzsprr3ww7q1XseYK5bK0eVy_ozwsAYrSmwVhKqDZrI0VoeC6-KqSravo8jGhdKEqeRzv4svXzp.webp?r=906" },
        {  ep: 6,title: "Swish",description: "Continuing Daphne and Simon’s wedding night struggles with intimacy and expectations — marked by tension, emotional vulnerability, and awkward advances handled with depth.",img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRXiMwQabXKldWGGROefcAEdsHIOk2xFp9Dy8UqNk9aOqh3uunkCm2G_iqBQhc-ecyghJIFaH7fbtlkPEcdmutomIn3PvJW9oGNOUe9L6BcDXq1QJ6uw_1IQ.webp?r=fa0"
        },
        {
          ep: 7,title: "Oceans Apart ",description: "Eloise’s suspicions about Lady Whistledown grow, while Daphne and Simon grapple with the hidden barriers in their marriage. ",img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABetLDN6CawYUQnjWthbK7LIzaabT-Bfoie_lWM-TyRFerxBpA-xHhMNOxWSFPYDlcoFWCstc6y1rhzNvEy-cg9zwX3lkW28kPV1XefCWySoWiTzRhRUAlHH1.webp?r=85c"
        },
        { ep: 8, title: "Episode 8", description: "The duke and duchess’s season-ending ball signals a turning point for their marriage — and ushers in changes of fortune and fate to those around them.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS5JlbKjD3nKw_pVx-m5qHdfYuySxqEEtyWt3WpQuE17VHTLyfTApmCgkiZTBu5asxIxwGA3K-4wccRtnqWlZfyAPRfKrWwWq4XNPACki86sSoPncDW1P230.webp?r=af2" }
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "Capital R Rake", description: "Anthony begins his search for a wife, Eloise braves her society debut, and Lady Danbury helps the Queen choose a diamond among the season's debutantes.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfdJsHRumq_eiTeqV_RlA4WMn512q27WAkJsmp3RMM9uKd1n9sZcx0Y99Hyfu4wOkXAH-updcQ2HltTbjFPJiFa369P-d4DezqlmLgyltyLLnnN2Jp0P0Zzs.webp?r=100" },
        { ep: 2, title: "Off to the Races", description: "Facing competition and rivalry, Anthony steps up his courtship; Eloise makes a Lady Whistledown discovery and family history resurfaces.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXmRL7Gjq_E90GUna_6StQy5Icjjzq26icAZCmUid3xzDqV_DvErhhy1wh8s2giUk9M8yet6Kckap9Oe13m-Jgd-3FkC2RkRWqpt3vlR6tG7Hg6B6uJd2rV0.webp?r=1ec" },
        { ep: 3, title: "A Bee in Your Bonnet", description: "The Sharmas arrive for a pall-mall game at Aubrey Hall; nostalgic memories weigh on Anthony as tensions rise with Kate.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbiYKViBrBCokxmina6SbEUTLPUhx40e3o44R89kgfdEdB82nzlpuWKttH4RQ7Ds8vLggAPQw_MVXyeXPMjl7oV-JdykYCGJy487BrL9QmYRAW74Piv5fRRO.webp?r=ac6" },
        { ep: 4, title: "Victory", description: "At a ball, Anthony and Kate clash during a hunting party; Colin revisits his past; Lady Featherington schemes.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWkkLa3GAVWs0ROgllFbXoQHSikibD0MOierl9M80FHc2mUwd9B3zrwMjU5TZu3ogICypi2CnGN35GW_Iw7CzulSDOpFNh2Gv2XJSR2rbgeH6BZfwExkwYE0.webp?r=8ee" },
        { ep: 5, title: "An Unthinkable Fate", description: "Kate receives advice from Lady Danbury on pursuing Anthony; emotions run high at a dinner party as plans change.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaF7AU2wENrSAlsVKh5-fhfr8qBjR8plJ-MWnw2Z1PQvyFRLi4a6CYV2SiGPpNNs7beuZp_hHfxLkH_LL_5VjY8x9-HV1IyZKyHDt1cBhdKQ4242A9u_0kl_.webp?r=8af" },
        { ep: 6, title: "The Choice", description: "On wedding morning, Anthony’s duty battles desire, and Edwina considers her future as Eloise’s rendezvous provokes suspicion.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcTnuNjwC8OL6NmKrS2AZW_f-BZrjwp7DWCl67RQfJeUI6rD6i5xac4PeeXZRcvFpLOFaxT8WUVDWoLdVTRUsu6Rtf7lR0foSIDY1kECW0J7lHqy7ICoZk_X.webp?r=379" },
        { ep: 7, title: "Harmony", description: "Scandals swirl as Lady Whistledown's writings create chaos; Eloise and Penelope face royal wrath.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXRaKQpvGWvulEcqxK06I5gg1mY88VnVJpbJxPsjlP4BZS3HYiEeNQpsNrQWUeVR4ZKwg_Eon3QxAOlrlKfTU0BGy3-3_hfcku_Vx-QCdHwk1yQMkI79xz2W.webp?r=8af" },
        { ep: 8, title: "The Viscount Who Loved Me", description: "Tensions climax at the Featherington ball; Anthony grapples with Kate’s condition while Penelope and Eloise face heartbreak and revelation.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVOBubNQx3U_MdwVwnML1vbDFM_hMpPlv-ROL6SUqrXgdKvdkVE_nkxP7mELVjAq19plR_XVCGxSgTWF-dtf1gQjceAX0LzII82tX_P11ELZ05fRmNQhR7-p.webp?r=ef5" }
      ]
    },
    {      season: 3,
      episodes: []
    }
  ]
  },
  {
    id: 'shadow_hunters',
    title: 'Shadow Hunters',
    img: 'https://occ-0-4748-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeo9yeZTCkMG66XzRP-vS0sNkegsw2chS1Z2hjBrieTZsf4_jBqdrDEm7GA1iCxGuPjdjgp7S-alv-u2gitZudaUqdUutYaYLfRq1V7RvVarN5uBGMYGg2J5mFR7Nyfn_0aC.jpg?r=158',
    genre:'Fantasy,Drama',
    description:"After her mother disappears, Clary must venture into the dark world of demon hunting, and embrace her new role among the Shadowhunters.",
     seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "The Mortal Cup", description: "Clary Fray finds out she descends from a long line of Shadowhunters: human-angel hybrids who hunt demons.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXfm9u5lhq-2wQO64hu1bYEh5tdw3ffUhADfs5JfywIjNs8-oUoG_diEOgoWfUv_3nwtr87Q_6QVBBu-KSilTxr15Yf8IMtm0cRm8CB6Zg9uDbZUMMBURa1c.webp?r=f35" },
        { ep: 2, title: "The Descent Into Hell Isn’t Easy", description: "Clary and Simon familiarize themselves with the Institute and learn more about the Circle and the hidden world. Clary has visions and tries to find Dot to restore her memories.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaa6twoREoFebCibDtVv28GeFOjsjpefAfIBeBY5Rm7CH42h2KJXcxPuUTo-baCnHdlzXOTwb-7ZIstua4tDg_86gIn8tncz_qkCWNIVLIkEYsLBM1gAf31h.webp?r=f5b" },
        { ep: 3, title: "Dead Man’s Party", description: "Jace trains Clary so she can join the rescue mission to free Simon from the Vampire Clan.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZQCm3N7Sy8-75j5PiBFOECcJ29BWvRfGCwNAspLELrzOvdjehCEsT2Si1h6DwXX9wsfJPm6o-Xpc4wj6y9hF4gXwMTn3us_7mE3IMnZbxNhQ759zrkks-R4.webp?r=7c6" },
        { ep: 4, title: "Raising Hell", description: "Magnus Bane is sought to help restore Clary’s memories by reaching out to the warlocks underground.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeyNMizo3v5_K2ePSeettJMinvR5WpL41DoSyuhtN6YHuuSCQq95XtLvLts9FbQzaJtWbwjou1f14MMvEoV1xdyaPrtiGcvRFdnLxnJKIerHuS9SZU7sb4mq.webp?r=55d" },
        { ep: 5, title: "Moo Shu to Go", description: "Clary’s apartment becomes a hub for clues about Jocelyn’s disappearance and the fate of the Mortal Cup.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdsNxngm1SIoa7s_2pUDOjmitOXrfiBTFS_rgJgDf2Tla2YbJWW2Wl8qk-EtKZCvDE3XsjV0gN-YoGTLBZ6t8W3ttUbuYexjySSPXMdJCogS-6NtsawmO20O.webp?r=64d" },
        { ep: 6, title: "Of Men and Angels", description: "With Luke gravely injured, Clary, Jace and Simon take him to Magnus’ lair. Clary also learns more about Valentine’s past—and the Mortal Cup.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSLITSE4QhrH_H-734fax9L4GoSVsZhCbPPT0oH9SmOh_GhVckPensTB6qXCQe2hWXGkMEz7EJfLnxowlZwEBZy-M7LRlKAgKjPSaHU2iAP94g3Iy-38e1DC.webp?r=7ba" },
        { ep: 7, title: "Major Arcana", description: "Clues about the Mortal Cup’s location emerge, and the team rushes to find it before Valentine does. Meanwhile Simon faces disturbing changes.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaOmfojuxPNwmTTvN-Ex6eLBFaQAQEc8vZ-yVQJpuamwu0tEdhxlN4YpQPfrmRH4-XC45CQBZ8x11BohnCCQdnlXJgeNld2rPS8qWHGKk8oKxES29vSJEYKM.webp?r=8c4" },
        { ep: 8, title: "Bad Blood", description: "The Clave sends observers to monitor the Lightwoods at the Institute. Clary faces a life-altering choice.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUUFy86T5tXGl5tAzDC7BZNJh8roY3LYwq6NVozIFGEPBUgAcqLlJuHauOrL5mYGfS6zf4KLLsroi00e41GhiMOaeENu_oqI4PqwMNvSvNxPsNqGax2KPU0V.webp?r=03e" },
        { ep: 9, title: "Rise Up", description: "Following a deadly attack, the Institute tightens security. Clary and the Shadowhunters take radical action as tensions escalate.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQPE8MnsAJ66pQcy2_ercRU6hetmX_1puhh12eTCE_KSuhPlSdQoGvcIebk3zxQ7Cu2cH7zVR4DVGDC9J6u_p1Hy8zFDpYmGYrBFVSHsrbGAALUjxYtFW8lm.webp?r=782" },
        { ep: 10, title: "This World Inverted", description: "Clary enters an alternate universe where Shadowhunters don’t exist—but she may lose herself if she stays.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTdpg3x3BFF_xRC_tFtwyyww2BmChA-BDpeD1wuGklxVqAYQMJV7c1h13Odw67D1wUe3GumR2fhOjER67pdYS1UGH7Ev0gvsqxCuY7mGnssSDCI8jQzWoQk4.webp?r=b05" }
        // ,{ ep: 11, title: "Blood Calls to Blood", description: "Armed with new intel, Clary, Jace, and Luke launch a bold rescue mission for Jocelyn while the Inquisitor arrives for Isabelle's trial.", img: "" },
        // { ep: 12, title: "Malec", description: "As Alec’s wedding approaches, tensions rise between Jace and Clary. Magnus steps in when their world collides with forbidden love.", img: "" },
        // { ep: 13, title: "Morning Star", description: "The Shadowhunters rush to stop Valentine amidst rising threats—time is running out as tragedy and revelations converge.", img: "" }
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "This Guilty Blood", description: "The Shadow World is in upheaval as Valentine and The Circle grow stronger, and the team becomes disillusioned with the Clave.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWGkA0Pz6fBT9MfH7UtH8D7dKhFg7BotgO0tU8kUCqG0kMCLPUPj2XPwvHGEfCOMxPwKf6Yv1jNQZFboi8gHVIvoEELObdUYr9erCsEnL1xv39Gw8n463Tdg.webp?r=a44" },
        { ep: 2, title: "A Door Into the Dark", description: "The hunt is on for Jace, and Simon seeks Magnus' help. Clary struggles with her identity between worlds.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZR1Y5197wXa52-w2JDOJLBXtosiVTByfxKMbvu-AH-ChcpJwdcaHLnX5RYxZCIqRnKy4SDIguD8C6snzzzVJLsXddFjIbaRV0q26Ei4v24Bsme1xFZTapXJ.webp?r=14a" },
        { ep: 3, title: "Parabatai Lost", description: "A mission to rescue Jace threatens Alec and Isabelle’s relationship with Clary and Simon.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYxhrZlg9HRcyf1J-vRiN0cVWe0mpwLbVJB49Pa0lneq-TFPfWwS0CGOl_bgj7o3RFAzBChcXkoMKjgz0TgXdtzZYclaz1zYoO4YAAlwfIYvXeBm_tFiRef7.webp?r=c4b" },
        { ep: 4, title: "Day of Wrath", description: "Clary helps take down a demon at the Institute; Raphael and Simon search for Camille.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVRTKIuFJHrVncigFnyLrF8J6caUNn3FTVOWKsC-X_-Ji91sn7R8a4ead9id3_kjV0jiCvQFU68hkD-r7o__a95s3AdOTB0MyRjsrqQ2U1eSwxhw9BLUe9Cx.webp?r=05c" },
        { ep: 5, title: "Dust and Shadows", description: "Clary takes extreme actions after the Institute is attacked; Simon struggles adjusting to home life.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFr93qUhEJWVlrOsChNXD8ZG1tCeUIbUI6aQKoqcH0SqZM2XvtppMM7AW5-PTKq8oBtJgFiSAyBP02-nVSql25U0yYjQDnjQuQF52nl-B01XNpSSshpVO7w.webp?r=77f" },
        { ep: 6, title: "Iron Sisters", description: "Clary and Isabelle meet the Iron Sisters to learn more about Valentine’s plans.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcYd5cl-hgIm2sdGDiQAtv6_YmQtCg677PrT8lzZ2rPmEktyFW82IfCYV3zySke4VNh2J-8n5_l8QFlx_WWbH9kF2CMJL7lvkBgKVaF5a_DlwVIHUQYatNtV.webp?r=030" },
        { ep: 7, title: "How Are Thou Fallen", description: "Luke’s sister Cleo causes tension with Clary; emotions run high at home.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbYK3go8vg_XfpKwXI1J-Qy-Q1kGyus8OuCba3PrGY1hdXzZM-4m8U2uzuQikBNNOBQKtBZXMZKDf7eibGMwwyXdE_KRAlsyFtnCvyC4I6MccdmKhngXjOTK.webp?r=080" },
        { ep: 8, title: "Love Is a Devil", description: "Raphael saves Isabelle; Simon confesses his feelings; Valentine kidnaps Madzie.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABShyOMK6ddvxXNBlG6n4gxGnPoeidjKwty-UIuIQV--DDgzloTCbj9kV8ZAkzvMLGxfHslE32rEFbi1o-jMyN6g8kp3AcwqqxB02U62I7oDlg89cSgYXYk6m.webp?r=929" },
        { ep: 9, title: "Bound by Blood", description: "The Downworld is in chaos. Clary must activate the Soul Sword to save them.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUxno3caqmLaX310kKTVvF2g95wxC5jR4fFfWWojsAyIHOTYhoE_vwTw4fuoPciGPA9N-nOQKAr3wPvAOMv3CZZzDC5UNTAdcnLnkUKbFeaLgSXkVi6hV4zn.webp?r=999" },
        { ep: 10, title: "By the Light of Dawn", description: "Clary nearly sacrifices herself to save Simon, while Alec admits his feelings to Magnus.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdCainIa9BZLrVk9_9Q0Q3Ow6LeDvk4ezpvH7qQFtJXONHtL3vZOqYHFJduMRbZ6ZLZ3piF_OibI7tLuPABk-OC5yIkeHdi5RUSSbFKHzNmWOx5LGay2w9wh.webp?r=a2f" }
        // ,
        // { ep: 11, title: "Mea Maxima Culpa", description: "Downworlders strike back. New allies emerge to help the Shadowhunters.", img: "" },
        // { ep: 12, title: "You Are Not Your Own", description: "Jace deals with identity struggles; the Shadowhunters face a Downworlder uprising.", img: "" },
        // { ep: 13, title: "Those of Demon Blood", description: "Shadowhunters begin dying mysteriously, stirring panic at the Institute.", img: "" },
        // { ep: 14, title: "The Fair Folk", description: "Alec seeks peace with the Downworlders; Clary and Jace visit the Seelie Queen.", img: "" },
        // { ep: 15, title: "A Problem of Memory", description: "Simon spirals while the team moves Valentine; the hunt intensifies.", img: "" },
        // { ep: 16, title: "Day of Atonement", description: "Simon’s family dinner poses emotional challenges as Clary and Jace go rogue.", img: "" },
        // { ep: 17, title: "A Dark Reflection", description: "With the Mortal Mirror missing, Jace confronts painful truths; Maia struggles with feelings for Simon.", img: "" },
        // { ep: 18, title: "Awake, Arise, or Be Forever Fallen", description: "After a devastating attack, the team hunts Jonathan, while Magnus helps a Downworlder.", img: "" },
        // { ep: 19, title: "Hail and Farewell", description: "Valentine and Sebastian force the Downworlders to choose sides in a chaos-filled world.", img: "" },
        // { ep: 20, title: "Beside Still Water", description: "Jace and Clary prepare for the final battle; a traitor emerges and demons collide.", img: "" }
      ]
    },
    {
      season: 3,
      episodes: [
        { ep: 1, title: "On Infernal Ground", description: "After Valentine’s death, the team struggles to keep secrets; Lilith plots while Simon spends time in the Seelie Court.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQcqUO01mvxUEo1rYAJXu9NqEKM39LZyR7Q0HycaUIlX_XIOgmg4JNfB0zKUBDu5819ypPcUfSNMwSmQzRbQYQ_RYCOHA3fo7DgLCbdccPrJDptYErxryqEI.webp?r=b5e" },
        { ep: 2, title: "The Powers That Be", description: "Ley lines are corrupted; Izzy and Luke seek answers as tension mounts between Shadowhunters and Warlocks.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa4h1JOfpZsWm9k-1s9QpeWUknryipDen4y1adqQ0fDj7-SKClQF7nqTZ_jkLUri2owlwCone1iNDjky0FEcYn0vmx3-hD9mUDkOYJPlqed6ElNP9smN4iAB.webp?r=923" },
        { ep: 3, title: "What Lies Beneath", description: "The team hunts a greater demon; Simon deals with the Seelie Queen's aftermath.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXBTjJysU0U1eqxXh6njvsDrU53B_RXoGlWkX5CLeitRhcQQZMaSu_c-2JKX8GUYSpinLkuVr5r84mu7D3ct0ZBG5ylA72VssHjfH1s-_EAhlCic5vWynt0x.webp?r=5e7" },
        { ep: 4, title: "Thy Soul Instructed", description: "Jace battles hallucinations; Clary and Izzy pursue a rogue vampire while Simon finds a new home.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRxZJb-BOHv1PzDGvBF9kgsxQCE6iQPYkwE3AnAsALcQRSA46GJgI-V3tivRe6V7gzR-i-SzG8zVZUXAXb6FMDhc56N2zRvQxoin46XgK_3VoTmhDxhibN0r.webp?r=63d" },
        { ep: 5, title: "Stronger Than Heaven", description: "Someone is targeting Simon; Clary turns to Luke for help managing Jace’s mental state.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXADZb3hMEp_5f9NqNCG_9DKKqrVMEwHdanYWoJippNdQTmMpH7N3K3tyU3SAG-jjcGU4jhWn3-llGjd8j02Guz5Pe4gZN-aitmMYPZOSzWzHt3iNSEb3j07.webp?r=cc1" },
        { ep: 6, title: "A Window Into an Empty Room", description: "Jace and Clary's secrets threaten stability; Simon battles new Seelie politics.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRl7rv81MqPgWFd6Lf2cTqGUrbxfZRz9llXGRcM9w1QPHOXTOkb9aQFTJWu-urEak7og-xt6vix7T6YbwDLKzP-mrP_AAvaZ1lsCnVq92YKoLGIzEdXuKXFf.webp?r=f78" },
        { ep: 7, title: "Salt in the Wound", description: "The ‘Owl’ identity is revealed; Clary risks everything to save Jace.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWVuJ43SkgweXHZgEvsAila8KcwqXdG9jVCOvneC8vFMR3i2_wSHcglkv15JILX_74wY2fb2lLDFuWBOPq4XmLQ1tUSROZpE1rL0GIiAIlfMVtbmHjUCri37.webp?r=807" },
        { ep: 8, title: "A Heart of Darkness", description: "Internal crises escalate; alliances fracture as the threat escalates.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRCvpuL9ImOotj4lm1LLIB3vwcuBXAg672aLs6E4NxlYeBmET1aJli49mfVNcnIi-2K-6gIFyNaP7ktu5pGFRlv3AVtGfGPMVP1AWBzKwSpJPGLa3Rf6zU4i.webp?r=ff9" },
        { ep: 9, title: "Familia Ante Omnia", description: "Family loyalty tests bond as dangerous threats close in.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaVt8vZoGjv6uuhVJJ5V8aktBQ0X_tny9MSfjRSwD5NKN9yKkAEHOsyT66WNiedzBoKHsRML1V8os0tPxBsW_uiyridRB9Dh1PhBaWhXgADydyh-Wona4Ofn.webp?r=010" },
        { ep: 10, title: "Erchomai", description: "As day dawns, alliances form and truths collide.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWTghPm4ULFnDuXJ2nBMeEq7QHRU5CwSFx8qeX1Ez74AAjUws9siiWr3EDwqVK4fgBlkNRePa7wfiIItMTfTH5N0PwBkVszLQfRy8Xg-6RmEzNKFyfR7KFro.webp?r=49a" }
      ]
    },
    {
      season: 3.2,
      episodes: [
    
        { ep: 11, title: "Lost Souls", description: "Inner demons haunt Team Shadowhunter while the truth about Jonathan is revealed.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbKEfYeGm9lVOffO8Q7vp3BjL_No06DkH8ueKwuXdcDnlatFE3ddm7OTWt3xiPl_neO0G7UFc5PG0VmmLe4MIs5TMz9iSuGmxnIpc1RQhnV8MWmn-gJaokkb.webp?r=636" },
        { ep: 12, title: "Original Sin", description: "Seekers of truth uncover past betrayals that will change the order.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUliPUjSHe8CVRKlWVYMH2DFpuS_UPYCo5gfYYzQykCkpVrl6MVr892hIxxGgY54RwQqjZuypvInfKQKjiSOxoJMQfLobU3ulp9ZOb7B-tHgZ6ndVtMeuscd.webp?r=2e3" },
        { ep: 13, title: "Beati Bellicosi", description: "Peace may come at a price as old wounds sever new bonds.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXqo2P-wPSRxHFDArI0y5kRU2xgejnD0BAlYiZ-nxl9qx31CfGMRUjhdyPqc0a4Zdp-ptOiy3Yzmbew9ieU7TltQk2u9XaPFw66SpX-ULBLjp7wtZYy7-3qJ.webp?r=e7b" },
        { ep: 14, title: "A Kiss From a Rose", description: "Forbidden love blossoms against a backdrop of looming danger.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYy5Q5TFnKs3qQsjun19t0FqWT5kEXzdiiY9s2UsTM8A-WUohd6pqYrYTNnHOGmZlPAWFR_i8-3BXLPC2Iw_O03l8yQoaSdnVy8yG1vLM1gr-FqO5AvxqZfA.webp?r=3d9" },
        { ep: 15, title: "To the Night Children", description: "Clary faces overwhelming threats as loyalties fracture.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZsLWXKRzVPKjt_o27uXduE6_gkplvLHvqZr0v_9_f8bpqdnLhrTNIsYgGxKRYkq4JzfwotOnwgKgMIEhEaSU3SBf8WBDnBhiiRtqOnRnT-MNrcZbrDlhBXR.webp?r=0d9" },
        { ep: 16, title: "Stay With Me", description: "Victory seems within reach, but cost may be too high.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQJnMlf0luaVjYNxzP6ypkaxBsgQTjWHJK4tIewEHODyjDhtyagdC249w63EyWw8VtevcN-eYxpEbP2OW164reoMmYvleruuLzpZa8nqzqC8Mir9--2F7wdj.webp?r=515" },
        { ep: 17, title: "Heavenly Fire", description: "Rituals collide with reckoning as destinies are rewritten.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcqYDlf-R6lYyuTSUfctcPQNs07PAK7eM1jQd_mgL-VM9bZypBjO1EChCZjezx6yQNo-7p2eVdy9P29JMLZr_jxYDyD5IlQ3FYbhGTCX9gviTWcLhec5Y8y7.webp?r=81b" },
        { ep: 18, title: "The Beast Within", description: "Dark forces rise; family and friends are tested to their limits.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWG7FiDjfTCZGfAbcvmf4c-fl7YhqE2mOWzXm4cKOsRchdXG4LzidpS4C9dbqOBgSPSNJXBHONc6d6C1gtqcVocl73tX9NnnrBnbFbSuO-tBvmWfpaYLCzQP.webp?r=b9c" },
        { ep: 19, title: "Aku Cinta Kamu", description: "Love transcends war in a heartfelt stand against destruction.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa8WSVK6JGWa3uKEI9phA3R_REd4eRC2vvJHVq9UwLAuQlFyuBEgv39UXPFlQJSKECNu3cuuyq5ppbajA5N-5W7h4K9M6UycIzxQWtxSbXMXj9GyRxMQCqOu.webp?r=1b8" },
        { ep: 20, title: "City of Glass", description: "The final battle brings devastation and hope as truths come to light.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcx_PFoJruzFt5ZS07hEN-vx1VLYnbp6w87L7PAPe-UAW6gpue8m6wuHaW2hm9jYiZmIokClmphimHcIyD5rUx4iQ_QmzkJp6SHppCeNWzi7j43x2neY--l_.webp?r=32f" }
        // ,
        // { ep: 21, title: "Alliance", description: "Fractured alliances reform amid the final storm.", img: "" },
        // { ep: 22, title: "All Good Things...", description: "In the aftermath of war, peace is forged through love, loss, and survival.", img: "" }
      ]
    }
  ]
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
const cardData2 = [
  {
    id: 'scooby_doo',
    title: 'Scooby-Doo!: Mystery Incorporated',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW7GtLIm5DnXUttW2nkL-_Qo61020kxqn2lg42n53DMl-8t_zLzXAf6BbzVGsuRh1ujg3KiLWPjp2XHdTsnhM51h2hqdIWrKykA.jpg?r=38d',
    genre:"Kids,Animation,TV Comedies",
    description:"In this animated update of the cartoon classic, Scooby-Doo, Shaggy and their pals solve spooky mysteries in a hamlet bedeviled by supernatural bedlam.",
     seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "Beware the Beast from Below", description: "A sludge monster attacks Crystal Cove’s harbor, and the gang investigates while learning the town profits off its monster legends.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoz6QTb2tgqUW7X89eIhjgIuld9VTXmljGyq6hDsVCwATy4P_ki96NaCWL4_PmVH3oDVlveA_j5bXMFlqtXAUdngAUAJe24hP7pWdmCQ-xp-FTa7oxLrisr.webp?r=e4f" },
        { ep: 2, title: "The Creeping Creatures", description: "Strange lizard men are spotted near Gatorsburg, leading the gang to uncover the truth behind the swamp creatures.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbx6oH7fDligpYk_VxQterQxsHxI8fUa7Wh7yqHCBvysciL-HTmO183Tj5KtMN3rGa1QJ0sUYSFpciOIBKqgNvHnDuT_xbrCX1Z6FJt5X3QLSfzaGFyq48-A.webp?r=f6d" },
        { ep: 3, title: "The Secret of the Ghost Rig", description: "A mysterious phantom truck haunts Crystal Cove’s roads. The gang follows tire tracks to uncover the driver’s identity.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZHmwegsrXiqpIgiC_FtPD4-J8MkL5m7oWnTaW7-aakMlFjUwPvLZkjZanmcHYx3tS3yT8tDKssdyAG3gTzSx8vpb5Ivpgd2x7wX_fIsqQQCWTJMufI6zjXc.webp?r=c80" },
        { ep: 4, title: "Revenge of the Man Crab", description: "A beach party is terrorized by a giant crab monster. Daphne tries to get Fred’s attention while solving the case.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa0SaHMCr8636m4kPZbSqD0XVICFn_Yx4lz8diohvfqWB6bZXQvToXQSIEOaNhjzHhHxtJp8h_yd3esIaOCKnz5oAVsv-NegNu1ghkphs4eXFGgWD2VR1kIO.webp?r=d5f" },
        { ep: 5, title: "The Song of Mystery", description: "Children across town are hypnotized into acting strangely by an evil flute player. The gang races to stop the music.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABULUgUAXQp5EVqW2oB1rQ7-RToiHc9byTF2EZQvHvHx-yTnwjkACULWmk8FZgkLvC841jJ0yZr8xRL7TExvZ6PbauhK9WIBHgtTVwrfjk8BSLnrAjEsU-wI-.webp?r=7c8" },
        { ep: 6, title: "The Legend of Alice May", description: "A ghostly bride stalks Crystal Cove High. The gang uncovers the mystery of Alice May, who hides a dark secret.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT0gqSr-bf4dKy-BO7MJmJU_821YPEpH44TAqI6RrNLdPjCubDtATgsYstX58bnpqPeT0f4xKTyHxpegOXNIsRQKVqbRcjfonHZs-scCLB1JkyK8baqLBm8V.webp?r=02a" },
        { ep: 7, title: "In Fear of the Phantom", description: "The Phantom stalks a local music group, and Daphne gets caught up in the mystery. Fred struggles with his obsession for traps.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcs7q6JqE3wcW-Y3S-gF1GNKI19Mt3W2ZcK-HTxlcx7-nsPDU2EhscD5sXaBINimohrK4Jw0vkjI4wy6O0oX9JiyFFfl7UEgD62j92eYfvv6Z0thw8T6haOo.webp?r=aaf" },
        { ep: 8, title: "The Grasp of the Gnome", description: "A gnome terrorizes a soccer team. The gang uncovers rivalries that connect to the attacks.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYLTe_-PwlhajIPH4mhoMdTzlS-YEU-Lzf6MoT9FOhVrGbjZijnQHXeSYQumMQQjenjUp-PO_xVPb4JExWsneYByOglfnV2txK9ex_E54jSOCFzeXTEra2Sr.webp?r=cb4" },
        { ep: 9, title: "Battle of the Humungonauts", description: "Two giant robots fight across Crystal Cove. The gang discovers a rivalry between two designers fuels the destruction.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd8iC9-JbtH92U1PRIz_u8iH8SSvwRbI_2PASxj-yDsMIC01yDfX6a1g_63jNhyrGNFukm4ioz652VkPlQAsIxNqGuKv6wkml7ZBzuaYR5drI-Bx6XkhHWmH.webp?r=559" },
        { ep: 10, title: "Howl of the Fright Hound", description: "A robotic dog goes berserk, leading to Scooby being accused of being dangerous. The gang fights to prove his innocence.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVbuQRfTMf-gzjrgj1K_S8_tryWWh2FzvkSiJGq6dSaRgvFoJ-YZT6P-bwKx6rXK813_st9w7GFKSJW0qZvyfIwc8bMCxaYWSOT9KSBn_jf2klkRjpJPLv56.webp?r=6c0" }
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "The Night the Clown Cried", description: "A mysterious evil clown returns to Crystal Cove. The gang faces the legacy of an unsolved case tied to the town’s secrets.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUVePKts9L9bx8WYQsy0u05leGcCHxrRZ_9ZUMtyiMTHxDIidJCZB2h0YNCPXa6WNsDoisini2Q86iHisxsx-KSpXt-YkueDwxLrQhSKn8zE6InBcDTYjaE.webp?r=209" },
        { ep: 2, title: "The House of the Nightmare Witch", description: "A witch haunts a young girl and her family. The gang digs into cursed artifacts that point to something deeper.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfCR8vHTGsv59o0zLrC3p1hjBlPPoG5owU17wemihHMvgPHpbj8sNeNZxRJsXDN4rZnjdxx5L6iX8M7zzRxpLrp0kY7-2KCsyJh6VT8EEM4oYLpbim_5n_p7.webp?r=a84" },
        { ep: 3, title: "The Night the Clown Cried II: Tears of Doom!", description: "The evil clown returns with an even bigger plan. The gang connects the dots between the clown and a dark conspiracy.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQhyldIyk4zi7tGv0EjIQyYFUSEGrSsp8zUxYXmVPgC877SuNkkrn7x6tlxMDSkvBD-uRgOxI8GqnvtwMYzjVa-q9nu7ZKHSmWW3XxkvirI4aEmxM_9pxnVl.webp?r=468" },
        { ep: 4, title: "Web of the Dreamweaver!", description: "A creature attacks people through their dreams. The gang investigates an experiment gone wrong.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABezRXoqs_h8Ojr32pG_YMufAjyXG2NP7ecpPPhmcXaPE5a86NKP4PWzYKLKrXcGQ9-I3-yrM3EQE9NRlWbPSsHEkQDd8BxLON18T24e7Ago4IZihdJ5ykbQ5.webp?r=15a" },
        { ep: 5, title: "The Hodag of Horror", description: "The gang uncovers the truth behind a local legend about a ferocious beast. A twisted history is revealed.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc3HGYRSGwZP5YBNBQ8ZM5f3WT-S0RJ8klwAit5VC0cHopBB4ctmqlNpcWaFvcjFalabGNJfBREIRzuIOtmDbjagexYr8UNbAclZ8lriW-A4Tl9onDWABTEq.webp?r=53a" },
        { ep: 6, title: "Art of Darkness!", description: "A ghostly figure haunts an art contest. The gang races against time to solve the mystery before the big show.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdfOCOuBGnZB3fWlSvj3BspqhPWPggWEMmCwwCpd6emRnkRscuXlc4ds1XjkCxvWsoflJc_KZUVb3VKxeDQRNixCjJnAu_MhWhArOo2cCv4iG2A-6E-BeJEz.webp?r=777" },
        { ep: 7, title: "The Gathering Gloom", description: "The gang investigates a girl who believes she is cursed, and a ghostly bride haunts her home.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfi8wbSMQ7u3CA31QcpVNy-YpKcvTYp0WqHEStMP5Srnf0Zz_rEbUu3dWdGMBZUiK9hWPcDZVHduFuUsWpF7eXBTozPBeCHRyuhiVHhKY0MYNZNhi_z7axAa.webp?r=ec6" },
        { ep: 8, title: "Night Terrors", description: "A murder-mystery weekend at a mansion turns deadly when a phantom begins stalking the guests.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQcsHCZSZYxfTA-hzSMAlIQ4JjgV06pmDevxv0rSR8VJlV9Vclt8K1fNTXTNzWTzLkRRgVjkUPAc62ukdzYKXoDoh5xhU161bdpyIVzsCuTrlB7mkMyWrf5R.webp?r=50d" },
        { ep: 9, title: "Grim Judgment", description: "A ghostly judge punishes Crystal Cove’s wrongdoers. The gang finds corruption at the root of the mystery.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX92VXiOjKqVd4o8E9htFKVoBllfVnKJlGQczrSxymEew3qwWdXAUJ_9MrFVpWzXbO370zgWQQTh4JoyU3-jCytCWBfCi3vizE3FwTKstvaFZHzWJsUezZac.webp?r=e37" },
        { ep: 10, title: "Night Terrors", description: "A ghostly conquistador stalks a mountain. The gang uncovers the history of Crystal Cove’s cursed land.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYsZqme1YoAAXvP2iOY708XKOfU6_R6qUFawIB4PtiLy10AWLiyAgfOh6ue-9lIYZoBhoIhR9YX982H_6rcM-vFiN7iHLq8IrVm-98BNiNnsW0KtYYhr9I4W.webp?r=776" }
      ]
    }
  ]
  },
  {
    id: "tom_and_jerry_show",
    title: "The Tom and Jerry Show",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTuE0AWB50FQhSOIjq3JK3O5rforF6HWuYtOBJv-QZ8565Z-vZW99ENZ72RpyvGWZGkRKOjPl_o7HK6FqBO4_NX3KROzQJa6-No.jpg?r=6f8",
    genre: "Animation, Comedy, Family",
    description: "The classic cat-and-mouse duo return in a modernized animated series full of slapstick comedy, mayhem, and timeless chases.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Spike Gets Skooled / Cats Ruffled Furniture", description: "Spike trains Tom after his mischief goes too far. Later, Tom battles Jerry while trying to keep the house furniture intact.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa9VugmZr99Wwv8dT8CNuctPKGwCZ1NxDRYnrw3iBkLU5FhoDdbtNPST_K1rUvIdeQhP3Pb4At81nJxLVP8eZeI7d7i0FUemYbYSlP_Row6sdtY6BAAZph6W.webp?r=e2a" },
          { ep: 2, title: "Sleep Disorder / Tom’s In-Tents Adventure", description: "Tom struggles with sleepwalking; camping chaos follows when Tom and Jerry take their antics outdoors.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWcta6Em3U57Z9UTo2EgJJE4caNINPIVboS18WApaXLmjfiZQiKYvsMjtYzHls4axZ51CmdsamK9Y_4HfiXhycoT8WdMV-ZxM-6vHPwwzBAKpTvOhuiS_Vg5.webp?r=1aa" },
          { ep: 3, title: "Birthday Bashed / Feline Fatale", description: "Jerry ruins Tom’s birthday party; later, a female cat distracts Tom and complicates things for Jerry.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcke-awty-JQkH6bdwAnwk2RiKr5_ZGbN-s-U51zefDeWm8bYfVNyd7QglNUkDLOhfyLjKMrzxoWidbSQOKRwKM2_rgsY5CsYlDc3uloKIjVyS9iWIpm1tMa.webp?r=f7b" },
          { ep: 4, title: "Cat Napped / Black Cat", description: "A hypnotist causes Tom to act strangely. Then, bad luck follows when Tom crosses paths with a black cat.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVbxgwJ1SFeFpTX1UEqJxc1VHZmuIfC83SaVdGJ95DI4A2WfSt_bRVgTHD_2i05oXnoHWTYQlTB64-nngc-9ClmAvRt0PfgLyfOfA4K-5hk1zf-8bVzo6cuZ.webp?r=a35" },
          { ep: 5, title: "Hunger Strikes / Gravi-Tom", description: "Jerry raids the fridge, sparking chaos; later, Tom experiments with zero gravity and disaster strikes.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVP_HwaM4G3kXSi8Cl7aTYVR51qc1c2hlAvvEB1w83Or0OVEoWXnLR9QdPihbR_vqqZDkx5zetIdxkTeUrwA7VDAGP_t8eYHnowNRTduwOD15WYzFf5yzM0Q.webp?r=031" },
          { ep: 6, title: "Ghost of a Chance / Cat-Astrophe", description: "A haunted house adventure ensues. Then, Tom and Jerry’s chaos brings disaster to their neighborhood.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaIXQ1Vyfsq3THhrYk6i4z6KZqWzQ97XVtRgw3HhihoQXVgv7SK8VUwpVpRIVISZnK50lLz54XPqpKr9eQAAT7_d2Xr2dJTGyGw1Z4FZzAaT6bj3UYhtx-fR.webp?r=f31" },
          { ep: 7, title: "Little Quacker and Mister Fuzzy Hide / Cry Uncle", description: "Quacker befriends Jerry and hides from Tom; later, Jerry’s uncle visits, causing more trouble for Tom.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa-o3Vw30A7FWXnf80ieQ-os_LAQON8SuKQ-fYtB2l1AlPqIE3A_-rmKtrfjkBCXDCx4ujXkTbTqaVyDeIpWdTUK-zMaAZd8T4VOQ_jOS13Y0rAXCTbm9oE9.webp?r=985" },
          { ep: 8, title: "Holed-Up / One of a Kind", description: "Tom tries to trap Jerry in new ways, while Jerry proves his cleverness yet again.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVWUEHMgh3DvLSs0mmmHmf1PuhDNMGenF7K06vutGilpvUDf204VoV30zy-xYM5DAEK_Rb86CasLyjjAwOQDdGG7TLUw3ekoVgvImBs2iK5TxmmXPWycD5JY.webp?r=df3" },
          { ep: 9, title: "Dog Daze / Birds of a Feather", description: "Spike gets frustrated with Tom’s antics. Later, Tom and Jerry clash over a new bird in the house.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQw0TnMEIQ1jkytYQIHZY6MyZB8709EjncBC7f7ckvdXnFXlpqK0YQpaxAZkmWN-UIFF48-hY9ZRK9N9DIK_OeCa89kIVL2MXBVQsJZvjca7cvfnrQCnWCHG.webp?r=897" },
          { ep: 10, title: "Vampire Mouse / Entering of the Fangs", description: "Jerry is mistaken for a vampire, leading to spooky chases. Tom gets in over his head with vampire mischief.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVdRtmlKJ8dSGNgSk77n4PuqidNwGIfvKGkoVy5Iqo4-c7CAbaRFaKXHXp4o-e_D3A8SjcGi7IDGEA2b22RcElH22QKcgSWOtBHydl-1wFH8j32Bs-RnDRAT.webp?r=e76" }
        ]
      },
      {
        season: 2,
        episodes: [
          { ep: 1, title: "Turn About / The Plight Before Christmas", description: "Tom and Jerry switch roles in a twist. Later, they wreck Christmas festivities in their usual style.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc0YsPYSw78e2aN16Hnk3vPgSG6wyVIOmd6wt-b3R4vCDIj84udgOZA0NY4by0udrsVQYdBoIY84JRAwrkw3WTNBRB1mTlJ5E0IogvI26iw_tKCqw72eDPxU.webp?r=b4f" },
          { ep: 2, title: "Say Cheese / A Game of Mouse and Cat", description: "Jerry finds a new stash of cheese; later, Tom sets up a high-tech game to catch Jerry.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSLqLiXhE_Kip5ihKPP9zLt7ksCGN3SKnXrwKYvByKy8XilgT45joTQjkSlNnvDsYXKN4EAEb4HEAz7rl5mWK6u8fj7R6i0ZsSA42VIN59pzmmSXJh1btVfz.webp?r=3dd" },
          { ep: 3, title: "Tuffy Love / Poof!", description: "Jerry babysits Tuffy; later, magic tricks go hilariously wrong when Tom meddles.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYrI6kgNT7Pu1vB10DHT2fk3hHt6g9bF4ubUkdn6kQOjew-8P4ey63n9bNNr5y23qufV6gNmJf97mY21giFQTqlBtvlsW7f_qF5y3Q55b3VbFckQy8vr2-4I.webp?r=84a" },
          { ep: 4, title: "Top Cat / Mummy Dearest", description: "Tom dreams of becoming the ultimate cat; later, a mummy is awoken by Tom and Jerry’s chaos.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABevpplwEUz09mik5kvPYgAbAlGkQr6piy0Imz86kHzY1dCkCflllT-0itFWqiofPTCLxkmOaBLlZMGViA2jMdvXIYd1VHECV8HNAJeqkO-tQVZH2MXtMWQjO.webp?r=551" },
          { ep: 5, title: "Pipeline / No Brain, No Gain", description: "Tom tries to cut off Jerry’s food supply; later, a mad scientist experiment turns wild.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUwGyhtk8aEfkbODFZJfz9SjlfH411ZgCVnjBzFL-1q7LB-8SUxWwOrloEpUtmXtNYiL0ARzSoxvKRAsFO-tnhVpwqgKcLxv5MmSZEbCuzYkcIJfTkXTxpBs.webp?r=ed4" },
          { ep: 6, title: "Catfish Follies / Little Quacker and the She Duck", description: "A fishing trip goes wrong when Jerry interferes. Later, Quacker meets a female duck.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABecHux8PhgoC2xNZ805K363KCrPktVFeBmk4zvby5PL41zLrvfY2qUK0PQ0eamj2BjJ3tQoz7yjypaZ4fk4DH6eRXwEioMb7ZvyUvI5UFgz7uSv7cPOj_FFn.webp?r=06e" },
          { ep: 7, title: "Uncle Pecos Rides Again / Cat-Astrophe Cruise", description: "Uncle Pecos returns to strum his guitar; later, Tom and Jerry wreak havoc on a luxury cruise.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXum55Oduggti3p3G7NDO1KHReCC8V9ph-urU95rIIXeayo_CEe2SZS7MyatCYWpMlapZWBwCIypTmeLH55YwIzAiGE0kx45rblQh5gKancrjbC6tg6E2k2t.webp?r=565" },
          { ep: 8, title: "Cheesy Ball Run / Tuffy's Lucky Day", description: "Jerry invents a cheese-ball machine; later, Tuffy thinks he’s found a lucky charm.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUyO5zIEKPD3Fr_qd6yF8wqOzlYe2Pm4Qj6eVxLhb1Qw-7TAdlFbj1TC9l2JnzNx9ju1ipNcjTCGizxnhnD0KhBPvOOmLSdQ-N2fCJCfAnxJVB-1Qj1gHggq.webp?r=dcd" },
          { ep: 9, title: "Cat-Astrophic Construction / Mouse in Space", description: "Tom joins a construction crew but Jerry ruins his work. Later, Jerry blasts off into space!", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW-U3zDhYK9uhQ2lnGuJgbsRMsOnE8cycW6fGdUx7WFU0MArj4icbGDEUoVpwljk_DSpN03we4NhdLadVYpWNYV6noOptQeijuYp1o6ZCAZUpwvofr5yhUWT.webp?r=908" },
          { ep: 10, title: "Invasion of the Body Slammers / Haunted Mouse", description: "Aliens invade Tom and Jerry’s town; later, Jerry turns ghostly to outsmart Tom.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV0CDDWQyHMKZlfBN1KVj5G6258qZpYxp-NGCU1u_GFlV-cPqAHJd6DUchleb8Y109_xdAyaUTysft8EB_Zg7MiYdt3dl9FoXzpR2EQl0_UGPHWnNFV3ukGb.webp?r=d21" }
        ]
      }
    ]
    },
{
  id: "miraculous_ladybug",
  title: "Miraculous: Tales of Ladybug & Cat Noir",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSxw0vNob_tUB_PIA-nKKVy6LsW7i-EwmvndXuYfz-iD58R7fFE-Z4o0TvqsZiXq4nUmTXM7wQq9yp1z_0PssW6mHjcmvC9yCVU.jpg?r=27b", // Replace with actual poster URL
  genre: "Animation, Superhero, Magical Girl",
  description: "Marinette and Adrien transform into Ladybug and Cat Noir to protect Paris from supervillains created by Hawk Moth, all while navigating high school and hidden identities.",
  seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "Stormy Weather", description: "Marinette fights weather-controlling Dupain-Cheng and learns her fate as Ladybug.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdNhFGPYacOreCb9VxSaOUoeZ-P31-GXM7qxqXeedbn6-0WUOul6Dr3b3DItnmFFa-3AE3Xf51oywmyQea8ITXMVhVMXP6Rmnnqgv1XqDPvbr2wxwQ1FD94s.webp?r=cef" },
        { ep: 2, title: "The Bubbler", description: "A magical water bottle creates monstrous bubbles around Paris that the team must contain.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW1btY4DRzzDS0ikg0Flo87pdP1Vf4U8shJHzf9ZMyoNXWLssB8Kj82GgqSwjNE5fMx86NSPQXrAmRYjyyIc-Hei0wN754S40JuCqKpgB4L5SKm0a3Zxd-bN.webp?r=b25" },
        { ep: 3, title: "Copycat", description: "A cat-themed copycat causes chaos, and Marinette must deal with mistaken heroics.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABenGXS9Ip52cXlRvJYuFt4Z7sKZWXdnrrHpEaac8tkMHsGaHOWUIKRoZSa3eP8nPFaRXm0PHfSTSrOxwkXMMGdNUFouAJsI_-DNeO-e7nBxHFg5avT-Qqtgl.webp?r=08e" },
        { ep: 4, title: "Timebreaker", description: "A villain who slows time forces Ladybug to think fast to protect Adrien.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABadR2BfiPV1dKL21jmDw_0iUsp_Aljsgy4Ztp_FDfkhDVPDH1Zpha0IGixhaYBPDQDF7NPEmmYC04_TYTxme5dihe4uFf9UlCO3zOcGt9_DT5U_t2DJSczSc.webp?r=3cc" },
        { ep: 5, title: "Mr. Pigeon", description: "Valentine transforms someone into a gigantic pigeon; the team must work together to stop it.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWQrCpF4m3GHjbngEX-nJL0vhj-RuHpDAxW6W8m406beJiyRTtcT9Bxg3YgjMFCR4f4D8ensJ4VxSjA9aMmT909C5GC1l1eJ8OGKnXbK9p6dG8dPrtYow4X-.webp?r=cb8" },
        { ep: 6, title: "Lady Wifi", description: "A tech-savvy villain takes away Paris’s Wi-Fi—only Ladybug can restore connection and peace.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaHoLWvrd-MSV-ALI0htO0oWsm7L4dzRpsqJhufXgjlKn5U0mslYgdpjtaQY8TsUtq075zOjblk64nnk9JcW8GjUWTmjwt57nViTVMCrJPy26E3LpQGONhHH.webp?r=3e1" },
        { ep: 7, title: "The Pharaoh", description: "A cursed sarcophagus unleashes ancient chaos in the Louvre.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX99-cvO6OObrACeRX8zkOjYhmJnjBNhTBogis_4TaUPwIFQuDW6aa2aPJi6PU4mWP3E9hyRykkz37rlMmXSDv4ysmj8B6pZbtqWiR52MbkCM3onaLUbMZJ5.webp?r=62b" },
        { ep: 8, title: "Rogercop", description: "A sentient toy robotic policeman runs amok, and the team must shut it down.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTvGsYlB7NsuAcsMU1a9W-Tcd5__c-0XbRsraDzqobcubynWT7d7bA35hmFffio-lOCn7XrhwzGdfrgDYiDcQQRP7U-OhKeMKitD8upA92ZEDXy65mkB2RSV.webp?r=f1f" },
        { ep: 9, title: "The Evillustrator", description: "Valentine turns people into living cartoon characters with his evil illustrations.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb3deQ9VsMANLnRKyFpsVOF33G191LUqpHt2-RBBujrgF3z4Djjv2WQxnX4Xcz2lfQ-JjT4GUTAOvDYqZYNJaWiijbJRv-zqPd0sHgmKugUUG6bkcb2JeYat.webp?r=4f9" },
        { ep: 10, title: "Dark Cupid", description: "Cupid’s arrows go haywire, causing uncontrollable crushes across Paris.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf0Ljag-uAotA5noIj0AI14r8tZXTaLKVN42c4eDMfbRFB6t4twrQXkRF-pL26b3Dzzw5cnqr0ychdBabZOzG3ygb4CnGsZWbXp-b6Hasv8mFeDEAv42c06E.webp?r=a83" }
        
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "Santa Claws", description: "Christmas turns grim when a clawed Santa causes mayhem." },
        { ep: 2, title: "The Collector", description: "A villain collects Miraculouses, revealing larger conspiracies.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaKS92drAaLH-DvVCs3KKpZGS4GMN4utHaMHtNsykNvQKJg078UdHpm-IwB7UcjmN9vj605qEAnOxtA0RchnLR6lwjyc0j22YYBnIwNYCeX5B1qyBujOTp-V.webp?r=e6a" },
        { ep: 3, title: "Despair Bear", description: "A teddy bear fuels despair across the city.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeo0_g8zzHLkbGZqffrvz6VbwJTg3EBMqjCuzeE1XiXTqTREIqp1ofjUYjCKNqlR61_2vZBpK4CWFMhTjTfS86SGcMxJ1dgKtOt7Sg4G7FZZiFsm3HPfA8Fn.webp?r=d56" },
        { ep: 4, title: "Prime Queen", description: "An online math oracle becomes a calculating queen.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb1961iiV9EnrFh7ab4l0o7jnHp6NTaWv2szgBcd6A1EsHtEwx8CHGdQvZgClE-3vLwCwOOAFTt1A9OAFj0b9o47ftPH7jIfB199UzbnnRah72sWLIB7aMIt.webp?r=b5d" },
        { ep: 5, title: "Befana", description: "Italian folklore comes alive—Befana causes mayhem during Epiphany.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABffJP6374bRrO0FY-fE35EJM249WOrf0VJm4mAV4nRvzy9aP50kWvsr14s6RRHP3pP23cGtLwY7WFHjad7g_mJCwq36YzV3iVB4C61geHR2UojDy7LoyMEna.webp?r=7b3" },
        { ep: 6, title: "Riposte", description: "A fencing villain strikes with precision and speed.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYPAG87sGplVRWegTQ1K61fw6aGTlMvgWrqapdH-WNSVPo7YCHwa0jbnqD4RUObWHFzCzVUyye2LQ7I6FchQXVYarZ3-1P5YR8B5b6TSSdQ35Yj_yUR6jy0t.webp?r=460" },
        { ep: 7, title: "Robostus", description: "A robotic villain invades the city with mechanical minions.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcT9D8pWwhAUKy5hd08tfylJA5PN1QbsR5o3merQJiTx4Bi7T1Y55egKg7wOkwZjatR2t_yfxUjvASly-X4M10sujhiU28E2Im8qsbOUzGjo0aYfFbtijT2G.webp?r=48a" },
        { ep: 8, title: "Gigantitan", description: "Size-changing chaos hits Paris when a tiny bug becomes giant.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTB8Vzsm6Ay9awpUhkCDKINrhWj68ND17GKiwZ0_wiiMbRB73SxjpW8XtZDPkWPy5vOdct57jfhdOUe0j8drf1LqFj3_D29SiULZIWgySjRBziyqHKrYkWl5.webp?r=979" },
        { ep: 9, title: "The Dark Owl", description: "A wise but corrupted owl manipulates with illusions.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdI3MOEDvOOqIomMvh9he3fcleAgDBAgEBphWy-4rpOwYvbeUNXk--3a_snPPnLov_coT5FE4jkrEOLH2-a1y8QsQ7w9wMP6Bk_ctuvVdwLffhqmCvhzrQvb.webp?r=f92" },
        { ep: 10, title: "Glaciator", description: "Ice storms freeze the city; Ladybug must melt the plan.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeA1YpGsmKiwdfC7Va3BmREFroka6mKCEnJMZ5c3mnGOVVn-f-ylbxF_3bmgbkPrPas9TPzXxPT5LXcNx001z4w9idxZYssgv6P-GIfqLqpWuVWKT3cuV99u.webp?r=b2d" },
        { ep: 11, title: "Sapotis", description: "Sticky sap traps heroes in a sticky trap.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZivRek5sbyDwAAW5K2SuhLE2NtEn-6MzlcXGTCnPAowm4WC4WktCRvXZkqP2TfpxYNNq-eo5y5STmhSvKDo7NvpC42l2G7CNjmHqCX7Prz7MNIIrPBm7o83.webp?r=277" },
        { ep: 12, title: "Gorizilla", description: "Gorilla strength goes wild atop Paris rooftops.", img: "https://miraculous.to/global_data/img/211_2025-08-18_18-16-30.webp" },
        { ep: 13, title: "Captain Hardrock", description: "A heroic singer becomes a stone-faced ruler." },
        { ep: 14, title: "Zombizou", description: "Fashion-infected zombies invade the runway.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYCcr_NRDZKX59hrd629WUR6d1l2Z05Gb4jjcDWsjycttdqmDrU8qzLs5kYwVnx267duDtr75XPigrFyDEKr4j6RJ89DXundAp0Qqc0zbqu0CNXGFHvODCIU.webp?r=4d1" },
        { ep: 15, title: "Syren", description: "Siren song lures citizens to vanishing danger.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSwm0VFxBLchuSXaBVbzSBTmr4zYL5IhGjVyeHqbrx2KZ0uo0pGwCd0rXJA0aw-CPS3QuQdOpE4wfvjtSDjbP6-pu2kkp2IwbMrUhsIkbCY9pZT6vY6tN15v.webp?r=f0a" },
        { ep: 16, title: "Frightningale", description: "Nightmare opera brings fears to life.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUbM3BFJG8Th-N9TEkD6FwCWGWhSi4t0UGGcPK8VSDTIrijKFZTDre9aKomHADWct7CN7hSbf1vsIAiJFsU5MydTzQdH-5MYOFkIMDLC67pe3aET_63QXzeW.webp?r=233" },
        { ep: 17, title: "Troublemaker", description: "Chaos incarnate makes trouble-making an art.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUwa3xPPjVaBglV5P2nbMbnttKZN3VLQj3q-jnogaLQ-EoPc0ZqbngQsodnWircRp-GrhjYS7E-55EFQjAMYrM9OXg720ofOU4cpCwHIovQTYYEdhxzv_npe.webp?r=8fb" },
        { ep: 18, title: "Reverser", description: "Miraculous powers are inverted—backwards is forwards.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUBSRKfnGeyaC7RqUxq0jYPasHtC3ULqf1ioRRD8lnUIjOeSoy1Grf_mqfLpjRJFNq2AuMU0J61sVCx-MK8OkyJ5-cQcEmocFEpiHLwiBOfz7uIWxp-Ya2jJ.webp?r=806" },
        { ep: 19, title: "Anansi", description: "A spider weaves webs of betrayal.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABacBHje2cafMSRGgfEFvp6bQVD8TNt6p-MQTFaGrLqUnBEPsoPwvMY1J0d0cwKH-2O6ypXOkVU33trHE6HeEaWv6_EuJJURasnprlnWxvBwf_QI_2RGkH3Ns.webp?r=042" },
        { ep: 20, title: "Sandboy", description: "A sand villain buries secrets deep." },
        { ep: 21, title: "Queen's Battle – Part 1", description: "Queen Wasp emerges, starting a royal showdown.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSrtpsBPa8Wg2iIkYN2LswAaSImBdfVVHwaDUE194fM6fT-jxkaYqcUgpHwphvWPLc8u1s_JcE9v45IeLhOyLGoEhanGg14yAkwN4cAj-xgKkA53pzqsDrEE.webp?r=bb2" },
        { ep: 22, title: "Queen's Battle – Part 2", description: "Battle continues as heroes face a regal threat.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU-JkHb8B5z_P7cVw6jngQfEtIkfMs9poZbs1wN9vycP9ASuURh31bQIFeVUX-4r9Xg1F91nKFsACfAcO5k9bG400lGMGMWNBT9kIjPmMzL1unnCuRBwhmat.webp?r=f32" },
        { ep: 23, title: "Malediktator", description: "A dictator uses curses to control the populace."},
        { ep: 24, title: "Frozer", description: "Icicles become Ladybug’s greatest obstacle.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQWBYMwDGobLWkz--nn84B6WSC1kOjhodhV7dnqfp0OkINZyt8XvcqjYaorrGT5xMraXmA36lAz00l0WTvZlg0UYE_2KfElUu-jQoqQ7ZcmWy_XeA4uvwpF0.webp?r=905" },
        { ep: 25, title: "Heroes' Day – Part 1", description: "Celebrations turn risky when villains crash the party." },
        { ep: 26, title: "Heroes' Day – Part 2", description: "Responding to evil threats threatens hero reputations." }
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
  id: "oggy_and_the_cockroaches_next_generation",
  title: "Oggy and the Cockroaches: Next Generation",
  img: "https://somecdn.com/oggy_next_gen_poster.jpg", // Replace with actual poster URL
  genre: "Animation, Comedy, Kids",
  description: "In this reboot of the classic, Oggy becomes the caring CAT-sitter to his new pal Piya, a playful young elephant, while the mischievous trio of roaches continue to stir chaos—now with a little more heart and longadventure episodes.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Episode 1",
          description: "Playtime with Piya creates a mess. Oggy shows Piya how to enjoy the outdoors. Piya and the Cockroaches still want to play — but Oggy needs his sleep.",
          img: ""
        },
        {
          ep: 2,
          title: "Episode 2",
          description: "A fake copy of Piya's diary tricks Oggy into treating the Roaches nicely. Oggy and Piya go fishing—Oggy’s neighbor is a menace.",
          img: ""
        },
        {
          ep: 3,
          title: "Episode 3",
          description: "Aliens arrive from outer space—but Piya knows they're the Roaches in disguise! Roach Dee Dee turns veggies into art. Oggy’s paw has a mind of its own.",
          img: ""
        },
        {
          ep: 4,
          title: "Episode 4",
          description: "The Roaches are experts with Piya's hair. A camping trip isn’t what Piya thought it would be—and the Roaches still pester even while Oggy's injured.",
          img: ""
        },
        {
          ep: 5,
          title: "Episode 5",
          description: "Oggy can't get over his fear of clowns. Meanwhile, Piya's on the hunt for the last flower on her list. Oggy stays away thinking Piya's got something contagious.",
          img: ""
        },
        {
          ep: 6,
          title: "Episode 6",
          description: "Piya wants to play even though she can't stop sneezing. The Roaches nab Piya's doll after Oggy throws it out. Oggy leads them on a scary hike.",
          img: ""
        },
        {
          ep: 7,
          title: "Episode 7",
          description: "Oggy tries to take as many photos with Piya as possible. Oggy’s favorite tree takes a fall. Piya's scared of a tiny spider crawling around.",
          img: ""
        },
        {
          ep: 8,
          title: "Episode 8",
          description: "Oggy’s expecting a baby—but instead it’s Piya returning! Oggy quits cleaning, and tries to impress Piya with magic tricks.",
          img: ""
        },
        {
          ep: 9,
          title: "Episode 9",
          description: "Dee Dee thinks he’s a butler and starts tidying up. Who has the better pool, Oggy or Bob? Piya and the trio discover Oggy’s secret.",
          img: ""
        },
        {
          ep: 10,
          title: "Episode 10",
          description: "Oggy and the trio try to retrieve a spinning top from Piya. A day outdoors is just right—but Piya helps Oggy after a disastrous date with Olivia.",
          img: ""
        }
      ]
    }
  ]
}
,
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
// createCarousel("carouselContent3", cardData3, "carousel4");
// createCarousel("carouselContent4", cardData1, "carousel5");
// createCarousel("carouselContent5", cardData2, "carousel6");

const allCards = [...cardData, ...cardData1, ...cardData2 /*, ...cardData3, ...cardData4, ...cardData5 */];


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