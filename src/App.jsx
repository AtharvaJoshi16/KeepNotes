import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './footer';
import CreateNote from './CreateNote';
import Note from './Note';
import firedb from './config';
const App = (props) =>{
    const [addItem,setAddItem]=useState([]);
    
    useEffect(()=>{
        //console.log(props.user1)
        const reference = firedb.database().ref(`${props.user1}/keepNotes`);
            reference.on('value',(notes)=>{
            let notesArr=[]
            const data= notes.val()
            for (let id1 in data){
                notesArr.push({id1,...data[id1]})
            }
            setAddItem(()=>{
                return [...notesArr]
            })
        })
    },[])
    
    const addNote = (note) =>{
        setAddItem((prevData)=>{
            return [...prevData, note]
        });
    };
const onDelete = (id) =>{
    setAddItem((prevData) => 
    prevData.filter((currData,idx) =>{
        return idx!==id;
    })
    )
    const refe= firedb.database().ref(`${props.user1}/keepNotes`)
    refe.child(addItem[id]['id1']).remove()
};
    return (
        <>
        <Header user1={props.user1} userPhoto={props.userPhoto}/>
        <CreateNote user1={props.user1}/>
        {addItem.map((val,index)=>{
            return <Note
                array={addItem}
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                />
            
        })}
        <Footer />
        
        </>
    )
};

export default App;
