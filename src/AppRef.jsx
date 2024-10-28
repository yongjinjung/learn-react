import { useEffect, useRef, useState } from 'react';

// let counter = 0;

function ButtonCounter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log('✅ 리렌더링!');

  const handleClick = e => {
    // console.log(countRef);
    console.log('countRef', (countRef.current += 1));
    // counter++;
    // console.log('counter : ', counter);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count</button>;
}

function Form() {
  const [form, setForm] = useState({
    title: '제목',
    author: '',
    content: '',
  });
  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleForm = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('DOM', titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
    console.log('✅ 저장 성공~!');
  };

  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  const [isChanged, setIsChanged] = useState(true);
  const prevForm = useRef(null);

  useEffect(() => {
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    if (!form.title) {
      return;
    }
    if (!form.author) {
      return;
    }
    if (!form.content) {
      return;
    }
    setIsChanged(false);

    return () => {
      setIsChanged(true);
    };
  }, [form]);

  // useEffect(() => {
  //   const hasChanged = (prevForm.current.title !== form.title ||
  //                       prevForm.current.author !== form.author ||
  //                       prevForm.current.content !== form.content
  //                      );
  // }, [form]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          type="text"
          name="title"
          placeholder="제목"
          ref={titleInputRef}
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          ref={authorInputRef}
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          type="text"
          name="content"
          placeholder="내용"
          ref={contentTextareaRef}
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button disabled={isChanged}>전송</button>
      </fieldset>
    </form>
  );
}

export default function AppRef(props) {
  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <Form></Form>
    </>
  );
}
