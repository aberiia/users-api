const { getUsers, deleteUser, createUser, editUserData } = require("./controllers");
const express = require("express");
var cors = require("cors");

const { PORT } = require("./config/config");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    let users = await getUsers();
    res.status(200).send(users);
  } catch(error) {
    res.status(500).send(error);
  }
});
app.delete(`/:userId`, async (req, res) =>{
	const { userId } = req.params;
  try {
    let deletedUser = await deleteUser(userId);
    res.send(deletedUser);
  } catch (error) {
    res.send(error.message);
  }
});
app.post('/userId=:userId&firstname=:firstname&lastname=:lastname', async(req,res)=> {
	const {userId, firstname, lastname} = req.params;
	console.log('userId', userId, 'firstname', firstname, 'lastname', lastname);
	try{
		let res = await editUserData(userId, firstname,lastname);
		console.log('UPDATED USER DATA', userId);
		res.send(res);
	} catch(error){
		res.send(error.message);
	}
})
app.post('/id=:id&firstname=:firstname&lastname=:lastname&birthDate=:birthDate&email=:email', async(req,res) => {
	const {id, firstname, lastname,birthDate, email} = req.params;
	try {
		let res = await createUser(id, firstname, lastname,birthDate, email);
		console.log('CREATED USER',id);
		res.send(res);
	}catch(error) {
		res.send(error.message);
	}
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
