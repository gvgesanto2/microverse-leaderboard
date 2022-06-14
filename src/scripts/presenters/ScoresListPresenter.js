import ScoresListView from '../views/view-components/ScoresListView.js';

export default class ScoresListPresenter {
  constructor(scoresListContainerId, initialScores) {
    this.scoresListContainerId = scoresListContainerId;
    this.scoresListView = new ScoresListView(initialScores);
  }

  build = () => {
    this.scoresListView.render(this.scoresListContainerId);
  }

  refresh = async (newScores) => {
    this.scoresListView.refreshAll(this.scoresListContainerId, newScores);
  }
}
