import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
// import { storageService } from './async-storage.service.js'

// console.log(carService);

const CAR_KEY = 'bookdb'


_createCars()
// export const booksServis = {query}
export const booksServis = {
    query,
    remove
}
function query(filterBy = {}) {
    return storageService.query(CAR_KEY)
        .then(cars => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                cars = cars.filter(car => regExp.test(car.vendor))
            }

            if (filterBy.minSpeed) {
                cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            }

            return cars
        })
}

function remove(bookId) {
    return storageService.remove(CAR_KEY, bookId)
}

function _createCars() {
    let books = utilService.loadFromStorage(CAR_KEY)
    if (!books || !books.length) {

        books = [{

            id: "101",
            title: "harry poter",
            description: "placerat nisi sodales suscipit tellus",
            thumbnail: "assets/img/harry.png",
            listPrice: {
                amount: 109,
                currencyCode: "EUR",
                isOnSale: false
            }

        },
        {

            id: "102",
            title: "keeper of the lost sitics",
            description: "placerat nisi sodales suscipit tellus",
            thumbnail: "assets/img/keeper.png",
            listPrice: {
                amount: 109,
                currencyCode: "EUR",
                isOnSale: false
            }

        },
        {

            id: "103",
            title: "hunger game",
            description: "placerat nisi sodales suscipit tellus",
            thumbnail: "assets/img/hunger game.png",
            listPrice: {
                amount: 109,
                currencyCode: "EUR",
                isOnSale: false
            }

        }

        ]
        // books= []
        // const vendors = ['audu', 'fiak', 'subali', 'mitsu']
        // for (let i = 0; i < 6; i++) {
        //     const vendor = vendors[utilService.getRandomIntInclusive(0, vendors.length - 1)]
        //     cars.push(_createCar(vendor, utilService.getRandomIntInclusive(80, 300)))
        // }
        utilService.saveToStorage(CAR_KEY, books)
    }
}