import '../styles/main.scss';
import ScoresListPresenter from './presenters/ScoresListPresenter.js';

const SCORES_LIST_CONTAINER_ID = 'scores-list-container';

const initialScores = [
  {
    playerName: 'player 1',
    score: 1000,
  },
  {
    playerName: 'player 2',
    score: 600,
  },
  {
    playerName: 'player 3',
    score: 300,
  },
  {
    playerName: 'player 4',
    score: 100,
  },
];

const scoresListPresenter = new ScoresListPresenter(initialScores);
scoresListPresenter.build(SCORES_LIST_CONTAINER_ID);
