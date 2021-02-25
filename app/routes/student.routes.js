module.exports = (app) => {
    const student = require('../controllers/student.controller.js');
    
    // Create a new student record
    app.post('/student', student.create);
 
    // Get all student record
    app.get('/student', student.getAll);
};