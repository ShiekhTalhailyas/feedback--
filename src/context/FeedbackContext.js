import { Children, createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid'
const feedbackContext = createContext()
export const FeedbackProvider= ({children}) => {
    const [feedback, setFeedback]= useState([
        {
           id: 1,
           text: 'This is Feedback item 1',
           rating: 10
        },
        {
            id: 2,
            text: 'This is Feedback item 2',
            rating: 8
         },
         {
            id: 3,
            text: 'This is Feedback item 3',
            rating: 7
         }
    ])
    const [feedbackEdit, setFeedbackEdit ]= useState({
        item: {},
        edit: false
    })
    
    const updateFeedback = (id,upditem) => {
       setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...upditem}:item))
       ) 
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete this feedback?'))
           {
             setFeedback(feedback.filter((item) => item.id !== id))
            }
       }
       const addFeedback = (newFeedback)=> {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        }
        const editFeedback = (item) => setFeedbackEdit({
            item,
            edit: true
        })

       return <feedbackContext.Provider value={{
           feedback,
           deleteFeedback,
           addFeedback,
           editFeedback,
           feedbackEdit,
           updateFeedback,
       }}>
        {children}
    </feedbackContext.Provider>
}
export default feedbackContext

