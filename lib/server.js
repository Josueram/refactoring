const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorersMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
  const mission = request.params.mission;
  const quantity = ExplorerController.getExplorersAmonutByMission(mission);
  response.json({mission, quantity});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
  const mission = request.params.mission;
  const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
  response.json({mission, usernames});
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});