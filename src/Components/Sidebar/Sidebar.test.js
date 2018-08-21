import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';

window.fetch = jest.fn()
                 .mockImplementationOnce(() => ({
                   status: 200,
                   json: () => new Promise((resolve, reject) => {
                     resolve({
                      "title": "Attack of the Clones",
                      "episode_id": 2,
                      "opening_crawl": "There is unrest in the Galactic\r\nSenate. "
                  })
                   })
                 }))
                 .mockImplementationOnce(() => ({
                   status: 500,
                 }))

describe('Sidebar', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const renderedComponent = await shallow(<Sidebar />)
      await renderedComponent.update()
      expect(renderedComponent.state('title').length).toEqual("Attack of the Clones")
    })
    
    it.skip('sets the state componentDidMount on error', async () => {
      const renderedComponent = await shallow(<Sidebar />)
      await renderedComponent.update()
      expect(renderedComponent.state('errorStatus')).toEqual('Error fetching groceries')
    })
  })
})