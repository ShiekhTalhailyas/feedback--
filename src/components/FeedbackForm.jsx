import { useState, useContext, useEffect } from 'react'
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const {addFeedback, feedbackEdit, updateFeedback}=useContext(FeedbackContext)
  const [text, setText]=useState("")
  const [btnDisabled, setBtnDisabled]=useState(true)
  const [Rating, setRating]=useState('10')
  const [message, setMessage]=useState('')

  useEffect (() => {
    if (feedbackEdit.edit === true){
setBtnDisabled(false)
setText(feedbackEdit.item.text)
setRating(feedbackEdit.item.Rating)  
    }
  },[feedbackEdit])

  const handleTextChange = (e)  => {
  if (text === ''){
    setBtnDisabled(true)
    setMessage(null)
  }  
  else if (text !== '' && text.trim().length <= 10){
    setMessage('Enter atleast 10 Characters')
    setBtnDisabled(true)
  }
  else {
    setBtnDisabled(false)
    setMessage(null)
  }
    
    setText(e.target.value)
  }
const handleSubmit = (e) => {
e.preventDefault()

if (text.trim().length > 10){
    const newFeedback = {
      text: text,
      rating: Rating
    }

    if (feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }
    else{
    addFeedback(newFeedback)
    }
    setText('')
}
}


  return ( <Card>
    <form onSubmit={handleSubmit}>
      <div>Tell us one thing that you love about Taghayyur Fellowship?</div>
      <RatingSelect select= {(rating)=> setRating(rating)}/>
      <div  className="input-group"> <input value={text} onChange={handleTextChange} type='text' placeholder='short answer'/> 
      <Button isDisabled={btnDisabled} type='submit'>send</Button>
      </div>
       {message && <div classNamme='message' >{message}</div>}
       </form>
    </Card>
  )
}

export default FeedbackForm