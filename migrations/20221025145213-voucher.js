const data = [
  {
    name: "Microsoft",
    type: "DEAL",
    size: "SMALL",
    deal: {
      from: 3,
      to: 2,
    },
  },
  {
    name: "Amazon",
    type: "DISCOUNT",
    size: "LARGE",
    discount: 19.99,
  },
  {
    name: "Facebook",
    type: "DEAL",
    size: "MEDIUM",
    deal: {
      from: 5,
      to: 4,
    },
  },
];
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection("vouchers").insertMany(data);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection("vouchers").deleteMany();
  },
};
