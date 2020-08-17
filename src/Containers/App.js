import React from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    onSearchChange = event =>
    {
        this.setState({searchfield: event.target.value});
        
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(users =>{
            this.setState({robots: users});
        });
    }

    render()
    {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return robots.length === 0 ? 
        (
            <h1>Loading</h1>
        ) 
        :
        (
            <div className='tc'>
                <h1 className='f1 '>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    
    
    }
}



export default App