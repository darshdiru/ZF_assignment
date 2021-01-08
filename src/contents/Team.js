import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removePlayer } from "../redux/playerActions";

function Team(props) {
  const [myteam, setMyTeam] = useState([]);

  useEffect(() => {
    setMyTeam(props.team);
  }, [myteam]);
  let maxPoints = 75;

  const totalPoints = myteam.reduce((sum, item) => {
    return (sum = sum + parseInt(item.points));
  }, 0);

  const countType = (role) => {
    const countTypes = myteam.filter((t) => t.role === role);
    return countTypes.length;
  };

  const handleRemove = (player) => {
    props.remove(player.id);
    setMyTeam([]);
  };

  const renderTeam = () => {
    return myteam.map((m) => (
      <div key={m.id}>
        <h4>{m.name}</h4>
        <button key={m.id} onClick={() => handleRemove(m)}>
          Remove Player
        </button>
      </div>
    ));
  };

  if (
    countType("All-Rounder") <= 2 &&
    countType("Bowler") <= 2 &&
    countType("Batsman") <= 3
  ) {
    renderTeam();
  } else {
    alert("team should not exceed 3 Batsman, 2 Bowler and 2 Allrounder");
    return null;
  }

  if (myteam.length <= 7) {
    renderTeam();
  } else {
    alert("you cannot add more than 7 players to the team");
    return null;
  }

  if (totalPoints <= maxPoints) {
    return renderTeam();
  } else {
    alert("maximum points for team is 75 and has been exceeded");
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.team,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removePlayer(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Team);
