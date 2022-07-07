const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Swimming",
    movies: [
      {
        title: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        dailyRentalRate: "19.00",
      },
      {
        title: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        dailyRentalRate: "19.00",
      },
      {
        title: "Valby 13/8 kl. 19.00",
        spotsOpen: "13 / 8",
        dailyRentalRate: "19.00",
      },
    ],
  },
  {
    name: "Running",
    movies: [
      {
        title: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        dailyRentalRate: "18.00",
      },
      {
        title: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        dailyRentalRate: "18.00",
      },
      {
        title: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        dailyRentalRate: "18.00",
      },
      {
        title: "Parken 14/8 kl. 19.30",
        spotsOpen: "13 / 9",
        dailyRentalRate: "18.00",
      },
    ],
  },
  {
    name: "Cycling",
    movies: [
      {
        title: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        dailyRentalRate: "17.30",
      },
      {
        title: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        dailyRentalRate: "17.30",
      },
      {
        title: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        dailyRentalRate: "17.30",
      },
      {
        title: "Mosehuset 15/8 kl. 18.30",
        spotsOpen: "14 / 10",
        dailyRentalRate: "17.30",
      },
    ],
  },
  {
    name: "Events",
    movies: [
      {
        title: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        dailyRentalRate: "18.30",
      },
      {
        title: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        dailyRentalRate: "18.30",
      },
      {
        title: "Party 16/8 kl. 18.00",
        spotsOpen: "15 / 10",
        dailyRentalRate: "18.30",
      },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map((movie) => ({
      ...movie,
      genre: { _id: genreId, name: genre.name },
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
