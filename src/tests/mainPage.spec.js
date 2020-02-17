
// и компонент, который хотим протестировать
import { shallowMount } from '@vue/test-utils'
import MainPage from '../components/mainPage'

describe('Компонент MainPage', () => {
    // Теперь монтируем компонент и получаем wrapper
    const wrapper = shallowMount(MainPage)
  
    // it('отображает корректную разметку', () => {
    //   expect(wrapper.html()).toContain(`<p>Hi</p>`)
    // })

    it('нажатие на div.hello должно поменять текст', () => {
        const hello = wrapper.find('.hello')
       // expect(hello.text()).toBe('Hello Kitty')
        expect(wrapper.vm.name).toBe('Kitty')
        hello.trigger('click')
        expect(wrapper.vm.name).toBe('Bob')

      })
    


  })

  
  
