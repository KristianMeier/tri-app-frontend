const { Practices, Disciplines } = require("./models/apiModel");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Swimming",
    practices: [
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
    practices: [
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
    practices: [
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
    practices: [
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
    const practices = discipline.practices.map((practice) => ({
      ...practice,
      discipline: { _id: disciplinId, name: discipline.name },
    }));
    await Practices.insertMany(practices);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
