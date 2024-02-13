import Form from "./Form"
import contactme1 from '../assets/images/contactme1.jpg'


export default function Contact (){
  return (
    <>
  <img className="contact-img" src={contactme1} alt='image of a phone with a Contact Me text'/>
      <h4 className="contact-h4">Get in Touch</h4>
  <div className="contact-container">
    <div className="contact-text">
      <p>Your message could be the beginning of something extraordinary.</p>
      <p>I&apos;m always on the lookout for exciting opportunities and collaborations. Whether you have a business inquiry, a creative project in mind, or just want to explore potential collaborations, please don&apos;t hesitate to reach out.</p>
    </div>
  
    <div className="contact-form">
      <Form />
    </div>
  </div>
</>

)}
