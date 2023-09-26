import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
export default function Contact() {

  const{user}=useAuth0()
  return (
    <> 
     

      <div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4912475082383!2d81.05402187379823!3d26.887900361159424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20a5bc0d5db%3A0xfd143da87c488d25!2sBabu%20Banarasi%20Das%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1693764842776!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <h2 className='contactBox'>Contact Us</h2>

        <div className='contactBox'>

          <form className='contactForm' action="https://formspree.io/f/xeqbkkvr" method='POST'>
            <input type="text" name='username' placeholder='Enter username' required autoComplete='off' value={user?user.name:''} />
            <input type="email" name='email' placeholder='Enter your Email' required autoComplete='off' value={user?user.email:''}/>
            <textarea name="Message" id="" cols="10" rows="5" placeholder='Enter your message' required autoComplete='off'></textarea>

            <input className='submit btn' type="submit" value="Submit "  />
          </form>
        </div>  

      </div>
    </>
      )
}
