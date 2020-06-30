{/* <div class="card">
    <div class="card__column card__column--left">
        <img src="images/account.svg" alt="Account" class="card__img" />
        <div class="card__info">
            <h2 class="card__subtitle">
                <span class="card__subtitle__texts">Account</span>
                <span class="badge badge--primary">New!</span>
            </h2>
            <h2 class="card__title">
                Junior Frontend Developer
          </h2>
            <div class="card__detail">
                <p class="card__detail__item">2d ago</p>
                <p class="card__detail__item">Part Time</p>
                <p class="card__detail__item">USA only</p>
            </div>
        </div>
    </div>
    <div class="card__column card__column--right">
        <span class="card__tag">Frontend</span>
        <span class="card__tag">Junior</span>
        <span class="card__tag">Sass</span>
        <span class="card__tag">React</span>
    </div>
</div> */}


const cardContainer = document.getElementById("card-container");
const sectionFilter = document.getElementById("section__filter");


let filterArray = [];


const tags = (array) => {
    return array.reduce((accum, tag) => {

        return accum + `<span class="card__tag ${filterArray.includes(tag) && "card__tag__active"}" onclick="filter('${tag}')">${tag}</span>`

    }, "");
};


const filter = (tag) => {
    if (filterArray.indexOf(tag) === -1) {
        filterArray.push(tag);
    } else {
        filterArray.splice(filterArray.indexOf(tag), 1);
    }

    let jobsFiltered = jobs.filter(job => {

        return filterArray.every(element => {
            return [
                job.role,
                job.level,
                ...(job.languages || []),
                ...(job.tools || []),
            ].includes(element)
        });
    })

    console.log(filterArray);

    sectionFilter.classList.remove("fade");

    if (filterArray[0] !== undefined) {
        sectionFilter.innerHTML = filterArray.reduce((accum, filter) => {
            return accum +
                `<span class="section__tag">${filter}</span>`
        }, `<button class="section__filter__btn" id="sectionBtn">Clear</button>`);
    }

    if (filterArray[0] === undefined) {
        sectionFilter.classList.add("fade");
    }


    jobsList(jobsFiltered);

    const sectionBtn = document.getElementById("sectionBtn");
    sectionBtn.addEventListener("click", () => {
        jobsList(jobs);
        sectionFilter.classList.add("fade");
        filterArray = [];
    });
};



const jobsList = (jobs) => {
    cardContainer.innerHTML = jobs.reduce((accum, job) => {
        return accum + `
        <div class="card ${isSelected(job)}">
    <div class="card__column card__column--left">
        <img src="${job.logo}" alt="${job.company}" class="card__img" />
        <div class="card__info">
            <h2 class="card__subtitle">
                <span class="card__subtitle__texts">${job.company}</span>
                ${isNew(job)}
                ${isFeatured(job)}
                
            </h2>
            <h2 class="card__title">
                ${job.position}
          </h2>
            <div class="card__detail">
                <p class="card__detail__item">${job.postedAt}</p>
                <p class="card__detail__item">${job.contract}</p>
                <p class="card__detail__item">${job.location}</p>
            </div>
        </div>
    </div>
    <div class="card__column card__column--right">

        ${tags(
            [
                job.role,
                job.level,
                ...(job.languages || []),
                ...(job.tools || []),
            ])}   

    </div>
</div>  `

    }, "")

};

const isSelected = (job) => {
    if (job.new) {
        return `card--selected`
    } else {
        return ""
    }
};

const isNew = (job) => {
    if (job.new) {
        return `<span class="badge badge--primary">New!</span>`
    } else {
        return ""
    }
};

const isFeatured = (job) => {
    if (job.featured) {
        return '<span class="badge badge--black">Featured!</span>'
    } else {
        return ""
    }
};


jobsList(jobs);
