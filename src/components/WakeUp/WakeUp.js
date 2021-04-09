import React from 'react';
import { styled } from '@linaria/react';

const WakeUp = () => (
  <>
    <WakeUpRequest src="https://dr-ti-api.herokuapp.com/wake-up" alt="This request is used to wake the servers/apis on Heroku up" />
    <WakeUpRequest src="https://whiistle.herokuapp.com/wake-up" alt="This request is used to wake the servers/apis on Heroku up" />
    <WakeUpRequest src="https://slack-t.herokuapp.com/wake-up" alt="This request is used to wake the servers/apis on Heroku up" />
  </>
);

const WakeUpRequest = styled.img`
  display: none;
`;

export default WakeUp;
