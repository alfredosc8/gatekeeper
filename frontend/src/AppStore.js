import {createStore} from "redux";
import reducer from './reducers'

const initialState = {
    gates: {
        group: {
            service: {
                environment: {
                    manual_state: true,
                    auto_state: true,
                    tickets: ['ticket 1', 'ticket 2']
                }
            }
        }
    }
};

const middleware = window.devToolsExtension ? window.devToolsExtension() : f => f;

export const createGatekeeperStore = () => createStore(reducer, initialState, middleware);
