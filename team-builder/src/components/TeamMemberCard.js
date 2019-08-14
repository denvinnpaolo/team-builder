import React from "react";

const TeamMemberCard = props => {
    console.log(props);
    return(
        <div className="allMembers">
            {props.team.map(member =>{
                return(
                    <div className="member" key="{member.id}">
                        {console.log(member)}
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <h4>{member.role}</h4>
                        <h4>{member.funFact}</h4>
                        <h4>{member.idunno}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamMemberCard;