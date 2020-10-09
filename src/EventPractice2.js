import React, { useState } from 'react';

const EventPractice = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setUsername(e.target.value);
  const [form, setForm] = useState({
    username:'',
    message:''
  });

  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  }

  const OnClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message:''
    });
  };

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      OnClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={OnClick}> 확인
      </button>
    </div>
  );

}
export default EventPractice;
