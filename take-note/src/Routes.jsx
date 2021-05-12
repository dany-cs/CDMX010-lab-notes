import {Start} from './Start';
import {Register} from './Register';
import {App} from './App';


import{
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from './firebase/FirebaseConfig';
import React from 'react'


function Routes(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            if(user) {  
                setUser(user)
        } else {
                setUser(false)
        }
    })
    }, [])


    return (
        <div>
            {user !== null ? (
               <Router>
               <div>
                   <Switch>
                       <Route exact path="/">
                           <Start user={user}/>
                       </Route>
                       <Route path="/register">
                           <Register user={user}/>
                       </Route>
                       <Route path="/app">
                           <App user={user} />
                       </Route>
                   </Switch>
                   </div>
               </Router>
            ) : <p>Loading ...</p>
         }
        </div>
    );
}
export default Routes;