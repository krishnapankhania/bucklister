export default class User {
  constructor(data) {
    this.uid = data.uid;
    this.displayName = data.displayName;
    this.email = data.email;
    this.profileImage = data.photoURL;
  }
  getDet(field = null) {
    if (field) return this[field];
    else {
      return {
        uid: this.uid,
        displayName: this.displayName,
        email: this.email,
        profileImage: this.profileImage,
      };
    }
  }
}
