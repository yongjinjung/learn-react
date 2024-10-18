import CourseItem from './CourseItem';


export default function CourseListCard() {
  return (
    <div className="card" style={{ backgroundColor: 'black', color: 'white'}}>
			<div className="card__header">강의 목록</div>
			<div className="card__body">
				<div className="courses" style={{backgroundColor: '#9e9e9e'}}>
					<CourseItem title="강의가 없다잉!"/>
          <CourseItem title="강의가 없다잉!"/>
          <CourseItem title="강의가 없다잉!"/>
				</div>
			</div>
		</div>
  );
}
