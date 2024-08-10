import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Layout } from './layout/Layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Ogolne } from './page/ogolne/OgolnePage.tsx';
import { MojeAktualnosci } from './page/ogolne/MojeAktualnosciPage.tsx';
import { PanelUzytkownika } from './page/ogolne/PanelUzytkownikaPage.tsx';
import { MojeZastepstwa } from './page/ogolne/MojeZastepstwaPage.tsx';
import { Powiadomienia } from './page/ogolne/PowiadomieniaPage.tsx';
import { Wnioski } from './page/ogolne/WnioskiPage.tsx';
import { Pracownik } from './page/pracownik/PracownikPage.tsx';
import { DaneKadrowe } from './page/pracownik/DaneKadrowePage.tsx';
import { CzasPracy } from './page/pracownik/CzasPracyPage.tsx';
import { DaneFinansowe } from './page/pracownik/DaneFinansowePage.tsx';
import { Umowy } from './page/pracownik/UmowyPage.tsx';
import { Logowanie } from './page/LogowaniePage.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                {/*<Route path='/' element={<App />}></Route>*/}
                <Route path='/ogolne' element={<Layout />}>
                    <Route index element={<Ogolne />} />
                </Route>
                <Route path='/mojeaktualnosci' element={<Layout />}>
                    <Route index element={<MojeAktualnosci />} />
                </Route>
                <Route path='/paneluzytkownika' element={<Layout />}>
                    <Route index element={<PanelUzytkownika />} />
                </Route>
                <Route path='/mojezastepstwa' element={<Layout />}>
                    <Route index element={<MojeZastepstwa />} />
                </Route>
                <Route path='/powiadomienia' element={<Layout />}>
                    <Route index element={<Powiadomienia />} />
                </Route>
                <Route path='/wnioski' element={<Layout />}>
                    <Route index element={<Wnioski />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/danekadrowe' element={<Layout />}>
                    <Route index element={<DaneKadrowe />} />
                </Route>
                <Route path='/czaspracy' element={<Layout />}>
                    <Route index element={<CzasPracy />} />
                </Route>
                <Route path='/danefinansowe' element={<Layout />}>
                    <Route index element={<DaneFinansowe />} />
                </Route>
                <Route path='/umowy' element={<Layout />}>
                    <Route index element={<Umowy />} />
                </Route>
                <Route path= '/logowanie'  element= {<Logowanie />}>
                    <Route index element={<Logowanie />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
)
