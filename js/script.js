"use strict";

const Team = [
    {
        name: 'Wayne Barnette',
        role : 'Founder and Ceo',
        picture:'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role : 'Chief Editor',
        picture:'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role : 'Office Manager',
        picture:'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role : 'Social Media Manager',
        picture:'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role : 'Developer',
        picture:'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role : 'Graphic Designer',
        picture:'barbara-ramos-graphic-designer.jpg'
    },

];
const rowEl = document.querySelector('.row');
console.log(rowEl);


for (let i = 0; i < Team.length; i++) {
    printCol(Team[i]);

}



function printCol(teamMember) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
        <div class="card text-center mt-4">
          <img class="card-img-top" src="img/${teamMember.picture}" alt="Title">
          <div class="card-body">
            <h4 class="card-title">${teamMember.name}</h4>
            <p class="card-text">${teamMember.role}</p>
          </div>
        </div>
    `;
    col.innerHTML = template;
    rowEl.append(col);

}
const newTeam={
    name:'Gianbacucco Romantipippo',
    role:'Mascotte',
    picture:'224196586.jpg'
}

    Team.push(newTeam);
    printCol(newTeam);
    
