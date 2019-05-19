const functions = require('firebase-functions');

exports.getsavings = functions.https.onRequest((request, response) => {
    results = {
        saving: 20.36,
        savingproducts: [
            { provider: "Tesla", product: "powerwall", image: "https://www.solarreviews.com/content/images/blog/post/tesla_powerwall_2.jpg"},
            { provider: "Sunpower", product: "sunpower battery",image: "https://stellarsolar.net/wp-content/uploads/2018/05/300.jpg?quality=100.3018052418030" },
            { provider: "Sunrun", product: "Sunrun storage", image: "https://news.energysage.com/wp-content/uploads/2018/03/03.19_Sunrun-Brightbox-Solar-and-Storage_Blog.png" }
        ]
    }
    return response.status(200).send(results);
});
