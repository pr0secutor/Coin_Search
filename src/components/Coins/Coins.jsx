import React from 'react'
import CoinItem from '../CoinItem'
import Coin from '../../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'
import { motion, } from 'framer-motion'

const container = {
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: {
        opacity:0,
        y:60
    },
    show: {
        opacity:1,
        y:0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
};

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
            
            {props.coins.map((coins, i) => (
                <motion.div
                key={coins.id}
                initial={{opacity:0, y:60}}
                animate={{opacity:1, y:0}}
                transition={{ease: [0.6, 0.01, -0.05, 0.95], duration:0.45, delay:i*0.05}}
                >
                    <Link to={`/coin/${coins.id}`} element={<Coin/>}>
                        <CoinItem coins={coins} key={coins.id}/>
                    </Link>
                </motion.div>
            ))}
            
        </div>
    </div>
  )
}

export default Coins