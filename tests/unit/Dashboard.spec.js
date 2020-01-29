import Dashboard from '@/views/Dashboard'
import { mount } from '@vue/test-utils'

describe('Dashboard', () => {
    it('If the events are still loading the loading message should be visible', () => {
        const wrapper = mount(Dashboard);
        expect(wrapper.find('p').exists()).toBe(true);
    });
    it('If the events are fetched the loading message should not be visible', () => {
        const wrapper = mount(Dashboard);
        wrapper.setData({ isLoading: false });
        expect(wrapper.find('p').exists()).toBe(false);
    });
});