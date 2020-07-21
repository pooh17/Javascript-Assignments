class Users {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends Users{
    constructor(name,age,email,role){
        super(name,age,email)
        this.role = role;
    }
    addCoin(users, coin){
        users.coins +=coin;
        console.log(` ADDCOINS- ${users.name} has ${users.coins} coins`)
        return this;
    }
    removeCoin(users, coin){
        users.coins -=coin;
        console.log(` REMOVECOINS- ${users.name} has ${users.coins} coins`)
        return this;
    }
}

class Admin extends Moderator{
   addCourse(users,course){
       users.courses.push(course);
       console.log(users);
   }
   deleteUser(users){
        users = userslist.filter(u =>{
            return u.email != users.email; 
        })
    }
}

let user1 =new Users('Supriya',25,'supriya@gmail.com')
let user2 = new Users('Pooja',24,'pooja@gmail.com')
let user3 = new Users('Neeraj',15,'neeraj@gmail.com')
let mod = new Moderator('Sharda',39,'sharda@gmail.com','Moderator');
let admin = new Admin('Pandurang',55,'pandurang@gmail.com');
let userslist = [user1,user2,mod,admin];

userslist.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'Autocad');
admin.addCourse(user2,'Python');
admin.addCourse(user2,'Javascript');
admin.addCourse(user3,'Python');

user2.login()
 mod.addCoin(user2,1);
 mod.addCoin(user2,1);
 mod.removeCoin(user2,1);
 mod.addCoin(user1,10);
 mod.addCoin(user3,20);
 mod.removeCoin(user3,5);

user1.logout()

admin.deleteUser(user1);
console.log(userslist);
