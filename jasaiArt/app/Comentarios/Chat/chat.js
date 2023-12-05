"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Pusher from "pusher-js";
import '../../css/chat.css'

const chat = () => {

    const [username, setUsername] = useState('User ' + (Math.floor(Math.random() * 1000000)));
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const pusher = new Pusher('4aba788829882b5dc967', {
            cluster: 'mt1'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function (data) {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        // Importante: limpiar el suscriptor en el componentWillUnmount
        return () => {
            pusher.unsubscribe('chat');
        };
    }, []); // Agrega una dependencia vacía para indicar que solo debe ejecutarse una vez al montar el componente

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/messages', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                message
            })
        });

        setMessage('');
    }

    return (
        <div className="chat-container"> 
            <input className="username-input" value={username} onChange={e => setUsername(e.target.value)} />

            <div className="messages-container" style={{ minHeight: "500px" }}>
                {messages.map(message => {
                    return (
                        <div>
                            <strong>{message.username}</strong>
                            <p>{message.message}</p>
                        </div>
                    )
                })}
            </div>

            <form onSubmit={submit} className="message-form">
                <input className="message-input"  value={message} onChange={e => setMessage(e.target.value)} />
            </form>
        </div>
    );
};

export default chat;