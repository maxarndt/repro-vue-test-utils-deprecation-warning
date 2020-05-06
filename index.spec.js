const { createLocalVue, mount } = require('@vue/test-utils')

it('destroy', () => {
	const localVue = createLocalVue()
	const MyComponent = localVue.component('my-component', { template: '<div><input /></div>' })
	const wrapper = mount(MyComponent, { localVue })
	wrapper.destroy()
	expect(wrapper.find('input').exists()).toBe(true)
})
