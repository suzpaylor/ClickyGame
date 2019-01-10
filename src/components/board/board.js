import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'image1',
        img: 'img/250x180/image1.png',
        clicked: false
    },
    {
        name: 'image2',
        img: 'img/250x180/image2.png',
        clicked: false
    },
    {
        name: 'image3',
        img: 'img/250x180/image3.png',
        clicked: false
    },
    {
        name: 'image4',
        img: 'img/250x180/image4.png',
        clicked: false
    },
    {
        name: 'image5',
        img: 'img/250x180/image5.png',
        clicked: false
    },
    {
        name: 'image6',
        img: 'img/250x180/image6.png',
        clicked: false
    },
    {
        name: 'image7',
        img: 'img/250x180/image7.png',
        clicked: false
    },
    {
        name: 'image8',
        img: 'img/250x180/image8.png',
        clicked: false
    },
    {
        name: 'image9',
        img: 'img/250x180/image9.png',
        clicked: false
    },
    {
        name: 'image10',
        img: 'img/250x180/image10.png',
        clicked: false
    },
    {
        name: 'image11',
        img: 'img/250x180/image11.png',
        clicked: false
    },
    {
        name: 'image12',
        img: 'img/250x180/image12.png',
        clicked: false
    },
    {
        name: 'image13',
        img: 'img/250x180/image13.png',
        clicked: false
    },
    {
        name: 'image14',
        img: 'img/250x180/image14.png',
        clicked: false
    },
    {
        name: 'image15',
        img: 'img/250x180/image15.png',
        clicked: false
    },
    {
        name: 'image16',
        img: 'img/250x180/image16.png',
        clicked: false
    },
    {
        name: 'image17',
        img: 'img/250x180/image17.png',
        clicked: false
    },
    {
        name: 'image18',
        img: 'img/250x180/image18.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Now focus... just one click per character</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}