import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // move to jest setup file

import { Hero } from ".";

describe('<Hero />', () => {
    it('should display title and description', () => {
        render(<Hero title='Good morning!' description='welcome to the protal' />);
        expect(screen.getByText("Good morning!")).toBeInTheDocument();
    });

    it('should display title, description and three links', () => {
        const links = [
            {
                "type": "primary",
                "text": "Learn more",
                "postfixIcon": "right-arrow"
            },
            {
                "type": "secondary",
                "text": "Watch video",
                "prefixIcon": "video"
            }, {
                "type": "primary",
                "text": "Go"
            }
        ];

        render(<Hero title='Good morning!' description='welcome to the protal' links={links} />);
        expect(screen.getByText("Good morning!")).toBeInTheDocument();
        expect(screen.getByText("welcome to the protal")).toBeInTheDocument();

        // links validation
        expect(screen.getAllByRole('link').length).toEqual(3);
    });

    it('should display additionalHeader, title and description', () => {
        render(<Hero additionalHeader='CAREERS' title='Good morning!' description='welcome to the protal' />);
        expect(screen.getByText("Good morning!")).toBeInTheDocument();
        expect(screen.getByText("CAREERS")).toBeInTheDocument();
    });
});