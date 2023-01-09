const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const warehouseRoute = require("./routes/api.warehouse");
const inventoryRoute = require("./routes/api.inventory");

// all warehouses routes
app.use(cors());
app.use("/warehouse", warehouseRoute);
app.use("/inventory", inventoryRoute);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_request, response) => {
  response.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
