import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { createStore, compose } from "redux"
import { Provider } from "react-redux"
import { createFirestoreInstance } from "redux-firestore"
import { rootReducer } from "./ducks/reducers"
import { BrowserRouter } from "react-router-dom"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAsTgfqrMBetSXap-T5xuqe_FomZgLN1Qw",
  authDomain: "test-fe3ad.firebaseapp.com",
  databaseURL: "https://test-fe3ad.firebaseio.com",
  projectId: "test-fe3ad",
  storageBucket: "test-fe3ad.appspot.com",
  messagingSenderId: "861310121853",
  appId: "1:861310121853:web:ee6db6d2e5690630c57e14",
  measurementId: "G-8V80MLJDRS",
}
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
)
