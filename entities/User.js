const path = require("path");

module.exports = class User {
  constructor(id, gender, firstname, lastname, borthDate, email, phone, city, picture, isBanned, isDeleted, createdDate, status) {
    this.id = id;
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
    this.borthDate = borthDate || Date.now();
    this.email = email;
    this.phone = phone;
    this.city = city;
    this.picture = picture;
  }

  // async removeOriginal() {
  // 	await removeFile(path.resolve(imgFolder, `${this.id}.${this.mimetype.split('/')[1]}`));
  // }

  toPublicJSON() {
    return {
      id: this.id,
      gender: this.gender,
      firstname: this.firstname,
      lastname: this.lastname,
      borthDate: this.borthDate,
      email: this.email,
      phone: this.phone,
      city: this.city,
      picture: this.picture  
    };
  }

  toJSON() {
    return {
      id: this.id,
      gender: this.gender,
      firstname: this.firstname,
      lastname: this.lastname,
      borthDate: this.borthDate,
      email: this.email,
      phone: this.phone,
      city: this.city,
      picture: this.picture  
    };
  }
};
