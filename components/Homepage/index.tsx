import { Message } from './Message'
import style from './HomePage.module.scss'
import { motion } from 'framer-motion'

export const HomePage = () => {
    return (
        <div className={style.body}>
            <div className={style.main}>
                <div className={style.items}> 
                    <Message styles={{ borderRadius: "18px 18px 18px 4px" }} duration={0.1} content="Hello, I'm Atlas." />
                    <Message styles={{borderRadius: "4px 18px 18px 18px"}}  duration={1} content="I'm Full Stack Developer." />
                </div>
            </div>
        </div>
    )
}