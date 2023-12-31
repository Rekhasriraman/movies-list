import dom from '../dom.js';
import deleteMovieHandler from '../handlers/deleteMovieHandler.js';

const createMovie = (movieData) => {
    // Create a container
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = movieData.id;

    // Create an img
    const img = document.createElement('img');
    img.src = movieData.src;
    img.alt = movieData.title;

    // Create title
    const title = document.createElement('h6');
    title.innerText = movieData.title;

    // Create a year
    const year = document.createElement('h5');
    year.innerText = movieData.year;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteBtn';
    deleteButton.addEventListener('click', () => {
        deleteMovieHandler(movieData.id);
    });

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'editBtn';
    editButton.addEventListener('click', () => {
        dom.btn.innerText = 'Edit Movie';
        container.classList.add('selected');
        dom.titleInput.value = movieData.title;
        dom.sourceInput.value = movieData.src;
        dom.year.value = movieData.year;
    });

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    btnContainer.append(deleteButton, editButton);

    container.append(img, title, year, btnContainer);

    return container;
};
export default createMovie;