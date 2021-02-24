import axios from 'axios';


const ajaxMiddleware = store => next => (action) => {

  switch (action.type) {
   
    default:
      next(action);
  }
};
export default ajaxMiddleware;
