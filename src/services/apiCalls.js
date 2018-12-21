import request from 'superagent';

const apiCalls = {
  post: ({url, data}) => (
    request.post(url)
      .set({'Content-Type': 'application/json'})
      .send(data)
  ),
  save: ({url, data}) => (
    request.put(url)
      .set({'Content-Type': 'application/json'})
      .send(data)
  ),
  del: ({url, token}) => (
    request.del(url)
      .set({'Content-Type': 'application/json'})
  ),
  get: ({url}) => {
    request.get(url)
      .set({'Content-Type': 'application/json'})
  },
};

export default apiCalls;