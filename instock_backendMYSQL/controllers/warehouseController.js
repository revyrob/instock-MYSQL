const knex = require("knex")(require("../knexfile"));
const { u4: uuidv4 } = require("uuid");

/**
 *
 * GET ALL WAREHOUSES ITEMS
 */
const findAll = (_req, res) => {
  knex("warehouses")
    .then((data) => {
      //console.log("here are the warehouses");
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

/**
 *
 * GET 1 WAREHOUSE BY ID
 *
 */
const findOne = (req, res) => {
  //warehouse is the primary key we are using to query with
  knex("warehouses", "inventories")
    .where({ id: req.params.id })
    //also need to pull the inventory that matches with the warehouse
    //join the tables
    .then(function () {
      return (
        knex("warehouses")
          .join("inventories", "warehouses.id", "inventories.warehouse_id")
          //how do I select and create an array with the inventory items that match the
          //warehouse.id
          //then I want to be able to call the array I create and map through the information
          .select(
            "warehouses.name as name",
            "inventories.item_name as inventory"
          )
      );
    })

    .catch((err) => {
      res.status(400).send(`Error restrieving warehouse ${err}`);
    });
};

/**
 *
 * ADD A WAREHOUSE
 *
 */
const add = async (req, res) => {
  console.log(req.params);
  if (
    !req.body.warehouse ||
    !req.body.address ||
    !req.body.city ||
    !req.body.contact_name ||
    !req.body.contact_position ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    return res
      .status(400)
      .send("Please provide name, position, and email in the request");
  }

  const newWarehouseId = uuidv4();
  knex("warehouses")
    .insert({ ...req.body, id: newWarehouseId })
    .then((_data) => {
      knex("warehouses")
        .where({ id: newWarehouseId })
        .then((data) => {
          res.status(200).json(data[0]);
        });
    })
    .catch((err) => res.status(400).send(`Error creating warehouse: ${err}`));
};

/**
 *
 * Edit A WAREHOUSE
 *
 */
const edit = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.contact_name ||
    !req.body.contact_position ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    return res
      .status(400)
      .send("Please provide name, position, and email in the request");
  }

  const newWarehouseId = uuidv4();
  knex("warehouses")
    .where({ id: req.params.id })
    .update({ ...req.body, id: newWarehouseId })
    .then((data) => {
      res.status(200).send(`${req.params.id} deleted`).json(data[0]);
    })
    .catch((err) => res.status(400).send(`Error creating warehouse: ${err}`));
};

/**
 *
 * GET 1 WAREHOUSE BY ID and delete it
 *
 */
const erase = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .del()

    .then((data) => {
      res.status(200).send(`${req.params.id} deleted`).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error restrieving warehouse ${err}`);
    });
};

module.exports = {
  findAll,
  findOne,
  add,
  edit,
  erase,
};
