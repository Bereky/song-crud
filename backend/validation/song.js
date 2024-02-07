const Joi = require("joi");

const validateSong = (song) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    album: Joi.string().required(),
    genre: Joi.string().required(),
  });

  return schema.validate(song, { presence: "required" });
};

const validateSongUpdate = (song) => {
  const schema = Joi.object({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    artist: Joi.string().required(),
    album: Joi.string().required(),
    genre: Joi.string().required(),
  });

  return schema.validate(song, { presence: "required" });
};

const validateSongID = (song) => {
  const schema = Joi.object({
    _id: Joi.string().required(),
  });

  return schema.validate(song, { presence: "required" });
};

module.exports = {
  validateSong,
  validateSongUpdate,
  validateSongID,
};
