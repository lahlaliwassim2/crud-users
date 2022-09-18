const Users= require('../models/users.models')


const addUser =  (req, res)=>{

   try {
         Users.create(req, res)
        res.status(201).json({message: 'users add with succes'})
   } catch (error) {
    console.log(error.message)
   }
}

const findUser = async (req,res)=>{

    res.send('find kolchi mzyana')
}

const findSingleUser = async (req,res)=>{
    res.send('find wahad  mzyana')
    
}

const updateUser = async (req,res)=>{

    res.send('update mzyana')
}
const deleteUser = async (req,res)=>{

    res.send('delete mzyana')
}



module.exports={
    addUser,
    findUser,
    findSingleUser,
    updateUser,
    deleteUser
}