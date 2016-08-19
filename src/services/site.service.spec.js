import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import SiteService from './site.service.js';

describe('Site service test', () => {
  let site;

  beforeEach(() => {
    site = new SiteService();
  });

  it('site adds correct', () => {
    site.addSite('Name');
    expect(site.active.name).toBe('Name');
  });

});
