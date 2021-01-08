import React, { useEffect } from "react";
import { fetchPlayers, addPlayer } from "../redux/playerActions";
import { connect } from "react-redux";

function PlayerList(props) {
  useEffect(() => {
    props.fetch();
  }, []);

  const handleClick = (player) => {
    props.addPlayer(player);
  };

  return (
    <div>
      {props.list.map((p) => (
        <div key={p.id}>
          <div>
            <h3>{p.name}</h3>
            <p>{p.role}</p>
            <p>{p.points}</p>
          </div>
          <button key={p.id} onClick={() => handleClick(p)}>
            Add Player
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchPlayers()),
    addPlayer: (player) => dispatch(addPlayer(player)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
