const mongoose = require("mongoose");

const articleDetailsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("articleDetail", articleDetailsSchema);
