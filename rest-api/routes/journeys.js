const router = require("express").Router();
const Journey = require("../models/Journey");
const User = require("../models/User");

// Create a journey 

router.post("/", async (req, res) => {
    const newJourney = new Journey(req.body);
    try {
      const savedJourney = await newJourney.save();
      res.status(200).json(savedJourney);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//update Journey
router.put("/:id", async(req,res)=>{
    try{
        const post = await Journey.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Updated journey!")
        }else {
            res.status(403).json("You can't modify other journeys!");
        }
    }catch (err){
        res.status(500).json(err);
    }
});
//delete journey
router.delete("/:id", async(req,res)=>{
    try{
        const post = await Journey.findById(req.params.id);
        if (post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Your journey has been deleted!")
        }else {
            res.status(403).json("You can't delete other journeys!");
        }
    }catch (err){
        res.status(500).json(err);
    }
});

//like and dislike
router.put("/:id/hey", async (req,res)=>{
    try{
        const post = await Journey.findById(req.params.id);
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

//get a journey
router.get("/:id", async(req,res)=>{
    try{
        const post = await Journey.findById(req.params.id);
        res.status(200).json(post);
    }catch (err){
        res.status(500).json(err);
    }
});

//get all journeys
router.get("/init/all", async (req, res, next) => {
    try {
        const journeys = await Journey.find({});
        res.json({ result: journeys });
    } catch (err) {
        next(err);
    }
});

module.exports = router;