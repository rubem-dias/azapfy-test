import React, { useEffect, useState } from "react";
import { getHeroes } from '../api/index'
import Card from '../cards/index'
import '../../assets/style/main.css'

export default function Main() {

  const [heroes, setHeroes] = useState([]);

  const returnHeroes = heroes.map((hero) => {
    return <Card key={hero.id} image={hero.images.md} name={hero.name}/>
})  

    useEffect(() => {
        let mounted = true;
        getHeroes()
            .then(items => {
                if(mounted)
                    setHeroes(items)
            })

        return () => mounted = false;

    }, [])

    return (
        <div className="main-card-div">
            {returnHeroes}
        </div>
    )
}

