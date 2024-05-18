import React, { useState, useRef, useMemo, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './SwipeableAccommodation.scss';
import likeIcon from '../../icons/like-icon.svg';
import skipIcon from '../../icons/skip-icon.svg';

const SwipeableAccommodationCard = ({ accommodations, onLike }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [lastDirection, setLastDirection] = useState();
    const [cardIds, setCardIds] = useState(() => Array.from({ length: accommodations.length }, (_, i) => i));
    const [animationSpeed, setAnimationSpeed] = useState(500);
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(() => {
        return Array(accommodations.length).fill(0).map(() => React.createRef());
    }, [accommodations.length]);

    const updateCurrentIndex = (val) => {
        if (val !== null && val < cardIds.length) {
            setCurrentIndex(val);
            currentIndexRef.current = val;
        }
    };

    useEffect(() => {
        if (cardIds.length > 0) {
            updateCurrentIndex(cardIds.length - 1);
        }
    }, [cardIds]);

    useEffect(() => {
        setCardIds(() => Array.from({ length: accommodations.length }, (_, i) => i));
    }, [accommodations]);

    const canGoBack = currentIndex < cardIds.length - 1;
    const canSwipe = currentIndex !== null && currentIndex >= 0;

    const swiped = async (direction, accommodation, index) => {
        setLastDirection(direction);
        const newIndex = cardIds.findIndex((id) => id === index) - 1;
        updateCurrentIndex(newIndex);

        // Si le swipe est à droite, appelez la fonction onLike
        if (direction === 'right') {
            onLike(accommodation.id); // Call the like function
        }

        // Définir la vitesse d'animation
        setAnimationSpeed(100);

        // Attendre que l'animation se termine avant de mettre à jour cardIds
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        setCardIds((prevCardIds) => prevCardIds.filter((id) => id !== index));
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        if (currentIndexRef.current >= idx) {
            childRefs[idx].current?.restoreCard();
        }

        // Réinitialiser la vitesse d'animation
        setAnimationSpeed(500);
    };

    const goBack = async () => {
        if (!canGoBack || !childRefs[currentIndex + 1]) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current?.restoreCard();
    };

    const swipe = async (dir) => {
        if (!canSwipe || !childRefs[currentIndex]) return;
        if (currentIndex < cardIds.length) {
            await childRefs[currentIndex].current?.swipe(dir);
        }
    };

    return (
        <div className="swipeable-accommodation-card-container">
            <div className="card-container">
                {cardIds.map((index) => {
                    const accommodation = accommodations[index];
                    return (
                        <TinderCard
                            key={accommodation.id}
                            ref={childRefs[index]}
                            className="swipe"
                            onSwipe={(dir) => swiped(dir, accommodation, index)}
                            onCardLeftScreen={() => outOfFrame(accommodation.name, index)}
                            flickOnSwipe={false}
                        >
                            <div
                                style={{ backgroundImage: `url(${accommodation.image})` }}
                                className="card"
                            >
                                <h3>{accommodation.name}</h3>
                            </div>
                        </TinderCard>
                    );
                })}
            </div>
            <div className="buttons">
                <button
                    style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
                    onClick={() => swipe('left')}
                    disabled={!canSwipe}
                >
                    <img src={skipIcon} alt="Skip" />
                </button>
                <button
                    style={{ backgroundColor: !canGoBack && '#c3c4d3' }}
                    onClick={() => goBack()}
                    disabled={!canGoBack}
                >
                    Undo swipe!
                </button>
                <button
                    style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
                    onClick={() => swipe('right')}
                    disabled={!canSwipe}
                >
                    <img src={likeIcon} alt="Like" />
                </button>
            </div>
            {lastDirection ? (
                <h2 className="info-text">You swiped {lastDirection}</h2>
            ) : (
                <h2 className="info-text">Swipe a card or press a button to get started!</h2>
            )}
        </div>
    );
};

export default SwipeableAccommodationCard;
