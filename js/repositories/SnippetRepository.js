class SnippetRepository {

  constructor() {
    this._snippets = [
      {
        id: 1,
        paragraphs: [
          "Um homem e uma mulher entram no primeiro andar do antigo centro comercial. Conforme eles caminham para dentro do edifício, o som de vidro estilhaçado e pequenas pedras de concreto sendo pisoteadas tomam o lugar do silêncio. As paredes que um dia foram azuis estão acinzentadas e sendo cobertas pelo verde do lodo e do musgo. O cheiro de mofo e putrefação queimam o nariz a cada respiração. O chão está tomado por papéis velhos, canecas, cadeiras quebradas, objetos do mundo de antes. O homem, muito mais vivido do que a mulher, já com cabelo e barba brancos e ralos fala:",
          ' - Júlia, tem certeza que é no terceiro andar?',
          " - Sim, o documento mostrava que era no antigo centro comercial, no terceiro andar, na sala ao lado das escadas. Responde a mulher",
          ' - Eu não sei, to sentindo cheiro de merda nesse lugar. Se esconde embaixo dessa bancada e deixa que eu vou buscar. Diz o homem carrancudo.',
          ' - Não é possível que você vai entrar nesse assunto de novo, outra hora a gente conversa. Você não tem mais vinte e poucos e não é um super-herói. Nós vamos subir juntos! Retruca a Julia, uma bela mulher de longos cabelos castanhos, nariz e queixo fino, uns bons anos mais nova que o Homem.'
        ],
        options: [
          {
            key: 'a',
            text: 'Próximo',
            nextSnippetId: 2
          }
        ]
      },
      {
        id: 2,
        paragraphs: [
          'Os dois começam a subir as escadas, tomando cuidado a cada a passo evitando ao máximo fazer qualquer barulho. O terceiro andar possui um grande hall, muitas pessoas circulavam ao mesmo  tempo, grandes decisões eram  tomadas e muito dinheiro era feito. Atrás do balcão de recepção, um grande crucifixo está pendurado  na parede, um pouco torto, um dia já fora brilhante e limpo. O hall fica no centro do andar, um longo corredor leva para os cômodos da esquerda, ao lado direito, outro corredor se estende.',
          ' - O elevador está ali.  Sussurra Julia enquanto aponta para o lado direito. - Deve ser uma dessas primeiras salas.'
        ],
        options: [
          {
            key: 'a',
            text: 'Ver sala à esquerda.',
            nextSnippetId: 3
          },
          {
            key: 'b',
            text: 'Ver sala à direita.',
            nextSnippetId: 4
          }
        ]
      },
      {
        id: 3,
        paragraphs: [
          'O homem segura o facão com firmeza e caminha em direção ao primeiro cômodo da esquerda. Júlia segue ao seu lado cobrindo seu canto cego.',
          ' - Nada, só um bando de papel velho. - Resmunga o tio.',
          ' - Vamos para o outro cômodo. Diz Julia apontando para frente.'
        ],
        options: [
          {
            key: 'a',
            text: 'Ver sala à direita.',
            nextSnippetId: 4
          },
        ]
      },
      {
        id: 4,
        paragraphs: [
          'O homem tenta abrir a porta, que parece emperrada. Ele anda alguns passos para a trás, pega impulso e  dá uma ombrada com a força da chifrada de um touro.  A porta se abre.',
          ' - Você tá certa sobre eu não ter vinte e poucos. Sou muito mais forte que um garotão desses daí.',
          ' - Dãããã. Tio, Eu sabia que você ia se gabar no momento que vi a porta abrindo.',
          ' - Olha aí, no mundo de antes a gente podia abrir uma papelaria com essa quantidade de papel.',
          ' - Aqui, achei! Essa é a maleta do documento! - Se empolga Júlia',
          ' - Abre logo vamo ver o que tem nessa porcaria! - Diz o Homem.'
        ],
        options: [
          {
            key: 'a',
            text: 'Abrir maleta.',
            nextSnippetId: 5
          },
        ]
      }
    ];
  }

  get(snippetId) {
    let snippet = this._snippets.find(snippet => snippet.id === snippetId);
    if (snippet === undefined) {
      throw new Error(`Snippet ${snippetId} not found`);
    }
    let options = snippet.options.map(option => new Option(option.key, option.text, option.nextSnippetId));
    return new Snippet(snippet.id, snippet.paragraphs, options);
  }

  save(updatedSnippet) {
    let index = this._snippets.findIndex(snippet => snippet.id === updatedSnippet.id);
    if (index === undefined) {
      throw new Error(`Snippet ${updatedSnippet.id} not found`);
    }
    this._snippets[index] = updatedSnippet;
  }

}
