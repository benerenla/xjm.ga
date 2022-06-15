import style from './Message.module.scss'
import { motion, MotionStyle } from 'framer-motion'
import { StringifyOptions } from 'querystring';


type Props = {
    content : string;
    duration : number;
    classes?: string;
    styles?: MotionStyle;
}

export const Message = ({ content, classes, duration, styles, ...props }: Props) => {
    return (
        <motion.div 
            className={`${style.body} ${classes}`}
            animate={{y: "0.5rem", opacity: 1}}
            style={styles}
            initial={{y: "-100vh"}}
            transition={{
                type: "spring",
                delay: duration,
                stiffness: 20,
                duration : 1
            }}
            {...props}
        >
            <h1>{content}</h1>
        </motion.div>
    )
}