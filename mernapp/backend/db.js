const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ramrodwal:rankerspoint1@couchpotatocluster.sz68lnd.mongodb.net/CouchPotatoCluster?retryWrites=true&w=majority'
const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("Connected to database");
            // ab ye line mongoose se connect hone k bad data fetch krne k lie
            const flours = await mongoose.connection.db.collection("flours");
            flours.find({}).toArray(async function (err, data) {
                const item_category = await mongoose.connection.db.collection("item_category");
                item_category.find({}).toArray(function (err, catData) {

                    if (err) console.log("error fetching data");
                    else {
                        //ek global variable banaya hai item_category nam se aur yahi syntax hai global variable banane ka
                        global.flours = data;
                        global.item_category = catData;

                    }

                })

                // if(err)console.log("error fetching data");
                // else{
                //     //ek global variable banaya hai item_category nam se aur yahi syntax hai global variable banane ka
                //     global.item_category = data;

                // }
            })
        }

    });


}

module.exports = mongoDB;