import Game from '../models/gameModel.js';

export const createGame = async (req, res) => {
  const { stepnumber, history, xIsNext, isCompleted, player, createdBy } =
    req.body;

  const game = await Game.create({
    stepnumber,
    history,
    xIsNext,
    isCompleted,
    player,
    createdBy,
  });

  if (game) {
    res.status(201).json({
      _id: game._id,
      stepnumber: game.stepnumber,
      history: game.history,
      xIsNext: game.xIsNext,
      isCompleted: game.isCompleted,
      player: game.player,
      createdBy: game.createdBy,
    });
  } else {
    res.status(404);
    res.send('Error creating game');
  }
};

export const getGamesByEmail = async (req, res) => {
  const { email } = req.body;
  const games = await Game.find({
    $or: [{ createdBy: email }, { player: email }],
  });

  res.json(games);
};

export const updateGameByID = async (req, res) => {
  const { id } = req.params;
  const {
    stepnumber,
    history,
    xIsNext,
    winner,
    isCompleted,
    player,
    createdBy,
  } = req.body;

  const game = await Game.findById(id);

  if (game) {
    game.stepnumber = stepnumber;
    game.history = history;
    game.xIsNext = xIsNext;
    game.winner = winner;
    game.isCompleted = isCompleted;
    game.player = player;
    game.createdBy = createdBy;

    const updatedGame = await game.save();

    res.json(updatedGame);
  } else {
    res.status(404);
    res.send('Game not found');
  }
};
