// Thong tin nguoi dung dang dang nhap
const globalUser = JSON.parse(sessionStorage.getItem('globalUser'));
console.log(globalUser);



// Xử lý phần list jobs
const urlGetAllJob = 'https://localhost:7005/backend-api/Jobs/GetAllJob';
let jobs = document.getElementById('jobs-js');

fetch(urlGetAllJob)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(job => {
        jobs.innerHTML += `<div class="job-item">
                                <div class="job-header">
                                    <div class="row">
                                        <p class="jobTitle">${job.jobTitle}</p>
                                        <p class="btn-see">Open job</p>
                                    </div>
                                    <div class="row">
                                        <p class="jobCategory">${job.jobCategory}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-third">
                                            <span class="jobLocation">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <p>${job.jobLocation}</p>
                                            </span>
                                            <span class="jobExpirationDate">
                                                <i class="fa-solid fa-calendar-days"></i>
                                                <p>Expiration: ${job.jobExpirationDate}</p>
                                            </span>
                                        </div>

                                        <div class="col-third">
                                            <span class="jobType">
                                                <i class="fa-solid fa-clock"></i>
                                                <p>${job.jobType}</p>
                                            </span>
                                            <span class="jobLevel">
                                                <i class="fa-solid fa-user"></i>
                                                <p>${job.jobLevel}</p>
                                            </span>
                                        </div>

                                        <div class="col-third">
                                            <span class="jobExperience">
                                                <i class="fa-solid fa-chart-simple"></i>
                                                <p>${job.jobExperience}</p>
                                            </span>
                                            <span class="jobOfferedSalary">
                                                <i class="fa-solid fa-money-check"></i>
                                                <p>${job.jobOfferedSalary}</p>
                                            </span>
                                        </div>
                                    </div>                            
                                </div>
                                <div class="job-main">
                                        <span>
                                            <h4>Job Company</h4>
                                            <p>${job.jobCompany}</p>
                                        </span>
                                        <span>
                                            <h4>Job Description</h4>
                                            <p>${job.jobDescription}</p>
                                        </span>
                                        <span>
                                            <h4>Key Responsibilitiess</h4>
                                            <p>${job.jobResponsibility}</p>
                                        </span>
                                        <span>
                                            <h4>Why You'll Love Working Here</h4>
                                            <p>${job.jobBenefits}</p>
                                        </span>
                                        <span>
                                            <h4>Job Skills</h4>
                                            <p>${job.jobSkills}</p>
                                        </span>
                                    </div>
                            </div>`;
    });
    // Xu ly phan btn-see
    const btn_sees = document.getElementsByClassName('btn-see');
    const job_main = document.getElementsByClassName('job-main');
    let jobShow = [];
    for (let index = 0; index < btn_sees.length; index++) {
        jobShow[index] = false;
    }
    for (let index = 0; index < btn_sees.length; index++) {
        const btn_see = btn_sees[index];
        btn_see.addEventListener('click', function() {
            if (jobShow[index] == false) {
                jobShow[index] = true;
                job_main[index].classList.add('job-main-show');
                btn_see.innerHTML = 'Close job';
            }
            else {
                jobShow[index] = false;
                job_main[index].classList.remove('job-main-show');
                btn_see.innerHTML = 'Open job';
            }        
        })    
    }
})



// Xử lý phần lọc theo danh mục - category
let listCategoryItems = document.getElementsByClassName('cate');
let listCategoryFilter = "";

function filterByCategory() {
    listCategoryFilter = "";
    for (let i = 0; i < listCategoryItems.length; i++) {
        const categoryItem = listCategoryItems[i];
        if (categoryItem.checked == true) {
            listCategoryFilter += categoryItem.value + ",";
        }
    }
    console.log(listCategoryFilter);
    filterFull();
}


// Xử lý phần lọc theo loại - type
let listTypeItems = document.getElementsByClassName('type');
let listTypeFilter = "";
let checkActionType = [];
for (let i = 0; i < listTypeItems.length; i++) {
    checkActionType[i] = false;
}
function filterByType(index) {
    listTypeFilter = "";
    if (checkActionType[index]) {
        checkActionType[index] = false;
        listTypeItems[index].classList.remove('active')
    }
    else {
        checkActionType[index] = true;
        listTypeItems[index].classList.add('active')
    }

    for (let i = 0; i < listTypeItems.length; i++) {
        if (checkActionType[i]) {
            const typeItem = listTypeItems[i];
            listTypeFilter += typeItem.innerHTML + ",";
        }        
    }
    console.log(listTypeFilter);
    filterFull();
}

