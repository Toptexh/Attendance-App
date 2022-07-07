const Admin  = require('../model/admin')
const connectDB = require('../config/db')
const bcrypt = require('bcrypt')


connectDB()

const admin = new Admin({
    name: 'Luke Filibus',
    email: 'admin.attendance@gmail.com',
    password: bcrypt.hashSync('password', 10)
})

const seeder  = async() =>{
    try {
        await Admin.deleteMany()
        await Admin.insertMany(admin)
        .then(admin =>{
         console.log('admin seeded successfully');
        })
     } catch (error) {
         throw new Error('Admin seeding failed')
     }
}
seeder()