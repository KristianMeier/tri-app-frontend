const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Swimming",
    movies: [
      {
        practices: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        hasSigned: "19.00",
      },
      {
        practices: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        hasSigned: "19.00",
      },
      {
        practices: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        hasSigned: "19.00",
      },
    ],
  },
  {
    name: "Running",
    movies: [
      {
        practices: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        hasSigned: "18.00",
      },
      {
        practices: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        hasSigned: "18.00",
      },
      {
        practices: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        hasSigned: "18.00",
      },
      {
        practices: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        hasSigned: "18.00",
      },
    ],
  },
  {
    name: "Cycling",
    movies: [
      {
        practices: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        hasSigned: "17.30",
      },
      {
        practices: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        hasSigned: "17.30",
      },
      {
        practices: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        hasSigned: "17.30",
      },
      {
        practices: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        hasSigned: "17.30",
      },
    ],
  },
  {
    name: "Events",
    movies: [
      {
        practices: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        hasSigned: "18.30",
      },
      {
        practices: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        hasSigned: "18.30",
      },
      {
        practices: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        hasSigned: "18.30",
      },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: disciplinId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map((movie) => ({
      ...movie,
      genre: { _id: disciplinId, name: genre.name },
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
