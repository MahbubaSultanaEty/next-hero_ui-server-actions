import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>
            <h2>Hero Page</h2>
            <Button>Shop Now</Button>
            <Button variant='secondary'>Shop Now</Button>
            <Button variant='tertiary'>Shop Now</Button>
            <Button variant='outline' >Shop Now</Button>
            <Button variant='ghost' >Shop Now</Button>
            <Button variant='danger' >Shop Now</Button>
            <Button variant='danger-soft' >Shop Now</Button>
        </div>
    );
};

export default HeroPage;