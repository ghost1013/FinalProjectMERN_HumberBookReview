import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import queries from './queries';

export const reducers = combineReducers({ posts, auth, queries });
