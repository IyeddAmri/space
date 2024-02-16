const router= require('express').Router()
const controller=require('../controllers/education.js')



router.get("/getAll",controller.getAlledu)
router.get("/getOne/:id",controller.getOneedu)


router.post("/add",controller.createedu)
router.delete("/delete/:id",controller.deleteedu)
router.put("/update/:id",controller.updateedu)

module.exports=router