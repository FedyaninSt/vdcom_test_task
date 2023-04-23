import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../../Utils/AppRouter";
import '../../Setting/_reset.scss';
import '../../Setting/_fonts.scss';
import '../../Setting/_palette.scss';
import {store} from "../../Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
