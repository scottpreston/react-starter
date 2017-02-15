var j = require('jquery');
import css from './my.css';

j.getJSON('http://scottpreston.github.io/html/data.json', ((data) => List.show(data.list)));

class List {
    static show(list) {
        var l = list.map((item) => `${item.name} - ${item.email}<br/>`);
        j('#myList').html(l);
    } 
}