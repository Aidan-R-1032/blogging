import PostContainer from "./PostContainer"
import PostForm from "./PostForm"
import TagNav from "./TagNav";

import { useState } from "react";

const mainStyle = {
  'display' : 'flex',
  'padding' : '1rem',
  'gap' : '2rem'
}

const postAreaStyle = {
  'flex' : '3'
}

const sidebarStyle = {
  'flex' : '1',
  'borderLeft' : '1px solid #ddd',
  'paddingLeft' : '1rem'
}

function Homepage() {
  const [selectedTag, setSelectedTag] = useState('all');

  return (
      <main style={mainStyle}>
        <section style={postAreaStyle}>
          <PostForm />
          <PostContainer selectedTag={selectedTag}/>
        </section>
        <section style={sidebarStyle}>
          <TagNav onTagSelect={setSelectedTag} selectedTag={selectedTag}/>
        </section>
      </main>
  )
}

export default Homepage;