import "./style.css"
const Header = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light ">
                <div class="container-fluid" data-aos="zoom-in-down">
                    <a class="navbar-brand" href="#">
                        <img src="/assets/pokeball.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" data-aos="rotate" data-aos-anchor-placement="top-top" />
                        Pokémon World
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 "><img src="/assets/CHARIZARD.svg" alt="pokemon" /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 "><img src="/assets/SQUIRTLE.svg" alt="pokemon" /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 "><img src="/assets/PIKACHU.svg" alt="pokemon" /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 "><img src="/assets/Jigglypuff.svg" alt="pokemon" /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 "><img src="/assets/BULBASAUR.svg" alt="pokemon" /></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )

}

export default Header;