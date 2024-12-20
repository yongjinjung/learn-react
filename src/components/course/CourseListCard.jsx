import Card from '../Card';
import CourseItem from './CourseItem';
import { Fragment } from 'react';

export default function CourseListCard({ onFavorite, title, items }) {
  const lastItem = items.length - 1;

  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} onFavorite={onFavorite} />
            {index !== lastItem && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
