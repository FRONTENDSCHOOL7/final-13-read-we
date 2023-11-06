import React, { useState } from 'react';
import './chatting.css';

const Chatting = () => {
  const [activeChat, setActiveChat] = useState(1); // 기본으로 Profile 1 선택

  const chatRooms = [
    {
      id: 1,
      profileImage: '/images/profile-1.jpeg',
      nickname: '개발할 고양',
      messages: [
        { content: '안냥하세요! 🐈', type: 'received' },
        { content: '안녕하세요.', type: 'sent' },
      ],
      lastTime: '23.11.08',
    },
    {
      id: 2,
      profileImage: '/images/profile-2.jpeg',
      nickname: '개발할 담곰',
      messages: [
        { content: '안곰하세요! 🐻', type: 'received' },
        { content: '안녕하세요 반가워요!', type: 'sent' },
      ],
      lastTime: '23.11.07',
    },
    {
      id: 3,
      profileImage: '/images/profile-3.jpeg',
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
    <div className="container-box">
      <h1>채팅</h1>
      <div className="container">
        <div className="chatting-list">
          <div className="chat-rooms">
            {chatRooms.map((chatRoom) => (
              <div
                key={chatRoom.id}
                className={`chat-room 
                ${activeChat === chatRoom.id ? 'active' : ''}`}
                onClick={() => handleChatSelect(chatRoom.id)}
              >
                <div className="profile-image-small">
                  <img src={chatRoom.profileImage} alt="Profile" />
                </div>
                <div className="user-info">
                  <p>{chatRoom.nickname}</p>
                  <p>{chatRoom.messages[0].content}</p>
                </div>
                <p className="last-time">{chatRoom.lastTime}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="chatting-container">
          <div className="chatting-header">
            <img
              src={
                chatRooms.find((room) => room.id === activeChat)?.profileImage
              }
              alt="Profile"
              className="profile-image"
            />
            <h2>
              {chatRooms.find((room) => room.id === activeChat)?.nickname}
            </h2>
          </div>
          <div className="chatting-body">
            {chatRooms
              .find((room) => room.id === activeChat)
              ?.messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <p>{message.content}</p>
                  <p className="message-time">07:30 AM</p>
                </div>
              ))}
          </div>
          <div className="chatting-footer">
            <div className="input-container">
              <input type="text" placeholder="메시지를 입력하세요." />
              <img src="attachment_icon_url" alt="Attachment" />
            </div>
            <button className="send-button">send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
