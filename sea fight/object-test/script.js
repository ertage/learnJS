var fiat = {
    make: "fiat ",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {

        if ((this.started) && (this.fuel == 0)) {
            console.log("You fuel is over. Please  add fuel");
        } else if ((this.started) && (this.fuel !== 0)) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
            this.fuel = this.fuel - 1;
        } else {
            console.log("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};
fiat.start();
fiat.drive();
fiat.addFuel(10);
fiat.drive();