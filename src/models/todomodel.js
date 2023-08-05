const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // baştaki ve sondaki boşlukları siler örnek bundan " yazısı " buna dönüşür "yazısı" 
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false  // eğer değer gönderilmezse false olarak gider
    }
},{
    collection: "Todo", timestamp: true
})

const todo = mongoose.model("Todo", todoSchema)

// Şema tanımlandıktan sonra, Todo adında bir Mongoose modeli oluşturulur. Model, veritabanındaki belirli bir koleksiyon ile ilişkilendirilir. Bu durumda koleksiyon adı "Todo" olarak belirlenmiştir. Ayrıca, timestamp: true seçeneği belirtilerek, her belge için oluşturma ve güncelleme tarihlerini otomatik olarak tutmak için zaman damgaları eklenir.

module.exports = todo