const inputJobTitle = document.getElementById('JobTitle');
const inputJobPostedDay = document.getElementById('JobPostedDay');
const inputJobExpirationDate = document.getElementById('JobExpirationDate');
const inputJobCompany = document.getElementById('JobCompany');
const inputJobLocation = document.getElementById('JobLocation');
const inputJobType = document.getElementById('JobType');
const inputJobLevel = document.getElementById('JobLevel');
const inputJobCategory = document.getElementById('JobCategory');
const inputJobOfferedSalary = document.getElementById('JobOfferedSalary');
const inputJobExperience = document.getElementById('JobExperience');
const inputJobLanguage = document.getElementById('JobLanguage');
const inputJobDescription = document.getElementById('JobDescription');
const inputJobDuties = document.getElementById('JobDuties');
const inputJobSkills = document.getElementById('JobSkills');
const inputJobInterest = document.getElementById('JobInterest');
const inputJobOtherBenefits = document.getElementById('JobOtherBenefits');
const btnSubmit = document.getElementById('submit');




// btnSubmit.addEventListener('click', function() {
//     let valueJobTitle = inputJobTitle.value;
//     let valueJobPostedDay = inputJobPostedDay.value;
//     let valueJobExpirationDate = inputJobExpirationDate.value;
//     let valueJobCompany = inputJobCompany.value;
//     let valueJobLocation = inputJobLocation.value;
//     let valueJobType = inputJobType.value;
//     let valueJobLevel = inputJobLevel.value;
//     let valueJobCategory = inputJobCategory.value;
//     let valueJobOfferedSalary = inputJobOfferedSalary.value;
//     let valueJobExperience = inputJobExperience.value;
//     let valueJobLanguage = inputJobLanguage.value;
//     let valueJobDescription = inputJobDescription.value;
//     let valueJobDuties = inputJobDuties.value;
//     let valueJobSkills = inputJobSkills.value;
//     let valueJobInterest = inputJobInterest.value;
//     let valueJobOtherBenefits = inputJobOtherBenefits.value;
//     console.log(valueJobTitle);
//     console.log(valueJobPostedDay);
//     console.log(valueJobExpirationDate);
//     console.log(valueJobCompany);
//     console.log(valueJobLocation);
//     console.log(valueJobType);
//     console.log(valueJobLevel);
//     console.log(valueJobCategory);
//     console.log(valueJobOfferedSalary);
//     console.log(valueJobExperience);
//     console.log(valueJobLanguage);
//     console.log(valueJobDescription);
//     console.log(valueJobDuties);
//     console.log(valueJobSkills);
//     console.log(valueJobInterest);
//     console.log(valueJobOtherBenefits);
// })



var Show = document.getElementById('show');
// console.log(jobModal);

/**
 * Get data from server
 * Show data
 */
fetch('https://localhost:7005/api/Jobs/GetAllJob')
.then(res => res.json())
.then(data => {
    console.log(data);    
    // btnSubmit.addEventListener('click', function() {
    //     inputJobTitle.value = data[3].jobTitle;
    //     inputJobPostedDay.value = data[3].jobPostedDay;
    //     inputJobExpirationDate.value = data[3].jobExpirationDate;
    //     inputJobCompany.value = data[3].jobCompany;
    //     inputJobLocation.value = data[3].jobLocation;
    //     inputJobType.value = data[3].jobType;
    //     inputJobLevel.value = data[3].jobLevel;
    //     inputJobCategory.value = data[3].jobCategory;
    //     inputJobOfferedSalary.value = data[3].jobOfferedSalary;
    //     inputJobExperience.value = data[3].jobExperience;
    //     inputJobLanguage.value = data[3].jobLanguage;
    //     inputJobDescription.value = data[3].jobDescription;
    //     inputJobDuties.value = data[3].jobDuties;
    //     inputJobSkills.value = data[3].jobSkills;
    //     inputJobInterest.value = data[3].jobInterest;
    //     inputJobOtherBenefits.value = data[3].jobOtherBenefits;
    // })
    var i = 0;
    data.forEach(item => {
        Show.innerHTML += `<div class="job-modal">
                                <a href="">
                                    <label>${i}/ Job Title: ${item.jobTitle}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Posted Day: ${item.jobPostedDay}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Expiration Date: ${item.jobExpirationDate}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Company: ${item.jobCompany}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Location: ${item.jobLocation}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Type: ${item.jobType}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Level: ${item.jobLevel}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Category: ${item.jobCategory}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Offered Salary: ${item.jobOfferedSalary}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Experience: ${item.jobExperience}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Language: ${item.jobLanguage}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Description: ${item.jobDescription}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Duties: ${item.jobDuties}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Skills: ${item.jobSkills}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Interest: ${item.jobInterest}</label>
                                </a>
                                <a href="">
                                    <label>${i}/ Job Other Benefits: ${item.jobOtherBenefits}</label>
                                </a>
                            </div>`
          i++;
    });
});




