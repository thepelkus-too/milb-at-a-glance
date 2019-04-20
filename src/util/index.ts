export type Feed = {
  copyright: string;
  dates: DateData[];
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  totalItems: number;
};

export type DateData = {
  date: string;
  events: any[];
  games: Game[];
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  totalItems: number;
};

export type Game = {
  calendarEventID: string;
  content: object;
  dayNight: string;
  doubleHeader: string;
  flags: object;
  gameDate: string;
  gameNumber: number;
  gamePk: number;
  gameType: string;
  gamedayType: string;
  gamesInSeries: number;
  ifNecessary: string;
  ifNecessaryDescription: string;
  isTie?: boolean;
  linescore: LineScore;
  link: string;
  publicFacing: boolean;
  recordSource: string;
  review: object;
  scheduledInnings: number;
  season: string;
  seasonDisplay: string;
  seriesDescription: string;
  seriesGameNumber: number;
  status: Status;
  teams: GameTeams;
  tiebreaker: string;
  venue: object;
};

export type Status = {
  statusCode: string;
  detailedState: string;
  reason: string;
};

export type LineScore = {
  inningState: string;
  currentInning: number;
  balls: number;
  strikes: number;
  outs: number;
  offense: Runners;
};

export enum Base {
  first = "first",
  second = "second",
  third = "third"
}

type Bases = keyof typeof Base;

export type Runners = { [base in Bases]: RunnerInfo };

export type RunnerInfo = {
  fullName: string;
  id: number;
  link: string;
};

export type GameTeams = {
  home: GameTeam;
  away: GameTeam;
};

export type GameTeam = {
  isWinner?: boolean;
  leagueRecord: object;
  score: number;
  seriesNumber: number;
  splitSquad: boolean;
  team: Team;
};

export type Team = {
  abbreviation: string;
  active: boolean;
  allStarStatus: string;
  division: object;
  fileCode: string;
  firstYearOfPlay: string;
  id: number;
  league: object;
  link: string;
  locationName: string;
  name: string;
  parentOrgId: number;
  parentOrgName: string;
  season: number;
  shortName: string;
  sport: object;
  teamCode: string;
  teamName: string;
  venue: object;
};

export enum SportId {
  AAA = 11,
  AA = 12,
  HIGHA = 13,
  LOWA = 14
}

export enum MLBTeam {
  SEA = "Seattle Mariners"
}

export const feedUrl = (sportId: SportId, date: string) =>
  `https://statsapi.mlb.com/api/v1/schedule?language=en&sportId=${sportId}&date=${date}&sortBy=gameDate&hydrate=game(content(summary)),linescore(runners),flags,team,review`;

export const gamesFromFeed = (feed: Feed): Game[] => {
  // console.log(feed);

  return feed.dates[0].games;
};

export const homeTeam = (game: Game): Team => game.teams.home.team;
export const awayTeam = (game: Game): Team => game.teams.away.team;

export const gameByTeamAbbreviationFromGames = (
  games: Game[],
  team: string
): Game | undefined =>
  games.find(
    game =>
      homeTeam(game).abbreviation === team ||
      awayTeam(game).abbreviation === team
  );

export const gamesByParentOrg = (games: Game[], parentOrg: MLBTeam): Game[] =>
  games.filter(
    game =>
      homeTeam(game).parentOrgName === parentOrg ||
      awayTeam(game).parentOrgName === parentOrg
  );

// TODO: Stub date for all tests? (Component rendering is getting real dates right now)
export const today = () => {
  const dateNow = Date.now();
  const fullDate = new Date(dateNow);

  const monthNum = fullDate.getMonth() + 1;
  const dateNum = fullDate.getDate();
  const yearNum = fullDate.getFullYear();

  const [month, day, year] = [monthNum, dateNum, yearNum].map(field =>
    field.toString().padStart(2, "0")
  );
  return `${month}/${day}/${year}`;
};
