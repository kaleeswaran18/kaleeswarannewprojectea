var express = require('express');
var router = express.Router();
var adminaccountController = require('../controller/index')
const upload = require('../utills/multer');
const verifyToken = require('../utills/verifyToken');


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



//login both admin & superadmin
router.post('/login', adminaccountController.Login)
router.post('/verifyToken', adminaccountController.LoginVerifyToken)


router.post('/createscheme', adminaccountController.createscheme)
router.get('/todayallcustomer', adminaccountController.todayallcustomer)
router.get('/filterbasecustomer', adminaccountController.filterbasecustomer)
router.put('/todaycustomerupdate', adminaccountController.todaycustomerupdate)
router.put('/todayindividualcustomerupdate', adminaccountController.todayindividualcustomerupdate)
router.get('/customerdetails', adminaccountController.customerdetails)
router.get('/customerdetails1', adminaccountController.customerdetails1)
router.get('/getallinterestcustomer',adminaccountController.getallinterestcustomer)
router.get('/transcationlist',adminaccountController.transcationlist)

router.get('/extraaccountbalance',adminaccountController.extraaccountbalance)
router.get('/getoneuser',adminaccountController.getoneuser)
// router.post('/fileUpload', verifyToken, upload.fields([{
//   name: 'image', maxCount: 1
// }]), adminaccountController.fileUpload)


router.post('/fileUpload',upload.single("file"), adminaccountController.fileUpload)

//temMem
router.get('/adminList', verifyToken, adminaccountController.adminList)

router.post('/create',upload.single("profilePicture"), adminaccountController.createaccount)//superadmincreatesadmin
router.post('/edit', verifyToken, adminaccountController.superAdminsEditsAdminUser)
router.post('/delete', verifyToken, adminaccountController.superAdminsDeletesAdminUser)

//customers upload.single('profile_pic'),
router.post('/createcustomer',upload.single("profilePicture"), adminaccountController.createcustomeraccount)
router.post('/companyimage',upload.single("profilePicture"), adminaccountController.companyimage)

router.get('/getcompanyimage',adminaccountController.getcompanyimage)
router.get('/customersList',adminaccountController.customersUsersList)
router.get('/customersactiveList',adminaccountController.customersactiveList)

router.post('/createbranch', adminaccountController.createbranch)
router.delete('/deletebranch',adminaccountController.deletebranch)
router.get('/getexecuteofficer', adminaccountController.getexecuteofficer)
router.post('/createrateofinterest', adminaccountController.createrateofinterest)
router.get('/getrateofinterest', adminaccountController.getrateofinterest)
router.get('/getbranchName', adminaccountController.getbranchName)
router.get('/transationfind', adminaccountController.transationfind)

router.post('/addextracustomerplan',upload.single("profilePicture"),adminaccountController.addextracustomerplan)
router.get('/particularcustomerallaccount', adminaccountController.particularcustomerallaccount) //plan api
router.get('/particularcustomerallaccount1', adminaccountController.particularcustomerallaccount1) //plan api

router.get('/viewallhistroy', adminaccountController.viewallhistroy)
router.get('/particularcustomertransaction', adminaccountController.particularcustomertransaction) //plan api
router.get('/viewcustomertransaction', adminaccountController.viewcustomertransaction) //plan api

router.get('/carddetails', adminaccountController.carddetails)
router.get('/notificationlist', adminaccountController.notificationlist)
router.get('/transationhistroy', adminaccountController.transationhistroy)
router.post('/dailycollectionamountandfilter', adminaccountController.dailycollectionamountandfilter)
router.post('/allduedashboardview', adminaccountController.allduedashboardview)
router.post('/createform', adminaccountController.createform)
router.put('/updateform', adminaccountController.updateform)
router.delete('/deleteemployee',adminaccountController.deleteemployee)
router.get('/getverificationform',adminaccountController.verification)
router.put('/updateinterestvalue',adminaccountController.updateinterestvalue)

router.put('/updateverificationapprovel',adminaccountController.updateverificationapprovel)
router.put('/updateverificationapprovel1',adminaccountController.updateverificationapprovel1)
router.get('/getparticularverification',adminaccountController.getparticularverification)

router.put('/verificationapprovel',adminaccountController.verificationapprovel)
router.get('/approvelaccount',adminaccountController.approvelaccount)
router.post('/createcheet', adminaccountController.createcheet)
router.put('/updatecheet', adminaccountController.updatecheet)
router.get('/getallcheet',adminaccountController.getallcheet)
router.delete('/deletecheet',adminaccountController.deletecheet)
router.delete('/deletecustomer',adminaccountController.deletecustomer)
router.get('/getparticularcheet',adminaccountController.getparticularcheet)

router.post('/transationhistroy', adminaccountController.transationhistroy)
router.post('/posttransationhistroy', adminaccountController.approveltransationlist)
router.get('/getstafftranstionlist',adminaccountController.getstafftranstionlist)
router.put('/updatetafftranstionlist',adminaccountController.updatetafftranstionlist)
router.get('/getapprovelstafftranstionlist',adminaccountController.getapprovelstafftranstionlist)

router.delete('/deletetafftranstionlist',adminaccountController.deletetafftranstionlist)

router.get('/getbrachbasedonexecuter',adminaccountController.getbrachbasedonexecuter)
router.get('/collectionvalue',adminaccountController.collectionvalue)
router.get('/collectionlistall',adminaccountController.collectionlistall)
router.get('/collectionlistparticullar',adminaccountController.collectionlistparticullar)
router.post('/stafftransationlist', adminaccountController.stafftransationlist)
router.post('/transationcreate',adminaccountController.transationhistroy)
router.get('/getcategory',adminaccountController.getcategory)
module.exports = router;



