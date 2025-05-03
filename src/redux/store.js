import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "/redux-persist/lib/storage";
import contactSlice from "./contactsSlice";
import filterSlice from "./filtersSlice";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const persistedContactsReduser = persistReducer(contactsPersistConfig, contactSlice);

export const store = configureStore({
    reduser: {
        contacts: persistedContactsReduser,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persist = persistStore(store);