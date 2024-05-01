let express = require("express");
let connection = require("./db1");

let cors = require("cors");
let app = express();
app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));

app.use(express.json());
mongoose.connect('mongodb+srv://falgunipawar47:xbBlDjexI2BJHcv6@mern8am.jbvvz5z.mongodb.net/?retryWrites=true&w=majority&appName=mern8am')

app.get("/studentmysql/:id", (req, res) => {
  connection.query("select * from student", (err, data) => {
    if (err) {
      res.send("no data found");
    } else {
      res.send(data);
    }
  });
});

app.post("/studentmysql/:id", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let phone = req.body.phone;
  let salary = req.body.salary;
  let address = req.body.address;
  let experience = req.body.experience;
  let designation = req.body.designation;
  let leaves = req.body.designation;
  let gender = req.body.male;
  let education = req.body.education;
  let joining_date = req.body.joining_date;
  let birth = req.body.birth;

  connection.query(
    `insert into student{id,name,phone,salary,address,experience,designation,leaves,gender,education,joining_date,birth} values ("${id}","${name}","${phone}","${salary}","${address}",,"${experience}","${designation},"${leaves},"${gender},"${education}},"${joining_date}},"${birth}")`,
    (err, data) => {
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      };
    }
  );
});

app.delete("/studentmysql/:id", (req, res) => {
  let id = req.params.id;
  connection.query(`delete into student where id=${id}`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(4000);
