import { Request, Response } from "express";
import ProgressModel from "../models/Progress";

export default class ProgressController
{
    constructor()
    {

    }

    async show(req : Request, res : Response)
    {
        const rankings = await ProgressModel.find(req.body);

        return res.json(rankings);
    }

    async indexById(req : Request,res : Response)
    {
        const ranking = await ProgressModel.findOne({ _id : req.params.id });
        return res.json(ranking);
    }

    async indexByNickname(req : Request,res : Response)
    {
        const ranking = await ProgressModel.findOne({ nickname : req.params.nickname });
        return res.json(ranking);
    }


    async indexByPassword(req : Request,res : Response)
    {
        const ranking = await ProgressModel.findOne({ password : req.params.password });
        return res.json(ranking);
    }

    async store(req : Request, res : Response)
    {
        const ranking =  await ProgressModel.create(req.body);

        return res.json(ranking);
    }

    async update(req : Request,res : Response)
    {
        let ranking = await ProgressModel.findOneAndUpdate({ nickname : req.params.nickname },req.body);
        return res.json(ranking);
    }

    async destroy(req : Request,res : Response)
    {
        let ranking = await ProgressModel.deleteOne({ nickname : req.params.nickname });
        return res.json(ranking);
    }



}
