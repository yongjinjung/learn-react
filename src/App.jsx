import './App.css'
import CourseListCard from './components/course/CourseListCard'

function App() {
  const items = [
    {
      title:'입문자를 위한, HTML&CSS 웹 개발 입문',
		  descript:'웹 개발에 필요한 기본 지식을 배웁니다.',
		  thumbnail: '/imgs/htmlcss.jpg',
      isFavorite: true, 
      link: 'https://inf.run/JxyyT'
    },
    {
      title:'입문자를 위한, ES6+ 최신 자바스크립트 입문',
      descript:'쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/imgs/js.jpeg',
      isFavorite: false,
      link: 'https://inf.run/Kpnd'

    },
    {
      title:'포트폴리오 사이트 만들고 배포까지222!',
      descript:'포트폴리오 사이트를 만들고 배표해 보세요.',
      thumbnail: '/imgs/portfolio.jpeg',
      isFavorite: true,
      link: 'https://inf.run/YkAN'
    }
  ]
  return (
    <>
    <main>
      <CourseListCard items={items}/>
    </main>
    </>
  )
}

export default App
