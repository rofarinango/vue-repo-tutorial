const firstName = 'Tony'; // Implicit type, typescript inferes the correct type
const lastName = 'Stark';

export const fullName: string = `${firstName} ${lastName}`; // explicit declaration of the type
if ( true ) {
    const firstName = 'Peter';
    console.log("scope internal: ", {firstName})
}

console.log(fullName);