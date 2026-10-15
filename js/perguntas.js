const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao:[
                    "No início ficou com medo do que essa tecnologia pode fazer. ",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
                    "Sentiu receio de que a automação substitua interações humanas reais."
                ],
                proxima: 1,
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia.",
                    "Ficou empolgado com as infinitas possibilidades criativas que a ferramenta oferece."
                ],
                proxima: 2,
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: [
                    "Decidiu economizar tempo usando ferramentas tecnológicas avançadas.",
                    "Percebeu que a IA pode ser uma excelente tutora para explicar temas complexos.",
                    "Aprendeu a refinar suas buscas para obter resumos rápidos e diretos."
                ],
                proxima: 3,
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Preferiu valorizar o debate humano e o conhecimento construído coletivamente.",
                    "Acreditou que métodos tradicionais de pesquisa trazem mais segurança e originalidade.",
                    "Dedicou tempo para filtrar as próprias ideias antes de consolidar o texto."
                ],
                proxima: 3,
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Demonstrou grande empatia com o futuro do mercado de trabalho humano.",
                    "Alertou a turma sobre a necessidade de políticas públicas que protejam os empregos.",
                    "Defendeu que o progresso tecnológico não deve atropelar o bem-estar social."
                ],
                proxima: 4,
            },
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Mostrou uma visão otimista de evolução e adaptação profissional.",
                    "Acreditou que novas profissões vão surgir a partir da necessidade de gerenciar as IAs.",
                    "Enxergou a tecnologia como uma aliada para aumentar a produtividade humana."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Preferiu fazer o design de forma manual para manter o controle de cada detalhe.",
                    "Mostrou que a criatividade humana não depende de automação para se expressar.",
                    "Sentiu satisfação em desenhar seus próprios conceitos do zero."
                ],
                proxima: 5,
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Aproveitou a oportunidade para testar o potencial visual dos algoritmos.",
                    "Descobriu que criar prompts precisos é uma nova forma de arte digital.",
                    "Se surpreendeu com a capacidade de transformar palavras em gráficos complexos instantaneamente."
                ],
                proxima: 5,
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: [
                    "Compreendeu o valor do pensamento crítico e da revisão humana.",
                    "Evitou o plágio direto e garantiu que o grupo entregasse algo autêntico.",
                    "Assumiu a responsabilidade de corrigir falhas para garantir uma boa nota."
                ],
                proxima: 6, // Aponta para o fim do jogo / tela de resultados
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Considerou que a engenharia de prompt já justifica a autoria do trabalho.",
                    "Priorizou a entrega rápida da tarefa diante do prazo apertado.",
                    "Confiou plenamente na estrutura gerada de forma automática pela ferramenta."
                ],
                proxima: 6, // Aponta para o fim do jogo / tela de resultados
            }
        ]
    },
];
