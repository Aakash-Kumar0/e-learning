
import { FaBell } from "react-icons/fa";
import BgImage from '../../assets/bg.png'
import { motion } from "framer-motion"

const bgstyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundposition: "center",
};



const Subscribe = () => {
  return (
    <>
    <section className='bg-[#f7f7f7]'>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{ opacity: 1}}
        
        style={bgstyle} className="container py-24 md:py-48">
            <motion.div 
             initial= {{ opacity: 0, scale: 0.5}}
             whileInView={{ opacity: 1, scale: 1}}
            className="felx flex-col justify-center">
                <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                    <h1 className='text-4xl font-bold !leading-snug'>450K+ Students are learning from us</h1>
                    <p>Exclusive access to our growing library of learning content.</p>
                    <a className='primary-btn !mt-8 inline-flex items-center gap-4 group'>Subscribe Now
                        <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    </section>
    </>
  )
}

export default Subscribe
