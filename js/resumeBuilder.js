/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Wian Botha",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0448 417 823",
        "email": "wianbotha@gmail.com",
        "github": "wianb",
        "twitter": "wianb",
        "location": "Sydney, Austrialia"
    },
    "welcomeMessage": "Welcome to my site, this is my portfolio. About me:<br> I'm a BSC IT student that graduated at the University of Queensland.",
    "skills": ["Flying", "Falling", "Fighting"],
    "biopic": "images/fry.jpg",
    display: function() {
        //--------------------------------
        //Bio append
        //--------------------------------
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        //Header
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPicture);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.twitter);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        //topContacts
        $("#topContacts").append(formattedWelcomeMsg);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedBlog);
        $("#topContacts").append(formattedGithub);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#topContacts").append(formattedSkills);
        }
    }
};

var work = {
    "jobs": [{
            "employer": "Test1",
            "title": "Test1",
            "location": "Pretoria, South Africa",
            "dates": "Test1",
            "description": ""
        },
        {
            "employer": "",
            "title": "",
            "location": "",
            "dates": "",
            "description": ""
        },
        {
            "employer": "",
            "title": "",
            "location": "",
            "dates": "",
            "description": ""
        }
    ],
    display: function() {
        //--------------------------------
        //Work append
        //--------------------------------
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(formattedWorkEmployer);
            $(".work-entry").append(formattedWorkTitle);
            $(".work-entry").append(formattedWorkDates);
            $(".work-entry").append(formattedWorkLocation);
            $(".work-entry").append(formattedWorkDescription);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "2012, 2013, 2014, 2016",
            "description": "My personal portfolio",
            "images": [{
                    "URL": ""
                },
                {
                    "URL": ""
                },
                {
                    "URL": ""
                }
            ]
        },
        {
            "title": "2800 Habitat",
            "dates": "2016",
            "description": "My personal portfolio",
            "images": [{
                    "URL": ""
                },
                {
                    "URL": ""
                },
                {
                    "URL": ""
                }
            ]
        },
        {
            "title": "Portfolio",
            "dates": "2012 to current",
            "description": "My personal portfolio",
            "images": [{
                    "URL": ""
                },
                {
                    "URL": ""
                },
                {
                    "URL": ""
                }
            ]
        }
    ],
    display: function() {
        //--------------------------------
        //Projects append
        //--------------------------------
        $("#projects").append(HTMLprojectStart);

        for (var i = 0; i < projects.projects.length; i++) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedProjectimages = "";
            $(".project-entry").append(formattedProjectTitle);
            $(".project-entry").append(formattedProjectDates);
            $(".project-entry").append(formattedProjectDescription);

            //Append each image
            for (var x = 0; x < projects.projects[i].images.length; x++) {
                formattedProjectimages = HTMLprojectImage.replace("%data%", projects.projects[i].images[x].URL);
                $(".project-entry").append(formattedProjectimages);
            }
        }
    }


};

var education = {
    "schools": [{
            "name": "IT",
            "location": "University of Queensland",
            "degree": "BSC",
            "majors": "Software design",
            "dates": "2013 - 2016",
            "url": "www.uq.edu.au"
        },
        {
            "name": "IT",
            "location": "University of Queensland",
            "degree": "BSC",
            "majors": "Software design",
            "dates": "2013 - 2016",
            "url": "www.uq.edu.au"
        }
    ],

    "onlineCourses": [{
            "title": "Front end web development",
            "school": "Udacity",
            "dates": "2016 - 2017",
            "url": "www.udacity.com"
        }


    ],

    display: function() {
        //--------------------------------
        //Education append
        //--------------------------------

        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            //Insert URL
            formattedschoolName.replace("#", education.schools[i].url);

            //Insert into Div
            $(".education-entry").append(formattedschoolName);
            $(".education-entry").append(formattedschoolDegree);
            $(".education-entry").append(formattedschoolDates);
            $(".education-entry").append(formattedschoolLocation);
            $(".education-entry").append(formattedschoolMajor);

        }
        //H3 Heading
        $("#education").append(HTMLonlineClasses);
        for (var n = 0; n < education.onlineCourses.length; n++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[n].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[n].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[n].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[n].url);
            $(".education-entry").append(formattedOnlineTitle);
            $(".education-entry").append(formattedOnlineSchool);
            $(".education-entry").append(formattedOnlineDates);
            $(".education-entry").append(formattedOnlineURL);

        }
    }
};

//Call Functions
bio.display();
work.display();
projects.display();
education.display();



//Google Maps append div
$("#mapDiv").append(googleMap);

console.log(initializeMap().locationFinder);

//Locations variable


var locations = initializeMap().locationFinder();
console.log('Locations ' + locations);
pinPoster(locations);