function shadowbox(options) {
    let images = document.querySelectorAll('.shadowbox');
    if(options.shawdow_type == 'hard') options.shawdow_type='0px';
    else options.shawdow_type = '15px';
    images.forEach(image =>{
        image.style.boxShadow = `10px 10px ${options.shawdow_type} 1px rgba(0,0,0,0.12`;
        if(options.padding){
            image.style.padding = '1em';
        }
    })

}
module.export.shadowbox = shadowbox;
