import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"

const Router = () => {
	const isAuthenticated = true

	return (
		<>
			{ !isAuthenticated &&
                <Routes>
	                <Route path={"/auth"} element={<div>Auth</div>} />
                    <Route path={'*'} element={<Navigate to={'/auth'} replace />} />
                </Routes>
			}
			{ isAuthenticated &&
                <Routes>
                    <Route path={"/home"} element={<div>Home</div>} />
                    <Route path={'*'} element={<Navigate to={'/home'} replace />} />
                </Routes>
			}
		</>
	);
};

export default Router;