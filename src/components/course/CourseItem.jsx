function HeartIconBtn({ onHeartClick, isFavorite = false }) {
  const imgSrc = isFavorite
    ? '/imgs/heart-fill-icon.svg'
    : '/imgs/heart-icon.svg';

  return (
    <button className="btn" onClick={onHeartClick}>
      <img className="btn__img" src={imgSrc} alt="" />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/imgs/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({
  onFavorite,
  id,
  title,
  descript,
  thumbnail,
  isFavorite,
  link,
}) {
  const isEmpty = false;
  if (isEmpty) {
    return <p>현재 진행중인 강의가 없습니다.</p>;
  }

  const course = {
    alt: '웹 개발에 필요한 기본 지식을 배웁니다.',
  };

  function handleFavorite(e) {
    e.stopPropagation();
    onFavorite(id, !isFavorite);
  }

  function handleItemClick(e) {
    //e.stopPropagation();
    open(link, '_blank');
  }

  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt={course.alt} />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{descript}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
