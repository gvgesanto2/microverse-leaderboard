import { createHtmlElement } from '../../utils/createElem.utils.js';
import ScoreItemView from './ScoreItemView.js';
import ViewComponent from './ViewComponent.js';

export default class ScoresListView extends ViewComponent {
  constructor(initialScores) {
    super();
    this.initialScores = initialScores;
  }

  createHtmlElem = () => {
    const scoresList = createHtmlElement({
      tag: 'ul',
      className: 'a-striped-list',
    });

    this.initialScores.forEach((score) => {
      const scoreItemView = new ScoreItemView(score);
      scoreItemView.appendToParent(scoresList);
    });

    return scoresList;
  };
}
