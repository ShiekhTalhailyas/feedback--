import React from "react"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/header"
import {FeedbackProvider} from "./context/FeedbackContext"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import './index.css'
import FeedbackForm from "./components/FeedbackForm"
import Aboutpage from "./pages/Aboutpage"
import AboutIconLink from './components/AboutIconLink'
import Post from "./components/Post"

function App (){
  return (
   <FeedbackProvider>
   <Router>
     <Header name="Feedback UI"/>
       <div className='container'>
         <Routes>
          <Route exact path='/'
            element ={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>      
             }  
          ></Route>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/Post' element={<Post/>}/>
         </Routes>
        <AboutIconLink />
       </div> 
   </Router>
   </FeedbackProvider>
  ) 
}

export default App