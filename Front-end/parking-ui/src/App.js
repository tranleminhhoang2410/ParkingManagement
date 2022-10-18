import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts';

import { ToastContainer } from 'react-toastify'
import AuthContextProvider from './context/AuthContextProvider';



function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        }


                        const Guard = route.guard || Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AuthContextProvider>

                                        <Layout>
                                            <Guard>
                                                <Page />
                                            </Guard>
                                        </Layout>
                                    </AuthContextProvider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <ToastContainer />
        </Router>
    );
}

export default App;
