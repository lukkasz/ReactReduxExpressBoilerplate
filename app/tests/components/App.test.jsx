import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import App from 'app/components/App';

describe('App', () => {
	
	let component;

	beforeEach(()=>{
		component = shallow(<App />);
	});

	it('shows a row', ()=>{
		expect(component.find('.row')).to.exist;
	});

	it('shows ul.list-group element', () => {
		expect(component.find('ul.list-group')).to.exist;
	});

	it('shows 7 li.list-group-item elements', () => {
		expect(component.find('.list-group-item').length).to.equal(7);
	});

});	