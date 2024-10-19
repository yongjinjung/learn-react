

function HeartIconBtn ({isFavorite = falseds}){
  // if(isFavorite){
  //   return (
  //   <button className="btn">
  //     <img className="icon-heart" src="/imgs/heart-fill-icon.svg" alt="" />
  //   </button>)
  // }
  //   return (
  //   <button className="btn">
  //     <img className="icon-heart" src="/imgs/heart-icon.svg" alt="" />
  //   </button>)
  
  const imgSrc = isFavorite ? "/imgs/heart-fill-icon.svg" : "/imgs/heart-icon.svg"

  return (
    <button className="btn">
      <img className="btn__img" src={imgSrc} alt=""  />
    </button>
  )

}

function LinkIconBtn({link}){
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/imgs/link-icon.svg" alt="" />
    </a>
  )
}




export default function CourseItem({title, descript, thumbnail, isFavorite, link}){

  const isEmpty = false;
  if(isEmpty)
  {
    return (<p>현재 진행중인 강의가 없습니다.</p>)
  }

  const course = 
  {
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
          <HeartIconBtn isFavorite={isFavorite}/>
          {link && <LinkIconBtn link={link} />}
        </div>
      </article>
  );
}
