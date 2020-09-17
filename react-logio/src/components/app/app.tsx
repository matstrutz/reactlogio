import React, { useState, useEffect } from 'react';
import { Wrapper, Container, DataComponent } from './app.styles'

const App = () => {
    const [seconds, setSeconds] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const sec: number = Number(seconds.slice(-2));
    const min: number = Number(seconds.substring(2,4));
    const hrs: number = Number(seconds.substring(0,2));

    return <Wrapper min={min} hrs={hrs}>
        <Container>
            <DataComponent>
                { seconds }
            </DataComponent>
        </Container>
    </Wrapper>;
};

export default App;