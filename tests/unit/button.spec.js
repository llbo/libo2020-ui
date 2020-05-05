import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue',() => {
    it('1.测试button能否正常显示slot里的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'li-ui'
            }
        })
        // console.log(wrapper.vm.$el)
        expect(wrapper.text()).to.eq('li-ui')
    })
    it('2.测试icon传入是否能正常显示', () => {
        const wrapper = shallowMount(Button, {
            stubs: { // 替换的功能
                'li-icon': Icon 
            },
            propsData: {
                icon: 'sousuo'
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
    })  
    it('3.测试loading时，按钮是禁用状态', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'li-icon': Icon
            },
            propsData: {
                loading: true
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-jiazai')
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
    })   
    it('4.测试按钮能否正常点击', () => {
        const wrapper = shallowMount(Button, {
            // stubs: ['li-icon'], // 不去渲染icon,只是加一个标签
        })
        expect(wrapper.find('button').trigger('click'))
        expect(wrapper.emitted('click').length).to.eq(1)
    })    
    it('5.测试按钮传入position是否正常显示', () => { // 测试样式
        const wrapper = shallowMount(Button, {
            attachToDocument: true, // 将组件挂载到浏览器上
            stubs: {
                'li-icon': Icon
            },
            slots: {
                default: 'li-ui'
            },
            propsData: {
                iconPosition: 'left',
                icon: 'sousuo'
            }
        })
        let ele = wrapper.vm.$el.querySelector('span')
        expect(getComputedStyle(ele).order).to.eq('2')
        wrapper.setProps({iconPosition:'right'}) // 设置props,在下一个事件循环中取值
        // return wrapper.vm.$nextTick().then(() => {
        //     expect(getComputedStyle(ele).order).to.eq('1')
        // })
        return wrapper.vm.$nextTick(() =>{
            expect(getComputedStyle(ele).order).to.eq('1')
        })
    })          
})
