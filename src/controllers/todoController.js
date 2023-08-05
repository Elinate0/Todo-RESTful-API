const todo = require('../models/todomodel.js')

const todoAdd = async (req, res) => {
    console.log(req.body)
    try{
        const _todo = await todo.findOne({name: req.body.name})
        if (_todo){
            return res.status(400).json({
                success: false,
                message: 'Name already exists'
            })
        }
        
        const todoAdd = new todo(req.body)
        await todoAdd.save()
            .then(()=>{
                return res.status(201).json(todoAdd)
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    message: "Kayıt oluşturulurken hata oluştu: " +err
                })
            })
    } catch(err){
        return res.status(400).json({
            success: false,
            message: "Kayıt oluşturulamadı!"
        })
    }
    console.log("todoAdd içerisinde")
}

const todoGet = async (req, res) =>{
    const { id } = req.params
    console.log(id)
    try{
        const todoGet = await todo.findById(id)
        if (todoGet){
            return res.status(200).json({
                success: true,
                data:todoGet
            })
        }
        else{
            return res.status(400).json({
                success: false,
                message: "Kayıt getirilemedi"
            })
        }
    } catch(err){
        return res.status(500).json({
            success: false,
            message: "Kayıt getirilemedi error: " + err
        })
    }
}

const todoGetAll = async (req, res) => {
    const { page } = req.query
    const limit = 3
    const skip = Number(page - 1) * limit
    try {
        const todoGetAll = await todo.find({}).limit(limit).skip(skip) //yüksek sayıda veri var ise belirli bir kısmını getirirken kullanılır
        return res.status(200).json({
            success: true,
            data:todoGetAll
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            message: "Kayıtlar getirilemedi error: " + err
        })
    }
}

const todoDelete = async (req, res) => {
    const { id } = req.params
    try {
        const todoDelete = await todo.findByIdAndRemove(id)
        if (todoDelete){
            return res.status(200).json({
                success: true,
                message: "Silme başarılı"
            })
        }
        else{
            return res.status(400).json({
                success: true,
                message: "Silme başarısız"
            })
        }
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Kayıt silinemedi error: " + err
        })
    }
}

const todoUpdate = async (req, res ) =>{
    const { id } = req.params
    try{
        const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
        if(todoUpdate){
            return res.status(200).json({
                success: true,
                message: "Güncelleme başarılı"
            })
        }
        else{
            return res.status(400).json({
                success: true,
                message: "Güncelleme başarısız"
            })
        }
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Kayıt güncellenemedi, error: " + err
        })
    }
}


module.exports = {
    todoAdd,
    todoGetAll,
    todoGet,
    todoDelete,
    todoUpdate
}