import React from 'react';
import { FaGithub } from 'react-icons/fa'

const GithubLink = () => {
    return (
        <div className="github" title="Ir al repositorio"> <a
            href="https://github.com/IrisMazzuca/Ada-It/tree/master/26-Pastry-Recipes">
            <FaGithub /></a>
        </div>
    );
}

export default GithubLink;