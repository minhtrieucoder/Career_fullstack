// Thong tin nguoi dung dang dang nhap
const globalUser = JSON.parse(sessionStorage.getItem('globalUser'));
console.log(globalUser);


const info_user = document.getElementById('info-user');
info_user.innerHTML = `<span>
                            <p class="name"><b>account information</b></p>
                            <p class="name">Username: ${globalUser.userName}</p>
                            <p class="name">Role: Recruiters</p>
                            <p class="name">Full name: ${globalUser.fullname}</p>
                        </span>`;
                        

// Xử lý phần list jobs
const urlGetAllJob = 'https://localhost:7005/backend-api/Jobs/GetAllJob';
let jobs = document.getElementById('jobs-js');

fetch(urlGetAllJob)
.then(res => res.json())
.then(data => {
    console.log(data);
    let count = 0;
    data.forEach(job => {
        if (job.hr == globalUser.id) {
            count++;
            jobs.innerHTML += `<div class="job-item">
                                    <p class="jobQuantity">${count}</p>

                                    <p class="jobTitle">${job.jobTitle}</p>

                                    <p class="jobType">${job.jobType}</p>

                                    <p class="jobLocation">${job.jobLocation}</p>

                                    <p class="jobCategory">${job.jobCategory}</p>

                                    <span onclick="editJob()" class="btn-edit">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>

                                    <span onclick="deleteJob()" class="btn-delete">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </span>
                                </div>`;
        }
    });
})
// Update va delete job
function editJob() {
    alert('API update job: ')
}
function deleteJob() {
    alert('API delete job: ')

}

// Xử lý phần điều hướng
const banner = document.getElementById('banner');
const pageShowJobs = document.getElementById('showJobs');
const pageCreateJob = document.getElementById('createJob');
const btn_showBanner = document.getElementById('btn-showBanner');
const btn_showJobs = document.getElementById('btn-showJobs');
const btn_createJob = document.getElementById('btn-createJob');

btn_showBanner.addEventListener('click', showBanner)
btn_showJobs.addEventListener('click', showJobs)
btn_createJob.addEventListener('click', createJob)


function showBanner() {
    banner.style.display = 'block';
    pageShowJobs.style.display = 'none';
    pageCreateJob.style.display = 'none';

    btn_showBanner.classList.add('btn-active');
    btn_showJobs.classList.remove('btn-active');
    btn_createJob.classList.remove('btn-active');
}

function showJobs() {
    banner.style.display = 'none';
    pageShowJobs.style.display = 'block';
    pageCreateJob.style.display = 'none';

    btn_showBanner.classList.remove('btn-active')
    btn_showJobs.classList.add('btn-active')
    btn_createJob.classList.remove('btn-active')
}

function createJob() {
    banner.style.display = 'none';
    pageShowJobs.style.display = 'none';
    pageCreateJob.style.display = 'block';
    
    btn_showBanner.classList.remove('btn-active')
    btn_showJobs.classList.remove('btn-active')
    btn_createJob.classList.add('btn-active')
}


// Xu ly phan create job
const btn_saveJob = document.getElementById('btn-saveJob')
btn_saveJob.addEventListener('click', function() {
    alert('Incorrect password ...');
    let inputJobTitle = document.getElementById('inputJobTitle');
    let inputJobCategory = document.getElementById('inputJobCategory');
    let inputJobLevel = document.getElementById('inputJobLevel');
    let inputJobExperience = document.getElementById('inputJobExperience');
    let inputJobType = document.getElementById('inputJobType');
    let inputJobCompany = document.getElementById('inputJobCompany');
    let inputJobLocation = document.getElementById('inputJobLocation');
    let inputJobOfferedSalary = document.getElementById('inputJobOfferedSalary');
    let inputPostedDay = document.getElementById('inputPostedDay');
    let inputExpirationDate = document.getElementById('inputExpirationDate');
    let inputJobDescription = document.getElementById('inputJobDescription');
    let inputJobResponsibility = document.getElementById('inputJobResponsibility');
    let inputJobSkills = document.getElementById('inputJobSkills');
    let inputJobBenefits = document.getElementById('inputJobBenefits');

    fetch('https://localhost:7005/backend-api/Jobs/CreateNewJob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            JobTitle: `${inputJobTitle.value}`,
            JobPostedDay: `${inputPostedDay.value}`,
            JobExpirationDate: `${inputExpirationDate.value}`,
            JobCompany: `${inputJobCompany.value}`,
            JobLocation: `${inputJobLocation.value}`,
            JobType: `${inputJobType.value}`,
            JobLevel: `${inputJobLevel.value}`,
            JobCategory: `${inputJobCategory.value}`,
            JobOfferedSalary: `${inputJobOfferedSalary.value}`,
            JobExperience: `${inputJobExperience.value}`,
            JobDescription: `${inputJobDescription.value}`,
            JobResponsibility: `${inputJobResponsibility.value}`,
            JobSkills: `${inputJobSkills.value}`,
            JobOtherBenefits: `${inputJobBenefits.value}`,
            Hr: `${globalUser.id}`
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("New job created: ", data);
    })
    .catch(error => {
        console.error("Error creating new job: ", error);
    });    
})