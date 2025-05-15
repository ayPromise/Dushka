import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const sendEmail = async (form: HTMLFormElement): Promise<string> => {
    const response = await emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })

      if(response.status === 200)
      {
        return "Thank you for the feedback ;)"
      }else return "Something went wrong! I am really sorry ;("
      
    };

  export default sendEmail