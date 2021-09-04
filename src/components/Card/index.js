
import './Card.css'
import React,{Fragment, useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCard,isComparing, updateItemsComparing, updateItemsDisplay, completeGame } from '../../redux/actions/PokeMemoryActions';


const Card = ({data}) => {

    // const [isFlipped,setIsFlipped]= useState(false);

    // const stateMemory= useSelector(state => state.pokeMemory);
    const {attempts,complete,comparing,cards,itemsComparing,loading,error}= useSelector(state => state.pokeMemory);
    const dispatch= useDispatch();
    
    const handleClick= ()  => {
        const cardsCopy=[...cards];
        const itemsComparingCopy=[...itemsComparing];
        const item= data;
        const elementPos=cards.indexOf(item);
        if(!comparing){
            cardsCopy[elementPos].display=true;
            if(itemsComparingCopy.indexOf(item) < 0 && itemsComparingCopy.length < 2 && item.complete === false){
                itemsComparingCopy.push(item);
                dispatch(updateItemsComparing(itemsComparingCopy));
            }
            if(itemsComparingCopy.length === 2){
                dispatch(isComparing());
                checkPair(itemsComparingCopy, cardsCopy);
            }
        }
    }

    const checkPair= (itemsComparing, cards) => {

        setTimeout(() => {

            const item1=itemsComparing[0];
            const item2=itemsComparing[1];
            const elementPos1=cards.indexOf(item1);
            const elementPos2=cards.indexOf(item2);
            if(item1.name === item2.name){
                cards[elementPos1].complete=true;
                cards[elementPos2].complete=true;
            }else{
                cards[elementPos1].display=false;
                cards[elementPos2].display=false;
            }
            itemsComparing.length=0;
            const gameComplete= cards.filter( item => item.complete === false);
            
            if(gameComplete.length === 0){
                dispatch(completeGame());
            }
            dispatch(updateItemsDisplay(cards));
            dispatch(updateItemsComparing(itemsComparing));
            dispatch(toggleCard());
            dispatch(isComparing());
        }, 1000)
    }

    return (
        
        <ReactCardFlip isFlipped={data.display} flipSpeedBackToFront="0,6" flipDirection="vertical">
            <div className="cardElement">
            <img onClick={handleClick} className="cardImg" src='https://i.pinimg.com/236x/d3/1e/02/d31e02797988ab878c694dd7aa0a3694--red-dragon-white-dragon.jpg' alt={data.name} />
            </div>

            <div className="cardElement">
            <img onClick={handleClick} className="cardImg" src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`} alt={data.name} />
            </div>
        </ReactCardFlip>
    )
}


export default Card;