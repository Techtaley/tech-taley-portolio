import React, { useState } from 'react'
//import emailjs from 'emailjs-com'

//import axios from 'axios'
import {Redirect } from 'react-router-dom'

export default function Contact(){
    const [ name, getName ] = useState('')    
    const [ email, getEmail ] = useState('')    
    const [ message, getMessage ] = useState('')
	const [ confirm, setConfirm ] = useState(false)

    const [ redirect, setRedirect ] = useState(false)     

	function sendEmail(e) {
        e.preventDefault()
		setConfirm(true)
				
		e.target.reset()

    	setRedirect(true)

		getName('')
		getEmail('')
		getMessage('')
 
   		if(redirect) return <Redirect to="/" />   
	}
	
	return (
		<div className="contact_form">
			<div className="form-div">
				<form className="contact_form"
				onSubmit={sendEmail}
				//method='post'
				>
					<input className="contact_input"
						type="text"
						name="name"
						placeholder="Name"
						maxlength="30"
						onChange={e => {
							getName(e.target.value)
						}}                        
						value={name}
					/>
											
					<input className="contact_input"
						type="text"
						name="email"
						placeholder="Email address"
						maxlength="40"
						onChange={e => {
							getEmail(e.target.value)
						}}                        
						value={email}
					/>	
					<textarea className="contact_input"
						type="text"
						name="message"
						placeholder="Message"
						maxlength="40"
						onChange={e => {
							getMessage(e.target.value)
						}}                        
						value={message}
					/>

					<input
						className='contact_btn'
						type="submit"
						value="Submit"
					/>		

					{confirm && <span> Thank you for contacting me. I'll respond within 24 hours.</span>}												
				</form>

			</div>	
		</div>				
	)
}	