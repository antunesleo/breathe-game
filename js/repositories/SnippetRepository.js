class SnippetRepository {

  constructor() {
    this._snippets = [
      {
        id: 1,
        paragraphs: [
          "Um homem e uma mulher entram no primeiro andar do antigo centro comercial. Conforme eles caminham para dentro do edifício, o som de vidro estilhaçado e pequenas pedras de concreto sendo pisoteadas tomam o lugar do silêncio. As paredes que um dia foram azuis estão acinzentadas e sendo cobertas pelo verde do lodo e do musgo. O cheiro de mofo e putrefação queimam o nariz a cada respiração. O chão está tomado por papéis velhos, canecas, cadeiras quebradas, objetos do mundo de antes. O homem, muito mais vivido do que a mulher, já com cabelo e barba brancos e ralos fala: Júlia, tem certeza que é no terceiro andar?",
          "- Sim, o documento mostrava que era no antigo centro comercial, no terceiro andar, na sala ao lado das escadas. Responde a mulher",
          '- Eu não sei, to sentindo cheiro de merda nesse lugar. Se esconde embaixo dessa bancada e deixa que eu vou buscar. Diz o homem carrancudo.',
          '- Não é possível que você vai entrar nesse assunto de novo, outra hora a gente conversa. Você não tem mais vinte e poucos e não é um super-herói. Nós vamos subir juntos! Retruca a Julia, uma bela mulher de longos cabelos castanhos, nariz e queixo fino, uns bons anos mais nova que o Homem.'
        ],
        options: [
          {
            'text': 'Próximo',
            'nextSnippetId': 2
          }
        ]
      }
    ];
  }

  get(snippetId) {
    let snippet = this._snippets.find(snippet => snippet.id === snippetId);
    if (snippet === undefined) {
      throw new Error(`Snippet ${snippetId} not found`);
    }
    let options = snippet.options.map(option => new Option(option.text, option.nextSnippetId));
    return new Snippet(snippet.id, snippet.paragraphs, options);
  }

  save(updatedSnippet) {
    let index = this._snippets.findIndex(snippet => snippet.id === updatedSnippet.id);
    if (snippet === undefined) {
      throw new Error(`Snippet ${updatedSnippet.id} not found`);
    }
    this._snippets[index] = updatedSnippet;
  }

}
