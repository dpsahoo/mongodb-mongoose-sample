// Add dependency
const mongoose = require("mongoose");

// Connect to MongoDB server and create new DB if not exists
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

// Establish the schema of the document i.e. how the document should be structured
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Create the collection(or model) under which the documents will be stored
const Fruit = mongoose.model("Fruit", fruitSchema);

// Build a sample document as per the above specification (Collection + Schema)
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit!"
});

// fruit.save();

// --New Collection of People--

// People Schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// People Model/Collection
const Person = mongoose.model("Person", peopleSchema);

// Create a new person
const person = new Person({
    name: "Durga",
    age: 40
});

// person.save();


// --Test Model.insertMany() function--
// Ingest multiple persons into the People collection/model

// Build the documents
const Prasad = new Person({name: "Prasad", age: 25});
const Sahoo = new Person({name: "Nirakar Sahoo", age: 60});
const Manjula = new Person({name: "Manjulata Sahoo", age: 59});
const Jeetu = new Person({name: "Jeetu", age: 37});

const family = [Prasad, Sahoo, Manjula, Jeetu];     // Build an array

// Execute insertMany function
Person.insertMany(family, function(err){
    if (err) {
        console.log("Error in loading. " + err);
    } else {
        console.log("Successfully added new people to the Person collection");
    }
});




