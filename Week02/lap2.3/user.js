export default class User{
    constructor(name){
        this.name=name;
    }
    printName(name){
        console.log(`User name: ${this.name}`);
    }
    printID(id){
        console.log(`ID: ${id}`);
    }
};

