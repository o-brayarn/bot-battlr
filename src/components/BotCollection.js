import React from "react";
import BotCard from "./BotCard";

function BotCollection({ getBots, handleDelete, addBotsToContainer }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {getBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={addBotsToContainer} handleDelete={handleDelete}  />
        ))}
        {/*...and here..*/}
        {/* Collection of all bots */}
      </div>
    </div>
  );
}

export default BotCollection;