// Xử lý phần lọc theo vị trí - location
let listLocationItems = document.getElementsByClassName('loca');
let listLocationFilter = "";
let checkActionLocation = [];
for (let i = 0; i < listLocationItems.length; i++) {
    checkActionLocation[i] = false;
}
function filterByLocation(index) {
    listLocationFilter = "";
    if (checkActionLocation[index]) {
        checkActionLocation[index] = false;
        listLocationItems[index].classList.remove('active')
    }
    else {
        checkActionLocation[index] = true;
        listLocationItems[index].classList.add('active')
    }

    for (let i = 0; i < listLocationItems.length; i++) {
        if (checkActionLocation[i]) {
            const locationItem = listLocationItems[i];
            listLocationFilter += locationItem.innerHTML + ",";
        }
    }
    console.log(listLocationFilter);
    filterFull();
}


// Xử lý phần lọc theo cấp độ - level
let listLevelItems = document.getElementsByClassName('level');
let listLevelFilter = "";
let checkActionLevel = [];
for (let i = 0; i < listLevelItems.length; i++) {
    checkActionLevel[i] = false;
}
function filterByLevel(index) {
    listLevelFilter = "";
    if (checkActionLevel[index]) {
        checkActionLevel[index] = false;
        listLevelItems[index].classList.remove('active')
    }
    else {
        checkActionLevel[index] = true;
        listLevelItems[index].classList.add('active')
    }

    for (let i = 0; i < listLevelItems.length; i++) {
        if (checkActionLevel[i]) {
            const levelItem = listLevelItems[i];
            listLevelFilter += levelItem.innerHTML + ",";
        }        
    }
    console.log(listLevelFilter);
    filterFull();
}


let listResult = [];
let filterCount;
async function filterFull() {
    jobs.innerHTML = "";
    listResult = [];
    filterCount = 0;

    const urlFilterByType = `https://localhost:7005/backend-api/FilterJobs/FilterByType/byType?types=${listTypeFilter}`;
    const urlFilterByLocation = `https://localhost:7005/backend-api/FilterJobs/FilterByLocation/byLocation?locations=${listLocationFilter}`;
    const urlFilterByLevel = `https://localhost:7005/backend-api/FilterJobs/FilterByLevel/byLevel?levels=${listLevelFilter}`;
    const urlFilterByCategory = `https://localhost:7005/backend-api/FilterJobs/FilterByCategory/byCategory?categories=${listCategoryFilter}`;

    // console.log(uriFilterByType);
    // console.log(urlFilterByLocation);
    // console.log(urlFilterByLevel);
    // console.log(urlFilterByCategory);

    if (listTypeFilter != "") {
        let data = await fetch(urlFilterByType).then(res => res.json());
        data.forEach(job => {
            listResult.push(job)
        });            
        filterCount++;
    }

    if (listLocationFilter != "") {
        let data = await fetch(urlFilterByLocation).then(res => res.json());
        data.forEach(job => {
            listResult.push(job)
        });
        filterCount++;
    }

    if (listLevelFilter != "") {
        let data = await fetch(urlFilterByLevel).then(res => res.json());
        data.forEach(job => {
            listResult.push(job)
        });
        filterCount++;
    }

    if (listCategoryFilter != "") {
        let data = await fetch(urlFilterByCategory).then(res => res.json());
        data.forEach(job => {
            listResult.push(job)
        });
        filterCount++;
    }

    filterResult(filterCount);
}

