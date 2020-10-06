interface Mountain {
    name: String,
    height: Number
}

interface Product {
    name: String,
    price: number
}

interface InventoryItem {
    product: Product,
    quantity: number
}

function calcInventoryValue() {

    var totalPrice: number = 0;

    var totalMotor: number = 0;
    var totalSensor: number = 0;
    var totalLED: number = 0;

    let Motor: InventoryItem = {
        product: {name: 'motor',price: 10},
        quantity : 10
    }

    let Sensor: InventoryItem = {
        product: { name: 'sensor', price: 12.5 },
        quantity: 4
    }

    let LED: InventoryItem = {
        product: { name: 'LED', price: 1 },
        quantity: 20
    }

    let inventory: InventoryItem[] = [
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

    var averagePrice:number = 0;
    var finalAverage = 0;

    let Carabiners: Product = {
        name: "HotWire Carabiner",
        price: 7.95
    }

    let iceTool: Product = {
        name: "Viper Ice Tool",
        price: 259.95
    }

    let Helmet: Product = {
        name: "Vision Helmet",
        price: 99.95
    }

    let products: Product[] = [
        Carabiners,
        iceTool,
        Helmet
    ];

    for (let product of products) {
        averagePrice = product.price + averagePrice;
    }

    finalAverage = (averagePrice / products.length);

    console.log(finalAverage);
}



function findNameOfTallestMountain() {

    var tallestHeight:Number = 0;
    var tallestName:String = "";

    let Kilimanjaro: Mountain = {
        name: "Kilimanjaro",
        height: 19341
    }

    let Everest: Mountain = {
        name: "Everest",
        height: 29029
    }

    let Denali: Mountain = {
        name: "Denali",
        height: 20310
    }

    let mountains: Mountain[] = [
        Kilimanjaro,
        Everest,
        Denali
    ];

    for (let mountain of mountains) {
        if (mountain.height > tallestHeight) {
            tallestHeight = mountain.height;
            tallestName = mountain.name;
        }
    }
    console.log(tallestName.toString());
}