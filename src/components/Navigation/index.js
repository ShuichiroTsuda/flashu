import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/router';

const Navigation = () => (
    <div>
        <section className="hero container is-info">
            <div className="hero-body">
                <h1 className="title">
                    <Link to={ROUTES.LANDING}>FLASHU</Link>
                </h1>
            </div>

            <li><Link to={ROUTES.FLASHCARDS}>FlashCard</Link></li>
            <li><Link to={ROUTES.REGISTER}>Register</Link></li>
        </section>
    </div>
);

export default Navigation;