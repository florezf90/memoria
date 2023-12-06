const addCharacter = async(event)=>{
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const race = document.querySelector("#race").value;
    const age = document.querySelector("#age").value;
    const origin = document.querySelector("#origin").value;
    const main_focus = document.querySelector("#main_focus").value;
    const HP = document.querySelector("#HP").value;
    const level = document.querySelector("#level").value;
    const jinx = document.querySelector("#jinx").value;
    const strength = document.querySelector("#strength").value;
    const reflex = document.querySelector("#reflex").value;
    const fortitude = document.querySelector("#fortitude").value;
    const intelligence = document.querySelector("#intelligence").value;
    const charisma = document.querySelector("#charisma").value;

    console.log(name, race, age, origin, main_focus, HP, level, jinx, strength, reflex, fortitude, intelligence, charisma);

    if(name&& race&& age && origin && main_focus && HP && level && jinx && strength && reflex && fortitude && intelligence && charisma){
        const response = await fetch('/api/character/', {
        method: 'POST',
        body: JSON.stringify({ name:name, race_id:race, age:age, origin_id:origin, main_focus_id:main_focus, HP:HP, level:level, jinx:jinx, strength:strength, reflex:reflex, fortitude:fortitude, intelligence:intelligence, charisma:charisma }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
          }
    }
}

const deleteCharacter = async(event)=>{
    console.log(event.target.getAttribute("data-id"))
    const id = event.target.getAttribute("data-id");
    if(id){
        const response = await fetch(`/api/character/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ id:id }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.reload();
          }
    }
}

document.querySelector('#character-list').addEventListener('click', deleteCharacter);
document.querySelector('#create-char-btn').addEventListener('click', addCharacter);