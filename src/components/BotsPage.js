import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [getBots, setGetBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collection, setCollection] = useState(false);

  function fetchData() {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((result) => setGetBots(result))
  }

  useEffect(() => {
    fetchData();
  }, [collection]);

  function addBotsToContainer(bot) {
    const botsInContainer = botArmy.find((army) => army.id === bot.id)
    if (!botsInContainer) setBotArmy([...botArmy, bot])
  }

  function removeBotArmy(bot){
    const botsInContainer = botArmy.find((army) => army.id === bot.id)
    if(botsInContainer){
      const removeBot = botArmy.filter((army) => army.id !== bot.id)
      setBotArmy(removeBot)
    }
  }
  //Handle Delete
  function handleDelete(bot) {
  fetch(`http://localhost:8002/bots/${bot.id}`, {
    method: "DELETE",
  })
  setCollection(true)
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} removeBotArmy={removeBotArmy} />
      <BotCollection getBots={getBots} handleDelete={handleDelete} addBotsToContainer={addBotsToContainer} />
    </div>
  )
}

export default BotsPage;
