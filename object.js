class Human{
    constructor(name,age){
      this.name= name;
      this.age= age; 
    }

    talk(){
        console.log(this.name + ' speak');
    }
}

class Man extends Human {
    constructor(name,age){
        super(name,age);
    }
    mouth (){
      console.log(this.age + " year old " + this.name + ' speaks like a historian');
    }
}

const micheal = new Man('Micheal',27);


micheal.talk();

micheal.mouth();
