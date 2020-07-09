import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './styles.scss';
import { articleState } from '../../state/atoms';
import { IArticle } from '../../state/IArticle';
import { ArticleList } from '../ArticleList';
import { ArticleForm } from './ArticleForm';

const initialArticleState = {
  title: '',
  text: '',
};

export const AddNew: React.FC = (): ReactElement => {
  const history = useHistory();
  const [article, setArticle] = useState(initialArticleState);
  const [, setRecoilArticle] = useRecoilState(articleState);

  const setArticleData = (type: string, data: string): void => {
    switch (type) {
      case 'title':
        setArticle({ ...article, title: data });
        break;
      case 'text':
        setArticle({ ...article, text: data });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setRecoilArticle((oldArticlesState: IArticle[]) => [
      ...oldArticlesState,
      {
        id: Math.floor(Math.random() * 1000) + 1,
        ...article,
      },
    ]);

    setArticle(initialArticleState);
  };

  const navigateBack = (): void => history.goBack();

  return (
    <div className='main-wrapper'>
      <div className='article-form'>
        <ArticleForm
          article={article}
          setArticleData={setArticleData}
          handleSubmit={handleSubmit}
          navigateBack={navigateBack}
        />
      </div>

      <div className='article-list-block'>
        <ArticleList showLast={3} />
      </div>
    </div>
  );
};
