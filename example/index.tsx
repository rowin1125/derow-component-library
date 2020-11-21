import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from 'derow-react-library/general/Button/Button';
import './main.css';

const App = () => {
  return (
    <>
      <Button className='text-black' variant='primary'>
        Hello all
      </Button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
