import User from "../Model/userSchema.js"

export const create = async(req,res)=>{
   

    try {

        const {id} = req.body;

        const userExsist = await User.findOne({_id:id});
    
        if(userExsist){
            console.log("User is already exsist");
            return res.json({message:"User is already exsist"});
        }
        const user = new User(req.body);

        const save = await user.save();
    
        

        return res.status(200).json(save);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

export const readAll = async(req,res)=>{

    try {
        const id = req.params.id;
        const user = await User.find().select('-password');
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}