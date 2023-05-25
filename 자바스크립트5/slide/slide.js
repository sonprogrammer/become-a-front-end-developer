const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item')

class Carouse1{
    constructor(container, items, controls){
        this.carouse1Container = container
        this.carouse1Controls = controls
        this.carouse1Array = [...items]
        
    }

    updateGallery(){
        this.carouse1Array.forEach(el =>{
            el.classList.remove('gallery-item-1')
            el.classList.remove('gallery-item-2')
            el.classList.remove('gallery-item-3')
            el.classList.remove('gallery-item-4')
            el.classList.remove('gallery-item-5')
        })
        this.carouse1Array.slice(0, 5).forEach((el, i)=>{
            el.classList.add(`gallery-item-${i+1}`)
        })
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouse1Array.unshift(this.carouse1Array.pop())
        }else{
            this.carouse1Array.push(this.carouse1Array.shift())
        }
        this.updateGallery()
    }
    setControls(){
        this.carouse1Controls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`
            document.querySelector(`.gallery-controls-${control}`).innerText = control
        })
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control =>{
            control.addEventListener('click', e=>{
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }

}

const exampleCarouse1 = new Carouse1(galleryContainer, galleryItems, galleryControls)

exampleCarouse1.setControls()
exampleCarouse1.useControls()