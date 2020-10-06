import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import visualLogo from './../img/visual.png';

const theme = {
    background: '#fff',
    fontFamily: 'Arial',
    headerBgColor: '#135F8A',
    headerFontColor: '#fff',
    headerFontSize: '24px',
    botBubbleColor: '#fff',
    botFontColor: '#000',
    userBubbleColor: '#135F8A',
    userFontColor: '#fff',
};

const ChatbotComponent = () => {
    const [botAvatar, setBotAvatar] = useState(visualLogo)
    const handleEnd = ({ steps, values }) => {
        // console.log(steps);
        // console.log(values);
        alert(`Chat handleEnd callback! Number: ${values[0]}`);
    }

    return(
        <ThemeProvider theme={theme}>
            <ChatBot
                botAvatar={botAvatar}
                cache={false}
                cacheName={'visual-bot'}
                handleEnd={handleEnd}
                enableMobileAutoFocus={true}
                enableSmoothScroll={true}
                floating={true}
                headerTitle={'VisualBot'}
                placeholder={'Digite aqui sua mensagem'}
                recognitionEnable={true}
                recognitionLang={'pt-br'}
                recognitionPlaceholder={'escutando...'}
                steps={[
                    {
                        id: '1',
                        message: 'Olá. Qual o seu nome?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Olá {previousValue}, prazer em conhecê-lo!',
                        trigger: '4'
                    },
                    {
                        id: '4',
                        message: 'Qual número eu estou pensando?',
                        trigger: '5',
                    },
                    {
                        id: '5',
                        options: [
                            { value: 1, label: 'Número 1', trigger: '7' },
                            { value: 2, label: 'Número 2', trigger: '6' },
                            { value: 3, label: 'Número 3', trigger: '6' },
                        ],
                        placeholder: 'Escolha uma opção',
                        hideInput: false
                    },
                    {
                        id: '6',
                        message: 'Resposta errada, tente novamente.',
                        trigger: '5',
                    },
                    {
                        id: '7',
                        message: 'Que demais! Você é um verdadeiro telapata!',
                        end: true,
                    },
                ]}
            />
        </ThemeProvider>
    )
}

export default ChatbotComponent;