import React from 'react'
import { motion } from 'framer-motion'

const CoinItem = (props) => {
  return (
    <motion.div className='coin-row' whileHover={{scale:1.03, transition: {ease: 'easeInOut', duration:0.2}}}>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt=''/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </motion.div>
  )
}

export default CoinItem