import React, { useState } from 'react';
import Modal from '../Modal';

const Project = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([

        {
            name: 'Project Pizza',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Run Buddy',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'PIN IT!',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Book Search Engine',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Weather Dashboard',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Food Festival',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Deep Thoughts',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Note Taker',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Employee Database',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Team Profile Generator',
            category: 'portfolio',
            description: 'Lorem'
        },
        {
            name: 'Budget Tracker',
            category: 'portfolio',
            description: 'Lorem'
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i })
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};


export default Project;