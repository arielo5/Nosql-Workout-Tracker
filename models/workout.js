const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutShema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        require: true,
      },
      name: {
        type: String,
        trim: true,
        require: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
