const mongoose = require('mongoose');

async function getDataBase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_task_6')
            .then(() => console.log('Database connected'))
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getDataBase
}