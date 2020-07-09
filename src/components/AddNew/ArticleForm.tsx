import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { IArticle } from '../../state/IArticle';

interface Props {
  article: IArticle;
  setArticleData: Function;
  handleSubmit: Function;
  navigateBack: Function;
}

export const ArticleForm: React.FC<Props> = ({
  article,
  setArticleData,
  handleSubmit,
  navigateBack,
}: Props): ReactElement => {
  const isSubmitDisabled = (): boolean => !article.text || !article.title;

  return (
    <>
      <Form
        onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
        className='d-flex flex-column'>
        <h3 className='mb-4'>New Article</h3>
        <Form.Group>
          <Form.Control
            type='text'
            value={article.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setArticleData('title', e.target.value)
            }
            placeholder='Article title'
          />
          <Form.Text className='text-muted text-left ml-2'>
            Give it a short name
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as='textarea'
            value={article.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setArticleData('text', e.target.value)
            }
            placeholder='Article text'
            rows={5}
          />
          <Form.Text className='text-muted text-left ml-2'>
            Type the best article you can write
          </Form.Text>
        </Form.Group>

        <div className='btn-wrapper'>
          <Button
            variant='primary'
            className='mt-2 form-submit-btn'
            type='submit'
            disabled={isSubmitDisabled()}>
            Submit
          </Button>

          <Button
            variant='outline-primary'
            className='back-btn mt-2'
            onClick={() => navigateBack()}>
            Back
          </Button>
        </div>
      </Form>
    </>
  );
};
