import  app  from './app.js';
import { conexionDB } from "./config/db.js";

conexionDB();
app.listen(3000);
console.log("Server on port", 3000);