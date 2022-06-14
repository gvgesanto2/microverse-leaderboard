import ScoresListView from '../views/view-components/ScoresListView.js';

export default class ScoresListPresenter {
  constructor(initialScores) {
    this.scoresListView = new ScoresListView(initialScores);
  }

  build(scoresListContainerId) {
    this.scoresListView.render(scoresListContainerId);
  }
}
