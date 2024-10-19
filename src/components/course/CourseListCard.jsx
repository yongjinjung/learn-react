import Card from '../Card'
import CourseItem from './CourseItem';


export default function CourseListCard({items}) {


	const [course1, course2, course3] = items;



  return (
		// style={{ backgroundColor: 'black', color: 'white'}}

		<>
		<Card title="강의 목록">
			<div className="courses">
					<CourseItem {...course1}/>
					<CourseItem {...course2}/>
					<CourseItem {...course3}/>
			</div>
		</Card>
		
    {/* <div className="card" >
			<div className="card__header">강의 목록</div>
			<div className="card__body">
				<div className="courses">
					<CourseItem 
						{...course1}
						/>
<					CourseItem 
						title={course2.title}
						descript={course2.descript}
						thumbnail={course2.thumbnail}
						/>
					<CourseItem 
						title={course3.title}
						descript={course3.descript}
						thumbnail={course3.thumbnail}
						/>
				</div>
			</div>
		</div> */}

		</>
  );
}
	