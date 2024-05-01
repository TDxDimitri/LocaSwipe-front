import React, { useState, useRef, useMemo, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './SwipeableAccommodation.scss';

const SwipeableAccommodationCard = ({ accommodations }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(() => {
        return Array(accommodations.length).fill(0).map(() => React.createRef());
    }, [accommodations.length]);

    const updateCurrentIndex = (val) => {
        if (val !== null) {
            setCurrentIndex(val);
            currentIndexRef.current = val;
        }
    };

    useEffect(() => {
        if (accommodations.length > 0) {
            updateCurrentIndex(accommodations.length - 1);
        }
    }, [accommodations]);

    const canGoBack = currentIndex < accommodations.length - 1;

    const canSwipe = currentIndex !== null && currentIndex >= 0;

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        if (currentIndexRef.current >= idx) {
            childRefs[idx].current?.restoreCard();
        }
    };

    const goBack = async () => {
        if (!canGoBack || !childRefs[currentIndex + 1]) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current?.restoreCard();
    };

    const swipe = async (dir) => {
        if (!canSwipe || !childRefs[currentIndex]) return;
        if (currentIndex < accommodations.length) {
            await childRefs[currentIndex].current?.swipe(dir);
        }
    };

    return (
        <div className="swipeable-accommodation-card-container">
            <div className="card-container">
                {accommodations.map((accommodation, index) => (
                    <TinderCard
                        key={accommodation.id}
                        ref={childRefs[index]}
                        className="swipe"
                        onSwipe={(dir) => swiped(dir, accommodation.name, index)}
                        onCardLeftScreen={() => outOfFrame(accommodation.name, index)}
                    >
                        <div
                            style={{ backgroundImage: `url(${accommodation.image})` }}
                            className="card"
                        >
                            <h3>{accommodation.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className="buttons">
                <button
                    style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
                    onClick={() => swipe('left')}
                    disabled={!canSwipe}
                >
                    Swipe left!
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
                    Swipe right!
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
