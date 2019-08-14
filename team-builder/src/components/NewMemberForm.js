import React, { useState } from"react";

const NewMemberForm = props => {
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:"",
        funFact:"",
        idunno:"hello"
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
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                name="name"
                placeholder="John Doe"
                value={member.name}
                onChange={catergoryHandler}
            />
            <label htmlFor="email">email</label>
            <textarea 
            name="email"
            placeholder="johndoe@example.com"
            value={member.email}
            onChange={catergoryHandler}
            />
            <label htmlFor="role">role</label>
            <textarea 
            name="role"
            placeholder="CEO"
            value={member.role}
            onChange={catergoryHandler}
            />
            <label htmlFor="funFact">Fun Fact</label>
            <textarea 
            name="funFact"
            placeholder="coding, swimming, etc"
            value={member.funFact}
            onChange={catergoryHandler}

            />
            <label htmlFor="idunno">testing</label>
            <select 
            name="idunno" 
            value={member.idunno} 
            onChange={catergoryHandler}>
                <option>barbara</option>
                <option>hello</option>
            </select>
        </form>
    )
};

export default NewMemberForm;