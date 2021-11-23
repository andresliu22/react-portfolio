import React, { useRef} from 'react'
import '../styles/formStyle.scss'

function Form() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef =  useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
  
        const data = {
              name: nameRef.current.value,
              email: emailRef.current.value,
              message: messageRef.current.value
              }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
  }
   return(
    <div className="container">
  
   <form className="form">
  
      <div className="name">
  
         <label for="name">Name</label>
         <input
              type="text"
              name="name"
              className="fname"
              tabIndex="1"
              ref={nameRef}
         />
    
         <label for="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="example@corp.com"
            tabIndex="3"
            ref={emailRef}

        />
        <label for="message">Message</label>

        <textarea
        placeholder="Start typing..."
        className="message"
        name="message"
        ref={messageRef}
        />
      </div>
      <button type="submit" className="send" onClick={handleSubmit}>Send</button>
   </form>
  </div>
    )
}
export default Form