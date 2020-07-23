class SnippetControl {

  constructor(snippetRepository) {
    this._snippetRepository = snippetRepository;
    this._currentSnippet = null;
  }

  getInitialSnippet() {
    this._currentSnippet = this._snippetRepository.get(1);
    return this._currentSnippet;
  }

  chooseOption(optionId) {
    let option = this._currentSnippet.chooseOption(optionId);
    this._snippetRepository.save(this._currentSnippet);
    return this._snippetRepository.get(option.nextSnippetId);
  }

}
