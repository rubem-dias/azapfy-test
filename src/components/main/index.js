import React, { useEffect, useState } from "react";
import { getHeroes } from '../api/index'

export default function Main() {

  const [heroes, setHeroes] = useState([]);

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
        <div>
            <ul>
                {heroes.map(item => <li key={item.id}> <img src={item.images.md}></img></li>)}
            </ul>
        </div>
    )
}

