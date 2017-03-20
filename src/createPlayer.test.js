import React from 'react';
import { shallow, mount } from 'enzyme';
import CreatePlayer from './createPlayer.js';

describe('CreatePlayer', () => {

  it('has a className of createField', () => {
    const wrapper = shallow(<CreatePlayer/>);

    expect(wrapper.find('.createField').length).toBe(1);
  });

  it('has two input fields', () => {
    const wrapper = shallow(<CreatePlayer/>);

    expect(wrapper.find('input').length).toBe(2);
  });

  it('has a submit button', () => {
    const wrapper = shallow(<CreatePlayer/>);

    expect(wrapper.find('button').length).toBe(1)
  });

  it('has a state for name that starts as a string', () => {
    const wrapper = shallow(<CreatePlayer/>);

    expect(wrapper.state('title')).toBe('');
  });

  it('has a state for body that starts as a string', () => {
    const wrapper = shallow(<CreatePlayer/>);

    expect(wrapper.state('body')).toBe('');
  });

  it('name state is reflected by what was typed in input field', () => {
    const wrapper = mount(<CreatePlayer/>);

    const input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 'tim' } });

    expect(input.props().value).toBe('tim');
    expect(wrapper.state('title')).toBe('tim');
  });

  it('body state is reflected by what was typed in input field', () => {
    const wrapper = mount(<CreatePlayer/>);

    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'tim' } });

    expect(wrapper.state('body')).toBe('tim');
    expect(input.props().value).toBe('tim');
  });

  it('submit button', () => {
    const mockedSubmit = jest.fn();

    const wrapper = mount(<CreatePlayer submitPlayer={mockedSubmit} />);

    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'tim' } });

    wrapper.find('button').simulate('click');

    expect(input.props().value).toBe('');
    expect(wrapper.state('body')).toBe('');
  });

  it('submits player', () => {
    const mockedSubmit = jest.fn();

    const wrapper = mount(<CreatePlayer submitPlayer={mockedSubmit} />);

    wrapper.find('button').simulate('click');

    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith({ title: '', body: ''});
  });
});
