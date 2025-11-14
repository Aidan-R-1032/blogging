const express = require('express');
const cors = require('cors');
const multer = require('multer'); // using multer for now for local storage of media
const data = require("./data"); 

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + file.originalname;
        cb(null, unique);
    }
})

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image and video files are allowed!"));
    }
  },
});



app.get('/posts', async (req, res) => {
    let posts = await data.getAllPosts();
    res.status(200).send(posts);
});

app.post('/posts/submit_post', upload.single("media_url"), async (req, res) => {
    try {
        const { user_id, body_text} = req.body;
        const media_url = req.file ? `/uploads/${req.file.filename}` : null;

        const post_data = {
            user_id: user_id,
            body_text: body_text,
            media_url: media_url
        }

        const newPostID = await data.addPost(post_data);
        const newPost = await data.getPostByID(newPostID.insertId);

        res.status(201).json(newPost);
    }
    catch(err) {
        console.error("Error in /posts/submit_post:", err);
        res.status(500).json({message: err.message || "Internal Server Error"});
    }
});

app.delete('/posts/delete_post', async(req, res) => {
    try {
      const {post_id} = req.body;
      const result = await data.deletePostByID(post_id);
      
      if (result.affectedRows > 0) {
        return res.status(200).json({ message: "Post deleted successfully" });
      } 
      else {
        return res.status(404).json({ message: "Post not found" });
      }
    }
    
    catch(err) {
      console.error("Error in /posts/delete_post:", err);
      res.status(500).json({message: err.message || "Internal Server Error"});
    }
})

app.put("/posts/edit_post", upload.single("media_url"), async (req, res) => {
  try {
    const {post_id, body_text} = req.body;
    
    if (!post_id) {
      return res.status(400).json({message: "post_id is required "})
    }

    const media_url = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedPost = await data.updatePostById(post_id, {body_text, media_url});

    if (!updatedPost){
      return res.status(404).json({message: "Post not found or nothing to update"})
    }

    res.status(200).json(updatedPost);
  }
  catch (err) {
    console.error("Error in /posts/edit_post:", err);
    res.status(500).json({message: err.message || "Internal Server Error"})
  }
})

app.listen(5000, () => console.log('Backend running on port 5000'));