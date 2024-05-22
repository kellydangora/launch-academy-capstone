/* eslint-disable no-console */
import { connection } from "../boot.js";
import { User, Property } from "../models/index.js"

class Seeder {
  static async seed() {
    
    await User.query().insert({email: "kellydangora@gmail.com", cryptedPassword: "1234" })
    await User.query().insert({email: "kristendangora@gmail.com", cryptedPassword: "5678" })
    await User.query().insert({email: "katelindangora@gmail.com", cryptedPassword: "9101" })

    await Property.query().insert({address: ""})
    await Property.query().insert({address: ""})
    await Property.query().insert({address: ""})

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
