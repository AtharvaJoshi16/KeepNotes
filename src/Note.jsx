import firebase from 'firebase';
import React, { useLayoutEffect, useState } from 'react';
import firedb from './config';

const Note = (props) =>{
    const [editTitle,setEditTitle]= useState({
        title: ""
    })
    const [editContent,setEditContent]= useState({
        content: ""
    })
    const deleteNote = () =>{
        props.deleteItem(props.id);
    };

    const InpEvent = (event) =>{
        setEditTitle({
            title: event.currentTarget.textContent
        })
    };

    const InpEvent2 = (event) =>{
        setEditContent({
        content : event.currentTarget.textContent
        })
    };

    const onEdit = () =>{
        let currUser=firebase.auth().currentUser;
        //console.log(currUser.displayName)
        const refe= firebase.database().ref(`${currUser.displayName}/keepNotes`).child(props.array[props.id]['id1'])
        if (editContent.content && editTitle.title){
            refe.update({
                title: editTitle.title,
                content: editContent.content
            })
        }
        else if (editContent.content){
            refe.update({
                content: editContent.content
            })
        }
        else if (editTitle.title){
            refe.update({
                title: editTitle.title
            })
        }
        else{
            alert("Please update the data first!");
        }
    };
    return (
        <>
        <div className="maindiv">
            <div className="note">
                <h3 onInput={InpEvent} className="bordercolor" contentEditable={true} suppressContentEditableWarning="true">{props.title}</h3>
                <p onInput={InpEvent2} className="bordercolor" contentEditable={true}  suppressContentEditableWarning="true">{props.content}</p>
                <button className="edit" onClick={onEdit}>🖊️</button>
                <button className="delButton"
                onClick={deleteNote}> - </button>
            </div>
        </div>
        </>
    )
};

export default Note;