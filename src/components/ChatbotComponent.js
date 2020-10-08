import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatbotService from './../services/chatbot.service';
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
    const botAvatar = visualLogo;
    const initialStepsState = [
        {
            id: '1',
            message: 'Olá. Qual o seu nome?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            end: true
        },
    ]
    const initialMessageState = {
        content: {
            input: {},
            selection: null
        }
    }

    const [steps, setSteps] = useState(initialStepsState);
    const [message, setMessage] = useState(initialMessageState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const oldSteps = steps;
        const newStep = {
            id: '3',
            message: 'Olá. Qual o seu nome? 2',
            trigger: '4'
        }
        const newStep2 = {
            id: '4',
            user: true,
        }

        oldSteps[oldSteps.length - 1].end = false;
        oldSteps[oldSteps.length - 1].trigger =  '3';
        oldSteps.push(newStep, newStep2)

        let teste = { ...steps, newStep }
        console.log(teste)

        setSteps(oldSteps);

        console.log(steps)
    };

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setMessage({ ...message, [name]: value });
    // };

    // const saveTutorial = () => {
    //     let data = {
    //         title: tutorial.title,
    //         description: tutorial.description
    //     };

    //     ChatbotService.newMessage(data)
    //         .then(response => {
    //         setTutorial({
    //             id: response.data.id,
    //             title: response.data.title,
    //             description: response.data.description,
    //             published: response.data.published
    //         });
    //         setSubmitted(true);
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         }
    //     );
    // };

    // const newTutorial = () => {
    //     setTutorial(initialTutorialState);
    //     setSubmitted(false);
    // };

    const handleEnd = ({ steps, values }) => {
        // console.log(steps);
        // console.log(values);
        alert(`Chat handleEnd callback! Number: ${values[0]}`);
        handleInputChange()
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
                steps={steps}
            />
        </ThemeProvider>
    )
}

export default ChatbotComponent;