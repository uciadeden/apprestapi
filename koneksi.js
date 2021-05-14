var mysql = require("mysql");


//buat koneksi database
const koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});


koneksi.connect((err) => {
    if(err) throw err;
    console.log('Mysql berhasil dijalankan');
})

module.exports = koneksi;