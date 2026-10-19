import { aleatorio, nome } from './aleatorio.js';

export const perguntas = [
    {
        enunciado: `Assim que saiu da escola você se depara com uma nova tecnologia, um chat IA que consegue responder todas as dúvidas que alguém pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de ${nome}?`,
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar no impacto que a IA terá no futuro."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou nas infinitas possibilidades de aprendizado com a IA."
                ]
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola resolveu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA na sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu como a IA pode acelerar o processo de pesquisa."
                ]
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Preferiu confiar em suas próprias pesquisas e repertório pessoal."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi a experiência de escrever com ou sem a ajuda da IA. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades incríveis e melhorar a vida das pessoas.",
                afirmacao: [
                    "Vem impulsionando a transformação digital e acredita no potencial da IA.",
                    "Defende que a IA será uma grande aliada na evolução da sociedade."
                ]
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para as máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar grupos de discussão sobre o uso ético da IA.",
                    "Levantou pontos importantes sobre a necessidade de proteger empregos diante da automação."
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o seu sentimento em relação à IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Acelerou o processo de criação de artes estáticas com geradores de imagem!",
                    "Ficou impressionado com a capacidade artística e rápida dos geradores de imagem de IA."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem tradicional, como o Paint.",
                afirmacao: [
                    "Notou que muitas pessoas ainda têm dificuldade em expressar suas ideias por meio de ferramentas tradicionais.",
                    "Preferiu usar o Paint para manter o controle manual sobre cada detalhe da sua criação."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na próxima semana, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer o uso da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever o texto com a ajuda do chat é uma boa opção, mas é preciso revisar o texto para não ter erros.",
                afirmacao: [
                    "Percebeu que dependendo do uso da IA, a resposta pode ser imprecisa ou até errada.",
                    "Compreendeu a importância de checar fatos e revisar conteúdos gerados por IA."
                ]
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina pode errar.",
                afirmacao: [
                    "Entendeu os limites da tecnologia e a importância do discernimento humano.",
                    "Manteve um olhar crítico diante das soluções apresentadas por sistemas inteligentes."
                ]
            }
        ]
    }
];