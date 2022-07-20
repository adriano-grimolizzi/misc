import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import WizardList from './components/wizards/wizard-list/WizardList';
import WizardDetail from './components/wizards/wizard-detail/WizardDetail';
import CreateWizard from './components/wizards/create-wizard/CreateWizard';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='create-wizard' element={<CreateWizard />} />
          <Route path='wizard-list' element={<WizardList />}>
          </Route>
          <Route path="wizard-list/:id" element={<WizardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
