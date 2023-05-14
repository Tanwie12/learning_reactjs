import React from 'react'

function Hero({HeroName}) {
    if(HeroName ==='joker'){
        throw new Error('no heore')
    }
  return (
    <div>{HeroName} </div>
  )
}

export default React.memo(Hero)