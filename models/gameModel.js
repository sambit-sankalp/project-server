import mongoose from 'mongoose';
import User from './userModel.js';

const gameSchema = mongoose.Schema(
  {
    stepnumber: {
      type: Number,
      required: true,
      default: 0,
    },
    history: {
      type: [[String]],
      required: true,
      default: [[null, null, null, null, null, null, null, null, null]],
    },
    xIsNext: {
      type: Boolean,
      required: true,
      default: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    winner: {
      type: String,
      required: false,
      default: '',
    },
    player: {
      type: User.schema,
      required: true,
    },
    createdBy: {
      type: User.schema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  { collection: 'games' }
);

const Game = mongoose.model('Game', gameSchema);

export default Game;
