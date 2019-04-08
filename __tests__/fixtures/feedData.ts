const sampleData = {
  copyright:
    "Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt",
  totalItems: 18,
  totalEvents: 0,
  totalGames: 18,
  totalGamesInProgress: 4,
  dates: [
    {
      date: "2019-04-06",
      totalItems: 18,
      totalEvents: 0,
      totalGames: 18,
      totalGamesInProgress: 4,
      games: [
        {
          gamePk: 582225,
          link: "/api/v1/game/582225/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T21:05:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                pct: "1.000"
              },
              score: 2,
              team: {
                id: 414,
                name: "Salem Red Sox",
                link: "/api/v1/teams/414",
                season: 2019,
                venue: {
                  id: 2840,
                  name: "Haley Toyota Field",
                  link: "/api/v1/venues/2840"
                },
                teamCode: "sal",
                fileCode: "t414",
                abbreviation: "SAL",
                teamName: "Red Sox",
                locationName: "Salem",
                firstYearOfPlay: "1957",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Salem",
                parentOrgName: "Boston Red Sox",
                parentOrgId: 111,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                pct: ".000"
              },
              score: 1,
              team: {
                id: 426,
                name: "Wilmington Blue Rocks",
                link: "/api/v1/teams/426",
                season: 2019,
                venue: {
                  id: 2793,
                  name: "Frawley Stadium",
                  link: "/api/v1/venues/2793"
                },
                teamCode: "wil",
                fileCode: "t426",
                abbreviation: "WIL",
                teamName: "Blue Rocks",
                locationName: "Wilmington",
                firstYearOfPlay: "1993",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Wilmington",
                parentOrgName: "Kansas City Royals",
                parentOrgId: 118,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 7,
            currentInningOrdinal: "7th",
            inningState: "End",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 2,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 1,
                  leftOnBase: 1
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 1,
                hits: 4,
                errors: 0,
                leftOnBase: 5
              },
              away: {
                runs: 2,
                hits: 5,
                errors: 1,
                leftOnBase: 3
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 0,
            outs: 3
          },
          venue: {
            id: 2793,
            name: "Frawley Stadium",
            link: "/api/v1/venues/2793"
          },
          content: {
            link: "/api/v1/game/582225/content"
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "Y",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-582225-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 2,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 582224,
          link: "/api/v1/game/582224/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T03:33:00Z",
          rescheduledFrom: "2019-04-05T23:05:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            startTimeTBD: true,
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 1,
              team: {
                id: 414,
                name: "Salem Red Sox",
                link: "/api/v1/teams/414",
                season: 2019,
                venue: {
                  id: 2840,
                  name: "Haley Toyota Field",
                  link: "/api/v1/venues/2840"
                },
                teamCode: "sal",
                fileCode: "t414",
                abbreviation: "SAL",
                teamName: "Red Sox",
                locationName: "Salem",
                firstYearOfPlay: "1957",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Salem",
                parentOrgName: "Boston Red Sox",
                parentOrgId: 111,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 2,
              team: {
                id: 426,
                name: "Wilmington Blue Rocks",
                link: "/api/v1/teams/426",
                season: 2019,
                venue: {
                  id: 2793,
                  name: "Frawley Stadium",
                  link: "/api/v1/venues/2793"
                },
                teamCode: "wil",
                fileCode: "t426",
                abbreviation: "WIL",
                teamName: "Blue Rocks",
                locationName: "Wilmington",
                firstYearOfPlay: "1993",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Wilmington",
                parentOrgName: "Kansas City Royals",
                parentOrgId: 118,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 7,
            currentInningOrdinal: "7th",
            inningState: "Middle",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 1,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 2,
                hits: 2,
                errors: 1,
                leftOnBase: 2
              },
              away: {
                runs: 1,
                hits: 5,
                errors: 0,
                leftOnBase: 4
              }
            },
            defense: {},
            offense: {},
            balls: 1,
            strikes: 2,
            outs: 3
          },
          venue: {
            id: 2793,
            name: "Frawley Stadium",
            link: "/api/v1/venues/2793"
          },
          content: {
            link: "/api/v1/game/582224/content"
          },
          isTie: false,
          gameNumber: 2,
          publicFacing: true,
          doubleHeader: "Y",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-582224-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          description: "Makeup of 4/5 ppd.",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 582084,
          link: "/api/v1/game/582084/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T03:33:00Z",
          rescheduledFrom: "2019-04-05T23:05:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            startTimeTBD: true,
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 3,
              team: {
                id: 3712,
                name: "Fayetteville Woodpeckers",
                link: "/api/v1/teams/3712",
                season: 2019,
                venue: {
                  id: 5400,
                  name: "SEGRA Stadium",
                  link: "/api/v1/venues/5400"
                },
                teamCode: "fay",
                fileCode: "t3712",
                abbreviation: "FAY",
                teamName: "Woodpeckers",
                locationName: "Fayetteville",
                firstYearOfPlay: "1987",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Fayetteville",
                parentOrgName: "Houston Astros",
                parentOrgId: 117,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 5,
              team: {
                id: 436,
                name: "Potomac Nationals",
                link: "/api/v1/teams/436",
                season: 2019,
                venue: {
                  id: 2774,
                  name: "Northwest Federal Field at Pfitzner Stadium",
                  link: "/api/v1/venues/2774"
                },
                teamCode: "pot",
                fileCode: "t436",
                abbreviation: "POT",
                teamName: "Nationals",
                locationName: "Woodbridge",
                firstYearOfPlay: "1978",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Potomac",
                parentOrgName: "Washington Nationals",
                parentOrgId: 120,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 7,
            currentInningOrdinal: "7th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 1,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 3
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 2,
                  hits: 4,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 3
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 3,
                  hits: 2,
                  errors: 1,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 5,
                hits: 7,
                errors: 2,
                leftOnBase: 9
              },
              away: {
                runs: 3,
                hits: 8,
                errors: 1,
                leftOnBase: 6
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 0,
            outs: 2
          },
          venue: {
            id: 2774,
            name: "Northwest Federal Field at Pfitzner Stadium",
            link: "/api/v1/venues/2774"
          },
          content: {
            link: "/api/v1/game/582084/content"
          },
          isTie: false,
          gameNumber: 2,
          publicFacing: true,
          doubleHeader: "Y",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-582084-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "day",
          description: "Makeup of 4/5 ppd",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 581875,
          link: "/api/v1/game/581875/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T17:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                pct: "1.000"
              },
              score: 4,
              team: {
                id: 580,
                name: "Winston-Salem Dash",
                link: "/api/v1/teams/580",
                season: 2019,
                venue: {
                  id: 4089,
                  name: "BB&T Ballpark",
                  link: "/api/v1/venues/4089"
                },
                teamCode: "wsw",
                fileCode: "t580",
                abbreviation: "WS",
                teamName: "Dash",
                locationName: "Winston-Salem",
                firstYearOfPlay: "1945",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Winston-Salem",
                parentOrgName: "Chicago White Sox",
                parentOrgId: 145,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                pct: ".000"
              },
              score: 1,
              team: {
                id: 493,
                name: "Frederick Keys",
                link: "/api/v1/teams/493",
                season: 2019,
                venue: {
                  id: 2782,
                  name: "Nymeo Field",
                  link: "/api/v1/venues/2782"
                },
                teamCode: "frd",
                fileCode: "t493",
                abbreviation: "FRE",
                teamName: "Keys",
                locationName: "Frederick",
                firstYearOfPlay: "1989",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Frederick",
                parentOrgName: "Baltimore Orioles",
                parentOrgId: 110,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 7,
            currentInningOrdinal: "7th",
            inningState: "End",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 1,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 1,
                  leftOnBase: 1
                },
                away: {
                  runs: 2,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 1,
                hits: 6,
                errors: 2,
                leftOnBase: 6
              },
              away: {
                runs: 4,
                hits: 6,
                errors: 0,
                leftOnBase: 7
              }
            },
            defense: {},
            offense: {},
            balls: 2,
            strikes: 1,
            outs: 3
          },
          venue: {
            id: 2782,
            name: "Nymeo Field",
            link: "/api/v1/venues/2782"
          },
          content: {
            link: "/api/v1/game/581875/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "Y",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-581875-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "day",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 2,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 581874,
          link: "/api/v1/game/581874/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T03:33:00Z",
          rescheduledFrom: "2019-04-05T23:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            startTimeTBD: true,
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 3,
                losses: 0,
                pct: "1.000"
              },
              score: 8,
              team: {
                id: 580,
                name: "Winston-Salem Dash",
                link: "/api/v1/teams/580",
                season: 2019,
                venue: {
                  id: 4089,
                  name: "BB&T Ballpark",
                  link: "/api/v1/venues/4089"
                },
                teamCode: "wsw",
                fileCode: "t580",
                abbreviation: "WS",
                teamName: "Dash",
                locationName: "Winston-Salem",
                firstYearOfPlay: "1945",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Winston-Salem",
                parentOrgName: "Chicago White Sox",
                parentOrgId: 145,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 3,
                pct: ".000"
              },
              score: 5,
              team: {
                id: 493,
                name: "Frederick Keys",
                link: "/api/v1/teams/493",
                season: 2019,
                venue: {
                  id: 2782,
                  name: "Nymeo Field",
                  link: "/api/v1/venues/2782"
                },
                teamCode: "frd",
                fileCode: "t493",
                abbreviation: "FRE",
                teamName: "Keys",
                locationName: "Frederick",
                firstYearOfPlay: "1989",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Frederick",
                parentOrgName: "Baltimore Orioles",
                parentOrgId: 110,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 8,
            currentInningOrdinal: "8th",
            inningState: "End",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 3,
                  hits: 4,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 3,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 2
                }
              }
            ],
            teams: {
              home: {
                runs: 5,
                hits: 8,
                errors: 0,
                leftOnBase: 4
              },
              away: {
                runs: 8,
                hits: 14,
                errors: 0,
                leftOnBase: 9
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 0,
            outs: 3
          },
          venue: {
            id: 2782,
            name: "Nymeo Field",
            link: "/api/v1/venues/2782"
          },
          content: {
            link: "/api/v1/game/581874/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 2,
          publicFacing: true,
          doubleHeader: "Y",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-581874-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "day",
          description: "Makeup of 4/5 PPD",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 582085,
          link: "/api/v1/game/582085/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T21:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 1,
              team: {
                id: 3712,
                name: "Fayetteville Woodpeckers",
                link: "/api/v1/teams/3712",
                season: 2019,
                venue: {
                  id: 5400,
                  name: "SEGRA Stadium",
                  link: "/api/v1/venues/5400"
                },
                teamCode: "fay",
                fileCode: "t3712",
                abbreviation: "FAY",
                teamName: "Woodpeckers",
                locationName: "Fayetteville",
                firstYearOfPlay: "1987",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Fayetteville",
                parentOrgName: "Houston Astros",
                parentOrgId: 117,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 5,
              team: {
                id: 436,
                name: "Potomac Nationals",
                link: "/api/v1/teams/436",
                season: 2019,
                venue: {
                  id: 2774,
                  name: "Northwest Federal Field at Pfitzner Stadium",
                  link: "/api/v1/venues/2774"
                },
                teamCode: "pot",
                fileCode: "t436",
                abbreviation: "POT",
                teamName: "Nationals",
                locationName: "Woodbridge",
                firstYearOfPlay: "1978",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Potomac",
                parentOrgName: "Washington Nationals",
                parentOrgId: 120,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 7,
            currentInningOrdinal: "7th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 7,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 2,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 5,
                hits: 5,
                errors: 0,
                leftOnBase: 3
              },
              away: {
                runs: 1,
                hits: 6,
                errors: 0,
                leftOnBase: 7
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 0,
            outs: 0
          },
          venue: {
            id: 2774,
            name: "Northwest Federal Field at Pfitzner Stadium",
            link: "/api/v1/venues/2774"
          },
          content: {
            link: "/api/v1/game/582085/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-582085-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 7,
          gamesInSeries: 4,
          seriesGameNumber: 2,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 572837,
          link: "/api/v1/game/572837/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T21:30:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 7,
              team: {
                id: 279,
                name: "Palm Beach Cardinals",
                link: "/api/v1/teams/279",
                season: 2019,
                venue: {
                  id: 2520,
                  name: "Roger Dean Chevrolet Stadium",
                  link: "/api/v1/venues/2520"
                },
                teamCode: "pbc",
                fileCode: "t279",
                abbreviation: "PMB",
                teamName: "Cardinals",
                locationName: "Palm Beach",
                firstYearOfPlay: "2003",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Palm Beach",
                parentOrgName: "St. Louis Cardinals",
                parentOrgId: 138,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 8,
              team: {
                id: 479,
                name: "Jupiter Hammerheads",
                link: "/api/v1/teams/479",
                season: 2019,
                venue: {
                  id: 2520,
                  name: "Roger Dean Chevrolet Stadium",
                  link: "/api/v1/venues/2520"
                },
                teamCode: "jup",
                fileCode: "t479",
                abbreviation: "JUP",
                teamName: "Hammerheads",
                locationName: "Jupiter",
                firstYearOfPlay: "1998",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Jupiter",
                parentOrgName: "Miami Marlins",
                parentOrgId: 146,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            note: "One out when winning run scored.",
            currentInning: 10,
            currentInningOrdinal: "10th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 3
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 3,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 2,
                  leftOnBase: 0
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 4,
                  hits: 4,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 10,
                ordinalNum: "10th",
                home: {
                  runs: 2,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 8,
                hits: 7,
                errors: 0,
                leftOnBase: 3
              },
              away: {
                runs: 7,
                hits: 9,
                errors: 2,
                leftOnBase: 9
              }
            },
            defense: {},
            offense: {},
            balls: 3,
            strikes: 2,
            outs: 1
          },
          venue: {
            id: 2520,
            name: "Roger Dean Chevrolet Stadium",
            link: "/api/v1/venues/2520"
          },
          content: {
            link: "/api/v1/game/572837/content"
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-572837-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 581735,
          link: "/api/v1/game/581735/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 2,
              team: {
                id: 249,
                name: "Carolina Mudcats",
                link: "/api/v1/teams/249",
                season: 2019,
                venue: {
                  id: 2625,
                  name: "Five County Stadium",
                  link: "/api/v1/venues/2625"
                },
                teamCode: "cmc",
                fileCode: "t249",
                abbreviation: "CAR",
                teamName: "Mudcats",
                locationName: "Zebulon",
                firstYearOfPlay: "1969",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Carolina",
                parentOrgName: "Milwaukee Brewers",
                parentOrgId: 158,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 1,
              team: {
                id: 485,
                name: "Down East Wood Ducks",
                link: "/api/v1/teams/485",
                season: 2019,
                venue: {
                  id: 2777,
                  name: "Grainger Stadium",
                  link: "/api/v1/venues/2777"
                },
                teamCode: "dne",
                fileCode: "t485",
                abbreviation: "DE",
                teamName: "Wood Ducks",
                locationName: "Kinston",
                firstYearOfPlay: "1962",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Down East",
                parentOrgName: "Texas Rangers",
                parentOrgId: 140,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 2,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 3
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 1,
                hits: 8,
                errors: 0,
                leftOnBase: 7
              },
              away: {
                runs: 2,
                hits: 2,
                errors: 0,
                leftOnBase: 4
              }
            },
            defense: {},
            offense: {},
            balls: 1,
            strikes: 2,
            outs: 3
          },
          venue: {
            id: 2777,
            name: "Grainger Stadium",
            link: "/api/v1/venues/2777"
          },
          content: {
            link: "/api/v1/game/581735/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-581735-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 572417,
          link: "/api/v1/game/572417/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 4,
              team: {
                id: 509,
                name: "Fort Myers Miracle",
                link: "/api/v1/teams/509",
                season: 2019,
                venue: {
                  id: 2862,
                  name: "CenturyLink Sports Complex",
                  link: "/api/v1/venues/2862"
                },
                teamCode: "ftm",
                fileCode: "t509",
                abbreviation: "FTM",
                teamName: "Miracle",
                locationName: "Fort Myers",
                firstYearOfPlay: "1992",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Fort Myers",
                parentOrgName: "Minnesota Twins",
                parentOrgId: 142,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 7,
              team: {
                id: 2730,
                name: "Charlotte Stone Crabs",
                link: "/api/v1/teams/2730",
                season: 2019,
                venue: {
                  id: 2534,
                  name: "Charlotte Sports Park",
                  link: "/api/v1/venues/2534"
                },
                teamCode: "cha",
                fileCode: "t2730",
                abbreviation: "CHA",
                teamName: "Stone Crabs",
                locationName: "Port Charlotte",
                firstYearOfPlay: "2009",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Charlotte",
                parentOrgName: "Tampa Bay Rays",
                parentOrgId: 139,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 3
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 2,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 7,
                hits: 12,
                errors: 0,
                leftOnBase: 6
              },
              away: {
                runs: 4,
                hits: 4,
                errors: 1,
                leftOnBase: 8
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 1,
            outs: 3
          },
          venue: {
            id: 2534,
            name: "Charlotte Sports Park",
            link: "/api/v1/venues/2534"
          },
          content: {
            link: "/api/v1/game/572417/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-572417-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 572697,
          link: "/api/v1/game/572697/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:00:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 5,
              team: {
                id: 450,
                name: "Daytona Tortugas",
                link: "/api/v1/teams/450",
                season: 2019,
                venue: {
                  id: 2787,
                  name: "Jackie Robinson Ballpark",
                  link: "/api/v1/venues/2787"
                },
                teamCode: "dbc",
                fileCode: "t450",
                abbreviation: "DBT",
                teamName: "Tortugas",
                locationName: "Daytona Beach",
                firstYearOfPlay: "1946",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Daytona",
                parentOrgName: "Cincinnati Reds",
                parentOrgId: 113,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 4,
              team: {
                id: 503,
                name: "Florida Fire Frogs",
                link: "/api/v1/teams/503",
                season: 2019,
                venue: {
                  id: 2514,
                  name: "Osceola County Stadium",
                  link: "/api/v1/venues/2514"
                },
                teamCode: "flo",
                fileCode: "t503",
                abbreviation: "FLO",
                teamName: "Fire Frogs",
                locationName: "Kissimmee",
                firstYearOfPlay: "1994",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Florida",
                parentOrgName: "Atlanta Braves",
                parentOrgId: 144,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 3,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 2,
                  hits: 3,
                  errors: 1,
                  leftOnBase: 1
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 3,
                  hits: 4,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 4,
                hits: 9,
                errors: 0,
                leftOnBase: 6
              },
              away: {
                runs: 5,
                hits: 9,
                errors: 1,
                leftOnBase: 8
              }
            },
            defense: {},
            offense: {
              first: {
                id: 624523,
                fullName: "Riley Unroe",
                link: "/api/v1/people/624523"
              }
            },
            balls: 0,
            strikes: 3,
            outs: 3
          },
          venue: {
            id: 2514,
            name: "Osceola County Stadium",
            link: "/api/v1/venues/2514"
          },
          content: {
            link: "/api/v1/game/572697/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-572697-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 582015,
          link: "/api/v1/game/582015/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:05:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 0,
              team: {
                id: 481,
                name: "Lynchburg Hillcats",
                link: "/api/v1/teams/481",
                season: 2019,
                venue: {
                  id: 2803,
                  name: "Calvin Falwell Field",
                  link: "/api/v1/venues/2803"
                },
                teamCode: "lyn",
                fileCode: "t481",
                abbreviation: "LYN",
                teamName: "Hillcats",
                locationName: "Lynchburg",
                firstYearOfPlay: "1970",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 210,
                  name: "Carolina League Northern",
                  link: "/api/v1/divisions/210"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Lynchburg",
                parentOrgName: "Cleveland Indians",
                parentOrgId: 114,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 2,
              team: {
                id: 521,
                name: "Myrtle Beach Pelicans",
                link: "/api/v1/teams/521",
                season: 2019,
                venue: {
                  id: 2747,
                  name: "TicketReturn.com Field",
                  link: "/api/v1/venues/2747"
                },
                teamCode: "myr",
                fileCode: "t521",
                abbreviation: "MB",
                teamName: "Pelicans",
                locationName: "Myrtle Beach",
                firstYearOfPlay: "1999",
                league: {
                  id: 122,
                  name: "Carolina League",
                  link: "/api/v1/league/122"
                },
                division: {
                  id: 211,
                  name: "Carolina League Southern",
                  link: "/api/v1/divisions/211"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Myrtle Beach",
                parentOrgName: "Chicago Cubs",
                parentOrgId: 112,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 1,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              }
            ],
            teams: {
              home: {
                runs: 2,
                hits: 3,
                errors: 0,
                leftOnBase: 2
              },
              away: {
                runs: 0,
                hits: 11,
                errors: 1,
                leftOnBase: 10
              }
            },
            defense: {},
            offense: {
              first: {
                id: 680757,
                fullName: "Steven Kwan",
                link: "/api/v1/people/680757"
              },
              second: {
                id: 676809,
                fullName: "Tyler Friis",
                link: "/api/v1/people/676809"
              }
            },
            balls: 1,
            strikes: 1,
            outs: 3
          },
          venue: {
            id: 2747,
            name: "TicketReturn.com Field",
            link: "/api/v1/venues/2747"
          },
          content: {
            link: "/api/v1/game/582015/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-582015-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 572627,
          link: "/api/v1/game/572627/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:30:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 3,
              team: {
                id: 424,
                name: "Dunedin Blue Jays",
                link: "/api/v1/teams/424",
                season: 2019,
                venue: {
                  id: 2525,
                  name: "Jack Russell Memorial Stadium",
                  link: "/api/v1/venues/2525"
                },
                teamCode: "dun",
                fileCode: "t424",
                abbreviation: "DUN",
                teamName: "Blue Jays",
                locationName: "Clearwater",
                firstYearOfPlay: "1987",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Dunedin",
                parentOrgName: "Toronto Blue Jays",
                parentOrgId: 141,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 8,
              team: {
                id: 566,
                name: "Clearwater Threshers",
                link: "/api/v1/teams/566",
                season: 2019,
                venue: {
                  id: 2700,
                  name: "Spectrum Field",
                  link: "/api/v1/venues/2700"
                },
                teamCode: "clr",
                fileCode: "t566",
                abbreviation: "CLR",
                teamName: "Threshers",
                locationName: "Clearwater",
                firstYearOfPlay: "1985",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Clearwater",
                parentOrgName: "Philadelphia Phillies",
                parentOrgId: 143,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 2,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 1
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 4,
                  hits: 4,
                  errors: 1,
                  leftOnBase: 2
                },
                away: {
                  runs: 2,
                  hits: 1,
                  errors: 1,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 8,
                hits: 13,
                errors: 2,
                leftOnBase: 8
              },
              away: {
                runs: 3,
                hits: 6,
                errors: 2,
                leftOnBase: 7
              }
            },
            defense: {},
            offense: {
              second: {
                id: 669392,
                fullName: "Samad Taylor",
                link: "/api/v1/people/669392"
              }
            },
            balls: 3,
            strikes: 3,
            outs: 3
          },
          venue: {
            id: 2700,
            name: "Spectrum Field",
            link: "/api/v1/venues/2700"
          },
          content: {
            link: "/api/v1/game/572627/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-572627-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 573122,
          link: "/api/v1/game/573122/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:30:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 1,
                pct: ".667"
              },
              score: 9,
              team: {
                id: 570,
                name: "Lakeland Flying Tigers",
                link: "/api/v1/teams/570",
                season: 2019,
                venue: {
                  id: 2511,
                  name: "Publix Field at Joker Marchant Stadium",
                  link: "/api/v1/venues/2511"
                },
                teamCode: "lak",
                fileCode: "t570",
                abbreviation: "LAK",
                teamName: "Flying Tigers",
                locationName: "Lakeland",
                firstYearOfPlay: "1967",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Lakeland",
                parentOrgName: "Detroit Tigers",
                parentOrgId: 116,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 2,
                pct: ".333"
              },
              score: 12,
              team: {
                id: 587,
                name: "Tampa Tarpons",
                link: "/api/v1/teams/587",
                season: 2019,
                venue: {
                  id: 2523,
                  name: "George M. Steinbrenner Field",
                  link: "/api/v1/venues/2523"
                },
                teamCode: "tby",
                fileCode: "t587",
                abbreviation: "TAM",
                teamName: "Tarpons",
                locationName: "Tampa",
                firstYearOfPlay: "1994",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 214,
                  name: "Florida State League North",
                  link: "/api/v1/divisions/214"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Tampa",
                parentOrgName: "New York Yankees",
                parentOrgId: 147,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 2,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 8,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 7,
                  hits: 5,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 12,
                hits: 9,
                errors: 1,
                leftOnBase: 5
              },
              away: {
                runs: 9,
                hits: 11,
                errors: 1,
                leftOnBase: 11
              }
            },
            defense: {},
            offense: {},
            balls: 3,
            strikes: 2,
            outs: 3
          },
          venue: {
            id: 2523,
            name: "George M. Steinbrenner Field",
            link: "/api/v1/venues/2523"
          },
          content: {
            link: "/api/v1/game/573122/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-573122-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 572347,
          link: "/api/v1/game/572347/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-06T22:30:00Z",
          status: {
            abstractGameState: "Final",
            codedGameState: "F",
            detailedState: "Final",
            statusCode: "F",
            abstractGameCode: "F"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 0,
                losses: 3,
                pct: ".000"
              },
              score: 2,
              team: {
                id: 507,
                name: "St. Lucie Mets",
                link: "/api/v1/teams/507",
                season: 2019,
                venue: {
                  id: 2856,
                  name: "First Data Field",
                  link: "/api/v1/venues/2856"
                },
                teamCode: "slu",
                fileCode: "t507",
                abbreviation: "STL",
                teamName: "Mets",
                locationName: "Port St. Lucie",
                firstYearOfPlay: "1988",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "St. Lucie",
                parentOrgName: "New York Mets",
                parentOrgId: 121,
                allStarStatus: "N",
                active: true
              },
              isWinner: false,
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 3,
                losses: 0,
                pct: "1.000"
              },
              score: 4,
              team: {
                id: 3390,
                name: "Bradenton Marauders",
                link: "/api/v1/teams/3390",
                season: 2019,
                venue: {
                  id: 2526,
                  name: "LECOM Park",
                  link: "/api/v1/venues/2526"
                },
                teamCode: "bra",
                fileCode: "t3390",
                abbreviation: "BRD",
                teamName: "Marauders",
                locationName: "Bradenton",
                firstYearOfPlay: "2010",
                league: {
                  id: 123,
                  name: "Florida State League",
                  link: "/api/v1/league/123"
                },
                division: {
                  id: 215,
                  name: "Florida State League South",
                  link: "/api/v1/divisions/215"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Bradenton",
                parentOrgName: "Pittsburgh Pirates",
                parentOrgId: 134,
                allStarStatus: "N",
                active: true
              },
              isWinner: true,
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 2,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 3
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 4,
                hits: 6,
                errors: 2,
                leftOnBase: 6
              },
              away: {
                runs: 2,
                hits: 5,
                errors: 0,
                leftOnBase: 9
              }
            },
            defense: {},
            offense: {},
            balls: 3,
            strikes: 3,
            outs: 3
          },
          venue: {
            id: 2526,
            name: "LECOM Park",
            link: "/api/v1/venues/2526"
          },
          content: {
            link: "/api/v1/game/572347/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {
              hasRecapArticle: false
            },
            gameNotes: {}
          },
          isTie: false,
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-572347-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 576409,
          link: "/api/v1/game/576409/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-07T01:05:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "I",
            detailedState: "In Progress",
            statusCode: "I",
            abstractGameCode: "L"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                pct: "1.000"
              },
              score: 2,
              team: {
                id: 103,
                name: "Lake Elsinore Storm",
                link: "/api/v1/teams/103",
                season: 2019,
                venue: {
                  id: 2516,
                  name: "The Diamond",
                  link: "/api/v1/venues/2516"
                },
                teamCode: "les",
                fileCode: "t103",
                abbreviation: "LE",
                teamName: "Storm",
                locationName: "Lake Elsinore",
                firstYearOfPlay: "1980",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 209,
                  name: "California League South",
                  link: "/api/v1/divisions/209"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Lake Elsinore",
                parentOrgName: "San Diego Padres",
                parentOrgId: 135,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                pct: ".000"
              },
              score: 8,
              team: {
                id: 401,
                name: "Inland Empire 66ers",
                link: "/api/v1/teams/401",
                season: 2019,
                venue: {
                  id: 2728,
                  name: "San Manuel Stadium",
                  link: "/api/v1/venues/2728"
                },
                teamCode: "inl",
                fileCode: "t401",
                abbreviation: "IE",
                teamName: "66ers",
                locationName: "San Bernardino",
                firstYearOfPlay: "1993",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 209,
                  name: "California League South",
                  link: "/api/v1/divisions/209"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Inland Empire",
                parentOrgName: "Los Angeles Angels",
                parentOrgId: 108,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 6,
            currentInningOrdinal: "6th",
            inningState: "Bottom",
            inningHalf: "Bottom",
            isTopInning: false,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 2,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 2,
                  hits: 3,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 6,
                  hits: 4,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 3,
                  leftOnBase: 1
                }
              }
            ],
            teams: {
              home: {
                runs: 8,
                hits: 7,
                errors: 0,
                leftOnBase: 4
              },
              away: {
                runs: 2,
                hits: 5,
                errors: 4,
                leftOnBase: 6
              }
            },
            defense: {},
            offense: {
              second: {
                id: 678636,
                fullName: "Orlando Martinez",
                link: "/api/v1/people/678636"
              }
            },
            balls: 1,
            strikes: 1,
            outs: 1
          },
          venue: {
            id: 2728,
            name: "San Manuel Stadium",
            link: "/api/v1/venues/2728"
          },
          content: {
            link: "/api/v1/game/576409/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {},
            gameNotes: {}
          },
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-576409-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 576549,
          link: "/api/v1/game/576549/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-07T01:05:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "I",
            detailedState: "In Progress",
            statusCode: "I",
            abstractGameCode: "L"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 2,
                losses: 0,
                pct: "1.000"
              },
              score: 2,
              team: {
                id: 515,
                name: "Modesto Nuts",
                link: "/api/v1/teams/515",
                season: 2019,
                venue: {
                  id: 2791,
                  name: "John Thurman Field",
                  link: "/api/v1/venues/2791"
                },
                teamCode: "mod",
                fileCode: "t515",
                abbreviation: "MOD",
                teamName: "Nuts",
                locationName: "Modesto",
                firstYearOfPlay: "1946",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 208,
                  name: "California League North",
                  link: "/api/v1/divisions/208"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Modesto",
                parentOrgName: "Seattle Mariners",
                parentOrgId: 136,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 0,
                losses: 2,
                pct: ".000"
              },
              score: 1,
              team: {
                id: 491,
                name: "Lancaster JetHawks",
                link: "/api/v1/teams/491",
                season: 2019,
                venue: {
                  id: 2799,
                  name: "The Hangar",
                  link: "/api/v1/venues/2799"
                },
                teamCode: "lnc",
                fileCode: "t491",
                abbreviation: "LAN",
                teamName: "JetHawks",
                locationName: "Lancaster",
                firstYearOfPlay: "1996",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 209,
                  name: "California League South",
                  link: "/api/v1/divisions/209"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Lancaster",
                parentOrgName: "Colorado Rockies",
                parentOrgId: 115,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 9,
            currentInningOrdinal: "9th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 7,
                ordinalNum: "7th",
                home: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 3,
                  leftOnBase: 1
                }
              },
              {
                num: 8,
                ordinalNum: "8th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 1,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 9,
                ordinalNum: "9th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 1,
                hits: 4,
                errors: 0,
                leftOnBase: 4
              },
              away: {
                runs: 2,
                hits: 4,
                errors: 3,
                leftOnBase: 4
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 0,
            outs: 0
          },
          venue: {
            id: 2799,
            name: "The Hangar",
            link: "/api/v1/venues/2799"
          },
          content: {
            link: "/api/v1/game/576549/content",
            editorial: {},
            media: {
              freeGame: false,
              enhancedGame: false
            },
            highlights: {},
            summary: {},
            gameNotes: {}
          },
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-576549-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 576899,
          link: "/api/v1/game/576899/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-07T02:00:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "I",
            detailedState: "In Progress",
            statusCode: "I",
            abstractGameCode: "L"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 0,
              team: {
                id: 476,
                name: "San Jose Giants",
                link: "/api/v1/teams/476",
                season: 2019,
                venue: {
                  id: 2815,
                  name: "Municipal Stadium",
                  link: "/api/v1/venues/2815"
                },
                teamCode: "sjg",
                fileCode: "t476",
                abbreviation: "SJ",
                teamName: "Giants",
                locationName: "San Jose",
                firstYearOfPlay: "1947",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 208,
                  name: "California League North",
                  link: "/api/v1/divisions/208"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "San Jose",
                parentOrgName: "San Francisco Giants",
                parentOrgId: 137,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 0,
              team: {
                id: 516,
                name: "Visalia Rawhide",
                link: "/api/v1/teams/516",
                season: 2019,
                venue: {
                  id: 2835,
                  name: "Recreation Park",
                  link: "/api/v1/venues/2835"
                },
                teamCode: "vis",
                fileCode: "t516",
                abbreviation: "VIS",
                teamName: "Rawhide",
                locationName: "Visalia",
                firstYearOfPlay: "1946",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 208,
                  name: "California League North",
                  link: "/api/v1/divisions/208"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Visalia",
                parentOrgName: "Arizona Diamondbacks",
                parentOrgId: 109,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 6,
            currentInningOrdinal: "6th",
            inningState: "Middle",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 2
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 1,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 5,
                ordinalNum: "5th",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 6,
                ordinalNum: "6th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 0,
                hits: 1,
                errors: 0,
                leftOnBase: 2
              },
              away: {
                runs: 0,
                hits: 2,
                errors: 0,
                leftOnBase: 3
              }
            },
            defense: {},
            offense: {},
            balls: 2,
            strikes: 3,
            outs: 3
          },
          venue: {
            id: 2835,
            name: "Recreation Park",
            link: "/api/v1/venues/2835"
          },
          content: {
            link: "/api/v1/game/576899/content"
          },
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-576899-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        },
        {
          gamePk: 576829,
          link: "/api/v1/game/576829/feed/live",
          gameType: "R",
          season: "2019",
          gameDate: "2019-04-07T02:10:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "I",
            detailedState: "In Progress",
            statusCode: "I",
            abstractGameCode: "L"
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 0,
              team: {
                id: 526,
                name: "Rancho Cucamonga Quakes",
                link: "/api/v1/teams/526",
                season: 2019,
                venue: {
                  id: 2854,
                  name: "LoanMart Field",
                  link: "/api/v1/venues/2854"
                },
                teamCode: "rcq",
                fileCode: "t526",
                abbreviation: "RC",
                teamName: "Quakes",
                locationName: "Rancho Cucamonga",
                firstYearOfPlay: "1966",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 209,
                  name: "California League South",
                  link: "/api/v1/divisions/209"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Rancho Cucamonga",
                parentOrgName: "Los Angeles Dodgers",
                parentOrgId: 119,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            },
            home: {
              leagueRecord: {
                wins: 1,
                losses: 1,
                pct: ".500"
              },
              score: 2,
              team: {
                id: 524,
                name: "Stockton Ports",
                link: "/api/v1/teams/524",
                season: 2019,
                venue: {
                  id: 2731,
                  name: "Banner Island Ballpark",
                  link: "/api/v1/venues/2731"
                },
                teamCode: "sto",
                fileCode: "t524",
                abbreviation: "STK",
                teamName: "Ports",
                locationName: "Stockton",
                firstYearOfPlay: "1946",
                league: {
                  id: 110,
                  name: "California League",
                  link: "/api/v1/league/110"
                },
                division: {
                  id: 208,
                  name: "California League North",
                  link: "/api/v1/divisions/208"
                },
                sport: {
                  id: 13,
                  link: "/api/v1/sports/13",
                  name: "Class A Advanced"
                },
                shortName: "Stockton",
                parentOrgName: "Oakland Athletics",
                parentOrgId: 133,
                allStarStatus: "N",
                active: true
              },
              splitSquad: false,
              seriesNumber: 1
            }
          },
          linescore: {
            currentInning: 4,
            currentInningOrdinal: "4th",
            inningState: "Top",
            inningHalf: "Top",
            isTopInning: true,
            scheduledInnings: 9,
            innings: [
              {
                num: 1,
                ordinalNum: "1st",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 2
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              },
              {
                num: 2,
                ordinalNum: "2nd",
                home: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 1,
                  leftOnBase: 0
                }
              },
              {
                num: 3,
                ordinalNum: "3rd",
                home: {
                  runs: 1,
                  hits: 2,
                  errors: 0,
                  leftOnBase: 1
                },
                away: {
                  runs: 0,
                  hits: 0,
                  errors: 0,
                  leftOnBase: 1
                }
              },
              {
                num: 4,
                ordinalNum: "4th",
                home: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                },
                away: {
                  hits: 0,
                  errors: 0,
                  leftOnBase: 0
                }
              }
            ],
            teams: {
              home: {
                runs: 2,
                hits: 4,
                errors: 0,
                leftOnBase: 4
              },
              away: {
                runs: 0,
                hits: 0,
                errors: 1,
                leftOnBase: 1
              }
            },
            defense: {},
            offense: {},
            balls: 0,
            strikes: 2,
            outs: 1
          },
          venue: {
            id: 2731,
            name: "Banner Island Ballpark",
            link: "/api/v1/venues/2731"
          },
          content: {
            link: "/api/v1/game/576829/content"
          },
          gameNumber: 1,
          publicFacing: true,
          doubleHeader: "N",
          gamedayType: "Y",
          tiebreaker: "N",
          calendarEventID: "44-576829-2019-04-06",
          seasonDisplay: "2019",
          dayNight: "night",
          scheduledInnings: 9,
          gamesInSeries: 4,
          seriesGameNumber: 3,
          seriesDescription: "Regular Season",
          review: {
            hasChallenges: true,
            away: {
              used: 0,
              remaining: 1
            },
            home: {
              used: 0,
              remaining: 1
            }
          },
          flags: {
            noHitter: false,
            perfectGame: false
          },
          recordSource: "S",
          ifNecessary: "N",
          ifNecessaryDescription: "Normal Game"
        }
      ],
      events: []
    }
  ]
};

export const getSampleData = () => sampleData;
export const getSampleFeed = () => sampleData;
export const getSampleGames = () => sampleData.dates[0].games;
export const getSampleGame = () => sampleData.dates[0].games[0];

export default getSampleData;
