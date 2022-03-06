import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {RideResutls} from "./components/RideResutls/RideResutls";
import {createStore} from "redux";
import reducer from "./store/reducer";
import {fetchFailed, loadRides} from "./store/actions";
import {Provider} from "react-redux";
import {TripsApi} from "./api/TripsApi";

function App() {
    let store = createStore(reducer)


    useEffect(() => {

        TripsApi.getTrips()
            .then((result: any) => {
                if (!result.trips) {
                    store.dispatch(fetchFailed(result.message ?? "A technical error occurred"))
                } else {
                    setTimeout(() => {

                        store.dispatch(loadRides(result.trips ?? [], (result.search_info.count - result.search_info.full_trip_count), result.next_cursor))
                    }, 2000)
                }

            }).catch((error: any) => {
            console.log(error)
        })

    }, []);

    return (
        <div className="App">
            <Header/>
            <Provider store={store}>
                <RideResutls/>
            </Provider>
            <Footer/>

        </div>
    );
}

export default App;
