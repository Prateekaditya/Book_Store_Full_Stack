import express from "express";
import { Book } from "../models/booksmodel.js";

const router=express.Router();
router.post('/',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            return res.status(400).send({
                message:'send all the required fileds:titles ,author,publishyear'
            })

        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishyear:req.body.publishyear,
        }
        const book=await Book.create(newBook);
        return res.status(200).send(book);
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:error.message});
    }
})

router.get('/',async(req,res)=>{
    try{
         const books=await Book.find({});
         return res.status(200).json({
            count:books.length,
            data:books,
         })
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:error.message});
    }
})
router.get('/:id',async(req,res)=>{
    try{

        const {id}=req.params;
         const book=await Book.findById(id);
         return res.status(200).json(book)
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:error.message});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishyear){
            return res.status(400).send({
                message:'send all the required fileds:titles ,author,publishyear'
            })}
            const {id} =req.params;
            const result=await Book.findByIdAndUpdate(id,req.body)
            if(!result){
                return res.status(404).json({message:'book not found'})
            }
            else{
                return res.status(200).send({message:'book found'})
            }
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:error.message});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
          return  res.status(400).json({message:'book not found'})
        }
        return res.status(200).send( {message:"Book Deleted"})
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})
export default router;