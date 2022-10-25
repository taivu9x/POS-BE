const data = [
  {
    name: "Small Pizza",
    size: "SMALL",
    price: 11.99,
    description: "10' pizza for one person",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  },
  {
    name: "Medium Pizza",
    size: "MEDIUM",
    price: 15.99,
    description: "12' pizza for two persons",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  },
  {
    name: "Large Pizza",
    size: "LARGE",
    price: 21.99,
    description: "15' pizza for four persons",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  },
];
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection("products").insertMany(data);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection("products").deleteMany();
  },
};
