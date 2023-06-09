let items = document.getElementsByClassName('imgItem')
let cont1 = document.getElementById('firstContainer')
let cont2 = document.getElementById('secondContainer')

//looping of dragging every item into the secondContainer "cont2"
for ( item of items ){
    item.addEventListener('dragstart', (e) => {

        //placing the target element into a javascript object
        let selected = e.target

        cont2.addEventListener('dragover', (e) => {
            //prevents the default not allowed dragging of items into other tags
            e.preventDefault()
        })
        cont2.addEventListener('drop', (e) => {
            //appends the dragged item into the second container i.e. it moves the respective dragged item into the second container
            cont2.appendChild(selected)

            selected = null
            
            //alerting the user 
            alert("Success! The item has been dropped into the container. Click OK")
        })




        
    })
}

function reset(){
    location.reload();
}

