/**
 * Created by barak on 20/08/2017.
 */
import React from 'react';
import   GridTable from '../components/GridTable';
import {shallow, render} from 'enzyme';
import PersonRow from "../components/PersonRow";

describe('Testing the main GridTable component', () => {

    it('test whether main component includes main table', () => {
        const wrapper = shallow(<GridTable currentIndex={1}
                                           stopIndex={1}
                                           data={[{
                                               id: 204386882,
                                               name: "barak",
                                               date: (new Date(1992, 5, 15, 8, 50).toDateString()),
                                               grade: 80,
                                               subject: "Computer science",
                                               email: "Barak@gmail.com",
                                               address: "Avital 58 ",
                                               city: "Modiin",
                                               country: "Israel",
                                               zip: "123456"
                                           }]}
                                           currentFilter={''}
                                           viewPerson={null}/>
        );
        expect(wrapper.find('.table-container').exists()).toBe(true);
    });

    it('Check that table without data dont have any row', () => {
        const wrapper = shallow(<GridTable currentIndex={0}
                                           stopIndex={0}
                                           data={[]}
                                           currentFilter={''}
                                           viewPerson={null}/>);

        expect(wrapper.contains(<PersonRow/>)).toBe(false);
    });


});