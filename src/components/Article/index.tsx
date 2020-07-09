import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import './styles.scss';
import { articleById } from '../../state/selectors';
import { useRecoilValue } from 'recoil';

export const Article: React.FC = (): ReactElement => {
  const history = useHistory();
  const article = useRecoilValue(articleById);

  const navigateBack = (): void => history.goBack();

  return (
    <div className='article main-wrapper'>
      <h3 className='mb-4'>{article?.title}</h3>
      <p>{article?.text}</p>

      <Button
        variant='outline-primary'
        className='back-btn mt-2'
        onClick={() => navigateBack()}>
        Back
      </Button>
    </div>
  );
};