function filterResult(index) {
    if (index == 2 || index == 3 || index == 4) {
        for (let i = 0; i < listResult.length - 1; i++) {
            let temp = 1;
            for (let j = i + 1; j < listResult.length; j++) {
                if (listResult[i].id  == listResult[j].id) {
                    temp++;
                }
            }
            if (temp == index) {
                jobs.innerHTML += `<div class="job-item">
                                        <div class="job-header">
                                            <div class="row">
                                                <p class="jobTitle">${listResult[i].jobTitle}</p>
                                                <p class="btn-see">Open job</p>
                                            </div>
                                            <div class="row">
                                                <p class="jobCategory">${listResult[i].jobCategory}</p>
                                            </div>
                                            <div class="row">
                                                <div class="col-third">
                                                    <span class="jobLocation">
                                                        <i class="fa-solid fa-location-dot"></i>
                                                        <p>${listResult[i].jobLocation}</p>
                                                    </span>
                                                    <span class="jobExpirationDate">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                        <p>Expiration: ${listResult[i].jobExpirationDate}</p>
                                                    </span>
                                                </div>

                                                <div class="col-third">
                                                    <span class="jobType">
                                                        <i class="fa-solid fa-clock"></i>
                                                        <p>${listResult[i].jobType}</p>
                                                    </span>
                                                    <span class="jobLevel">
                                                        <i class="fa-solid fa-user"></i>
                                                        <p>${listResult[i].jobLevel}</p>
                                                    </span>
                                                </div>

                                                <div class="col-third">
                                                    <span class="jobExperience">
                                                        <i class="fa-solid fa-chart-simple"></i>
                                                        <p>${listResult[i].jobExperience}</p>
                                                    </span>
                                                    <span class="jobOfferedSalary">
                                                        <i class="fa-solid fa-money-check"></i>
                                                        <p>${listResult[i].jobOfferedSalary}</p>
                                                    </span>
                                                </div>
                                            </div>                            
                                        </div>
                                        <div class="job-main">
                                            <span>
                                                <h4>Job Company</h4>
                                                <p>${listResult[i].jobCompany}</p>
                                            </span>
                                            <span>
                                                <h4>Job Description</h4>
                                                <p>${listResult[i].jobDescription}</p>
                                            </span>
                                            <span>
                                                <h4>Key Responsibilitiess</h4>
                                                <p>${listResult[i].jobResponsibility}</p>
                                            </span>
                                            <span>
                                                <h4>Why You'll Love Working Here</h4>
                                                <p>${listResult[i].jobBenefits}</p>
                                            </span>
                                            <span>
                                                <h4>Job Skills</h4>
                                                <p>${listResult[i].jobSkills}</p>
                                            </span>
                                        </div>
                                    </div>`;
            }
        }
    }

    if(index == 1) {
        listResult.forEach(job => {
            jobs.innerHTML += `<div class="job-item">
                                    <div class="job-header">
                                        <div class="row">
                                            <p class="jobTitle">${job.jobTitle}</p>
                                            <p class="btn-see">Open job</p>
                                        </div>
                                        <div class="row">
                                            <p class="jobCategory">${job.jobCategory}</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-third">
                                                <span class="jobLocation">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <p>${job.jobLocation}</p>
                                                </span>
                                                <span class="jobExpirationDate">
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    <p>Expiration Date: ${job.jobExpirationDate}</p>
                                                </span>
                                            </div>

                                            <div class="col-third">
                                                <span class="jobType">
                                                    <i class="fa-solid fa-clock"></i>
                                                    <p>${job.jobType}</p>
                                                </span>
                                                <span class="jobLevel">
                                                    <i class="fa-solid fa-user"></i>
                                                    <p>${job.jobLevel}</p>
                                                </span>
                                            </div>

                                            <div class="col-third">
                                                <span class="jobExperience">
                                                    <i class="fa-solid fa-chart-simple"></i>
                                                    <p>${job.jobExperience}</p>
                                                </span>
                                                <span class="jobOfferedSalary">
                                                    <i class="fa-solid fa-money-check"></i>
                                                    <p>${job.jobOfferedSalary}</p>
                                                </span>
                                            </div>
                                        </div>                            
                                    </div>
                                    <div class="job-main">
                                        <span>
                                        <h4>Job Company</h4>
                                        <p>${job.jobCompany}</p>
                                        </span>
                                        <span>
                                        <h4>Job Description</h4>
                                        <p>${job.jobDescription}</p>
                                        </span>
                                        <span>
                                        <h4>Key Responsibilitiess</h4>
                                        <p>${job.jobResponsibility}</p>
                                        </span>
                                        <span>
                                        <h4>Why You'll Love Working Here</h4>
                                        <p>${job.jobBenefits}</p>
                                        </span>
                                        <span>
                                        <h4>Job Skills</h4>
                                        <p>${job.jobSkills}</p>
                                        </span>
                                    </div>
                                </div>`;
        });
    }                

    // Xu ly phan btn-see
    const btn_sees = document.getElementsByClassName('btn-see');
    const job_main = document.getElementsByClassName('job-main');
    let jobShow = [];
    for (let index = 0; index < btn_sees.length; index++) {
        jobShow[index] = false;
    }
    for (let index = 0; index < btn_sees.length; index++) {
        const btn_see = btn_sees[index];
        btn_see.addEventListener('click', function() {
            if (jobShow[index] == false) {
                jobShow[index] = true;
                job_main[index].classList.add('job-main-show');
                btn_see.innerHTML = 'Close job';
            }
            else {
                jobShow[index] = false;
                job_main[index].classList.remove('job-main-show');
                btn_see.innerHTML = 'Open job';
            }        
        })    
    }
}