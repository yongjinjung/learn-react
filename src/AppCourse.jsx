import './AppCourse.css'

// import {useState} from 'react'
import { useImmer } from 'use-immer';
import CourseListCard from './components/course/CourseListCard'
import CourseForm from './components/course/CourseForm';
function App() {
  const [items, updateItems] = useImmer([
    {
      id: crypto.randomUUID(),
      title:'입문자를 위한, HTML&CSS 웹 개발 입문',
		  descript:'웹 개발에 필요한 기본 지식을 배웁니다.',
		  thumbnail: '/imgs/htmlcss.jpg',
      isFavorite: true, 
      link: 'https://inf.run/JxyyT'
    },
    {
      id: crypto.randomUUID(),
      title:'입문자를 위한, ES6+ 최신 자바스크립트 입문',
      descript:'쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/imgs/js.jpeg',
      isFavorite: false,
      link: 'https://inf.run/Kpnd'

    },
    {
      id: crypto.randomUUID(),
      title:'포트폴리오 사이트 만들고 배포까지222!',
      descript:'포트폴리오 사이트를 만들고 배표해 보세요.',
      thumbnail: '/imgs/portfolio.jpeg',
      isFavorite: true,
      link: 'https://inf.run/YkAN'
    }
  ]);

  const handleFavoriteChange = (id, isFavorite) => {
    updateItems(draft => {
        const targetItem = draft.find(item => item.id === id);
        targetItem.isFavorite = isFavorite;
    });
    // const newItems = items.map(item => {
    //                             if(item.id === id){
    //                               return {
    //                                 ...item,
    //                                 isFavorite, 
    //                               }
    //                             }
    //                             return item;
    //                           })

    // setItems(newItems);
  }


  const favoriteItems = items.filter(item => item.isFavorite);

  return (
    <>
    <main style={{flexDirection: 'column', gap: '1rem'}}>
      <CourseForm />
      <CourseListCard title="강의 목록" items={items} onFavorite={handleFavoriteChange} />
      {/* <CourseListCard title="관심 목록" items={favoriteItems} /> */}
    </main>
    </>
  )
}

export default App
