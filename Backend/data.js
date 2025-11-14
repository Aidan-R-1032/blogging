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

async function updatePostById(id, updatedData) {
    const fields = [];
    const values = [];

    if (updatedData.body_text !== undefined) {
        fields.push("body_text = ?");
        values.push(updatedData.body_text);
    }

    if (updatedData.media_url !== undefined) {
        fields.push("media_url = ?");
        values.push(updatedData.media_url);
    }

    if (fields.length === 0) {
        return null;
    }

    values.push(id);

    const query = `UPDATE posts SET ${fields.join(", ")} WHERE ID = ?`;

    const [result] = await connPool.query(query, values);
    
    if (result.affectedRows === 0) {
        return null
    }

    const updatedPost = await getPostByID(id);
    return updatedPost;
}

module.exports = {
    getAllPosts,
    getPostByID,
    addPost,
    deletePostByID,
    updatePostById
};
