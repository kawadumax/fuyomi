import Dexie from "dexie"

export class FuyomiDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  userdata: Dexie.Table<IUserdata, number> // number = type of the primkey
  //...other tables goes here...

  constructor() {
    super("fuyomiDatabase")
    this.version(1).stores({
      userdata: "id, points",
      //...other tables goes here...
    })
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.userdata = this.table("userdata")
  }
}

interface IUserdata {
  id?: number
  points: number
}

const db = new FuyomiDatabase()

export default db
