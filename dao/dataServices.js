const users = require("../models/model");

module.exports = class userService{

    static async getAllusers(){
        try {
            const allusers = await users.find({});
            return allusers;
        } catch (error) {
            console.log(`Could not fetch users ${error}`)
        }
    }

    static async createUser(data){
        try {

            const newUser = {
                name: data.name,
                email: data.email,
                userid: data.userid
            }
           const response = await new users(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getUserById(userid){
        try {
            const singleuserResponse =  await users.findById({_id: userid});
            return singleuserResponse;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    static async updateUser(data,userid){
            try {
                const updateResponse =  await users.findByIdAndUpdate(userid, data, {new: true})
                return updateResponse;
            } catch (error) {
                console.log(`Could not update Article ${error}` );
        }
    }

    static async deleteUser(userid){
        try {
            const deletedResponse = await users.findOneAndDelete(userid);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete article ${error}`);
        }

    }
}