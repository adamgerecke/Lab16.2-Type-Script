function calcInventoryValue() {
    var totalPrice = 0;
    var totalMotor = 0;
    var totalSensor = 0;
    var totalLED = 0;
    var Motor = {
        product: { name: 'motor', price: 10 },
        quantity: 10
    };
    var Sensor = {
        product: { name: 'sensor', price: 12.5 },
        quantity: 4
    };
    var LED = {
        product: { name: 'LED', price: 1 },
        quantity: 20
    };
    var inventory = [
        Motor,
        Sensor,
        LED
    ];
    totalMotor = Motor.product.price * Motor.quantity;
    totalSensor = Sensor.product.price * Sensor.quantity;
    totalLED = LED.product.price * LED.quantity;
    totalPrice = totalMotor + totalSensor + totalLED;
    console.log(totalPrice);
}
function calcAverageProductPrice() {
    var averagePrice = 0;
    var finalAverage = 0;
    var Carabiners = {
        name: "HotWire Carabiner",
        price: 7.95
    };
    var iceTool = {
        name: "Viper Ice Tool",
        price: 259.95
    };
    var Helmet = {
        name: "Vision Helmet",
        price: 99.95
    };
    var products = [
        Carabiners,
        iceTool,
        Helmet
    ];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        averagePrice = product.price + averagePrice;
    }
    finalAverage = (averagePrice / products.length);
    console.log(finalAverage);
}
function findNameOfTallestMountain() {
    var tallestHeight = 0;
    var tallestName = "";
    var Kilimanjaro = {
        name: "Kilimanjaro",
        height: 19341
    };
    var Everest = {
        name: "Everest",
        height: 29029
    };
    var Denali = {
        name: "Denali",
        height: 20310
    };
    var mountains = [
        Kilimanjaro,
        Everest,
        Denali
    ];
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > tallestHeight) {
            tallestHeight = mountain.height;
            tallestName = mountain.name;
        }
    }
    console.log(tallestName.toString());
}
//# sourceMappingURL=app.js.map