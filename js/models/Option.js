class Option {
  constructor(key, text, nextSnippetId) {
    this._key = key;
    this._text = text;
    this._nextSnippetId = nextSnippetId;
    this._isChosen = false;
  }

  get key() {
    return this._key;
  }

  get text() {
    return this._text;
  }

  get nextSnippetId() {
    return this._nextSnippetId;
  }

  get isChosen() {
    return this._isChosen;
  }

  choose() {
    this._isChosen = true;
  }

}
