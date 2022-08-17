function n() {
    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            storeImages.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                }
                else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                        console.log(filter)
                    }
                    else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
}
n();