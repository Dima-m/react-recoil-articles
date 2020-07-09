import { selector } from 'recoil';
import { articleState, currentArticleIdState } from './atoms';

export const allArticlesState = selector({
  key: 'allArticlesState',
  get: ({ get }) => get(articleState),
});

export const currentArticleId = selector({
  key: 'currentArticleId',
  get: ({ get }) => get(currentArticleIdState)
});

export const articleById = selector({
  key: 'articlesById',
  get: ({ get }) => {    
    const articles = get(articleState);

    return articles.find(article => article.id === get(currentArticleId));
  },
});
