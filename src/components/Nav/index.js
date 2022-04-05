import React from 'react';

function Nav() {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

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
        <header className="flex-row px-1">
            <h2>
                <a data-testid='link' href="/">
                    <span role="img" aria-label="laptop"> 💻</span> Kevin Jackson
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid='about' href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                                }`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}
                            >
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