const dataServices = require("../dao/dataServices");

module.exports = class Users{

   static async getAllusers(req, res, next){
      try {
        const articles = await dataServices.getAllusers();
        if(!articles){
           res.status(404).json("There are no article published yet!")
        }
        res.json(articles);
      } catch (error) {
         res.status(500).json({error: error})
      }
  }
  
   static async getUserById(req, res, next){
      try {
         let id = req.params.id || {};
         const users = await dataServices.getUserById(id);
         res.json(users);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async createUser(req, res, next){
      try {
         const createdUser =  await dataServices.createUser(req.body);
         res.json(createdUser);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async updateUser(req, res, next){
      try {
         let id = req.params.id || {};
         console.log(req.body)
         const updatedUser = await dataServices.updateUser(req.body,id);
         if(updatedUser.modifiedCount === 0){
            throw new Error("Unable to update user, error occord");
         }

         res.json(updatedUser);

      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async deleteUser(req, res, next){
         try {
            const articleId = req.params.id;
            const deleteResponse =  await dataServices.deleteUser(articleId)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

}
