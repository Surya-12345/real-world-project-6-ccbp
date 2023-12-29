import { useEffect, useState } from "react";
import axios from "axios";
import SearchSection from "./SearchSection";
import Card from "./Card";

const Body = () => {
    const [loading, setLoading] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(
        "https://pokeapi.co/api/v2/pokemon/?limit=21"
    );
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [pokemonName, setPokemonName] = useState(null);




    useEffect(() => {
        setLoading(true);
        axios
            .get(currentPage)
            .then((res) => {
                res.data.results.map((obj) => {
                    setPokemonList([]);
                    axios
                        .get(obj.url)
                        .then((res) => {
                            setPokemonList((prevPokemonList) => [
                                ...prevPokemonList,
                                res.data,
                            ]);
                            setLoading(false);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });

                // console.log(pokemonList);
                setPrevPage(res.data.previous);
                setNextPage(res.data.next);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage]);

    const gotoPrevPage = () => {
        setCurrentPage(prevPage);
    };

    const gotoNextPage = () => {
        setCurrentPage(nextPage);
    };

    return (
        <>


            <SearchSection pokemonName={pokemonName} setPokemonName={setPokemonName} />
            {loading &&
                <div className="d-flex justify-content-center aligs-items-center">
                    <h1 style={{ fontSize: "3rem" }}>Loading...</h1>
                </div>
            }
            <Card pokemonList={pokemonList} pokemonName={pokemonName} setPokemonName={setPokemonName} />;
            <div className="container">
                <div className="row  text-center">
                    <div className="col-6">
                        {prevPage && (
                            <button
                                className="btn btn-primary rounded-lg"
                                onClick={gotoPrevPage}
                            >
                                previous
                            </button>
                        )}
                    </div>
                    <div className="col-6">
                        {nextPage && (
                            <button
                                className="btn btn-primary rounded-lg"
                                onClick={gotoNextPage}
                            >
                                next {" >"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
