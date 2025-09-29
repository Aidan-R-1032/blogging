import PostContainer from "./PostContainer"
import PostForm from "./PostForm"
import TagNav from "./TagNav";

import { useState } from "react";

const mainStyle = {
  // 'display' : 'flex'
  'padding' : '1rem'
}

function Homepage() {
  const [selectedTag, setSelectedTag] = useState('all');

  return (
      <main style={mainStyle}>
        <section>
          <PostForm />
          <PostContainer selectedTag={selectedTag}/>
        </section>
        <section>
          <TagNav onTagSelect={setSelectedTag} selectedTag={selectedTag}/>
        </section>
      </main>
  )
}

export default Homepage;