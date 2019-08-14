import React, { useState } from"react";

const NewMemberForm = props => {
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:"",
        funFact:""
    });

    const catergoryHandler = e => {
        setMember( {...member, [e.target.name] : e.target.value} );
    };

    const submitMemberForm = e => {
        e.preventDefault();
        
        const newMember ={
            ...member,
            id:Date.now()
        };

        props.addNewMember(newMember);
    };
    return(
        <form onSubmit={submitMemberForm}>
            <input 
                type="text"
                name="name"
                placeholder="John Doe"
                value={member.name}
                onChange={catergoryHandler}

            />
        </form>
    )
};

export default NewMemberForm;