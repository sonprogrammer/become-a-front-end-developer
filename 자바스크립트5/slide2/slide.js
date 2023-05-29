const menuContainer = document.querySelector('.menu')
const menuControlsContainer = document.querySelector('.menu-controls')
const menuControls = ['previous', 'next']
const menuItems = document.querySelectorAll('.menu1')

class project{
    constructor(container, items, controls){
        this.projectContainer = container
        this.projectControls = controls
        this.projectArray = [...items]
    }

    updateMenu(){
        this.projectArray.forEach(el =>{
            el.classList.remove('board')
            el.classList.remove('Map')
            el.classList.remove('timetable')
        })
        this.projectArray.slice(0, 3).forEach((el, i) =>{
            el.classList.add(`item-${i+1}`)
        })
    }

    setCurrentState(direction){
        if(direction.className == 'menu-controls-previous'){
            this.projectArray.unshift(this.projectArray.pop())
        }else{
            this.projectArray.push(this.projectArray.shift())
        }
        this.updateMenu()
    }
    setControls(){
        this.projectControls.forEach(control =>{
            menuControlsContainer.appendChild(document.createElement('button')).className = `menu-controls-${control}`
            document.querySelector(`.menu-controls-${control}`).innerText = control
        })
    }

    useControls(){
        const triggers = [...menuControlsContainer.childNodes]
        triggers.forEach(control =>{
            control.addEventListener('click', e=>{
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}

const exampleproject = new project(menuContainer, menuItems, menuControls)

exampleproject.setControls()
exampleproject.useControls()