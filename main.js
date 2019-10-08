window.onload = function () {

    const url = 'http://jsonplaceholder.typicode.com/users'

    $('.btn_load').on('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(users => {
                if ($('.btn_load').val() == 0) {
                    $('.list_conteiner').empty()
                    $('.btn_load').attr('val = 1');

                    for (let i = 0; i < users.length; i++) {
                        $('.list_conteiner').append(
                            `<div class="items_block" id="${users[i].id}">
                                    <input type="checkbox" value="0" class="item_input" id="${users[i].id}">
                                    <div class='item_info_block'>
                                        <h1 class="serial_nomber" >${users[i].id}</h1>
                                        <div class="contact_info_block">
                                            <h1>${users[i].name}</h1>
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
        let checkboxs = document.querySelectorAll('.item_input')
        let delCh = $(':checkbox:checked')
        
        for (i = 0; i < delCh.length; i++) {
            let y = delCh[i].id
            $(`#${y}`).fadeOut(1250)
        }
        $('#')
        setTimeout(() => {
            for (i = 0; i < delCh.length; i++) {
                let y = delCh[i].id
                $(`#${y}`).remove()
            }
        }, 1250)
        
    })
}