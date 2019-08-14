import React from "react";

const TeamMemberCard = props => {
    console.log(props);
    return(
        <div>
            {props.team.map(member =>{
                return(
                    <div className="member" key="{member.id}">
                        <h2>{member.name}</h2>
                        <h4>{member.email}</h4>
                        <h4>{member.role}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamMemberCard;