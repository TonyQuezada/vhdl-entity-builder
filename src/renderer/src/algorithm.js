// function to build the entity's port list
// receives entity name and architecture name as strings
// receives ports as an array of objects
export const codeFiller = (ports, entityName, architectureName) => {
    // default values
    let entity = ``
    if(entityName === "" || entityName === undefined)
        entityName = "my_entity"
    if(architectureName === "" || architectureName === undefined)
        architectureName = "behavioral"

    let maxPortString = 0

    // delete objects with empty properties
    ports = ports.filter((port) => { return !(port["portName"] === "" || (port["isBus"] === true && (port["msb"] === "" || port["lsb"] === "")) ) })

    // check every portName and get the max lenght of said ports
    // This will be useful later for a cleaner format
    for(let [i, port] of ports.entries()){
        if(port["portName"].length > maxPortString)
            maxPortString = port["portName"].length
    }

    // fill the entity template with ports
    for(let [i, port] of ports.entries()){

        // FORMAT:
        // if BUS:
        //      portName : direction std_logic_vector(msb downto lsb);
        // if not BUS:
        //      portName : direction std_logic;
        // if the port is the last one, don't include semicolon nor linebreak

        entity = `${entity}\t\t${port["portName"].padEnd(maxPortString)} : ${port["direction"]} `
        
        if(i === ports.length-1){
            if(port["isBus"] === true)
                entity = `${entity}std_logic_vector(${port["msb"]} downto ${port["lsb"]})`
            else
                entity = `${entity}std_logic`
        }
        else{
            if(port["isBus"] === true)
                entity = `${entity}std_logic_vector(${port["msb"]} downto ${port["lsb"]});\n`
            else
                entity = `${entity}std_logic;\n`
        }
        
    }

    return  (
`library ieee;
use ieee.std_logic_1164.all;

entity ${entityName} is
    port(
${entity}
    );
end ${entityName};

architecture ${architectureName} of ${entityName} is

begin

end ${architectureName};`
    )
}

export const saveToFile = (content, fileName) => {
    if(fileName === "" || fileName === undefined)
        fileName = "my_entity.vhd"
    else
        fileName = `${fileName}.vhd`
    
    const blob = new Blob([content], { type: 'application/vhd' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

export const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
}

// // test
// let code = codeFiller("hola", "prueba", [
//     {
//         "id": 1,
//         "portName": "Asdsd",
//         "direction": "in",
//         "isBus": false,
//         "msb": "",
//         "lsb": ""
//     },
//     {
//         "id": 2,
//         "portName": "Bddddddddddddddddddd",
//         "direction": "out",
//         "isBus": true,
//         "msb": "7",
//         "lsb": "0"
//     },
//     {
//         "id": 3,
//         "portName": "C",
//         "direction": "in",
//         "isBus": true,
//         "msb": "3",
//         "lsb": "0"
//     },
//     {
//         "id": 4,
//         "portName": "C",
//         "direction": "in",
//         "isBus": true,
//         "msb": "",
//         "lsb": ""
//     },
//     {
//         "id": 5,
//         "portName": "",
//         "direction": "in",
//         "isBus": false,
//         "msb": "3",
//         "lsb": "0"
//     },
//     {
//         "id": 6,
//         "portName": "",
//         "direction": "in",
//         "isBus": true,
//         "msb": "",
//         "lsb": ""
//     },
// ])

// console.log(code)