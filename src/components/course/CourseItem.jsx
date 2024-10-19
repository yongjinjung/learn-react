
export default function CourseItem({title, descript, thumbnail}){

  const isEmpty = false;
  if(isEmpty)
  {
    return (<p>강의가 없습니다.</p>)
  }

  const course = {
    alt: '웹 개발에 필요한 기본 지식을 배웁니다.',

  }

  return (
      <article className="course">
        <img className="course__img" src={thumbnail} alt={course.alt} />
        <div className="course__body">
          <div className="course__title">{title}</div>
          <div className="course__description">{descript}</div>
        </div>
        <div className="course__icons">
          <button className="btn">
            <img className="icon-heart" src="/imgs/heart-icon.svg" alt="" />
            <img className="icon-heart" src="/imgs/heart-fill-icon.svg" alt="" />
          </button>
        </div>
      </article>
  );
}
