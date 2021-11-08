import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dummy1 from "./component/Dummy1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Dummy1 text="kavinda" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
