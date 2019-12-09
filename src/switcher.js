import { Switch, Route } from 'react-router-dom'
function Switcher() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </main>
  );
}
export default Switch 