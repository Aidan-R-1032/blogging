import './App.css';
// import Post from './components/Post';
import PostContainer from './components/PostContainer'
import PostForm from './components/PostForm'

function App() {
  return (
    // <div className='post-container'>
    //   <Post title="My First Post" body="Hello World!" />
    //   <Post title="My Second Post" body="Anyone there?!?" />
    //   <Post title="My Third Post" body="It's a little lonely over here" />      
    // </div>
    <main>
      <section>
        <PostForm />
      </section>
      <section>
        <PostContainer />
      </section>
    </main>
  );
}

export default App;
