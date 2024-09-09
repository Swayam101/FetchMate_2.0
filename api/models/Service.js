const {Schema,model}=require('mongoose')


const serviceSchema=new Schema({
    petParent:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Request Must Have a Pet Parent"]
    },
    petSitter:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Request Must Have a Pet Sitter"]
    },
    pickUpTime:{
        type:Date,
        required:[true,"Request Must Have a Pickup Time"]
    },
    dropTime:{
        type:Date,
        required:[true,"Request Must Have a Drop Time"]
    },
    petDetails:{
        type:Schema.Types.ObjectId,
        ref:"Pet",
        required:[true,"Request Must Have Drop Pet Details"]
    },
    serviceType:{
        type:String,
        enum:["daycare","dogwalking","overnight","birdwatching","training","socialisation"],
        required:[true,"Request Must Have Service Type!"]
    },
    status:{
        type:String,
        enum:["hanging","rejected","accepted"],
        required:[true,"Request Must Have A Status!"],
    }
})

module.exports=model("Service",serviceSchema)