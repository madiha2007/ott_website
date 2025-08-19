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
    id: "one_piece",
    title: "One Piece",
    img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfjFlp2knrovoWG6xA8-iLLO-4bb86YMqJWGhtNWKCdwcuTkYfrLxLi-Rd83YMp4KpzpBvv3_32kFtMclVF8rKCh2v9CZ9DVLc4S.jpg?r=4d8",
    genre: "Anime, Adventure, Action",
    description: "Monkey D. Luffy and his pirate crew sail across the seas in search of the ultimate treasure, One Piece.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "I’m Luffy! The Man Who Will Become King of the Pirates!", description: "Luffy sets sail on his adventure.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSUoSppR8eCPndmjU8hzKfwvdD2HHGiEPPPFiM7TG37j0Fs1gK0apqXemUhGqRwrcoXx_EOosDKwZv_PDiUoo1sWV_LPduBpNu0uQRuNwAB6bDAG66b1bXOE.webp?r=59d" },
          { ep: 2, title: "The Great Swordsman Enters!", description: "Luffy meets Roronoa Zoro.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWIhjxTF6_wjvLLFG-dRE7cnI-q-CnT8XQU_XzkUl1x1PfLzs8a3VqM4sCbTCAyzpJPc9pUwhBfF6tKJSwnG6l6W67UcTZS4xTux4rzy_tJT2jkGkm5oy3sA.webp?r=37d" },
          { ep: 3, title: "Morgan vs. Luffy!", description: "The crew fights a Marine Captain.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeRfIRpRDjfVmkvQf17u9zJS0lplN-sVsjseA7dBjx4nNeh0AppZyPwoc1TeA7SH11ln4MAw-KEPHA5TQPnHZ1zFhY4ASqlW_IXtubYuM0Wvk5daxE9zWy_J.webp?r=656" },
          { ep: 4, title: "Luffy’s Past!", description: "Luffy recalls Shanks’ sacrifice.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSBpWKioJeL92tCkabvg2eMJLSK-2C4WR5u_LavgLz4kXCGUQTO99vVhhhWieEcWhOLx5Vvppuxi9n_HGlcbA-Y5bTmB_Fd-mvJhz10GQP6QXZ2erGiWhFp1.webp?r=04b" },
          { ep: 5, title: "Fearsome Pirate, Buggy the Clown!", description: "The crew clashes with Buggy.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW55YeewzHtKuOT8IK8lioFiMbFJdnOre28KXPZ5Uy42UXRNsAyqSzS-1-7AHda5-PSDa-oMaarXCkKn8GPZ0SEFpbnD5Y8plQ5z1v8yqnCGd5m6AfwYFhnw.webp?r=72f" },
          { ep: 6, title: "Desperate Situation!", description: "Buggy reveals his Chop-Chop powers.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUZXq3pqZgiWfz2fU48FK4dm0CkaCYS4ZjHnYRZQXAmYRHDZ1V91B2bxBshLeDRY9FjptCPn6gKgG1lrRehGUZr-_HXdmaiEehtog4-YOrS7mNciL5WL29wB.webp?r=1d7" },
          { ep: 7, title: "Epic Showdown!", description: "Luffy and Zoro battle Buggy’s crew.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc2wkgGF5QgYKyClLA1qBvd9lw7mmqBPOLaHO6blAEZsMF4X2cynNIrV6FK-GbPa1zSvFQdn4UbhVI0vEQG1623nQh7m3AL_BNAXq5cv0UM2mXjQJozQkned.webp?r=744" },
          { ep: 8, title: "Who Will Win?", description: "The fight reaches its climax.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfE6UJSOJsZDg9Jmh7tWkpx2R3GoJzDyGazuUUHUettBWQNOKqmIacDheoWbtbpp2H8bBc-RCboBSa7dCUi5w7besP9aDzBFYm_fyldkSxWFGUyV8hHO0AQy.webp?r=afb" },
          { ep: 9, title: "The Honorable Liar?", description: "The Straw Hats meet Usopp.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRJbpVqpCGW9W9g5Lx8jyqTviiZmKe5IAXwDdKpULX00eiaqxYRnn0abucArKTDtuT73BaZ5C7nkIHxa5ArmGt1GMx-P6ep8TG_R7c0eXo5fcY2KoUIRKlrX.webp?r=a6e" },
          { ep: 10, title: "The Weird Duo!", description: "Luffy tries to recruit Usopp.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZufKHYA2M2DsUGRhnDlhVftsIlwXPcVezHpYOr_IiJEUizsxpJpzR_dtchCzX6Oc11goLRLUbTXHIgB025eSiAshQohTUVOrYiaWzcaL3avJixeGz4zqw9D.webp?r=03a" }
        ]
      }
    ]
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
        // ,{ ep: 11, title: "Blood Calls to Blood", description: "Armed with new intel, Clary, Jace, and Luke launch a bold rescue mission for Jocelyn while the Inquisitor arrives for Isabelle's trial."},
        // { ep: 12, title: "Malec", description: "As Alec’s wedding approaches, tensions rise between Jace and Clary. Magnus steps in when their world collides with forbidden love."},
        // { ep: 13, title: "Morning Star", description: "The Shadowhunters rush to stop Valentine amidst rising threats—time is running out as tragedy and revelations converge."}
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
        // { ep: 11, title: "Mea Maxima Culpa", description: "Downworlders strike back. New allies emerge to help the Shadowhunters."},
        // { ep: 12, title: "You Are Not Your Own", description: "Jace deals with identity struggles; the Shadowhunters face a Downworlder uprising."},
        // { ep: 13, title: "Those of Demon Blood", description: "Shadowhunters begin dying mysteriously, stirring panic at the Institute."},
        // { ep: 14, title: "The Fair Folk", description: "Alec seeks peace with the Downworlders; Clary and Jace visit the Seelie Queen."},
        // { ep: 15, title: "A Problem of Memory", description: "Simon spirals while the team moves Valentine; the hunt intensifies."},
        // { ep: 16, title: "Day of Atonement", description: "Simon’s family dinner poses emotional challenges as Clary and Jace go rogue."},
        // { ep: 17, title: "A Dark Reflection", description: "With the Mortal Mirror missing, Jace confronts painful truths; Maia struggles with feelings for Simon."},
        // { ep: 18, title: "Awake, Arise, or Be Forever Fallen", description: "After a devastating attack, the team hunts Jonathan, while Magnus helps a Downworlder."},
        // { ep: 19, title: "Hail and Farewell", description: "Valentine and Sebastian force the Downworlders to choose sides in a chaos-filled world."},
        // { ep: 20, title: "Beside Still Water", description: "Jace and Clary prepare for the final battle; a traitor emerges and demons collide."}
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
        // { ep: 21, title: "Alliance", description: "Fractured alliances reform amid the final storm."},
        // { ep: 22, title: "All Good Things...", description: "In the aftermath of war, peace is forged through love, loss, and survival."}
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
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUzu0LQi0J7e5eRow6u7NfEXLGHXpNzTHv4aKEH80ykMMqCqTTrbfoP0jeU9_Giz-AJZrbak5vJs-rYTPXQaoRXeXuW38cEw73ZjS0va4b9fYOcpGBPN5G6lGzegupPxF-5Q.jpg?r=220", // Replace with actual poster URL
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
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZqdfxVV4L8h-ZBhZF568TLxWljogSzKgIoZnBCgpxMSCLi3l05qllw5W8Gy1MB2lmhCgvPWx27iAiA_Gdnm2y29mx0Q_uy9IwohQHSes-7-_kPebsXLTeOF.webp?r=d3a"
        },
        {
          ep: 2,
          title: "Episode 2",
          description: "A fake copy of Piya's diary tricks Oggy into treating the Roaches nicely. Oggy and Piya go fishing—Oggy’s neighbor is a menace.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABabzBdnaXO_I16tEryTqSSczn4MNSaMz8dpaSUbfqhjXX266dqLRxFIHe-nz_KRrsBTzLGZ1Cp4HNVetxaGafSlPDqMzpdlf8CD-fdIGKwCCttVYMFCTIj1v.webp?r=a8e"
        },
        {
          ep: 3,
          title: "Episode 3",
          description: "Aliens arrive from outer space—but Piya knows they're the Roaches in disguise! Roach Dee Dee turns veggies into art. Oggy’s paw has a mind of its own.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYp25PQOvlUHLuNDNtz1hcht1tFoZ7QGRK6BqVNOoblFhe1PGqX_j-zeLHb1wcRZ5xhNuemJaPuBKnaXTvTyVXQBWx4fcFjA33Zj72tsqq_bh5Lc-jgWFzYJ.webp?r=f9e"
        },
        {
          ep: 4,
          title: "Episode 4",
          description: "The Roaches are experts with Piya's hair. A camping trip isn’t what Piya thought it would be—and the Roaches still pester even while Oggy's injured.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWMEKw8iUmchbFGgORAQ0dgs2QmTCyzkQZ2dxy62hHRw_tffRCG5__o1ywnq3w1Q8OnHu6Ql4aTJMHCX-vabxXcAxZGEConjLAmcOmQxCSHS4x0Wxi9D1SIY.webp?r=71c"
        },
        {
          ep: 5,
          title: "Episode 5",
          description: "Oggy can't get over his fear of clowns. Meanwhile, Piya's on the hunt for the last flower on her list. Oggy stays away thinking Piya's got something contagious.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcPFZd9OjZ56CF3vx97xUwZvJlT0lmKoihUchbI1B0lwYag0eozk8ByNeD5pIs2-X7yb17dSqGwiD1WDcq2Lri9KbckxojBAeJ3kgd4PfJSSyR2sL_OVW6K6.webp?r=316"
        },
        {
          ep: 6,
          title: "Episode 6",
          description: "Piya wants to play even though she can't stop sneezing. The Roaches nab Piya's doll after Oggy throws it out. Oggy leads them on a scary hike.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR9_YYLgcTshai-IWVL4SlPBM3eRo6WZxPxR0VXa5nqW3P0bN8_C70zCaVkERxV8Gp0tx00Ruq5UoYy6CxLA38k6dmjivmJM8fwQlr47qDhX3kce_rv1rgdR.webp?r=8f5"
        },
        {
          ep: 7,
          title: "Episode 7",
          description: "Oggy tries to take as many photos with Piya as possible. Oggy’s favorite tree takes a fall. Piya's scared of a tiny spider crawling around.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUX8-nx3V28KrHVH9kQy1Hti0SgLLUmVfD3nOHwzjGdBTRKTPRuTflNXmPcZanmOljLjyLjy9MPKDgHi7OHVt7toWUQ-WG3AHtHTPR6oQw77cLD7OZQfMebW.webp?r=c4c"
        },
        {
          ep: 8,
          title: "Episode 8",
          description: "Oggy’s expecting a baby—but instead it’s Piya returning! Oggy quits cleaning, and tries to impress Piya with magic tricks.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeD7xIYfF0BY9nh0x9V8o3WiStKsR_SuXAfQvtltXQ4G2EwRzhZ_iTWlsFkjezSyFYzu43xzs_zShyIYmTMMd2Do66w3_AMOCLfdEo2U29osU-lGCOXdGCiK.webp?r=9fd"
        },
        {
          ep: 9,
          title: "Episode 9",
          description: "Dee Dee thinks he’s a butler and starts tidying up. Who has the better pool, Oggy or Bob? Piya and the trio discover Oggy’s secret.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYSlUM0DBRlregLFPPB4O4z5CYnAMExgTPeWDJ1qaAao3q2jvbSOgkjMFjxx74EOPquEqUTutfDGrb9VHUWarvquQJhdt7geQReJlLfZJy-yT4ztRjQTssYV.webp?r=ffc"
        },
        {
          ep: 10,
          title: "Episode 10",
          description: "Oggy and the trio try to retrieve a spinning top from Piya. A day outdoors is just right—but Piya helps Oggy after a disastrous date with Olivia.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXVIPM6OTPjJnsDviWUHUDGSexKIY-sVOIdmjPEnvOGeIMcq0tdkXX6-lNH1yrQMHpV3DWZblKVO2TrCKBTRAuAVFDV-oVNZVV3JVJwi7gCVqGv7VzEPhxwi.webp?r=ac0"
        }
      ]
    }
  ]
}
,
  {
    id: 'teen_titans_go',
    title: 'Teen Titans Go! ',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY0Ymw-_nToK5Wtl0O8kjoo9xuaiBtVvLHY06yIhd3QGIOiXInMocIPH7oRhD9zsCgW_q_dK1Xv19lzdvD7xEQNVil75-UntkTA.jpg?r=a1d',
    genre:"Animation, Comedy, Kids",
    description:"Superhero roommates Robin, Starfire, Raven, Beast Boy and Cyborg protect Jump City from evildoers, when they're not too busy bickering and competing."
  },
  {
    id: 'daniel_spellbound',
    title: 'Daniel Spellbound',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUOAOEKmHTuBxfbxCj88ywB-PWwrULG5_1a85BhWVBju2bQiM9Ky9b1If1cOtJRdTHyM5-zyrmrEGsXX3asIH6HMfVI01CuZBG188wrExseSaT3hOrRZgc9FNYH4G76Ll05V.jpg?r=352',
    genre:"Animation, Adventure, Fantasy",
    description:"In a world where magic is real, Daniel Spellbound is a magical tracker who uses his skills to find rare and powerful magical artifacts, all while navigating the dangers of the magical underworld."
  },
  {
    id: 'the_smurfs',
    title: 'The Smurfs',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSRWtrT2MduQl2sYCSCmejdeKefoxF4OXFP9pR30NmUtvJtQoYsRmaTElly5A8qZQ1hsLqOsFkrPP9YXGBopiv7TsjQGSHbgnrs.jpg?r=b78',
    genre:"Animation, Comedy, Kids",
    description:"Join this merry band of Smurfs on their many magical adventures as they try to outsmart the wicked sorcerer Gargamel and his cat Azrael."
  },
  {
    id: 'boss_baby_back_in_business',
    title: 'Boss Baby: Back in Business',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQjQhLW8VuVw2QMG8q5HluSxBeSblBjOkjZTfBsctVkwY6Ix30S-ieW3Ow2V9tJssHxwHaV0XFhWmQYuOogbivd9MkBHvuB0i8gE1IqDJ-mCo9UpknpBpzf43dTctD_aWxHM.jpg?r=fa2',
    genre:"Animation, Comedy, Kids",
    description:"The Boss Baby brings his big brother Tim to the office to teach him the art of business in this animated series sprung from the hit film."
  }
  ,
   {
    id: 'mighty_little_bheem',
    title: 'Mighty Little Bheem',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWkNwF_bqxj-Z8kUQ-d4zqqK4y-pw-P7Im8lrO38z4cdAMOQXmeKzwWVKYkEHjirYtkKu2YCCkBdpPaapwOvBEQVGd4j1Vlqqg7G7EgQwCPdNwCFQ4Vvvm7hQjwN3gC7diUa.jpg?r=dc0',
    genre: 'Comedy, Adventure',
    description: 'Follow the mischievous adventures of a super-strong toddler Bheem in a small Indian town. Non-verbal, universally charming, and India’s first Netflix animated original for kids.'  
  },
  {
  id: "kung_fu_panda_the_dragon_knight",
  title: "Kung Fu Panda: The Dragon Knight",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZS3AP64J4immWPo4qapDB_xFrMvNdBEiLW-1fc99mdQ36iOq0t9uxCehFenm9nx7E6z2KWP8EU9cq0BHK_l_F_7YDP_3N_QnrG8EJR8uEo9ADSqC2qFLP1hov1ytT_b29Gw.jpg?r=7f6", 
  genre: "Action-Adventure, Comedy, Animation",
  description: "Po teams up with a no-nonsense English knight, Wandering Blade, on a quest across the globe to recover legendary elemental weapons and restore balance.",
  seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "A Cause for the Paws", description: "Po's popularity is gone after wicked weasels steal a powerful gauntlet. Wandering Blade offers a chance to chase the thieves." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdLjPLGfs2SxWuTLUFusc8_ItQ5i8eCPI7MsUEqom4OUm4LOr69EPf-qyPeesxT2aLW3gWnbR77f2ZaEJUDoGPSxT9TqIb_drtd5V2eL7PMv4b1RCVKBKzc0.webp?r=328" },
        { ep: 2, title: "The Knight's Code", description: "Po clashes with Blade until his kung fu skills earn her respect." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS-x2NzL8IqOy-ug_c4olVBTyxukm5kRltCHyP13bQHg8lbSAgR0aB9jaMRzkHk-KXGnnCZ2h7kHpuwau_d-CIyZcC0miQOo2zMCNMX9Db4mh3rKbIfndwdZ.webp?r=8cf" },
        { ep: 3, title: "The Lotus", description: "Po must choose between helping a prisoner or keeping the trust of elder monks." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcmYlsMEp0mTgZAT-78sCw0swWhC2htrgL4ZqPJu7LkKeSkOxlEMqa8qbaF6vtKmuGHY_kephUEN7_AK0iZpNBk7ZDM7ps1JEb8ISbIbcv1rVs98TFpfvblu.webp?r=c03" },
        { ep: 4, title: "The Legend of Master Longtooth", description: "Po and Blade head to Po's favorite comic-book creator to find the next weapon's location." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABScURd4p0hJ7Lp7uuFq8LI5x-1XHvFtPGcOuRmU3wrTnLsqu5j5-5PewwB-Wd4dJfk2dTGhUexa8HHScI6aYvrxgt42WJF8cV9ZGCwepC9uI_HcRn5bjUmsa.webp?r=db9" },
        { ep: 5, title: "The Gateway to the Desert", description: "Po and Blade must work together when they cross paths with Klaus and Veruca in the desert spice market." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcLrFmM3y0TpnUZ2kmRAPmV68MCecfX1QYMViXxuLDO0jWI53To0RAJRKgfjqmft73Az81Q2bR6d0rJEHQ_H61FAgHifk3pn1v6YEJ1fb5r2jHhRhr6Gdw7q.webp?r=cdf" },
        { ep: 6, title: "The Lost City", description: "They journey through treacherous terrain while a secretive stag makes a deal with Klaus and Veruca." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVzRG59axt_YPYgDdQctbhYz-2tC2MF1HokUQJGSwKu4fZHe_AyAbla7Bu9Lml7dMbSybwjWvxz5pHnOog6wWYeMUrLjiyHsOl8.webp?r=403" },
        { ep: 7, title: "The Last Guardian", description: "The warriors meet Rukhmini and try to convince her to hand over the Fire Whip." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSqFAq6pFIIi5O9_OXo_MPCBcK95ijnAVOCFS2QjIcPWAueHnOwpl9WC4VqVZ3TRINit0zLjSnExuXEyhGQMPlXauYoP2vvGw_xdkKN1mb1zGkGzWKb2hQx8.webp?r=4f9" },
        { ep: 8, title: "A Thread in the Dark", description: "A city of darkness challenges Po to find his way using courage rather than sight." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUyyDJMRCMAO6LffPFladUxE92zgpnrtNS21FeMf3Jioe-kV21eEBd0dIuFAdL04cX9O3xevBdAeTtONdwxJEsC-HD-gGJ46gIuvVZZWnChnlZuF23S9lY5g.webp?r=e50" },
        { ep: 9, title: "Slow Boat to England", description: "A perilous mission across the seas puts Po and Blade’s bond to the test." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZNo35ggOwZaHygZNlLgU7UZ9yrtztTgic6yTrUGXIWMHyZJtzBtdS9F-vxAvdiwEFfnNyR_-a_QIGfr_-RDApFJ43C7POL6t3aElFSD97n5czmOI8_u2q0C.webp?r=be0" },
        { ep: 10, title: "The Knight's Fall (Part 1)", description: "A dramatic turn of events threatens Blade’s resolve—and the mission's future." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeTYdg2N8YeuHzJyPTkUAoYemvniAYDkULes5OMhkTExOw_n-ne7Nea9oR0eNZ8782WQ5uWgmn5YuoZV10QZxJ1NIl86hZ9UZxFzx2sWIFB5q8DKRKCfVsvP.webp?r=7ee" }
      ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, title: "The Liar and the Thief", description: "Po arrives in India in search of someone who might help locate the Tianshang weapons." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXOhkMPPmXUnbYCYS5_tKpUDeVupIqkN0CVyenCkWPe_WilJBqkNgOw8VlLJ1P4OX5tlb7JPAeNWfVASmLwp6WV2CQQl0DMAiViJvYeynjrpMXnFyguAP6jZ.webp?r=37a" },
        { ep: 2, title: "One Last Job", description: "The team attempts a heist at an engagement party, with hidden intentions in play." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeW4MzGpM_JcJts_aPxnx3zlFyglZGYxlHZt19kusblIz0SURFVRz-EGLsXwbnvgzHrJnhpZsCKNnuG3T9Xu5meqH_ZuCTpAbYP6u8CmPQk2bIJSZAC7h2tY.webp?r=24f" },
        { ep: 3, title: "Doom and Groom", description: "They interrupt a wedding in pursuit of an enchanted pendant." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWPTcisPJ2pxGGNE_J54fTs5T8WlyHy9SGJc8KjBhvFlL_8QySFblt9csd_5-3tbFpFSc1khNU6RfuVGbuDtmYbG_fscLvpLsH9fU1SyQ7IDrqhpm4qnmRCZ.webp?r=460" },
        { ep: 4, title: "The Pinging", description: "The pendant releases the spirit of an ancient master, forcing Po into battle." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTnxri00qw3Vm8-aUh5MtUrZnVypoEuKnl2Nvn6jPtTAPYGhvHMmwMAktmP21Sd3-LfyIwE6axHd11wcX-mETHeBEuvFg85PDRjiYQ0FO3FAf5eXoUPJtf2G.webp?r=ce6" },
        { ep: 5, title: "Mister Mastodon", description: "In the New World, they defend a cacao farm from a worried monster." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeBlbS2hnP-r40oPFYp9kdz_Uw235LqhsthkCYl3EYvvrhBtbY702bqH_ZeMUBJ4ssh9r_ep3GwdhPBdlBNHKZIwCPZhFJ5WKHFHmGqPwHBzBlfQ_OSUHLyU.webp?r=836" },
        { ep: 6, title: "Hide the Lightning", description: "The team must evade electrifying danger in their search for artifacts." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQgp6T7XMAY1rZx0NsAMHu1cKNNBcWkngnjzu6jRx-dv-okSI0fiV5wHkiF1xVqXp_-xf33nscqbHkvPqqBX7_05YdaHCs_IxJgL9gXwVOckHXPIyEVt28Y3.webp?r=1aa" },
        { ep: 7, title: "The Beast", description: "A formidable creature pushes the Dragon Knights to use strategy over strength." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFHDn5naHZm_2Owqz5L8suYhvNj_GvI_Pb8Vf6GwVnldy18zFNTRHD4TulS__nymxuUZyQ4NkX7SwItSckAnFt4o7veEdxTDT0zOHwXExbZAuSDUfeMdmSG.webp?r=d0d" },
        { ep: 8, title: "An Uphill Battle", description: "Po faces steep terrain and steeper odds in a mountainous chase." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaO0OE4wpWK8lUOKB8HAek22L5ioZ9H8T9r7XQz3XBqkg37FDcz6j8qQ1pSiktqL7Ipp-ekyY5oI1R61AcND8C2y6mtuvJpOlbcXNjr7jU4pAEAVLeokAdAU.webp?r=348" },
        { ep: 9, title: "The Mad Scientist", description: "A quirky genius and his inventions complicate Po’s journey." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUxSSw_qCqt06PsJB-K66vZv2WLSiuwhBwVlxWto5381ijGb-towQpuyhtmgEm1EAtLqYHvwsAjjOV1ElNDwuscIZQ8VOTCsSDrgGDSuXgnc33f4aoM-9nDJ.webp?r=5c2" },
        { ep: 10, title: "Apok-ta-pokalypse Now (Part 1)", description: "The hunt leads to an apocalyptic showdown—only part 1, but stakes couldn’t be higher." , img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfhPL37HXUDFgihELNYGc4gZXCrSre00TrhrCVzfoh9cVNIpJwR9Rf9mTLInANEjznbuHyNKGI_TgQzQjl0aG5XUuDPja_0FEW21-YG0xQq0AU6tA9-_j7F-.webp?r=2e3" }
      ]
    },
    {
      season: 3,
      episodes: [
        { ep: 1, title: "The Trial of Mr. Ping", description: "As secrets about Mr. Ping surface, Po faces an unexpected trial." },
        { ep: 2, title: "Baddie Issues", description: "Tensions rise as Po and Blade confront the limits of their partnership." },
        { ep: 3, title: "A Family Friend", description: "A familiar face returns, blurring lines between ally and adversary." },
        { ep: 4, title: "The English Opening", description: "Blade faces her past in a complex political battle." },
        { ep: 5, title: "The Bog-ey Man of Festermouth", description: "A swamp’s mystery turns deadly when creatures come alive." },
        { ep: 6, title: "Tea Time Trouble", description: "A simple tea party turns chaotic with magical mishaps." },
        { ep: 7, title: "Benny and the Jests", description: "Humor becomes a weapon in the hands of a mischievous foe." },
        { ep: 8, title: "Black Steel of the Equinox", description: "Legendary steel reveals unexpected paths to power." },
        { ep: 9, title: "Luthera’s Shield", description: "Blade’s lineage resurfaces—forcing truths to be confronted." },
        { ep: 10, title: "The Battle of Tianshang (Part 1)", description: "The epic conflict over the elemental weapons begins." }
      ]
    }
  ]
}
,
  {
    id: 'grizzy_and_the_lemmings',
    title: 'Grizzy and the Lemmings',
    img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUq_jvDO2-6b88mZqn-nl04nm1e6mwf0NcSuGOlfGg4SPNzpygyXjqL5BF86cnHlJXx5dmwqTWh2w8mMRVkGHkOpizyW8mrpJnQ.jpg?r=a00',
    genre: 'Animation, Comedy, Kids',
    description: 'Grizzy, a big bear, and a group of mischievous lemmings engage in hilarious battles over food, territory, and the remote control in their forest home.'  
  },
  {
  id: "my_little_pony_friendship_is_magic",
  title: "My Little Pony: Friendship Is Magic",
 img: 'https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVI2LhdhqI-J98s1OtPQSFppAlgG-2j6PRE9zMgakxAzsR2koXdktP9n_k4w2pu3k8P4ymEgBhE852gFvsQi4aG_UlGUJU_uk4w.jpg?r=bd6',
  genre: "Animation, Fantasy, Children",
  description: "Twilight Sparkle discovers the magic of friendship in the town of Ponyville, and with her friends, she protects Equestria from dark forces and learns life-changing lessons.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Friendship Is Magic – Part 1",
          description: "Twilight Sparkle is sent to Ponyville by Princess Celestia to learn about friendship and prepare for the Summer Sun Celebration.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSEmqYP2Xg-k48sw19XApiiZA0V8857OACkecjIu0oTwQuUInfL2vqqd28V8DZCQQeoALfZEizNmqBQDKZKiCg3XxUOHnNBpuqmwjkPtNZ3fEdKvZQvRXHI1.webp?r=f21"
        },
        {
          ep: 4,
          title: "Applebuck Season",
          description: "Applejack tries to keep the harvest going despite exhaustion, and her friends learn the importance of balance.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaJOVBWmmkPQJQkaelpkR-O_5wWlxJRNp2OD7NDQfV2Ukakj5XAWpphJhJdPCvG4Xp1M-L2mvcLKubABoDLe_G-aSy4w2wx80i5d6p_OaJiXlldtdQTfd56Z.webp?r=53f"
        },
        {
          ep: 7,
          title: "Dragonshy",
          description: "The ponies venture to the Everfree Forest to confront a dragon, but Fluttershy’s fear may prove to be their downfall.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQW-Fs3-nWV_pb-LssjyNjXPtLfiOnQorcxYjoupX4NFE2HWzLZ08GItHZXVXKW1Hg9rikKou2n_2ftGoOXSojbxszuAgSGI9YU6Oe1MwIp7MvbKeyaU_SOH.webp?r=691"
        },
        {
          ep: 10,
          title: "Swarm of the Century",
          description: "A giant swarm of parasprites overruns Sweet Apple Acres, teaching the ponies about tackling problems before they grow.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABegcj64BYFSJyX7raH810Uc9JRS0fRLsg-iOPrOWtOrmFmvbmzrngoFt1HAqfaB1laMjDKClGBm6Wwsl0GeQMaDQ4XcNCWmlkVCDedWC5_4RED2v4pYmhws3.webp?r=435"
        }
      ]
    },
    {
      season: 2,
      episodes: [
        {
          ep: 1,
          title: "The Return of Harmony – Part 1",
          description: "Discord escapes and spreads chaos in Equestria; the ponies begin to lose faith in one another.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS3LARNiNfA_Uxqr6dX0miQL4WeTD9EZn8NaqNmEyJ51y3xu1ZmD9OGTd4yvL4ULgbPJgy2QKiXxm6JrCmlSLyhhbPvFMPyf8MtUBGlyu87L_vtTYKGuXZyk.webp?r=7c1"
        },
        {
          ep: 2,
          title: "The Return of Harmony – Part 2",
          description: "The ponies rediscover their bonds, learning that friendship is the key to defeating Discord.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcjI4IAP6OZ4n57IRvlqeAHhuD-eMTbEYLawul03S0PQWrlCI6PBTZ-tjD_YVHzVFX6MueirG2pUOiLnYaz-BJyHkffFw20kaZ4FACvSFD0hW07amTE_-hvD.webp?r=737"
        },
        {
          ep: 14,
          title: "The Last Roundup",
          description: "Big Macintosh disappears during a rodeo—Applejack becomes determined to find him, testing her family’s loyalty.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfcHYND7p9cLRPbRiCgtYFbyyGddreXUGSKBnFKcJ1eP8lzGDHOK2-z4QtOOusX99puNqGcnQDMqfZs7MTUTEaTb0X_EVHtO7zOdP74Dx16QaIfstoM-Z27F.webp?r=996"
        },
        {
          ep: 26,
          title: "A Canterlot Wedding – Part 2",
          description: "Cadance’s hidden identity is revealed as Shining Armor finally marries—with love and betrayal intertwined.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRnYhPbnsPBVz4jhGHvmapPAJl8zDLxP7Z-NuA5mDCcf-dkXK6hbZyVpObNCVCsNLYryLTiEZNRttB1YNW0JrL5eZpdsnMfu0r-4ra9vigX-8YPCaRn1NsPg.webp?r=3bd"
        }
      ]
    },
    {
      season: 3,
      episodes: [
        {
          ep: 1,
          title: "The Crystal Empire – Part 1",
          description: "Twilight and her friends embark on a mission to save a magical empire from eternal winter.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdTwUcbBL1fQbUzl9AS6PQokfqXUPblh2axURsJGrrZO2wUjFzkxfjyHS77G8edM13gFPtKfEW-hk97tMqAsrFzwas2kK91G9Vw8sCcTa9MOLccyTr83fYUf.webp?r=0c9"
        },
        {
          ep: 13,
          title: "Magical Mystery Cure",
          description: "Twilight makes risky magic to help her friends, triggering a chain reaction that changes her destiny forever.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcbaNRyJFo-xST7QbYYYnvD0UujVFBFstCmhhZwZjY4bQF4l1xwpRBoTVuBYZdIJV25pGWIFgrg4uPweR91ahBHKWaBAlh4j2-SAq6u872H_2jVcXSF15qXQ.webp?r=6ca"
        }
      ]
    }
  ]
}
];
const cardData3 = [
  
  {
    id: "sacred_games",
    title: "Sacred Games",
    img: "data:image/jpeg;base64,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", 
    genre: "Crime, Thriller, Drama",
    description: "A Mumbai police officer gets caught in a dangerous game when he receives cryptic warnings from a notorious gangster.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Sartaj Singh receives a mysterious call.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYz05XR9vl3qVLA5vYXd040MS0M08b9L84ILJm3tiN2raTMc-zZt5QW_vQcerlpUspeqqu2FTgzluuS0L6Fi3x01IVslLjxnR5E0q7LEL_HB6qEXk2pwCgGs.webp?r=fea" },
          { ep: 2, title: "Episode 2", description: "The past of Ganesh Gaitonde unfolds.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfB95vYZePCJn7Vruyl7yAum-bjC4WZJRdm0d0TrmL_dcC1-614Hwb6tmVKMXP0YVXscJYmLXOdpa8l7KYmj_WTy2eTBU4wItGakzLIaTYmq3pl1v1Nk-UOd.webp?r=495" },
          { ep: 3, title: "Episode 3", description: "The mystery deepens with new leads.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQe83TZg6NPwoWRKgv48x1BgDavgd14cQRyZNVLz8XB_A3LXNK3Aq0eGOKL2wtj_HjT4WezxUmNYz0zYT3zpm8tuJd59HYeXAEa1Zv0ztlBnsaHRf6xG44Zd.webp?r=4c5" },
          { ep: 4, title: "Episode 4", description: "Sartaj investigates dangerous connections.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRJzVP0q4CNB_73_OSDjcY28RarWFeMWrOBLGYzIjgSbo4_bw4i39vBpIf_fw6IYSzWSo4GcySq8bTOrRtcLsaCHDd06hIvi61Fmxxr1CuJrDbw4GffTpwEG.webp?r=3fd" },
          { ep: 5, title: "Episode 5", description: "Conspiracies and betrayals surface.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVdjZtD7nzvdVTplOS1TlfmFWcfT3NCRr2tBvgEm4SifdQZzBe3oWPYMEEeHFoWnHXi5XIYAoagWcerT3frXqkhyKnlC9mEKkRzJ-Nxbmht7y9wwW9bs76SR.webp?r=1c0" },
          { ep: 6, title: "Episode 6", description: "New threats put the city at risk.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWSgu-rh-eI7vTTCpgnaZMG_jSx8qM8AtOUxg_QBbF6cBLQs9eAWhbEdC_9L2bQsd5WpRPEveUSwUQCObAWT_Ek3hlvYcPrM-cLp8eT1ECP6d5j_EgfwGX55.webp?r=918" },
          { ep: 7, title: "Episode 7", description: "A haunting past resurfaces." },
          { ep: 8, title: "Episode 8", description: "Sartaj finds himself in grave danger." },
          { ep: 9, title: "Episode 9", description: "The countdown to chaos begins." },
          { ep: 10, title: "Episode 10", description: "The truth is finally revealed." }
        ]
      }
    ]
  },
  {
    id: "delhi_crime",
    title: "Delhi Crime",
    img: "data:image/jpeg;base64,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",
    genre: "Crime, Drama, True Story",
    description: "Based on real events, Delhi Crime follows the investigation of a brutal gang rape case that shook India.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "The horrific crime is reported.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWe2DT-knDnc_drNlrbhVC2UsME0K0smKSJqPYrX4txOF8wbR5e3LfGXP5O83mYjmjsCu8fgCbQr5Bsplcmz_zpabEGY7XxHusGw-Dp5E01ekec7UEFjrII9.webp?r=c6d" },
          { ep: 2, title: "Episode 2", description: "The police launch an intense investigation.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV37LSQAa64iJD9A1uWMe_c9kW72sVjGGRSWeD9VL3vGWNgOVvSU25csBvqzFzk9hssKHR5Ah-CXViwITUsp2mF5nVRhyiFpGsIeL3lkpuEkUgZpNYgwzgRB.webp?r=fac" },
          { ep: 3, title: "Episode 3", description: "Key suspects are identified.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABebcMVrr2LsY23EYOpSjD0ffys4-oaWtWW5OxnpfKFvdcRoEOJfA47CzWjG-nwsrPuFXyjPIHqbivkHSeXgjO06n5bmZh1txUGjhk_gpKHV-s827crPgkKoN.webp?r=431" },
          { ep: 4, title: "Episode 4", description: "Leads take the case to new places.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWlGzAf1PKnOpRppOf--fQwD0cvUkRz79Zsyr6_ZMoqm9IybpX2MKacq2CyxE17klnUtwoyC0kEA5Nk1rR5Kxx3Xq1BfQwbqfevb6hxvxvkLyZiHZ2f1oYYH.webp?r=478" },
          { ep: 5, title: "Episode 5", description: "The team works against the clock.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZqWzqisSAvN1a6IMvoEy6NMxtwyJgUBy_hOFIta_zHZJxslJ3U_HcEDBuuYW6UjjuMf80afai0lmrJZzuzOhK8IF7xxZ1l49Ys5jFN3WIBIdI3Zejgb9lbQ.webp?r=b51" },
          { ep: 6, title: "Episode 6", description: "The suspects are tracked down." },
          { ep: 7, title: "Episode 7", description: "Justice comes closer." },
          { ep: 8, title: "Episode 8", description: "The case reaches a conclusion." },
          { ep: 9, title: "Episode 9", description: "The aftermath hits the team." },
          { ep: 10, title: "Episode 10", description: "Reflections on justice and society." }
        ]
      }
    ]
  },
  {
    id: "leila",
    title: "Leila",
    img: "data:image/jpeg;base64,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",
    genre: "Sci-Fi, Drama, Thriller",
    description: "In a dystopian future, a mother searches for her daughter, who was taken from her years ago.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Shalini’s daughter is taken from her.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeyMiDbfhUULdvw122Y-IuMOWHX1n0AHdLg1jV0AdiVFNOGZcDFbUNJ4G9fRbK7ZCK7riPtgnA_JOGRe-mqMJwHLUYl0uAP9jF_x20E_6KvpWcXH9iMp4pNO.webp?r=e04" },
          { ep: 2, title: "Episode 2", description: "Life inside the authoritarian regime unfolds.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc41HxJ2B_MEXJYnM4XkNSXdS5nu8SwMyPZMYAGej8CbMFl8k6PeXue0pSZveeNFscA44mWCGMbPTRyoCgQMsdsgplRgCJEi8o1LkgJIsUzd9MRtiLRWwDsg.webp?r=67b" },
          { ep: 3, title: "Episode 3", description: "Shalini struggles with faith and resistance.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWHouMBH9XdslgIIL76nJVdRMjGSesvsn8c20eGiuGhL-qW1RUYCrBBcuSwmd2hNw3vc1dc9wi5cXXJm5x5JC632QN9rVzwxUOnXiG87cCRgd8NTrt1ToqT1.webp?r=6ee" },
          { ep: 4, title: "Episode 4", description: "A new lead gives Shalini hope.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXutMd0ofrDrHXvBJoFsX-kTQ1sgpX9cG3ikB4Asds5Co3EzCJTl6vAk0Ip_qQldto3oJO_oOERqvvtowbplaPRJUv0tb_PJapfJ4s1d94v3JoP88Z-wuL7T.webp?r=c08" },
          { ep: 5, title: "Episode 5", description: "The truth about the system surfaces.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcXgFV-snnMXGlFMUSKxynaWBkaMtqYmF0VSgxAJ5VSExzzqOVlm4kzBjq97ywNqOnp0dKB4VvlwnKVIKQb30XzAanJ_Bhyhox_KJuNxw0fC3aN19ntJqDi2.webp?r=e9d" },
          { ep: 6, title: "Episode 6", description: "Shalini fights for her daughter." },
          { ep: 7, title: "Episode 7", description: "Betrayals threaten her plan." },
          { ep: 8, title: "Episode 8", description: "A sacrifice is made for freedom." },
          { ep: 9, title: "Episode 9", description: "Hope and despair collide." },
          { ep: 10, title: "Episode 10", description: "The fate of mother and daughter is sealed." }
        ]
      }
    ]
  },
  {
    id: "ray",
    title: "Ray",
    img: "data:image/jpeg;base64,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",
    genre: "Drama, Anthology, Thriller",
    description: "An anthology of four unique stories inspired by the works of Satyajit Ray.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Forget Me Not", description: "An ambitious man’s memory fails him." },
          { ep: 2, title: "Bahrupiya", description: "A man’s obsession with disguises spirals." },
          { ep: 3, title: "Hungama Hai Kyon Barpa", description: "A chance train encounter triggers past guilt." },
          { ep: 4, title: "Spotlight", description: "A celebrity faces an identity crisis." }
        ]
      }
    ]
  },
  {
    id: "she",
    title: "She",
    img: "data:image/jpeg;base64,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",
    genre: "Crime, Thriller, Drama",
    description: "An undercover cop’s mission to expose a drug cartel changes her life in unexpected ways.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Bhumika begins her undercover assignment.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV7-Yc-885ow-iHzwxi4JxixjZaBl7HHMBtHYQhwWRtkQO_ItuNhLdAkyywxWjbHWzlRvtuY6p-berUxVnUlwaeSCx_JzKZ-O022mDQhZ4lRhdDU1XT3KH9O.webp?r=100" },
          { ep: 2, title: "Episode 2", description: "Her personal and professional life clash.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVMCeVSIIU_Xem61gb8yFY6Jq7M7GNezlEoCjVj6fSlFNbsDRGL9Tlo904H0V085JED2ND9WpCv_u-pmOV6JiNLpdxYeXWQlhKGTqHWa0Ql0fKVIU8ehN9Vx.webp?r=c4e" },
          { ep: 3, title: "Episode 3", description: "Danger lurks as the cartel tightens control.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfqx3yLJw9scsiBBQnGUmaFHTxLekVT9jUtpoQvc-DIRzdj0WmS408ycxTOuPrRH8eiqkHlPmGXhaRJqPBpCU00UmADRXUrTRdBIYFe4Q2opkQvJS9RKX3oS.webp?r=bb7" },
          { ep: 4, title: "Episode 4", description: "Her loyalty is questioned.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZiOq50SkISKlxnCNh4nXyPPbslCGb4sM4d2Df80-zmqnHxYfGBGTzZOSDRzLT9yAqaD80PEMNqAYi5nt_MsisQKCshfIjHR7UkfASRbr3y0mBihhJiyrg6y.webp?r=3dd" },
          { ep: 5, title: "Episode 5", description: "A betrayal changes everything." },
          { ep: 6, title: "Episode 6", description: "Bhumika struggles with her identity." },
          { ep: 7, title: "Episode 7", description: "The cartel’s secrets unravel." },
          { ep: 8, title: "Episode 8", description: "She takes control of her destiny." },
          { ep: 9, title: "Episode 9", description: "The mission nears its climax." },
          { ep: 10, title: "Episode 10", description: "A shocking finale." }
        ]
      }
    ]
  },
  {
    id: "yeh_kaali_kaali_ankhein",
    title: "Yeh Kaali Kaali Ankhein",
    img: "data:image/jpeg;base64,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",
    genre: "Romance, Thriller, Drama",
    description: "A man’s life spirals when a powerful politician’s daughter obsessively pursues him.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Vikrant’s ordinary life turns upside down." },
          { ep: 2, title: "Episode 2", description: "Purva’s obsession grows stronger." },
          { ep: 3, title: "Episode 3", description: "Vikrant struggles to resist her control." },
          { ep: 4, title: "Episode 4", description: "His true love faces danger." },
          { ep: 5, title: "Episode 5", description: "A desperate escape plan unfolds." },
          { ep: 6, title: "Episode 6", description: "The stakes get deadlier." },
          { ep: 7, title: "Episode 7", description: "The walls close in on Vikrant." },
          { ep: 8, title: "Episode 8", description: "Betrayal changes his future." },
          { ep: 9, title: "Episode 9", description: "The consequences catch up." },
          { ep: 10, title: "Episode 10", description: "A dark climax unfolds." }
        ]
      }
    ]
  },
  {
    id: "class",
    title: "Class",
    img: "data:image/jpeg;base64,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",
    genre: "Teen, Thriller, Drama",
    description: "When three new students from a poor background join an elite school, class divides lead to deadly consequences.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "The newcomers arrive at Hampton International." },
          { ep: 2, title: "Episode 2", description: "Tensions rise between the rich and poor students." },
          { ep: 3, title: "Episode 3", description: "Secrets begin to surface." },
          { ep: 4, title: "Episode 4", description: "A shocking event shakes the school." },
          { ep: 5, title: "Episode 5", description: "Love triangles complicate matters." },
          { ep: 6, title: "Episode 6", description: "Dark truths come to light." },
          { ep: 7, title: "Episode 7", description: "The investigation intensifies." },
          { ep: 8, title: "Episode 8", description: "A betrayal alters everything." },
          { ep: 9, title: "Episode 9", description: "The killer’s identity nears reveal." },
          { ep: 10, title: "Episode 10", description: "Lives are forever changed." }
        ]
      }
    ]
  },
  {
    id: "jamtara",
    title: "Jamtara – Sabka Number Ayega",
    img: "data:image/jpeg;base64,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",
    genre: "Crime, Drama, Thriller",
    description: "A group of young men run a phishing scam in a small town, but their schemes draw dangerous attention.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Sunny and Rocky’s scam grows." },
          { ep: 2, title: "Episode 2", description: "The local police take notice." },
          { ep: 3, title: "Episode 3", description: "A powerful politician enters." },
          { ep: 4, title: "Episode 4", description: "The operation expands." },
          { ep: 5, title: "Episode 5", description: "Tensions rise in the gang." },
          { ep: 6, title: "Episode 6", description: "Betrayal threatens everything." },
          { ep: 7, title: "Episode 7", description: "The law closes in." },
          { ep: 8, title: "Episode 8", description: "The boys face new enemies." },
          { ep: 9, title: "Episode 9", description: "The stakes rise higher." },
          { ep: 10, title: "Episode 10", description: "The game reaches a dangerous climax." }
        ]
      }
    ]
  },
  {
    id: "taj_mahal_1989",
    title: "Taj Mahal 1989",
    img: "data:image/jpeg;base64,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",
    genre: "Romance, Drama",
    description: "Set in 1989 Lucknow, Taj Mahal 1989 explores love through the lives of interconnected characters.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Akhtar and Sarita struggle with their marriage." },
          { ep: 2, title: "Episode 2", description: "College life introduces fresh romances." },
          { ep: 3, title: "Episode 3", description: "Love stories intertwine." },
          { ep: 4, title: "Episode 4", description: "Generational gaps are revealed." },
          { ep: 5, title: "Episode 5", description: "Challenges test relationships." },
          { ep: 6, title: "Episode 6", description: "Dreams clash with reality." },
          { ep: 7, title: "Episode 7", description: "Romantic bonds deepen." },
          { ep: 8, title: "Episode 8", description: "Old flames return." },
          { ep: 9, title: "Episode 9", description: "Love faces heartbreak." },
          { ep: 10, title: "Episode 10", description: "Conclusions of different love stories." }
        ]
      }
    ]
  },
  {
    id: "betaal",
    title: "Betaal",
    img: "data:image/jpeg;base64,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",
    genre: "Horror, Thriller",
    description: "A special task force battles against an army of undead redcoats in a remote village.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "The tunnel project uncovers a dark force." },
          { ep: 2, title: "Episode 2", description: "The undead rise from their graves." },
          { ep: 3, title: "Episode 3", description: "The soldiers fight for survival." },
          { ep: 4, title: "Episode 4", description: "Trust begins to collapse." },
          { ep: 5, title: "Episode 5", description: "The horror spreads further." },
          { ep: 6, title: "Episode 6", description: "Sacrifices are made to survive." },
          { ep: 7, title: "Episode 7", description: "A secret is revealed." },
          { ep: 8, title: "Episode 8", description: "The undead grow stronger." },
          { ep: 9, title: "Episode 9", description: "The final stand begins." },
          { ep: 10, title: "Episode 10", description: "A chilling finale." }
        ]
      }
    ]
  },
  {
    id: "ghoul",
    title: "Ghoul",
    img: "data:image/jpeg;base64,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",
    genre: "Horror, Thriller",
    description: "A new prisoner at a remote military facility reveals horrifying secrets and unleashes a demonic presence.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "A prisoner with dark powers arrives." },
          { ep: 2, title: "Episode 2", description: "Supernatural events terrify the soldiers." },
          { ep: 3, title: "Episode 3", description: "The true nature of the ghoul emerges." },
          { ep: 4, title: "Episode 4", description: "Chaos spreads in the facility." },
          { ep: 5, title: "Episode 5", description: "Secrets about the past come out." },
          { ep: 6, title: "Episode 6", description: "The demon hunts its prey." },
          { ep: 7, title: "Episode 7", description: "Fear consumes everyone." },
          { ep: 8, title: "Episode 8", description: "Nida fights for survival." },
          { ep: 9, title: "Episode 9", description: "A horrifying truth is revealed." },
          { ep: 10, title: "Episode 10", description: "The terror reaches its climax." }
        ]
      }
    ]
  }
];
const cardData4 =[ {
    id: "naruto",
    title: "Naruto",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfojdskBMfb8a8lm0dKM_P0ghIF8L1WtoDqYQNqvoHbItnzlqyZJTN9ESIE2RoGVBFsbNBWwATpGvA9OgzJ-_-SozuNypR1MP5I.jpg?r=93f", 
    genre: "Anime, Action, Adventure",
    description: "Naruto Uzumaki, a young ninja with dreams of becoming the strongest leader of his village, sets out on thrilling adventures.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Enter: Naruto Uzumaki!", description: "Naruto trains to earn the village's respect.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYB22s5_v5vJI0xG99sHiTveivDZAQznXXnVoFxDC1PvzxDY0UUI1d_T7VuqbEcnHEOhXDJ0dXIrDe5VaO1d_rIq0_7xhI4N-wn2OMOHj8Ox36t49JHVIZhh.webp?r=2b8" },
          { ep: 2, title: "My Name is Konohamaru!", description: "Naruto meets a young boy who looks up to him.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUxWw1ai53d80-oP2lC9BcbwJRd6jQt30A9D6D1lW8t7e9ESa6hyO3mH3RWBYPFPJvKKX8oruSs7hdBmV2mO-CVFI-wLOxSM4XHsYCO3TOejJxjbcLMFz8k3.webp?r=b18" },
          { ep: 3, title: "Sasuke and Sakura: Friends or Foes?", description: "Naruto teams up with Sasuke and Sakura.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABffcNYFFXZtnAxxf2rR-MctaiVMqbYee6bDoPZaSVPSBWO3nemtqU_Qbo-fpZvbsJ5HiX_WYa5_g0l93jRxpsa5WMVUqeBgLm9ddWCLiz_hrUPd6iM2VJrcW.webp?r=f01" },
          { ep: 4, title: "Pass or Fail: Survival Test", description: "Team 7 faces their first real challenge.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW1MoNZ3dHYh5lYzvS7yKWXaiF8inl8DxYHazSsH_pvQ78SL_8sLJIr0YOYVO0-u191os-bCr-gb1l7gIJCpzcDhVvxIopdHLiCMlSSxDA33xz3ClsDsYLxc.webp?r=33a" },
          { ep: 5, title: "You Failed! Kakashi’s Final Decision", description: "Kakashi evaluates Naruto and his team.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbMvJjmEAIQ3jAKYqkjHaD9EGGGOCRGEvMKx3cqDUgKqKItCYuHp6NtZ9J3uvLJeJV6oLxDtJ0PQnR_Jb07IZlulztmDmiPQYqVFceyF09yHMGeMtX1F2ZsJ.webp?r=3c0" },
          { ep: 6, title: "A Dangerous Mission!", description: "Their first mission outside the village begins.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUincdwmT3ZP2N7PSYfxknUf0MlEHCVd67Hssp8ZdQ7eOypOzdm_MmxP8BcWQVEo6RMd-xrQ7bmof7jK3abw0DKOYG7yy8Bqu9rTUaCnfIVT-We2B29Uvzb0.webp?r=49d" },
          { ep: 7, title: "The Assassin of the Mist!", description: "Team 7 encounters Zabuza Momochi.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc8gPjA8WCXeMPAINwO1xM0G3NHBZINgBj7LyPCtzKrfUkXmdMxIGw_hzNrVvMhlWl8J12aUFM2eFFzi_9t657gE6hR9JYbnQPd0TGSqLF_D3Dr06rFMADnh.webp?r=c16" },
          { ep: 8, title: "The Oath of Pain", description: "A fierce battle breaks out with Zabuza.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU-CHrwinChpy-9LlRu5kF13bTdAqSGqSA-Xh942MUjN08ZNa3OF4LNAUnXLiblBxF1WDSChwVmEXmKay_6WUJF78Ep7pRs2qAcb8RyGvOjI3mJV5UJ2PPEK.webp?r=f40" },
          { ep: 9, title: "Kakashi: Sharingan Warrior", description: "Kakashi reveals his Sharingan eye.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfmL7z8JCnlLD40A_tgy2ZxDUm9wHkGluIGtL-_72n2nk0dDT7DxVXwhB6dSt9TEgMjhObQ28p0MDJ6LlIPzmZ-RH1WJNv9khN3xcwjixxjCRzFUXNOB0Rnn.webp?r=32b" },
          { ep: 10, title: "The Forest of Chakra", description: "Naruto trains to walk on water.", img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS9OEXwsFQub0wNPxOfzzVuuadttyjvpLoBcOIoW-l0peGDrvrhBnBgcER-j28rh4--7BTsvh_-Jsug8zngm_z5E72TC9yxBavYNwvO1RzzfuGrxlQpIJ9GY.webp?r=6e7" }
        ]
      },
      {
        season: 2,
        episodes:[]
      },
      {
        season: 3,
        episodes:[]
      },
      {
        season: 4,
        episodes:[]
      },
      {
        season: 5,
        episodes:[]
      },
      {
        season: 6,
        episodes:[]
      },
      {
        season: 7,
        episodes:[]
      },
      {
        season:  8,
        episodes:[]
      },
      {
        season: 9,
        episodes:[]
      }
    ]
  },
 
  {
  id: "jujutsu_kaisen",
  title: "Jujutsu Kaisen",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRWEloAcZAXXIkUAe8mjfgvGBKkZZ1AMOsyEwWIUxQtdqJsU3TdmBo1n8WwESdVCiXoJ6cAdZWRwtg8d9tqkGqTQtOLnGfjXShE.jpg?r=932", 
  genre: "Anime, Action, Supernatural",
  description: "Yuji Itadori, a high schooler with extraordinary strength, joins a secret organization of Jujutsu Sorcerers to fight curses after he swallows a powerful cursed object — the finger of Ryomen Sukuna, the King of Curses.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Ryomen Sukuna",
          description: "Yuji Itadori swallows a cursed object and becomes host to the powerful curse, Sukuna.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXqmMpIzQue2A1IiPqfyk7rYWFk5gr0INJScqQbPrVJjA2v1s3nCOO6ozp5wRAICpWP_L2AXbr_IEshiDNverTGw3edbg_M5TBRdHahU5CbgVd4xCDKdn-dM.webp?r=a1d"
        },
        {
          ep: 2,
          title: "For Myself",
          description: "Yuji meets Gojo Satoru and is introduced to Jujutsu High.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQS7JHKdTx43EDms2SfDXyrA_7N9aep3QeWv0LEvgmIdaVM6zLfkP5gnzepi3oO3QJY-JOuvD7KctSlmBSxH7MorDhg62UXF038fuOxM6NBTKOePVmh9zHON.webp?r=f3a"
        },
        {
          ep: 3,
          title: "Girl of Steel",
          description: "Nobara Kugisaki joins Yuji and Megumi on their first mission as a trio.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT-F_J15ZK1kDmrAptQGcfy28-AUsA3jJYbcn0zD9jGAUAizkqW2EO8G0M5qY1x8EFlV04FdC_yLLYvZFp2C-DgvKBDo3oXJpuwuCW6hBQad-IOadWmU8HuP.webp?r=a59"
        },
        {
          ep: 4,
          title: "Curse Womb Must Die",
          description: "The first-years face a deadly cursed womb inside an abandoned building.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcBwzy29UTSAjT4Fn5ntSYfXZdVbED8v8QBtGJ1Z9MWDgOcFy0f4M5SO7Hvn0yMHYIsbEDxl4jxyL3g63PrKPp3cv7oTZeWY1hQ2MdPney2YhCwmfx2L_7k8.webp?r=374"
        },
        {
          ep: 5,
          title: "Curse Womb Must Die -II-",
          description: "Yuji struggles to control Sukuna’s power as tragedy strikes.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYLuPkHhQVx9ggzNjO-h9CK2-6dhkCNSRJ9v7Q1Gm3TGo6GFoGmhzzGd55RdR8rim21L3OBGrAlHghg_Zold0tsHWNzqWA3cq0OBrr_gPQPzYjLLrLfTqy-0.webp?r=732"
        },
        {
          ep: 6,
          title: "After Rain",
          description: "Gojo reveals the strength of his limitless technique against a curse user.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABch77l0Dlqs7tkMCcaQfenDmWIu56wPMgJ8iwMgVmrvqYXyT6tZb16Ocfy1CoBaghhirblG3qxHF6lyNxwj7kFQbmu9flDeorAPRXQtYrXjKa0UJ3XJvZLGi.webp?r=9dc"
        },
        {
          ep: 7,
          title: "Assault",
          description: "Gojo Satoru faces off against Jogo, a powerful cursed spirit.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTMFmrg2Kv-GwYqFcp9Om2qh7s8dQJJlM7lUTwUkSTlmMKVufSoVrGIHuo4l6mP2n6U1yJKFUrpEM4I6jTVLmw73kjiFrHdHlYT8T6fKX84tSUiq0SExsR0v.webp?r=05c"
        },
        {
          ep: 8,
          title: "Boredom",
          description: "New sorcerers from Kyoto arrive, creating tension before the exchange event.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd8qUMl9za8swDG3-mc-oTAgIELniM85ke-QryyZfpM2W-fxN1b5D8Qq_dK1dna51SjsP-ZYVhXkfAxTdQL1ILqMo-WHu5eA_04nqR0_jgSb3Hp0IbWbvOPo.webp?r=3b6"
        },
        {
          ep: 9,
          title: "Small Fry and Reverse Retribution",
          description: "The mysterious curse user Mahito makes his move.",
          
        },
        {
          ep: 10,
          title: "Idle Transfiguration",
          description: "Yuji and Nanami Kento confront Mahito, testing the limits of their strength.",
          
        }
      ]
    },
    {
      season: 2,
      episodes: [
        {
          ep: 1,
          title: "Hidden Inventory",
          description: "A flashback reveals Gojo and Geto’s mission to protect the Star Plasma Vessel.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ8vLFoOpV5m3rYhYMmLvjJsW9BL32oXgk31VdJUiXfGIq_-Y7LB4ZVhlqEUN3waEc6ui6CFZsav_a_9YecSnDtHsO1X_9wssHsOzLkbENUSxHxUP0MfqgWf.webp?r=8e7"
        },
        {
          ep: 2,
          title: "Hidden Inventory 2",
          description: "Gojo and Geto continue their mission while dangerous enemies lurk nearby.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcA7debsPP66tJIW8qv3w4omFZMKcftvHr4wgKImiUel3gn_uNz_FvYl08mS4irxy3uiAenN0A083WKOgMOL5_VK8y6mOYwuDypShOfCueB8_VUlkJGMXY5Y.webp?r=691"
        },
        {
          ep: 3,
          title: "Hidden Inventory 3",
          description: "Toji Fushiguro makes his move against the strongest sorcerers.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUbkzqKrwhOSdgu3jq0krYBNyhvky1bDArpmRrMQw-3x2QwETQQfjQlRqxqx8Hty_eIbX5G9tmF_WzD407Qb68RmgmlXYKxSoLFpeMFuvjJQMjztImMzYdvf.webp?r=1c9"
        },
        {
          ep: 4,
          title: "Hidden Inventory 4",
          description: "A fierce battle erupts as Gojo faces Toji, testing his limits.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWP47OtgTb4xwvC3C7JLyOBsFxoU7E2ty9visFGyNLKa_VXBOEhD71eKVRwsiW9arTd8Y6xYnehqVGv7m0YBrJc9nXFQudJrhIfAr0s_yhPxnex7mtTgzTqY.webp?r=905"
        },
        {
          ep: 5,
          title: "Premature Death",
          description: "The tragic fallout of the Star Plasma Vessel incident changes everything.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcxY6LEiF1m3WkPJFhMRTGgxD21hbANltRJplVCHZmE-ZfuShzbcaZ4PZZzTODPwlm-fI81_7pk7p-jbQ41JYrEQLtDJ0DlF6TyRStN---Lr3QedLZjr-qUf.webp?r=777"
        },
        {
          ep: 6,
          title: "Shibuya Incident Begins",
          description: "In the present day, curses and sorcerers clash as chaos erupts in Shibuya.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbShpfoqGZSYbQCn1WBOF6nJVSz6r9p7h2KGJCHnECtBb7XlxE05qMLgK3ux-2147D34LBKLml3RPdR6ky6FtP_AREd6ttsSnd2wZizseCT_1EZz7P41xmjE.webp?r=189"
        },
        {
          ep: 7,
          title: "The Curtain Falls",
          description: "Gojo enters Shibuya Station, where powerful curses lie in wait.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdXTJwTwIuTqlbPX2PNfLpybpqyMowajmphK_-aRtsngTbN1p3fMN3cY187GDZpiHryGbmfXpF2Axou8bfuAPGODg6kC9kFA-Oy7xNbyDzngMaExh-fPpLzj.webp?r=a67"
        },
        {
          ep: 8,
          title: "Gojo vs. Jogo",
          description: "Gojo unleashes his overwhelming power against cursed spirits in Shibuya.",
          
        },
        {
          ep: 9,
          title: "Prison Realm",
          description: "A deadly trap is sprung for Gojo inside the Shibuya Incident.",
          
        },
        {
          ep: 10,
          title: "Itadori’s Resolve",
          description: "Yuji faces devastation in Shibuya and vows to keep fighting.",
          
        }
      ]
    }
  ]
},
  {
  id: "tokyo_revengers",
  title: "Tokyo Revengers",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcfkHezlpADsKMI4J3BtTPnyHyNW_OWQ95E42NOaDeQ4NDqOUlZtNL0IZ7sjjNulZGeOzfOjeIxm0-joTTwYvfTu76XGQt1dxks.jpg?r=21e",
  genre: "Anime, Action, Drama, Time Travel",
  description: "Takemichi Hanagaki, a 26-year-old with a wasted life, discovers he can time travel 12 years into the past. He vows to save his ex-girlfriend Hinata from a tragic fate by infiltrating and changing the Tokyo Manji Gang.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Reborn",
          description: "Takemichi discovers his ability to time travel after a near-death experience.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa29iEs-L-C8bykOMp94ULDz88M0Ar_FGsiovg_4m1cViFydyWplYxfPPGTVbo7-yu2GBzJpYvhrK9OQdowbwEh2Tqt-8z6iGlGsDXLEH6Vkakuvwq1LjLcC.webp?r=252"
        },
        {
          ep: 2,
          title: "Resist",
          description: "Takemichi resolves to change the past to save Hinata.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfa2NRlYYTflDCdAKkZjDiHKUmz7C96ca7w8ZIdV76qe0aq3B_MNa0CQlZs0TxTHhY2WzK4uRNtd51nyKZUKOKYd7o6OWmIF0H6oG2OpUsY5lhQywILsq8iU.webp?r=1bb"
        },
        {
          ep: 3,
          title: "Resolve",
          description: "Takemichi meets Mikey and Draken, leaders of the Tokyo Manji Gang.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVHJt6HUlM3QMDnaHXlpIsaLPTeOvQcdfns0SiTtENn3S7jPQ7IM7MaS6pQhZJh5gZ54LmPOrAz9TOp2Npe4Luu__l_QZ3r2Rg0WQq57LwRPe2qp-CtjyLBz.webp?r=608"
        },
        {
          ep: 4,
          title: "Return",
          description: "After time traveling back to the present, Takemichi learns Hinata’s fate has not changed.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVqODmawqvxDasnRID63epFxQYJL9eai_JppmFYqfQlxU7UHJ2UZKyrtCXseIhkjYqXH-YmSlxLo4mUYN3uuN4D_izKO0akuA1j_KS-YVz06-M_8pjUTMOSJ.webp?r=ac0"
        },
        {
          ep: 5,
          title: "Releap",
          description: "Takemichi re-enters the past and struggles to stop gang conflicts.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTc_3DPHdSW-Avpp_Qya7-iIpRpkASYbq9PDPEWPuWG_ec8uFgfzqDTpU6xL6basm4THJdEib7FdzgjbbDJGdOodlWYLpV40oS2lBI39pYFD1ZlOrl5qBpx8.webp?r=244"
        },
        {
          ep: 6,
          title: "Regret",
          description: "Takemichi witnesses the bloody gang rivalry between Toman and Moebius.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRtZ1kA5Oj-HtAsGpYhLwQKtSxh4lmwUvV1wHtC02cxrzf7NbX5QYTuih5rrPwgpo_fPBQO0jKRXtEq44nTfOXCuALHDmm9ra8wdUK1b4CEW-_pnUd8ZYQtR.webp?r=e44"
        },
        {
          ep: 7,
          title: "Revive",
          description: "Draken falls into danger, forcing Takemichi to act bravely.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfAwK1zstaxAZQB2-7DBBUZawSuE46Mb5uJDWXaRtxXf0dMElETaC3aBgZb2OE2VrLQ4JOKWQ5x1Vt79Tt7wMEXIfesHV97BjBOMCE0lXvxUOMmZZzIU-eMt.webp?r=85a"
        },
        {
          ep: 8,
          title: "Rechange",
          description: "A deadly brawl erupts as Takemichi tries to protect Draken and Toman.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaNs1mdhbcVm0sWq6CzSY_mgV8mgx_is3gLmGcTX_ezqcLa3R5gt7GVmFU2ExOJOGejadeSaPO8Bq-JQCwjylht2G-cO7sj0viM0TXg7eId78sEJJYw4Wepg.webp?r=d8c"
        },
        {
          ep: 9,
          title: "Revolt",
          description: "The Moebius conflict comes to a head with shocking consequences.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYg70-_JCBCLP6kxTM7woIYsuzNcFHQJDSz6pVrZBpkoutLrBZR4O1nj0Idb8SzApQz-3j5iH_MqaqVehz9HmgQdYouM8LFnSSTXp1FyUvfaRm8bSUcMQokz.webp?r=69f"
        },
        {
          ep: 10,
          title: "Revenge",
          description: "Takemichi vows to grow stronger and change the course of Toman’s dark future.",
          img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdIQjnwB8oCUn33djY_Hfayk260ML4xpoJs5m2fVmZDHSOS8LUkemMg874jykJvnxgGas2j7k-tjuZqLexpnb7_8AkZUEu_ebHqoGOI6RYqDZt_jQkCMm-fh.webp?r=7f1"
        }
      ]
    },
    {
      season: 2,
      episodes: [
        {
          ep: 1,
          title: "Christmas Showdown Begins",
          description: "Takemichi faces the Black Dragon gang, who threaten Toman’s future.",
          
        },
        {
          ep: 2,
          title: "Clash of Gangs",
          description: "The Christmas conflict escalates as Takemichi fights to protect those he loves.",
          
        },
        {
          ep: 3,
          title: "Brother",
          description: "Hakkai’s troubled family past with the Black Dragon leader comes to light.",
          
        },
        {
          ep: 4,
          title: "Battle Lines",
          description: "Takemichi refuses to back down despite overwhelming odds.",
          
        },
        {
          ep: 5,
          title: "Fight to Survive",
          description: "The Christmas showdown reaches its peak with brutal clashes.",
          
        },
        {
          ep: 6,
          title: "A New Resolve",
          description: "The outcome of the battle changes Toman’s future.",
          
        },
        {
          ep: 7,
          title: "Back to the Present",
          description: "Takemichi returns to the present to see if his actions worked.",
          
        },
        {
          ep: 8,
          title: "Unexpected Turn",
          description: "Takemichi realizes the future is still not what he hoped for.",
          
        },
        {
          ep: 9,
          title: "The Next Mission",
          description: "Takemichi once again prepares to leap back into the past.",
          
        },
        {
          ep: 10,
          title: "Unbreakable Bonds",
          description: "Takemichi’s determination inspires new trust and alliances within Toman.",
          
        }
      ]
    }
  ]
}
,
  {
    id: "death_note",
    title: "Death Note",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR0RsD0TCGvbnuDIvBLWXrM55A_rJsK6yeLXu9E2hRuHnh_8q-uY_zPyfrAF8N-eg6jYpcT8QMexAob3gkbb3WJinjPoenwmWsY.jpg?r=e3d",
    genre: "Anime, Mystery, Supernatural",
    description: "A high school student gains the power to kill anyone by writing their name in a notebook.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Rebirth", description: "Light Yagami discovers the Death Note.",  },
          { ep: 2, title: "Confrontation", description: "Light begins testing the notebook.",  },
          { ep: 3, title: "Dealings", description: "L takes notice of the killings.",  },
          { ep: 4, title: "Pursuit", description: "L and Light begin their mind games.",  },
          { ep: 5, title: "Tactics", description: "The task force narrows down suspects.",  },
          { ep: 6, title: "Unraveling", description: "The battle of wits intensifies.",  },
          { ep: 7, title: "Overcast", description: "L grows suspicious of Light.",  },
          { ep: 8, title: "Glare", description: "The Kira case deepens.",  },
          { ep: 9, title: "Encounter", description: "Light and L finally meet face-to-face.",  },
          { ep: 10, title: "Doubt", description: "Misa Amane enters the story.",  }
        ]
      }
    ]
  },
  {
    id: "demon_slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbt4w1Q0xwQo1sLi6XPGZL7bQImp6txKnHi6uB28Yflwd0G-MVis3AlL6uZ2v1yJDDP7_kjltix5SzTToBK9ShiQlII40qsRB74.jpg?r=535",
    genre: "Action, Fantasy",
    description: "A boy becomes a demon slayer after his family is slaughtered by demons, while his sister is cursed as one.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Cruelty", description: "Tanjiro’s life changes forever.",  },
          { ep: 2, title: "Trainer Sakonji Urokodaki", description: "Tanjiro begins his training.",  },
          { ep: 3, title: "Sabito and Makomo", description: "Tanjiro trains under harsh conditions.",  },
          { ep: 4, title: "Final Selection", description: "Tanjiro faces the ultimate test.",  },
          { ep: 5, title: "My Own Steel", description: "Tanjiro receives his first sword.",  },
          { ep: 6, title: "Sword of Water", description: "Tanjiro battles demons in the city.",  },
          { ep: 7, title: "Muzan Kibutsuji", description: "Tanjiro encounters the demon king.",  },
          { ep: 8, title: "The Smell of Enchanting Blood", description: "New allies appear.",  },
          { ep: 9, title: "Temari Demon and Arrow Demon", description: "A fierce fight ensues.",  },
          { ep: 10, title: "Together Forever", description: "A new journey begins.",  }
        ]
      }
    ]
  },
  {
    id: "fullmetal_alchemist_brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBISEhMQEhIVFxIVFxcSFRIVFxUSFhgWFhUSFRUYHSggGBolHhUVITEiJSkrLi8uFyAzODMwNygtLisBCgoKDg0OGxAQGy0lICYtKy8tLS8tLS0tLSsvNy0xLS0tLS0tLS0tLS0tLS0tLy0tLS0vMC0tLS0tLS4rLS01Nf/AABEIAKMBNQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA9EAACAQIFAQUGBAQFBAMAAAABAgADEQQFEiExQQYiUWFxEzKBkaGxBxRSciNCwfAkYoKS0UOy4fEzY6L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALBEAAgIBAwIFAwQDAAAAAAAAAAECAxEEEiExQRMiUXGxBdHwMqHB4SNCYf/aAAwDAQACEQMRAD8A4bERAEREAREQBERAEREAREQBERAERPdKmWIAFyYB4mRaDHgGWHAZLYXO5kicAAOJneoj2LlTIp5wzeBmMoR0lyp5W1QbC+wv03P9mYa3Z97XKjbfkcDn6SUbckXU0VK0WlsXKBbj++J4q5SOLTjvijqpkyqxN3McAaZ/ymaUujJSWUVtNPDERE6cEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREzUUBvc28PWdjHLwcbwYZY+zWFBYtbgSEFADcy0dmFADW/yyOpi4USfsToalbFFpyvLjUJAHAufiQq//plEmcfka0fZK29TQXfyZ9gvwA+dz1lj7AZYBQaqw3dhb9qjb6sfkJW+0udIMVV1Mq3Oy1P4fcHcVlZrAg6f/M8miLbyejOSXB9xWAWkVpge6lO/7nUVD/3/AEmBqAlnwWVLjNVRK9LX7Oiwpjdt6SadXgCLbi4+03e0HZoBaP5Wk5PeL3Yk27oVSCbA3Ynb9JmqEXt4IOUc4ZScNlOtq9IDvFvaUv3GmlTR/qU29VWaeZ5dpCOB3XRG+JuN/Pu3PrJzOccmGamXqUlrItM6Na31ISASfdA7tuf5SLbSb7SYBGw9N09xjUZbfoqAYgn5o1v3TJdFrknBrJyXO8GDSbylJrU9JnSczp2Dqelwfgd5Ss0w9/dHH2np/S63ZTN+jRi10lCyK9URCreCJuUSoXi7ePhMVeoOLTa6Uo5bMym28YNeIn0iZ8Ez5ERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBPVMbz1QUFgDxJ/D5YpWW1Vub4ITmorLMeBwutdxccScy2joBsNu795p4DClLjxk7hUGkg7bbetxb7GepqdI7dK4JcvHyjzatWq9QpN8c/B2bDr7HCWUboj2HPeILAW9Wij2RwjkPWpo7NSppUSp3x7RCWVwTwQWcbc3HhMuXG6777Yd/g6AD6rJKfM0R2ppr0PoJ+Z5TIvL8gwuHr610tXZbam0hio8FFhYXtsOABeS1SmDyAdrfDwtPIsLnYeJ/wCZr5ZjhWpLVHutqI/aGIB+QBl3sQwQ2A7IZbU1hkp1QvtKektcKjFWZdtwQwNjfbebVTLgMOKC6dKh6a6dgFtUpKo9BYfCS9pr0SA1jYbsfrVb7C8pvinHoTh5X1OO9q6Wlzb+YVm+deqo+gEqK4cm/AnRM0wDYlqDKNvy9Gobddd3A+bk/CaWbdjToDod/A+M9r6FBQpk33fx/eTyPrF/+VJdl+fwc0x2FtwJDVlNzsZeMZlTpe49ZE4mqFBBA46y3Ww8w0s90claE9tDsLmwHlztPE89PBrPkREidEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDJRpFjYS7ZPgWcaRsbdfGQvZqgrcgXvOkZPgUFm+026WPOTLqZ4jgkuzXZ2lUpr7VbVVPIPI6A+MtWH7IUA/tFHP8psV89pWsMtSk/tLkrfiXPD5oq0jUdlSmBdmchVUeJJ4m692LmLPJ06hL9SMtGg4WpTU6DoCIfDSb0/gNx8RMuU5kK6E20VUOmrTPNOoOR5qbEg9R53AgqX4lZWavsjiACdtRSoKd/3kfXjzmSuKFfF/m8LVRiqUhVai1w1O7je3dOkMGsQdlHlPKvqeHJrB7emm44iyyMelib39LeZmKggpqFCsFW4AAU7c8LvMisQO+N+LoGN/PSLkem/rPaMDxq+KsPuJiN2QrXAI6+RH0Mo/aDP0FStQWouplrK5B916jJTVQw4IpirfwZx4GWTtEz/AJerpJS6kAqSG4JYhh7tlDHbfjccHg74ynSVQ7AABdhzt4KN5VbJrCSyTik85Z3fBZUEpppse5TW4sQVRQqWI6WEi89bSpvI3sZ+JOXslDClqiP7uqoqhNbMSBfVcC5te0uGc5aGU7T3apeHJJrjsfP6mlyi2upyLPqBcEr9PCUDOcuqN3gOOk7ack3PhKzneVrTJ25Mv1EYz4RDR2OK5OLspBsRY+c+S8Z7k61BqUWYSp4/C6DPKlBxPVjJM04iJAkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAnpBvPM90feEAsXZymVN/E8S80M3FJQSLAbn0kDkmBuoM08/zmmdVFFLkAqx4UHgi43Np6lE664Zmebqa7LZKMDdzX8RcVVutBaVKlwCV1OR+q5Nh8pACjXq941qrgbsrMzWH6rE8enHpN/spjPyzanRXBFrj3lHleXCnl9DEEVsO3s3BvdANj/mT+7zzJX2Tecnv6b6fTGPlXP7lHweSe2qooKqSQCW4CkgavMi8/R3ZrJEw1AU1UAWFx5W4P979ZzahkqpVR9I0En3dvZVGBW6//W17ad7HSR1IuWS5hi7aCaZFMEFtIIGkqApOsadmFgVY269ZJQnKOMleqjGmW59+Pz3/AILhRpWAB3ttfx8L+cyaJ5wata7MG/08HyYcj4TZKynaVbjQrYcNcMLrYrY9dXP0+5n5o/EvJKeEzCpToEsrWa36XazFRb9w+N5+j87xv5ai9ao97e6oULqb+VDe5+ItYAmcRwmB9vimxda7LTHtWNib1CSygC25JJaw32QdZpp0+6EpvovkqdubYUx6v9kVvMci/LU6aMQzump1HKsdrf0v5GWfEfitmAoUaKrQFQKEaoVLFtIA1WLW6bm3JmDEZXVr1SX7tVrEpyKFP+UVD+q3Cj1mrmeRuG00qTFFFi50gseWYknYdPDaUqyUMpHp26WNnKXCLJgvxT2UYjC26O9Kpe56utMrsOttXzk5mtJMVRStQYPTcXVh1H9D0I6TjWOou3dTT6g3v+23I85bOxPbD8vTpYKtSQUy2lalMtqDu3NQMTe5PItbwl2n1DUvMzyNXo0l5EbeZYfQCDKnmFJTeXXtQ4F5z3HYjcy+7BVTnBDYmhpPM8mh3dWoenWfK73MxTGzUIiJwCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCe6Q7w9Z4m5gaVyNp1AupxRo4J6gNmC2B8Gayg/WV3shSBxNLVuNQO/j0kpm1XVgnXi2j6MJpdia1MYhNZtbx8el/K87c+hPSpeIvc6mcOh5RD6qDNTEZNc68ORRrDdSB3H8UqKPeHnyNvCb9Ob2GTg+H26yMT6CxLBl7NsMRTYOmiopNOrTP8rW3F+qkG4PUGb2KwrYctiQRqFIhyQLFqQPfI8SpB/wBMrnYftCtXM8ZTq2V6fcS2wenTqFGVhwSC2oHncjiW78Tq4oZZWqEstxouliwL3UaQdv5j9JpUtr47o8HU2eLHHoyr/g32vxeKxNaliq5qoKYYawg0tqtZSANudpI9vPxRbA5gmFpUUqqArVGYkGzG1kt1HnKp+AuD1VMYSzMNNIjULbXe/U25+kr/AOIdq2eijSUli1CltY3LG4YD0cbeXO8g4xzlmZSecHTO0eNFd/ZvURqzABKIZQ2lzayITffcavEeW3oZI1KktFNPtGPtKlS1wrHlwOp2CqDxpBPu2PN/xEb8vnlOozDuthXHOwpsCd+BYqRz9N5cuxXbitiMTi6GLVFNMM1MJTZXOl9BS1+8babeh6Da+VrlFRXQ7pYxrm5t8vuYe0WLpYClcgksTpW/eduWZmPzLH/gSLpYV66K2IuA1tNFbqoHN36sbdDt5TewGDXGYitiq41FCgpId0prYkbdSOb+O/hbdrL3j5fc7n+nzlF9ag8d+57ums8WO7t2X3MeFwyILIiJ+0Afacx7Y0dGKq6dtwwt0JAa/wAzOoXnOO3ZH5pv2rf5f+plkS1qXhFhzur7Skr/AKlU/MXnNcyJ1GdDGHb8pQB59lTv66RKZnGBO5tNtmWj52CwQMT6RafJmLhERAEREAREQBERAEREAREQBERAEREAREQBERAMlAC+8smBwy22ErKHcS15ce7LK1kjIwdo6LCipHuhhq+wP9+Mj8lCE94X9DZh5g9DLYyBqFQPxpa/y5lRyoDrI3rBOh8l6yvE1UH+HqCso/6VTZx6C+/+k/CWzsr2ipV6nsmvSrA20PtcjchT1PkbHylK7PYM1SVKhqYtck6WQng02G99r24kticJpenTxLGzMq0MWo/iUqt7pTreIJ4P26NOlJ4Z685TUN0fz7fBg7Ma6faSqp0ozGsLKCwF+DfYWIAJPG5l0/HbPVGFbC3UMfZvv1u11tcG/uHwtbne05T2wxFUY+qait7QMtyt9BfQhZkJ4BNmt01TR7T5s+MKVarL7XRdt9iRUqKBzubAm9rb+cvaWM55PClu347HRfwczf8AK4TFsyB20vULBl0inTCgUzv7xLkgeAlW/Dmt+azZKtdqhRWfEPudKlA1QXJ91bgD5DrKjh61QUz7N3O26rq7vFm26+cYTMK9Ea0cjWtRLA7aWUo2peNwT9+k7vXDI7Hyi2Z7mBx+eM4CafboEJUbUaZUCo4691dR1Xkp+FTpVzPF10pimgoYhlUMxCamULyTdrEjm252lKyvOThjVcIDUq0mpgtfYVCNTAcDYG3rOg/hrROGy3HYlk0iqjFCR3yqI5Nj+kki3jaMLsWVJuWH+epN9kaw9liD4Mg+S3/rNmr/AH8ZQeznaEUDUVrkHS4AvdmVXGkepZPrJDM87cA01b+If/lcdH606fgF4v5eNzGt4sbPW0E1GlJ9iTzvOFoggWaoeF8PNv8AjrOY55iizEsdTtzJxaL1G0oNTG53NgB1d26AdT/WRObUkQkKdZ/mci2o/wCUdF8B8TMGe5zV2Smv+F0w2cUa66aTXKgd0ghgBtweR6TRxmF1GQHY3A66rVT7qXA82I3+Q+4lvqiehU3KPJ4s/K+CrZjkgKmwsfGVevRKGxnSqxBEgMzwAbpK7K/QnCZVPYm15jlg/KWFpFYyhY3EqawWZNSIiROiIiAIiIAiIgCIiAIiIAiIgCIiAIiIB9EtGUk2F5AYOhc3llwK2mimPJXY+DezirowlU+I0/7iF/rKplTS1ZsAcLV1cafr/L9bSoYFFuNbsB4U7avmdh9ZDUrklp2Xfs/mNSn3E9kdTX0uWBY2AsG90cdZY8wx9GphnWrdQwZWVtmVx0/cDa1udrSj0GpIytTQm3WqxqE+ek92/wAJgzbODUZSW1aW3A4AHQfP6TNGWOh7Cu2wwyTWh+dNdazlqzBGDC1kKX1G3XbbkWAPjKzm+Fam/s2F9ACqRwVG5IHmST6mTXZXHaDVvYuV7t+Tqvrt9P8AdNjG4ZaynVvfgjkeYnXe88mJ1blldSq1qS+zBAFz4ML28xNZazC4DML82JF/WTR7OHpUH+0/8zdoZJTA713bxNx8gOk7K6JWqJkFg8NUqkKApGxubGw8z09J1bL6d8uegrE/wnQX/UQ3ToLyr0aSqLKAo8BJvJMzKA09Jcsy6AvvFj3dA8bkrt4gSCve7g1UVRhLMiiVCUem97Wax8rEH7bybw9EuyovLEAeHrMWdZBXLM9Ok706h1AAEPTYd0o6HcMNwR5Sw9ksPpR61VTTYXVUYEMFA7x0ne5Ow8h5yc5Sm8snVDEtpunLaVCkfav/AA+o4NVvFrbnyUbDzlBz3Fio50qqIPdVQAAPO3J85O46hicQxqGnUPNr90AfpXVbb0lYx1MqxDAg+BlbOaieVhLgsfYlv4DjoKht/tU2k1iBKv2JxdqzUj7rjUP3Lz8x9pdmw156mmacUeDe3FkUac08SJM16FhInFztkTtUskNizIXEneS+MMha8yzNMTTqczxPdTmeJUTEREAREQBERAEREAREQBERAEREATPhEu1pgm3lp786uoJjC4WS+GozHgaN5N0MMLTZVwZ7GV/tVthx+4fYyq4cgbn/ANmXvPcvNSg6jkDUPVd7fcTn4Mo1HMidPESRfHkiw28+v/iYBMKmZAZkwatzfU2sA38VPX7giWRDa/PiduvjbkSozew+Ysg5ZvAHfb15EjKG4sjZtLIrHyI8dx9J6kZgs31sqlCGJsLEEfW03TihcrY3Gq+6/wAvPXynI6e2azGLfsTeoqi8OSRmi8xYuuKRQVAU1qjrexGh76SSpNvdPM9g34lTi11LcoyVc1qawyuwcCxP6ty244PvdZsntRXA/wCn66Tf72lNxuKY1HsxAuRsSONr/Sa5xDfqb5mXrJW9Q1wiyZhn9dwQzhlPKlUI+VpXqrAX2BB6dPh4GYzjT13mF6951JlE7NxJdkmAxtLfa7D4lWtOwYWlcTi3Z9rYqkebEn5An+k7DkOaU61wp7y8qeR5+Ym6h4MN6yeM0o2lWx45lyzUSo5iOZon0M9fDK5i5FVxJXFmRtWY5m2JHVuZjmSvzMcqJiIiAIiIAiIgCIiAIiIAiIgCIiAJkoGzC3jMc2cAt3E6gXPKdwJPUdhIXKk2EksfW0UHf9KkzXF4RnkssYjFKQVv0InL6iFWKnkEg+o2k+uYmw3kRmDAvfqdzKLJbuS2EdprgzIrzDEpayTJDD0dYvcARVRQlxu2q1/IeU1qVewtPBqd0DzJkcck93Bs4V7Oh/zL9xPb4kkk77kn5m80Q8+h5dG2UVhGd15eS356RVFIjkUMOB6aAR9/7vK2lRlN1LKfIkfOb1fF+55U6I+VNR/SaGMcXBHXmUdWbLJp8o83mN3ngvPBMkolLYJnyZKFFnOlQSfATO+W1gLmm9vIX+0lg4ZMkQmutulyfSxH9ZP4bGexxdGpewDgN+1u61/Kxv8ACYshy8pTLsLM3j0XoJr5utwZPmKycwpZR1TMDcSpZn1k/hMT7TD0n/UiN8wJB5mJtbyjHFYZV8aZD4itvJrHpzK/iBvMszVExsbz5ESkmIiIAiIgCIiAIiIAiIgCIiAIiIAmbB++vrEQC+ZXwJn7Rn/CVfQfcRE1f6lPcoVM7TWqneImZlx4iInAIiIAiIgGzjDun7E+0wMYicD6nmIidBIZCf8AEJ8fsZdFiJdV0ISMdbiQWOiJy4lAu3Zk3wVD9g/rNbMRzETRH9Jn7lcxwkFiVF58iVSLUalYWMxxEofUmhEROHRERAEREA//2Q==",
    genre: "Anime,Action, Adventure",
    description: "Two brothers use alchemy in search of the Philosopher’s Stone after a failed ritual leaves them scarred.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Fullmetal Alchemist", description: "The Elric brothers confront a rogue alchemist.",  },
          { ep: 2, title: "The First Day", description: "Edward recalls his past.",  },
          { ep: 3, title: "City of Heresy", description: "The brothers investigate Leto cult.",  },
          { ep: 4, title: "An Alchemist’s Anguish", description: "A horrifying chimera is created.",  },
          { ep: 5, title: "Rain of Sorrows", description: "A tragic decision must be made.",  },
          { ep: 6, title: "Road of Hope", description: "The brothers seek answers.",  },
          { ep: 7, title: "Hidden Truths", description: "Clues to the Philosopher’s Stone emerge.",  },
          { ep: 8, title: "Research Laboratory 5", description: "Danger lurks inside the lab.",  },
          { ep: 9, title: "Created Feelings", description: "A battle tests their resolve.",  },
          { ep: 10, title: "Separate Destinations", description: "The brothers split to chase leads.",  }
        ]
      }
    ]
  },
  {
    id: "bleach",
    title: "Bleach",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYshFqtucKWClnPfMhZ-6rDEWyTa4hVdLHibCL70u5yHX4sA-ofZwz6yJeHiDdAEy4fbp8srszy1iYH2HtZYVWUIS3-ipA_3Lbc.jpg?r=9f2",
    genre: "Anime,Action, Supernatural",
    description: "Ichigo Kurosaki gains the powers of a Soul Reaper and defends the human world from evil spirits.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "The Day I Became a Shinigami", description: "Ichigo meets Rukia and gains powers.",  },
          { ep: 2, title: "The Shinigami’s Work", description: "Ichigo adjusts to his new role.",  },
          { ep: 3, title: "Brother’s Bond", description: "Ichigo protects his family.",  },
          { ep: 4, title: "Cursed Parakeet", description: "A boy’s spirit is trapped.",  },
          { ep: 5, title: "Beat the Invisible Enemy!", description: "Ichigo faces a hollow.",  },
          { ep: 6, title: "Fight to the Death!", description: "Ichigo fights to protect his friends.",  },
          { ep: 7, title: "Greetings from a Shinigami", description: "New dangers appear.",  },
          { ep: 8, title: "June 17, Memories in the Rain", description: "Ichigo recalls his mother’s death.",  },
          { ep: 9, title: "Unbeatable Enemy", description: "A new foe challenges Ichigo.",  },
          { ep: 10, title: "Assault on Trip", description: "The fight escalates.",  }
        ]
      }
    ]
  },
  {
    id: "tokyo_ghoul",
    title: "Tokyo Ghoul",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSK28cX8f4duecO25LD2JDkmL_G3gyGhLJ9ix-oiSx0lKEF2MwpVKWxRqqmKvtn8FflE-3EBXJdhpPTvVI67DsJlTNL6vGJDwFU.jpg?r=413",
    genre: "Anime,Dark Fantasy, Horror",
    description: "A college student becomes half-ghoul after a deadly encounter and struggles between human and ghoul worlds.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Tragedy", description: "Kaneki’s life changes forever.",  },
          { ep: 2, title: "Incubation", description: "Kaneki begins to understand ghouls.",  },
          { ep: 3, title: "Dove", description: "The CCG investigates.",  },
          { ep: 4, title: "Supper", description: "Kaneki learns to adapt.",  },
          { ep: 5, title: "Scars", description: "Toka defends her identity.",  },
          { ep: 6, title: "Cloudburst", description: "Kaneki trains his powers.",  },
          { ep: 7, title: "Captivity", description: "Kaneki is abducted.",  },
          { ep: 8, title: "Circular", description: "CCG intensifies attacks.",  },
          { ep: 9, title: "Birdcage", description: "Kaneki struggles with his dual nature.",  },
          { ep: 10, title: "Aogiri", description: "Kaneki faces the ghoul organization.",  }
        ]
      }
    ]
  },
  {
    id: "hunter_x_hunter",
    title: "Hunter x Hunter",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbfe48ONlYsjzz5DwQOcV1hKcxf7UrNqsJq7Oj2xbp_6G69FCh5tL0x2BzbT8c-vKS15Lma86yx9KgdFWqQx5NDup6Vu7iLhdeI.jpg?r=22b",
    genre: "Anime, Adventure, Action",
    description: "Gon Freecss embarks on a journey to become a Hunter and find his missing father.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Departure x And x Friends", description: "Gon sets out to become a Hunter.",  },
          { ep: 2, title: "Test x Of x Tests", description: "The Hunter Exam begins.",  },
          { ep: 3, title: "Rivals x For x Survival", description: "Gon meets new allies and rivals.",  },
          { ep: 4, title: "Hope x And x Ambition", description: "The exam gets harder.",  },
          { ep: 5, title: "Hisoka x Is x Sneaky", description: "A mysterious contender appears.",  },
          { ep: 6, title: "An x Unexpected x Task", description: "The group faces new trials.",  },
          { ep: 7, title: "Showdown x On x The Airship", description: "A challenge on an airship begins.",  },
          { ep: 8, title: "Decision x By x Majority?", description: "The examinees face tricky tests.",  },
          { ep: 9, title: "Beware x Of x Prisoners", description: "The team battles convicts.",  },
          { ep: 10, title: "Trick x To The x Trick", description: "The exams grow dangerous.",  }
        ]
      }
    ]
  },
  {
    id: "black_clover",
    title: "Black Clover",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVDSEjcgEbYI5bjTK4mO-qoxnjCxgNCVUJnwt-1ORJ_5-p3G3UE_5pLYEtbeFKZHuRllsyX1LaNOYcoYRixTSdgWIPNnK-YZBic.jpg?r=0f0",
    genre: "Anime, Fantasy, Action",
    description: "In a world of magic, a boy born without powers strives to become the Wizard King.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Asta and Yuno", description: "Asta and Yuno’s rivalry begins.",  },
          { ep: 2, title: "The Boys’ Promise", description: "The brothers make a vow.",  },
          { ep: 3, title: "To the Capital of Clover Kingdom!", description: "They head to the Magic Knights exam.",  },
          { ep: 4, title: "The Magic Knights Entrance Exam", description: "Asta shows his determination.",  },
          { ep: 5, title: "The Path to the Wizard King", description: "The dream begins.",  },
          { ep: 6, title: "The Black Bulls", description: "Asta joins his squad.",  },
          { ep: 7, title: "The Other New Member", description: "New friendships form.",  },
          { ep: 8, title: "Go! Go! First Mission", description: "Their first mission starts.",  },
          { ep: 9, title: "Beasts", description: "Danger strikes the squad.",  },
          { ep: 10, title: "Protective Barrier", description: "Asta shows his willpower.",  }
        ]
      }
    ]
  },
  {
  id: "fairy_tail",
  title: "Fairy Tail",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVpFraCp-X2aGx_rI2fD4BN6yi8x0SumtmodoQmNl9j0uBGuDKidWQ3KZI829WUd7GDLd48diQ2kbI4-T3EVDfbMAm7QqXcsY34.jpg?r=885", 
  genre: "Anime, Action, Fantasy",
  description: "In a world filled with magic guilds, young wizard Lucy joins Fairy Tail and teams up with fire-breathing mage Natsu Dragneel and his flying cat Happy. Together, they face dangerous missions, powerful foes, and form unbreakable bonds.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "The Fairy Tail",
          description: "Lucy meets Natsu Dragneel, a fiery wizard searching for his missing foster father, the dragon Igneel.",
          
        },
        {
          ep: 2,
          title: "Fire Dragon, Monkey, and Bull",
          description: "Lucy officially joins the Fairy Tail guild and gets her first taste of its chaotic yet warm-hearted atmosphere.",
          
        },
        {
          ep: 3,
          title: "Infiltrate the Everlue Mansion",
          description: "Lucy, Natsu, and Happy accept a mission to retrieve a stolen book from a wealthy and cruel man.",
          
        },
        {
          ep: 4,
          title: "Dear Kaby",
          description: "The mission takes a dangerous turn when Natsu discovers the dark secret behind the stolen book.",
          
        },
        {
          ep: 5,
          title: "The Armored Wizard",
          description: "Natsu’s fiery temper clashes with Erza Scarlet, Fairy Tail’s strongest female mage.",
          
        },
        {
          ep: 6,
          title: "Fairies in the Wind",
          description: "Erza officially joins the team as they set out on their first real mission together.",
          
        }
      ]
    }
  ]
},
{
  id: "spy_x_family",
  title: "SPY x FAMILY",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXuS-ssXUJU_okgOceKSoKKScweq3iLZ6BE6spjeKnvf1pUICqr8fUMamP7sfC3w-wdZx6-aZCBsRxIDRH26V8I09P-5He30OTs.jpg?r=d41", 
  genre: "Anime, Action, Comedy",
  description: "Master spy Twilight must create a fake family to infiltrate an elite school. Unbeknownst to him, his new wife is an assassin, and his adopted daughter can read minds.",
  seasons: [
    {
      season: 1,
      episodes: [
        {
          ep: 1,
          title: "Operation Strix",
          description: "Spy Twilight takes on his toughest mission yet — creating a fake family.",
          
        },
        {
          ep: 2,
          title: "Secure a Wife",
          description: "Twilight crosses paths with Yor, a secret assassin, and they strike up a convenient marriage.",
          
        },
        {
          ep: 3,
          title: "Prepare for the Interview",
          description: "Anya joins the family, but the entrance interview at Eden Academy is tougher than expected.",
          
        },
        {
          ep: 4,
          title: "The Prestigious School's Interview",
          description: "The family faces an intense and emotional test to prove they belong at Eden Academy.",
          
        },
        {
          ep: 5,
          title: "Will They Pass or Fail?",
          description: "Anya eagerly awaits the results of her academy entrance exam.",
          
        },
        {
          ep: 6,
          title: "The Friendship Scheme",
          description: "Twilight pushes Anya to befriend Damian Desmond, the son of his target.",
          
        },
        {
          ep: 7,
          title: "The Target’s Second Son",
          description: "Anya struggles to get along with her new classmates while Twilight observes from afar.",
          
        },
        {
          ep: 8,
          title: "The Counter-Secret Police Cover Operation",
          description: "Yor’s younger brother, a secret police officer, grows suspicious of the Forger family.",
          
        }
      ]
    },
    {
      season: 2,
      episodes: [
        {
          ep: 1,
          title: "Follow Mama and Papa",
          description: "Anya tags along on Yor and Loid’s missions, causing unexpected chaos.",
          
        },
        {
          ep: 2,
          title: "Bond’s Adventure",
          description: "The family dog Bond takes center stage as he tries to protect Anya.",
          
        },
        {
          ep: 3,
          title: "Mission and Family",
          description: "Loid struggles to balance spy duties with his role as a family man.",
          
        },
        {
          ep: 4,
          title: "Yor’s Kitchen",
          description: "Yor attempts to improve her cooking skills with hilarious results.",
          
        },
        {
          ep: 5,
          title: "Anya’s Field Trip",
          description: "Anya joins a school field trip that unexpectedly becomes dangerous.",
          
        },
        {
          ep: 6,
          title: "Loid’s Rival Spy",
          description: "Another Westalis spy crosses paths with Twilight, testing his cover.",
          
        },
        {
          ep: 7,
          title: "The Cruise Adventure (Part 1)",
          description: "The Forgers win tickets to a luxury cruise, but Yor is secretly on an assassin mission.",
          
        },
        {
          ep: 8,
          title: "The Cruise Adventure (Part 2)",
          description: "Yor must balance her deadly mission with keeping her family safe aboard the ship.",
          
        },
        {
          ep: 9,
          title: "Anya and Bond’s Big Mission",
          description: "Anya and Bond stumble into trouble while Yor and Loid are distracted.",
          
        },
        {
          ep: 10,
          title: "Family Portrait",
          description: "The Forgers finally enjoy a peaceful day together, strengthening their bond.",
          
        }
      ]
    }
  ]
}
]; 

