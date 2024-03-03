import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // move to jest setup file

import { Button } from ".";

describe('test button', () => {
    it('test sample fun', () => {
        render(<Button>Learn more</Button>);
        expect(screen.getByText("Learn more")).toBeInTheDocument(); // can we directly use getByText without screen reference ?
    });
});