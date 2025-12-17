const mongoose = require("mongoose")

const adminaccountmodel = new mongoose.Schema({
    userName: { type: String },
    Email: { type: String, default: null },
    phoneNo: { type: Number, default: null },
    password: { type: String },
    role: { type: String },
    token: { type: String },
    profilePicture: { type: String },
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" },
    isactive: { type: Boolean, default: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: { type: Date }

})
const customeraccountmodel = new mongoose.Schema({
    customerName: { type: String },
    customerNametamil: { type: String },
    password:{type:String},
    Email:{type:String},
    role:{type:String},
    profilePicture :{type:String},
    Landmark: { type: String },
    phoneNo: { type: Number },
    LandMark: { type: String },
    scheme: { type: String },
    picture:{ type: String },
    amount: { type: Number },
    pendingamount:{type:Number},
    dueamount: { type: Number },
    previousduedate: { type: String },
    duedate: { type: String },
    nextduedate: { type: String },
    startdate: { type: String },
    enddate: { type: String },
    amountclose: { type: String },
    givenamount:{ type: Number },
    // branchid:{type: String},
    // executeofficerId:{type: String},
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" }, // Reference to Branchschememodel
    executeofficerId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    isactive: { type: Boolean, default: true },
    isextraplan: { type: String },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: { type: Date }
})
const addextracustomeraccountmodel = new mongoose.Schema({
    customerName: { type: String },
    customerNametamil: { type: String },
    customer_id: { type: String },
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" }, // Reference to Branchschememodel
    executeofficerId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    
 givenamount:{type: String},
    scheme: { type: String },
    amount: { type: Number },
    pendingamount:{type:Number},
    dueamount: { type: Number },
    previousduedate: { type: String },
    duedate: { type: String },
    nextduedate: { type: String },
    startdate: { type: String },
    enddate: { type: String },
    amountclose: { type: String },
   
    isactive: { type: Boolean, default: true },
    isextraplan: { type: String },
    profilePicture: { type: String }
})
const customerschememodel = new mongoose.Schema({


    type: { type: String },



})
const branchschememodel = new mongoose.Schema({


    Name: { type: String },
    totalinvestmentamount:{ type: Number },
    currentAmount:{ type: Number},
    Day: { type: String },
    collectionlist:{type:Array},
    stuffamountlist:{type:Array},
    collectionamount:{type:Number},
    stuffamount:{type:Number}


})
const rateofinterestschememodel = new mongoose.Schema({


    interest: { type: Number },



})
const companylogo = new mongoose.Schema({


    profilePicture: { type: String },



})
const transcationlist = new mongoose.Schema({


    category: { type: String },



})
const chitsmodel = new mongoose.Schema({


    chitsimage: { type: String },
    message:{type:String},
    startdate:{ type: String },
    totalmonthcount:{type: Number},
    currentmonthcount:{type: Number}



})
const collectionlist = new mongoose.Schema({


    branchid: { type: String },
    branchName:{ type: String },
    receivedAmount:{type: Number},
    totalAmount:{type: Number},
    pendingAmount:{type: Number},
    customerDueDate:{ type: String }


})
const customerpaylist = new mongoose.Schema({
    customer_id: { type: String },
    status: { type: String },
    alreadypayment: { type: String },
    customername: { type: String },
    customerNametamil: { type: String },
    profilePicture:{ type: String },
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" }, // Reference to Branchschememodel
    executeofficerId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    LandMark: { type: String },
    // Dueamount:{type:String},
    customerphonenumber: { type: String },
    customerscheme: { type: String },
    customerdueamount: { type: Number },
    coustomerduedate: { type: String },
    customerpayamount: { type: Number },
    maincustomer_id: { type: String },
    extraplan: { type: String },
    // adminname: { type: String },
    // admin_id: { type: String },
    telecallerstatus:{type: String}

})
const formverification = new mongoose.Schema({
    Name: { type: String },
    location: { type: String },
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" }, // Reference to Branchschememodel
    verficationofficer: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, 
    isapprove:{ type: String ,default:"false"},
    phoneNo:{ type: String },
    Email: { type: String },
    requestdate:{type: String},
   requesttime:{type: String},
   approveldate:{type: String},
   approveltime:{type: String},
    // Dueamount:{type:String},
   

})
const stufftranscation=new mongoose.Schema({
   
    branchid: { type: mongoose.Schema.Types.ObjectId, ref: "Branchschememodel" },
    authorid:{ type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, 
    type:{ type: String },
    isapprove:{ type: String ,default:"false"},
    reason:{ type: String},
    currentAmount:{type: String},
   amount:{type: Number },
   requestdate:{type: String},
   requesttime:{type: String},
   approveldate:{type: String},
   approveltime:{type: String},

})

const Chitsnewmodel = mongoose.model("Chitsmodel", chitsmodel, "Chitsmodel")
const collection = mongoose.model("Collectionlist", collectionlist, "Collectionlist")

const Adminaccountmodel = mongoose.model("Admin", adminaccountmodel, "Admin")
const Customerpaylist = mongoose.model("Customerpaylist", customerpaylist, "Customerpaylist")
const Customeraccountmodel = mongoose.model("Customer", customeraccountmodel, "Customer")
const Companylogomodel=mongoose.model("Company",companylogo,"Company")
const Addextracustomeraccountmodel = mongoose.model("Addextracustomeraccountmodel", addextracustomeraccountmodel, "Addextracustomeraccountmodel")
const Customerschememodel = mongoose.model("Customerscheme", customerschememodel, "Customerscheme")
const Branchschememodel=mongoose.model("Branchschememodel", branchschememodel, "Branchschememodel")
const Rateofinterestschememodel=mongoose.model("Rateofinterestschememodel", rateofinterestschememodel, "Rateofinterestschememodel")
const Formverification=mongoose.model("Formverification", formverification, "Formverification")
const Stufftranscation=mongoose.model("Stufftranscation", stufftranscation, "Stufftranscation")
const Transcationlist=mongoose.model("Transcationlist", transcationlist, "Transcationlist")

module.exports = {Formverification,Stufftranscation,collection,Transcationlist, Chitsnewmodel,Adminaccountmodel, Customeraccountmodel, Customerschememodel,Companylogomodel, Customerpaylist,Rateofinterestschememodel, Addextracustomeraccountmodel,Branchschememodel }