import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList'


describe('TechList  component', () => {
    it('should be able to add new tech' , () => {
        const { getByText, getByTestId } = render(<TechList />);

        // <button> Adicionar </button>
        fireEvent.click(getByText('Adicionar'));
        // <ul data-testid='tech-list'></ul>
        
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))      
    })
})