import { useState } from 'react';
import Card from '../Card';

export default function CourseForm(props){
  const [form, setForm] = useState({
    title: '리액트 강의',
    description: '리액트 기초 부터 실전까지!'
  });


  function handleCourseForm(e){
    e.preventDefault();
    
  }

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      title : e.target.value
    });
  }

  const handleDescriptionChange = (e) => {
    setForm({
      ...form,
      description : e.target.value,
    });
  }

  const handleFormChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setForm({
        ...form,
        [e.target.name] : e.target.value,
    });
  }

  return (
    <Card title="강의 등록">
      <form style={{display: 'flex', flexDirection:'column', gap: '0.5rem'}} onSubmit={handleCourseForm}>
        <input type="text" name="title" placeholder="강의 제목" value={form.title} onChange={handleFormChange}/>
        <input type="text" name="description" placeholder="강의 한줄 설명" defaultValue={form.description} onChange={handleFormChange} />
        <input type="submit" value="등록" />
        {(form.title || form.description)  && (
          <div style={{marginTop: '15px', padding:'12px 20px', backgroundColor: '#eee', borderRadius: '6px'}}>
            {form.title && (<p>제목 - {form.title}</p>)}
            {form.description && (<p>설명 - {form.description}</p>)}
          </div>
        )}
      </form>
    </Card>
  );
}