// const options = ;

/**
 * Post job - send data server
 */
// var jobTitle;
// var jobPostedDay;
// var jobExpirationDate;
// var jobCompany;
// var jobLocation;
// var jobType;
// var jobLevel;
// var jobCategory;
// var jobOfferedSalary;
// var jobExperience;
// var jobLanguage;
// var jobDescription;
// var jobDuties;
// var jobSkills;
// var jobInterest;
// var jobOtherBenefits;


btnSubmit.addEventListener('click', function() {
    fetch('https://localhost:7005/api/Jobs/CreateNewJob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            JobTitle: "Software Engineer",
            JobPostedDay: "2021-01-01",
            JobExpirationDate: "2021-03-01",
            JobCompany: "ACME Inc.",
            JobLocation: "New York",
            JobType: "Full time",
            JobLevel: "Senior",
            JobCategory: "Development",
            JobOfferedSalary: "100,000",
            JobExperience: "5 years",
            JobLanguage: "English",
            JobDescription: "We are looking for a senior software engineer to join our team...",
            JobDuties: "Design and develop new features, maintain existing codebase...",
            JobSkills: "C#, ASP.NET Core, Javascript, Git",
            JobInterest: "Software development, web technologies",
            JobOtherBenefits: "Health insurance, 401k plan"
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

// fetch('https://localhost:7005/api/Jobs/GetAllJob', {
//     method: 'GET',
//     mode: 'no-cors'
// })
// .then(res => res.json())
// .then(data => console.log(data))

// var data = {jobTitle: 'example',
// jobPostedDay: 'example',
// jobExpirationDate: 'example',
// jobCompany: 'example',
// jobLocation: 'example',
// jobType: 'example',
// jobLevel: 'example',
// jobCategory: 'example',
// jobOfferedSalary: 'example',
// jobExperience: 'example',
// jobLanguage: 'example',
// jobDescription: 'example',
// jobDuties: 'example',
// jobSkills: 'example',
// jobInterest: 'example',
// jobOtherBenefits: 'example'};


// fetch('https://localhost:7005/api/Jobs/CreateNewJob', {
//     method: 'POST', 
//     mode: 'no-cors',
//     body: JSON.stringify({JobTitle:"egegbttr",JobPostedDay:"egegbttr",JobExpirationDate:"egegbttr",JobCompany:"egegbttr",JobLocation:"egegbttr",JobType:"egegbttr",JobLevel:"egegbttr",JobCategory:"egegbttr",JobOfferedSalary:"egegbttr",JobExperience:"egegbttr",JobLanguage:"egegbttr",JobDescription:"egegbttr",JobDuties:"egegbttr",JobSkills:"egegbttr",JobInterest:"egegbttr",JobOtherBenefits:"egegbttr"}),
//     headers:{
//       'Content-Type': 'application/json'
//     }
// })

// fetch('https://localhost:7005/apiJobsCreateNewJob', {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},   
//     body: JSON.stringify({"jobTitle":"egegbttr","jobPostedDay":"egegbttr","jobExpirationDate":"egegbttr","jobCompany":"example","jobLocation":"example","jobType":"example","jobLevel":"example","jobCategory":"example","jobOfferedSalary":"example","jobExperience":"example","jobLanguage":"example","jobDescription":"example","jobDuties":"example","jobSkills":"example","jobInterest":"example","jobOtherBenefits":"example"}),
// })
// .catch(error => console.error('Error:', error))

// console.log(JSON.stringify(data))
// .then(res => res.json())
// .then(data => console.log(data))

// fetch('https://localhost:7005/api/Jobs/CreateNewJob', options)
// .then((res) => res.json()).then(data => console.log(data))








// 


