import React, { useState } from 'react';
import Modal from '../Modal';


const Projects = ({ name }) => {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const [currentProject, setCurrentProject] = useState();

    // const [projects] = useState([
    //     {
    //         name: '',
    //         description: ''
    //     }
    // ]);

    // const currentProject = projects.filter(project => project.name === name);

    // const toggleModal = (image, i) => {
    //     setCurrentProject({ ...image, index: i })
    //     setIsModalOpen(!isModalOpen);
    // }


    // return (
    //     <div>
    //         {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
    //         <div className='flex-row'>
    //             {currentProject.map((image, i) => (
    //                 <img
    //                     src={require(``)}
    //                     alt={image.name}
    //                     className="img-thumbnail mx-1"
    //                     onClick={() => toggleModal(image, i)}
    //                     key={image.name}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default Projects;