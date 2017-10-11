import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';
import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function () {

    it('should render title and timestamp', function () {
      const title = 'My title here';
      const updatedAt = 1507681730075;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('10/10/17');
    });

    it('should set default title if no title set', function () {
      const title = '';
      const titleTextDefault = 'Untitled note';
      const updatedAt = 1507681730075;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>);

      expect(wrapper.find('h5').text()).toBe(titleTextDefault);
    });

  });
}
