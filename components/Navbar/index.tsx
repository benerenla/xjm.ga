import style from './Navbar.module.scss'
import { motion, MotionStyle } from 'framer-motion'
import { StringifyOptions } from 'querystring';
import { Status } from 'components/Helper/Status';
import { CgMenu } from 'react-icons/cg'
import { useState } from 'react';
import { CONFIG, INavbarItems } from '@libs/config';
import Link from 'next/link';



export const Navbar = () => {
    
    return (
        <motion.nav 
            className={style.nav}
            animate={{y: 0}}
            initial={{y: "-100vh"}}
            transition={{
                type: 'spring',
                stiffness: 50
            }}
        >
            <div className={style.items}>
                <div>
                    <Status />
                </div>
                <div className={style.list_items}>
                  {CONFIG.items.map((item: INavbarItems, index: number) => (
                    <Link href={item.href} key={index}><a>{item.title}</a></Link>
                  ))}
                </div>
            </div>
        </motion.nav>
    )
}