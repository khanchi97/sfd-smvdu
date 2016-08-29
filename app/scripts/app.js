'use strict';

/**
 * @ngdoc overview
 * @name sfdSmvduApp
 * @description
 * # sfdSmvduApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sfdSmvduApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'myDirectives',
    'duScroll',
    'timer',
    'firebase'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('CollegesFactory', function(){
  var factory = {};
  factory.colleges = [
    {
      id : 1,
      name : 'Shri Mata Vaishno Devi University',
      place : 'Katra',
      abbr : 'SMVDU'
    },
    {
      id : 2,
      name : 'National Institute of Technology',
      place: 'Srinagar',
      abbr : 'NIT'
    },
    {
      id : 3,
      name : 'Government College of Engineering and Technology',
      place: 'Jammu',
      abbr : 'GCET'
    },
    {
      id : 4,
      name : 'Islamic University of Science and Technology',
      place: 'Pulwama',
      abbr : 'IUST'
    },
    {
      id : 5,
      name : 'Baba Ghulam Shah Badshah University',
      place: 'Jammu',
      abbr : 'BGSBU'
    },
    {
      id : 6,
      name : 'MBS College of Engineering of Technology',
      place: 'Jammu',
      abbr : 'MBSCET'
    },
    {
      id : 7,
      name : 'Sher-e-Kashmir University of Agricultural Sciences and Technology',
      place: 'Jammu',
      abbr : 'SKUAST'
    },
    {
      id : 8,
      name : 'SSM College of Engineering',
      place: 'Baramulla',
      abbr : 'SSMCE'
    },
    {
      id : 9,
      name : 'Yogananda College of Engineering and Technology',
      place: 'Jammu',
      abbr : 'YCET'
    }
  ];

  return factory;
});

app.factory('EventsFactory', function(){

  var factory = {};
  var date12='12th September';
  var date13='13th September';
  var date14='14th September';
  var date15='15th September';
  var date16='16th September';
  var date17='17th September';
  var date18='18th September';    
  var place1 = 'Lecture Hall - D', place2 = 'Lecture Hall - D', place3 = 'Internet Lab';
  var listApart = {
      'time': '',
      'date': '',
      'place': '',
      'title': '',
      'summary': ''
    };

  factory.events = [
      {
      'time':'17:45 - 18:30',
      'date': date12,
      'place': place1,
      'title': 'Inaugural Ceremony(Online Guest Lecture)',
      'organizer': 'XYZ',
      'summary': 'Online Guest Lecture will be conducted'
    },
      listApart,
    {
      'time': '18:30 - 19:45',
      'date': date12,
      'place': place2,
      'title': 'What is FOSS',
      'organizer': 'ABC',
      'summary': 'Brief about Free & Open Source Software'
    },
    listApart,
    {
      'time': '18:00 - 19:45',
      'date': date13,
      'place': place2,
      'title': 'Linux Workshop',
      'organizer': 'ABC',
      'summary': 'Unix/Linux are generally seen as the root of Open' +
      ' Source revolution. Hence, it is a mandatory knowledge for any' +
      ' one who is going to work with computers. Open Source is at the' +
      ' heart of Linux which allows so many programmers all around the' +
      ' globe to make it better by contributing in it.' +
      ' Linux is being used by people not only in computer' +
      ' field but in every field of engineering and even for day to' +
      ' day tasks by non-technical people as well.'
    },
    listApart,
    {
      'time': '18:00 - 19:45',
      'date': date14,
      'place': place2,
      'title': 'Python Workshop',
      'organizer': 'XYZ',
      'summary': 'Python, being one of the most widely used language' + 
      ' with applications in almost every field of computer science is' +
      ' a must for every computer engineer.' + 
      ' Some of our senior students, who already possess good knowledge of' +
      ' Python will be taking up the task of imparting the basic knowledge of Python among students.'
    },
    listApart,
    {
      'time': '18:00 - 19:45',
      'date': date15,
      'place': place2,
      'title': 'Web Technologies',
      'organizer':'ABC',
      'summary': 'This workshop covers the basic technologies like HTML and CSS' +
                 'which are behind every web page on Internet.' + 
                 'HTML stands for Hyper Text Markup Language' + 
                 ' which is the most widely used language on Web to' + 
                 'develop web pages. CSS is used to control the style' + 
                 ' of a web document in a simple and easy way. CSS is the acronym for "Cascading Style Sheet".' 
    },
      listApart,
    {
      'time': '18:00 - 19:45',
      'date': date16,
      'place': place2,
      'title': 'Android Workshop',
      'organizer': 'XYZ',
      'summary': 'Android has revolutionized the mobile computing '+ 
                ' by leveraging the power of open source, considering that '+
                ' Android is itself based on Linux.'+ 
                ' This workshop will give an insight to students about'+ 
                ' basics of android development'
    },
      listApart,
    {
      'time': '14:00 - 16:00',
      'date': date17,
      'place': place2,
      'title': 'Guest Lecture 1',
      'organizer': 'Someone Great 1',
      'summary':'summary .....' 
        
    },
    listApart,
    {
      'time': '16:00 - 17:30',
      'date': date17,
      'place': place2,
      'title': 'Github Workshop',
      'organizer': 'ABC',
      'summary':'In past 6 years Github has turned out to be the' +
      ' most widely used platform for programmers and organizations' +
      ' all around the globe to share and collaborate on open source' +
      ' projects. Created by the father of Linux, Linus Trovalds himself,' +
      ' Github makes the process of contributing to open source world as' +
      ' simple and straight forward as possible. Like Linux it is also a' +
      ' must to know knowledge for any programmer.'
    },
      listApart,
    {
      'time': '18:00 - 20:00',
      'date': date17,
      'place': place2,
      'title': 'Guest Lecture 2',
      'organizer': 'Someone Great 2',
      'summary':'Summary ....'
      
    },
      listApart,
    {
      'time': '10:30 - 10:50',
      'date': date18,
      'place': place3,
      'title': 'Online Quiz Competition',
      'organizer': '',
      'summary': 'This will be an online quiz competition to' +
      ' test the knowledge of participants about open source.' +
      ' Multiple choice questions will be served to participants' +
      ' and the one submitting first and the highest number of correct' +
      ' solutions will be crowned as winner. We’ll have Junior and Senior' +
      ' Sections, considering the fact that Junior students might not be' +
      ' as familiar with open source as Senior students are.' +
      ' This quiz competition will be generic in nature covering' +
      ' all the fields of engineering where open source is used.' +
      ' Maximum Team Members allowed: 2, Time Limit: 20 Minutes' +
      ' No. of Questions: 15 - 20.'
    },
      listApart,
    {
      'time': '11:00 - 11:30',
      'date': date18,
      'place': place3,
      'title': 'Web maker Competition',
      'organizer': '',
      'summary': 'This competition is very beginner friendly which is based on HTML and CSS' +
      '  The students are asked to create a basic web page with HTML and style it with CSS' +
      ' The web page which includes all the HTML elements ' +
      ' as asked and beautifully styled will be the winner.' +
      ' The first three students who complete the task will be winners' +
      ' The task will be based on the web technologies workshop.' +
      ' Time Limit: 30 Minutes.'
    },
      listApart,
    {
      'time': '11:30 - 13:00',
      'date': date18,
      'place': place3,
       'title': 'Git Py',
       'organizer': '',
      'summary':'This competition will check the knowledge of participants' +
      ' about Python and Github. It will be based on the Python and Github' +
      ' Workshops. Each group will be given similar task of creating a python' +
      ' script and then push it on Github and do some Github based operations' +
      ' on it. Team with correct python code, and which takes least time to' +
      ' complete all the Github tasks will be the winner.'+
      ' There will be a maximum of 2 members in a team.' +
      ' Maximum Team Members Allowed: 2, Time Limit: 90 Minutes.'
    },
    listApart,
    {
      'time': '13:00 - 13:20',
      'date': date18,
      'place': place2,
       'title': 'Open Source-The Movie',
       'organizer': '',
      'summary': 'A Short movie on the various open sources resources available.'
    },listApart,
    {
      'time': '14:00 - 16:00',
      'date': date18,
      'place': place1,
       'title': 'Presentation Competition',
       'organizer': '',
      'summary': 'Participating students will give a presentation in a group of '+
                 'two on any topic based on Open Source. It can be about any '+ 
                 'platform, organization and technology. Participants will be '+
                  'evaluated based on their presentation skills, authenticate '+ 
                  'information, understanding of open source, etc.' +
                  ' Maximum Team Members Allowed: 2, Time Limit: 10 - 12 Minutes.'
    },listApart,
    {
      'time': '16:00 - 17:30',
      'date': date18,
      'place': place1,
       'title': 'Closing Ceremony',
       'organizer': '',
      'summary': 'Closing Ceremony and Prize distribution of SFD SMVDU 2016.'
    }
  ];

  return factory;
});

