/* eslint-disable no-console */
import { connection } from "../boot.js";
import { Property, User } from "../models/index.js"

class Seeder {
  static async seed() {
    
    const user1 = await User.query().insert({email: "kp@kd.com", cryptedPassword: "111" })
    const user2 = await User.query().insert({email: "fb@ft.com", cryptedPassword: "111" })

    await Property.query().insert({location: "12 State st, Billerica, MA 01862",
                                    price: 450000,
                                    yearBuilt: 1924,
                                    squft: 2300,
                                    dateListed: "May 20, 2024",
                                    dateAvailable: "August 1, 2024",
                                    numberOfUnits: 2,
                                    numberOfFloors: 2,
                                    numberOfBedrooms: 4,
                                    numberOfBathrooms: 2,
                                    heating: "Heat pump",
                                    cooling: "Central air",
                                    laundry: "shared in basement",
                                    parking: "2 spots available in driveway",
                                    realEstateCompany: "Kelly's Reality",
                                    description: "gorgeous property",
                                    userId: user1.id
                                  })

    await Property.query().insert({location: "2 Friends st, Charlestown, MA 22121",
                                    price: 820000,
                                    yearBuilt: 1989,
                                    squft: 3100,
                                    dateListed: "May 22, 2024",
                                    dateAvailable: "September 1, 2024",
                                    numberOfUnits: 3,
                                    numberOfFloors: 3,
                                    numberOfBedrooms: 3,
                                    numberOfBathrooms: 3,
                                    heating: "Heat pump",
                                    cooling: "Central air",
                                    laundry: "in units",
                                    parking: "street parking",
                                    realEstateCompany: "Kelly's Reality",
                                    description: "completely re-done",
                                    userId: user1.id
                                  })
  

    console.log("Done!");
    await connection.destroy();
  }
}
// ValidationError: numberOfBathrooms: must have required property 'numberOfBathrooms', 
// price: must be integer, yearBuilt: must be integer, squft: must be integer,
// numberOfUnits: must be integer, numberOfFloors: must be integer, 
// numberOfBedrooms: must be integer

export default Seeder;
