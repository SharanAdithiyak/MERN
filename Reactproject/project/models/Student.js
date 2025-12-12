const mongoose=require('mongoose');
//const counter=require('./Counter');

const studnetSchema=new mongoose.Schema({
    rollno:{type:Number,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
});


studnetSchema.pre('save',async function(){
    if(this.isNew){
        const counter=await Counter.findByIdAndUpdate(
            {id:'rollno'},
            {$inc:{seq:1}},
            {new:true,upsert:true}
        );
        this.rollno=counter.seq;
    }
});

module.exports=mongoose.model('Student',studnetSchema);
