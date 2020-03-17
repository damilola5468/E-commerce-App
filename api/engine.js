const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
const jwt = require("jsonwebtoken");
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 9000;
const { Pool } = require("pg");
const mysqlConnection = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

// var mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "agro"
// });

mysqlConnection.connect(err => {
  app.listen(PORT, () => {
    console.log("App listening on port!");
  });
  if (!err) {
    console.log("Db Connection created!");
  } else {
    console.log("Db Connection Failed: !");
  }
});

app.post("/c/products", (req, res) => {
  var sql = "SELECT * FROM Products";
  mysqlConnection.query(sql, (err, result) => {
    console.log(err);
    let products = [],
      id = null;
    let cart = JSON.parse(req.body.cart);
    if (!cart) return res.json(products);
    for (var i = 0; i < result.length; i++) {
      id = result[i].id.toString();
      if (cart.hasOwnProperty(id)) {
        result[i].qty = cart[id];
        products.push(result[i]);
      }
    }
    return res.json(products);
  });
  mysqlConnection.end();
});

app.post("/api/auth", (req, res) => {
  var sql = "SELECT * FROM custormers";
  mysqlConnection.query(sql, (err, result) => {
    console.log(err);
    let user = result.filter(user => {
      return (
        user.email === req.body.email && user.password === req.body.password
      );
    });
    if (user.length) {
      let token_payload = {
        email: user[0].email,
        password: user[0].password
      };
      let token = jwt.sign(token_payload, "jwt_secret_password", {
        expiresIn: "2h"
      });
      let response = {
        message: "Token Created, Authentication Successful!",
        token: token
      };

      return res.status(200).json(response);
    } else {
      return res.status("409").json("Authentication failed. User not found.");
    }
  });
  mysqlConnection.end();
});

app.get("/Products", function(req, res) {
  var sql = "SELECT * FROM Products";
  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  mysqlConnection.end();
});

app.post("/Products", function(req, res) {
  var sql = "SELECT * FROM Products";
  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  mysqlConnection.end();
});

app.get("/product/:name", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products WHERE name LIKE '%" + [req.params.name] + "%'",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  mysqlConnection.end();
});

app.get("/pro/:id", (req, res) => {
  mysqlConnection.query(
    "Delete FROM Products WHERE id =" + req.params.id + "",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  mysqlConnection.end();
});

app.get("/custom", (req, res) => {
  mysqlConnection.query("SELECT * FROM custormers", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
  mysqlConnection.end();
});

app.get("/catepro/:category", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products WHERE category = ?",
    [req.params.category],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  mysqlConnection.end();
});

app.post("/category", function(req, res) {
  var sql = "SELECT * FROM category";
  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  mysqlConnection.end();
});

app.get("/product/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
  mysqlConnection.end();
});

// app.delete("/product/:id", (req, res) => {
//   mysqlConnection.query(
//     "DELETE FROM product WHERE id = ?",
//     [req.params.id],
//     (err, rows, fields) => {
//       if (!err) res.send(" Patients Data Deleted successfully.");
//       else console.log(err);
//     }
//   );
// });

// app.post("/check", (req, res) => {
//   var sql =
//     "SELECT * FROM custormers where email =" +
//     req.email +
//     " and phone =" +
//     req.phone +
//     "";
//   mysqlConnection.query(sql, (err, rows, fields) => {
//     if (rows)
//       return res.status("405").json("User with email and phone already exist.");
//     console.log(err, req.email);
//   });
// });

app.post("/check", (req, res) => {
  let post = req.body;
  var sql =
    "SELECT count(*) as total FROM custormers where email='" +
    post.email +
    "'and phone ='" +
    post.phone +
    "'";

  mysqlConnection.query(sql, (err, result, fields) => {
    // console.log(result[0].total);
    if (result[0].total === 1) {
      return res.json("Signup Failed Email or Phone Already Exist!!");
    } else {
      let post = req.body;
      var sql =
        "INSERT INTO custormers (firstname, lastname, email, phone, password, address) VALUES (?,?,?,?,?,?)";
      mysqlConnection.query(
        sql,
        [
          post.firstname,
          post.lastname,
          post.email,
          post.phone,
          post.password,
          post.address
        ],
        (err, rows, fields) => {
          if (!err) console.log("User Data Inserted");

          console.log(err);
        }
      );
      return res.json("Signup Successful!!!");
    }
  });
  mysqlConnection.end();
});
