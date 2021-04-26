import './App.css';
import AdminPanel from './components/Admin/AdminPanel';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddStation from './components/AddStation';
import AddTrain from './components/AddTrain';
import UserDashBoard from './components/UserDashboardComponent/UserDashBoard';
import SearchDashboard from './components/Search/SearchDashboard';
import BookingTrain from './components/BookingTrain';
import TicketBookingForm from './components/TicketBookingForm';
import TrainBetwStation from './components/Search/TrainBetwStation';
import DefaultPage from './components/HomeDashBoard/DefaultPage';
import TrainNumberResult from './components/TrainNumberResult';
import TrainSearchByNumber from './components/TrainSearchByNumber';
import PNRSearch from './components/PNRSearch'
import PNRSearchResult from './components/PNRSearchResult';
import TripScheduleSearch from './components/TripScheduleSearch';
import BookingTemplate from './components/BookingTemplate';

function App() {
  return (
    <div>
      <Router >
           <div className="App">
            <Switch>
                <Route path = "/" exact component={DefaultPage} ></Route>
                <Route path ="/admin"  component={AdminPanel}></Route>
                <Route path = "/user" component={UserDashBoard}></Route>
                <Route path = "/book" component={BookingTrain}></Route>
                <Route path = "/ticket/book" component = {TicketBookingForm}></Route>
                <Route path ="/train/station/add" component = {AddStation}></Route>
                <Route path ="/train/add" component={AddTrain}></Route>
                <Route path = "/train/search" component = {SearchDashboard}></Route>
                <Route path = "/train/result" component = {TrainBetwStation}></Route>
                <Route path = "/train/number/" component = {TrainNumberResult}></Route>
                <Route path = "/train/s" component = {TrainSearchByNumber}></Route>
                <Route path = "/pnr/search" component = {PNRSearch}></Route>
                <Route path = "/pnr/result" component = {PNRSearchResult}></Route>
                <Route path = "/schedule/book" component = {TripScheduleSearch}></Route>
                <Route path = "/template" component = {BookingTemplate}></Route>
            </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
