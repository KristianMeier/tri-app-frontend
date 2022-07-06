const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Swimming",
    movies: [
      { title: "Valby", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Valby", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Valby", numberInStock: 15, dailyRentalRate: 2 },
      { title: "Valby", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Valby", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Valby", numberInStock: 15, dailyRentalRate: 2 },
    ],
  },
  {
    name: "Running",
    movies: [
      { title: "Parken", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Parken", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Parken", numberInStock: 15, dailyRentalRate: 2 },
      { title: "Parken", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Parken", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Parken", numberInStock: 15, dailyRentalRate: 2 },
    ],
  },
  {
    name: "Cycling",
    movies: [
      { title: "Mosehuset", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Mosehuset", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Mosehuset", numberInStock: 15, dailyRentalRate: 2 },
      { title: "Mosehuset", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Mosehuset", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Mosehuset", numberInStock: 15, dailyRentalRate: 2 },
    ],
  },
  {
    name: "Events",
    movies: [
      { title: "Party", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Party", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Party", numberInStock: 15, dailyRentalRate: 2 },
      { title: "Party", numberInStock: 5, dailyRentalRate: 2 },
      { title: "Party", numberInStock: 10, dailyRentalRate: 2 },
      { title: "Party", numberInStock: 15, dailyRentalRate: 2 },
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
