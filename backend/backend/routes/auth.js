const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');

const JWT_SECRET = 'Mars@2023'; // secret kry to generate jwt token

//create User : POST (/api/auth/createUser) : Login not required 
router.post('/createUser',
    [
        body('name').notEmpty().withMessage('Enter a name'),
        body('email','Enter a valid e-mail').isEmail(),
        body('password','Password should be more than 5 character').isLength({min:3})   //apply condition to validate data
    ]
    ,async (req,res)=>{
        const errors = validationResult(req); //check for input parameter validation/sanitization
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()});
        }

        try{
            //Check user with given email exist or not
            let user = await User.findOne({email: req.body.email});
            if(user){
                return res.status(400).json({error: 'User is already exist in system.'});
            }
            
            var salt = bcrypt.genSaltSync(10);                      //generate a salt to secure password using bcrypt
            var hash = await bcrypt.hash(req.body.password,salt);   //generate a hash to secure password using bcrypt

            //create a user
            user = await User.create({
                name: req.body.name,
                password: hash,
                email: req.body.email
            })
            
            // .then(user=> res.json(user))
            // .catch(err => { res.json({error: err,msg: err.message})}); as we afre using async/await

            let data = {
                user:{
                    id : user.id
                }
            }
            const authToken = jwt.sign(data,JWT_SECRET);

            // res.send(user);
            res.json(authToken)
        }catch(error){
            console.error(error.withMessage);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }
 );

//Validate User : POST (/api/auth/validateUser) : Login not required
 router.post('/validateUser',
    [
        body('email','Enter a valid e-mail').isEmail()
        // ,body('password','Password should not be empty').exists
    ],
     async (req,res) =>{
        

        const errors = validationResult(req); //check for input parameter validation/sanitization
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()});
        }
        
        try{
            const {email,password} = req.body; //deserialized parameter from request body
        
            //Check user with given email exist or not
            let user = await User.findOne({email: email});
            if(!user){
                return res.status(400).json({error: 'Please Enter Valid Credential'});
            }

            //compare password with database hashed password 
            let compareResult = await bcrypt.compare(password,user.password); 

            if(!compareResult){
                return res.status(400).json({error: 'Please Enter Valid Credential'});
            }

            let data = {
                user:{
                    id : user.id
                }
            }//payload
            const authToken = jwt.sign(data,JWT_SECRET); //craete a jwt token
            res.json(authToken)
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Something went wrong!.'});
        }
    }

 );

//Get User Details : POST (/api/auth/getUser) : Login required
// Added middleware fetchUser to authenticate user using jwt token
router.post("/getUser", 
    fetchUser,
    async(req,res)=>{
        let userId = req.user.id;   
        const user = await User.findById(userId).select("-password"); //get details of selected userId except password
        res.json(user);
    }

);

 module.exports = router