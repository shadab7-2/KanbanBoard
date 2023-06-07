import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Board from '../Board/Board';
import Todo from '../Board/Todo';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/board/:boardId" element={<Board />} />
        <Route path="/board/:boardId/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default Home;
