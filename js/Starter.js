let snippetRepository = new SnippetRepository();
let snippetControl = new SnippetControl(snippetRepository);

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  scale: {
    parent: 'game',
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

let game = new Phaser.Game(config);
let terminal = null;

function preload () {}

function create () {
  terminal = new Terminal(this.time, this.add, snippetControl);
  terminal.start();
}

function update() {}
