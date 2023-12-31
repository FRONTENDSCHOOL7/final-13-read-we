import React, { useState } from 'react';
import styles from './chatting.module.css';

const Chatting = () => {
  const [activeChat, setActiveChat] = useState(1); // 기본으로 Profile 1 선택

  const chatRooms = [
    {
      id: 1,
      profileImage: process.env.PUBLIC_URL + '/images/profile-1.jpeg',
      nickname: '개발할 고양',
      messages: [
        { content: '안냥하세요! 🐈', type: 'received' },
        { content: '안녕하세요.', type: 'sent' },
      ],
      lastTime: '23.11.08',
    },
    {
      id: 2,
      profileImage: process.env.PUBLIC_URL + '/images/profile-2.jpeg',
      nickname: '개발할 담곰',
      messages: [
        { content: '안곰하세요! 🐻', type: 'received' },
        { content: '안녕하세요 반가워요!', type: 'sent' },
      ],
      lastTime: '23.11.07',
    },
    {
      id: 3,
      profileImage: process.env.PUBLIC_URL + '/images/profile-3.jpeg',
      nickname: '개발할 멍멍',
      messages: [
        { content: '안멍하세요! 🐶', type: 'received' },
        { content: '안녕하세요.', type: 'sent' },
      ],
      lastTime: '23.11.06',
    },
  ];

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
  };

  return (
    <div className={styles['container-box']}>
      <h1>채팅</h1>
      <div className={styles.container}>
        <div className={styles['chatting-list']}>
          <div className={styles['chat-rooms']}>
            {chatRooms.map((chatRoom) => (
              <div
                key={chatRoom.id}
                className={`${styles['chat-room']}
                ${activeChat === chatRoom.id ? 'active' : ''}`}
                onClick={() => handleChatSelect(chatRoom.id)}
              >
                <div className={styles['profile-image-small']}>
                  <img src={chatRoom.profileImage} alt="Profile" />
                </div>
                <div className={styles['user-info']}>
                  <p>{chatRoom.nickname}</p>
                  <p>{chatRoom.messages[0].content}</p>
                </div>
                <p className={styles['last-time']}>{chatRoom.lastTime}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['chatting-container']}>
          <div className={styles['chatting-header']}>
            <img
              src={
                chatRooms.find((room) => room.id === activeChat)?.profileImage
              }
              alt="Profile"
              className={styles['profile-image']}
            />
            <h2>
              {chatRooms.find((room) => room.id === activeChat)?.nickname}
            </h2>
          </div>
          <div className={styles['chatting-body']}>
            {chatRooms
              .find((room) => room.id === activeChat)
              ?.messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${styles[message.type]}`}
                >
                  <p>{message.content}</p>
                  <p className={styles['message-time']}>07:30 AM</p>
                </div>
              ))}
          </div>
          <div className={styles['chatting-footer']}>
            <div className={styles['input-container']}>
              <input type="text" placeholder="메시지를 입력하세요." />
              {/* 이미지 찾을수 없어서 임시로 주석 처리 */}
              {/* <img src="attachment_icon_url" alt="Attachment" /> */}
            </div>
            <button className={styles['send-button']}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
