[
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
]