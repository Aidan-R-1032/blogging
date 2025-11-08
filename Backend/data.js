const mysql = require('mysql2');

const connPool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    user: 'root',
    password: 'localpassword02ZA',
    database: 'social_app'
}).promise();

async function getAllPosts(){
    const [rows] = await connPool.query(
        'SELECT * FROM posts ORDER BY created_at DESC'
    );
    return rows;
}

async function getPostByID(id){
    const [rows] = await connPool.query('SELECT * FROM posts WHERE id=?',[id]);
    return rows[0];
}

async function addPost(data){
    const sql = 'INSERT INTO posts (user_id, body_text, media_url) VALUES (?, ?, ?)';
    const params = [data.user_id, data.body_text, data.media_url];
    const [res] = await connPool.query(sql, params);
    return res;
}

async function deletePostByID(id){
    const [result] = await connPool.query('DELETE FROM posts WHERE id=?', [id]);
    return result;
}

module.exports = {
    getAllPosts,
    getPostByID,
    addPost,
    deletePostByID
};
