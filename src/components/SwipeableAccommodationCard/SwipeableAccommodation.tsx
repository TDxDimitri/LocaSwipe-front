import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import { AccommodationCard } from '../ui/AccommodationCard/AccommodationCard';
import './SwipeableAccommodation.scss';

interface SwipeableAccommodationProps {
    accommodations: {
        id: string;
        image: string;
    }[];
}

export const SwipeableAccommodation = ({ accommodations }: SwipeableAccommodationProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childRefs = useMemo(
        () => Array(accommodations.length).fill(0).map(() => React.createRef<TinderCard>()),
        [accommodations.length]
    );

    const updateCurrentIndex = (val: number) => {
        setCurrentIndex(val);
    };

    const canGoBack = currentIndex < accommodations.length - 1;
    const canSwipe = currentIndex >= 0;

    const swiped = (direction: string, index: number) => {
        if (direction === 'right') {
            updateCurrentIndex(index + 1);
        } else if (direction === 'left') {
            updateCurrentIndex(index - 1);
        }
    };

    const swipe = async (dir: string) => {
        if (canSwipe && currentIndex < accommodations.length) {
            await childRefs[currentIndex].current?.swipe(dir);
            if (dir === 'right') {
                updateCurrentIndex(currentIndex + 1);
            } else if (dir === 'left') {
                updateCurrentIndex(currentIndex - 1);
            }
        }
    };

    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex - 1;
        updateCurrentIndex(newIndex);
    };

    return (
        <div className="container">
            <div className="cardContainer">
                {accommodations.map((accommodation, index) => (
                    <TinderCard
                        key={accommodation.id}
                        ref={childRefs[index]}
                        className="swipe"
                        onSwipe={(dir) => swiped(dir, index)}
                    >
                        <div style={{ width: '100%', zIndex: accommodations.length - index }}>
                            <AccommodationCard image={accommodation.image} />
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className="buttons">
                <button style={{ backgroundColor: !canSwipe ? '#c3c4d3' : undefined }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canGoBack ? '#c3c4d3' : undefined }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe ? '#c3c4d3' : undefined }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
        </div>
    );
};
