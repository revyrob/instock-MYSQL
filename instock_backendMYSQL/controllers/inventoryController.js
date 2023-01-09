const knex = require("knex")(require("../knexfile"));

/**
 *
 * GET ALL Inventory ITEMS
 */
const findAllInv = (_req, res) => {
  knex("inventories")
    .then((data) => {
      console.log("here are the inventory");
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Inventory: ${err}`));
};

/**
 *
 * GET 1 WAREHOUSE BY ID
 *
 */
const findOneInv = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        res
          .status(404)
          .send(`Error retrieving warehouse with ID: ${req.params.id}`);
      }
      //knex returns matched rows inside of an array
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error restrieving educator ${err}`);
    });
};

module.exports = {
  findAllInv,
  findOneInv,
};
