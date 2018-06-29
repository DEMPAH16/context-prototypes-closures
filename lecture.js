function Character() {
    // 1 - this = {}
    // 2 - this.__proto__ = Character.prototype
    // 2.5 - this.constructor = Character
    
    // 3 - runs the body of the constructor function
    this.name = 'Tom';
    
    // 4 - returns this (the new object)
    // e.g. { name: 'Tom' }
}

function CharacterFunc(lastName) {
    // 1 - this = {}
    // 2 - this.__proto__ = Character.prototype
    // 2.5 - this.constructor = Character
    
    // 3 - runs the body of the constructor function
    this.name = 'Tom';
    
    this.sayName = function() {
        console.log(this.name + ' ' + lastName);
    };
    
    // 4 - returns this (the new object)
    // e.g. { name: 'Tom' }
}

const voldemort = new CharacterFunc('Riddle');
voldemort;//?
voldemort.sayName();

class Character2 {
    constructor() {
        this.name = 'Barb';
        this.hobbies = ['watch Netflix', 'ride horses', 'read books'];
        this.favoriteHobby = 1;
        
        // this.sayName = () => {
        //     console.log('Carrie');
        // };
        
        this.sayName();
    }
    
    sayName() {
        console.log(this.name);
    }
    
    addHobby(hobby, ...args) {
        // Array.prototype.forEach.call(arguments, blah => console.log(blah));
        addHobbyToList.apply(this, [hobby, ...args]);
    }
    
    isHobbyFavorite(hobby) {
        const that = this;
        return this.hobbies.filter(function(h, i) {
            return h == hobby && i == that.favoriteHobby;
        }).length == 1;
    }
}

//#region
function addHobbyToList(hobby, hobby2) {
    hobby;//?
    hobby2;//?
    this.hobbies.push(hobby);
}

var obj = new Character();
var obj2 = new Character2();

obj2.isHobbyFavorite('ride horses');//?
obj2.addHobby('write in journal', 'something else');
obj2.hobbies//?

module.exports = {
    addHobbyToList,
};

this//?

//#endregion

const instance = {
    // own properties
    name: 'Barb',
    hobbies: [/*...*/],
    favoriteHobby: 1,
    sayName: function() {
        console.log(this.name);
    },
    
    // shared properties
    __proto__: {
        sayName() {console.log(this.name)},
        addHobby() {},
        isHobbyFavorite() {},
    },
};

instance.sayName = function() {
    console.log(this.name);
}.bind(instance);

instance

instance.sayName();