import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import './styles.scss';
import { IArticle } from '../../state/IArticle';
import { allArticlesState } from '../../state/selectors';
import { currentArticleIdState } from '../../state/atoms';

interface Props {
  showLast?: number | undefined;
}

const DEFAULT_ARTICLE_COUNT = 5;

export const ArticleList: React.FC<Props> = ({
  showLast,
}: Props): ReactElement => {
  const history = useHistory();
  const [, setArticleId] = useRecoilState(currentArticleIdState);
  const articles: IArticle[] = useRecoilValue(allArticlesState);

  const navigateToArticle = (id: number) => {
    setArticleId(id);
    history.push(`/article/${id}`);
  };

  const articlesList = articles
    .slice(Math.max(articles.length - (showLast || DEFAULT_ARTICLE_COUNT), 0))
    .reverse()
    .map(({ id, title }: IArticle) => (
      <div className='article-item' key={id}>
        <span onClick={() => navigateToArticle(id as number)}>{title}</span>
      </div>
    ));

  return <>{articlesList}</>;
};
