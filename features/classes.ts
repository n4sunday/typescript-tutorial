class Vehicle {
    // Pattern 1
    constructor(public color: string) { }

    // Pattern 2
    // color: string
    // constructor(color: string) {
    //     this.color = color
    // }

    public drive(): void {
        console.log('chugga chugga')
    }

    public honk(): void {
        console.log('beep')
    }
}

// class Car extends Vehicle {
//     drive(): void {
//         console.log('room')
//     }

//     startDrivingProcess(): void {
//         this.drive()
//         this.honk()
//     }
// }

const vehicle = new Vehicle('green')
console.log(vehicle.color);

// vehicle.drive()

// const car = new Car()
// car.startDrivingProcess()
