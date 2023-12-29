import { useEffect } from "react"
import axios from "axios";
import "./style.css"
import { useState } from "react";
const Modal = ({ pokemonName }) => {
    const [pokemonData, setPokemonData] = useState({});

    const [pokemonFound, setPokemonFound] = useState(true)

    useEffect(() => {
        (pokemonName && axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => {
            setPokemonData(res.data)
            setPokemonFound(true);
        }).catch(err => {
            console.log(err)
            setPokemonFound(false);
        }))
        // console.log(pokemonData);
    }, [pokemonName])

    return (
        <div className="modal fade" id="pokemonModal" tabindex="-1" aria-labelledby="PokemonModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content modalContainer">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>


                    <div className="modal-body p-0 ">
                        <div class=" container-fluid d-flex justify-content-center ">



                            {pokemonFound
                                ?
                                <div class="Pokédex">
                                    <div class="item item1">
                                        <img class="modalImage"
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
                                            alt="Pokemon" />
                                    </div>
                                    <div class="item item2">
                                        <h1>bulbasaur</h1>

                                    </div>
                                    <div class="item item3">
                                        <h2>#1</h2>

                                    </div>
                                    <div class="item item4">
                                        <h2>ABILITY</h2>

                                    </div>
                                    <div class="item item5">
                                        <h3>overgrow</h3>
                                        <h3>chlorophyll</h3>
                                    </div>
                                    <div class="item item6">
                                        <h2>TYPE</h2>
                                    </div>
                                    <div class="item item7">
                                        <h3>grass</h3>
                                        <h3>poison</h3>
                                    </div>
                                    <div class="item item8">
                                        <h2>WEIGHT</h2>
                                        <h2>HEIGHT</h2>
                                    </div>
                                    <div class="item item9">
                                        <h3>6.9kg</h3>
                                        <h3>0.7m</h3>
                                    </div>
                                    <div class="item item10">
                                        <h2>STATS</h2>
                                    </div>
                                    <div class="item11">
                                        <p>HP : 45</p>
                                        <p>ATTACK : 49</p>
                                        <p>DEFENSE :49</p>
                                        <p>SPECIAL-ATTACK : 65</p>
                                        <p>SPECIAL-DEFENSE : 65</p>
                                        <p>SPEED : 45</p>
                                    </div>
                                </div>
                                :

                                <h4>Pokémon Not Found</h4>
                            }
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal






    //   api fetched and show these data
    // < div class="Pokédex" >
    //                                 <div class="item item1">
    //                                     <img class="modalImage"
    //                                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
    //                                         alt="Pokemon" />
    //                                 </div>
    //                                 <div class="item item2">
    //                                     <h1>{pokemonData.name}</h1>

    //                                 </div>
    //                                 <div class="item item3">
    //                                     <h2>{"#" + pokemonData.id}</h2>

    //                                 </div>
    //                                 <div class="item item4">
    //                                     <h2>ABILITY</h2>

    //                                 </div>
    //                                 <div class="item item5">
    //                                     {
    //                                         pokemonData.abilities.map((val) => (
    //                                             <h3>{val.ability.name}</h3>
    //                                             // console.log(val.ability.name)
    //                                         )
    //                                         )}
    //                                 </div>
    //                                 <div class="item item6">
    //                                     <h2>TYPE</h2>
    //                                 </div>
    //                                 <div class="item item7">
    //                                     {
    //                                         pokemonData.types.map((val) => (
    //                                             <h3>{val.type.name}</h3>
    //                                             //   console.log(val.type.name)
    //                                         )
    //                                         )
    //                                     }
    //                                 </div>
    //                                 <div class="item item8">
    //                                     <h2>WEIGHT</h2>
    //                                     <h2>HEIGHT</h2>

    //                                 </div>
    //                                 <div class="item item9">
    //                                     <h3> {pokemonData.weight / 10 + "kg"}</h3>
    //                                     <h3>{pokemonData.height / 10 + "m"}</h3>

    //                                 </div>
    //                                 <div class="item item10">
    //                                     <h2>STATS</h2>
    //                                 </div>
    //                                 <div class="item11">
    //                                     {pokemonData.stats.map((val) => (

    //                                         // console.log(val.stat.name.toUpperCase() + " -> " + val.base_stat)
    //                                         < p >{val.stat.name + " " + val.base_stat}</p>
    //                                     )
    //                                     )
    //                                     }
    //                                 </div>
    //                             </div >