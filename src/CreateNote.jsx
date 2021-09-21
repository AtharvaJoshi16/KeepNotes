import React, { useEffect, useState } from 'react';
import firedb from './config';
const CreateNote = (props) =>{

    const [note,setNote]= useState({
        title: "",
        content: ""
    });

    const [expand,setExpand]= useState(false);
    const InputEvent = (event) =>{

        const {name,value} = event.target;
        setNote((prevData) =>{
            return {
                ...prevData,
                [name]: value,            
            }
        })
    };
    const addEvent = () =>{//async(e) =>{
        const {title,content} = note;
        let ref= firedb.database().ref(`${props.user1}/keepNotes`);
        if (title && content){
        firedb.database().ref(`${props.user1}/keepNotes`).push({
            title: note.title,
            content: note.content,
            })
            
        alert('Data Saved!');
        //props.passNote(note);
        setNote({
            title: '',
            content: '',
        })
        }
        else{
            alert('Enter all the data!');
        }

        
    }
    const expandIt = () =>{
        setExpand(true);
    };
    return (
        <>
        <div className="mainNote">   
                <button 
                onClick={addEvent}
                className="button1">+</button>
            <form method="POST">
                <input type="text" 
                name="title" 
                value={note.title}
                onChange={InputEvent}
                placeholder="Your title goes here" autoComplete="off"
                onClick={expandIt}
                className="input" /> &nbsp;&nbsp;&nbsp;
                <br />
                <br />
                {expand?
                <textarea 
                name="content"
                value={note.content}
                onChange={InputEvent}
                
                rows='' column='' placeholder='Write something...' className="area"/>
                :null}
                </form>
        </div>
            
        </>
    )
};

export default CreateNote;