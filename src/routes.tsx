import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Navbar } from './components/Navbar/Navbar'


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                
                <Route path='*' element={<Navigate to="/Home"/>} />
            </Routes>
        </BrowserRouter>
    )
}