import React from 'react'
import {motion} from "framer-motion"
import {slideUpVariants, zoomInVariants} from './animation'

const About = () => {
  return (
    <div className = 'lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
      initial = "hidden"
              whileInView = "visible"
              variants= {slideUpVariants}
              className = 'lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
<motion.h1 
      variants= {slideUpVariants}
        className = 'text-yellow-500 text-2xl'>
WELCOME TO</motion.h1>
<motion.h1 
      variants= {slideUpVariants}
     className = 'text-white uppercase text-[40px] font-bold'>
     MadhuSudhan EnterPrises</motion.h1>
      <div className='w-[120px] h-[6px] bg-yellow-500'></div>
      <p className='text-2xl italic text-gray-50 mt-[60]'>Lorem ipsum dolor sit, amet consectetur adipisicing elitadipisicing elitadipisicing elit. .</p>
      </motion.div>
      
      <motion.div
      initial = "hidden"
              whileInView = "visible"
              variants= {slideUpVariants}
              className = 'lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>

      <p className='text-white text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam magni suscipit ullam itaque nostrum explicabo consequuntur distinctio, et enim numquam, commodi nemo beatae fugit nesciunt laudantium sed modi doloribus quas sint iste voluptas neque iusto cum? Incidunt fuga blanditiis, quisquam, culpa, ipsum maiores voluptate dolore et consectetur excepturi harum eaque magni doloremque? Saepe, deleniti voluptates modi velit excepturi enim amet eaque reprehenderit quam nostrum! Maiores natus harum veniam vero perspiciatis. Illum minima dolorum accusamus dolores perspiciatis corporis quia ipsa hic quod laborum non ab voluptatibus officiis, perferendis quo aliquid. Obcaecati ducimus accusantium libero perspiciatis deserunt repellendus a reprehenderit! Delectus!</p>
      <motion.button
      variants={zoomInVariants}
      className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'>
            READ MORE
      </motion.button>
      </motion.div>
    </div>
  )
}

export default About
