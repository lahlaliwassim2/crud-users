const Users = require('../models/users.models')


const addUser = async (req,res)=>{

    console.log(req.body)
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