'use strict';

import uiid from 'uuid';
import {createReducer}  from './utils.js';
import {fromJS} from 'immutable';

export const ADD_MODAL = '@react-redux-modal.ADD_MODAL';
export const REMOVE_MODAL = '@react-redux-modal.REMOVE_MODAL';
export const CLEAR_ALL = '@react-redux-modal.CLEAR_ALL';

const initialSate = fromJS({
  modals: []
});

export default createReducer(initialSate, {
  [ADD_MODAL]: (state, payload) => {
    return state.set('modals', state.get('modals').concat(fromJS([{
      id: uiid.v1(),
      ...payload
    }])))
  },
  [REMOVE_MODAL]: (state, id) => {
    return state.set('modals', state.get('modals').filter(modal => modal.get('id') !== id))
  },
  [CLEAR_ALL]: () => {
    return fromJS({
      modals: []
    });
  }
});

export function addModal(payload) {
  return {
    type: ADD_MODAL,
    payload: payload
  };
}

export function removeModal(id) {
  return {
    type: REMOVE_MODAL,
    payload: id
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}
