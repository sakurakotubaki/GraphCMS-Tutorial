import "./App.css";
import { gql, useQuery } from "@apollo/client";

const Todos = gql`
# GraphCMSで実行したQueryを書く
  query MyQuery {
    todos {
      id
      title
      date
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(Todos);
  console.log(data);
  console.log(loading);
  // loading処理
  if (loading) return "ロード中・・・";
  // エラー処理
  if (error) return `エラー！ ${error.message}`;

  //JSON化することで文字列として出力できる。JSON化しないとオブジェクトの状態だからHTMLとして出力されない。
  return (
    <>
      <h1>GraphQLとReact</h1>

      <div className="TodosContainer">
        {/* {JSON.stringify(data)} */}
        {data.todos.map((todo) => (
          <div key={todo.id}>
            <div className="todoCard">
              <p>{todo.title}</p>
              <p>{todo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
