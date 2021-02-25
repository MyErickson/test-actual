import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

// import logMiddleware from './logMiddleware';
import ajaxMiddleware from './ajaxMiddleware';

const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}


const enhancers = compose(appliedMiddlewares, ...devTools);

const store = createStore(reducer, enhancers);


export default store;
