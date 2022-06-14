import { createHtmlElement } from '../../utils/createElem.utils.js';
import ViewComponent from './ViewComponent.js';

export default class ScoreItemView extends ViewComponent {
  constructor(scoreData) {
    super();
    this.scoreData = scoreData;
  }

  createHtmlElem = () => {
    const { playerName, score } = this.scoreData;

    const scoreItem = createHtmlElement({
      tag: 'li',
      text: `${playerName}: ${score}`,
    });

    return scoreItem;
  };
}