const cardData5 = [
  {
    id: "alice_in_borderland",
    title: "Alice in Borderland",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9MbR1kXcEjxQ3339N7chhCF9aaFDaQ7rvuYwI5RnTlNgAk1BmGN4tYZCxNuoOIivaRl-Z_siJeRMoBFisErN7PnAT1Q-eL5Ld8etFRR3K25MLAcI7jeOkkEuXbtOaOen-Z.jpg?r=400", 
    genre: "Thriller, Sci-Fi, Drama",
    description: "A group of friends is forced into deadly survival games in a deserted Tokyo where losing means death.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Arisu and his friends find themselves in a deserted Tokyo and are forced to play a deadly game." },
          { ep: 2, title: "Episode 2", description: "The trio enters another deadly game where trust is tested." },
          { ep: 3, title: "Episode 3", description: "Tensions rise as alliances form and betrayals unfold." },
          { ep: 4, title: "Episode 4", description: "A new ally provides hope, but the games become more twisted." },
          { ep: 5, title: "Episode 5", description: "Arisu reflects on his past as the stakes grow higher." },
          { ep: 6, title: "Episode 6", description: "The group faces a game that requires sacrifice and cunning." },
          { ep: 7, title: "Episode 7", description: "The borderland reveals darker secrets." },
          { ep: 8, title: "Episode 8", description: "A shocking climax forces Arisu to confront the true meaning of survival." }
        ]
      }
    ]
  },
  {
    id: "squid_game",
    title: "Squid Game",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSIsCbjwg1dapxoBQbmKPeU7fEIORiT716AxlW1nEhmDNFN4sfOm0k5fjhwezckmC4ZhY9sb4U9kpSLc21KhZRH9iE6LxLU6ZP_SpEl1cqsbzJUlLaQc84PeHwho8pQ4FVPWz_nfjqWaPCCI2wH30HAR28oX9WyKFbQbmti9ujdzKysVwbZPB_yBy75savQ.jpg?r=dd2",
    genre: "Thriller, Survival, Drama",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games with deadly stakes.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Red Light, Green Light", description: "456 players enter the deadly competition. The first game begins." },
          { ep: 2, title: "Hell", description: "Players vote on whether to continue or leave the game." },
          { ep: 3, title: "The Man with the Umbrella", description: "Players face a sugary challenge that requires precision." },
          { ep: 4, title: "Stick to the Team", description: "Teamwork becomes crucial in a deadly tug-of-war." },
          { ep: 5, title: "A Fair World", description: "Uneasy alliances form while tensions rise." },
          { ep: 6, title: "Gganbu", description: "A marble game tests trust, loyalty, and betrayal." },
          { ep: 7, title: "VIPs", description: "Masked VIPs arrive to watch the deadly spectacle." },
          { ep: 8, title: "Front Man", description: "A shocking revelation about the game’s overseer." },
          { ep: 9, title: "One Lucky Day", description: "The final game decides the ultimate winner." }
        ]
      }
    ]
  },
  {
    id: "extraordinary_attorney_woo",
    title: "Extraordinary Attorney Woo",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWJrYB_PTHdpNMIwBeszzs4d5Qe4GyIlXOoyQhA0pvhLkYUk-yDw2s94PwpKEAAHshonNEXTwLnW9hVHJPEgN-1r2aGO-ZHN4qXPnOhkSI7_oOeLSxNLzEtkZNqd3os0qI_P.jpg?r=141",
    genre: "Drama, Legal, Slice of Life",
    description: "A brilliant young attorney with autism spectrum disorder tackles challenging cases in and out of court.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Extraordinary Attorney Woo", description: "Woo Young-woo starts her first day at Hanbada Law Firm." },
          { ep: 2, title: "The Wedding Dress That Slipped Off", description: "A controversial wedding case challenges Woo's perspective." },
          { ep: 3, title: "This is Pengsoo", description: "Young-woo defends an unusual client with a unique obsession." },
          { ep: 4, title: "The Strife of the Three Brothers", description: "Family inheritance disputes bring drama to the courtroom." },
          { ep: 5, title: "Wild Card Defense", description: "A case involving abuse of power tests Woo’s determination." },
          { ep: 6, title: "If I Were a Whale", description: "Woo reflects on her struggles through her love for whales." },
          { ep: 7, title: "A Tale About Sodeok-dong", description: "The team fights against a construction project threatening residents." },
          { ep: 8, title: "Strange Meeting", description: "Woo faces emotional challenges as her past resurfaces." }
        ]
      }
    ]
  },
  {
    id: "kingdom",
    title: "Kingdom",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXmLypWHy7bYKmNI-JgDTcoA_hgBO07Zh8Y4Fu7aIHuJUUHd4ksYACu53UDloZQol5o_f5Yz7QSkSdkFifMHsDn6QF4wBcZcmN-5Gc6i58YNfktlJyRIP6k8QABnkJ5YxyLo.jpg?r=5dc",
    genre: "Historical, Horror, Thriller",
    description: "In a kingdom plagued by political corruption and famine, a mysterious plague brings the dead back to life.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "The Crown Prince investigates rumors of a deadly plague." },
          { ep: 2, title: "Episode 2", description: "The dead rise, terror spreads across villages." },
          { ep: 3, title: "Episode 3", description: "The Crown Prince realizes the plague’s horrifying truth." },
          { ep: 4, title: "Episode 4", description: "Survivors seek refuge as the plague worsens." },
          { ep: 5, title: "Episode 5", description: "The Prince confronts betrayal within the palace." },
          { ep: 6, title: "Episode 6", description: "A shocking truth threatens the stability of the dynasty." }
        ]
      }
    ]
  },
  {
    id: "hellbound",
    title: "Hellbound",
    img: "data:image/jpeg;base64,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",
    genre: "Supernatural, Thriller, Horror",
    description: "People learn their exact time of death when otherworldly beings condemn them to hell.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "A shocking public execution by supernatural beings sparks terror." },
          { ep: 2, title: "Episode 2", description: "The cult ‘New Truth’ rises in influence." },
          { ep: 3, title: "Episode 3", description: "A detective and lawyer question the true nature of these prophecies." },
          { ep: 4, title: "Episode 4", description: "Resistance grows against the New Truth." },
          { ep: 5, title: "Episode 5", description: "A family is targeted for damnation." },
          { ep: 6, title: "Episode 6", description: "The shocking fate of a newborn child shakes the world." }
        ]
      }
    ]
  },
  {
    id: "all_of_us_are_dead",
    title: "All of Us Are Dead",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdOdSuAwEvu_jZKZr4g_GHiP3YpfGSkqDi5yisAEpNVwAv-raxL1fcezQZn4aEu7ixtzlsbRg2GlY2_dkqo9QJyaJgz0Qkr1tH76wgOK9ulsSgZDe_QhgqxBTPeTJgIRGGSI.jpg?r=d40",
    genre: "Horror, Thriller, Drama",
    description: "Trapped students must fight their way out of a high school that becomes ground zero for a zombie outbreak.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "A science experiment unleashes a virus in Hyosan High." },
          { ep: 2, title: "Episode 2", description: "Chaos spreads as students struggle to survive." },
          { ep: 3, title: "Episode 3", description: "The infected overrun classrooms, dividing survivors." },
          { ep: 4, title: "Episode 4", description: "A rescue attempt puts students in danger." },
          { ep: 5, title: "Episode 5", description: "Hope rises when they discover a safe room." },
          { ep: 6, title: "Episode 6", description: "New threats emerge from inside the school." },
          { ep: 7, title: "Episode 7", description: "The military responds with brutal measures." },
          { ep: 8, title: "Episode 8", description: "A heartbreaking sacrifice ensures survival." }
        ]
      }
    ]
  },
  {
    id: "sweet_home",
    title: "Sweet Home",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABScenhmMIJtxRClMZor0bYP_KuHP9ohn0Znbz-ZBtHGtxnWxmOudwgCQ-dOAXI8OFw0_-1FdaN5MWAEYMqtoKJ-MrFpoiadLtCQ-EZRAQxTr95DxWYcWGTxbJhx4udSScRgI.jpg?r=c76",
    genre: "Horror, Action, Thriller",
    description: "Residents of a housing complex must band together when people suddenly turn into monsters.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Hyun-su moves into Green Home but soon discovers strange happenings." },
          { ep: 2, title: "Episode 2", description: "A horrific transformation shocks residents." },
          { ep: 3, title: "Episode 3", description: "Survivors realize the threat comes from within." },
          { ep: 4, title: "Episode 4", description: "Tensions rise as supplies run low." },
          { ep: 5, title: "Episode 5", description: "A daring plan to escape puts lives at risk." },
          { ep: 6, title: "Episode 6", description: "Monsters evolve, becoming deadlier." },
          { ep: 7, title: "Episode 7", description: "Hyun-su’s fate takes a dramatic turn." },
          { ep: 8, title: "Episode 8", description: "Survivors face their darkest hours." }
        ]
      }
    ]
  },
  {
    id: "my_name",
    title: "My Name",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTAqZM4S68FUJu4QTWOQWZy-KYMh4kwn3TohXL_aBEYLrjgDlsQ2QZXyKSNLvRB24d5L-D3v0gXmfCmIM11M5ePWYSWRunVPd7MSxtngriUB8vLMH8-6Oq0m7A4Y-Rvvk4QM.jpg?r=c71",
    genre: "Action, Crime, Thriller",
    description: "A woman joins a crime syndicate and infiltrates the police to avenge her father’s death.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Ji-woo witnesses her father’s brutal death." },
          { ep: 2, title: "Episode 2", description: "She seeks revenge by joining a crime syndicate." },
          { ep: 3, title: "Episode 3", description: "Ji-woo undergoes brutal training." },
          { ep: 4, title: "Episode 4", description: "Her loyalty is tested as she enters the police force." },
          { ep: 5, title: "Episode 5", description: "The lines blur between justice and revenge." },
          { ep: 6, title: "Episode 6", description: "Shocking truths about her father’s death are revealed." },
          { ep: 7, title: "Episode 7", description: "Ji-woo makes a dangerous decision." },
          { ep: 8, title: "Episode 8", description: "The ultimate confrontation decides her fate." }
        ]
      }
    ]
  },
  {
    id: "itaewon_class",
    title: "Itaewon Class",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdnn-2HDWVOC0Nxg7NHaAhCGAwFcctLdYu_DJlu9_p7htStKeoTGsVA82jOfPbURdpN9BThBmImTLN3vrwQ-gdR_ldHmSD52_NVyiy45UisWxH5yJO6kmmANKrWWrDhyT2q4.jpg?r=31d",
    genre: "Drama, Romance",
    description: "An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Saeroyi’s life changes after a tragic event." },
          { ep: 2, title: "Episode 2", description: "He starts his journey toward revenge and redemption." },
          { ep: 3, title: "Episode 3", description: "The team sets up their first bar in Itaewon." },
          { ep: 4, title: "Episode 4", description: "New rivals threaten their business." },
          { ep: 5, title: "Episode 5", description: "A chance encounter changes the course of their fight." },
          { ep: 6, title: "Episode 6", description: "Saeroyi’s resolve is tested as secrets unravel." },
          { ep: 7, title: "Episode 7", description: "The bar faces financial troubles." },
          { ep: 8, title: "Episode 8", description: "Allies rally together for a second chance." }
        ]
      }
    ]
  },
{
  id: "true_beauty",
  title: "True Beauty",
  img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVOtMelnp5zq5dhD28ZWxmxMUbij22WoPh3_Mjbbn_RmtdWzRLj4XSMetDsmYcHWFyQTjTTSXl5Bt3bFinGdJCUTX8ySMEPAjgw.jpg?r=c6c", 
  genre: "Romance, Comedy, Drama",
  description: "A high school girl masters makeup to hide her insecurities and discovers love and friendship while balancing her double life.",
  seasons: [
    {
      season: 1,
      episodes: [
        { ep: 1, title: "The New Me", description: "Ju-kyung transforms herself with makeup and starts fresh at a new school." },
        { ep: 2, title: "Secrets Between Us", description: "Su-ho discovers Ju-kyung’s bare face, forcing her to beg him to keep it a secret." },
        { ep: 3, title: "A Friend From the Past", description: "Ju-kyung and Su-ho grow closer, but unresolved pain resurfaces for him." },
        { ep: 4, title: "The Rivalry", description: "Seo-jun and Su-ho clash as Ju-kyung gets caught in the middle." },
        { ep: 5, title: "Growing Feelings", description: "Romance blossoms as Ju-kyung and Su-ho spend more time together." },
        { ep: 6, title: "The Truth Revealed", description: "Ju-kyung’s biggest fear comes true when her no-makeup face is exposed." },
        { ep: 7, title: "Comfort in Pain", description: "Su-ho comforts Ju-kyung as she struggles with bullying memories." },
        { ep: 8, title: "Between Friendship and Love", description: "Seo-jun realizes his feelings for Ju-kyung, complicating the trio’s bond." },
        { ep: 9, title: "The Confession", description: "Su-ho finally confesses his feelings to Ju-kyung, deepening their romance." },
        { ep: 10, title: "Unforgettable Memories", description: "The love triangle intensifies as secrets from the past return to haunt them." }
      ]
    }
  ]
}
,
  {
    id: "vincenzo",
    title: "Vincenzo",
    img: "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b",
    genre: "Crime, Drama, Dark Comedy",
    description: "A Korean-Italian mafia consigliere returns to Seoul and delivers his own brand of justice.",
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: "Episode 1", description: "Vincenzo returns to Korea after mafia betrayal." },
          { ep: 2, title: "Episode 2", description: "He becomes entangled in a property dispute." },
          { ep: 3, title: "Episode 3", description: "Vincenzo crosses paths with a fiery lawyer." },
          { ep: 4, title: "Episode 4", description: "The battle against a corrupt corporation begins." },
          { ep: 5, title: "Episode 5", description: "Vincenzo uses mafia tactics to fight back." },
          { ep: 6, title: "Episode 6", description: "Enemies close in as secrets surface." },
          { ep: 7, title: "Episode 7", description: "Allies unite to fight Babel Group." },
          { ep: 8, title: "Episode 8", description: "A shocking betrayal changes everything." }
        ]
      }
    ]
  }
]



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

const allCards = [...cardData, ...cardData1, ...cardData2 , ...cardData3,  ...cardData4, ...cardData5 ];


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