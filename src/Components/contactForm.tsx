import '../Style/Footer.css';
export default function ContactForm() {
  return (
    <div className='contact-form'>
      <div className='contact-content'>
        <span className='get-in-touch'>
          Get in Touch
        </span>
        <p className='details'>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing.
          Eu leo molestie vel, ornare non id blandit netus.
        </p>
          <div className='grid-container'>
            <div className='email'>
                <input type="email"  placeholder="Email" className='input-email'/>
            </div>
            <div className="message">
                <input type="text"  placeholder= "Message" className='input-message' />
            </div>
            <div className="message">
                <button className='btn-contact'>Send</button>
            </div>
          </div>
      </div>
    </div>
  )
}





