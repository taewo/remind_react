import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Memo1 from './Memo1/Memo1';

const App = () => (
  <Router>
    <div>
      <Header />
      <Memo1 />
    </div>
  </Router>
);

const Home = () => <h2>Remind React.js</h2>;
// const Topics = ({ match }) => {
//   console.log('ttt',match)
//   return (
//   <div>
//     <h2>Topics</h2>
//
//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.path}/:nick`} component={Topic} />
//
//     <Route path={`${match.path}/:id1`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic. {match.path}</h3>}
//     />
//   </div>
// )};
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/memo1">Memo1</Link>
    </li>
  </ul>
);

export default App;
