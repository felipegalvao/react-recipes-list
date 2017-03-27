import axios from 'axios';

module.exports = {
    getRecipes: function () {
        return axios.get("/recipes.json").then(function (res) {
            return res.data;
        }).catch(function (res) {
            return "An error has occured";
        })
    }
}