var gui = document.querySelector('#gui');

function buildGui(map){
    var table = document.createElement('table')
    map.map.forEach(function(item){
        //console.log(item)
        var row = document.createElement('tr');
        item.forEach(function(column){
            var col = document.createElement('td');
            
            col.classList.add(column.terrain);
            if(column.entity.length > 0){

                col.classList.add('entity');
                column.entity.forEach(function(i){
                    console.log(i)
                    if(i.hero){
                        col.classList.add('hero');
                    }
                })
            }
            row.appendChild(col);
        });
        table.appendChild(row);
    });
    gui.innerHTML = '';
    gui.appendChild(table);
};