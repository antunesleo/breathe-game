class Terminal {

  constructor(phaserTime, phaserAdd, snippetControl) {
    this._phaserTime = phaserTime;
    this._phaserAdd = phaserAdd;
    this._snippetControl = snippetControl;
    this._currentSnippet = this._snippetControl.getInitialSnippet();

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

    this._optionTextHeight = 460;
    this._currentLine = 0;
    this._currentWord = 0;
    this._currentText = this._phaserAdd.text(32, 32, '', this._textStyle);

    this._displayTextWordByWord();
  }

  _displayTextWordByWord() {
    let lines = this._currentSnippet.paragraphs;

    if (this._currentLine+1 > lines.length) {
      this._phaserAdd.text(32, 420, 'OPÇÕES', this._optionStyle).setPadding(5);

      this._currentSnippet.options.forEach(
        option => this._phaserAdd.text(32, this._optionTextHeight, option.text, this._optionStyle)
      );
      this._optionTextHeight += 40;

      return;
    }

    if (this._currentWord+1 > lines[this._currentLine].split(' ').length) {
      this._currentText = this._phaserAdd.text(32, this._currentText.y + this._currentText.height, '', this._textStyle);
      this._currentText.setPadding(5);
      this._currentLine++;
      this._currentWord = 0;

      this._phaserTime.addEvent({
        delay: 40,
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
      delay: 12,
      callback: this._displayTextWordByWord,
      args: [lines],
      callbackScope: this,
      loop: false
    });
  }

}