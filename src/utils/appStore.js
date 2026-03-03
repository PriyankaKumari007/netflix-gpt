import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import ConfigReducer from"./configSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies:movieReducer,
        gpt: gptReducer,
        config: ConfigReducer
    }
})

export default appStore;