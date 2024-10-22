import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { New } from '../pages/New';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/details/:id' element={<Details/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/new' element={<New/>}></Route>
        </Routes>
    )
}