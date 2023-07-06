const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Note = require('../model/Note');
const fetchUser = require('../middleware/fetchuser');

//Add new Note : POST (/api/note/addnote) : Login required
// Added middleware fetchUser to authenticate user using jwt token
router.post(
    '/addnote',
    fetchUser,
    [
        body('title','title must be present (min 3 character)').isLength({min:3}),
        body('description','Description should be more than 5 character').isLength({min:3}) 
    ],
    async(req,res) =>{

        try{
            const errors = validationResult(req); //check for input parameter validation/sanitization
            if(!errors.isEmpty()){
                return res.status(400).json({error: errors.array()});
            }

            const {title,description,tag} = req.body;

            const note = new Note({
                title,description,tag,userid:req.user.id
            })
            const savenote = await note.save();

            res.json(note)
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }
);

//Get All Notes of logged in user : GET (/api/note/getnotes) : Login required
// Added middleware fetchUser to authenticate user using jwt token
router.get(
    '/getnotes',
    fetchUser,
    async(req,res)=>{
        try{
            const notes = await Note.find({userid : req.user.id});
            res.json(notes);
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }
);

//update a note of provided note id of logged in user : PUT (/api/note/updatenote) : Login required
// Added middleware fetchUser to authenticate user using jwt token
router.put(
    '/updatenote/:id',
    fetchUser,
    [
        body('title','title must be present (min 3 character)').isLength({min:3}),
        body('description','Description should be more than 5 character').isLength({min:3}) 
    ],
    async(req,res) =>{
        try{

            const {title,description,tag} = req.body;
            let newNote = {}
            
            if(title){newNote.title = title}
            if(description){newNote.description = description}
            if(tag){newNote.tag = tag}

            let note = await Note.findById(req.params.id);
            console.log(note)
            if(!note){
                return res.status(404).json({error: 'Not found'});
            }

            if(note.userid.toString() !== req.user.id){
                return res.status(404).json({error: 'Not Allowed'});
            }

            let updatedNote = await Note.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true});
            res.send(updatedNote)

        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }
);

//delete a note of provided note id of logged in user : DELETE (/api/note/deletenote) : Login required
// Added middleware fetchUser to authenticate user using jwt token
router.delete(
    '/deletenote/:id',
    fetchUser,
    async(req,res)=>{
        try{
            let note = await Note.findById(req.params.id);

            if(!note){
                return res.status(404).json({error: 'Not found'});
            }

            if(note.userid.toString() !== req.user.id){
                return res.status(404).json({error: 'Not Allowed'});
            }

            note = await Note.findByIdAndDelete(req.params.id);
            res.send('Deleted Successfully..!!!');

        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }
);

module.exports = router