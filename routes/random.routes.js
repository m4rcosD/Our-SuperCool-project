const router = require("express").Router();
const axios = require("axios")
router.get("/random", (req, res, next) => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.Spoonacular_Key}`)
    .then((response) => {
        res.render("random.hbs", {recipe:response.data})
        console.log(response.data)
    })
    .catch((err) => {
        next(err)
    });  
});
module.exports = router; 
