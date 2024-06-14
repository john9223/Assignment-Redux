import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(reducer);

const LikeCounter = () => {
  const dispatch = useDispatch();
  const likeCount = useSelector(state => state.likeCount);

  return (
    <div>
      <h1>Like Counter: {likeCount}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <LikeCounter />
  </Provider>
);

export default App;
