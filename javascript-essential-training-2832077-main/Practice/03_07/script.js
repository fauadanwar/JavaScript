/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const fan = {
    name: "Ceiling Fan",
    brand: "Hunter",
    color: "white",
    speed: 3,
    light: true,
    lightBulb: {
        type: "LED",
        brightness: 60,
        colorTemp: "warm",
    },
    turnOn: function () {
        this.speed = 1;
        this.light = true;
        console.log("Fan is on.");
    },
    turnOff: function () {
        this.speed = 0;
        this.light = false;
        console.log("Fan is off.");
    },
    };
    
    console.log(fan);
    fan.turnOn();
    console.log(fan);