import React from 'react';

function Nav() {

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    const categories = [
        {
            name: 'porfolio',
            description: 'A viewing of all of my projects.'
        },
        {
            name: 'resume',
            description: 'My resume to show my acheivements and credentials.'
        }
    ]
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="laptop"> 💻</span> Kevin Jackson
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;