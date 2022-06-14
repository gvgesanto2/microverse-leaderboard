import { createHtmlElement } from '../../utils/createElem.utils.js';
import ScoreItemView from './ScoreItemView.js';
import ViewComponent from './ViewComponent.js';

export default class ScoresListView extends ViewComponent {
  constructor(scores) {
    super();
    this.scores = scores;
  }

  refreshAll = (parentElemId, newScores) => {
    this.remove();
    this.scores = newScores;
    this.render(parentElemId);
  }

  createHtmlElem = () => {
    const scoresList = createHtmlElement({
      tag: 'ul',
      className: 'a-striped-list',
    });

    this.scores.forEach((score) => {
      const scoreItemView = new ScoreItemView(score);
      scoreItemView.appendToParent(scoresList);
    });

    return scoresList;
  };
}
