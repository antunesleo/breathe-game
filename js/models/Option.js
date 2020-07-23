class Option {
  constructor(text, nextSnippetId) {
    this._text = text;
    this._nextSnippetId = nextSnippetId;
    this._isChosen = false;
  }

  get text() {
    return this._text;
  }

  get nextSnippetId() {
    return this._nextSnippetId;
  }

  choose() {
    this._isChosen = true;
  }

}
