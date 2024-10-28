import React, { Fragment, useEffect, useState } from 'react';

function Courses(props) {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    //const jsonData = filter === 'all'? 'courses_all.json':'courses_favorite.json';
    fetch(`data/courses_${filter}.json`)
      .then(res => res.json())
      .then(data => {
        console.log('👍😁데이터 조회 성공');
        setList(data);
      });

    return () => {
      console.log('😒 연결 해제 ~!');
    };
  }, [filter]);

  return (
    <Fragment>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={e => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

function AppEffect(props) {
  // 1] DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector('#title');
  //   $h2.textContent = 'Data Fetching';
  // }, []);
  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기기</h2>
      <button
        onClick={e => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      <hr />
      {show && <Courses />}
    </>
  );
}

export default AppEffect;
