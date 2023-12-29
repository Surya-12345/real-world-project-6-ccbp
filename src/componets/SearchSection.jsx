import { useState } from "react"
import "./style.css"
import Modal from "./Modal"
const SearchSection = ({pokemonName, setPokemonName}) => {
    return (
        <>

            <div className="cantainer">
                <Modal pokemonName={pokemonName} />
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <h3 className="callToSerach">Discover Your Favorite Pokémon Now!</h3>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="inputGroup">
                            <input value={pokemonName}
                                onChange={(e) => { setPokemonName(e.target.value.toLowerCase()) }}
                                className="searchInput" type="text" placeholder="Type Your Pokemon...." />

                            <button
                                type="button" data-bs-toggle="modal" data-bs-target="#pokemonModal"
                                className="searchBtn"><img className="searchIcon" src="/assets/SearchIcon.png" alt="Searcch iocn" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSection