import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import redusers from './reduser';

const store = configureStore({
  reducer: {
    contacts: redusers.contactList,
    auth: redusers.auth,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
