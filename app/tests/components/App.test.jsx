import {renderComponent, expect} from 'app/tests/test_helper';
import App from 'app/components/App';

describe('App', () => {
	
	let component;

	beforeEach(()=>{
		component = renderComponent(App);
	});

	it('shows a row', ()=>{
		expect(component).to.have.class('roww');
	
	});

	it('shows ul.list-group element', () => {
		expect(component.find('ul.list-group')).to.exist;
	});

	it('shows 7 li.list-group-item elements', () => {
		expect(component.find('.list-group-item').length).to.equal(7);
	});

});	