const { Disciplines } = require("./models/disciplineModel");
const { Practices } = require("./models/movieModel");
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

  await Practices.deleteMany({});
  await Disciplines.deleteMany({});

  for (let discipline of data) {
    const { _id: disciplinId } = await new Disciplines({
      name: discipline.name,
    }).save();
    const movies = discipline.movies.map((movie) => ({
      ...movie,
      discipline: { _id: disciplinId, name: discipline.name },
    }));
    await Practices.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
