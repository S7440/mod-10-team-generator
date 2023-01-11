let name = ${input}
    //Input must be greater than 0 and requires alpha numeric characters/special symbols?
    //Requests user verification of name.

//id
    //Assigns next available ID number.

//email
    //email must have an @ as well a ending in .placeholder
    //must be longer than 0.

//newEmployee() creates new employee card.
newEmployee() {
    const newCard = document.querySelector('#employee-card')
    const cardEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const idEl = docuent.createElement('li');
    const email = document.createElement('li');

    //getName sets the input and adds an h3 header div with employee name.
    getName() {
        nameEl.textContent(${name});
    };

//getId()
    //getId takes the assigned ID and adds an ID class text with ID number

//getEmail()
    //getEmail takes input email and adds a mailto_ with the input email address.

//getRole() returns `'employee'`
    //getRole on initial creations assigns category of employee for futur deployment of employee/terminated status beyond mvp.
    //getRole then presents you with class options of manager/engineer/intern
        //once selected run selected lib file
};
