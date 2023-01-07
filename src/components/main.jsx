import styles from "./main.module.css";
import data from "../data.json";
import repos from "../repos.json";
const Main = () => {
  function codeCounter(x) {
    const dataCount = data
      .filter((item) => item.language === x)
      .map((item) => item.linesOfCode)
      .reduce((a, b) => a + b, 0);
    return dataCount;
  }

  const reposList = repos.map((item) => item.name);
  console.log(reposList);
  return (
    <main>
      <h1 className={styles.heading}>Lines of code count</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>HTML</th>
              <th>CSS</th>
              <th>Vanilla Javascript</th>
              <th>React</th>
              <th>NextJS</th>
              <th>Typescript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{codeCounter("HTML")}</td>
              <td>{codeCounter("CSS")}</td>
              <td>{codeCounter("JavaScript")}</td>
              <td>{codeCounter("JSX")}</td>
              <td>{codeCounter("Next")}</td>
              <td>{codeCounter("TypeScript")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      ;
    </main>
  );
};

export default Main;
