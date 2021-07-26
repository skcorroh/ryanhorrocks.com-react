// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GlobalHeader from './components/global/header';
import PersonalInfo from './components/global/PersonalInfoSidebar/personalInfo';
import RoutesList from './helpers/routes';
import NavItem from './components/global/NavItem';

function App() {
  return (
    <section className="App uk-section">
      <div className="uk-container">
        <div className="" uk-grid="" >
          <aside className="uk-width-medium uk-visible@m">
            <div className="">
              <PersonalInfo />
            </div>
            <div className="sidebar-mt">

              {RoutesList.map(route => {
                if (route?.subpages && route.subpages.length > 0) {

                  return (
                    <Route key={route.label} exact={route.activeOnlyWhenExact} path={route.to}>
                      <div className="uk-card uk-card-small uk-card-default">
                        <div className="uk-card-header">
                          <h3 className="uk-card-title">{route.label}</h3>
                        </div>
                        <div className="uk-card-body">
                          <div>
                            <ul className="uk-nav uk-nav-default">
                              {route.subpages.map(subpage => <NavItem key={"sub" + subpage.label} to={route.to + subpage.to} label={subpage.label} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Route>
                  );
                }
                return null;
              })}
            </div>
          </aside>
          <div className="uk-width-expand">
            <div className="uk-child-width" uk-grid="">
              <div>
                <GlobalHeader />
              </div>
              <main>

                <Switch>
                  {
                    RoutesList.map(route => {
                      return (
                        <Route key={route.label} exact={route.activeOnlyWhenExact} path={route.to}>
                          <route.page {...route} />
                        </Route>
                      );
                    })
                  }
                  <Route>
                    <div className="uk-card uk-card-small uk-card-default uk-card-body">
                      <h1>This is technically a 404</h1>
                    </div>
                  </Route>
                </Switch>

              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
