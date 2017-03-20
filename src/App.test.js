import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('has a div with a class of App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app').length).toBe(1);
  });

  it('state starts with player as an emtpy array', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('players')).toEqual([]);
  });

  it('will not display cards if there are none', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.displayCard').length).toBe(0);
  });

  it('will display cards if players are inside state', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ players: [{id: 1, title: 'tim', body: 'is super cool'}] });

    expect(wrapper.find('.displayCard').length).toBe(1);
    expect(wrapper.find('.displayCard').length).toBe(1);
  });

  it('can create a player and display it', () => {

    const wrapper = mount(<App />);

    const inputTitle = wrapper.find('input').first();
    inputTitle.simulate('change', { target: { value: 'tim' } });

    const inputBody = wrapper.find('input').last();
    inputBody.simulate('change', { target: { value: 'woot' } });

    wrapper.find('button').simulate('click');

    expect(typeof wrapper.state('players')[0]).toEqual('object');
  });

});
