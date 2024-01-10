interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stu1: Student = {
    firstName: 'Mary',
    lastName: 'Jane',
    age: 22,
    location: 'California',
};

const stu2: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'California',
};

type StudentArray = Array<Student>;

const students: StudentArray = [ stu1, stu2 ];


function createHead(table: HTMLTableElement) {
    // function for creating a new table head
    const thead = table.createTHead();
    // inserts row in the head
    const hrow = thead.insertRow();
    
    Object.keys(students[0]).forEach(key => {
        if (key === 'firstName' || key === 'location') {
            // adds a header cell to the table head
            const th = document.createElement('th');
            th.textContent = key;
            // parentNode.appendChild(childNode)
            hrow.appendChild(th);
        }
    });
}

function renderTable() {
    // table
    const table = document.createElement('table');
    // header
    createHead(table);
    // body
    const tbody = document.createElement('tbody');

    students.forEach(elem => {
        const tr = tbody.insertRow();
        // explicitly defining property types for ts
        const firstName: string = elem.firstName;
        const location: string = elem.location;
        // including only first name and location in data
        [firstName, location].forEach(val => {
        const td = document.createElement('td');
        td.textContent = val.toString();
        tr.appendChild(td);
        });
    });
    table.append(tbody);
    document.body.appendChild(table);
}

renderTable();
