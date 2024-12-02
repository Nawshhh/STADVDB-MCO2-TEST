const mysql = require('mysql2/promise');

const master = mysql.createPool({
    host: 'ccscloud.dlsu.edu.ph',    
    user: 'server0',         
    password: '12345',
    database: 'pets',
    port: 20930,
    connectTimeout: 10000 
});

const slave1 = mysql.createPool({
    host: 'ccscloud.dlsu.edu.ph',    
    user: 'server1',         
    password: 'StrongPass123!',
    database: '',
    port: 20940,
    connectTimeout: 10000 
});

const slave2 = mysql.createPool({
    host: 'ccscloud.dlsu.edu.ph',    
    user: 'server2',         
    password: 'StrongPass123!',
    database: '',
    port: 20950,
    connectTimeout: 10000  
});

module.exports = {
    master,
    slave1,
    slave2
};