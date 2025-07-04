import { GSign } from 'gsign';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    GSign.echo({ value: inputValue })
}
