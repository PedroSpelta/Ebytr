import { Db, MongoClient } from 'mongodb'
import { config } from 'dotenv'
import { io } from '../api/server'

config()

const { MONGO_DB_STRING, MONGO_DB_NAME } = process.env

let db: Db | null = null

export async function connectToDatabase() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_STRING as string).then((conn) => {
        console.log('mongo')
        db = conn.db(`${MONGO_DB_NAME}`)
        const coll = db.collection('lists');
        const stream = coll.watch([]);
        stream.on("change", (next) => {
          console.log('change', next);
          io.emit('change', next)
        })
        return db
      })
}
