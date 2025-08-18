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