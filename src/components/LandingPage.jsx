import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src='https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Fullstack Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                            <div className='social-links'>
                                {/* LinkedIn */}
                                <a href='http://google.com' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-linkedin' aria-hidden='true' />
                                </a>

                                {/* Github */}
                                <a href='http://google.com' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-github' aria-hidden='true' />
                                </a>

                                {/* Freecodecamp */}
                                <a href='http://google.com' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-free-code-camp' aria-hidden='true' />
                                </a>

                                {/* YouTube */}
                                <a href='http://google.com' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-youtube' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}