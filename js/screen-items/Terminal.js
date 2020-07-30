class Terminal {

  constructor(phaserTime, phaserAdd, snippetControl) {
    this._textStyle = {
      font: "19px clacon",
      fill: "#19de65",
      padding: 10,
      wordWrap: {
        width: 740,
        useAdvancedWrap: true
      }
    };
    this._optionStyle = {
      font: "22px clacon",
      backgroundColor: "#16aa51",
      fill: "#000000",
      padding: 5
    };

    this._optionTextHeight = null;
    this._currentLine = null;
    this._currentWord = null;

    this._currentText = null;
    this._paragraphsTexts = [];
    this._optionsTexts = [];

    this._phaserTime = phaserTime;
    this._phaserAdd = phaserAdd;

    this._snippetControl = snippetControl;
  }

  start() {
    this._snippetControl.startFirstSnippet();
    this._renderSnippet();
  }

  _cleanSnippet() {
    this._paragraphsTexts.forEach((paragraphText) => {
      paragraphText.destroy();
    });
    this._optionsTexts.forEach((optionText) => {
      optionText.destroy();
    });
    this._currentText = this._phaserAdd.text(32, 32, '', this._textStyle);
    this._paragraphsTexts = [this._currentText];
    this._optionsTexts = [];
    this._optionTextHeight = 460;
    this._currentLine = 0;
    this._currentWord = 0;
  }

  _renderSnippet() {
    this._cleanSnippet();
    this._displayTextWordByWord();
  }

  _displayTextWordByWord() {
    let lines = this._snippetControl.snippet.paragraphs;

    if (this._currentLine+1 > lines.length) {
      this._optionsTexts.push(this._phaserAdd.text(32, 420, 'OPÇÕES', this._optionStyle).setPadding(5));
      this._displayOptions();
      return;
    }

    if (this._currentWord+1 > lines[this._currentLine].split(' ').length) {
      this._currentText = this._phaserAdd.text(32, this._currentText.y + this._currentText.height, '', this._textStyle);
      this._paragraphsTexts.push(this._currentText);
      this._currentText.setPadding(5);
      this._currentLine++;
      this._currentWord = 0;

      this._phaserTime.addEvent({
        delay: 30,
        callback: this._displayTextWordByWord,
        args: [lines],
        callbackScope: this,
        loop: false
      });

      return;
    }

    var word = lines[this._currentLine].split(' ')[this._currentWord];
    this._currentText.setText(this._currentText.text.concat(' '.concat(word)));
    this._currentWord++;

    this._phaserTime.addEvent({
      delay: 10,
      callback: this._displayTextWordByWord,
      args: [lines],
      callbackScope: this,
      loop: false
    });
  }

  _displayOptions() {
    this._snippetControl.snippet.options.forEach((option) => {
      let optionButton = this._phaserAdd.text(32, this._optionTextHeight, option.text, this._optionStyle);
      optionButton.setInteractive();
      optionButton.on('pointerdown', () => this._handleOptionChoose(option));
      this._optionsTexts.push(optionButton);
      this._optionTextHeight += 40;
    });
  }

  _handleOptionChoose(option) {
    this._snippetControl.chooseOption(option.key);
    this._renderSnippet();
  }

}
