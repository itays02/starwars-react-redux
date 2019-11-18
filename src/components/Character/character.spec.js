import React from 'react'
import { render } from '@testing-library/react'
import Character from './character'

describe('test character component', () => {
    let data;
    let elementDOM;

    beforeAll(() => {
        data = {
            name: 'Itay the Programmer',
            height: '178',
            gender: 'male',
            mass: '76'
        };

        elementDOM = render(<Character data={data}></Character>);
    });

    test('check whether name is displayed in the document', () => {
        expect(elementDOM.getByText(data.name)).toBeInTheDocument;
    });

    test('check whether height is displayed', () => {
        expect(elementDOM.queryByText(`/${data.height}/`)).toBeInTheDocument;
    });

    test('check whether gender is displayed', () => {
        expect(elementDOM.queryByText(`/${data.gender}/`)).toBeInTheDocument;
    });
});