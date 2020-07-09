import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { ArticleList } from '../ArticleList';

export const Home: React.FC = (): ReactElement => {
  const history = useHistory();

  const goToCreateNew = (): void => history.push('/create-new');

  return (
    <div className='main-wrapper d-flex flex-column'>
      <div className='header d-flex align-items-center mb-5'>
        <h3>Articles</h3>

        <Button
          variant='primary'
          className='ml-4 add-new-btn'
          onClick={() => goToCreateNew()}>
          Add New
        </Button>
      </div>

      <ArticleList />
    </div>
  );
};
