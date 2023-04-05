const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ramrodwal:rankerspoint1@couchpotatocluster.sz68lnd.mongodb.net/CouchPotatoCluster?retryWrites=true&w=majority'
const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if(err)console.log("---", err);
        else{
            console.log("Connected to database");
            // ab ye line mongoose se connect hone k bad data fetch krne k lie
            const fetched_data = await mongoose.connection.db.collection("item_category");
            fetched_data.find({}).toArray(function(err, data){
                if(err)console.log("error fetching data");
                else console.log();
            })
        }
        
    });

    
}

module.exports = mongoDB;