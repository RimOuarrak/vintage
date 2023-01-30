import {Router} from 'express';
import { sample_gems, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { GemModel } from '../models/gem.model';

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const gemsCount = await GemModel.countDocuments();
    if(gemsCount > 0)
    {
      res.send("Seed is already done!");
      return;
    }

    await GemModel.create(sample_gems);
    res.send("Seed Is Done!");
}
))

router.get("/", asyncHandler(
  async (req, res) => {
    const gems = await GemModel.find();
    res.send(gems);
  }
))

router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
  const searchRegex =  new RegExp(req.params.searchTerm, 'i');
  const gems = await GemModel.find({name: {$regex:searchRegex}})
  res.send(gems);
}))

  router.get("/tags", asyncHandler(
    async (req, res) => {
      const tags = await GemModel.aggregate([
        {
          $unwind:'$tags'
        },
        {
          $group:{
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id:0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count:-1})

      const all ={
        name: 'All',
        count: await GemModel.countDocuments()
      }

      tags.unshift(all);
      res.send(tags);
   }
  ))

  router.get("/tag/:tagName", asyncHandler(async (req, res) => {
    const gems = await GemModel.find({tags: req.params.tagName})
    res.send(gems);
  }))

  router.get("/:gemId", asyncHandler(async (req, res) => {
    const gem = await GemModel.findById (req.params.gemId)
    res.send(gem);
  }))

  export default router;