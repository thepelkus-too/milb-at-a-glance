import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  gamesFromFeed,
  Game,
  Feed,
  SportId,
  feedUrl,
  gamesByParentOrg,
  MLBTeam,
  today
} from "./util";

const timeForGame = (g: Game): string => {
  const gameDate = new Date(g.gameDate);
  const gameHourRaw = gameDate.getHours();
  const gameHour = gameHourRaw > 12 ? gameHourRaw - 12 : gameHourRaw;
  const gameAMPM = gameHourRaw > 11 ? "PM" : "AM";
  return `${gameHour}:${gameDate
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${gameAMPM}`;
};

const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const getMilbData = async () => {
      const idsAtoAAA = Object.keys(SportId)
        .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
        .map(k => Number(k))
        .filter(num => num > 0);

      const requestList = idsAtoAAA.map(id =>
        fetch(feedUrl(id, today())).then(response => response.json())
      );

      const results = await Promise.all(requestList);
      const result = results.map(feed => gamesFromFeed(feed as Feed)).flat();

      const filtered = gamesByParentOrg(result, MLBTeam.SEA);

      setGames(filtered);
    };

    getMilbData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Pay the minor leaguers</header>

      <div id="gamesContainer">
        {games.map(g => {
          const home = { ...g.teams.home, ...g.teams.home.team };
          const away = { ...g.teams.away, ...g.teams.away.team };

          const lineScore = g.linescore || {
            inningState: "-",
            currentInning: "-"
          };

          const statusMap: { [index: string]: () => string } = {
            P: () => `Pre-game (${timeForGame(g)} start)`,
            PW: () => `Warmup (${timeForGame(g)} start)`,
            F: () => "Final",
            S: () => `${timeForGame(g)} start`,
            I: () => `${lineScore.inningState} ${lineScore.currentInning}`
          };
          const defaultDisplay = () => "???";
          const inningDisplayStrategy =
            statusMap[g.status.statusCode] || defaultDisplay;

          return (
            <div key={g.gamePk} className="game">
              <div className="away">
                {away.abbreviation.toUpperCase()} {away.score}
              </div>
              <div className="home">
                {home.abbreviation.toUpperCase()} {home.score}
              </div>
              <div className="inning">{inningDisplayStrategy()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
