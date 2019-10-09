window.onload = function () {

    const url = 'http://jsonplaceholder.typicode.com/users'

    $('.btn_load').on('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(users => {
                if ($('.btn_load').val() == 0) {
                    $('.list_conteiner').empty()
                    $('.btn_load').attr('value', 1)

                    for (let i = 0; i < users.length; i++) {
                        
                        $('.list_conteiner').append(
                            `<div class="items_block" id="bl_${users[i].id}">
                                        <input type="checkbox" value="0" class="item_check" id="${users[i].id}">
                                        <label class="label_input" for="${users[i].id}"></label>
                                    <div class='item_info_block'>
                                        <h1 class="serial_nomber" >${users[i].id}</h1>
                                        <div class="contact_info_block">
                                            <h1 class="userName">${users[i].name}</h1>
                                            <h2>${users[i].username}</h2>
                                        </div>
                                        <div class="emain_info_block">
                                            <h4>${users[i].email}</h4>
                                            <h4>${users[i].address.zipcode} ${users[i].address.city}</h4>
                                        </div>
                                    </div>
                                </div>`
                        )
                    }
                } else {
                    alert('Весь список загружен')
                }
            })
    })

    $('.btn_clear').on('click', () => {
        $('.btn_load').attr('value', 0)

        let checkboxs = document.querySelectorAll('.item_check')
        let delCh = $(':checkbox:checked')
        
            for (i = 0; i < delCh.length; i++) {
                let y = delCh[i].id

                $(`#bl_${y}`).fadeOut(300)
                setTimeout(() => {
                    $(`#bl_${y}`).remove()
                }, 300)
            }
        
        
    })
}