const router = require("express").Router();
const { json } = require("express");
const Traveler = require("../models/Traveler");
const User = require("../models/User");

//create traveler/advert


router.post("/", async (req, res) => {
    const newTraveler = new Traveler(req.body);
    try {
      const savedTraveler = await newTraveler.save();
      res.status(200).json(savedTraveler);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//update traveler
router.put("/:id", async(req,res)=>{
    try{
        const post = await Traveler.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Updated travel!")
        }else {
            res.status(403).json("You can't modify other Travelers!");
        }
    }catch (err){
        res.status(500).json(err);
    }
});
//delete travel
router.delete("/:id", async(req,res)=>{
    try{
        const post = await Traveler.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Your travel has been deleted!")
        }else {
            res.status(403).json("You can't delete other Travelers!");
        }
    }catch (err){
        res.status(500).json(err);
    }
});

//say hey! and goodbye
router.put("/:id/hey", async (req,res)=>{
    try{
        const post = await Traveler.findById(req.params.id);
        if (!post.heys.includes(req.body.userId)){
            await post.updateOne({$push: {heys: req.body.userId} });
            res.status(200).json("You said hey!");
        }else{
         await post.updateOne({$pull: {heys: req.body.userId } });
         res.status(200).json("bye, bye!");
        }
    }catch (err){
        res.status(500).json(err);
    }
});

//get a travel
router.get("/:id", async(req,res)=>{
    try{
        const post = await Traveler.findById(req.params.id);
        res.status(200).json(post);
    }catch (err){
        res.status(500).json(err);
    }
});

//get all travelers
/*
router.get('/init/all',async(req,res,next)=>{
    try{
        const id=req.params.id;
        const travelers=await Traveler.findById(id);
        res.json({result:Traveler});
    }catch(err){
        next(err);
    }
});
*/
router.get("/init/all", async (req, res) => {
    const qNew = req.query.new;
    try {
      let traveler;
  
      if (qNew) {
        traveler = await Traveler.find().sort({ createdAt: -1 }).limit(1);
        traveler = await Product.find();
      }
  
      res.status(200).json(travelers);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;

