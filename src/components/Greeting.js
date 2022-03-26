import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../Redux/greeting/fetchapi';

function Greeting() {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const Click = () => {
    dispatch(fetchmessage());
  };

  return (
    <div>
      <div>
        Greetings:
        {' '}
        {message?.content}
      </div>
      <button type="button" onClick={Click}>Generate Greeting</button>
    </div>
  );
}

export default Greeting;
