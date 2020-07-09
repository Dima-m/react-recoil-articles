import { atom } from 'recoil';
import { IArticle } from './IArticle';

export const articleState = atom({
  key: 'articleState',
  default: [
    {
      id: 666,
      title: 'Unbelievable! This article is hardcoded in Recoil state',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ] as IArticle[],
});

export const currentArticleIdState = atom({
  key: 'currentArticleIdState',
  default: 0,
});
