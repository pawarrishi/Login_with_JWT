const pool = require("../config/db");

const getData = async (req, res) => {
 
  try {
    const query = "select * from login_data";
    console.log("Executing query:", query);
    pool.execute(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log(result);
        res.json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getData };
