import { configureStore } from "@reduxjs/toolkit";

// Reducer para manejar el cambio de lenguaje
const lenguajeReducer = (state = "es", action) => {
  switch (action.type) {
    case "@lenguaje/es":
      return "es";
    case "@lenguaje/en":
      return "en";
    default:
      return state;
  }
};

// Configuración del store con configureStore
export const store = configureStore({ reducer: lenguajeReducer });

//actions
export const handlerChangeSpanish = () => {
  store.dispatch({ type: "@lenguaje/es" });
};

export const handlerChangeEnglish = () => {
  store.dispatch({ type: "@lenguaje/en" });
};
