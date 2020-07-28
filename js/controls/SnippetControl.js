class SnippetControl {

  constructor(snippetRepository) {
    this._snippetRepository = snippetRepository;
    this._currentSnippet = null;
  }

  startFirstSnippet() {
    this._currentSnippet = this._snippetRepository.get(1);
  }

  chooseOption(optionKey) {
    let option = this._currentSnippet.chooseOption(optionKey);
    this._snippetRepository.save(this._currentSnippet);
    this._currentSnippet = this._snippetRepository.get(option.nextSnippetId);
    return this._currentSnippet;
  }

  get snippet() {
    return this._currentSnippet;
  }

}
