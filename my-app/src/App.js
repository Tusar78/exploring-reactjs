import "./App.css";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import Mobile from "./Components/Mobile/Mobile";
import Todo from "./Components/Todo/Todo";

function App() {
  const headings = [
    {title: 'This is heading one', id: 1, author: 'Tusar'},
    {title: 'This is heading two', id: 2, author: 'Rakib'},
    {title: 'This is heading three', id: 3, author: 'Sharif'},
  ]
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="section container">
          {
            headings.map(heading => {
              return <Blog key={heading.id} heading={heading.title} author={heading.author}></Blog>
            })
          }

          <Mobile></Mobile>
          <Todo></Todo>
        </section>
      </main>
    </>
  );
}

export default App;
