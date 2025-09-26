import PostContainer from "./PostContainer"
import PostForm from "./PostForm"

function Homepage() {
    return (
        <main>
          <section>
            <PostForm />
          </section>
          <section>
            <PostContainer />
          </section>
        </main>
    )
}

export default Homepage;