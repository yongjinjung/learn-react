//import { useState } from 'react';
import { useImmer } from 'use-immer';
import Card from '../Card';

export default function CourseForm(props) {
  const [form, updateForm] = useImmer({
    title: '리액트 강의',
    description: '리액트 기초 부터 실전까지!',
    info: {
      level: 1,
      skill: 'React',
    },
  });

  function handleCourseForm(e) {
    e.preventDefault();
  }

  const handleTitleChange = e => {
    updateForm({
      ...form,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = e => {
    updateForm({
      ...form,
      description: e.target.value,
    });
  };

  const handleFormChange = e => {
    updateForm(data => {
      data[e.target.name] = e.target.value;
    });

    // setForm({
    //     ...form,
    //     [e.target.name] : e.target.value,
    // });
  };

  const handleSkill = e => {
    updateForm(data => {
      data.info.skill = e.target.value;
    });

    // setForm(
    //   {...form, info: {...form.info, skill: e.target.value}}
    // )
  };

  const handleLevelChange = e => {
    updateForm(data => {
      data.info.level = e.target.value;
    });

    // setForm(
    //   {...form, info: {...form.info, level: e.target.value}}
    // )
  };

  return (
    <Card title="강의 등록">
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        onSubmit={handleCourseForm}
      >
        <input
          type="text"
          name="title"
          placeholder="강의 제목"
          value={form.title}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="description"
          placeholder="강의 한줄 설명"
          defaultValue={form.description}
          onChange={handleFormChange}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="skill" style={{ width: '100px' }}>
            스킬
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            value={form.info.skill}
            onChange={handleSkill}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="level" style={{ width: '100px' }}>
            레벨
          </label>
          <select
            name="level"
            id="level"
            value={form.info.level}
            onChange={handleLevelChange}
          >
            <option value="0">입문</option>
            <option value="1">초급</option>
            <option value="2">중급</option>
          </select>
        </div>
        <input type="submit" value="등록" />
        {(form.title || form.description) && (
          <div
            style={{
              marginTop: '15px',
              padding: '12px 20px',
              backgroundColor: '#eee',
              borderRadius: '6px',
            }}
          >
            {form.title && <p>제목 - {form.title}</p>}
            {form.description && <p>설명 - {form.description}</p>}
            {form.info.skill && <p>스킬 - {form.info.skill}</p>}
            {form.info.level && <p>레벨 - {form.info.level}</p>}
          </div>
        )}
      </form>
    </Card>
  );
}
