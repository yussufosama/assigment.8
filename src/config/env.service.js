import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve("./.env.dev")
});


const port = process.env.port 
const databaseURI = process.env.DATABASE_URI

export const env = {
port ,
databaseURI,
}