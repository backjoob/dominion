import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Score = ({ score, socket }) =>
  score ? (
    <div className="gameScoreContainer">
      <div className="gameScoreModal">
        <div className="gameScoreModalHeader">The final score is:</div>
        <div className="gameScoreModalScores">
          {score.map((s, index) => (
            <div className="gameScoreModalScore" key={index}>
              <div>{s.username}</div>
              <div>
                <div>{s.finalScore}</div>
                {s.provinceCount ? (
                  <div>{`${s.provinceCount} Provinces`}</div>
                ) : null}
                {s.duchyCount ? <div>{`${s.duchyCount} Duchies`}</div> : null}
                {s.estateCount ? <div>{`${s.estateCount} Estates`}</div> : null}
                {s.gardensCount ? (
                  <div>{`${s.gardensCount} Gardens (${s.cardCount} cards)`}</div>
                ) : null}
                {s.noblesCount ? <div>{`${s.noblesCount} Nobles`}</div> : null}
                {s.curseCount ? <div>{`${s.curseCount} Curses`}</div> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="gameScoreModalButtons">
          <button
            className="gameScoreModalButton"
            onClick={() =>
              socket.send(
                JSON.stringify({
                  type: "UPDATE_STATUS",
                  status: "NOT_IN_PROGRESS"
                })
              )
            }
          >
            Play Again
          </button>
          <button
            className="gameScoreModalButton"
            onClick={() => location.reload()}
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  ) : null;

Score.propTypes = {
  score: PropTypes.arrayOf(PropTypes.object),
  socket: PropTypes.object
};

export default Score;
