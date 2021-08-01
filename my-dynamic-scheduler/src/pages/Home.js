import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';


class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <Header />
                <NavBar />
                <div className="Home-container">
                    <h1 className= "header">This is your Planner!</h1>
                    <p>Click on the "Calendar" tab to add tasks or events to your Planner! You can also view all your events and the due date of your tasks on the Calendar.</p> 
                    <p>If something goes wrong, you can always delete any task and event by going to "Edit Tasks and Events".</p>
                    <p>When you're finished, click on "Generate your Planner" to prepare an ideal timetable for the day!</p>

                </div>
            </div>
        );
    }
}

export default Home;