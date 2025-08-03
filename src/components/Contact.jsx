import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


//wUUl7SVWSitGHEU5w
//template_r58mw28
//service_n3708ws
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoading(true)
    
    emailjs.send(
      'service_n3708ws',
      'template_r58mw28',
      {
        from_name: form.name,
        to_name: 'Michell',
        from_email: 'Michellissa5@gmail.com',
        message: form.message,
      },
      'wUUl7SVWSitGHEU5w'
    )
    .then(() =>{
      setLoading(false);
      alert('Tack, jag hör av mig så snart som möjligt');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (Error) => {
      setLoading(false)
      console.log(error)

      alert('Något gick ')
    } )
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Ta kontakt</p>
        <h3 className={styles.sectionHeadText}>Kontakt</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Namn</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Vad heter du?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
             <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='example@gmail.com'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
             <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Meddelande</span>
            <textarea rows={7} type='text' name='message' value={form.message} onChange={handleChange} placeholder=''
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Skickas...' : 'Skicka'}</button>



        </form>

      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      ><EarthCanvas/></motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")