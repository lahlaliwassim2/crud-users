const addUser = async (req,res)=>{

    res.send('add mzyana')
    
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