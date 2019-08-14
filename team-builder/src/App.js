import React, { useState } from 'react';
import './App.css';

import teamMembers from './teamMembers';
import TeamMemberCard from "./components/TeamMemberCard";

function App() {
  const [teamMember, setTeamMember] = useState(teamMembers)
      
  const addNewMember = member =>{
    setTeamMember([...teamMember, member]);
  }
  console.log(teamMember)
  return (
    <div className="App">
    <h1>The Team</h1>
    <TeamMemberCard team={teamMember}/>
    </div>
  );
}

export default App;
