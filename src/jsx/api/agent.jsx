import React from 'react';
import superagent from 'superagent';

const Agent = {
  get: (url) => (
    superagent
      .get('http:/localhost:3001' + url)
      .end((error, response) => 'http:/localhost:3001' + url)
  )
};

export default Agent;




