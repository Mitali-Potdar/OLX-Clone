import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/'
import {Provider} from 'react-redux'

const store = configureStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function DataProvider({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider