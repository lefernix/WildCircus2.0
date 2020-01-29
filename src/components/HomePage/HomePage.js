import React from 'react';
import Slideshow from '../Slider/Slider';
import './HomePage.css';

function HomePage() {
    return(
        <div className="HomePage">
            <Slideshow/>
            <div className="articles__list">
                <article className="article__list__item">
                    <p>Title 1</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum purus eget justo aliquet, et viverra enim vestibulum. Vivamus feugiat risus ante. Fusce mattis elit ut lorem fringilla, eu cursus orci imperdiet.</p>
                </article>
                <article className="article__list__item">
                    <p>Title 2</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum purus eget justo aliquet, et viverra enim vestibulum. Vivamus feugiat risus ante. Fusce mattis elit ut lorem fringilla, eu cursus orci imperdiet.</p>
                </article>
                <article className="article__list__item">
                    <p>Title 3</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum purus eget justo aliquet, et viverra enim vestibulum. Vivamus feugiat risus ante. Fusce mattis elit ut lorem fringilla, eu cursus orci imperdiet.</p>
                </article>
                <article className="article__list__item">
                    <p>Title 4</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum purus eget justo aliquet, et viverra enim vestibulum. Vivamus feugiat risus ante. Fusce mattis elit ut lorem fringilla, eu cursus orci imperdiet.</p>
                </article>
            </div>
        </div>
    )
}
export default HomePage;