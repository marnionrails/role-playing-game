import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import {charTypeSelect, confirmCharacter} from './scenarios.js'

const progression = [charTypeSelect,confirmCharacter];

$(document).ready(function () {
    //let int = 0
    // $('pre#result').text('Welcome to:\n\n ▄▄▄██▀▀▀▓█████   ██████ ▄▄▄█████▓ ▒█████   ██▓███   ▒█████   ██▓     ██▓  ██████ \n   ▒██   ▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒▒██▒  ██▒▓██░  ██▒▒██▒  ██▒▓██▒    ▓██▒▒██    ▒ \n   ░██   ▒███   ░ ▓██▄   ▒ ▓██░ ▒░▒██░  ██▒▓██░ ██▓▒▒██░  ██▒▒██░    ▒██▒░ ▓██▄   \n▓██▄██▓  ▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ ▒██   ██░▒██▄█▓▒ ▒▒██   ██░▒██░    ░██░  ▒   ██▒\n ▓███▒   ░▒████▒▒██████▒▒  ▒██▒ ░ ░ ████▓▒░▒██▒ ░  ░░ ████▓▒░░██████▒░██░▒██████▒▒\n ▒▓▒▒░   ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒░▒░▒░ ▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ▒ ▒▓▒ ▒ ░\n ▒ ░▒░    ░ ░  ░░ ░▒  ░ ░    ░      ░ ▒ ▒░ ░▒ ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░░ ░▒  ░ ░\n ░ ░ ░      ░   ░  ░  ░    ░      ░ ░ ░ ▒  ░░       ░ ░ ░ ▒    ░ ░    ▒ ░░  ░  ░  \n ░   ░      ░  ░      ░               ░ ░               ░ ░      ░  ░ ░        ░  \n\nPlease type your name:')
    $("form").submit(function (event) {
        event.preventDefault();
        progression[1]();
        
        // }
    });
});

