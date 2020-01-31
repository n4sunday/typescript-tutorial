class Vehicle {
    public drive(): void {
        console.log('chugga chugga')
    }

    public honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('room')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const vehicle = new Vehicle()
vehicle.drive()

const car = new Car()
car.startDrivingProcess()
