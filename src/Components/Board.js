import styles from './Board.module.css';
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';

export default function Board() {
  const [lists, setLists] = useState([]);
  const navigate= useNavigate();
  const handleNavigate = () =>{
           navigate("/dialogbox")  
  }
 
  useEffect(() => {
    const savedLists = localStorage.getItem("lists");
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addListHandler = () => {
    const newList = { id: uuidv4(), items: [] };
    setLists([...lists, newList]);
  };

  const addItemHandler = (listId, item) => {
    setLists((prevLists) => {
      const updatedLists = prevLists.map((list) => {

        if (list.id === listId) {
          const newItem = { id: uuidv4(), content: item };
            
          return { ...list, items: [...list.items, newItem] };
        }
        return list;
      });
      return updatedLists;
    });
  };
  const deleteItemHandler = (listId, itemId) => {
    setLists((prevLists) => {
      const updatedLists = prevLists.map((list) => {
        if (list.id === listId) {
          const updatedItems = list.items.filter((item) => item.id !== itemId);
          return { ...list, items: updatedItems };
        }
        return list;
      });
      return updatedLists;
    });
  };

  const deleteListHandler = (listId) => {
    setLists((prevLists) => {
      const updatedLists = prevLists.filter((list) => list.id !== listId);
      return updatedLists;
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      const sourceList = updatedLists.find((list) => list.id === source.droppableId);
      const destinationList = updatedLists.find((list) => list.id === destination.droppableId);
      const [removed] = sourceList.items.splice(source.index, 1);
      destinationList.items.splice(destination.index, 0, removed);
      return updatedLists;
    });
  };                      

  const List = ({ list }) => {
    const [data, setData] = useState("");
    const params = useParams();
    const {id} = params;
    console.log(id);
    const changeHandler = (e) => {
      setData(e.target.value);
    };

    const submitHandler = () => {
      addItemHandler(list.id, data);
      setData("");
    };

    const deleteItem = (itemId) => {
      deleteItemHandler(list.id, itemId);
    };

    return (
      <divc className={styles.list__contanier}>
        <div className={styles.input__container}> 
        <input type="text" onChange={changeHandler} value={data} />
        <button onClick={submitHandler}><AddIcon/></button>
        <button onClick={() => deleteListHandler(list.id)}><DeleteIcon/></button>
        </div>
        <div className={styles.item__container}>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <ol className={styles.listcontainer} {...provided.droppableProps} ref={provided.innerRef}>
              {list.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.item}
                    >
                      <button onClick={handleNavigate}>  {item.content}</button>
                     
                      <button onClick={() => deleteItem(item.id)}><DeleteIcon/></button>
                    </li>

                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
        </div>
      </divc>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.card__container}>
        {lists.map((list) => (
            <button className={styles.list__card} > 
          <List key={list.id} list={list} />
          </button>
        ))}
        <button className={styles.add__button} onClick={addListHandler}>Add Another List</button>
      </div>
    </DragDropContext>
  );
}
