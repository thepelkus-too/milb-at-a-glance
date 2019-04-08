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
  MLBTeam
} from "./util";

const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const getMilbData = async () => {
      const ids = Object.keys(SportId)
        .map(k => Number(k))
        .filter(num => num > 0);

      const requestList = ids.map(id =>
        fetch(feedUrl(id, "04/07/2019")).then(response => response.json())
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

      <div>
        {games.map(g => {
          const home = { ...g.teams.home, ...g.teams.home.team };
          const away = { ...g.teams.away, ...g.teams.away.team };

          const gameIsOver = g.status.statusCode === "F";
          const lineScore = g.linescore || {
            inningState: "-",
            currentInning: "-"
          };

          const inningDisplay = gameIsOver
            ? "Final"
            : `${lineScore.inningState} ${lineScore.currentInning}`;

          return (
            <div>
              {away.name} {away.score} / {home.name} {home.score} ::{" "}
              {inningDisplay}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
