//Para tipas nuestros arreglos, lo hacemos por medio
// de una interface.

//Si en la interfaz necesito que algo sea opcional 
// le pongo un simbolo de pregunta

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const skills: string[] = ['Bash','Counter','Healing']; 

const strider : Character = {
    name: 'Strider',
    hp: 100,
    skills  
}

strider.hometown = "Bogota D.C";

console.table(strider);

export {};