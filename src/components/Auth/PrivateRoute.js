import {Redirect, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";


const PrivateRoute = ({component: Component, ...rest}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['currentUser']);

    useEffect(() => {
        try {
            if (cookies.currentUser.privilege == null) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
            }
        }catch (error){
            setIsLoggedIn(false)
        }
        setLoading(false)
    })
    if (!loading) {
        return (
            <Route
                {...rest}
                render={props => {
                    return isLoggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                    )
                }}
            />
        )
    } else {
        return (
            <p>loading</p>
        )
    }
}

export default PrivateRoute