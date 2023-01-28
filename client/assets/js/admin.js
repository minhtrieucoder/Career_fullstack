// Thong tin nguoi dung dang dang nhap
const globalUser = JSON.parse(sessionStorage.getItem('globalUser'));
console.log(globalUser);


const info_user = document.getElementById('info-user');
info_user.innerHTML = `<span>
                            <p class="name"><b>account information</b></p>
                            <p class="name">Username: ${globalUser.userName}</p>
                            <p class="name">Role: Admin</p>
                            <p class="name">Full name: ${globalUser.fullname}</p>
                        </span>`;


// Xử lý phần điều hướng
const banner = document.getElementById('banner');
const pageShowJobs = document.getElementById('showJobs');
const pageCreateJob = document.getElementById('createJob');
const pageManageUsers = document.getElementById('manageUsers');
const btn_showBanner = document.getElementById('btn-showBanner');
const btn_showJobs = document.getElementById('btn-showJobs');
const btn_createJob = document.getElementById('btn-createJob');
const btn_manageUsers = document.getElementById('btn-manageUsers');

btn_showBanner.addEventListener('click', showBanner)
btn_showJobs.addEventListener('click', showJobs)
btn_createJob.addEventListener('click', createJob)
btn_manageUsers.addEventListener('click', manageUsers)

function showBanner() {
    banner.style.display = 'block';
    pageShowJobs.style.display = 'none';
    pageCreateJob.style.display = 'none';
    pageManageUsers.style.display = 'none';

    btn_showBanner.classList.add('btn-active');
    btn_showJobs.classList.remove('btn-active');
    btn_createJob.classList.remove('btn-active');
    btn_manageUsers.classList.remove('btn-active');
}
function showJobs() {
    banner.style.display = 'none';
    pageShowJobs.style.display = 'block';
    pageCreateJob.style.display = 'none';
    pageManageUsers.style.display = 'none';

    btn_showBanner.classList.remove('btn-active')
    btn_showJobs.classList.add('btn-active')
    btn_createJob.classList.remove('btn-active')
    btn_manageUsers.classList.remove('btn-active')
}
function createJob() {
    banner.style.display = 'none';
    pageShowJobs.style.display = 'none';
    pageCreateJob.style.display = 'block';
    pageManageUsers.style.display = 'none';
    
    btn_showBanner.classList.remove('btn-active')
    btn_showJobs.classList.remove('btn-active')
    btn_createJob.classList.add('btn-active')
    btn_manageUsers.classList.remove('btn-active')
}
function manageUsers() {
    banner.style.display = 'none';
    pageShowJobs.style.display = 'none';
    pageCreateJob.style.display = 'none';
    pageManageUsers.style.display = 'block';
    
    btn_showBanner.classList.remove('btn-active')
    btn_showJobs.classList.remove('btn-active')
    btn_createJob.classList.remove('btn-active')
    btn_manageUsers.classList.add('btn-active')
}


// Xử lý phần list jobs - manage jobs
const urlGetAllJob = 'https://localhost:7005/backend-api/Jobs/GetAllJob';
let jobs = document.getElementById('jobs-js');

fetch(urlGetAllJob)
.then(res => res.json())
.then(data => {
    console.log(data);
    let count = 0;
    data.forEach(job => {
        count++;
        jobs.innerHTML += `<div class="job-item">
                                <p class="jobQuantity">${count}</p>
                                <p class="jobTitle">${job.jobTitle}</p>
                                <p class="jobLocation">${job.jobLocation}</p>
                                <p class="jobCompany">${job.jobCompany}</p>  
                                <p class="jobPosterID">${job.hr}</p>                        
                                <span onclick="editJob()" class="btn-edit">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </span>

                                <span onclick="deleteJob()" class="btn-delete">
                                    <i class="fa-solid fa-trash-can"></i>
                                </span>                           
                            </div>`;
    });
})
// Update va delete job
function editJob() {
    alert('API update job: ')
}
function deleteJob() {
    alert('API delete job: ')

}

// Xu ly phan create job
const btn_saveJob = document.getElementById('btn-saveJob')
btn_saveJob.addEventListener('click', function() {
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
        alert("Successful new job creation.")
    })
    .catch(error => {
        console.error("Error creating new job: ", error);
    });
    
})


// Xử lý phần list users - manage users
const btn_showAllUser = document.getElementById('btn-showAllUser');
const btn_showUserAdmin = document.getElementById('btn-showUserAdmin');
const btn_showUserRecruiters = document.getElementById('btn-showUserRecruiters');
const btn_showUserCandidates = document.getElementById('btn-showUserCandidates');
const urlGetAllUser = 'https://localhost:7005/backend-api/Users/GetAllUser'
let users = document.getElementById('users-js');

fetch(urlGetAllUser)
.then(res => res.json())
.then(data => {
    console.log(data);
    showUsers(data, 0);    
    btn_showAllUser.addEventListener('click', function() {
        btn_showAllUser.classList.add('subnav-user-active'); 
        btn_showUserAdmin.classList.remove('subnav-user-active'); 
        btn_showUserRecruiters.classList.remove('subnav-user-active'); 
        btn_showUserCandidates.classList.remove('subnav-user-active');
        showUsers(data, 0);
    })
    btn_showUserAdmin.addEventListener('click', function() {
        btn_showAllUser.classList.remove('subnav-user-active'); 
        btn_showUserAdmin.classList.add('subnav-user-active'); 
        btn_showUserRecruiters.classList.remove('subnav-user-active'); 
        btn_showUserCandidates.classList.remove('subnav-user-active'); 
        showUsers(data, 1);
    })
    btn_showUserRecruiters.addEventListener('click', function() {
        btn_showAllUser.classList.remove('subnav-user-active'); 
        btn_showUserAdmin.classList.remove('subnav-user-active'); 
        btn_showUserRecruiters.classList.add('subnav-user-active'); 
        btn_showUserCandidates.classList.remove('subnav-user-active');
        showUsers(data, 2);
    })
    btn_showUserCandidates.addEventListener('click', function() {
        btn_showAllUser.classList.remove('subnav-user-active'); 
        btn_showUserAdmin.classList.remove('subnav-user-active'); 
        btn_showUserRecruiters.classList.remove('subnav-user-active'); 
        btn_showUserCandidates.classList.add('subnav-user-active');
        showUsers(data, 3);
    })
})

function showUsers(data, index) {
    users.innerHTML = `<div class="user-item">
                            <p class="userID">Account identifier</p>
                            <p class="userUsername">Username</p>
                            <p class="userEmail">Email address</p>
                            <p class="userRole">Role</p>                            
                            <p class="actions">Actions</p>                            
                        </div>`;    
    let roleStr = '';
    data.forEach(user => {
        // Role: phan quyen trang web : 1 - admin / 2 - recruiters / 3 - candidates
        if (user.role == 1)
            roleStr = 'Admin';
        else if (user.role == 2)
            roleStr = 'Recruiters';
        else if (user.role == 3)
            roleStr = 'Candidates';    

        if (index == 0 || (index != 0 && user.role ==  index)) {
            users.innerHTML += `<div class="user-item">
                                    <p class="userID">${user.id}</p>
                                    <p class="userUsername">${user.userName}</p>
                                    <p class="userEmail">${user.emailAddress}</p>
                                    <p class="userRole">${roleStr}</p>
                                    <span class="btn-edit">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>    
                                    <span class="btn-delete">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </span>                        
                                </div>`;
        }
    });        
}

// 
function createAdminAccount() {
    location.replace('http://127.0.0.1:5500/auth/register.html');
}