import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

  function addList(payload ,cb) {
    Agent
      .fire('post', `http://localhost:5001/list/addNewList`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  
  function myLists(cb) {
    Agent
      .fire('get', `http://localhost:5001/list/fetchLists`)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
 
  function editList(payload ,cb) {
    Agent
      .fire('put', `http://localhost:5001/list/editList`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

 

  function deleteList(payload ,cb) {
    Agent
      .fire('delete', `http://localhost:5001/list/deleteList`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

export default {
    addList,
    editList,
    myLists,deleteList
  }