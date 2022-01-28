# Playground API

First steps:
- ```npm install```
- create ```.env``` file at the root of your app
- add ```PATH_TO_DB = "*absolute path to database .sql file"
ABSOLUTE_PATH_TO_IMAGES_FOLDER = "*absolute path to img folder*"``` 
variables at your .env file
- ```npm start```

## Actions

- [Playground API](#playground-api)
  - [Actions](#actions)
    - [GET /api/users](#get-apiusers)
    - [GET /api/users=:query](#get-apiusersquery)
    - [GET /api/paginateUsers/limit=:limit&offset=:offset](#get-apipaginateuserslimitlimitoffsetoffset)
    - [GET /api/users/getImage?path=:path](#get-apiusersgetimagepathpath)
    - [POST /api/upload-user-image](#post-apiupload-user-image)
    - [POST /api/createUser/id=:id&firstname=:firstname&lastname=:lastname&birthDate=:birthDate&email=:email](#post-apicreateuserididfirstnamefirstnamelastnamelastnamebirthdatebirthdateemailemail)
    - [POST /api/editUser/userId=:userId&firstname=:firstname&lastname=:lastname](#post-apiedituseruseriduseridfirstnamefirstnamelastnamelastname)
    - [DELETE /api/deleteUser/:userId](#delete-apideleteuseruserid)
### GET /api/users
Returns all users from db 
Response body example ```http://localhost:8080/api/users```
```json
   [ {
        "id": 4,
        "userId": "e22de32e-4f90-45c3-a153-ae87b24c159a",
        "firstname": "Anastasia",
        "lastname": "Arr",
        "birthDate": "1643029822017",
        "email": "jdhjksahdjk",
        "phone": null,
        "isDeleted": "false",
        "picture": "NULL"
    } ]
```

### GET /api/users=:query
Returns list of users in amount of query 

Response body example ```http://localhost:8080/users=1```
```json
[
    {
        "id": 4,
        "userId": "e22de32e-4f90-45c3-a153-ae87b24c159a",
        "firstname": "Anastasia",
        "lastname": "Arr",
        "birthDate": "1643029822017",
        "email": "jdhjksahdjk",
        "phone": null,
        "isDeleted": "false",
        "picture": "NULL"
    }
]
```
### GET /api/paginateUsers/limit=:limit&offset=:offset
Returns different set of items(from offset in amount of limit) and new offset and limit parameters. 
For example, ```/limit=3&offset=0``` will return the first three users, offset 4 and the same limit if there are enough users in the database. If there are not enough users, then the limit will be reduced by the value of the remaining users.

Response body example ```http://localhost:8080/limit=3&offset=0```

```json 
{
    "users": [
        {
            "id": 4,
            "userId": "e22de32e-4f90-45c3-a153-ae87b24c159a",
            "firstname": "Anastasia",
            "lastname": "Arr",
            "birthDate": "1643029822017",
            "email": "jdhjksahdjk",
            "phone": null,
            "isDeleted": "false",
            "picture": "NULL"
        },
        {
            "id": 14,
            "userId": "fedb0d4b-0087-4728-b7ea-9d2f7b5bfea1",
            "firstname": "G",
            "lastname": "H",
            "birthDate": "1643267019435",
            "email": "dkljalksd",
            "phone": null,
            "isDeleted": "false",
            "picture": "NULL"
        },
        {
            "id": 16,
            "userId": "062312a2-7d0d-408d-840b-a0916bdf661a",
            "firstname": "Meow",
            "lastname": "jaksjhsd",
            "birthDate": "1643271958934",
            "email": "djhajksd",
            "phone": null,
            "isDeleted": "false",
            "picture": "NULL"
        }
    ],
    "count": 7,
    "isEnd": false,
    "limit": 3,
    "offset": 3
}
```
### GET /api/users/getImage?path=:path
Returns user’s image. 
Better to use this action after a POST upload user image request.
Set query param path(key) pathValue(value - ex. ```path_to_image.jpg```).

Response body example 
Media content(image)

### POST /api/upload-user-image
Uploads users’s image to the database.

Frontend code example: 

```JavaScript
const url =  ‘http://localhost:8080/api/upload-user-image';
const userId = 17; 
const userPic = document.querySelector("input[type=file]").files[0];
const data = new FormData();
data.append(«userId», userId);
data.append(«files», userPic);
fetch(url, {
    method: "POST",
    body: data
});
```

Response body example 
```json
{
    "fieldname": "files",
    "originalname": «original-filename.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./images/",
    "filename": "79daa7d4c1d995c58000f1dbf86e0fa4",
    "path": "images/79daa7d4c1d995c58000f1dbf86e0fa4",
    "size": 2461967
}
```

### POST /api/createUser/id=:id&firstname=:firstname&lastname=:lastname&birthDate=:birthDate&email=:email
> 🐙 Note: this action need to be fixed 🐙
Creates new user. 

Response body example

```Json
User created successfully ^_^
```

### POST /api/editUser/userId=:userId&firstname=:firstname&lastname=:lastname
> 🐙 Note: this action need to be fixed 🐙

Updates user’s info.
⚠️Currently updates even not existing users without creating a new row at database.⚠️

Response body example

```Json
Updated successfully ^_^
```
### DELETE /api/deleteUser/:userId
Deletes user from database (need to be fixed!!!)

Response body example 

```Json
["User deleted successfully ^_^"]
```



