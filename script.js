const page_buttons_selector = document.getElementById("page_buttons_selector");
const previous_buttons = document.getElementById("prev_button");
const next_buttons = document.getElementById("next_button");

const page_number = 20;
let page_number_array = [];
let index_number_active = 0;

function addButton(value, active = false){
    if(active){
        return `<button class="active" onclick="choose_page(${value})">${value}</button>`;
    }else{
        return `<button onclick="choose_page(${value})">${value}</button>`;
    }

}

function display_numbers_pages(){
    let pagination = addButton(page_number_array[0], (index_number_active === 1));
    if(index_number_active < 4){
        pagination += addButton(page_number_array[1], (index_number_active === 2));
        pagination += addButton(page_number_array[2], (index_number_active === 3));
        pagination += addButton(page_number_array[3], (index_number_active === 4));
        pagination += "...";
    }else if(index_number_active >= 4 && index_number_active <= page_number - 3){
        pagination += "...";
        pagination += addButton(page_number_array[index_number_active - 2]);
        pagination += addButton(page_number_array[index_number_active - 1], true);
        pagination += addButton(page_number_array[index_number_active]);
        pagination += "...";
    }else if(index_number_active > page_number - 3){
        pagination += "...";
        pagination += addButton(page_number_array.slice(-4)[0], (index_number_active === page_number_array.slice(-4)[0]));
        pagination += addButton(page_number_array.slice(-3)[0], (index_number_active === page_number_array.slice(-3)[0]));
        pagination += addButton(page_number_array.slice(-2)[0], (index_number_active === page_number_array.slice(-2)[0]));
    }
    pagination += addButton(page_number_array.slice(-1), (index_number_active === page_number_array.slice(-1)[0]));
    return pagination;
}

function choose_page(value){
    console.log(value);
    index_number_active = value;
    page_buttons_selector.innerHTML = display_numbers_pages();
}

function previous(){
    if(index_number_active > 0){
        index_number_active = index_number_active - 1;
    }
    page_buttons_selector.innerHTML = display_numbers_pages();
}

function next(){
    if(index_number_active < page_number){
        index_number_active++;
    }
    page_buttons_selector.innerHTML = display_numbers_pages();
}

for(let i = 0; i < page_number; i++){
    page_number_array.push(i+1);
}

page_buttons_selector.innerHTML = display_numbers_pages();
previous_buttons.onclick = previous;
next_buttons.onclick = next;