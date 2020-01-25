const express = require("express")
const redis = require("redis");
const app = express();
const client = redis.createClient({
    host: "redis_image",
    port: 6379
});

client.set("visits", 0)

app.get("/", (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`you have visited this api link ${visits} times`)
        client.set("visits", increment(parseInt(visits)))
    })
})

let increment = (value) => {
    return value += 1
}

app.listen(9090, () => {
    console.log("running the express app on 9090")
})