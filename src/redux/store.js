import {configureStore } from '@reduxjs/toolkit';

import EnglishSlice from './slices/EnglishSlice';
import GermanySlice from './slices/GermanySlice';
import FrenchSlice from './slices/FrenchSlice';
import FrontendSlice from './slices/FrontendSlice';
import IcdlSlice from './slices/IcdlSlice';
import GraphicSlice from './slices/GraphicSlice';


export const store = configureStore({
    reducer : {
     english : EnglishSlice,
     germany : GermanySlice,
     french : FrenchSlice,
     frontend: FrontendSlice,
     icdl : IcdlSlice,
     graphic : GraphicSlice
    }
})
