import {
  gamesFromFeed,
  gameByTeamAbbreviationFromGames,
  SportId,
  feedUrl,
  gamesByParentOrg,
  MLBTeam
} from "./index";
import getSampleData, {
  getSampleGames
} from "../../__tests__/fixtures/feedData";

describe("gamesFromFeed", () => {
  it("returns an array of games from the feed", () => {
    const feedData = getSampleData();

    const result = gamesFromFeed(feedData);

    expect(result.length).toBe(18);
  });
});

describe("gameByTeamAbbreviationFromGames", () => {
  it("returns a game where the named team was at home", () => {
    const team = "VIS";
    const games = getSampleGames();

    const result = gameByTeamAbbreviationFromGames(games, team);

    if (!result) throw "No result";
    expect(result.teams.home.team.id).toBe(516);
  });

  it("returns a game where the named team was away", () => {
    const team = "MOD";
    const games = getSampleGames();

    const result = gameByTeamAbbreviationFromGames(games, team);

    if (!result) throw "No result";
    expect(result.teams.away.team.id).toBe(515);
  });
});

describe("gamesByParentOrg", () => {
  it("returns a list of games with teams with a matching parent org", () => {
    const games = getSampleGames();
    const result = gamesByParentOrg(games, MLBTeam.SEA);

    if (!result) throw "No result";
    expect(result[0].teams.away.team.id).toBe(515);
  });
});

describe("feedUrl", () => {
  it("returns a url containing the correct sport id and date string", () => {
    const url = feedUrl(SportId.AAA, "04/01/2019");

    expect(url).toBe(
      "https://statsapi.mlb.com/api/v1/schedule?language=en&sportId=11&date=04/01/2019&sortBy=gameDate&hydrate=game(content(summary)),linescore(runners),flags,team,review"
    );
  });
});
