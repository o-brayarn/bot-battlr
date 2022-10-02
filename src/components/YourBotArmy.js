import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, removeBotArmy }) {
  //your bot army code here...
 const newBotArmy = botArmy.map((bot) => {
  return <BotCard key={bot} bot={bot} handleClick={removeBotArmy}/>
 })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {newBotArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
