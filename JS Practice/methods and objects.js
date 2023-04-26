var user = {
  firstName: "Ameed",
  lastName: "Omar",
  role: "Admin",
  loginCount: 63,
  facebookSignedIn: true,
  courseList: [],

  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  isFacebookSignedIn: function () {
    if (this.facebookSignedIn == true) return true;
    else return false;
  },
  incLoginCount: function () {
    this.loginCount++;
    console.log(this.loginCount);
  },
};

console.log(user.firstName);
console.log(user.isFacebookSignedIn());
console.log(user.getCourseCount());
user.incLoginCount();
user.buyCourse("React JS Course");
user.buyCourse("Angular JS Course");
console.log(user.getCourseCount());
