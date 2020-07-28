class Snippet {
  constructor(id, paragraphs, options) {
    this._id = id;
    this._paragraphs = paragraphs;
    this._options = options
  }

  get id() {
    return this._id;
  }

  get paragraphs() {
    return this._paragraphs;
  }

  get options() {
    return this._options;
  }

  chooseOption(optionKey) {
    let option = this._options.find(option => option.key === optionKey);
    if (option === undefined) {
      throw new Error(`Option ${optionId} not found.`);
    }
    return option;
  }

}
