import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { DisplayCard } from './displayCard.js';

describe('DisplayCard', () => {

  it('has a div with a class of displayCard', () => {
    const wrapper = shallow(<DisplayCard/>);

    expect(wrapper.find('.displayCard').length).toBe(1);
  });

  it('it has a title and it is displayed in a h1', () => {
    const wrapper = shallow(<DisplayCard title='tim'/>);

    expect(wrapper.find('h1').first().text()).toBe('tim');
  });

  it('it has a body and it is displayed in a h1', () => {
    const wrapper = shallow(<DisplayCard body='is super cool?'/>);

    expect(wrapper.find('h3').first().text()).toBe('is super cool?');
  });

});
