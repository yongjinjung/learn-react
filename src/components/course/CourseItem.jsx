
export default function CourseItem(props){

  const isEmpty = false;
  if(isEmpty)
  {
    return (<p>강의가 없습니다.</p>)
  }

  const course = {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    descript: '웹 개발에 필요한 기본 지식을 배웁니다.',
    image: './img/htmlcss.png',
    alt: '웹 개발에 필요한 기본 지식을 배웁니다.',

  }

  return (
      <article className="course">
        <img className="course__img" src={course.image} alt={course.alt} />
        <div className="course__body">
          <div className="course__title">{course.title}</div>
          <div className="course__description">{course.descript}</div>
        </div>
      </article>
  );
}
